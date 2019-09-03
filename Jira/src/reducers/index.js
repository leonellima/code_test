import { combineReducers } from 'redux';
import tasksReducers from './tasksReducers';

export default combineReducers({
    tasks: tasksReducers
});