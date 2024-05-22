import {
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import CustomInput from "../components/customInput/CustomInput";
import CustomButton from "../components/customButton/CustomButton";
import { COLORS } from "../../assets/constant";

const ConfirmPassScreen = ({ navigation }: any) => {
  const [verified, setVerified] = useState(false);

  const handleVerified = () => {
    setVerified(true);
    setTimeout(() => {
      navigation.push("form");
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.overAll}>
      <StatusBar style="dark" />

      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : undefined}
        style={styles.container}
      >
        {verified && (
          <View
            style={{
              position: "absolute",
              top: 10,
              left: 20,
              right: 20,
              backgroundColor: COLORS.darkred,
              height: 60,
              borderRadius: 5,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              paddingHorizontal: 20,
            }}
          >
            <Image source={require("../../assets/verify.png")} />
            <View style={{ gap: 5 }}>
              <Text
                style={{ fontSize: 17, fontWeight: 700, color: COLORS.white }}
              >
                Email Verified
              </Text>
              <Text style={{ color: COLORS.white }}>
                Continue your registration
              </Text>
            </View>
          </View>
        )}
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
            initialValues={{ password: "", confirmPass: "" }}
            onSubmit={(values) => {}}
            validateOnMount={true}
          >
            {({ handleBlur, handleChange, handleSubmit, values, errors }) => (
              <View style={styles.wrapper}>
                <CustomInput
                  label="Password"
                  placeholder="Password"
                  handleBlur={handleBlur("password")}
                  handleChange={handleChange("password")}
                  value={values.password}
                  type="password"
                />

                <CustomInput
                  label="Confirm Password"
                  placeholder="Confirm Password"
                  handleBlur={handleBlur("confirmpass")}
                  handleChange={handleChange("confirmpass")}
                  value={values.confirmPass}
                  type="password"
                />

                <View style={styles.btnCon}>
                  <CustomButton label="Continue" handle={handleVerified} />
                </View>
              </View>
            )}
          </Formik>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ConfirmPassScreen;

const styles = StyleSheet.create({
  overAll: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
  },
  coverImg: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    paddingHorizontal: 20,
    flexDirection: "column",
    gap: 10,
    marginBottom: 30,
  },
  btnCon: {
    marginTop: 10,
  },
});
