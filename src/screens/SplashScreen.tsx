import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const SplashScreen = () => {
  return (
    <SafeAreaView style={styles.overAll}>
      <StatusBar style="dark" />

      <View>
        <Image
          source={require("../../assets/rooks.png")}
          style={{ width: 80, height: 80 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  overAll: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
