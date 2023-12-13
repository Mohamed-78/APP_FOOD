import {
  ScrollView,
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  ImageBackground,
  FlatList,
} from "react-native";
import styles from "./home.style";
import Slider from "../../sliders/Slider";
import Categories from "../../categories/Categories";
import Products from "../../products/Products";
import { COLORS, STYLES, images, SIZES } from "../../../constants";
import { icons } from "../../../constants";
export function Home() {

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "The Soothing Dessert",
      sub_title: "(260 reviews)",
      image: images.firstslider,
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Super Pineapple",
      sub_title: "1kg, Priceg",
      image: images.secondslider,
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f28",
      title: "African mangoes",
      sub_title: "1kg, Priceg",
      image: images.thirdslider,
    },
  ];

  const categories = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Chinese",
      image: icons.chinesse,
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb282a",
      title: "American",
      image: icons.american,
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-dad53abbw82a",
      title: "French",
      image: icons.french,
    },
    {
      id: "bdwacbea-c1b1-46c2-aed5-dad53abm282a",
      title: "Cafe",
      image: icons.cafe,
    },
    {
      id: "bdwacbea-c1b1-46c2-aed5-dad53apb282a",
      title: "Takos",
      image: icons.taco,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={images.bg} resizeMode="cover">
        <View style={styles.firstHeight}>
          <View>
            <Text style={styles.textHeader}>Discover Restaurants</Text>
          </View>
          <View style={styles.iconSearch}>
            <Image source={icons.searchwhite} resizeMode="cover" />
          </View>
        </View>
      </ImageBackground>

        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.cardsContainer}>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => 
                    <Slider item={item} />}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{ columnGap: SIZES.small }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={styles.categoriesContainer}>
                <FlatList
                    data={categories}
                    renderItem={({ item }) => 
                    <Categories item={item} />}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={{ columnGap: SIZES.small }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={styles.secondHorizontalLine}></View>
            <Products />
        </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
