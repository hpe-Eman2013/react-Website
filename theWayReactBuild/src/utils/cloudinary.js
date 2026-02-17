// Inject Cloudinary transformations into a Cloudinary delivery URL.
// Example transform: "w_200,h_200,c_fill,g_face,f_auto,q_auto"

export function toCloudinaryTransformedUrl(url, transform) {
  if (!url || typeof url !== "string") return "";

  // Only transform Cloudinary URLs
  if (!url.includes("/upload/")) return url;

  // If already has a transform, you can decide to keep or replace.
  // We'll *replace* anything between /upload/ and the next /.
  // But safest is: insert transform directly after /upload/ if not present.
  const parts = url.split("/upload/");
  if (parts.length !== 2) return url;

  const [prefix, suffix] = parts;

  // If suffix already begins with something like "w_..." (i.e. transform exists),
  // you can still force our transform by checking first segment.
  // Here we insert ours *before* existing content.
  return `${prefix}/upload/${transform}/${suffix}`;
}
