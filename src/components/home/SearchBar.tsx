import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SPACING, RADIUS, SHADOW } from "@/src/theme";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
};

export default function SearchBar({ value, onChangeText }: Props) {
  return (
    <View style={styles.container}>
      <Ionicons
        name="search"
        size={22}
        color={COLORS.gold}
      />

      <TextInput
        placeholder="Search burgers, pizza, rolls..."
        placeholderTextColor={COLORS.textMuted}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        returnKeyType="search"
      />

      <Ionicons
        name="options-outline"
        size={22}
        color={COLORS.textSecondary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: SPACING.lg,
    marginTop: -22,
    marginBottom: SPACING.lg,
    backgroundColor: "rgba(28,28,30,0.95)",
    borderRadius: RADIUS.pill,
    paddingHorizontal: SPACING.lg,
    height: 58,
    borderWidth: 1,
    borderColor: "rgba(212,175,55,0.25)",
    ...SHADOW.card,
  },

  input: {
    flex: 1,
    marginHorizontal: 12,
    color: COLORS.white,
    fontSize: 15,
  },
});
