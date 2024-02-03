// store/rootReducer.ts
import { combineReducers } from 'redux';
import authReducer from '../reducers/authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  // blog: blogReducer
  // Add other reducers as needed
});

export default rootReducer;
