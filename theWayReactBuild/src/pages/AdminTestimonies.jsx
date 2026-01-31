import { useCallback, useEffect, useState, useMemo } from "react";
import {
  fetchPendingTestimonies,
  fetchApprovedTestimonies,
  approveTestimony,
  approveBulk,
  deleteTestimony,
  deleteBulk,
} from "../services/testimonyService";
import AdminHeader from "../components/admin/AdminHeader";
import BulkActionsBar from "../components/admin/BulkActionsBar";
import PendingTestimonyItem from "../components/admin/PendingTestimonyItem";
import ConfirmModal from "../components/common/ConfirmModal";
import useSelection from "../hooks/useSelection";
import Toast from "../components/common/Toast";
import { useAsyncStatus } from "../hooks/useAsyncStatus";

const AdminTestimonies = () => {
  // Server state
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const [view, setView] = useState("pending"); // "pending" | "approved"
  const isPendingView = view === "pending";

  // Modal state
  const [confirm, setConfirm] = useState({
    show: false,
    mode: "", // "deleteOne" | "deleteBulk"
    id: null,
  });

  // Toast state
  const [toast, setToast] = useState({
    show: false,
    message: "",
    variant: "success",
  });

  const showToast = (message, variant = "success") => {
    setToast({ show: true, message, variant });
  };
  const closeToast = () => setToast((t) => ({ ...t, show: false }));

  // Async status state extracted
  const { status, error, isLoading, isWorking, run, clearError } =
    useAsyncStatus("idle");

  // Selection (UI-only)
  const {
    selectedIds,
    selectedCount,
    allSelected,
    toggleOne,
    toggleAll,
    clear,
    remove,
    selectedArray,
  } = useSelection(items);

  const pendingCount = items.length;
  // Add filtering logic for query of testimonies if needed
  const normalizedQuery = query.trim().toLowerCase();

  const filteredItems = useMemo(() => {
    if (!normalizedQuery) return items;

    return items.filter((t) => {
      // Pick fields that exist in your testimony schema
      // (safe fallbacks so it never crashes)
      const haystack = [
        t?.name,
        t?.email,
        t?.title,
        t?.subject,
        t?.message,
        t?.testimony, // if you store the main body as `testimony`
        t?._id,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return haystack.includes(normalizedQuery);
    });
  }, [items, normalizedQuery]);
  // Add counts based on filtered items
  const shownCount = filteredItems.length;

  const load = useCallback(async () => {
    await run(
      async () => {
        const data = isPendingView
          ? await fetchPendingTestimonies()
          : await fetchApprovedTestimonies();

        setItems(Array.isArray(data) ? data : []);
        clear(); // prevent stale selection when switching tabs / refreshing
      },
      { mode: "loading" },
    );
  }, [run, clear, isPendingView]);

  useEffect(() => {
    load();
  }, [load]);

  const onApproveOne = useCallback(
    async (id) => {
      await run(async () => {
        await approveTestimony(id);
        showToast("Testimony approved.");

        setItems((prev) => prev.filter((t) => t._id !== id));
        remove(id);
      });
    },
    [run, remove],
  );

  const onApproveSelected = useCallback(async () => {
    const ids = Array.from(selectedIds);
    if (ids.length === 0) return;

    await run(async () => {
      await approveBulk(ids);
      showToast(`Approved ${ids.length} testimonies.`);

      setItems((prev) => prev.filter((t) => !selectedIds.has(t._id)));
      clear();
    });
  }, [run, selectedIds, clear]);

  const openDeleteOneConfirm = (id) =>
    setConfirm({ show: true, mode: "deleteOne", id });
  const openDeleteBulkConfirm = () =>
    setConfirm({ show: true, mode: "deleteBulk", id: null });
  const closeConfirm = () => setConfirm({ show: false, mode: "", id: null });

  const onConfirmDelete = useCallback(async () => {
    await run(async () => {
      if (confirm.mode === "deleteOne" && confirm.id) {
        await deleteTestimony(confirm.id);
        showToast("Testimony deleted.", "danger");

        setItems((prev) => prev.filter((t) => t._id !== confirm.id));
        remove(confirm.id);
      }

      if (confirm.mode === "deleteBulk") {
        const ids = selectedArray();
        if (ids.length > 0) {
          await deleteBulk(ids);
          showToast(`Deleted ${ids.length} testimonies.`, "danger");

          setItems((prev) => prev.filter((t) => !selectedIds.has(t._id)));
          clear();
        }
      }

      closeConfirm();
    });
  }, [
    run,
    confirm.mode,
    confirm.id,
    remove,
    selectedArray,
    selectedIds,
    clear,
  ]);

  return (
    <div className="container py-4">
      <AdminHeader
        pendingCount={pendingCount}
        selectedCount={selectedCount}
        onRefresh={load}
        disabled={isLoading || isWorking}
      />
      <div className="card shadow-sm mb-3">
        <div className="card-body py-3">
          <div className="row g-2 align-items-center">
            <div className="col-12 col-md-8">
              <input
                className="form-control"
                placeholder="Search pending testimonies…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                disabled={isLoading}
              />
            </div>

            <div className="col-12 col-md-4 d-flex gap-2 justify-content-md-end">
              {query.trim().length > 0 && (
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setQuery("")}
                  disabled={isLoading}
                >
                  Clear
                </button>
              )}

              <span className="small text-muted align-self-center">
                Showing {shownCount} of {pendingCount}
              </span>
            </div>
          </div>
        </div>
      </div>
      <ul className="nav nav-tabs mb-3">
        <li className="nav-item">
          <button
            type="button"
            className={`nav-link ${view === "pending" ? "active" : ""}`}
            onClick={() => setView("pending")}
            disabled={isLoading || isWorking}
          >
            Pending
          </button>
        </li>

        <li className="nav-item">
          <button
            type="button"
            className={`nav-link ${view === "approved" ? "active" : ""}`}
            onClick={() => setView("approved")}
            disabled={isLoading || isWorking}
          >
            Approved
          </button>
        </li>
      </ul>

      {status === "error" && (
        <div className="alert alert-danger">
          <div className="fw-bold">Admin action failed</div>
          <div className="small">{error?.message ?? String(error ?? "")}</div>
          <button
            type="button"
            className="btn btn-sm btn-outline-light mt-2"
            onClick={clearError}
          >
            Dismiss
          </button>
        </div>
      )}

      {status === "loading" && <div className="alert alert-info">Loading…</div>}

      {status !== "loading" && items.length === 0 && (
        <div className="alert alert-secondary mb-0">
          No pending testimonies.
        </div>
      )}
      {status !== "loading" &&
        items.length > 0 &&
        filteredItems.length === 0 && (
          <div className="alert alert-secondary mb-0">
            No results for “{query}”.
          </div>
        )}

      {items.length > 0 && (
        <div className="card shadow-sm">
          <div className="card-body">
            {isPendingView && (
              <BulkActionsBar
                allSelected={allSelected}
                selectedCount={selectedCount}
                onToggleAll={toggleAll}
                onApproveSelected={onApproveSelected}
                onDeleteSelected={openDeleteBulkConfirm}
                disabled={isWorking}
              />
            )}

            <div className="d-grid gap-3">
              {filteredItems.map((t) => (
                <PendingTestimonyItem
                  key={t._id}
                  testimony={t}
                  checked={selectedIds.has(t._id)}
                  onToggle={() => toggleOne(t._id)}
                  onApprove={
                    isPendingView ? () => onApproveOne(t._id) : undefined
                  }
                  onDelete={() => openDeleteOneConfirm(t._id)}
                  disabled={isWorking}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <ConfirmModal
        show={confirm.show}
        title="Confirm delete"
        message={
          confirm.mode === "deleteBulk"
            ? `Delete ${selectedCount} selected testimony(ies)? This cannot be undone.`
            : "Delete this testimony? This cannot be undone."
        }
        confirmText="Delete"
        confirmVariant="danger"
        onCancel={closeConfirm}
        disabled={isWorking}
        onConfirm={onConfirmDelete}
      />

      <Toast
        show={toast.show}
        message={toast.message}
        variant={toast.variant}
        onClose={closeToast}
      />
    </div>
  );
};

export default AdminTestimonies;
