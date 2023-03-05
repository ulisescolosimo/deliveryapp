import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../features/basketSlice";
import { useNavigation } from "@react-navigation/native";
import { formatCurrency } from "react-native-format-currency";

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const total = useSelector(selectBasketTotal);

  const [valueFormattedWithSymbol, valueFormattedWithoutSymbol, symbol] =
    formatCurrency({ amount: total, code: "USD" });

  if (items.length === 0) return null;

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="mx-5 rounded-lg p-4 bg-[#00CCBB] flex-row items-center space-x-1"
      >
        <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">
          {items.length}
        </Text>
        <Text className="text-white flex-1 text-center font-bold text-lg">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          {valueFormattedWithSymbol}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
