import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  TextInput,
} from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../../assets/constant";
import CustomButton from "../components/customButton/CustomButton";
import Entypo from "react-native-vector-icons/Entypo";

const length = 4
const values = []

const VerifyScreen = ({ navigation }: any) => {
  const inputRefs = useRef<any>([]);

  const onChangeValue = (text: string, index: number) => {
    const newValue = values.map((item, valueIndex) => {
      if (valueIndex === index) {
        return text;
      }

      return item;
    });

    //onChange(newValue);
  };

  const handleChange = (text: string, index: number) => {
    onChangeValue(text, index);

    if (text.length !== 0) {
      return inputRefs?.current[index + 1]?.focus();
    }

    return inputRefs?.current[index - 1]?.focus();
  };

  const handleBackspace = (event: any, index: number) => {
    const { nativeEvent } = event;

    if (nativeEvent.key === "Backspace") {
      handleChange("", index);
    }
  };

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
        </View>
        <View style={styles.coverImg}>
          <Image
            source={require("../../assets/rooks.png")}
            style={{ width: 80, height: 80 }}
          />
        </View>

        <View style={styles.wrapper}>
          <View style={{flexDirection: 'row', gap: 15, width: '100%', marginBottom: 20}}>
            {[...new Array(length)].map((item, index) => (
              <TextInput
                ref={(ref) => {
                  if (ref && !inputRefs.current.includes(ref)) {
                    inputRefs.current = [...inputRefs.current, ref];
                  }
                }}
                key={index}
                maxLength={1}
                contextMenuHidden
                selectTextOnFocus
                //editable={!disabled}
                style={styles.underlineStyleBase}
                keyboardType="decimal-pad"
                testID={`OTPInput-${index}`}
                onChangeText={(text) => handleChange(text, index)}
                onKeyPress={(event) => handleBackspace(event, index)}
              />
            ))}
          </View>
          <View>
            <CustomButton label="Continue" handle={() => navigation.push('confirm')} />
          </View>
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Text style={{ color: COLORS.tint, fontSize: 17 }}>
              Expires in 05:00
            </Text>
          </View>

          <View style={styles.signupCon}>
            <Text style={{ color: COLORS.tint, fontWeight: 500, fontSize: 17 }}>
              Resend OTP
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default VerifyScreen;

const styles = StyleSheet.create({
  overAll: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: 20,
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
  underlineStyleBase: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderColor: COLORS.borderinput,
    borderRadius: 5,
    color: COLORS.tint,
    fontSize: 20,
    textAlign: 'center'
  },
  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
});
