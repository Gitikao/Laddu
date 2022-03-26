import React from 'react';
import {View, StyleSheet, Image} from 'react-native' ;
import { TextInput,Text } from 'react-native';
import Color from '../constants/Color';

const Card = () =>{
  return( 

  
    <View style = { styles.hori}> 
      <View style = {styles.img}> 
        <Image source= {require('../assets/Images/Breakfast/sandwich.png')}
                    style = {{ height : 50,
                      width: 50,
                      borderRadius: 25}}
                    resizeMode = "stretch"
        /> 
      </View>
      <View style = {styles.content}>
        
        <Text>Sandwich</Text>
      </View>
    </View>

  
	);
};

const styles = StyleSheet.create({

  hori:{
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    elevation: 2
    
  },
  img:{
    flex : 1 ,
    // height : 50,
    // width: 50,
    // borderRadius: 25,
    overflow: 'hidden'
  },
  content:{
    flex : 4,
    padding: 10
  }
});

export default Card;
