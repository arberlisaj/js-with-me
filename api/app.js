const cors = require('cors');
const logger = require('./middleware/logger');
const home = require('./routes/home');
const users = require('./routes/users');
const path = require('path');

const express = require('express');
const app = express();

require('dotenv').config({ path: path.join(__dirname, '../.env') });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(logger);

app.use('/api/users', users);
app.use('/', home);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
