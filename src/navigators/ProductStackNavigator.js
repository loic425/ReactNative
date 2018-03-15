import {StackNavigator} from "react-navigation";

import style from "../assets/Style";
import ProductsScreen from "../screens/ProductsScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";

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
