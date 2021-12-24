import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from './sreens/Home';
import RestaurantDetail from './sreens/RestaurantDetail';
import OrderSuccess from './sreens/OrderSuccess';
import { Provider as ReduxProvider } from "react-redux";
import configureStore from './redux/store';

const store = configureStore();

const RootNavigation = () => {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  return (
    <ReduxProvider store={store} >
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" 
          screenOptions={screenOptions}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
          <Stack.Screen name="OrderSuccess" component={OrderSuccess} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
};

export default RootNavigation;
