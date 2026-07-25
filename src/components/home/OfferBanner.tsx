import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SPACING, RADIUS, SHADOW } from "@/src/theme";

export default function OfferBanner() {
  return (
    <LinearGradient
      colors={["#D4AF37", "#B8860B", "#8C6A08"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.banner}
    >
      <View style={styles.left}>
        <Text style={styles.small}>LIMITED TIME</Text>

        <Text style={styles.title}>
          Flat 20% OFF
        </Text>

        <Text style={styles.sub}>
          On your first order
        </Text>

        <View style={styles.code}>
          <Text style={styles.codeText}>
            Use: WELCOME20
          </Text>
        </View>
      </View>

      <View style={styles.right}>
        <Ionicons
          name="gift"
          size={64}
          color="rgba(255,255,255,0.9)"
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  banner: {
    marginHorizontal: SPACING.lg,
    marginVertical: SPACING.lg,
    borderRadius: RADIUS.xl,
    padding: SPACING.xl,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    ...SHADOW.card,
  },

  left: {
    flex: 1,
  },

  small: {
    color: "rgba(0,0,0,0.65)",
    fontWeight: "800",
    letterSpacing: 2,
    fontSize: 11,
  },

  title: {
    color: COLORS.black,
    fontWeight: "900",
    fontSize: 28,
    marginTop: 8,
  },

  sub: {
    color: COLORS.black,
    fontSize: 15,
    marginTop: 4,
  },

  code: {
    marginTop: 14,
    alignSelf: "flex-start",
    backgroundColor: COLORS.black,
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 8,
  },

  codeText: {
    color: COLORS.gold,
    fontWeight: "800",
    fontSize: 13,
  },

  right: {
    marginLeft: 12,
  },
});
