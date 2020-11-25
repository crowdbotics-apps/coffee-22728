import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView7178721Reducer from '../features/CalendarView7178721/redux/reducers';
import SignIn21178718Reducer from '../features/SignIn21178718/redux/reducers'
import SignUp22178717Reducer from '../features/SignUp22178717/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView7178721: CalendarView7178721Reducer,
SignIn21178718: SignIn21178718Reducer,
SignUp22178717: SignUp22178717Reducer,

});