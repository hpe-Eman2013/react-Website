export type ApiResponse<T> = { ok: boolean; message?: string; data?: T };

const API_BASE =
  (import.meta as any).env?.VITE_API_BASE_URL?.replace(/\/$/, "") || "";

async function postJson<T>(path: string, body: any): Promise<ApiResponse<T>> {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include", // ✅ send/receive cookies
    body: JSON.stringify(body),
  });

  const json = (await res.json().catch(() => null)) as ApiResponse<T> | null;

  if (!res.ok) {
    return (
      json ?? {
        ok: false,
        message: `Request failed (${res.status})`,
      }
    );
  }
  return json ?? { ok: true };
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
