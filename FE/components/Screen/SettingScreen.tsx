import { View, Text, Pressable, ScrollView, Alert } from "react-native";
import { Image } from "expo-image";
import { cssInterop } from "nativewind";

const StyledExpoImage = cssInterop(Image, {
  className: "style",
});

const settingsItems = [
  {
    label: "개인 정보 변경",
    icon: require("../../assets/images/user.svg"),
    onPress: () => {},
  },
  {
    label: "알림 설정",
    icon: require("../../assets/images/bell.png"),
    onPress: () => {},
  },
  {
    label: "자주 묻는 질문",
    icon: require("../../assets/images/help.png"),
    onPress: () => {},
  },
  {
    label: "Plus 구독하기",
    icon: require("../../assets/images/plus.png"),
    onPress: () => {},
  },
];

export default function SettingsScreen() {
  return (
    <View className="flex-1 bg-white px-[1rem] py-[2rem] w-full">
      <Text className="text-2xl font-[TomorrowMedium] text-black mb-[2rem]">
        Settings
      </Text>

      <ScrollView className="flex-1">
        {settingsItems.map((item, idx) => (
          <Pressable
            key={idx}
            className="flex-row items-center py-[1rem] border-b border-gray-200"
            onPress={item.onPress}
          >
            <StyledExpoImage
              source={item.icon}
              className="h-[1.5rem] w-[1.5rem] mr-[1rem]"
            />
            <Text className="text-base text-black font-[TomorrowMedium]">
              {item.label}
            </Text>
          </Pressable>
        ))}

        {/* 탈퇴하기 */}
        <Pressable
          onPress={() =>
            Alert.alert("탈퇴하기", "정말 탈퇴하시겠습니까?", [
              { text: "취소", style: "cancel" },
              {
                text: "탈퇴",
                style: "destructive",
                onPress: () => {
                  /* 탈퇴 처리 */
                },
              },
            ])
          }
          className="mt-[2rem] py-[1rem] border border-red-500 rounded-lg"
        >
          <Text className="text-center text-red-500 font-[TomorrowMedium]">
            탈퇴하기
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
