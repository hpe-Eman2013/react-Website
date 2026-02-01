import React, { useEffect, useRef, useState } from "react";
import { Field } from "./Field";

export function AvatarUploader({
  id,
  file,
  onFileChange,
  error,
  help = "JPG, PNG, or WebP. Max 4MB.",
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

  function pick() {
    inputRef.current?.click();
  }

  function remove() {
    onFileChange(null);
    if (inputRef.current) inputRef.current.value = "";
  }

  function handleChange(e) {
    const f = e.target.files?.[0];
    if (!f) return;

    const allowed = ["image/jpeg", "image/png", "image/webp"];
    if (!allowed.includes(f.type)) {
      onFileChange({
        file: null,
        error: "Please upload a JPG, PNG, or WebP image.",
      });
      e.target.value = "";
      return;
    }
    if (f.size > maxBytes) {
      onFileChange({
        file: null,
        error: "Image is too large. Please upload a file under 4MB.",
      });
      e.target.value = "";
      return;
    }

    onFileChange({ file: f, error: "" });
  }

  return (
    <fieldset className="tf-fieldset">
      <legend className="tf-legend">Photo (optional)</legend>

      <div className="tf-avatarRow">
        <div className="tf-avatarPreview" aria-hidden="true">
          {previewUrl ? (
            <img src={previewUrl} alt="" className="tf-avatarImg" />
          ) : (
            <div className="tf-avatarPlaceholder">No photo</div>
          )}
        </div>

        <div className="tf-avatarControls">
          <Field id={id} label=" " help={help} error={error}>
            <input className="sr-only" readOnly tabIndex={-1} />
          </Field>

          <div className="tf-avatarBtnRow">
            <button type="button" className="tf-button" onClick={pick}>
              Upload photo
            </button>
            {previewUrl ? (
              <button
                type="button"
                className="tf-button tf-buttonSecondary"
                onClick={remove}
              >
                Remove
              </button>
            ) : null}
          </div>

          <input
            ref={inputRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            className="sr-only"
            tabIndex={-1}
            onChange={handleChange}
          />
        </div>
      </div>
    </fieldset>
  );
}
