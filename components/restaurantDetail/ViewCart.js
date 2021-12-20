import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const ViewCart = () => {
  
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <TouchableOpacity style={styles.touchable}>
          <Text style={styles.text}>View Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ViewCart

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 200,
    zIndex: 999,
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  touchable:{
    marginTop: 20,
    backgroundColor: 'black',
    alignItems: 'center',
    padding: 13,
    borderRadius: 30,
    width: 300,
    position: 'relative',
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});