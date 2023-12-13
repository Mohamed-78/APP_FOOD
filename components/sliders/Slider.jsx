import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './slider.style'
import { icons, images } from '../../constants'

const Slider = ({ item }) => {
  return (
    <TouchableOpacity style={styles.sliderElement}>

      <TouchableOpacity style={styles.container} activeOpacity={1}>
        <View style={styles.imgShadow}>
          <Image source={item.image} resizeMode="cover" style={styles.sliderImg} />
        </View>

        <View style={styles.textContentCard}>
          <Text style={styles.sliderText} numberOfLines={1}>
            {item.title}
          </Text>

          <View style={styles.ratingElement}>
              <Image source={icons.rating} resizeMode="cover" style={styles.ratingSize}/>
              <Text style={styles.reviews}>5</Text>
              <Text style={styles.totalReviews}>{item.sub_title}</Text>
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

        </View>

      </TouchableOpacity>

    </TouchableOpacity>
  )
}

export default Slider