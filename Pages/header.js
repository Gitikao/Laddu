import React from 'react';
import {View, Text, StyleSheet} from 'react-native' ;
import Color from '../constants/Color';
const Header = props => {
  return(
    <View style = {styles.header}>
			<View style = {{flex:2}}></View>
      <View style = {{flex:1.5}} >
				<Text style = {styles.headerTitle}>{props.title}</Text>
			</View>
			{/* <View style= {{flex:1}}></View> */}
		</View>
  );
};

const styles = StyleSheet.create({

	header:{
		width: '100%',
		height: '10%',
		paddingLeft:15 ,
		backgroundColor: Color.primary
	//npm start	alignItems: 'left',
		// justifyContent: 'left'
	},
	headerTitle:{
		color: 'black',
		fontSize: 27,
		alignItems: 'center',
		// marginTop: '9%'
		// justifyContent: 'left',
		// fontFamily: 'OpenSans-LightItalic'
	}

});

export default Header;