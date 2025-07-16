import { Game } from "@/types";
import axios from "axios";

const API_BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL;

export const fetchGames = async (
  lastId: string | null,
  size: number
): Promise<Game[]> => {
  const res = await axios.get<Game[]>(
    `${API_BASE_URL}/games?lastId=${lastId}&size=${size}`
  );
  return res.data;
};
