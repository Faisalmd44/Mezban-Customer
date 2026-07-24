import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SPACING, RADIUS, SHADOW } from "@/src/theme";
import { useApp } from "@/src/store";

type Props = {
  item: any;
  onPress: () => void;
};

export default function ProductCard({ item, onPress }: Props) {
  const { addToCart } = useApp();

  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.imagePlaceholder}>
        <Ionicons name="restaurant" size={36} color={COLORS.gold} />
      </View>

      <Text numberOfLines={1} style={styles.name}>
        {item.name}
      </Text>

      <Text numberOfLines={2} style={styles.desc}>
        {item.description || "Freshly prepared by Mezbaan"}
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>₹{item.price}</Text>

        <Pressable
          style={styles.addBtn}
          onPress={() =>
            addToCart({
              item_id: item.id,
              name: item.name,
              price: item.price,
              quantity: 1,
              image: item.image,
            })
          }
        >
          <Ionicons name="add" size={18} color={COLORS.black} />
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 170,
    backgroundColor: COLORS.charcoal,
    borderRadius: RADIUS.lg,
    padding: SPACING.md,
    marginRight: SPACING.md,
    borderWidth: 1,
    borderColor: COLORS.border,
    ...SHADOW.card,
  },

  imagePlaceholder: {
    height: 120,
    borderRadius: RADIUS.md,
    backgroundColor: COLORS.surfaceTint,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: SPACING.md,
  },

  name: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: "800",
  },

  desc: {
    color: COLORS.textSecondary,
    fontSize: 12,
    marginTop: 4,
    minHeight: 34,
  },

  footer: {
    marginTop: SPACING.md,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  price: {
    color: COLORS.gold,
    fontWeight: "900",
    fontSize: 16,
  },

  addBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: COLORS.gold,
    alignItems: "center",
    justifyContent: "center",
  },
});
