import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';

// You can import from local files
import About from './app/screens/About';
import { TabNavigator } from 'react-navigation'; // 1.2.1
import style from './app/assets/Style';
import ProductList from "./app/screens/ProductList";

const Tabs = TabNavigator({
    ProductList: {screen: ProductList},
    About: {screen: About}
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
