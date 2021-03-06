import React from 'react' ;
import {View, Text, Image, StyleSheet, ScrollView, TouchableOpacity} from 'react-native' ;
import Header from '../header';
// import GHeader from '../../Components/generalheader' ;
import Card from '../card' ;
import Cuisines from '../cuisines' ;
const Breakfast = props =>{
    
    return(
      <View style = {styles.screen}>
		  		<Header />
				<ScrollView showsVerticalScrollIndicator = {false} style = {styles.scrollvw} >
					<View >

						<View style = {styles.img}>
							<Image source= {require('../../assets/Images/breakfastscreen.png')}
									style = {{width: '100%' , height: '100%'}}
									resizeMode = "cover"
								/> 
						</View>
						<View style = {styles.cuisine}>
							<Cuisines/>
						</View>
						<View>
							<TouchableOpacity activeOpacity={0.5} onPress={() => {props.navigation.navigate({routeName: 'Recipe'}) ; 
							}} >
							 <Card/>
							 </TouchableOpacity>
							 <Card/>
							<Card/>
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
        //   margin: 10
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
			margin : 10,
			paddingTop: 25
		},
		cuisine:{
			flex : 3,
			marginBottom: 20
			// border : 10
		}
});
export default Breakfast ;

