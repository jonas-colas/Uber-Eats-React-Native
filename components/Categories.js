import React from 'react'
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'

const items = [
  { image: require('../assets/images/shopping-bag.png'), text: 'Pick-up' },
  { image: require('../assets/images/soft-drink.png'), text: 'Soft Drinks' },
  { image: require('../assets/images/bread.png'), text: 'Bakery Items' },
  { image: require('../assets/images/fast-food.png'), text: 'Fast Foods' },
  { image: require('../assets/images/deals.png'), text: 'Deals' },
  { image: require('../assets/images/coffee.png'), text: 'Coffee & Tea' },
  { image: require('../assets/images/desserts.png'), text: 'Desserts' },
];


const Categories = () => {
  return (
    <View style={styles.firstView} >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View style={styles.viewImg} key={index}>
            <Image source={item.image} style={styles.imgCat} />
            <Text style={styles.textImg}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  firstView:{
    marginTop: 5,
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingLeft: 20,
  },
  viewImg:{
    alignItems: 'center',
    marginRight: 30,
  },
  imgCat: {
    width: 50, 
    height: 50, 
    resizeMode: "contain",
  },
  textImg: {
    fontSize: 13, 
    fontWeight: "900",
  }
})