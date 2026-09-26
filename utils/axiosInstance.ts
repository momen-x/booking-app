import axios from "axios";

const api = axios.create({
  // Browser requests use Next's same-origin /api rewrite for cookie auth.
  withCredentials: true,
});

export default api;
