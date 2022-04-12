import React from 'react';
import {View , Text, StyleSheet} from 'react-native';
import Color from '../constants/Color';
const Ingridients = () => {
    return(
        <View style = { styles.page}>
            <Text style = {styles.heading}> Ingridients: </Text>
            <Text style = {styles.content}>1. 1 Cucumber</Text>
            <Text style = {styles.content}>2. Bread loaf</Text>
            <Text style = {styles.content}>3. Pitted Olives</Text>
            <Text style = {styles.content}>4. Cheese </Text>
        </View>
    );
};

const styles = StyleSheet.create({

    heading:{
        // fontWeight: 'bold',
        fontSize: 20,
        fontFamily: 'PlayfairDisplaySC-Regular',
        paddingBottom: 15

    },
    page:{
        margin : 10,
        
    },
    content:{
        paddingLeft: 15,
        fontFamily: 'Suravaram-Regular',
        fontSize: 16,
        lineHeight: 25
    }
});

export default Ingridients;