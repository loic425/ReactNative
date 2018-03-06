import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

// You can import from local files
import AboutScreen from './src/screens/AboutScreen';
import { TabNavigator } from 'react-navigation'; // 1.2.1
import style from './src/assets/Style';
import ProductsScreen from "./src/screens/ProductsScreen";

const Tabs = TabNavigator({
    ProductsScreen: {screen: ProductsScreen},
    About: {screen: AboutScreen}
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showIcon: true,
        showLabel: false,
        indicatorStyle: {
            height: 2,
            backgroundColor: '#fff'
        },
        style: {
            backgroundColor: style.color,
            borderTopWidth: 1,
            borderColor: '#3f101c'
        }
    }
});

export default class App extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar/>
                <Tabs/>
            </View>
        );
    }
}
