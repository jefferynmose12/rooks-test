import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { COLORS } from "../../assets/constant";

const EarningScreen = () => {
  const cards = [
    { name: "Total Revenue", amount: "₦152,000.00", default: true },
    { name: "Total Deliveries", amount: "334", default: false },
    { name: "Successful Deliveries", amount: "304", default: false },
    { name: "Unsuccessful Deliveries", amount: "30", default: false },
  ];

  return (
    <SafeAreaView style={styles.overAll}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 20,
          }}
        >
          <Text
            style={{ fontSize: 20, fontWeight: 800, color: COLORS.darkred }}
          >
            Earnings
          </Text>
          <View
            style={{
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 10,
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              backgroundColor: COLORS.lightred,
            }}
          >
            <View
              style={{
                height: 6,
                width: 6,
                backgroundColor: COLORS.darkred,
                borderRadius: 20,
              }}
            />
            <Text
              style={{ fontWeight: 800, fontSize: 10, color: COLORS.darkred }}
            >
              10 NEW DELIVERIES
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 30, gap: 12, paddingHorizontal: 20 }}>
          {cards.map((card, i) => (
            <View
              key={i}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                height: 80,
                backgroundColor: card.default
                  ? COLORS.darkred
                  : COLORS.lightred,
                paddingHorizontal: 10,
                borderRadius: 5,
              }}
            >
              <Text
                style={{
                  color: card.default ? COLORS.white : COLORS.darkred,
                  fontSize: 15,
                  fontWeight: 700,
                }}
              >
                Total Revenue
              </Text>
              <Text
                style={{
                  color: card.default ? COLORS.white : COLORS.darkred,
                  fontSize: 27,
                  fontWeight: 700,
                }}
              >
                ₦152,000.00
              </Text>
            </View>
          ))}
        </View>

        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 20,
              paddingHorizontal: 20,
            }}
          >
            <Text style={{ color: COLORS.tint, fontSize: 20, fontWeight: 700 }}>
              Recent Deliveries
            </Text>

            <TouchableOpacity>
              <Text
                style={{ color: COLORS.grey, fontSize: 14, fontWeight: 700 }}
              >
                see all
              </Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            style={{
              paddingTop: 20,
              gap: 10,
              height: Platform.OS === "ios" ? "auto" : 250,
            }}
          >
            {[1, 2, 3].map((_, i) => (
              <View
                key={i}
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 20,
                  borderBottomWidth: 1,
                  borderColor: COLORS.border,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 17,
                      fontWeight: 700,
                      color: COLORS.tint,
                    }}
                  >
                    Order D24
                  </Text>
                  <View
                    style={{
                      paddingVertical: 5,
                      paddingHorizontal: 10,
                      borderRadius: 10,
                      flexDirection: "row",
                      gap: 10,
                      alignItems: "center",
                      backgroundColor: COLORS.darkred,
                    }}
                  >
                    <Text
                      style={{
                        fontWeight: 500,
                        fontSize: 12,
                        color: COLORS.white,
                      }}
                    >
                      Delivered
                    </Text>
                  </View>
                </View>

                <View style={{ paddingTop: 10 }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: COLORS.neutral,
                    }}
                  >
                    Area 11, 8 Ikot-Ekpene Cl, off Emeka Anyaoku Street, Garki,
                    Abuja 900103, Federal Capital Territory
                  </Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EarningScreen;

const styles = StyleSheet.create({
  overAll: {
    flex: 1,
  },
  container: {
    paddingVertical: 20,
  },
});
