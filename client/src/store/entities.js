import { combineReducers } from 'redux';
import projectsReducer from './projects';
import usersReducer from './users';

export default combineReducers({
  projects: projectsReducer,
  users: usersReducer,
});
