import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Divider } from 'react-native-elements';

const MenuItems = ({food}) => {

  return (
    <View style={styles.wrapper}>
      <>
        <View style={styles.menuItems}>
          <FoodInfo food={food} />
          <FoodImage image={food.image} />
        </View>
        <Divider width={0.5} orientation="vertical"
          style={{ borderBottomWidth: 1, marginHorizontal: 20 }}/>
      </>
    </View>
  );
};

export default MenuItems;

const FoodImage = ({image}) => (
  <Image source={{uri: image}} style={styles.foodImage} />
);

const FoodInfo = (props) => (
  <View style={styles.foodInfo}>
    <Text style={styles.title}>{props.food.title}</Text>
    <Text style={styles.desc}>{props.food.description}</Text>
    <Text style={styles.price}>{props.food.price}</Text>
  </View>
);

const styles = StyleSheet.create({
  wrapper:{
    borderRadius: 20,
  },
  menuItems:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  foodImage: {
    width: 100, 
    height : 100,
    borderRadius: 8,
  },
  foodInfo: {
    width: 240,
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 19,
    fontWeight: '600',
  },
  desc: {

  },
  price: {},
})
