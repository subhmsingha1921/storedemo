import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function CategoryItem(props) {
  return (
    <View
      style={{
        backgroundColor: "rgb(246,246,246)",
        width: 70,
        alignItems: "center",
        marginHorizontal: 10,
      }}
    >
      <View style={{ width: 70, alignItems: "center" }}>
        <Image
          source={props.image}
          style={{ width: 70, height: 80, zIndex: 10 }}
          resizeMode="contain"
        />
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: props.background,
            position: "absolute",
            bottom: 0,
            overflow: "hidden",
          }}
        />
      </View>
      <View>
        <Text style={{ textAlign: "center", fontSize: 12 }}>
          {props.category}
        </Text>
      </View>
    </View>
  );
};
