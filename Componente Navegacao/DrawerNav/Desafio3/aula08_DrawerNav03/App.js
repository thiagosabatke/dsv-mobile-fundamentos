import React from "react";
import Inicio from "./src/Telas/Inicio";
import Grupos from "./src/Telas/Grupos";
import Jogos from "./src/Telas/Jogos";
import Selecoes from "./src/Telas/Selecoes";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function NavegacaoAbas() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, 
        tabBarActiveTintColor: '#38A169',
        tabBarInactiveTintColor: '#A0AEC0',
        tabBarStyle: { paddingBottom: 5, height: 60 },
      }}
    >
      <Tab.Screen name="Início" component={Inicio} />
      <Tab.Screen name="Grupos" component={Grupos} />
      <Tab.Screen name="Jogos" component={Jogos} />
      <Tab.Screen name="Seleções" component={Selecoes} />
    </Tab.Navigator>
  );
}

function MenuLateralPersonalizado(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem 
        label="Início" 
        onPress={() => props.navigation.navigate('Copa do Mundo 2026', { screen: 'Início' })} 
      />
      <DrawerItem 
        label="Fase de Grupos" 
        onPress={() => props.navigation.navigate('Copa do Mundo 2026', { screen: 'Grupos' })} 
      />
      <DrawerItem 
        label="Próximos Jogos" 
        onPress={() => props.navigation.navigate('Copa do Mundo 2026', { screen: 'Jogos' })} 
      />
      <DrawerItem 
        label="Hall da Fama" 
        onPress={() => props.navigation.navigate('Copa do Mundo 2026', { screen: 'Seleções' })} 
      />
    </DrawerContentScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        drawerContent={(props) => <MenuLateralPersonalizado {...props} />}
      >
        <Drawer.Screen 
          name="Copa do Mundo 2026" 
          component={NavegacaoAbas} 
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}