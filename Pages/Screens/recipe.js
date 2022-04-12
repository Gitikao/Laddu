import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native' ;
import RHeader from '../../Components/recheader';
import Facts from '../../Components/facts';
import Ingridients from '../../Components/ingridients';
import Procedure from '../../Components/procedure';
import GHeader from '../../Components/generalheader';
import Pre from '../../Components/pre';
import SwipeUpDown from 'react-native-swipe-up-down' ;

const Recipe = () => {
    return(
        <View>
            <GHeader />
            <RHeader />
            <View style = {{flexDirection: 'row'}}>
                <View style = {{flex: 1}}>
                    <Facts/>
                    <Ingridients/>
                </View>
                <View style = {{flex: 1, marginRight: 10}} >
                    <View style = {styles.img}>
                    <Image source= {require('../../assets/Images/Breakfast/sandwich.png')}
											style = {{ height : '70%',
												width: '100%',
                                                borderRadius: 20,
                                                overflow: 'hidden'
												}}
											resizeMode = "cover"
					/>
                    </View>

                </View>
                
            </View>

            <SwipeUpDown
                itemMini = {<Pre/>}
                itemFull={<Procedure/>}
                onShowMini = {()=> console.log('mini')}
                onShowFull = {() => console.log('full')}
                disablePressToShow={false}
                swipeHeight = {80}
            />

            {/* <Procedure /> */}
                
        </View>
    );
};

const styles = StyleSheet.create({

    img:{
        borderRadius: 5,
        overflow: 'hidden'
    }

});

export default Recipe;