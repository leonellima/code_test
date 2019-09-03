import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import COLORS from '../../../constants/Colors';
import ResumeScreen from '../scenes/Resume';
import TasksScreen from '../scenes/Tasks';
import SettingsScreen from '../scenes/Settings';

const TabNavigator = createMaterialBottomTabNavigator(
	{
	  Resume: { 
      screen: ResumeScreen,
      navigationOptions: {
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          iconName = `${Platform.OS === 'android' ? 'md' : 'ios'}-information-circle${focused ? '' : '-outline'}`;
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        }
      }
    },
	  Tasks: { 
      screen: TasksScreen,
      navigationOptions: {
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          iconName = `${Platform.OS === 'android' ? 'md' : 'ios'}-list${focused ? '' : '-box'}`;
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        }
      }
    },
	  Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          iconName = `${Platform.OS === 'android' ? 'md' : 'ios'}-settings`;
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        }
      }
    },
	},
  {
    initialRouteName: 'Resume',
    activeColor: '#ffffff',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: COLORS.primary },
  }
);

export default createAppContainer(TabNavigator);
