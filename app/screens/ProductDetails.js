import React from 'react';
import { Image, View } from 'react-native';

export default class ProductDetails extends React.Component {

    static navigationOptions = ({navigation}) => {
        console.log(navigation);
        return {
            title: navigation.state.params.name,
            tabBarIcon: () => {
                return <Image source={require('../assets/icons/home.png')} style={{width: 20, height: 20}}/>
            }
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            name: 'Lewis & Clark'
        };
    }

    render() {
        return (
            <View/>
        );
    }
}
