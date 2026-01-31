const BulkActionsBar = ({
  allSelected,
  selectedCount,
  onToggleAll,
  onApproveSelected,
  onDeleteSelected,
  disabled,
}) => {
  return (
    <div className="d-flex flex-wrap gap-2 align-items-center mb-3">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="selectAll"
          checked={allSelected}
          onChange={onToggleAll}
        />
        <label className="form-check-label" htmlFor="selectAll">
          Select all
        </label>
      </div>

      <button
        className="btn btn-success"
        onClick={onApproveSelected}
        disabled={selectedCount === 0 || disabled}
      >
        Approve Selected
      </button>

      <button
        className="btn btn-danger"
        onClick={onDeleteSelected}
        disabled={selectedCount === 0 || disabled}
      >
        Delete Selected
      </button>

      <div className="ms-auto text-muted small">
        Approving removes items from this list (pending-only view).
      </div>
    </div>
  );
};

export default BulkActionsBar;
