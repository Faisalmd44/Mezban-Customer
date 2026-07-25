import { Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { useApp, cartCount, cartTotal } from "@/src/store";
import { COLORS, RADIUS, SPACING, SHADOW } from "@/src/theme";

export default function StickyCartBar() {
  const router = useRouter();
  const { cart } = useApp();

  const count = cartCount(cart);
  const total = cartTotal(cart);

  if (count === 0) return null;

  return (
    <Pressable
      style={styles.container}
      onPress={() => router.push("/(tabs)/cart")}
    >
      <View style={styles.left}>
        <Ionicons name="cart" size={22} color={COLORS.black} />
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.count}>{count} Items</Text>
          <Text style={styles.total}>₹{total}</Text>
        </View>
      </View>

      <View style={styles.right}>
        <Text style={styles.view}>View Cart</Text>
        <Ionicons
          name="chevron-forward"
          size={18}
          color={COLORS.black}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 16,
    right: 16,
    bottom: 20,
    height: 62,
    borderRadius: RADIUS.pill,
    backgroundColor: COLORS.gold,
    paddingHorizontal: SPACING.lg,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    ...SHADOW.gold,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
  },

  right: {
    flexDirection: "row",
    alignItems: "center",
  },

  count: {
    color: COLORS.black,
    fontWeight: "900",
    fontSize: 15,
  },

  total: {
    color: COLORS.black,
    fontWeight: "700",
    fontSize: 13,
  },

  view: {
    color: COLORS.black,
    fontWeight: "900",
    marginRight: 4,
  },
});
