import React from "react";

interface AccessNoticeProps {
  title: string;
  message: string;
}

const AccessNotice: React.FC<AccessNoticeProps> = ({ title, message }) => {
  return (
    <div className="scriptural-access-notice" role="status" aria-live="polite">
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
};

export default AccessNotice;
