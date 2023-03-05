import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/Home";
import Restaurant from "./screens/Restaurant";
import { Provider } from "react-redux";
import { store } from "./store";
import Basket from "./screens/Basket";
import PreparingOrder from "./screens/PreparingOrder";
import Delivery from "./screens/Delivery";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={Restaurant} />
          <Stack.Screen name="Basket" component={Basket} options={{ presentation: "modal", headerShown: false}} />
          <Stack.Screen name="Preparing" component={PreparingOrder} options={{ presentation: "fullScreenModal", headerShown: false}} />
          <Stack.Screen name="Delivery" component={Delivery} options={{ presentation: "fullScreenModal", headerShown: false}} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
