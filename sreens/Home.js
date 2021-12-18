import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native'
import Categories from '../components/Categories'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'


const Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.theView}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#eee',
    flex: 1,
  },
  theView: {
    backgroundColor: 'white',
    padding: 15,
  }
})