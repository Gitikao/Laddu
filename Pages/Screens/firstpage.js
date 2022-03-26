import React from 'react' ;
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native' ;
// import { FlatList } from 'react-native';
import { ScrollView, Image } from 'react-native';
import Card from '../../Components/card';
import Header from '../header';
import Color from '../../constants/Color';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';
const Firstpage = props =>{
  return(

    <View style= {styles.screen}>
      <Header title = "Ladoo" />

      <View style = {styles.tt}>
        <Text>"Eat what makes you happy !"</Text>
        

      </View>
      <ScrollView showsVerticalScrollIndicator = {false}> 
      <View style = {styles.full}>
        <View style = {styles.row}>
            <View style = {styles.finalcard} >
              <TouchableOpacity activeOpacity={0.5} onPress={() => {props.navigation.navigate({routeName: 'Chosen'}) ; 
              }} >
                <Image source= {require('../../assets/Images/breakfast.png')}
                    style = {{width: '100%' , height: '100%'}}
                    resizeMode = "stretch"
                  /> 
              </TouchableOpacity>
            </View>
            <View style={styles.finalcard}>
            <Image source= {require('../../assets/Images/dinner.png')}
                    style = {{width: '100%' , height: '100%'}}
                    resizeMode = "stretch"
                  /> 
            </View> 
          </View>
          <View style = {styles.row}>
            <View style = {styles.finalcard} >
            <Image source= {require('../../assets/Images/lunch.png')}
                    style = {{width: '100%' , height: '100%'}}
                    resizeMode = "stretch"
                  /> 
            </View>
            <View style={styles.finalcard}>
            <Image source= {require('../../assets/Images/dinner.png')}
                    style = {{width: '100%' , height: '100%'}}
                    resizeMode = "stretch"
                  /> 
            </View> 
          </View>
          <View style = {styles.row}>
            <View style = {styles.finalcard} >
            <Image source= {require('../../assets/Images/snacks.png')}
                    style = {{width: '100%' , height: '100%'}}
                    resizeMode = "cover"
                  /> 
            </View>
            <View style={styles.finalcard}>
              <Image source= {require('../../assets/Images/dinner.png')}
                    style = {{width: '100%' , height: '100%'}}
                    resizeMode = "cover"
              /> 
            </View> 
          </View>
          <View style = {styles.row}>
            <View style = {styles.finalcard} >
            <Image source= {require('../../assets/Images/cocktails.png')}
                    style = {{width: '100%' , height: '100%'}}
                    resizeMode = "stretch"
                  /> 
            </View>
            <View style={styles.finalcard}>
              <Image source= {require('../../assets/Images/breakfast.png')}
                    style = {{width: '100%' , height: '100%'}}
                    resizeMode = "cover"
              /> 
            </View> 
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({

  screen:{
		flex: 1,
		padding: 25,
  },
  tt:{
    alignItems:'center',
    paddingBottom: 20,
  },
  outer:{
    padding: 20,
    margin: 10,
    borderRadius: 20,

    width: '45%',
    height:'30%'
  },
  box:{
    
    width: '45%',
    height:'30%',
  },
  row:{
    flexDirection: 'row',
    padding: 1,
    flex: 3,
    justifyContent: 'center', 
    // alignItems: ' center'
  },
  card:{
    // shadowColor: 'black',
    // shadowOffset: {width:0 , height: 2},
    // shadowRadius: 6,
    // shadowOpacity: 0.5,
    backgroundColor: Color.accent,
    // height: 150,
     borderRadius: 20,
    // padding: 20,
    // borderRadius: 20
    elevation: 1,
    padding:10,
    margin: 10,

    width: '45%',
    height:150
  },
  finalcard:{
    width: '48%',
    height: 150,
    //paddingTop: 100,
    //  elevation:7,
    margin:10,
    // padding:10, 
    borderRadius: 10,
    backgroundColor: Color.accent,
    borderColor: 'black',
    overflow: 'hidden'
  },
  full:{
    flexDirection: "column",
    padding: 10,
    alignItems: 'stretch',
    height: '100%',
    width:'100%'  
  }


});

export default Firstpage;