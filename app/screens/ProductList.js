import React from 'react';
import { Image, ListView, TouchableHighlight } from 'react-native';
import style from "../assets/Style";
import { StackNavigator } from "react-navigation";
import ProductRow from './../components/product/Row';
import ProductDetails from './ProductDetails';

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
            list: [
                {
                    name: 'Lewis & Clark',
                    minAge: 12,
                    minPlayerCount: 1,
                    maxPlayerCount: 5,
                    image: 'http://www.jedisjeux.net/media/cache/thumbnail/uploads/img/lewis-clark-2-1392480144.png'
                },
                {
                    name: 'Shogun',
                    minAge: 12,
                    minPlayerCount: 3,
                    maxPlayerCount: 5,
                    image: 'http://www.jedisjeux.net/media/cache/thumbnail/uploads/img/598d59c5bb1651.63204688.jpg'
                },
                {
                    name: 'Ginkgopolis',
                    minAge: 10,
                    minPlayerCount: 1,
                    maxPlayerCount: 5,
                    image: 'http://www.jedisjeux.net/media/cache/thumbnail/uploads/img/ginkgopolis-49-1347090015.jpg'
                }
            ]
        };
    }

    openDetails(row) {
        this.props.navigation.navigate('ProductDetails', {'name': row.name});
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
