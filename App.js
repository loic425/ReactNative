import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from "react-redux";
import { TabNavigator } from 'react-navigation'; // 1.2.1

// You can import from local files
import AboutScreen from './src/screens/AboutScreen';
import style from './src/assets/Style';
import ProductsScreen from "./src/screens/ProductsScreen";
import store from "./store";

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
            <Provider store={store}>
                <View style={{flex: 1}}>
                    <StatusBar/>
                    <Tabs/>
                </View>
            </Provider>
        );
    }
}
