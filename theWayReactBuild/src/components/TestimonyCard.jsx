import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { toCloudinaryTransformedUrl } from "../../utils/cloudinary"; // adjust path if needed

const TestimonyCard = ({ testimony }) => {
  const name = testimony?.name?.trim() || "Anonymous";
  const message = testimony?.message || "";

  // Prefer Cloudinary imageUrl (new flow). Fall back to avatarUrl if you ever use it.
  const rawAvatar =
    (testimony?.imageUrl && testimony.imageUrl.trim()) ||
    (testimony?.avatarUrl && testimony.avatarUrl.trim()) ||
    "";

  // Build a small circle thumbnail (face-centered if possible)
  const avatarThumb = useMemo(() => {
    if (!rawAvatar) return "";
    // g_face is nice if faces exist; otherwise Cloudinary will still behave fine.
    const transform = "w_200,h_200,c_fill,g_face,f_auto,q_auto";
    return toCloudinaryTransformedUrl(rawAvatar, transform);
  }, [rawAvatar]);

  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  const location = testimony?.location || null;
  const locationText =
    location && (location.city || location.state || location.country)
      ? [location.city, location.state, location.country]
          .filter(Boolean)
          .join(", ")
      : null;

  const showImage = Boolean(avatarThumb) && !imgFailed;

  return (
    <article className="card shadow-sm" aria-label={`Testimony from ${name}`}>
      <div className="card-body d-flex gap-3">
        {/* Avatar */}
        <div className="flex-shrink-0" style={{ width: 56 }}>
          {showImage ? (
            <div
              className="rounded-circle border position-relative overflow-hidden"
              style={{ width: 56, height: 56 }}
            >
              {/* Shimmer placeholder (visible until image loads) */}
              {!imgLoaded && <div className="wom-shimmer" aria-hidden="true" />}

              <img
                src={avatarThumb}
                alt={`Avatar of ${name}`}
                className="w-100 h-100"
                style={{
                  objectFit: "cover",
                  display: imgLoaded ? "block" : "none",
                }}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                onLoad={() => setImgLoaded(true)}
                onError={() => setImgFailed(true)}
              />
            </div>
          ) : (
            <div
              className="rounded-circle border bg-light d-flex align-items-center justify-content-center text-secondary fw-semibold"
              style={{ width: 56, height: 56 }}
              aria-hidden="true"
              title={name}
            >
              {name.charAt(0).toUpperCase()}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="w-100">
          <header className="mb-2">
            <h2 className="h5 mb-1">{name}</h2>
            {locationText ? (
              <div className="small text-secondary">{locationText}</div>
            ) : null}
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
    location: PropTypes.shape({
      country: PropTypes.string,
      state: PropTypes.string,
      city: PropTypes.string,
    }),
  }).isRequired,
};

export default TestimonyCard;
