import { useEffect } from "react";

const Toast = ({
  show,
  message,
  variant = "success",
  durationMs = 2500,
  onClose,
}) => {
  useEffect(() => {
    if (!show) return;

    const t = setTimeout(() => {
      onClose?.();
    }, durationMs);

    return () => clearTimeout(t);
  }, [show, durationMs, onClose]); // dependencies

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

export default Toast;
