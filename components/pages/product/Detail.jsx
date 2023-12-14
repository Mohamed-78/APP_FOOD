import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList,
} from "react-native";
import styles from "./detail.style";
import { SIZES, icons, images } from "../../../constants";
import BackButton from "../../common/button/backbutton/BacKButton";
import ShareButton from "../../common/button/sharebutton/ShareButtton";
const Detail = () => {
    const DATA = [
        {
          id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
          title: "Raspberry cake",
          price: "$10.5",
          image: images.firstslider,
        },
        {
          id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
          title: "Fruit yogurt",
          price: "$6.5",
          image: images.secondslider,
        },
        {
          id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f28",
          title: "Durt mangoes",
          price: "$9.5",
          image: images.thirdslider,
        },
    ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ height: "35%" }}>
        <ImageBackground
          source={images.secondslider}
          resizeMode="cover"
          style={{ height: "100%", justifyContent: "center" }}
        >
        <View style={styles.actionButton}>
            <View style={styles.buttonCercle}>
                <BackButton />
            </View>
            <View style={styles.buttonCercle}>
                <ShareButton />
            </View>
        </View>
        <View style={styles.textContentCard}>
          <Text style={styles.sliderText} numberOfLines={1}>
            The Soothing Dessert
          </Text>

          <View style={styles.ratingElement}>
              <Image source={icons.rating} resizeMode="cover" style={styles.ratingSize}/>
              <Text style={styles.reviews}>5</Text>
              <Text style={styles.totalReviews}>(260 reviews)</Text>
          </View>

          <View style={styles.elementPosition}>
            <View style={styles.iconWithText}>
                <Image source={icons.spoonandfork} resizeMode="cover" style={styles.icon} />
                <Text style={styles.iconText}>Dessert</Text>
              </View>

              <View style={styles.iconWithText}>
                <Image source={icons.pin} resizeMode="cover" style={styles.icon} />
                <Text style={styles.iconText}>1.6km</Text>
              </View>

              <View style={styles.iconWithText}>
                <Image source={icons.coin} resizeMode="cover" style={styles.icon} />
                <Text style={styles.iconText}>23/person</Text>
              </View>
            </View>
            <View style={styles.secondHorizontalLine}></View>
            <View style={styles.afterHorizontalLine}>
                <View style={styles.element}>
                    <Image source={icons.hour} resizeMode="cover" style={styles.icon} />
                    <Text style={styles.text}>09:00-22:00</Text>
                </View>
                <View style={styles.element}>
                    <Image source={icons.parkingarea} resizeMode="cover" style={styles.icon} />
                    <Text style={styles.text}>Parking lot</Text>
                </View>
                <View style={styles.element}>
                    <Image source={icons.house} resizeMode="cover" style={styles.icon} />
                    <Text style={styles.text}>18 West 29th Street</Text>
                </View>
            </View>
        </View>
        {/* <View style={styles.cardsContainer}>
            <FlatList
                data={DATA}
                renderItem={({ item }) =>
                <Recommended item={item} />}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ columnGap: SIZES.small }}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View> */}
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default Detail;
