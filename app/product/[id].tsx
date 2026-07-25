import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { Image } from "expo-image";
import { Stack, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { api } from "@/src/api";
import { COLORS, SPACING, RADIUS } from "@/src/theme";
import { useApp } from "@/src/store";

export default function ProductScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const {
    addToCart,
    wishlist,
    toggleWishlist,
    pushRecentlyViewed,
  } = useApp();

  const [item, setItem] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await api.item(id!);
        setItem(data);
        pushRecentlyViewed(id!);
      } finally {
        setLoading(false);
      }
    }

    if (id) load();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={COLORS.gold} />
      </View>
    );
  }

  if (!item) return null;

  const liked = wishlist.includes(item.id);

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />

      <ScrollView style={styles.container}>
        <Image
          source={item.image || "https://picsum.photos/800/600"}
          style={styles.image}
          contentFit="cover"
        />

        <Pressable
          style={styles.heart}
          onPress={() => toggleWishlist(item.id)}
        >
          <Ionicons
            name={liked ? "heart" : "heart-outline"}
            size={24}
            color={liked ? "#ff4d6d" : "#fff"}
          />
        </Pressable>

        <View style={styles.content}>
          <Text style={styles.name}>{item.name}</Text>

          <Text style={styles.price}>₹{item.price}</Text>

          <Text style={styles.desc}>
            {item.description || "Freshly prepared by Mezbaan."}
          </Text>

          <Pressable
            style={styles.button}
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
              name="cart"
              color={COLORS.black}
              size={20}
            />

            <Text style={styles.buttonText}>
              Add To Cart
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    backgroundColor: COLORS.black,
    justifyContent: "center",
    alignItems: "center",
  },

  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },

  image: {
    width: "100%",
    height: 320,
  },

  heart: {
    position: "absolute",
    top: 60,
    right: 20,
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "rgba(0,0,0,.45)",
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    padding: SPACING.xl,
  },

  name: {
    color: COLORS.white,
    fontSize: 28,
    fontWeight: "900",
  },

  price: {
    marginTop: 10,
    color: COLORS.gold,
    fontSize: 26,
    fontWeight: "900",
  },

  desc: {
    marginTop: 16,
    color: COLORS.textSecondary,
    lineHeight: 24,
  },

  button: {
    marginTop: 30,
    height: 56,
    borderRadius: RADIUS.pill,
    backgroundColor: COLORS.gold,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
  },

  buttonText: {
    color: COLORS.black,
    fontWeight: "900",
    fontSize: 16,
  },
});
