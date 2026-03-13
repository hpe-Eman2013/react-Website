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
    <div className="scripture-tooltip">
      <button
        type="button"
        className="scriptural-prophecy__verse scripture-tooltip__trigger"
        onClick={() => setOpen((prev) => !prev)}
      >
        {reference}
      </button>

      {open && (
        <div className="scripture-tooltip__box">
          <strong>{reference}</strong>
          <p>{verse}</p>

          {source ? (
            <p className="scripture-tooltip__source">{source}</p>
          ) : null}

          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="scripture-tooltip__link"
            >
              Read full chapter →
            </a>
          ) : null}
        </div>
      )}
    </div>
  );
}
