import React from 'react';
import { Image, ListView, TouchableHighlight } from 'react-native';
import style from "../assets/Style";
import { StackNavigator } from "react-navigation";
import ProductRow from './../components/product/Row';
import ProductDetails from './ProductDetails';
import axios from 'axios';

class ProductList extends React.Component {

    static navigationOptions = {
        title: `Jeux`,
        tabBarIcon: () => {
            return <Image source={require('../assets/icons/home.png')} style={{width: 20, height: 20}}/>
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
        this.fetchProducts();
    }

    fetchProducts() {
        axios.get('http://10.0.0.200/app_dev.php/api/products/').then((response) => {
            console.log('response', response.data);
            this.setState({list: response.data._embedded.items});
        });
    }

    /**
     * @param {object} row
     */
    openDetails(row) {
        this.props.navigation.navigate('ProductDetails', {'code': row.code, 'name': row.name});
    }

    render() {
        const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        return (
            <ListView
                dataSource={dataSource.cloneWithRows(this.state.list)}
                renderRow={(row, a, index) =>
                    <TouchableHighlight
                        onPress={() => this.openDetails(row)}>
                        <ProductRow row={row} index={parseInt(index, 10)}/>
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
    ProductList: {
        screen: ProductList,
        navigationOptions
    },
    ProductDetails: {
        screen: ProductDetails,
        navigationOptions
    }
});
