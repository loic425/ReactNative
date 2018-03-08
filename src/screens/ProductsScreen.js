import React from 'react';
import { Image, ListView, TouchableHighlight, ActivityIndicator } from 'react-native';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ProductCellComponent from './../components/product/ProductCellComponent';
import ProductDetailsScreen from './ProductDetailsScreen';

import * as ProductsActions from '../actions/ProductActions';

class ProductsScreen extends React.Component {

    static navigationOptions = {
        title: `Jeux`,
        tabBarIcon: () => {
            return <Image source={require('../assets/icons/home.png')} style={{width: 20, height: 20}}/>
        }
    };

    constructor(props) {
        super(props);

        this.fetchProducts();
    }

    fetchProducts() {
        this.props.productsAction.fetchProducts();
    }

    /**
     * @param {object} row
     */
    openDetails(row) {
        this.props.navigation.navigate('ProductDetailsScreen', {'code': row.code, 'name': row.name});
    }

    render() {
        if (this.props.isLoading) {
            return <ActivityIndicator size="large" style={{flex: 1, alignContent: 'center'}}/>
        }

        const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        return (
            <ListView
                dataSource={dataSource.cloneWithRows(this.props.products)}
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

const mapStateToProps = state => {
    return {
        isLoading: state.ProductsReducer.isLoading,
        products: state.ProductsReducer.products,
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        productsAction: bindActionCreators(ProductsActions, dispatch, props)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsScreen);
