import React, { useId, useMemo, useState } from "react";
import { CountrySelect } from "./CountrySelect";
import { StateProvinceField } from "./StateProvinceField";
import { CityField, PostalCodeField } from "./CityPostalFields";
import { AvatarUploader } from "./AvatarUploader";

export default function TestimonyFormEnhanced({
  onSubmit,
  isSubmitting = false,
}) {
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
  // in TestimonyFormEnhanced.jsx

  function handleCountryChange(nextCountry) {
    setCountry(nextCountry);

    const options = statesByCountry[nextCountry] || [];
    const hasDropdown = options.length > 0;

    // If dropdown exists and current selection is not valid for that dropdown, clear it.
    if (hasDropdown) {
      setStateProvince((prev) =>
        options.some((s) => s.code === prev) ? prev : "",
      );
    }

    // If dropdown does NOT exist, keep stateProvince as free text (no need to clear).
    // If you want to clear it on country change anyway, do it here intentionally.
  }

  function validate() {
    const next = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!message.trim()) next.message = "Please enter your testimony.";
    if (postalCode && postalCode.trim().length < 3)
      next.postalCode = "Postal code looks too short.";
    if (city && city.trim().length < 2)
      next.city = "City name looks too short.";
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
    ];
    for (const key of order) {
      if (nextErrors[key]) {
        const el = document.getElementById(`${formId}-${key}`);
        el?.focus?.();
        break;
      }
    }
  }
  function sanitizeStateProvince({ country, stateProvince, statesByCountry }) {
    const raw = (stateProvince || "").trim();
    if (!raw) return null;

    const options = statesByCountry[country] || [];
    const hasDropdown = options.length > 0;

    // If we have a dropdown list for the selected country,
    // only accept values that exist in the list.
    if (hasDropdown) {
      return options.some((s) => s.code === raw) ? raw : null;
    }

    // If we don't have a dropdown list, treat it as free-text.
    return raw;
  }
  function sanitizeCountry(country, countries) {
    return countries.some((c) => c.code === country) ? country : "OTHER";
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setFormError("");

    const nextErrors = validate();
    const safeCountry = sanitizeCountry(country, countries);
    setErrors(nextErrors);

    // include avatarError if you want to block submission
    if (Object.keys(nextErrors).length) {
      focusFirstError(nextErrors);
      return;
    }

    try {
      await onSubmit?.({
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

      <AvatarUploader
        id={`${formId}-avatar`}
        file={avatarFile}
        error={avatarError}
        onFileChange={(res) => {
          if (!res) {
            setAvatarFile(null);
            setAvatarError("");
            return;
          }
          setAvatarFile(res.file);
          setAvatarError(res.error || "");
        }}
      />

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
          {/* City */}
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label" htmlFor={`${formId}-city`}>
                City (optional)
              </label>

              <input
                id={`${formId}-city`}
                className={`form-control ${errors.city ? "is-invalid" : ""}`}
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                autoComplete="address-level2"
                aria-invalid={Boolean(errors.city)}
              />

              {errors.city ? (
                <div className="invalid-feedback">{errors.city}</div>
              ) : null}
            </div>
          </div>

          {/* Postal Code */}
          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label" htmlFor={`${formId}-postalCode`}>
                Postal Code (optional)
              </label>

              <input
                id={`${formId}-postalCode`}
                className={`form-control ${errors.postalCode ? "is-invalid" : ""}`}
                type="text"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                autoComplete="postal-code"
                aria-invalid={Boolean(errors.postalCode)}
              />

              {errors.postalCode ? (
                <div className="invalid-feedback">{errors.postalCode}</div>
              ) : (
                <div className="form-text">
                  Format varies by country (e.g., 48104 or SW1A 1AA)
                </div>
              )}
            </div>
          </div>
        </div>
      </fieldset>

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
