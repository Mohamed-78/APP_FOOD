import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './comments.style'
import { images, icons } from '../../constants'

const Comments = () => {
  return (
    <View style={styles.container}>
        <View style={styles.secondHorizontalLine}></View>
        <Text style={styles.commentsText}>The comments</Text>
        <View style={styles.commentsContent}>
            <View style={styles.justifyPosition}>
                <View style={styles.flexStartElement}>
                    <Image source={images.user} resizeMode="cover" style={styles.userImage} />
                    <Text style={styles.userName}>Sarah</Text>
                    <Image source={icons.rating} style={styles.iconsSize} />
                </View>
                <Text style={styles.dateComment}>June 2015</Text>
            </View>
            
        </View>
    </View>
  )
}

export default Comments