import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import CustomInput from "../components/customInput/CustomInput";
import { COLORS } from "../../assets/constant";
import CustomButton from "../components/customButton/CustomButton";

const LoginScreen = ({ navigation }: any) => {
  
  return (
    <SafeAreaView style={styles.overAll}>
      <StatusBar style="dark" />

      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : undefined}
        style={styles.container}
      >
        <View>
          <Text></Text>
        </View>
        <View style={styles.coverImg}>
          <Image
            source={require("../../assets/rooks.png")}
            style={{ width: 80, height: 80 }}
          />
        </View>

        <View>
          <Formik
            initialValues={{ text: "" }}
            onSubmit={(values) => {}}
            validateOnMount={true}
          >
            {({ handleBlur, handleChange, values }) => (
              <View style={styles.wrapper}>
                <CustomInput
                  label="Email or Phone"
                  placeholder="Email or Phone"
                  handleBlur={handleBlur("text")}
                  handleChange={handleChange("text")}
                  value={values.text}
                  type="text"
                />

                <View style={styles.btnCon}>
                  <CustomButton
                    label="Continue"
                    handle={() => navigation.push("verify")}
                  />
                </View>
                <View style={{ alignItems: "center", marginTop: 20 }}>
                  <Text style={{ color: COLORS.tint, fontSize: 17 }}>
                    Forgot password?
                  </Text>
                </View>

                <View style={styles.signupCon}>
                  <Text style={{ color: COLORS.tint, fontSize: 17 }}>
                    Existing User? Tap here to{" "}
                    <Text style={{ color: COLORS.darkred }}>Login</Text>
                  </Text>
                </View>
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  overAll: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  coverImg: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  signupCon: {
    justifyContent: "center",
    flexDirection: "row",
    gap: 3,
    width: "100%",
    marginTop: 20,
    marginBottom: 10,
  },
  btnCon: {
    marginTop: 10,
  },
});
