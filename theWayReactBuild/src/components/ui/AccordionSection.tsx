// src/components/ui/AccordionSection.tsx
import type { ReactNode } from "react";
import { useAccordionGroup } from "./AccordionGroup";

type Props = {
  id: string;
  title: string;
  children: ReactNode;
};

function toSafeDomId(id: string) {
  return id
    .toLowerCase()
    .replace(/[^a-z0-9_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function AccordionSection({ id, title, children }: Props) {
  const { openKey, setOpenKey } = useAccordionGroup();

  const safe = toSafeDomId(id);
  const open = openKey === safe;

  const contentId = `acc-content-${safe}`;
  const buttonId = `acc-button-${safe}`;

  const icon = (
    <span className={`acc-icon ${open ? "is-open" : ""}`} aria-hidden="true">
      ▶
    </span>
  );

  const label = <span className="acc-title">{title}</span>;
  const action = (
    <span className="acc-action">{open ? "Collapse" : "Expand"}</span>
  );

  return (
    <div className="acc">
      {open ? (
        <button
          id={buttonId}
          type="button"
          className="acc-btn"
          aria-expanded="true"
          aria-controls={contentId}
          onClick={() => setOpenKey(null)}
        >
          {icon}
          {label}
          {action}
        </button>
      ) : (
        <button
          id={buttonId}
          type="button"
          className="acc-btn"
          aria-expanded="false"
          aria-controls={contentId}
          onClick={() => setOpenKey(safe)}
        >
          {icon}
          {label}
          {action}
        </button>
      )}

      <div
        id={contentId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
        className="acc-content"
      >
        {children}
      </div>
    </div>
  );
}
