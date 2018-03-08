import React from 'react';
import { Image, ScrollView, Text, Dimensions, ActivityIndicator } from 'react-native';
import {connect} from "react-redux";
import HTML from 'react-native-render-html';
import {bindActionCreators} from "redux";

import * as ProductActions from '../actions/ProductActions';

class ProductDetailsScreen extends React.Component {

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
        this.props.productAction.fetchProduct(code);
    }

    render() {

        if (this.props.isLoading) {
            return <ActivityIndicator size="large" style={{flex: 1, alignContent: 'center'}}/>
        }

        const product = this.props.product;
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

const mapStateToProps = state => {
    return {
        isLoading: state.ProductReducer.isLoading,
        product: state.ProductReducer.product,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        productAction: bindActionCreators(ProductActions, dispatch, props)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsScreen);
