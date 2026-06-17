"use server";
import { DYNAMIC_PAGE_API_URL } from "@/utils/constance";
import { Service } from "../entity/service";

const BASE_URL = `${DYNAMIC_PAGE_API_URL}/api/services`;

export const getAllServices = async (): Promise<Service[] | null> => {

  const response = await fetch(`${BASE_URL}`, {
    method: "GET",
    credentials: "include",
    next: { revalidate: 5 },
  });
  if (!response.ok) {
    return null;
  }
  const services = (await response.json()) as Service[];
  return services;
};
