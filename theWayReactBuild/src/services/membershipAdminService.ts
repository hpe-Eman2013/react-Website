export type MembershipStatus = "pending" | "approved" | "rejected";

export type MembershipRequest = {
  _id: string;

  fullName: string;
  email: string;
  phone?: string;

  cityState?: string;
  howHeard?: string;

  statement: string;

  signatureName: string;
  signatureConsent: boolean;
  signatureDataUrl: string;

  attachments: string[];

  status: MembershipStatus;

  createdAt: string;
  updatedAt: string;
  reviewedAt?: string | null;
};

async function json<T>(res: Response): Promise<T> {
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error((data as any)?.message || "Request failed");
  return data as T;
}

export async function fetchMembershipRequests(
  status: MembershipStatus = "pending",
) {
  const res = await fetch(
    `/api/admin/membership?status=${encodeURIComponent(status)}`,
    {
      credentials: "include",
    },
  );
  return json<{ ok: true; data: { items: MembershipRequest[] } }>(res);
}

export async function approveMembershipRequest(id: string) {
  const res = await fetch(`/api/admin/membership/${id}/approve`, {
    method: "POST",
    credentials: "include",
  });
  return json<{ ok: true; data: { item: MembershipRequest } }>(res);
}

export async function rejectMembershipRequest(id: string) {
  const res = await fetch(`/api/admin/membership/${id}/reject`, {
    method: "POST",
    credentials: "include",
  });
  return json<{ ok: true; data: { item: MembershipRequest } }>(res);
}
