import { useQuery } from "@tanstack/react-query";
import { CURRENT_USER_QUERY_KEY } from "@/utils/constance";
import resUserAPI from "../repo/resUser";
import axios from "axios";


export const useGetCurrentUser = () => {

  return useQuery({
    queryKey: [CURRENT_USER_QUERY_KEY],
    queryFn: async () => {

      try {
        return await resUserAPI.getCurrentUser();
      } catch (error) {
      
        if (axios.isAxiosError(error) && error.response?.status === 401) {
          return null;
        }

        throw error;
      }
    },
  });
};
