import React, { useEffect, useMemo, useState } from "react";
import "@/assets/css/admin/AdminMembershipPage.css";
import {
  approveMembershipRequest,
  fetchMembershipRequests,
  rejectMembershipRequest,
  type MembershipRequest,
  type MembershipStatus,
} from "../../services/membershipAdminService";

export default function AdminMembershipPage() {
  const [status, setStatus] = useState<MembershipStatus>("pending");
  const [items, setItems] = useState<MembershipRequest[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [openId, setOpenId] = useState<string | null>(null);

  const openItem = useMemo(
    () => items.find((x) => x._id === openId) || null,
    [items, openId],
  );

  async function load() {
    setLoading(true);
    setError("");
    try {
      const res = await fetchMembershipRequests(status);
      setItems(res.data.items);
    } catch (e: any) {
      setError(e?.message ?? "Failed to load.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  async function onApprove(id: string) {
    if (!confirm("Approve this membership request?")) return;
    try {
      await approveMembershipRequest(id);
      setItems((prev) => prev.filter((x) => x._id !== id));
      if (openId === id) setOpenId(null);
    } catch (e: any) {
      alert(e?.message ?? "Approve failed.");
    }
  }

  async function onReject(id: string) {
    if (!confirm("Reject this membership request?")) return;
    try {
      await rejectMembershipRequest(id);
      setItems((prev) => prev.filter((x) => x._id !== id));
      if (openId === id) setOpenId(null);
    } catch (e: any) {
      alert(e?.message ?? "Reject failed.");
    }
  }

  return (
    <div className="amp-wrap">
      <h1 className="amp-title">Admin — Membership Requests</h1>

      <div className="amp-toolbar">
        <label>
          Status:&nbsp;
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as MembershipStatus)}
          >
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </label>

        <button onClick={load} disabled={loading}>
          {loading ? "Loading..." : "Refresh"}
        </button>

        {error ? <span className="amp-error">{error}</span> : null}
      </div>

      <div className="amp-grid">
        {/* List */}
        <div className="amp-card">
          <h3 className="amp-card-title">Requests ({items.length})</h3>

          {items.length === 0 && !loading ? (
            <div className="amp-muted">No requests.</div>
          ) : (
            <ul className="amp-list">
              {items.map((it) => (
                <li
                  key={it._id}
                  className="amp-row"
                  onClick={() => setOpenId(it._id)}
                >
                  <div className="amp-name">{it.fullName}</div>
                  <div className="amp-email">{it.email}</div>
                  <div className="amp-date">
                    Submitted: {new Date(it.createdAt).toLocaleString()}
                  </div>

                  {status === "pending" ? (
                    <div className="amp-actions">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onApprove(it._id);
                        }}
                      >
                        Approve
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onReject(it._id);
                        }}
                      >
                        Reject
                      </button>
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Detail */}
        <div className="amp-card">
          <h3 className="amp-card-title">Details</h3>

          {!openItem ? (
            <div className="amp-muted">Select a request to view details.</div>
          ) : (
            <div className="amp-detail">
              <div>
                <b>Name:</b> {openItem.fullName}
              </div>
              <div>
                <b>Email:</b> {openItem.email}
              </div>
              <div>
                <b>Phone:</b> {openItem.phone || "-"}
              </div>
              <div>
                <b>City/State:</b> {openItem.cityState || "-"}
              </div>
              <div>
                <b>How Heard:</b> {openItem.howHeard || "-"}
              </div>

              <div>
                <b>Statement:</b>
                <div className="amp-pre">{openItem.statement}</div>
              </div>

              <div>
                <b>Signature:</b>
                <div className="signature">
                  <div>
                    <b>Signed Name:</b> {openItem.signatureName}
                  </div>
                  <div>
                    <b>Consent:</b> {String(openItem.signatureConsent)}
                  </div>
                  <img
                    src={openItem.signatureDataUrl}
                    alt="Signature"
                    className="amp-signature-img"
                  />
                </div>
              </div>

              <div>
                <b>Attachments:</b>
                {openItem.attachments?.length ? (
                  <ul>
                    {openItem.attachments.map((url, idx) => (
                      <li key={idx}>
                        <a href={url} target="_blank" rel="noreferrer">
                          Attachment {idx + 1}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="amp-muted">None</div>
                )}
              </div>

              {status === "pending" ? (
                <div className="amp-actions">
                  <button onClick={() => onApprove(openItem._id)}>
                    Approve
                  </button>
                  <button onClick={() => onReject(openItem._id)}>Reject</button>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
