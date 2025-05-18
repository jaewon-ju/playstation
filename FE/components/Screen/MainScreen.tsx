import { View, Text } from "react-native";
import { Image } from "expo-image";

import { cssInterop } from "nativewind";
import GameCard from "../Cards/GameCard";

const StyledExpoImage = cssInterop(Image, {
  className: "style",
});

export default function MainScreen() {
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
            {["FPS", "RPG", "MOBA", "RTS", "MMORPG", "MMORPG"].map((item) => (
              <View className="px-[0.5rem] border border-[#002bd9] rounded-full">
                <Text className="font-[Tomorrow] text-[1rem] text-black">
                  {item}
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
        className="absolute top-[10rem] p-[1rem] 
      w-full flex-row flex-wrap justify-between items-start
      overflow-y-scroll"
      >
        {/* 쇼핑 셀 */}
        {[
          "Game A",
          "Game B",
          "Game C",
          "Game D",
          "Game E",
          "Game F",
          "Game G",
          "Game H",
          "Game I",
          "Game J",
          "Game K",
          "Game L",
          "Game M",
          "Game N",
          "Game O",
          "Game P",
          "Game Q",
          "Game R",
          "Game S",
          "Game T",
          "Game U",
          "Game V",
          "Game W",
          "Game X",
          "Game Y",
          "Game Z",
        ].map((item) => (
          <GameCard item={item} />
        ))}
      </View>
    </View>
  );
}
