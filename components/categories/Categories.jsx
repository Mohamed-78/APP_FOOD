import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { SIZES, icons } from "../../constants";
import styles from "./categories.style";

const Categories = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={1}>
      <View style={styles.contentContainer}>
        <View style={styles.categorieCercle}>
          <Image source={item.image} resizeMode="cover" />
        </View>

        <View style={styles.textContentCard}>
          <Text style={styles.sliderText} numberOfLines={1}>
            {item.title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Categories;
