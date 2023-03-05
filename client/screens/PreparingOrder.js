import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from 'react-native-progress';
import { useNavigation } from "@react-navigation/native";

const PreparingOrder = () => {

  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() =>{
      navigation.navigate('Delivery')
    }, 4000)
  }, [])
  
  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 justify-center items-center">
      <Animatable.Image
        source={require("../assets/delivery.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-80 w-80"
      />

      <Animatable.Text animation={'slideInUp'} iterationCount={1} className="text-lg my-10 text-white font-bold text-center mx-5">
        Waiting for restaurant to accept your order!
      </Animatable.Text>
      <Progress.CircleSnail animation={'slideInUp'} size={60} color='white' />
    </SafeAreaView>
  );
};

export default PreparingOrder;
