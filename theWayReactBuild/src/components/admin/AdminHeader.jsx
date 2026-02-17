import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsRotate,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useAdminAuth } from "../../context/useAdminAuth";
import { useNavigate } from "react-router-dom";

const AdminHeader = ({ pendingCount, selectedCount, onRefresh, disabled }) => {
  const { logout } = useAdminAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/admin/login", { replace: true });
  };

  return (
    <div className="d-flex align-items-center justify-content-between mb-3">
      <div>
        <div className="d-flex align-items-center gap-3">
          <h1 className="mb-0">Admin: Pending Testimonies</h1>

          <button
            type="button"
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

          <button
            type="button"
            className="btn btn-outline-danger btn-sm d-flex align-items-center justify-content-center"
            onClick={handleLogout}
            disabled={disabled}
            title="Logout"
            aria-label="Logout"
          >
            <FontAwesomeIcon icon={faRightFromBracket} className="fs-5" />
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

AdminHeader.propTypes = {
  pendingCount: PropTypes.number.isRequired,
  selectedCount: PropTypes.number.isRequired,
  onRefresh: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

AdminHeader.defaultProps = {
  disabled: false,
};

export default AdminHeader;
