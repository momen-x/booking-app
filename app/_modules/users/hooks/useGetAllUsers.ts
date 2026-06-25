import { useQuery } from "@tanstack/react-query";
import resUser from "../repo/resUser";

export const USERS_KEY = "users";
export const useGetUsers = () => {
  return useQuery({
    queryKey: [USERS_KEY],
    queryFn: resUser.getAll,
  });
};
