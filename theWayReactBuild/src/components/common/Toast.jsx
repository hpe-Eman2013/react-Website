import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Toast = ({ show, message, variant, durationMs, onClose }) => {
  useEffect(() => {
    if (!show) return;

    const t = setTimeout(() => {
      onClose?.();
    }, durationMs);

    return () => clearTimeout(t);
  }, [show, durationMs, onClose]);

  if (!show) return null;

  return (
    <div
      className="position-fixed bottom-0 end-0 p-3"
      style={{ zIndex: 1100 }}
      aria-live="polite"
      aria-atomic="true"
    >
      <div
        className={`toast show align-items-center text-bg-${variant} border-0`}
      >
        <div className="d-flex">
          <div className="toast-body">{message}</div>
          <button
            type="button"
            className="btn-close btn-close-white me-2 m-auto"
            aria-label="Close"
            onClick={onClose}
          />
        </div>
      </div>
    </div>
  );
};

Toast.propTypes = {
  show: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  variant: PropTypes.string,
  durationMs: PropTypes.number,
  onClose: PropTypes.func.isRequired,
};

Toast.defaultProps = {
  variant: "success",
  durationMs: 2500,
};

export default Toast;
