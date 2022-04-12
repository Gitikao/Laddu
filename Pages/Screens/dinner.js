import React from 'react' ;
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native' ;
import Card from '../card' ;
import Cuisines from '../cuisines' ;
const Breakfast = () =>{
    
    return(
      <View style = {styles.screen}>
				<ScrollView showsVerticalScrollIndicator = {false} style = {styles.scrollvw} >
					<View >

						<View style = {styles.img}>
							<Image source= {require('../../assets/Images/dinnerscreen.png')}
									style = {{width: '100%' , height: '100%'}}
									resizeMode = "cover"
								/> 
						</View>
						<View style = {styles.cuisine}>
							<Cuisines/>
						</View>
						<View>
							 <Card/>
							 <Card/>

						</View>
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
			 flex: 2,
			height: 200,
			borderRadius: 25,
			// elevation: 1,
			overflow: 'hidden',
			margin: 10

		},
		scrollvw:{
			flex:1,
		},
		cuisine:{
			flex : 3,
			marginBottom: 20
			// border : 10
		}
});
export default Breakfast ;

