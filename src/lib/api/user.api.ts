import { UserData } from "@/types/userTypes";
import { API_URL } from "@/config/env";
import { cookies } from "next/headers";

export const fetchUser = async (): Promise<UserData | null> => {
  const token = (await cookies()).get("token");

  if (!token) {
    return null;
  }

  const res = await fetch(`${API_URL}/user`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data?.message ?? "Failed to fetch user. An unexpected Error was received from the server."
    );
  }

  return data;
};

export async function updateUserProfile(
  token: string,
  payload: Partial<UserData>
): Promise<UserData> {
  const res = await fetch(`${API_URL}/user`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data?.message ?? "Failed to update user. An unexpected Error was received from the server."
    );
  }

  return data;
}
