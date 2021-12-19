import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";


const BottomTabs = ({activeTab, setActiveTab}) => {
  // const [activeTab, setActiveTab] = useState('Delivery');

  return (
    <View style={styles.bottomTab}> 
      <Icon icon="home" text="Home" />
      <Icon icon="search" text="Browse" />
      <Icon icon="shopping-bag" text="Grocery" />
      <Icon icon="receipt" text="Orders" />
      <Icon icon="user" text="Account" />
    </View>
  );
}

export default BottomTabs;

const Icon = (props) => (
  
  <TouchableOpacity  >
    <View style={styles.viewTab}> 
      <FontAwesome5 name={props.icon} 
        size={25} style={styles.FontAwesome} />
        <Text>{props.text}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  bottomTab: {
    flexDirection: 'row',
    margin: 10,
    marginHorizontal: 30,
    justifyContent: 'space-between',
  },
  FontAwesome:{
    marginBottom: 3,
    alignSelf: 'center',
  },
  viewTab:{

  }
})