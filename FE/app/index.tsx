import LoginScreen from "@/components/Screen/LoginScreen";
import { View } from "react-native";
import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { Session } from "@supabase/supabase-js";

export default function Index() {
  const [session, setSession] = useState<Session | null>(null);
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <View className="flex-1 justify-center items-center">
      <LoginScreen />
    </View>
  );
}
