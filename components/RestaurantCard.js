import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "react-native";
import {
  LockOpenIcon,
  MapIcon,
  MapPinIcon,
  StarIcon,
} from "react-native-heroicons/outline";
import { urlFor } from "../sanity";
import { useNavigation } from "@react-navigation/native";

const RestaurantCard = ({
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
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="bg-white mr-3 shadow rounded-md"
      onPress={() =>
        navigation.navigate("Restaurant", {
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
        })
      }
    >
      <Image
        source={{ uri: urlFor(imgUrl).url() }}
        className="h-56 w-64 rounded-t-md"
      />
      <View className="px-3 pb-4 gap-1">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> - {genre}
          </Text>
        </View>

        <View className="flex-row items-center">
          <MapPinIcon color={"gray"} opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">{address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
