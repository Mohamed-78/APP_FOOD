import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import styles from "./detail.style";
import { icons, images } from "../../../constants";
import BackButton from "../../common/button/backbutton/BacKButton";
import ShareButton from "../../common/button/sharebutton/ShareButtton";

const Detail = () => {
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
        </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default Detail;
