import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SPACING, RADIUS } from "@/src/theme";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
};

export default function SearchBar({ value, onChangeText }: Props) {
  return (
    <View style={styles.container}>
      <Ionicons
        name="search"
        size={20}
        color={COLORS.textSecondary}
      />

      <TextInput
        placeholder="Search delicious food..."
        placeholderTextColor={COLORS.textMuted}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: SPACING.lg,
    marginBottom: SPACING.md,
    backgroundColor: COLORS.charcoal,
    borderRadius: RADIUS.pill,
    paddingHorizontal: SPACING.md,
    height: 52,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    color: COLORS.white,
    fontSize: 15,
  },
});
