import { useQuery } from "@tanstack/react-query";
import resUser from "../repo/resUser";
import { USERS_KEY } from "./useGetAllUsers";

export const useGetUserById = (id: string) => {
  return useQuery({
    queryKey: [USERS_KEY, id],
    queryFn: () => resUser.getById(id),
  });
};
