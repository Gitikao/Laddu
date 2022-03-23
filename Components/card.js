import React from 'react';
import {View, StyleSheet, ViewPropTypes} from 'react-native' ;
import { TextInput,Text } from 'react-native';
import Color from '../constants/Color';

const Card = props =>{
  return( 

      <View style = {[props.style,styles.card]}>
       {/* <View>  */}
       <Text>
        {props.children}
      </Text>
      {/* </View>  */}
     </View>
	);
};

const styles = StyleSheet.create({
  card:{
    // shadowColor: 'black',
    // shadowOffset: {width:0 , height: 2},
    // shadowRadius: 6,
    // shadowOpacity: 0.5,
    backgroundColor: Color.accent,
     height: 150,
    // padding: 20,
    // borderRadius: 20
    elevation: 1,
    padding:10
  }
});

export default Card;
