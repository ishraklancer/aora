import { View, Text, Image } from 'react-native'
import React from 'react'
import {Tabs, Redirect} from 'expo-router'
import {icons} from '../../constants'


const TabIcon = ({icon, color, name, focused}) => {
  return (
    <View className="w-16 pt-8 justify-center items-center gap-2">
      <Image 
        source={icon} 
        resizeMode="cover"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`text-xs ${focused ? 'font-bold' : 'font-bold'}`} 
        style={{color: color, textAlign: 'center'}}>
        {name}
      </Text>
    </View>
  )
}


const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#ffa001',
          tabBarInactiveTintColor: '#cdcde0',
          tabBarStyle: {
            backgroundColor: '#161622',
            borderTopWidth: 1,
            borderTopColor: '#232533',
            height: 84
          },
        }}
      >
        <Tabs.Screen 
        name="home"

        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({focused, color}) => (
            <TabIcon icon={icons.home} color={color} focused={focused} name="Home" />
          ) 

        }}
        />
         <Tabs.Screen 
        name="bookmark"
        options={{
          title: 'Bookmark',
          headerShown: false,
          tabBarIcon: ({focused, color}) => (
            <TabIcon icon={icons.bookmark} color={color} focused={focused} name="Bookmark" />
          ) 

        }}
        />

        <Tabs.Screen 
        name="create"
        options={{
          title: 'Create',
          headerShown: false,
          tabBarIcon: ({focused, color}) => (
            <TabIcon icon={icons.plus} color={color} focused={focused} name="Create" />
          ) 

        }}
        />

      <Tabs.Screen 
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({focused, color}) => (
            <TabIcon icon={icons.profile} color={color} focused={focused} name="Profile" />
          ) 

        }}
      />
      </Tabs>
    </>
  )
}

export default TabsLayout