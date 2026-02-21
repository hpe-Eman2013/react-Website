import apiClient from "./apiClient";

/* ================================
   Upload avatar/image to backend
================================ */

export async function uploadTestimonyImage(file) {
  const fd = new FormData();
  fd.append("image", file); // must match upload.single("image")

  const res = await apiClient.post("/api/upload/image", fd, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return res.data;
  // expected: { url, publicId, width, height, format }
}

/* ================================
   Public Routes
================================ */

// Approved only
export async function fetchApprovedTestimonies() {
  const res = await apiClient.get("/api/testimonies?approved=true");
  return res.data;
}

export async function createTestimony(payload) {
  const res = await apiClient.post("/api/testimonies", payload);
  return res.data;
}

/* -------- Create testimony (multipart) -------- */

export async function createTestimonyFormData(payload) {
  const fd = new FormData();

  fd.append("name", payload.name ?? "");
  fd.append("message", payload.message ?? "");

  if (payload.location) {
    fd.append("location", JSON.stringify(payload.location));
  }

  // honeypot
  if (payload.website) {
    fd.append("website", payload.website);
  }

  // request response
  fd.append("requestResponse", String(!!payload.requestResponse));

  if (payload.requestResponse && payload.contactEmail) {
    fd.append("contactEmail", payload.contactEmail);
  }

  // Upload avatar first if present
  if (payload.avatarFile instanceof File) {
    const uploaded = await uploadTestimonyImage(payload.avatarFile);
    fd.append("imageUrl", uploaded.url);
    fd.append("imagePublicId", uploaded.publicId);
  }

  const res = await apiClient.post("/api/testimonies", fd, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return res.data;
}

/* ================================
   Admin Routes
================================ */

export async function fetchPendingTestimonies() {
  const res = await apiClient.get("/api/admin/testimonies/pending");
  return res.data;
}

export async function approveTestimony(id) {
  const res = await apiClient.patch(`/api/admin/testimonies/${id}/approve`);
  return res.data;
}

export async function approveBulk(ids) {
  const res = await apiClient.patch("/api/admin/testimonies/approve-bulk", {
    ids,
  });
  return res.data;
}

export async function deleteTestimony(id) {
  const res = await apiClient.delete(`/api/admin/testimonies/${id}`);
  return res.data;
}

export async function deleteBulk(ids) {
  const res = await apiClient.post("/api/admin/testimonies/delete-bulk", {
    ids,
  });
  return res.data;
}

/* ================================
   Vote System
================================ */

export async function fetchVoteMap() {
  const res = await apiClient.get("/api/testimonies/votes");
  return res.data;
  // { ok: true, votes: { [id]: "like" | "dislike" } }
}

export async function likeTestimony(id) {
  const res = await apiClient.post(`/api/testimonies/${id}/like`);
  return res.data;
  // { likes, dislikes, userVote }
}

export async function dislikeTestimony(id) {
  const res = await apiClient.post(`/api/testimonies/${id}/dislike`);
  return res.data;
  // { likes, dislikes, userVote }
}

/* DEV ONLY */
export async function resetVotes() {
  const res = await apiClient.post("/api/testimonies/votes/reset");
  return res.data;
}
