import { useEffect, useMemo, useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { COLORS } from "@/src/theme";
import { api } from "@/src/api";

import Hero from "@/src/components/home/Hero";
import SearchBar from "@/src/components/home/SearchBar";
import CategoryRow from "@/src/components/home/CategoryRow";
import ProductCard from "@/src/components/home/ProductCard";
import SectionTitle from "@/src/components/home/SectionTitle";
import OfferBanner from "@/src/components/home/OfferBanner";

export default function HomeScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const [menu, setMenu] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  async function load() {
    try {
      const data = await api.menu();
      setMenu(Array.isArray(data) ? data : []);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  const categories = useMemo(() => {
    return [...new Set(menu.map((i: any) => i.category).filter(Boolean))];
  }, [menu]);

  const filtered = useMemo(() => {
    return menu.filter((item: any) => {
      const okCategory =
        category === "All" || item.category === category;

      const okSearch =
        item.name
          ?.toLowerCase()
          .includes(search.toLowerCase());

      return okCategory && okSearch;
    });
  }, [menu, category, search]);
  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.black,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color={COLORS.gold} />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.black,
        paddingTop: insets.top,
      }}
    >
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              load();
            }}
            tintColor={COLORS.gold}
            colors={[COLORS.gold]}
          />
        }
      >
        <Hero />

        <SearchBar
          value={search}
          onChangeText={setSearch}
        />

        <CategoryRow
          categories={categories}
          selected={category}
          onSelect={setCategory}
        />

        <OfferBanner />

        <SectionTitle title="Popular Items" />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingBottom: 20,
          }}
        >
          {filtered.map((item: any) => (
            <ProductCard
              key={item.id}
              item={item}
              onPress={() =>
                router.push(`/product/${item.id}`)
              }
            />
          ))}
        </ScrollView>

        <SectionTitle title="Recommended For You" />
        <View style={styles.grid}>
          {filtered.map((item: any) => (
            <ProductCard
              key={`grid-${item.id}`}
              item={item}
              onPress={() => router.push(`/product/${item.id}`)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
});
