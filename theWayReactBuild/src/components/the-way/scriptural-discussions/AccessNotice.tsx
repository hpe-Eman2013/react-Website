import React from "react";

interface AccessNoticeProps {
  title: string;
  message: string;
  children?: React.ReactNode;
}

const AccessNotice: React.FC<AccessNoticeProps> = ({
  title,
  message,
  children,
}) => {
  return (
    <div className="scriptural-access-notice" role="status" aria-live="polite">
      <h3 className="scriptural-access-notice__title">{title}</h3>

      <p className="scriptural-access-notice__message">{message}</p>

      {children && (
        <div className="scriptural-access-notice__actions mt-3">{children}</div>
      )}
    </div>
  );
};

export default AccessNotice;
