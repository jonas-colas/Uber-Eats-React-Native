import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItems from '../components/RestaurantItems';
import { localRestaurants } from '../jsonDatas/resto';
import { yelpApiKey } from '../config';


const Home = () => {
  // const YELP_API_KEY = yelpApiKey;
  const [restoData, setRestoData] = useState(localRestaurants);
  // const [city, setCity] = useState("San Francisco");
  const [city, setCity] = useState("Miami");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestoFromYelp = async () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${yelpApiKey}`,
      },
    }
    try{
      await fetch(yelpUrl, apiOptions).then(res => res.json())
      .then(json => 
        setRestoData(json.businesses.filter(business =>
          business.transactions.includes(activeTab.toLowerCase())
        )));    
    }catch(e){
      return e.message;
    }
  }

  useEffect(() => {
    getRestoFromYelp();
  }, [city, activeTab])

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.theView}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories/>
        <RestaurantItems restaurantData={restoData} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#ccc',
    flex: 1,
  },
  theView: {
    backgroundColor: 'white',
    padding: 15,
  }
})