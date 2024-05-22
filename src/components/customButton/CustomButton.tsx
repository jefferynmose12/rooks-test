import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS } from "../../../assets/constant";

const CustomButton = ({ label, handle }: any) => {
  return (
    <TouchableOpacity style={styles.btnbg} onPress={handle}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btnbg: {
    backgroundColor: COLORS.darkred,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    color: COLORS.white,
    fontSize: 15,
    //fontWeight: 500,
  },
});
