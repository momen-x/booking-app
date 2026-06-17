"use server";

import { DYNAMIC_PAGE_API_URL } from "@/utils/constance";
import { Provider } from "../entity/provider";

export const getProviders = async (): Promise<Provider[]> => {
  const response = await fetch(`${DYNAMIC_PAGE_API_URL}/api/providers`);
  if (!response.ok) {
    return [];
  }
  const providers = (await response.json()) as Provider[];
  return providers;
};
