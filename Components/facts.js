import React from 'react';
import {View , Text, StyleSheet, Image} from 'react-native';
import Color from '../constants/Color';
const Facts = () => {
    return(
			<View style = {styles.page}>
				<View style = {{flexDirection : 'row', marginBottom: 5}}>

					<View>
						<Image source= {require('../assets/Images/Preptime/time.png')}
											style = {{ height : 20,
												width: 20,
												}}
											resizeMode = "stretch"
						/>
					</View>
					<View>
						<Text style = { styles.content}>Prep. Time: 20 min.</Text>
					</View>

				</View>
				
				<View style = {{flexDirection : 'row', marginBottom: 5}}>

					<View>
						<Image source= {require('../assets/Images/Preptime/nop.png')}
											style = {{ height : 20,
												width: 20,
												}}
											resizeMode = "stretch"
						/>
					</View>
					<View>
						<Text style = { styles.content}>Serves: 2 people</Text>
					</View>

				</View>
				<View style = {{flexDirection : 'row', marginBottom: 5}}>

					<View>
						<Image source= {require('../assets/Images/Preptime/cal.png')}
											style = {{ height : 20,
												width: 20,
												}}
											resizeMode = "stretch"
						/>
					</View>
					<View>
						<Text style = {styles.content}>Calories: 200 kcal.</Text>
					</View>

				</View>

			</View>
    );
};

const styles = StyleSheet.create({

    heading:{
        // fontWeight: 'bold',
        fontSize: 20,
		fontFamily: 'Ramaraja-Regular'
    },
		content:{
			fontFamily: 'Suravaram-Regular',
			fontSize: 16,
			paddingLeft: 10,
			lineHeight: 27
			 
		},
		page:{
			margin : 10
		}
});

export default Facts;