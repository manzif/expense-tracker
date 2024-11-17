import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ListingsScreen from '../screens/ListingsScreen';
import AccountScreen from '../screens/AccountScreen';
import ListingEditScreen from '../screens/ListingEditScreen';
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchExpenses } from "../redux/actions/expensesActions";


const Tab = createBottomTabNavigator();

const AppNavigator = () => {

      const { user } = useSelector((state) => state.login);
      const dispatch = useDispatch();
      const fetchExpenseAction = bindActionCreators(fetchExpenses, dispatch)
      useEffect(() => {
          fetchExpenseAction(user.id);
      }, []);
    return (
        <Tab.Navigator>
          <Tab.Screen 
            name="Add Expense" 
            component={ListingEditScreen} 
            options={{
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons 
                name='plus-circle' 
                color={color} 
                size={size} />
              ),
            }}
          />
          <Tab.Screen 
            name="View Expenses" 
            component={ListingsScreen} 
            options={{
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons 
                  name='cash' 
                  color={color} 
                  size={size} />
              ),
            }}
          />
          <Tab.Screen 
            name="Profile" 
            component={AccountScreen}
            options={{
              tabBarIcon: ({color, size}) => (
                <MaterialCommunityIcons 
                  name='account' 
                  color={color} 
                  size={size} />
              ),
            }}
          />
        </Tab.Navigator>
    );
}

export default AppNavigator
