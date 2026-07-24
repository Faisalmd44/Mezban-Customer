import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS, SPACING, RADIUS } from "@/src/theme";

export default function OfferBanner() {
  return (
    <LinearGradient
      colors={[COLORS.gold, "#F5A623"]}
      style={styles.banner}
    >
      <Text style={styles.title}>🎉 Today's Special</Text>

      <Text style={styles.subtitle}>
        Buy 1 Get 1 Free on selected Burgers
      </Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  banner: {
    marginHorizontal: SPACING.lg,
    marginTop: SPACING.md,
    borderRadius: RADIUS.lg,
    padding: SPACING.lg,
  },

  title: {
    color: COLORS.black,
    fontSize: 20,
    fontWeight: "900",
  },

  subtitle: {
    color: COLORS.black,
    marginTop: 6,
    fontWeight: "700",
  },
});
