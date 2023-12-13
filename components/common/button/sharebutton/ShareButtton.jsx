import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './sharebutton.style'
import { icons } from '../../../../constants'

export default function ShareButton({ color, style, onClick }) {
    return (
        <TouchableOpacity style={[{...style}]} onPress={onClick}>
            <Image source={color==='black' ? icons.share : icons.share} style={styles.button}/>
        </TouchableOpacity>
    )
}