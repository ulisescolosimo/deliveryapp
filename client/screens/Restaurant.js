import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { sanityClient, urlFor } from "../sanity";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  ArrowLeftIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/outline";
import DishRow from "../components/DishRow";
import BasketIcon from "../components/BasketIcon";

const Restaurant = () => {
  const navigation = useNavigation();

  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      address,
      genre,
      short_description,
      dishes,
      long,
      lat,
    },
  } = useRoute();

  const [restaurant, setRestaurant] = useState();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "restaurant" && _id == $id] {
        ...,
      }`,
        { id }
      )
      .then((data) => {
        setRestaurant(data);
      });
  }, []);

  return (
    <>
    <BasketIcon />
    <ScrollView>
      <View className="relative">
        <Image
          source={{ uri: urlFor(imgUrl).url() }}
          className="w-full h-56 bg-gray-300 p-4"
        />
        <TouchableOpacity
          className="absolute top-14 left-5 p-2 bg-white rounded-full"
          onPress={navigation.goBack}
        >
          <ArrowLeftIcon size={20} color={"#00CCBB"} />
        </TouchableOpacity>
      </View>

      <View className="bg-white">
        <View className="px-4 pt-4">
          <Text className="text-3xl font-bold">{title}</Text>
          <View className="flex-row space-x-2 my-1">
            <View className="flex-row items-center space-x-2">
              <StarIcon size={22} color={"green"} opacity={0.5} />
              <Text className="text-xs text-gray-500">
                <Text className="text-green-500">{rating}</Text> - {genre}
              </Text>
            </View>

            <View className="flex-row items-center space-x-1">
              <MapPinIcon size={22} color={"gray"} opacity={0.4} />
              <Text className="text-xs text-gray-500">
                <Text className="text-gray-500">Nearby - {address}</Text>
              </Text>
            </View>
          </View>

          <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
        </View>

        <TouchableOpacity className="flex-row items-center space-x-2 p-3 border-y border-gray-300">
          <QuestionMarkCircleIcon color={"gray"} size={20} opacity={0.6} />
          <Text className="pl-2 flex-1 text-md font-bold">
            Have a food allergy?
          </Text>
          <ChevronRightIcon size={20} color={'#00CCBB'} />
        </TouchableOpacity>
      </View>

    <View className="pb-36">
        <Text className="px-4 pt-6 mb-3 font-bold text-xl">Menu</Text>
        {dishes.map((dish) => (
            <DishRow key={dish._id} id={dish._id} name={dish.name} description={dish.short_description} price={dish.price} image={dish.image} />
        ))}
    </View>

    </ScrollView>
    </>
  );
};

export default Restaurant;
