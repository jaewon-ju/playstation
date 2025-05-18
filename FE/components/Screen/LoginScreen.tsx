import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Linking,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

const BASE_FONT_SIZE = 16; // 1rem = 16px 기준

export const rem = (value: number) => value * BASE_FONT_SIZE;

export default function LoginScreen() {
  const router = useRouter();
  const handleLogin = () => {
    // TODO: 로그인 로직 (Firebase, OAuth 등)
    // 성공 후 페이지 이동
    router.push("/main"); // 예: /main.tsx 페이지로 이동
  };

  return (
    <View className="w-full">
      {/* Header */}
      <View className="flex-row items-center justify-between h-[1.5rem] mb-4">
        <Text className="flex-1 font-TomorrowBold text-center text-[1.5rem] text-black opacity-80">
          PS Tracker
        </Text>
      </View>

      {/* Image Section */}
      <View className="justify-center items-center h-[15rem] mb-6">
        <View className="w-[15rem] h-[15rem]  shadow-lg rounded-full justify-center items-center">
          <Image
            source={require("../../assets/images/main.png")}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
      </View>

      <View className="px-4 space-y-4 mt-4 mb-4 flex-col justify-center items-center">
        <TouchableOpacity className="w-full bg-[#1285FF] rounded py-3 items-center">
          <Text className="text-white font-[TomorrowBold]">
            Google로 로그인하기
          </Text>
        </TouchableOpacity>
        <View className="w-full h-[1px] bg-neutral-800" />
      </View>

      {/* Login Form */}
      <View className="px-4 space-y-4">
        <View className="border border-neutral-800 rounded px-4 py-3">
          <TextInput
            placeholder="Email"
            placeholderTextColor="#00000099"
            style={{
              fontFamily: "Tomorrow",
              fontSize: rem(1.2),
              color: "#00000099",
            }}
            className=" text-black"
          />
        </View>
        <View className="bg-black/5 border border-neutral-800 rounded px-4 py-3">
          <TextInput
            placeholder="Password"
            placeholderTextColor="#00000099"
            style={{
              fontFamily: "Tomorrow",
              fontSize: rem(1.2),
              color: "#00000099",
            }}
            secureTextEntry
            className=" text-black"
          />
        </View>

        <TouchableOpacity className="bg-[#1285FF] rounded py-3 mt-2 items-center">
          <Text
            className="text-white font-[TomorrowBold]"
            onPress={handleLogin}
          >
            Login
          </Text>
        </TouchableOpacity>
        <View className="w-full h-[1px] bg-neutral-800" />
      </View>

      {/* Links */}
      <View className="flex-row justify-between px-4 pt-4">
        <Text
          className=" text-black opacity-80 font-[Tomorrow]"
          onPress={() => Linking.openURL("#")}
        >
          패스워드 찾기
        </Text>
        <Text
          className=" text-black opacity-80 font-[Tomorrow]"
          onPress={() => Linking.openURL("#")}
        >
          회원가입
        </Text>
      </View>
    </View>
  );
}
