// 기존 import 유지
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Modal,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { supabase } from "../lib/supabase";

const BASE_FONT_SIZE = 16;
export const rem = (value: number) => value * BASE_FONT_SIZE;

export default function SignupScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [modalVisible, setModalVisible] = useState(false);
  const [notConfirmedModalVisible, setNotConfirmedModalVisible] =
    useState(false);
  const [checking, setChecking] = useState(false);

  const handleSignUp = async () => {
    try {
      if (!email || !password) {
        Alert.alert("입력 오류", "이메일과 비밀번호를 모두 입력해주세요.");
        return;
      }

      const {
        data: { session, user },
        error,
      } = await supabase.auth.signUp({ email, password });
      if (error) {
        Alert.alert("회원가입 실패", error.message);
      } else if (!session) {
        setModalVisible(true); // 인증 안내 모달 표시
      }
    } catch (error: any) {
      Alert.alert("회원가입 실패", error.message);
    }
  };

  const handleEmailConfirmed = async () => {
    setChecking(true);
    const { data, error } = await supabase.auth.getUser();

    if (error) {
      Alert.alert("에러", error.message);
      setChecking(false);
      return;
    }

    if (data.user?.email_confirmed_at) {
      Alert.alert("이메일 인증 완료", "로그인 페이지로 이동합니다.");
      setModalVisible(false);
      router.replace("/");
    } else {
      setModalVisible(false);
      setNotConfirmedModalVisible(true);
    }

    setChecking(false);
  };

  const resendVerificationEmail = async () => {
    const { error } = await supabase.auth.resend({
      type: "signup",
      email,
    });

    if (error) {
      Alert.alert("재전송 실패", error.message);
    } else {
      Alert.alert("재전송 완료", "이메일을 다시 확인해주세요.");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      className="flex-1"
      keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 0}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
        }}
        keyboardShouldPersistTaps="handled"
        className="overflow-scroll"
      >
        <View className="w-full px-4">
          {/* Header */}
          <View className="flex-row items-center justify-center h-[1.5rem] mb-4">
            <Text className="flex-1 font-TomorrowBold text-center text-[1.5rem] text-black opacity-80">
              회원가입
            </Text>
          </View>

          {/* Image Section */}
          <View className="justify-center items-center h-[15rem] mb-6">
            <View className="w-[15rem] h-[15rem] shadow-lg rounded-full justify-center items-center">
              <Image
                source={require("../assets/images/main.png")}
                style={{ width: "100%", height: "100%" }}
              />
            </View>
          </View>

          {/* Signup Form */}
          <View className="space-y-4">
            <View className="border border-neutral-800 rounded px-4 py-3">
              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                placeholderTextColor="#00000099"
                style={{
                  fontFamily: "Tomorrow",
                  fontSize: rem(1.2),
                  color: "#00000099",
                }}
                className="text-black"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            <View className="bg-black/5 border border-neutral-800 rounded px-4 py-3">
              <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                placeholderTextColor="#00000099"
                secureTextEntry
                style={{
                  fontFamily: "Tomorrow",
                  fontSize: rem(1.2),
                  color: "#00000099",
                }}
                className="text-black"
              />
            </View>

            <TouchableOpacity
              className="bg-[#1285FF] rounded py-3 mt-2 items-center"
              onPress={handleSignUp}
            >
              <Text className="text-white font-[TomorrowBold]">회원가입</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push("/")}
              className="items-center mt-2"
            >
              <Text className="text-[#1285FF] font-[Tomorrow]">
                ← 로그인으로 돌아가기
              </Text>
            </TouchableOpacity>
          </View>

          {/* 인증 요청 모달 */}
          <Modal
            transparent
            visible={modalVisible}
            animationType="fade"
            onRequestClose={() => setModalVisible(false)}
          >
            <View className="flex-1 justify-center items-center bg-black/40 px-6">
              <View className="bg-white rounded-2xl w-full max-w-md p-6 shadow-lg space-y-4">
                <Text className="text-lg font-[TomorrowBold] text-center">
                  이메일 인증을 완료해주세요
                </Text>
                <Text className="text-sm text-gray-700 text-center">
                  {email} 주소로 인증 메일을 보냈습니다.
                  {"\n"}이메일을 열고 링크를 눌러주세요.
                </Text>

                {checking ? (
                  <ActivityIndicator className="mt-4" />
                ) : (
                  <>
                    <TouchableOpacity
                      onPress={handleEmailConfirmed}
                      className="bg-[#1285FF] rounded py-3 items-center"
                    >
                      <Text className="text-white font-[TomorrowBold]">
                        확인했어요
                      </Text>
                    </TouchableOpacity>
                    <Pressable
                      onPress={() => setModalVisible(false)}
                      className="items-center mt-2"
                    >
                      <Text className="text-[#1285FF] font-[Tomorrow]">
                        취소
                      </Text>
                    </Pressable>
                  </>
                )}
              </View>
            </View>
          </Modal>

          {/* 인증 안됨 모달 */}
          <Modal
            transparent
            visible={notConfirmedModalVisible}
            animationType="fade"
            onRequestClose={() => setNotConfirmedModalVisible(false)}
          >
            <View className="flex-1 justify-center items-center bg-black/40 px-6">
              <View className="bg-white rounded-2xl w-full max-w-md p-6 shadow-lg space-y-4">
                <Text className="text-lg font-[TomorrowBold] text-center">
                  아직 인증되지 않았습니다
                </Text>
                <Text className="text-sm text-gray-700 text-center">
                  이메일 인증을 완료하신 후 다시 확인해주세요.
                </Text>

                <TouchableOpacity
                  onPress={resendVerificationEmail}
                  className="bg-[#1285FF] rounded py-3 items-center"
                >
                  <Text className="text-white font-[TomorrowBold]">
                    인증 메일 재전송
                  </Text>
                </TouchableOpacity>
                <Pressable
                  onPress={() => setNotConfirmedModalVisible(false)}
                  className="items-center mt-2"
                >
                  <Text className="text-[#1285FF] font-[Tomorrow]">닫기</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
