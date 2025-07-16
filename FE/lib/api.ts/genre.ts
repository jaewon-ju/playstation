import { Genre } from "@/types";
import axios from "axios";

const API_BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL;

export const fetchGenres = async (): Promise<Genre[]> => {
  const res = await axios.get<Genre[]>(`${API_BASE_URL}/genres`);
  return res.data;
};
