import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/Home";
import Restaurant from "./screens/Restaurant";
import { Provider } from "react-redux";
import { store } from "./store";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={Restaurant} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
