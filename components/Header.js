import React from 'react';
import {View,Text,StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
};


const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 90,
        paddingTop: 0,
        backgroundColor: Colors.pinkja,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        color: 'black',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: 'bold',

    },

});

export default Header;