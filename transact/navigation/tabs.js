import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import MyCards from '../screens/MyCards'
import Statistics from '../screens/Statistics'
import Settings from '../screens/Settings';


const Tab = createBottomTabNavigator()

const Tabs = () => {
  return ( 
    <Tab.Navigator
        tabBarOptions = {{
            showLabel: false,
            style: {
                position: 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: '#fff',
                borderRadius: 15,
                height: 90,
                ...styles.shadow
            },
        }}
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        headerShown: false,

      }}
    >
      <>
        <Tab.Screen name="Home" component={HomeScreen} options ={{
          tabBarIcon: ({focused}) => (
            <View >
              <Image
              source={require('../assets/home.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? 'blue' : 'gray'
              }}
              />
              
            </View>
          )
        }} />
        <Tab.Screen name="My Cards" component={MyCards} options ={{
          tabBarIcon: ({focused}) => (
            <View >
              <Image
              source={require('../assets/myCards.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? 'blue' : 'gray'
              }}
              />
            </View>
          )
        }} />
        <Tab.Screen name="Statistics" component={Statistics} options ={{
          tabBarIcon: ({focused}) => (
            <View >
              <Image
              source={require('../assets/statictics.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? 'blue' : 'gray'
              }}
              />
            </View>
          )
        }}/>
        <Tab.Screen name="Settings" component={Settings} options ={{
          tabBarIcon: ({focused}) => (
            <View >
              <Image
              source={require('../assets/settings.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? 'blue' : 'gray'
              }}
              />
            </View>
          )
        }} />
      </>
    </Tab.Navigator>
  );
}

export default Tabs

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5D40',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    }
})