import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { icons } from '../../../../constants'
import styles from './backbutton.style'

export default function BackButton({ color, style, onClick }) {
    return (
        <TouchableOpacity style={[{...style}]} onPress={onClick}>
            <Image source={color==='black' ? icons.back : icons.back} style={styles.button}/>
        </TouchableOpacity>
    )
}