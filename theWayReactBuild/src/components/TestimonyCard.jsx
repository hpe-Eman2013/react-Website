import React, { useMemo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { toCloudinaryTransformedUrl } from "../utils/cloudinary";

const TestimonyCard = ({ testimony }) => {
  const name = testimony?.name?.trim() || "Anonymous";
  const message = testimony?.message || "";

  // Prefer Cloudinary imageUrl (DB stores this), then avatarUrl if you still use it
  const rawAvatarUrl = testimony?.imageUrl || testimony?.avatarUrl || "";

  const avatarUrl = useMemo(() => {
    if (!rawAvatarUrl) return "";
    return toCloudinaryTransformedUrl(rawAvatarUrl, {
      width: 112,
      height: 112,
      crop: "fill",
      quality: "auto",
      format: "auto",
    });
  }, [rawAvatarUrl]);

  const [imgOk, setImgOk] = useState(Boolean(avatarUrl));

  // Reset state when URL changes
  useEffect(() => {
    setImgOk(Boolean(avatarUrl));
  }, [avatarUrl]);

  return (
    <article className="card shadow-sm" aria-label={`Testimony from ${name}`}>
      <div className="card-body d-flex gap-3">
        <div className="flex-shrink-0" style={{ width: 56, height: 56 }}>
          {avatarUrl && imgOk ? (
            <img
              src={avatarUrl}
              alt={`Avatar of ${name}`}
              className="rounded-circle border"
              style={{ width: 56, height: 56, objectFit: "cover" }}
              loading="lazy"
              onError={() => setImgOk(false)}
            />
          ) : (
            <div
              className="rounded-circle border bg-light d-flex align-items-center justify-content-center text-secondary fw-semibold"
              style={{ width: 56, height: 56 }}
              title={name}
            >
              {name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>

        <div className="w-100">
          <header className="mb-2">
            <h2 className="h5 mb-1">{name}</h2>
          </header>

          <p className="mb-0" style={{ lineHeight: 1.6, fontSize: "1rem" }}>
            {message}
          </p>
        </div>
      </div>
    </article>
  );
};

TestimonyCard.propTypes = {
  testimony: PropTypes.shape({
    name: PropTypes.string,
    message: PropTypes.string,
    avatarUrl: PropTypes.string,
    imageUrl: PropTypes.string,
  }).isRequired,
};

export default TestimonyCard;
