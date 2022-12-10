import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Avatar } from 'react-native-elements';
import { Button } from 'react-native-elements';
import Index from "./screens/index";
import Cadastro from "./screens/cadastro";

const Stack = createNativeStackNavigator()
function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={Index} 
        />
        <Stack.Screen name="Cadastro de Usuário" component={Cadastro} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App