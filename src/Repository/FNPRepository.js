import { APIClient } from "./BaseRepository";

export const fetchProducts = () => {
  return APIClient.post("/v2/5ed68221340000480106dae9");
};
