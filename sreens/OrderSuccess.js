import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import MenuItems from '../components/restaurantDetail/MenuItems';
import firebase from '../firebase';

const OrderSuccess = ({ route }) => {
  const {restaurantName, totalUSD} = route.params;

  const [lastOrder, setLastOrder] = useState({items: [
    {
      title: "Bologna",
      description: "With butter lettuce, tomato and other stuff",
      price: "$13.50",
      image: 
        "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
    },
  ]});

  const checkMark = require("../assets/animations/check-mark.json");
  const cooking = require("../assets/animations/cooking.json");

  const db = firebase.firestore();
  const unsubscribe = db.collection("orders")
  .orderBy('createdAt', 'desc').limit(1)
  .onSnapshot(snapshot => {
    snapshot.docs.map(doc => {
      setLastOrder(doc.data());
    })
  })

  useEffect(() => {
    unsubscribe();
  }, []);

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <LottieView style={styles.checkMark} 
          source={checkMark}
          autoPlay
          speed={0.5}
          loop={false}
        />
          <Text style={styles.textInfo}>
            Your order at {restaurantName} has been placed for {totalUSD} 
          </Text>
          <ScrollView style={styles.scrollView}>
            {lastOrder.items?.map((item, index) => (
              <MenuItems 
                // restaurantName={restaurantName} 
                food={item} 
                key={index} 
                marginLeft={10}
                hideCheckbox={true}
              /> 
            ))}
          </ScrollView>
          <LottieView style={styles.lottie} 
          source={cooking}
          autoPlay
          speed={0.5}
          loop={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default OrderSuccess;

const styles = StyleSheet.create({
  safe:{
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    margin: 15,
    alignItems: 'center',
    height: '160%',
  },
  checkMark: {
    height: 100,
    alignSelf: 'center',
    marginBottom: 30,
  },
  cooking: {
    height: 200,
    alignSelf: 'center',
  },
  textInfo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});