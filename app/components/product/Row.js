import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class Row extends React.Component {
    static propTypes = {
        row: PropTypes.object,
        index: PropTypes.number
    };

    render() {
        return (
            <View style={[style.view, style.flex]}>
                <Image
                    style={{width: 50, height: 50}}
                    source={{uri: this.props.row.image}}/>

                <Text>{this.props.row.name}</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    flex: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    view: {
        backgroundColor: '#fff',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'space-between'
    },
    temp: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 22
    }
});
