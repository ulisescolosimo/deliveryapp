import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { formatCurrency } from "react-native-format-currency";
import { urlFor } from "../sanity";
import {
  MinusCircleIcon,
  PlusCircleIcon,
} from "react-native-heroicons/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithId,
} from "../features/basketSlice";

const DishRow = ({ id, price, image, description, name }) => {
  const dispatch = useDispatch();

  const items = useSelector((state) => selectBasketItemsWithId(state, id));

  const addItem = () => {
    dispatch(addToBasket({ id, price, image, description, name }));
  };

  const removeItem = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket({ id }));
  };

  const [isPressed, setIsPressed] = useState(false);

  const [valueFormattedWithSymbol, valueFormattedWithoutSymbol, symbol] =
    formatCurrency({ amount: price, code: "USD" });
  return (
    <>
      <TouchableOpacity
        disable={true}
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-300 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{description}</Text>
            <Text className="text-gray-400 mt-2">
              {valueFormattedWithSymbol}
            </Text>
          </View>
          <View>
            <Image
              style={{ borderWidth: 1, borderColor: "#F3F3F4" }}
              source={{ uri: urlFor(image).url() }}
              className="h-20 w-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>

      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row p-4 items-center space-x-2 pb-3">
            <TouchableOpacity onPress={removeItem} disabled={!items.length}>
              <MinusCircleIcon color={"#00CCBB"} size={40} />
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity onPress={addItem} disabled={items.length > 9 && true}>
              <PlusCircleIcon color={"#00CCBB"} size={40} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;
