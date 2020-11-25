import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn21178718Reducer from '../features/SignIn21178718/redux/reducers'
import SignUp22178717Reducer from '../features/SignUp22178717/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn21178718: SignIn21178718Reducer,
SignUp22178717: SignUp22178717Reducer,

});