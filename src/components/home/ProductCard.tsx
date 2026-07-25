import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SPACING, RADIUS, SHADOW } from "@/src/theme";
import { useApp } from "@/src/store";

type Props = {
  item: any;
  onPress: () => void;
};

export default function ProductCard({ item, onPress }: Props) {
  const {
  addToCart,
  wishlist,
  toggleWishlist,
} = useApp();

const liked = wishlist.includes(item.id);

  return (
    <Pressable style={styles.card} onPress={onPress}>
      <View style={styles.imageWrap}>
        {item.image ? (
          <Image
            source={item.image}
            style={styles.image}
            contentFit="cover"
          />
        ) : (
          <View style={styles.placeholder}>
            <Ionicons
              name="restaurant"
              size={42}
              color={COLORS.gold}
            />
          </View>
        )}

        {!!item.is_bestseller && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>BEST SELLER</Text>
          </View>
        )}

        <Pressable
  style={styles.favBtn}
  onPress={() => toggleWishlist(item.id)}
>
  <Ionicons
    name={liked ? "heart" : "heart-outline"}
    size={18}
    color={liked ? "#FF4D6D" : COLORS.white}
  />
</Pressable>
      </View>

      <View style={styles.body}>
        <Text numberOfLines={1} style={styles.name}>
          {item.name}
        </Text>

        <Text numberOfLines={2} style={styles.desc}>
          {item.description || "Freshly prepared by Mezbaan"}
        </Text>

        <View style={styles.bottom}>
          <View>
            <Text style={styles.price}>₹{item.price}</Text>
          </View>

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
            <Ionicons
              name="add"
              size={18}
              color={COLORS.black}
            />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 180,
    backgroundColor: COLORS.charcoal,
    borderRadius: RADIUS.lg,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: COLORS.border,
    marginRight: SPACING.md,
    ...SHADOW.card,
  },

  imageWrap: {
    height: 140,
    position: "relative",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  placeholder: {
    flex: 1,
    backgroundColor: COLORS.surfaceTint,
    justifyContent: "center",
    alignItems: "center",
  },

  badge: {
    position: "absolute",
    left: 10,
    top: 10,
    backgroundColor: COLORS.gold,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
  },

  badgeText: {
    color: COLORS.black,
    fontSize: 10,
    fontWeight: "900",
  },

  favBtn: {
    position: "absolute",
    right: 10,
    top: 10,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "center",
    alignItems: "center",
  },

  body: {
    padding: SPACING.md,
  },

  name: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "800",
  },

  desc: {
    color: COLORS.textSecondary,
    marginTop: 6,
    fontSize: 12,
    minHeight: 34,
  },

  bottom: {
    marginTop: SPACING.md,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  price: {
    color: COLORS.gold,
    fontWeight: "900",
    fontSize: 18,
  },

  addBtn: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: COLORS.gold,
    justifyContent: "center",
    alignItems: "center",
  },
});
