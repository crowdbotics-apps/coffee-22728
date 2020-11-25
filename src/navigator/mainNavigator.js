import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Messaging6178722Navigator from '../features/Messaging6178722/navigator';
import CalendarView7178721Navigator from '../features/CalendarView7178721/navigator';
import BlankScreen3178720Navigator from '../features/BlankScreen3178720/navigator';
import SignIn21178718Navigator from '../features/SignIn21178718/navigator';
import SignUp22178717Navigator from '../features/SignUp22178717/navigator';
import BlankScreen3175342Navigator from '../features/BlankScreen3175342/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Messaging6178722: { screen: Messaging6178722Navigator },
CalendarView7178721: { screen: CalendarView7178721Navigator },
BlankScreen3178720: { screen: BlankScreen3178720Navigator },
SignIn21178718: { screen: SignIn21178718Navigator },
SignUp22178717: { screen: SignUp22178717Navigator },
BlankScreen3175342: { screen: BlankScreen3175342Navigator },

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
