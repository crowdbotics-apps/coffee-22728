import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen4176544Navigator from '../features/BlankScreen4176544/navigator';
import BlankScreen3175342Navigator from '../features/BlankScreen3175342/navigator';
import Messaging1175341Navigator from '../features/Messaging1175341/navigator';
import SignIn22175340Navigator from '../features/SignIn22175340/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen4176544: { screen: BlankScreen4176544Navigator },
BlankScreen3175342: { screen: BlankScreen3175342Navigator },
Messaging1175341: { screen: Messaging1175341Navigator },
SignIn22175340: { screen: SignIn22175340Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
