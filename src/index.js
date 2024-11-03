import './styles.scss';
import displayUsers from './utils/displayUsers';
import fetchUsers from './utils/fetchUsers';

const API_URL = process.env.API_URL;
const users = await fetchUsers(API_URL);
displayUsers(users);
