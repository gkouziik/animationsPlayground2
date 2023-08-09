import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";

import { Examples } from "./src/Examples";
import { PanGesture } from "./src/PanGesture";
import { CircularSlider } from "./src/CircularSlider";
import { Worklets } from "./src/Worklets";
import { DropDown } from "./src/DropDown";

const Stack = createStackNavigator();
const App = () => (
  <View style={{ flex: 1 }}>
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator>
        <Stack.Screen
          name="Examples"
          component={Examples}
          options={{
            title: "PlayGround",
          }}
        />
        <Stack.Screen
          name="Worklets"
          component={Worklets}
          options={{
            title: "Worklets",
          }}
        />
        <Stack.Screen
          name="PanGesture"
          component={PanGesture}
          options={{
            title: "John Gkouziokas Pan Ges",
          }}
        />
        <Stack.Screen
          name="CircularSlider"
          component={CircularSlider}
          options={{
            title: "Circular Slider",
          }}
        />
        <Stack.Screen
          name="DropDown"
          component={DropDown}
          options={{
            title: "DropDown",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  </View>
);

// eslint-disable-next-line import/no-default-export
export default App;
