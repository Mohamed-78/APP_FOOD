import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './products.style'
import { icons } from '../../constants'

const Products = () => {
  return (
    <View style={styles.container}>
        <View style={styles.titleDisplay}>
            <Text style={styles.popularText}>Popular</Text>
            <Text style={styles.positionTitle}>26 Positions</Text>
        </View>
        <View style={styles.productsContainer}>
          <View style={styles.cardContainer}>
            <View style={styles.card}>
                <View>
                  <Image
                    style={styles.cardImage}
                    source={require('../../assets/images/slider3.png')}
                  />
                </View>
                <View style={styles.cardContent}>
                  <View style={styles.productTitlePosition}>
                    <Text style={styles.cardTitle}>Deli & Leisure</Text>
                    <View style={styles.reviewElement}>
                      <Image source={icons.star} resizeMode='cover' style={styles.icon} />
                      <Text style={styles.reviewTitle}>5.0</Text>
                    </View>
                  </View>
                  <Text style={styles.cardSubTitle}>
                    A Burmesse influenced curry of stewed meat (usually pork)
                  </Text>
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
            </View>
          </View>
        </View>
        <View style={styles.productsContainer}>
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <View>
                <Image
                  style={styles.cardImage}
                  source={require('../../assets/images/slider4.png')}
                />
              </View>
              <View style={styles.cardContent}>
                <View style={styles.productTitlePosition}>
                  <Text style={styles.cardTitle}>shrimps</Text>
                    <View style={styles.reviewElement}>
                      <Image source={icons.star} resizeMode='cover' style={styles.icon} />
                      <Text style={styles.reviewTitle}>5.0</Text>
                    </View>
                </View>
                <Text style={styles.cardSubTitle}>
                  A Burmesse influenced curry of stewed meat (usually pork)
                </Text>
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
            </View>
          </View>
        </View>
        <View style={styles.productsContainer}>
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <View>
                <Image
                  style={styles.cardImage}
                  source={require('../../assets/images/product_1.png')}
                />
              </View>
              <View style={styles.cardContent}>
                <View style={styles.productTitlePosition}>
                  <Text style={styles.cardTitle}>Best Steak Dinner</Text>
                    <View style={styles.reviewElement}>
                      <Image source={icons.star} resizeMode='cover' style={styles.icon} />
                      <Text style={styles.reviewTitle}>5.0</Text>
                    </View>
                </View>
                <Text style={styles.cardSubTitle}>
                  A Burmesse influenced curry of stewed meat (usually pork)
                </Text>
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
            </View>
          </View>
        </View>
    </View>
  )
}

export default Products