import React from 'react';
import {View , Text, StyleSheet} from 'react-native';
import Color from '../constants/Color';
const RHeader = () => {
    return(
        <View style= {{marginBottom: 5}}>
            <Text style = {styles.heading}> GRILLED CHEESE SANDWICH</Text>
            <Text style = {styles.subheading}>Cheese, Bread, Olives</Text>
        </View>
    );
};

const styles = StyleSheet.create({

    heading:{
        fontFamily: 'Ramaraja-Regular',
        // fontWeight: 'bold',
        fontSize: 30
        
    },
    subheading:{
        color: Color.darkgrey,
        paddingLeft: 10,
        paddingBottom: 10,
        lineHeight:15
    }
    
});

export default RHeader;