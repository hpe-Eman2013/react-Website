const PendingTestimonyItem = ({
  testimony,
  checked,
  onToggle,
  onApprove,
  onDelete,
  disabled,
}) => {
  const createdLabel = testimony.createdAt
    ? new Date(testimony.createdAt).toLocaleString()
    : "";

  return (
    <div className="border rounded p-3">
      <div className="d-flex align-items-start gap-2">
        <input
          className="form-check-input mt-1"
          type="checkbox"
          checked={checked}
          onChange={onToggle}
        />

        <div className="flex-grow-1">
          <div className="fw-semibold">{testimony.name || "Anonymous"}</div>
          <div className="text-muted small mb-2">{createdLabel}</div>
          <div>{testimony.message}</div>
        </div>

        <div className="d-flex gap-2">
          <button
            className="btn btn-sm btn-outline-success"
            onClick={onApprove}
            disabled={disabled}
          >
            Approve
          </button>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={onDelete}
            disabled={disabled}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PendingTestimonyItem;
