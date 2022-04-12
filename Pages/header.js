import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native' ;
import Color from '../constants/Color';
const Header = props => {
  return(
    <View style = {styles.header}>
    	<View style = {{flex:1,  marginTop:20, paddingLeft: 20, paddingTop: 10}} >
			<Image source= {require('../assets/Images/llogo.png')}
				style = {{width: '25%' , height: '170%'}}
				resizeMode = "contain"
			/> 	
		</View>
				{/* <View style = {{flex:1}}></View> */}

	</View>
  );
};

const styles = StyleSheet.create({

	header:{
		width: '100%',
		height: '9%',
		// paddingLeft:15 ,
		backgroundColor: Color.lightgrey
	//npm start	alignItems: 'left',
		// justifyContent: 'left'
	},
	headerTitle:{
		color: 'black',
		fontSize: 27,
		// alignItems: 'left',
		// marginTop: '9%'
		// justifyContent: 'left',
		// fontFamily: 'OpenSans-LightItalic'
	}

});

export default Header;