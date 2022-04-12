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
        
        <View style = {styles.subdiv}>
          <Text style= {{paddingBottom: 5, justifyContent: 'flex-start'}} >Sandwich</Text>
        </View>
        <View style = {styles.subdiv}>
          <View style = {{flexDirection: 'row'}} >
            <Image source= {require('../assets/Images/Preptime/breakfastpreptime.png')}
              style = {{ height : 20,
                width: 20
              }}
              resizeMode = "stretch"
            />
            <Text style = {{ marginLeft: 10}}>20 min.</Text> 
          </View>
        </View>
        
      </View>
    </View>

  
	);
};

const styles = StyleSheet.create({

  hori:{
    flexDirection: 'row',
    margin: 5,
    paddingLeft: 5,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: Color.lightgrey,
    // backgroundColor: Color.breakfast
  },
  img:{
    flex : 1 ,
    justifyContent: 'center',
    // height : 50,
    // width: 50,
    // borderRadius: 25,
    overflow: 'hidden'
  },
  content:{
    flex : 4,
    padding: 10
  },
  subdiv:{
    flex: 1
  }
});

export default Card;
