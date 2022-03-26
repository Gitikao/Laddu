import React from 'react' ;
import {View, StyleSheet, Image, Text} from 'react-native' ;
const Cuisines = () =>{

    return(
        <View style = {styles.hori}>
            <View style = {styles.names}>
                <View style = {styles.logo}>
                <Image source= {require('../assets/Images/CuisineLogos/Indian.png')}
                    style = {{width: '100%' , height: '100%'}}
                    resizeMode = "contain"
                  />    
                </View>
                <Text>     Indian</Text>
            </View>
            <View style = {styles.names}>
            <View style = {styles.logo}>
                <Image source= {require('../assets/Images/CuisineLogos/Italian.png')}
                    style = {{width: '100%' , height: '100%'}}
                    resizeMode = "contain"
                  />    
                </View>
                <Text>      Italian</Text>
            </View>
            <View style = {styles.names}>
            <View style = {styles.logo}>
                <Image source= {require('../assets/Images/CuisineLogos/Chinese.png')}
                    style = {{width: '100%' , height: '100%'}}
                    resizeMode = "contain"
                  />    
                </View>
                <Text>    Chinese</Text>
            </View>
            <View style = {styles.names}>
            <View style = {styles.logo}>
                <Image source= {require('../assets/Images/CuisineLogos/SouthIndian.png')}
                    style = {{width: '100%' , height: '100%'}}
                    resizeMode = "contain"
                  />    
                </View>
                <Text>South Indian</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    hori:{
        flexDirection: 'row'
    },
    names:{
        flex : 1,
        alignContent: 'center',
        // justifyContent: 'center'
    },
    logo:{
        height : 50
    }
});

export default Cuisines ;