import { View, Text } from "react-native";
import { Image } from "expo-image";
import { cssInterop } from "nativewind";
const StyledExpoImage = cssInterop(Image, {
  className: "style",
});

export default function GameCard({ item }: { item: string }) {
  return (
    // Game Image + Title + Price
    <View className="flex flex-col items-start mt-4 gap-4 w-[30%] border-2 border-gray-800 rounded-md">
      {/* Game Image */}
      <View className="relative w-[100%] aspect-square">
        <StyledExpoImage
          source={require("../../assets/images/main.png")}
          className="w-[100%] h-[100%] rounded-md"
        />
      </View>
      <View className="flex flex-col items-start gap-[6px] w-full h-[42px]">
        <Text className="font-bold text-[15px] text-black/80">{item}</Text>
        <Text className="font-bold text-[13px] text-black/80">$0</Text>
      </View>
    </View>
  );
}
