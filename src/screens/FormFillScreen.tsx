import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import CustomInput from "../components/customInput/CustomInput";
import CustomButton from "../components/customButton/CustomButton";
import Entypo from "react-native-vector-icons/Entypo";
import { COLORS } from "../../assets/constant";

const FormFillScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.overAll}>
      <StatusBar style="dark" />

      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : undefined}
        style={styles.container}
      >
        <View style={styles.top}>
          <Pressable onPress={() => navigation.goBack()}>
            <Entypo name="chevron-left" size={30} />
          </Pressable>

          <Text
            style={{
              marginTop: 30,
              fontSize: 25,
              fontWeight: 600,
              color: COLORS.darkred,
            }}
          >
            Let’s get to know you
          </Text>
        </View>

        <ScrollView style={{ flex: 1, paddingTop: 20 }}>
          <Formik
            initialValues={{
              first: "",
              last: "",
              phone: "",
              address: "",
              state: "",
              city: "",
              code: "",
              country: "",
              nin: "",
            }}
            onSubmit={(values) => {}}
            validateOnMount={true}
          >
            {({ handleBlur, handleChange, handleSubmit, values, errors }) => (
              <View style={styles.wrapper}>
                <CustomInput
                  label="First Name"
                  placeholder="e.g John"
                  handleBlur={handleBlur("first")}
                  handleChange={handleChange("first")}
                  value={values.first}
                  type="text"
                />

                <CustomInput
                  label="Last Name"
                  placeholder="e.g Doe"
                  handleBlur={handleBlur("last")}
                  handleChange={handleChange("last")}
                  value={values.last}
                  type="text"
                />

                <CustomInput
                  label="Phone Number"
                  placeholder="e.g +234 815 354 1944"
                  handleBlur={handleBlur("phone")}
                  handleChange={handleChange("phone")}
                  value={values.phone}
                  type="text"
                />

                <CustomInput
                  label="Street Address"
                  placeholder="Enter Street, Landmark, Building etc"
                  handleBlur={handleBlur("address")}
                  handleChange={handleChange("address")}
                  value={values.address}
                  type="text"
                />

                <CustomInput
                  label="City"
                  placeholder="Enter Street, Landmark, Building etc"
                  handleBlur={handleBlur("city")}
                  handleChange={handleChange("city")}
                  value={values.city}
                  type="text"
                />

                <CustomInput
                  label="State"
                  placeholder="Enter Street, Landmark, Building etc"
                  handleBlur={handleBlur("state")}
                  handleChange={handleChange("state")}
                  value={values.state}
                  type="text"
                />

                <CustomInput
                  label="Postal Code (Optional)"
                  placeholder="Postal code"
                  handleBlur={handleBlur("code")}
                  handleChange={handleChange("code")}
                  value={values.code}
                  type="text"
                />

                <CustomInput
                  label="Country"
                  placeholder="e.g Nigeria"
                  handleBlur={handleBlur("country")}
                  handleChange={handleChange("country")}
                  value={values.country}
                  type="text"
                />

                <CustomInput
                  label="NIN"
                  placeholder="e.g 5566543234590964"
                  handleBlur={handleBlur("nin")}
                  handleChange={handleChange("nin")}
                  value={values.nin}
                  type="text"
                />

                <View style={styles.btnCon}>
                  <CustomButton label="Continue" handle={() => navigation.push('earn')} />
                </View>
              </View>
            )}
          </Formik>

          <View style={{ alignItems: "center", paddingBottom: 40 }}>
            <Image source={require("../../assets/formImage.png")} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default FormFillScreen;

const styles = StyleSheet.create({
  overAll: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: 10,
    marginBottom: 0,
  },
  top: {
    paddingHorizontal: 20,
    marginBottom: 30,
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
