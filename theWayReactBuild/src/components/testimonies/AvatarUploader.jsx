import React, { useEffect, useRef, useState } from "react";

export function AvatarUploader({
  file,
  error,
  onFileChange,
  maxBytes = 4 * 1024 * 1024,
}) {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState("");

  useEffect(() => {
    if (!file) {
      setPreviewUrl("");
      return;
    }
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [file]);

  function handleChange(e) {
    const f = e.target.files?.[0];
    if (!f) return;

    const allowed = ["image/jpeg", "image/png", "image/webp"];

    if (!allowed.includes(f.type)) {
      onFileChange?.({
        file: null,
        error: "Please upload a JPG, PNG, or WebP image.",
      });
      e.target.value = "";
      return;
    }
    if (f.size > maxBytes) {
      onFileChange?.({
        file: null,
        error: "Image is too large. Please upload a file under 4MB.",
      });
      e.target.value = "";
      return;
    }

    onFileChange?.({ file: f, error: "" });
  }

  function remove() {
    onFileChange?.({ file: null, error: "" });
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <fieldset className="border rounded-3 p-3 mb-3">
      <legend className="float-none w-auto px-2 fs-6 mb-0">
        Photo (optional)
      </legend>

      <div className="d-flex gap-3 align-items-start flex-wrap">
        {/* Preview */}
        <div
          className="border rounded-3 d-flex align-items-center justify-content-center bg-light"
          style={{ width: 96, height: 96, overflow: "hidden" }}
          aria-hidden="true"
        >
          {previewUrl ? (
            <img
              src={previewUrl}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <span className="text-secondary small text-center px-2">
              No photo
            </span>
          )}
        </div>

        {/* Input + actions */}
        <div style={{ minWidth: 280, flex: 1 }}>
          <label htmlFor="avatarFile" className="form-label">
            Upload a photo
          </label>

          <div className="d-flex gap-2 align-items-center">
            <input
              ref={inputRef}
              id="avatarFile"
              type="file"
              className={`form-control ${error ? "is-invalid" : ""}`}
              accept="image/jpeg,image/png,image/webp"
              onChange={handleChange}
            />

            {previewUrl ? (
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={remove}
              >
                Remove
              </button>
            ) : null}
          </div>

          <div className="form-text">JPG, PNG, or WebP. Max 4MB.</div>

          {error ? (
            <div className="invalid-feedback d-block">{error}</div>
          ) : null}
        </div>
      </div>
    </fieldset>
  );
}
