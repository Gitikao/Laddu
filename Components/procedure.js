import React, {Component} from 'react';
// import { render } from 'react';
import {View,Text} from 'react-native' ;
import SwipeUpDown from 'react-native-swipe-up-down' ;
import Color from '../constants/Color';
import GHeader from './generalheader';
const Procedure = props =>{
    return(
        <View style = {{backgroundColor: Color.lightgrey, marginTop: 20}}>
            <GHeader/>
            <Text> RECIPE </Text>
            <Text>
                1. Wash and peel a potato and sile in 1/4 inch pieces
            </Text>
            <Text>
                2. Toast the bread slice untill crisp. 
            </Text>
            <Text>
                3. Add onion, cabbage, carrots and capsicum. Stir on high flame. 
            </Text>
            <Text>
                .
                .
                .
                .
                .

            </Text>
            <Text>
                .
                .
                .
                .
                .

            </Text>
            <Text>
                .
                .
                .
                .
                .

            </Text>
            <Text>
                .
                .
                .
                .
                .

            </Text>
            <Text>
                .
                .
                .
                .
                .

            </Text>

        </View>

    );
};

export default Procedure;

// import Facts from './facts';
// import Ingridients from './ingridients';

// const Test = props =>{
//     return(
    

//             <SwipeUpDown
//             itemMini = {<Facts/>}
//             itemFull={<Ingridients/>}
//             onShowMini = {()=> console.log('mini')}
//             onShowFull = {() => console.log('full')}
//             disablePressToShow={false}
//             swipeHeight = {100}
//             />

        
//     );
// }

// export default Test ;


// import {createDrawerNavigator} from '@react-navigation/drawer' ;
// import {NavigationContainer} from '@react-navigation/native' ;

// function HomeScreen(){
//     return(
//         <View style = {{ flex:1, alignItems: 'center'}}>
//             <Text>
//                 Home Page
//             </Text>
//         </View>
//     );
// }

// function NotificationScreen(){
//     return(
//         <View>
//             <Text>
//                 Notification Page
//             </Text>
//         </View>
//     );
// }

// function AboutScreen(){
//     return(
//         <View>
//             <Text>
//                 About Page
//             </Text>
//         </View>
//     );
// }

// const Drawer = createDrawerNavigator();

// const Test = () => {
//     return(
//         <NavigationContainer>
//             <Drawer.Navigator initialRouteName = "Home">
//                 <Drawer.Screen name = "Home" component = {HomeScreen} />
//                 <Drawer.Screen name = "Notifications" component = {NotificationScreen} />
//                 <Drawer.Screen name = "About" component = {AboutScreen} />
//             </Drawer.Navigator>
//         </NavigationContainer>
//     );
// };

// export default Test ;












// import BottomDrawer from 'rn-bottom-drawer';

// const Test = props =>{

    // const renderContent = () => {
    //     return(
    //         <View>
    //             <Text>
    //                 Testing
    //             </Text>
    //         </View>
    //     );

    // }


    // class Test extends Component{    
    //     render(){
    //         return(
    //             <View>
    //                 <BottomDrawer 
    //                 containerHeight = {100}
    //                 offset = {50} 
    //                 >
    //                 {this.renderContent()}
    //                     <View>
    //                         <Text>
    //                             Testing
    //                         </Text>
    //                     </View>
    //                 </BottomDrawer>
    //             </View>
    //         );
    //     }
    
    // }
// };

