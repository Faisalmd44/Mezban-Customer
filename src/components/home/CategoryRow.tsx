import { ScrollView, Pressable, Text, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SPACING, RADIUS } from "@/src/theme";

type Props = {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
};

const iconFor = (name: string) => {
  const n = name.toLowerCase();

  if (n.includes("pizza")) return "pizza-outline";
  if (n.includes("burger")) return "fast-food-outline";
  if (n.includes("roll")) return "restaurant-outline";
  if (n.includes("fries")) return "nutrition-outline";
  if (n.includes("drink")) return "wine-outline";
  if (n.includes("beverage")) return "cafe-outline";
  if (n.includes("chicken")) return "egg-outline";
  if (n.includes("rice")) return "restaurant-outline";
  return "grid-outline";
};

export default function CategoryRow({
  categories,
  selected,
  onSelect,
}: Props) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {["All", ...categories].map((item) => {
        const active = selected === item;

        return (
          <Pressable
            key={item}
            onPress={() => onSelect(item)}
            style={[
              styles.card,
              active && styles.activeCard,
            ]}
          >
            <View
              style={[
                styles.iconWrap,
                active && styles.activeIconWrap,
              ]}
            >
              <Ionicons
                name={iconFor(item) as any}
                size={22}
                color={active ? COLORS.black : COLORS.gold}
              />
            </View>

            <Text
              numberOfLines={1}
              style={[
                styles.label,
                active && styles.activeLabel,
              ]}
            >
              {item}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SPACING.lg,
    paddingBottom: SPACING.lg,
    gap: 12,
  },

  card: {
    width: 82,
    alignItems: "center",
  },

  iconWrap: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: COLORS.charcoal,
    borderWidth: 1,
    borderColor: COLORS.border,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },

  activeIconWrap: {
    backgroundColor: COLORS.gold,
    borderColor: COLORS.gold,
  },

  label: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
  },

  activeLabel: {
    color: COLORS.gold,
  },

  activeCard: {
    transform: [{ scale: 1.05 }],
  },
});
