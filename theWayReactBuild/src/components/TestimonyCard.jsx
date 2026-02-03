const TestimonyCard = ({ testimony }) => {
  const name = testimony?.name?.trim() || "Anonymous";
  const message = testimony?.message || "";

  // Optional fields that may be added later
  const avatarUrl = testimony?.avatarUrl || null;
  const location = testimony?.location || null;

  const locationText =
    location && (location.city || location.stateProvince || location.country)
      ? [location.city, location.stateProvince, location.country]
          .filter(Boolean)
          .join(", ")
      : null;

  return (
    <article className="card shadow-sm" aria-label={`Testimony from ${name}`}>
      <div className="card-body d-flex gap-3">
        {/* Avatar (optional) */}
        <div
          className="flex-shrink-0"
          style={{ width: 56 }}
          aria-hidden={avatarUrl ? "false" : "true"}
        >
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={`Avatar of ${name}`}
              className="rounded-circle border"
              style={{ width: 56, height: 56, objectFit: "cover" }}
              loading="lazy"
            />
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

export default TestimonyCard;
