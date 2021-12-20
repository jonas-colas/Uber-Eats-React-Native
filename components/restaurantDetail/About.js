import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// const yelpResto = {
//   name: 'Farmhouse Kitchen Thai Cuisine',
//   image: "https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg",
//   price: '$$',
//   reviews: 1500,
//   rating: 4.5,
//   categories: [
//     {title: 'Thai'}, 
//     {title: 'Comfort Food'}, 
//     {title: 'Coffee'},
//     {title: 'Ice Cream'},
//     {title: 'Snacks'},
//   ],
// };
// const {name, image, price, reviews, rating, categories} = yelpResto;


const About = ({params}) => {
  const {name, image, reviews, rating, categories } = params;
  const price = '$$';
  const formattedCategories = categories.map(cat => cat.title).join(" . ");
  
  const description = `${formattedCategories} ${price ? " . " + price : ""} · 🎫 · ${rating} ⭐ (${reviews}+)`;

  return (
    <View>
      <RestoImage image={image} />
      <RestoTitle title={name} />
      <RestoDescription desc={description} />
    </View>
  );
};

export default About;

const RestoImage = (props) => (
  <Image source={{uri: props.image}} 
    style={{width: '100%', height: 180}} />
);

const RestoTitle = (props) => (
  <Text style={styles.title}>{props.title}</Text>
);

const RestoDescription = (props) => (
  <Text style={styles.desc}>{props.desc}</Text>
);

const styles = StyleSheet.create({
  title: {
    fontSize: 29,
    fontWeight: '600',
    marginTop: 10,
    marginHorizontal: 15,
  },
  desc:{
    fontSize: 15.5,
    fontWeight: '400',
    marginTop: 10,
    marginHorizontal: 15,
  }
})