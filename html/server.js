const path = require('path');

const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');

const apiRoutes = require('./routes/api-routes');
const htmlRoutes = require('./routes/html-routes');
const models = require('./db/models');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(apiRoutes);
app.use(htmlRoutes);
app.use(express.static(path.join(__dirname, 'public')));

models.sequelize
    .sync({ force: false })
    .then(() => {
        console.log('Database Synchronized');
        app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
    })
    .catch(console.error);
