import React from 'react' ;
import {View , Text, StyleSheet} from 'react-native';
import Color from '../constants/Color';
const Pre = () =>{
    return(
        <View style = {{backgroundColor: Color.primary,  alignItems: 'center'}}>
            <Text style = {styles.heading}>
                RECIPE
            </Text>
            <Text>
                .
            </Text>
        </View>
    );
};
const styles = StyleSheet.create({

    heading:{
        // fontWeight: 'bold',
        fontSize: 28,
         fontFamily: 'Ramaraja-Regular',
        // fontFamily: 'PlayfairDisplaySC-Regular',
        alignItems: 'center'
    }
    
});
export default Pre;