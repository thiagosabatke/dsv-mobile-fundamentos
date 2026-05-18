import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { FontAwesome } from '@expo/vector-icons';

import Home from "./src/telas/Home";
import Selecoes from "./src/telas/Selecoes";
import Jogadores from "./src/telas/Jogadores";

const Tab = createBottomTabNavigator();

export default function App() {

  return (

    <NavigationContainer>

      <Tab.Navigator

        screenOptions={{

          headerStyle: {
            backgroundColor: "green"
          },

          headerTintColor: "#FFF",

          tabBarStyle: {
            backgroundColor: "green",
            height: 70
          },

          tabBarActiveTintColor: "yellow",

          tabBarInactiveTintColor: "white",

          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: "bold",
            marginBottom: 5
          }

        }}

      >

        <Tab.Screen
          name="Home"
          component={Home}

          options={{

            tabBarIcon: ({ color }) => (

              <FontAwesome
                name="soccer-ball-o"
                size={30}
                color={color}
              />

            )

          }}

        />

        <Tab.Screen
          name="Seleções"
          component={Selecoes}

          options={{

            tabBarIcon: ({ color }) => (

              <FontAwesome
                name="flag"
                size={30}
                color={color}
              />

            )

          }}

        />

        <Tab.Screen
          name="Jogadores"
          component={Jogadores}

          options={{

            tabBarIcon: ({ color }) => (

              <FontAwesome
                name="user"
                size={30}
                color={color}
              />

            )

          }}

        />

      </Tab.Navigator>

    </NavigationContainer>

  );

}