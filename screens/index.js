import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Avatar } from 'react-native-elements';
import { Button } from 'react-native-elements';
export default function Index({ navigation }) {
    return (
        <View style={[styles.container, {
            flexDirection: 'column',
        }]}>
            <View style={styles.avatar}>
                <Avatar
                    size='xlarge'
                    rounded
                    source={{
                        uri:
                            'https://static.vecteezy.com/system/resources/thumbnails/007/033/146/small_2x/profile-icon-login-head-icon-vector.jpg',
                    }}
                />
            </View>
            <View style={styles.container}>
                <Text style={{ fontSize: 30 }}>Login</Text>
                <TextInput
                    style={styles.input}
                />
                <Text style={{ fontSize: 30 }}>Senha</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.container}>
                <Button
                    buttonStyle={{ backgroundColor: '#0088ff', height: 40 }}
                    title="Login"
                    titleStyle={{ fontSize: 25 }}
                />
                <Button
                    onPress={() => navigation.navigate('Cadastro de Usuário')}
                    buttonStyle={{ backgroundColor: '#ff0000', height: 40 }}
                    title="Cadastre-se"
                    titleStyle={{ fontSize: 25 }}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 3,
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
    avatar: {
        flex: 3,
        alignItems: 'center',
    },
});