import React from 'react';
import { Image, ListView, TouchableHighlight, ActivityIndicator } from 'react-native';
import style from "../assets/Style";
import { StackNavigator } from "react-navigation";
import ProductCellComponent from './../components/product/ProductCellComponent';
import ProductDetailsScreen from './ProductDetailsScreen';
import axios from 'axios';

class ProductsScreen extends React.Component {

    static navigationOptions = {
        title: `Jeux`,
        tabBarIcon: () => {
            return <Image source={require('../assets/icons/home.png')} style={{width: 20, height: 20}}/>
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            products: null
        };
        this.fetchProducts();
    }

    fetchProducts() {
        axios.get('http://10.0.0.200/app_dev.php/api/products/').then((response) => {
            this.setState({products: response.data._embedded.items});
        });
    }

    /**
     * @param {object} row
     */
    openDetails(row) {
        this.props.navigation.navigate('ProductDetailsScreen', {'code': row.code, 'name': row.name});
    }

    render() {
        if (null === this.state.products) {
            return <ActivityIndicator size="large" style={{flex: 1, alignContent: 'center'}}/>
        }

        const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        return (
            <ListView
                dataSource={dataSource.cloneWithRows(this.state.products)}
                renderRow={(row, a, index) =>
                    <TouchableHighlight
                        onPress={() => this.openDetails(row)}>
                        <ProductCellComponent row={row} index={parseInt(index, 10)}/>
                    </TouchableHighlight>
                }
            />
        );
    }
}

const navigationOptions = {
    headerStyle: style.header,
    headerTitleStyle: style.headerTitle
};

export default StackNavigator({
    ProductsScreen: {
        screen: ProductsScreen,
        navigationOptions
    },
    ProductDetailsScreen: {
        screen: ProductDetailsScreen,
        navigationOptions
    }
});
