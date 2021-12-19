import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const About = ({info}) => {
  return (
    <View>
      <RestoImage image={info.image} />
      <RestoTitle title={info.title} />
      <RestoDescription desc={info.description} />
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