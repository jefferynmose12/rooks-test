import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./src/screens/LoginScreen";
import ConfirmPassScreen from "./src/screens/ConfirmPassScreen";
import FormFillScreen from "./src/screens/FormFillScreen";
import EarningScreen from "./src/screens/EarningScreen";
import VerifyScreen from "./src/screens/VerifyScreen";
import { useEffect, useState } from "react";
import SplashScreen from "./src/screens/SplashScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3000);
  }, []);

  return (
    <>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="login"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="login" component={LoginScreen} />
            <Stack.Screen name="verify" component={VerifyScreen} />
            <Stack.Screen name="confirm" component={ConfirmPassScreen} />
            <Stack.Screen name="form" component={FormFillScreen} />
            <Stack.Screen name="earn" component={EarningScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}
