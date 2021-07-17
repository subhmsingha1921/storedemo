import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, View, Text, FlatList, ScrollView, Image, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from 'react-navigation-header-buttons';
import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import CategoryItem from "../components/CategoryItem";


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


const STORES = [
  {
    id: 1,
    title: "Garments & Shopping",
    imageUrl: require("../../assets/images/madhu.png"),
    flatOffer: 10,
    distance: 2,
    status: "Open",
    star: 5,
  },
  {
    id: 2,
    title: "Dutt Grocery & Sons",
    imageUrl: require("../../assets/images/duttgrocery.png"),
    flatOffer: 3,
    distance: 5,
    status: "Close",
    star: 4,
  },
  {
    id: 3,
    title: "Dutt Jewel & Sons",
    imageUrl: require("../../assets/images/duttjewel.png"),
    flatOffer: 2,
    distance: 3,
    status: "Open",
    star: 4,
  },
  {
    id: 4,
    title: "Dutt Jewel & Sons",
    imageUrl: require("../../assets/images/duttjewel.png"),
    flatOffer: 2,
    distance: 2,
    status: "Open",
    star: 5,
  },
  {
    id: 5,
    title: "Dutt Jewel & Sons",
    imageUrl: require("../../assets/images/duttjewel.png"),
    flatOffer: 2,
    distance: 2,
    status: "Open",
    star: 4,
  },
];

const CATEGORY = [
  {
    id: 1,
    imageUrl: require("../../assets/images/mensfashion.png"),
    category: "Clothing Store",
    background: "rgb(227,227,227)",
  },
  {
    id: 2,
    imageUrl: require("../../assets/images/garmentimage.png"),
    category: "Garments & Shopping",
    background: "rgb(255,235,233)",
  },
  {
    id: 3,
    imageUrl: require("../../assets/images/grocerynew.png"),
    category: "Grocery and Daily Needs",
    background: "rgb(255,230,165)",
  },
  {
    id: 4,
    imageUrl: require("../../assets/images/jewelry1.png"),
    category: "Jewelry Shop",
    background: "rgb(225,255,254)",
  },
  {
    id: 5,
    imageUrl: require("../../assets/images/phone1.png"),
    category: "Mobile & Accessories",
    background: "rgb(214,223,255)",
  },
];


const IoniconsHeaderButton = (props) => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const MaterialHeaderButton = (props) => (
  <HeaderButton IconComponent={MaterialCommunityIcons} iconSize={23} {...props} />
);

// <FontAwesome name="user-circle-o" size={37} color="white" style={{ paddingLeft: 15, paddingTop: 5 }} />

const HeaderAccountLocation = () => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Image source={require('../../assets/images/userprofile.png')} style={{ width: 45, height: 45, marginHorizontal: 15 }} />
      <View>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Location</Text>
        <Text style={{ color: 'white', fontSize: 13, marginTop: -2 }}>Barasat West...</Text>
      </View>
    </View>
  )
}

export default function StoreScreen({ navigation }) {
  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: null,
      headerLeft: () => {
        return <HeaderAccountLocation />
      },
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item title="QRcode" iconName="qr-code-outline" color="white" onPress={() => {}} />
          <Item title="bell" iconName="notifications" color="white" onPress={() => {}} />
          <Item title="help" iconName="help-circle-outline"color="white" onPress={() => {}} />
        </HeaderButtons>
      ),
    });
  }, [navigation]);
  
  const renderCategory = (itemData) => {
    return (
      <CategoryItem
        image={itemData.item.imageUrl}
        category={itemData.item.category}
        background={itemData.item.background}
      />
    );
  };

  const renderHeader = () => {
    return (
      <View style={{ paddingVertical: 10 }}>
        <Text style={{ paddingHorizontal: 10, fontWeight: "bold" }}>
          Store Category
        </Text>
        <FlatList
          style={{ backgroundColor: "rgb(246,246,246)", marginVertical: 10 }}
          keyExtractor={(item) => item.id.toString()}
          data={CATEGORY}
          renderItem={renderCategory}
          showsHorizontalScrollIndicator={false}
          horizontal
        />
        <Text style={{ paddingHorizontal: 10, fontWeight: "bold" }}>
          Store Near You
        </Text>
      </View>
    );
  };

  const renderStores = ({ item }) => {
    return (
      <View
        style={{
          backgroundColor: "rgb(234,238,241)",
          marginHorizontal: 10,
          marginVertical: 10,
          padding: 5,
          borderRadius: 50,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ width: "20%" }}>
          <Image
            style={{ width: 50, height: 50, borderRadius: 25 }}
            source={item.imageUrl}
          />
        </View>
        <View style={{ width: "60%" }}>
          <Text style={{ fontWeight: "bold", fontSize: 12 }}>{item.title}</Text>
          <Text style={{ fontSize: 8 }}>Garments and Shopping</Text>
          <View style={{ flexDirection: 'row', marginVertical: 3 }}>
            <Image source={require('../../assets/images/couponoffer.png')} />
            <Text style={{ fontSize: 10, paddingTop: 2 }}>
              Flat {item.flatOffer}% cashback on purchase anything
            </Text>
          </View>
          <View style={{ flexDirection: 'row' }} >
            <Image source={item.distance > 3 ? require('../../assets/images/car.png') : require('../../assets/images/walking.png')} />
            <Text style={{ fontSize: 8, marginHorizontal: 3 }}>{item.distance} meters</Text>
          </View>
        </View>
        <View style={{ width: "20%" }}>
          <Text style={{ color: item.status == "Open" ? "green" : "red", fontSize: 13, paddingLeft: 10, marginBottom: 10 }}>{item.status}</Text>
          {item.star > 4 ? (
          <>
            <Image style={{ width: 52, height: 22, paddingLeft: 5 }} source={require('../../assets/images/Stargrp5.png')} />
            <Text style={{ paddingLeft: 18, marginTop: -5, fontSize: 10 }}>{item.star}.0</Text>
          </>
          ) : (
          <>
            <Image style={{ width: 42, height: 22 }} source={require('../../assets/images/Stargrp42.png')} />
            <Text style={{ paddingLeft: 18, marginTop: -5, fontSize: 10 }}>{item.star}.0</Text>
          </>
          )}
        </View>
      </View>
    );
  };
  
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffab3a" />
      <View style={styles.breadcrumb}>
        <View style={styles.filter}>
          <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#eaeef1', borderRadius: 10 }}>
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.breadText}>Sort By Distance</Text>
            </TouchableOpacity>
            <FontAwesome name="caret-down" size={14} color="#9c9d9f" style={{ paddingRight: 5 }} />
          </View>
          <Text style={styles.breadText}>Open Now</Text>
        </View>
        <Text style={styles.breadText}>
          Home Delivery
        </Text>
      </View>
      <MapView 
        style={styles.map} 
        initialRegion={{
          latitude: 22.726156,
          longitude: 88.474960,
          latitudeDelta: 0.028,
          longitudeDelta: 0.029,
        }}
      />
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={STORES}
        renderItem={renderStores}
        horizontal={false}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 200 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(246,246,246)',
  },
  breadcrumb: {
    width: '100%',
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  filter: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-between',
  },
  breadText: {
    borderRadius: 10,
    fontSize: 10,
    color: '#9c9d9f',
    backgroundColor: '#eaeef1',
    paddingHorizontal: 10,
    textAlignVertical: 'center',
  },
  map: {
    height: 200,
  },
  category: {
    width: '100%',
    height: SCREEN_HEIGHT / 4,
  },
});
