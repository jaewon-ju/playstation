import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { supabase } from "../../lib/supabase";

const BASE_FONT_SIZE = 16;
export const rem = (value: number) => value * BASE_FONT_SIZE;

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      Alert.alert("로그인 실패", error.message);
    } else {
      router.push("/Main");
    }
  };

  const handlePasswordReset = async () => {
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) {
      Alert.alert("비밀번호 찾기 실패", error.message);
    } else {
      Alert.alert("비밀번호 재설정 이메일 발송됨", "이메일을 확인해주세요.");
    }
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
          onPress={handlePasswordReset}
        >
          비밀번호 재설정
        </Text>
        <Text
          className=" text-black opacity-80 font-[Tomorrow]"
          onPress={() => router.push("/Signup")}
        >
          회원가입
        </Text>
      </View>
    </View>
  );
}
