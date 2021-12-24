import React from 'react';
import { View, Text, StyleSheet, 
  TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

const ViewCart = () => {
  const items = useSelector(
    state => state.cartReducer.selectedItems.items
  );

  const total = items
  .map(item => Number(item.price.replace("$", "")))
  .reduce((prev, cur) => prev + cur, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  })

  console.log(totalUSD);

  return (
    <>
    {total ? (
      <View style={styles.container}>
        <View style={styles.view}>
          <TouchableOpacity style={styles.touchable}>
            <Text style={styles.text}>View Cart</Text>
            <Text style={styles.text}>{totalUSD}</Text>
          </TouchableOpacity>
        </View>
      </View>
    ) : (
      <></>
    )}
    </>
  );
}

export default ViewCart

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    left: 22,
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
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 15,
    borderRadius: 30,
    width: 275,
    position: 'relative',
  },
  text: {
    color: "white",
    fontSize: 20,
    marginRight: 30,
  },
});