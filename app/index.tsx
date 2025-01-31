// filepath: /d:/code/Web/aora-one/aora/app/index.tsx
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { Link } from "expo-router"; // Import the global.css file in the index.js file:
import { SafeAreaView } from "react-native-safe-area-context";
import { images} from '../constants'

const index = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="h-full">
        <View className="w-full justify-center items-center h-full px-4"> 
          <Image
            source={images.logo} 
            className="w-[130px] [h-130px]"
            resizeMode="contain"
          />
          
          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;