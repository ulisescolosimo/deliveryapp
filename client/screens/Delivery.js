import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectRestaurant } from "../features/restaurantSlice";
import { XCircleIcon, XMarkIcon } from "react-native-heroicons/outline";
import * as Progress from "react-native-progress";
import MapView from "react-native-maps";
import { Marker } from 'react-native-maps';

const Delivery = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  return (
    <View className="flex-1 bg-[#00BBCC]">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XMarkIcon color={"white"} size={30} />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order help</Text>
        </View>

        <View className="bg-white mx-5  rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View className="space-y-2 flex justify-center">
              <Text className="text-xl text-gray-400">Estimated arrival</Text>
              <Text className="text-2xl font-bold">45-55 minutes</Text>
            </View>
            <Image
              source={{ uri: "https://links.papareact.com/fls" }}
              className="h-20 w-20 "
            />
          </View>
          <Progress.Bar size={30} color="#00CCBB" indeterminate={true} />
          <Text className="mt-3 text-gray-500">
            Your order is being prepared
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        className="flex-1 -mt-10 z-0"
        initialRegion={{
          latitude: -34.58795670399276,
          longitude: -58.421132102300625,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <Marker
          coordinate={{
            latitude: -34.58795670399276,
            longitude: -58.421132102300625,
          }}
          title="Restaurant"
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>
      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
        <Image source={{
          uri: 'https://links.papareact.com/wru'
        }}
        className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />
        <View className="flex-1">
          <Text className="text-lg">
            Ulises Colosimo
          </Text>
          <Text className="text-gray-400">
            Your rider
          </Text>
        </View>
        <Text className="text-[#00CCBB] text-lg mr-5 font-bold">Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default Delivery;
