import { ScrollView, Pressable, Text, StyleSheet } from "react-native";
import { COLORS, SPACING, RADIUS } from "@/src/theme";

type Props = {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
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
              styles.button,
              active && styles.activeButton,
            ]}
          >
            <Text
              style={[
                styles.text,
                active && styles.activeText,
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
    paddingBottom: SPACING.md,
    gap: 10,
  },

  button: {
    backgroundColor: COLORS.charcoal,
    borderRadius: RADIUS.pill,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  activeButton: {
    backgroundColor: COLORS.gold,
    borderColor: COLORS.gold,
  },

  text: {
    color: COLORS.white,
    fontWeight: "700",
  },

  activeText: {
    color: COLORS.black,
  },
});
