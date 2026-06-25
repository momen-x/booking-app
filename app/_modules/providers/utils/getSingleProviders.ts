"use server";
import { Provider } from "../entity/provider";
import { DYNAMIC_PAGE_API_URL } from "@/utils/constance";

export default async function getSingleProviderProfile(id: string) {
  const response = await fetch(`${DYNAMIC_PAGE_API_URL}/api/providers/${id}`);

  if (!response.ok) return null;

  const provider = (await response.json()) as Provider;
  return provider;
}
