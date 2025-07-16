import { View, Text, ActivityIndicator } from "react-native";
import { Image } from "expo-image";

import { cssInterop } from "nativewind";
import GameCard from "../Cards/GameCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { fetchGames, fetchGenres } from "@/store/slices/gameSlice";
import { useEffect } from "react";
import { logger } from "react-native-logs";

const log = logger.createLogger();
const StyledExpoImage = cssInterop(Image, {
  className: "style",
});

export default function MainScreen() {
  const { games, genres, gameLoading, genreLoading } = useSelector(
    (state: RootState) => state.game
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchGames({ lastId: null, size: 21 }));
        await dispatch(fetchGenres());
      } catch (error) {
        log.error(error);
      }
    };
    fetchData();
  }, []);

  if (gameLoading || genreLoading) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#002bd9" />
        <Text className="text-black mt-2">로딩 중...</Text>
      </View>
    );
  }
  return (
    <View className="relative w-full h-full flex-col justify-center items-center">
      {/* 상단 바 */}
      <View className="absolute top-0 left-0 w-full h-[5rem] p-[1rem] flex-row justify-between items-center">
        <View className="w-[50%] h-[4rem] flex-row justify-start items-center">
          <StyledExpoImage
            source={require("../../assets/images/main.png")}
            className="h-[3rem] aspect-square shadow-lg rounded-full bg-gray-200"
          />
        </View>

        <View className="w-[50%] h-[5rem] flex-row justify-end items-center gap-4">
          <StyledExpoImage
            source={require("../../assets/images/search.svg")}
            className="h-[1.5rem] aspect-square"
          />
          <StyledExpoImage
            source={require("../../assets/images/setting.svg")}
            className="h-[1.5rem] aspect-square"
          />
        </View>
      </View>

      {/* 카테고리/필터 바 */}
      <View className="absolute w-full h-[5rem] top-[5rem] p-[1rem] left-0 flex-row justify-between items-center">
        <View className="w-[80%] flex-row justify-center items-center overflow-x-auto">
          <View className="flex-row gap-4 justify-left items-center">
            {genres.map((item) => (
              <View className="px-[0.5rem] border border-[#002bd9] rounded-full">
                <Text className="font-[Tomorrow] text-[1rem] text-black">
                  {item.name}
                </Text>
              </View>
            ))}
          </View>
        </View>
        <StyledExpoImage
          source={require("../../assets/images/filter.svg")}
          className="h-[2rem] aspect-square"
        />
      </View>

      {/* 쇼핑 아이템 그리드 */}
      <View
        className="absolute top-[10rem] px-[1rem] bottom-[2rem]
      w-full flex-row flex-wrap justify-between items-start
      overflow-y-scroll"
      >
        {/* 쇼핑 셀 */}
        {games.map((item) => (
          <GameCard key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
}
