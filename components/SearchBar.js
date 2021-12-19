import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {googlePlaceApi} from '../config'

const SearchBar = ({cityHandler}) => {

  return (
    <View style={styles.searchBar}> 
      <GooglePlacesAutocomplete placeholder="Search"
        query={{key: googlePlaceApi}}
        onPress={(data, details = null) => {
          const city = data.description.split(',')[0];
          cityHandler(city)
        }}
        styles={{
          textInput: {
            backgroundColor: '#ccc',
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: '#ccc',
            borderRadius: 50,
            flexWrap: 'row',
            alignItems: 'center',
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{marginLeft: 10}} >
            <Ionicons name="location-sharp" size={24}/>
          </View>
        )} 
        renderRightButton={() => (
          <View style={{
            flexDirection: 'row',
            marginRight: 8,
            backgroundColor: 'white',
            padding: 9,
            borderRadius: 30,
            alignItems: 'center',
          }}>
            <AntDesign name="clockcircle" size={11} style={{marginRight: 6}}/>
            <Text>Search</Text>
          </View>
        )} 
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  searchBar:{
    marginTop: 15,
    flexDirection: 'row',
  },
})