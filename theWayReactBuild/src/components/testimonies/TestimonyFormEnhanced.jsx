import React, { useId, useMemo, useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { CountrySelect } from "./CountrySelect";
import { StateProvinceField } from "./StateProvinceField";
import { CityField, PostalCodeField } from "./CityPostalFields";
import { AvatarUploader } from "./AvatarUploader";

export default function TestimonyFormEnhanced({ onSubmit, isSubmitting }) {
  const formId = useId();

  const countries = useMemo(
    () => [
      { code: "US", name: "United States" },
      { code: "CA", name: "Canada" },
      { code: "GB", name: "United Kingdom" },
      { code: "OTHER", name: "Other / Not listed" },
    ],
    [],
  );

  const statesByCountry = useMemo(
    () => ({
      US: [
        { code: "MI", name: "Michigan" },
        { code: "CA", name: "California" },
        { code: "TX", name: "Texas" },
        { code: "NY", name: "New York" },
      ],
      CA: [
        { code: "ON", name: "Ontario" },
        { code: "QC", name: "Québec" },
      ],
      GB: [
        { code: "ENG", name: "England" },
        { code: "SCT", name: "Scotland" },
      ],
    }),
    [],
  );

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [country, setCountry] = useState("US");
  const [stateProvince, setStateProvince] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarError, setAvatarError] = useState("");

  const [errors, setErrors] = useState({});
  const [formError, setFormError] = useState("");
  const [website, setWebsite] = useState("");
  const [requestResponse, setRequestResponse] = useState(false);
  const [contactEmail, setContactEmail] = useState("");
  const contactEmailRef = useRef(null);

  function handleCountryChange(nextCountry) {
    setCountry(nextCountry);

    const options = statesByCountry[nextCountry] || [];
    const hasDropdown = options.length > 0;

    if (hasDropdown) {
      setStateProvince((prev) =>
        options.some((s) => s.code === prev) ? prev : "",
      );
    }
  }

  useEffect(() => {
    if (requestResponse) contactEmailRef.current?.focus();
  }, [requestResponse]);

  function validate() {
    const next = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!message.trim()) next.message = "Please enter your testimony.";

    if (postalCode && postalCode.trim().length < 3) {
      next.postalCode = "Postal code looks too short.";
    }
    if (city && city.trim().length < 2) {
      next.city = "City name looks too short.";
    }

    // Optional: block submit if avatar validation failed
    if (avatarError) {
      next.avatar = avatarError;
    }

    if (requestResponse) {
      const email = (contactEmail || "").trim();
      if (!email)
        next.contactEmail = "Email is required if you request a response.";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        next.contactEmail = "Please enter a valid email address.";
      }
    }

    return next;
  }

  function focusFirstError(nextErrors) {
    const order = [
      "name",
      "message",
      "country",
      "stateProvince",
      "city",
      "postalCode",
      "contactEmail",
    ];

    for (const key of order) {
      if (nextErrors[key]) {
        const el = document.getElementById(`${formId}-${key}`);
        el?.focus?.();
        break;
      }
    }
  }

  function sanitizeStateProvince({
    country: ctry,
    stateProvince: sp,
    statesByCountry: map,
  }) {
    const raw = (sp || "").trim();
    if (!raw) return null;

    const options = map[ctry] || [];
    const hasDropdown = options.length > 0;

    if (hasDropdown) {
      return options.some((s) => s.code === raw) ? raw : null;
    }
    return raw;
  }

  function sanitizeCountry(ctry, list) {
    return list.some((c) => c.code === ctry) ? ctry : "OTHER";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setFormError("");

    const nextErrors = validate();
    const safeCountry = sanitizeCountry(country, countries);

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) {
      focusFirstError(nextErrors);
      return;
    }

    try {
      await onSubmit({
        name: name.trim(),
        message: message.trim(),
        location: {
          country: safeCountry,
          stateProvince: sanitizeStateProvince({
            country: safeCountry,
            stateProvince,
            statesByCountry,
          }),
          city: city.trim() || null,
          postalCode: postalCode.trim() || null,
        },
        avatarFile,
        website: website.trim(), // honeypot
        requestResponse,
        contactEmail: contactEmail.trim(),
      });
    } catch {
      setFormError(
        "Something went wrong submitting your testimony. Please try again.",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="tf-card" noValidate>
      {formError ? (
        <div className="tf-alert" role="alert">
          {formError}
        </div>
      ) : null}

      <p className="visually-hidden" aria-live="polite">
        {isSubmitting ? "Submitting testimony" : ""}
      </p>

      {/* Honeypot */}
      <div className="visually-hidden" aria-hidden="true">
        <label htmlFor={`${formId}-website`}>Website</label>
        <input
          id={`${formId}-website`}
          type="text"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <AvatarUploader
        file={avatarFile}
        error={avatarError}
        onFileChange={(res) => {
          if (!res) {
            setAvatarFile(null);
            setAvatarError("");
            return;
          }
          setAvatarFile(res.file || null);
          setAvatarError(res.error || "");
        }}
      />

      {/* Name */}
      <div className="mb-3">
        <label className="form-label" htmlFor={`${formId}-name`}>
          Name <span aria-hidden="true">*</span>
        </label>

        <input
          id={`${formId}-name`}
          className={`form-control ${errors.name ? "is-invalid" : ""}`}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
        />

        {errors.name ? (
          <div className="invalid-feedback">{errors.name}</div>
        ) : null}
      </div>

      {/* Location */}
      <fieldset className="tf-fieldset">
        <legend className="tf-legend">Location (optional)</legend>

        <CountrySelect
          id={`${formId}-country`}
          value={country}
          onChange={handleCountryChange}
          countries={countries}
          error={errors.country}
        />

        <StateProvinceField
          id={`${formId}-stateProvince`}
          countryCode={country}
          value={stateProvince}
          onChange={setStateProvince}
          statesByCountry={statesByCountry}
          error={errors.stateProvince}
        />

        <div className="row">
          <div className="col-md-6">
            <CityField
              id={`${formId}-city`}
              value={city}
              onChange={setCity}
              error={errors.city}
            />
          </div>

          <div className="col-md-6">
            <PostalCodeField
              id={`${formId}-postalCode`}
              value={postalCode}
              onChange={setPostalCode}
              error={errors.postalCode}
            />
          </div>
        </div>
      </fieldset>

      {/* Message */}
      <div className="mt-4">
        <label className="form-label" htmlFor={`${formId}-message`}>
          Testimony <span aria-hidden="true">*</span>
        </label>

        <textarea
          id={`${formId}-message`}
          className={`form-control ${errors.message ? "is-invalid" : ""}`}
          rows={6}
          placeholder="Share your testimony here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-invalid={Boolean(errors.message)}
        />

        {errors.message ? (
          <div className="invalid-feedback">{errors.message}</div>
        ) : (
          <div className="form-text">
            Please avoid sharing private info (phone, address, banking details).
          </div>
        )}
      </div>

      {/* Response requested */}
      <div className="mb-3 form-check mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          id={`${formId}-requestResponse`}
          checked={requestResponse}
          onChange={(e) => setRequestResponse(e.target.checked)}
        />
        <label
          className="form-check-label"
          htmlFor={`${formId}-requestResponse`}
        >
          I would like a response
        </label>
      </div>

      {requestResponse ? (
        <div className="mb-3">
          <label className="form-label" htmlFor={`${formId}-contactEmail`}>
            Email for response <span aria-hidden="true">*</span>
          </label>
          <input
            ref={contactEmailRef}
            id={`${formId}-contactEmail`}
            className={`form-control ${errors.contactEmail ? "is-invalid" : ""}`}
            type="email"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
            autoComplete="email"
            aria-invalid={Boolean(errors.contactEmail)}
          />
          {errors.contactEmail ? (
            <div className="invalid-feedback">{errors.contactEmail}</div>
          ) : (
            <div className="form-text">
              We’ll only use this to reply to your request.
            </div>
          )}
        </div>
      ) : null}

      <div className="tf-actions">
        <button
          className="btn btn-primary w-100 mt-3"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting…" : "Submit Testimony"}
        </button>
      </div>
    </form>
  );
}

TestimonyFormEnhanced.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool,
};

TestimonyFormEnhanced.defaultProps = {
  isSubmitting: false,
};
