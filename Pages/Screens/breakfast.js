import React from 'react' ;
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native' ;
// import { ScrollView } from 'react-native-gesture-handler';

const Breakfast = () =>{
    
    return(
      <View style = {styles.screen}>
				<ScrollView showsVerticalScrollIndicator = {false}  >
					<View  >
					<Text>Hello</Text>

						<View style = {styles.img}>
							<Image source= {require('../../assets/Images/breakfastscreen.png')}
									style = {{width: '100%' , height: '100%'}}
									resizeMode = "cover"
								/> 
						</View>
						<Text>Hello</Text>

					</View>
				</ScrollView>
      </View>
    );

};
const styles = StyleSheet.create({

    screen:{
          flex: 1,
          margin: 10
    },
		img:{
			// flex: 1,
			height:'35%',
			borderRadius: 25,
			// elevation: 1,
			overflow: 'hidden'

		},
		part2:{
			flex:1
		}
});
export default Breakfast ;

