import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const RestaurantItems = ({restaurantData}) => {

  return (
    <TouchableOpacity activeOpacity={1} style={styles.touchable_1}>
      {restaurantData?.map((item, i) => (
        <View style={styles.RestaurantItems} key={i} >
          <RestaurantImage img={item.image_url} />
          <RestaurantInfo name={item.name} rating={item.rating} />
        </View>
      ))}
    </TouchableOpacity>
  )
}

export default RestaurantItems

const RestaurantImage = ({img}) => (
  <>
    <Image source={{uri: img}} style={{width: '100%', height: 180}} />
    <TouchableOpacity style={styles.touchable_2} >
      <MaterialCommunityIcons name="heart-outline" size={25} 
      color="#fff" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = ({name, rating}) => (
  <View style={styles.viewInfo}>
    <View>
      <Text style={{fontSize: 15, fontWeight: "bold"}}>
        {name}
      </Text>
      <Text style={{fontSize: 13, color: "gray"}}>
        30-45 · min
      </Text>
    </View>
    <View style={styles.review}>
      <Text> {rating} </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  touchable_1:{
    marginBottom: 30,
  },
  RestaurantItems: {
    marginTop: 10,
    padding: 15,
    backgroundColor: "#fff"
  },
  touchable_2:{
    position: "absolute",
    right: 20,
    top: 20,
  },
  viewInfo:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  review: {
    backgroundColor: "#ccc", 
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  }
})