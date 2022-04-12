import React, {useState} from 'react' ;
import { StyleSheet, Text, View,Button, Modal , TextInput} from 'react-native';
import { useEffect } from 'react';

// import {useFonts} from 'expo-font' ;

import * as Font from 'expo-font' ;
import AppLoading from 'expo-app-loading';

// import Header from './Pages/header';
// import Firstpage from './Pages/Screens/firstpage';

import Bnavigator from './Components/navigation/breakfastnavigator' ;

const fetchFonts = () => {
  return Font.loadAsync({
    'Ramaraja-Regular': require('./assets/fonts/Ramaraja-Regular.ttf'),
    'Suravaram-Regular': require('./assets/fonts/Suravaram-Regular.ttf'),
    'PlayfairDisplaySC-Regular': require('./assets/fonts/PlayfairDisplaySC-Regular.ttf'),
  });

};
export default function App(){

  const [dataLoaded, setDataLoaded] = useState(false);

  if(!dataLoaded){
    return( 
      <AppLoading 
        startAsync = {fetchFonts} 
        onFinish = {() => setDataLoaded(true)}
        onError ={alert('Error loading assets')}
      />
    );
  }

  useEffect(()=>{
    fetch('https://127.0.01:8000/recipes/')
    .then(response => response.json())
    .then(json => console.log(json))

}, []);

  return(
    <Bnavigator />

  );
};
const styles = StyleSheet.create({
  screen:{
    flex:1 
  }
});





// export default function App() {

// const [homepageenable, isHomePage] = useState(false) ;



// const gotoHomePage = () =>{

//   // console.log('Hi') ;
//   isHomePage(true) ;

//   //return(<HomePage visible= {homepageenable}/>) ;
// };

//   return (
//     <View style={styles.container}>
//      <View style = { { flex: 8, backgroundColor: "orange" } }>
//         <Text style = {styles.titles} >Today's  <Text style = {styles.innerText}> Special </Text></Text>    
        
//      </View>
//      <View style = { { flex:2, backgroundColor: "red" } }>
//      </View>      
//      <Button style = {{width: 3 }} title = "Next" onPress={gotoHomePage}/>   
//      <HomePage visible = {homepageenable} /> 
//     </View>

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 70,
//     paddingLeft: 30,
//     paddingRight: 15,
//     flex: 1,
//     flexDirection: "column"
//   },
//   titles:{
//     color: 'black',
//     fontSize: 59,
//     fontFamily: 'notoserif',
//     fontWeight: "bold"
//   },
//   innerText:{
//     color : 'red',
//     fontSize: 60,
//     //fontFamily: 'serif ',
//     fontWeight: 'bold',
//     fontStyle: 'italic'
//   }
// });












// import  React from 'react' ;
// import { Component } from 'react';
// import {StyleSheet, Text, View, ActivityIndicator } from 'react-native' ;

// function App(){
   
//     return(
//         <View>
//             <Text>
//                 Hey
//             </Text>
//         </View>
//     );
// }

// export default App ;