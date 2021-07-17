import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Dimensions, StyleSheet, View, Text, FlatList, ScrollView, Image } from 'react-native';
import MapView from 'react-native-maps';
import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from 'react-navigation-header-buttons';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import CategoryItem from "../components/CategoryItem";


const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;


const STORES = [
  {
    id: 1,
    title: "Garments & Shopping",
    imageUrl: require("../../assets/images/madhu.png"),
    flatOffer: 10,
    distance: 10,
    status: "",
  },
  {
    id: 2,
    title: "Dutt Grocery & Sons",
    imageUrl: require("../../assets/images/duttgrocery.png"),
    flatOffer: 3,
    distance: 3,
    status: "Close",
  },
  {
    id: 3,
    title: "Dutt Jewel & Sons",
    imageUrl: require("../../assets/images/duttjewel.png"),
    flatOffer: 2,
    distance: 2,
    status: "Open",
  },
  {
    id: 4,
    title: "Dutt Jewel & Sons",
    imageUrl: require("../../assets/images/duttjewel.png"),
    flatOffer: 2,
    distance: 2,
    status: "Open",
  },
  {
    id: 5,
    title: "Dutt Jewel & Sons",
    imageUrl: require("../../assets/images/duttjewel.png"),
    flatOffer: 2,
    distance: 2,
    status: "Open",
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
    imageUrl: require("../../assets/images/jewelry1.png"),
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

export default function StoreScreen({ navigation }) {
  
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Location',
      headerLeft: () => {
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item title="account" iconName="account-circle" color="white" onPress={() => {}} />
        </HeaderButtons>
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
          <View>
            <Text style={{ fontSize: 10 }}>
              Flat {item.flatOffer}% cashback on purchase anything
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 8 }}>{item.distance} meters</Text>
          </View>
        </View>
        <View style={{ width: "20%" }}>
          <Text>{item.status}</Text>
        </View>
      </View>
    );
  };
  
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffab3a" />
      <View style={styles.breadcrumb}>
        <View style={styles.filter}>
          <Text style={styles.breadText}>Sort By Distance</Text>
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
