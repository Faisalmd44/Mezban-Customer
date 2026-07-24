import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, SPACING, RADIUS } from "@/src/theme";

export default function Hero() {
  return (
    <LinearGradient
      colors={[COLORS.black, COLORS.brandDark]}
      style={styles.container}
    >
      <Text style={styles.title}>MEZBAAN</Text>
      <Text style={styles.subtitle}>Freshly Crafted, Honestly Served</Text>

      <View style={styles.offer}>
        <Text style={styles.offerText}>🔥 Flat 20% OFF on First Order</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: SPACING.lg,
    borderRadius: RADIUS.lg,
    padding: SPACING.xl,
  },
  title: {
    fontSize: 34,
    fontWeight: "900",
    color: COLORS.gold,
    letterSpacing: 3,
  },
  subtitle: {
    color: COLORS.white,
    marginTop: 8,
    fontSize: 15,
  },
  offer: {
    marginTop: 20,
    backgroundColor: "rgba(255,215,0,0.15)",
    borderRadius: 12,
    padding: 12,
  },
  offerText: {
    color: COLORS.gold,
    fontWeight: "700",
    fontSize: 14,
  },
});
