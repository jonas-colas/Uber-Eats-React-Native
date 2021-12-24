import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const Loader = () => {

  const scanner = require("../assets/animations/scanner.json");

  return (
    <View style={styles.container}>
      <LottieView style={styles.lottie} 
        source={scanner}
        autoPlay
        speed={3}
        // loop={false}
      />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    position: 'absolute',
    opacity: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    // flex: 1,
  },
  scanner: {
    height: 200,
    alignSelf: 'center',
  },
});