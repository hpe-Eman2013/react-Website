// src/components/ui/AccordionSection.tsx
import type { ReactNode } from "react";
import { useAccordionGroup } from "./AccordionGroup";

type Props = {
  id: string; // stable key you provide (e.g., "tetragrammaton")
  title: string;
  children: ReactNode;
};

function toSafeDomId(id: string) {
  // Keep ARIA validators happy: only a-z 0-9 _ -
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

  return (
    <div className="acc">
      <button
        id={buttonId}
        type="button"
        className="acc-btn"
        aria-expanded={open ? "true" : "false"}
        aria-controls={contentId}
        onClick={() => setOpenKey(open ? null : safe)}
      >
        <span
          className={`acc-icon ${open ? "is-open" : ""}`}
          aria-hidden="true"
        >
          ▶
        </span>

        <span className="acc-title">{title}</span>
        <span className="acc-action">{open ? "Collapse" : "Expand"}</span>
      </button>

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
