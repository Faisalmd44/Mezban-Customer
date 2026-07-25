import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { COLORS, SPACING, RADIUS, SHADOW } from "@/src/theme";

export default function Hero() {
  return (
    <View style={styles.wrap}>
      <Image
        source="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200"
        style={styles.image}
        contentFit="cover"
      />

      <LinearGradient
        colors={["rgba(0,0,0,0.25)", "rgba(0,0,0,0.75)", "#0A0A0A"]}
        style={styles.overlay}
      >
        <Text style={styles.brand}>MEZBAAN</Text>

        <Text style={styles.subtitle}>
          Freshly Crafted, Honestly Served
        </Text>

        <View style={styles.offer}>
          <Text style={styles.offerText}>
            🎉 Flat 15% OFF on your first order
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    height: 240,
    margin: SPACING.lg,
    borderRadius: RADIUS.xl,
    overflow: "hidden",
    ...SHADOW.card,
  },

  image: {
    ...StyleSheet.absoluteFillObject,
  },

  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    padding: SPACING.xl,
  },

  brand: {
    color: COLORS.white,
    fontSize: 36,
    fontWeight: "900",
    letterSpacing: 4,
  },

  subtitle: {
    color: "#E5E5E5",
    fontSize: 15,
    marginTop: 8,
  },

  offer: {
    alignSelf: "flex-start",
    marginTop: 18,
    backgroundColor: "rgba(212,175,55,0.18)",
    borderWidth: 1,
    borderColor: COLORS.gold,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 999,
  },

  offerText: {
    color: COLORS.gold,
    fontWeight: "800",
  },
});
