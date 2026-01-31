import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

const AdminHeader = ({ pendingCount, selectedCount, onRefresh, disabled }) => {
  return (
    <div className="d-flex align-items-center justify-content-between mb-3">
      {/* LEFT: Title + subtitle */}
      <div>
        <div className="d-flex align-items-center gap-3">
          <h1 className="mb-0">Admin: Pending Testimonies</h1>

          {/* Refresh icon aligned with title */}
          <button
            className="btn btn-outline-secondary btn-sm d-flex align-items-center justify-content-center"
            onClick={onRefresh}
            disabled={disabled}
            title="Refresh"
            aria-label="Refresh"
          >
            <FontAwesomeIcon
              icon={faArrowsRotate}
              spin={disabled}
              className="fs-5"
            />
          </button>
        </div>

        <div className="text-muted small mt-1">
          Pending: <strong>{pendingCount}</strong> · Selected:{" "}
          <strong>{selectedCount}</strong>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
