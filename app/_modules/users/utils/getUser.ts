"use server";
import { cookies } from "next/headers";
import { User } from "../entity/user";
import { DYNAMIC_PAGE_API_URL } from "@/utils/constance";

const BASE_URL = `${DYNAMIC_PAGE_API_URL}/api/users`;

export const getAllUser = async (): Promise<User[] | null> => {
  const cookieStore = await cookies();
  const allCookies = cookieStore.toString();
  const token = cookieStore.get("token")?.value;
  const response = await fetch(BASE_URL, {
    headers: {
      Cookie: allCookies,
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });
  if (!response.ok) {
    return null;
  }
  const users = await response.json();
  return users;
};

export const getSingleUser = async (id: string): Promise<User | null> => {
  const cookieStore = await cookies();
  const allCookies = cookieStore.toString();
  const token = cookieStore.get("token")?.value;
  const response = await fetch(`${BASE_URL}/${id}`, {
    headers: {
      Cookie: allCookies,
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });
  if (!response.ok) {
    return null;
  }
  const user = await response.json();
  return user;
};

// export const dealWithUserByAdmin = async (id: string) => {}
