export function toCloudinaryTransformedUrl(url, opts = {}) {
  if (!url || typeof url !== "string") return "";

  // Only transform Cloudinary URLs that include "/upload/"
  const marker = "/upload/";
  const i = url.indexOf(marker);
  if (i === -1) return url;

  const {
    width,
    height,
    crop = "fill",
    gravity,
    quality = "auto",
    format = "auto",
  } = opts;

  const parts = [];

  if (width) parts.push(`w_${width}`);
  if (height) parts.push(`h_${height}`);
  if (crop) parts.push(`c_${crop}`);
  if (gravity) parts.push(`g_${gravity}`);
  if (quality) parts.push(`q_${quality}`);
  if (format) parts.push(`f_${format}`);

  const transform = parts.join(",");

  // Insert transformation right after /upload/
  return (
    url.slice(0, i + marker.length) +
    transform +
    "/" +
    url.slice(i + marker.length)
  );
}
