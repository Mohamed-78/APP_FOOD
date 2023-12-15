import React from "react";
import { FlatList, Image, Text, View, TouchableOpacity } from "react-native";
import { icons, images } from "../../constants";
import styles from "./recommended.style";

export function Recommended({item}){
  return (
    <View style={styles.sliderElement}>
      <TouchableOpacity style={styles.container} activeOpacity={1}>
        <View style={styles.imgShadow}>
          <Image source={item.image} resizeMode="cover" style={styles.sliderImg} />
        </View>

        <View style={styles.textContent}>
          <Text style={styles.sliderText} numberOfLines={1}>
            {item.title}
          </Text>
        </View>
        <Text style={styles.sliderPrice}>
          {item.price}
        </Text>
      </TouchableOpacity>
    </View>
  )
};

export default Recommended;
