import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Avatar } from 'react-native-elements';
import { Button } from 'react-native-elements';

export default function Cadastro({navigation}){
    return(
        <View style={[styles.container, {
            flexDirection: 'column',
        }]}>
            <View style={[styles.container,{
                flex: 1, justifyContent: "center"
                }]}>
                <Text style={{ fontSize: 30}}>Email</Text>
                <TextInput
                    style={styles.input}
                />
                <Text style={{ fontSize: 30}}>Senha</Text>
                <TextInput
                    style={styles.input}
                />
                <Button 
                    buttonStyle={{ backgroundColor: '#0088ff', height: 50 }}
                    style={{paddingTop: 10}}
                    title="Salvar"
                />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        gap: 5,
        padding: 20,
        backgroundColor: '#ffffdd'
    },
    input: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 10,
        fontSize: 15,
        backgroundColor: '#fff'
    },
});
