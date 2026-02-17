import apiClient from "./apiClient";
import axios from "axios";

const API = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:3000";

// -------- Upload avatar/image to Cloudinary --------
export async function uploadTestimonyImage(file) {
  const fd = new FormData();
  fd.append("image", file); // IMPORTANT: must match upload.single("image") on backend

  const res = await axios.post(`${API}/api/upload/image`, fd, {
    headers: { "Content-Type": "multipart/form-data" },
    withCredentials: true,
  });

  return res.data; // expects { url, publicId, width, height, format }
}

// Public: approved-only
export const fetchApprovedTestimonies = async () => {
  const res = await apiClient.get("/api/testimonies?approved=true");
  return res.data;
};

export const createTestimony = async (payload) => {
  const res = await apiClient.post("/api/testimonies", payload);
  return res.data;
};
// added to address avatar upload in SubmitTestimony.jsx
// -------- Create testimony (multipart) --------
export async function createTestimonyFormData(payload) {
  const fd = new FormData();

  fd.append("name", payload.name ?? "");
  fd.append("message", payload.message ?? "");

  // send location as JSON string (your backend parseLocation supports this)
  if (payload.location) {
    fd.append("location", JSON.stringify(payload.location));
  }

  // honeypot
  if (payload.website) fd.append("website", payload.website);

  // response requested
  fd.append("requestResponse", String(!!payload.requestResponse));
  if (payload.requestResponse && payload.contactEmail) {
    fd.append("contactEmail", payload.contactEmail);
  }

  // ✅ If user attached an avatar, upload it first
  if (payload.avatarFile instanceof File) {
    const uploaded = await uploadTestimonyImage(payload.avatarFile);

    // ✅ These match what your testimonies route reads:
    // const { imageUrl, imagePublicId } = req.body;
    fd.append("imageUrl", uploaded.url);
    fd.append("imagePublicId", uploaded.publicId);
  }

  const res = await axios.post(`${API}/api/testimonies`, fd, {
    headers: { "Content-Type": "multipart/form-data" },
    withCredentials: true,
  });

  return res.data;
}

/**
 * ADMIN (requires auth cookie)
 * These routes are mounted under:
 * /api/admin/testimonies  (protected by requireAdminAuth)
 */

export const fetchPendingTestimonies = async () => {
  const res = await apiClient.get("/api/admin/testimonies/pending");
  return res.data;
};

export const approveTestimony = async (id) => {
  const res = await apiClient.patch(`/api/admin/testimonies/${id}/approve`);
  return res.data;
};

export const approveBulk = async (ids) => {
  const res = await apiClient.patch("/api/admin/testimonies/approve-bulk", {
    ids,
  });
  return res.data;
};

export const deleteTestimony = async (id) => {
  const res = await apiClient.delete(`/api/admin/testimonies/${id}`);
  return res.data;
};

export const deleteBulk = async (ids) => {
  // matches: POST /api/admin/testimonies/delete-bulk
  const res = await apiClient.post("/api/admin/testimonies/delete-bulk", {
    ids,
  });
  return res.data;
};
