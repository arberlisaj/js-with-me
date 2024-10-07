import './styles.scss';
import displayUsers from './utils/displayUsers';
import fetchUsers from './utils/fetchUsers';

const users = await fetchUsers();
displayUsers(users);
