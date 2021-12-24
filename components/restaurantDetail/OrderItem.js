import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const OrderItem = ({item}) => {
  const {title, price} = item;

  return (
    <View style={styles.order}>
      <Text style={styles.textTitle}> {title} </Text>
      <Text style={styles.textPrice}> {price} </Text>
    </View>
  )
}

export default OrderItem

const styles = StyleSheet.create({
  order:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
  },
  textTitle: {
    fontWeight: "600",
    fontSize: 16,
  },
  textPrice: {
    opacity: 0.7,
    fontSize: 16,
    
  },
});