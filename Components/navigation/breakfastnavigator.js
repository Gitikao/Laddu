import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation' ;
import 'react-native-gesture-handler';

import Firstpage from '../../Pages/Screens/firstpage' ;
import Breakfast from '../../Pages/Screens/breakfast' ;

const Bnavigator = createStackNavigator({

    // Home: Firstpage,
    Breakfast:{
        screen : Breakfast
    } 
        

});

export default createAppContainer(Bnavigator) ;