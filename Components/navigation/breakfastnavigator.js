import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation' ;
import 'react-native-gesture-handler';
import { TransitionPresets } from 'react-navigation-stack';
import Firstpage from '../../Pages/Screens/firstpage' ;
import Breakfast from '../../Pages/Screens/breakfast' ;
import Dinner from '../../Pages/Screens/dinner' ;
import Recipe from '../../Pages/Screens/recipe';
import Test from '../procedure';
const Bnavigator = createStackNavigator({

    Laddu:{
        screen: Firstpage,
        // headerMode : "none"
    }, 
    Breakfast:{
        screen : Breakfast
    },
    Dinner:{
        screen: Dinner
    },
    Recipe:{
        screen: Recipe
    }
    // App:{
    //     screen: Test
    // }       

},{
    headerMode: 'none',
    // ...TransitionPresets.RevealFromBottomAndroid
});
// const Stack = createStackNavigator() ;
// function MyStack(){
//     return(
//         <Stack.Navigator>
//         <Stack.Screen name= "Laddu" component = {Firstpage}/>
//         <Stack.Screen name="Breakfast" component = {Breakfast} />
//         </Stack.Navigator>
//     );
// };

export default createAppContainer(Bnavigator) ;