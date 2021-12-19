import React from 'react';
import { View, Text } from 'react-native';
import { Divider } from 'react-native-elements';
import About from '../components/restaurantDetail/About';

const info = {
  image: "https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg",
  title: 'Farmhouse Kitchen Thai Cuisine',
  description: 'Thai · Comfort Food · $$ · :ticket · 4 :star (2913+)'
};

const RestaurantDetail = () => {

  return (
    <View>
      <About info={info} />
      <Divider width={1.8} style={{marginVertical: 20}} />
    </View>
  );
};

export default RestaurantDetail;

