import apiClient from "@/services/apiClient";

export type ApiResponse<T> = { ok: boolean; message?: string; data?: T };

async function postJson<T>(path: string, body: any): Promise<ApiResponse<T>> {
  try {
    const res = await apiClient.post<ApiResponse<T>>(path, body);

    const data = res.data;
    if (data) return data;

    return { ok: true };
  } catch (err: any) {
    const data = err?.response?.data as ApiResponse<T> | undefined;
    if (data) return data;

    const status = err?.response?.status;
    return {
      ok: false,
      message: `Request failed (${status ?? "network"})`,
    };
  }
}

export function registerUser(input: {
  email: string;
  password: string;
  displayName?: string;
}) {
  return postJson<null>("/api/auth/register", input);
}

export function verifyEmail(input: { email: string; code: string }) {
  return postJson<null>("/api/auth/verify-email", input);
}

export function loginUser(input: { email: string; password: string }) {
  return postJson<{
    user: { id: string; email: string; displayName?: string };
  }>("/api/auth/login", input);
}
