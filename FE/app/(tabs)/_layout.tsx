import { Tabs } from "expo-router";
import "../../global.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Text } from "react-native";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Tomorrow: require("../../assets/fonts/Tomorrow.ttf"),
    TomorrowThin: require("../../assets/fonts/TomorrowThin.ttf"),
    TomorrowMedium: require("../../assets/fonts/TomorrowMedium.ttf"),
    TomorrowBold: require("../../assets/fonts/TomorrowBold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#2563eb",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          height: 50,
          paddingBottom: 8,
          paddingTop: 8,
          backgroundColor: "white",
          borderTopWidth: 1,
          borderTopColor: "black",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen
        name="Main"
        options={{
          title: "Main",
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: size }}>Main</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="Setting"
        options={{
          title: "Setting",
          tabBarIcon: ({ color, size }) => (
            <Text style={{ color, fontSize: size }}>Setting</Text>
          ),
        }}
      />
    </Tabs>
  );
}
