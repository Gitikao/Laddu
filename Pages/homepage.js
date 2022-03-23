import React, {useState} from "react";
import { Text } from "react-native-elements";
import { Modal, View, TextInput } from "react-native";

const HomePage = props => {

  return(
		
	<Modal visible = {props.visible} animationType = "slide" >
			<View>
				<Text>Home</Text>
				<TextInput placeholder = "Testing" />
			</View>

	</Modal>
		  	
	 

	);

};

export default HomePage ;