import { Stack } from "expo-router";
import "react-native-reanimated";
import "../global.css"
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Children, ReactNode } from "react";


const Providers = ({ children}: {children: ReactNode}) => {
  return <GestureHandlerRootView>{children}</GestureHandlerRootView>
}

export default function RootLayout() {
  return (
    <Providers>
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
    </Providers>
  );
}
