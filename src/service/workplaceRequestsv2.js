import axios from "axios";
import { useUserStore } from "../stores/userStore";

export default async (method, endpoint, payload = null) => {
  let res;

  const store = useUserStore();
  const instance = axios.create({
    baseURL: `${import.meta.env.VITE_API_WORKPLACE_BASE_URL_V2}`,
    headers: { Authorization: `Bearer ${store.$state.token}` },
    ApiToken:
      "d1e7adbc52154f5c7baad0ed8dfe0c83d511623606ae75657edf79ea942fea86",
  });

  try {
    res = await instance[method](`/${endpoint}`, payload);
  } catch (error) {
    if (error.response) {
      res = error.response;
    }
    if (error.response.status === 401) {
      store.logout();
    }
  }

  return res;
};
