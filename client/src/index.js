import './styles.scss';
import displayUsers from './utils/displayUsers';
import fetchUsers from './utils/fetchUsers';
import configureStore from './store/configureStore';
import { projectAdded } from './store/projects';
import { userAdded } from './store/users';

const API_URL = process.env.API_URL;
const users = await fetchUsers(API_URL);
displayUsers(users);

const store = configureStore();

store.subscribe(() => {
  // log the state to the console
  const state = store.getState();
  console.log('State changed!', state);
});

// dispatch an action to add a project
store.dispatch(projectAdded({ name: 'Project 1' }));

// dispatch an action to add a user
store.dispatch(userAdded({ name: 'User 1' }));
