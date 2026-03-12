import React, { useState } from "react";

interface ScriptureProps {
  reference: string;
  verse: string;
  source?: string;
  link?: string;
}

export default function ScriptureTooltip({
  reference,
  verse,
  source,
  link,
}: ScriptureProps) {
  const [open, setOpen] = useState(false);

  return (
    <span
      className="scripture-tooltip"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen(!open)}
    >
      {reference}

      {open && (
        <span className="scripture-tooltip__box">
          <strong>{reference}</strong>
          <p>{verse}</p>

          {source && <p className="scripture-tooltip__source">{source}</p>}

          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="scripture-tooltip__link"
            >
              Read full chapter →
            </a>
          )}
        </span>
      )}
    </span>
  );
}
