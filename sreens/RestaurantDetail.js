import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';
import About from '../components/restaurantDetail/About';
import MenuItems from '../components/restaurantDetail/MenuItems';
import ViewCart from '../components/restaurantDetail/ViewCart';
import { foods } from '../jsonDatas/menu';

// const info = {
//   image: "https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg",
//   title: 'Farmhouse Kitchen Thai Cuisine',
//   description: 'Thai · Comfort Food · $$ · 🎫 · 4 ⭐ (2913+)'
// }; 


const RestaurantDetail = ({route, navigation}) => {
  // const {name, image, reviews, rating, categories } = route.params;

  return (
    <View>
      <About params={route.params} />
      <Divider width={1.8} style={{marginVertical: 20}} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {foods.map((food, index) => (
          <MenuItems 
            restaurantName={route.params.name} 
            food={food} 
            key={index} 
            marginLeft={-25}
            // hideCheckbox={false}
          /> 
        ))}
      </ScrollView>
      <ViewCart navigation={navigation} 
        restaurantname={route.params.name}
      />
    </View>
  );
};

export default RestaurantDetail;

