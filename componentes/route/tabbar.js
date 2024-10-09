import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from '../../pages/home';
import Cardapio from '../../pages/cardapio';
import Sobre from '../../pages/sobre';


const HIcon = require('../../assets/img/icon-home.png');
const CIcon = require('../../assets/img/icon-itens.png');
const SIcon = require('../../assets/img/icon-sobre.png');

const HIconFun = require('../../assets/img/icon-home-fundo.png');
const CIconFun = require('../../assets/img/icon-itens-fundo.png');
const SIconFun = require('../../assets/img/icon-sobre-fundo.png');

const Tab = createBottomTabNavigator();

export default function TabBar() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                bottom: 25,
                left: 20,
                right: 20,
                borderRadius: 8,
                height: 80,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.55,
                shadowRadius: 5,
            }
        }}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {

                        if (focused) { // se ele estiver focado
                            return (
                                <View style={styles.box}>
                                    <Image source={HIconFun} style={styles.icon11} />
                                    <Text style={styles.text}>Home</Text>
                                </View>
                            );
                        }
                        // se n tiver interação
                        return (
                            <View style={styles.box}>
                                <Image source={HIcon} style={styles.icon1} />
                                <Text style={styles.text}>Home</Text>
                            </View>
                        )

                    }
                }} />


            <Tab.Screen name='Cardapio' component={Cardapio}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        if (focused) {
                            return (
                                <View style={styles.box}>
                                    <Image source={CIconFun} style={styles.icon22} />
                                    <Text style={styles.text}>Cardápio</Text>
                                </View>
                            );
                        }
                        return (
                            <View style={styles.box}>
                                <Image source={CIcon} style={styles.icon2} />
                                <Text style={styles.text}>Cardápio</Text>
                            </View>
                        );
                        }
                    }}/>

                    <Tab.Screen name='Sobre' component={Sobre}
                        options={{
                            headerShown: false,
                            tabBarIcon: ({focused}) => {
                                if(focused){
                                    return (
                                        <View style={styles.box}>
                                            <Image source={SIconFun} style={styles.icon33} />
                                            <Text style={styles.text}>Sobre</Text>
                                        </View>
                                    )
                                }
                                return(
                                    <View style={styles.box}>
                                        <Image source={SIcon} style={styles.icon3} />
                                        <Text style={styles.text}>Sobre</Text>
                                    </View>
                                );
                            }
                        }}/>



        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    box: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    icon1: {
        height: 50,
        width: 40,
    },
    icon2: {
        height: 45,
        width: 55,
        marginBottom:3,
    },
    icon3: {
        height: 45,
        width: 55,
    },
    icon11: {
        height: 40,
        width: 40,
    },
    icon22: {
        height: 55,
        width: 55,
        marginBottom:3,
    },
    icon33: {
        height: 50,
        width: 50,
    },
    text:{
        color: '#6B060A',
    }
});