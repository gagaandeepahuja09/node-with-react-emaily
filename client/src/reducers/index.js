import { combineReducers } from 'redux';
import authReducer from './authReducer';

// Each element, here like auth, represents piece of state
export default combineReducers({
	auth: authReducer,
});