import { View, Text, StyleSheet } from "react-native";
import { COLORS, SPACING } from "@/src/theme";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <View style={styles.row}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    marginHorizontal: SPACING.lg,
    marginTop: SPACING.lg,
    marginBottom: SPACING.sm,
  },

  title: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "900",
  },
});
