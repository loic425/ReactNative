import React from 'react';
import { Image, ScrollView, Text, Dimensions, ActivityIndicator } from 'react-native';
import axios from 'axios';
import HTML from 'react-native-render-html';
import Config from 'react-native-config';

export default class ProductDetailsScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
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
            product: null
        };
        this.fetchProductDetails();
    }

    fetchProductDetails() {
        const code =this.props.navigation.state.params.code;

        axios.get(`${Config.API_BASE_URL}/api/products/${code}`).then((response) => {
            this.setState({product: response.data});
        });
    }

    render() {
        const product = this.state.product;

        if (null === product) {
            return <ActivityIndicator size="large" style={{flex: 1, alignContent: 'center'}}/>
        }

        const currentLocale = product.current_locale;
        const productTranslation = product.translations[currentLocale];

        return (
            <ScrollView style={{flex: 1}}>
                <Image
                    style={{width: 250, height: 172}}
                    source={{uri: product.image.magazine_item}}/>
                <Text>de {product.min_player_count} à {product.max_player_count} joueurs</Text>
                <Text>à partir de {product.min_age} ans</Text>
                <HTML html={productTranslation.short_description} imagesMaxWidth={Dimensions.get('window').width} />
                <HTML html={productTranslation.description} imagesMaxWidth={Dimensions.get('window').width} />
            </ScrollView>
        );
    }
}
