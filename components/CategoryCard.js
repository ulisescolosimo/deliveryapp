import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity className="mr-2 relative rounded-md">
      <Image source={{ uri:imgUrl }} className="w-20 h-20 rounded " />
      <Text className="absolute text-white font-bold bottom-1 left-1">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
