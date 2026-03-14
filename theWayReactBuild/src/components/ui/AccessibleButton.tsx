import React from "react";

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  disabled,
  children,
  ...rest
}) => {
  return (
    <button
      {...rest}
      disabled={disabled}
      className={`btn ${rest.className ?? ""} ${
        disabled ? "btn-disabled" : ""
      }`}
    >
      {children}
    </button>
  );
};

export default AccessibleButton;
