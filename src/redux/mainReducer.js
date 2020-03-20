import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth676Reducer from '../features/EmailAuth676/redux/reducers';
import EmailAuth673Reducer from '../features/EmailAuth673/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth676: EmailAuth676Reducer,
EmailAuth673: EmailAuth673Reducer,
EmailAuth: EmailAuthReducer,

});