import React, { useState } from 'react';
import { View, Text, StyleSheet, 
  TouchableOpacity, 
  Modal} from 'react-native';
import { useSelector } from 'react-redux';
import OrderItem from './OrderItem';

const ViewCart = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const {items, restaurantName} = useSelector(
    state => state.cartReducer.selectedItems
  );

  const total = items
  .map(item => Number(item.price.replace("$", "")))
  .reduce((prev, cur) => prev + cur, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  })

  const checkoutModalContent = () => (
    <>
      <View style={styles.modalContainer}>
        <View style={styles.modalCheckoutContainer}>
          <Text style={styles.restaurantName}>
            {restaurantName}
          </Text>
          {items?.map((item, i) => (
            <OrderItem key={i} item={item} />
          ))}
          <View style={styles.subtotalContainer}>
            <Text style={styles.subtotalText}>Subtotal</Text>
            <Text> {totalUSD} </Text>
          </View>
          <View style={styles.buttonCheckout}>
            <TouchableOpacity 
              onPress={() => setModalVisible(false)}
              style={styles.touch}
            >
              <Text style={styles.textCheckout}>
                Checkout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );

  return (
    <>
    <Modal 
      animationType="slide" 
      visible={modalVisible} 
      transparent={true} 
      onRequestClose={() => setModalVisible(false)}
    >
      {checkoutModalContent()}
    </Modal>
    {total ? (
      <View style={styles.container}>
        <View style={styles.view}>
          <TouchableOpacity 
            style={styles.touchable}
            onPress={() => setModalVisible(true)}
          >
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
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  modalCheckoutContainer: {
    backgroundColor: "white",
    padding: 16,
    height: 500,
    borderWidth: 1,
  },
  restaurantName: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 10,
  },
  subtotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  subtotalText: {
    textAlign: "left",
    fontWeight: "600",
    fontSize: 15,
    marginBottom: 10,
  },
  buttonCheckout: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  touch:{
    marginTop: 20,
    backgroundColor: 'black',
    alignItems: 'center',
    padding: 13,
    borderRadius: 30,
    width: 300,
    position: "relative",
  },
  textCheckout:{
    fontSize: 20,
    color: 'white',
  },
});