import { Stack } from "expo-router";
import "../global.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { store } from "@/store";
import { Provider } from "react-redux";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Tomorrow: require("../assets/fonts/Tomorrow.ttf"),
    TomorrowThin: require("../assets/fonts/TomorrowThin.ttf"),
    TomorrowMedium: require("../assets/fonts/TomorrowMedium.ttf"),
    TomorrowBold: require("../assets/fonts/TomorrowBold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }} />
    </Provider>
  );
}
