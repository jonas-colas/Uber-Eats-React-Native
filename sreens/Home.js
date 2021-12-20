import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import { Divider } from 'react-native-elements';
import HeaderTabs from '../components/home/HeaderTabs';
import BottomTabs from '../components/home/BottomTabs';
import SearchBar from '../components/home/SearchBar';
import Categories from '../components/home/Categories';
import RestaurantItems from '../components/home/RestaurantItems';
import { localRestaurants } from '../jsonDatas/resto';
import { yelpApiKey } from '../config';


const Home = ({navigation}) => {
  const [restoData, setRestoData] = useState(localRestaurants);
  const [city, setCity] = useState("SanDiego");
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
        <RestaurantItems 
          restaurantData={restoData} 
          navigation={navigation} 
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
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