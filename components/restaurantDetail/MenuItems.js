import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Divider } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';


const MenuItems = ({restaurantName, food, hideCheckbox, marginLeft}) => { //, marginLeft
  const dispatch = useDispatch();
  
  const selectedItem = (item, checkboxValue) => dispatch({
    type: 'ADD_TO_CART',
    payload: { 
      ...item, 
      restaurantName: restaurantName,
      checkboxValue: checkboxValue,
    }
  });
  
  const cartItems = useSelector(
    state => state.cartReducer.selectedItems.items
  );

  const isFoodInCart = (food, cartItems) => {
    return Boolean(cartItems.find(item => item.title === food.title));
  };
  
  return (
    <View>
      <>
        <View style={styles.menuItems}>
          {hideCheckbox ? (<></>) : (
            <BouncyCheckbox fillColor='green'
              iconStyle={{borderColor: 'lightgray', borderRadius: 0}}
              onPress={(checkboxValue) => selectedItem(food, checkboxValue)}
              isChecked={isFoodInCart(food, cartItems)}
            />
          )}
          <FoodInfo food={food} />
          <FoodImage image={food.image} 
            marginLeft={marginLeft ? marginLeft : 0} />
        </View>
        <Divider width={0.5} orientation="vertical"
          style={{ borderBottomWidth: 1, marginHorizontal: 20 }}/>
      </>
    </View>
  );
};

export default MenuItems;

const FoodImage = ({image, marginLeft}) => (
  <Image source={{uri: image}} 
    style={{
      width: 80, 
      height : 80,
      borderRadius: 8,
      marginLeft: marginLeft,
    }} 
  />
);

const FoodInfo = (props) => (
  <View style={styles.foodInfo}>
    <Text style={styles.title}>{props.food.title}</Text>
    <Text style={styles.desc}>{props.food.description}</Text>
    <Text style={styles.price}>{props.food.price}</Text>
  </View>
);

const styles = StyleSheet.create({
  
  menuItems:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
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
