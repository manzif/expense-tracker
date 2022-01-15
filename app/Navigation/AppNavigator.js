import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListingsScreen from '../screens/ListingsScreen';
import AccountScreen from '../screens/AccountScreen';
import ListingEditScreen from '../screens/ListingEditScreen';


const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
        <Tab.Navigator>
          <Tab.Screen name="Add Expense" component={ListingEditScreen} />
          <Tab.Screen name="View Expenses" component={ListingsScreen} />
          <Tab.Screen name="Profile" component={AccountScreen} />
        </Tab.Navigator>
    );
}

export default AppNavigator