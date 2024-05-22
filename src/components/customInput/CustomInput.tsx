import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const CustomInput = ({
  handleChange,
  handleBlur,
  value,
  type,
  placeholder,
  label,
}: any) => {
  return (
    <View style={styles.inputbg}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputField]}>
        <TextInput
          placeholderTextColor="#444"
          placeholder={placeholder}
          autoCapitalize="none"
          keyboardType={type}
          textContentType={type}
          onChangeText={handleChange}
          onBlur={handleBlur}
          value={value}
        />
      </View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputbg: {
    flexDirection: "column",
    gap: 10,
  },
  label: {
    fontSize: 20,
   // fontWeight: 600,
  },
  inputField: {
    borderRadius: 8,
    paddingLeft: 10,
    backgroundColor: "#FAFAFA",
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    height: 50,
    justifyContent: "center",
  },
});
