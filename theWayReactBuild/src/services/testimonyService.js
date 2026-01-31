import apiClient from "./apiClient";

/**
 * PUBLIC (no auth)
 */

// Public: approved-only
export const fetchApprovedTestimonies = async () => {
  const res = await apiClient.get("/api/testimonies?approved=true");
  return res.data;
};

export const createTestimony = async (payload) => {
  const res = await apiClient.post("/api/testimonies", payload);
  return res.data;
};

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
