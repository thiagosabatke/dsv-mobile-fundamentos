import React from "react";
import Inicio from "./src/Telas/Inicio";
import Grupos from "./src/Telas/Grupos";
import Jogos from "./src/Telas/Jogos";
import Selecoes from "./src/Telas/Selecoes";
import { NavigationContainer } 
         from "@react-navigation/native";
import { createDrawerNavigator } 
         from "@react-navigation/drawer";

function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Inicio">
        <Drawer.Screen name="Inicio" component={Inicio} />
        <Drawer.Screen name="Grupos" component={Grupos} />
        <Drawer.Screen name="Jogos" component={Jogos} />
        <Drawer.Screen name="Seleções" component={Selecoes} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;