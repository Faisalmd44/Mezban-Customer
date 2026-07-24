import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "@/src/theme";

export default function CartScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Cart</Text>
      <Text style={styles.subtitle}>
        Your selected items will appear here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    color: COLORS.gold,
    fontSize: 28,
    fontWeight: "900",
  },
  subtitle: {
    marginTop: 10,
    color: COLORS.white,
    textAlign: "center",
  },
});
