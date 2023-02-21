import { baseService } from "../../services/baseService";

export const getData = async () => {
  return await baseService.get("data.json");
};
