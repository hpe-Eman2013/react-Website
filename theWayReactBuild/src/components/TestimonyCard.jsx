import React from "react";
import PropTypes from "prop-types";

const TestimonyCard = ({ testimony }) => {
  const name = testimony?.name?.trim() || "Anonymous";
  const message = testimony?.message || "";

  // ✅ Use Cloudinary imageUrl first (what your form is saving),
  // fallback to avatarUrl if you ever use it later.
  const photoUrl =
    testimony?.imageUrl?.trim() || testimony?.avatarUrl?.trim() || "";

  const location = testimony?.location || null;

  const locationText =
    location &&
    (location.city ||
      location.state ||
      location.stateProvince ||
      location.country)
      ? [
          location.city,
          // backend schema uses `state`
          location.state || location.stateProvince,
          location.country,
        ]
          .filter(Boolean)
          .join(", ")
      : null;

  return (
    <article className="card shadow-sm" aria-label={`Testimony from ${name}`}>
      <div className="card-body d-flex gap-3">
        {/* Avatar / Photo */}
        <div className="flex-shrink-0" style={{ width: 56 }}>
          {photoUrl ? (
            <img
              src={photoUrl}
              alt={`Photo of ${name}`}
              className="rounded-circle border"
              style={{ width: 56, height: 56, objectFit: "cover" }}
              loading="lazy"
            />
          ) : (
            <div
              className="rounded-circle border bg-light d-flex align-items-center justify-content-center text-secondary fw-semibold"
              style={{ width: 56, height: 56 }}
              title={name}
              aria-label={`No photo for ${name}`}
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
    imagePublicId: PropTypes.string,
    location: PropTypes.shape({
      country: PropTypes.string,
      state: PropTypes.string, // ✅ backend field
      stateProvince: PropTypes.string, // tolerate legacy
      city: PropTypes.string,
      postalCode: PropTypes.string,
    }),
  }).isRequired,
};

export default TestimonyCard;
