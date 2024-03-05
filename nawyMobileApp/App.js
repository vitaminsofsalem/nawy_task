import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./pages/homescreen";
import ApartmentDetails from "./pages/apartmentDetails";

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="ApartmentDetails"
          component={ApartmentDetails}
          options={{ title: "Apartment Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
