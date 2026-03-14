import React from "react";
import { Link, LinkProps } from "react-router-dom";

interface AccessibleLinkProps extends LinkProps {
  disabled?: boolean;
}

const AccessibleLink: React.FC<AccessibleLinkProps> = ({
  disabled = false,
  children,
  onClick,
  className = "",
  ...rest
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link
      {...rest}
      onClick={handleClick}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : 0}
      className={`${className} ${disabled ? "is-disabled" : ""}`}
    >
      {children}
    </Link>
  );
};

export default AccessibleLink;
