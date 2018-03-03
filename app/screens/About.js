import React from 'react';
import style from '../assets/Style';
import { View, Text, Image, Button } from 'react-native';

export default class About extends React.Component {

    static navigationOptions = {
        tabBarIcon: () => {
            return <Image source={require('../assets/icons/user.png')} style={{width: 20, height: 20}}/>
        }
    };

    search() {
        this.props.navigation.navigate('Search');
    }

    render() {
        return (
            <View style={style.container}>
                <Text style={style.title}>A propos de l'application</Text>
                <Text>
                    Coucou Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Text>
                <Button color={style.color} onPress={() => this.search()} title="Rechercher une ville"/>
            </View>
        );
    }
}
