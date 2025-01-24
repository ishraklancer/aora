// filepath: /d:/code/Web/aora-one/aora/app/index.tsx
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router"; // Import the global.css file in the index.js file:

const index = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-4xl font-pblack">Hello Freli!</Text>
      <Link href="/home" className="text-blue-500">
        Go to Home
      </Link>
    </View>
  );
};

export default index;
