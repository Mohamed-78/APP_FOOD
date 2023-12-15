import React from 'react'
import { View, Text } from 'react-native'
import styles from './comments.style'

const Comments = () => {
  return (
    <View style={styles.container}>
        <View style={styles.secondHorizontalLine}></View>
        <Text style={styles.commentsText}>The comments</Text>
        <Text>Comments</Text>
    </View>
  )
}

export default Comments