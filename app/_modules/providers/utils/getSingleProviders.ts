"use server";
import { cookies } from "next/headers";
import { Provider } from "../entity/provider";
import { DYNAMIC_PAGE_API_URL } from "@/utils/constance";

export default async function getSingleProviderProfile(id: string) {
  const cookieStore = await cookies();
  const allCookies = cookieStore.toString();
  const token = cookieStore.get("token")?.value;
  const response = await fetch(`${DYNAMIC_PAGE_API_URL}/api/providers/${id}`, {
    headers: {
      Cookie: allCookies,
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });

  if (!response.ok) return null;

  const provider = (await response.json()) as Provider;
  return provider;
}
