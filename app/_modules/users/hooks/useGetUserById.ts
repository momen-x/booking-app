import { useQuery } from "@tanstack/react-query";
import resUser from "../repo/resUser";

export const USERS_KEY = "users";
export const useGetUserById = (id: string) => {
  return useQuery({
    queryKey: [USERS_KEY],
    queryFn: () => resUser.getById(id),
  });
};
