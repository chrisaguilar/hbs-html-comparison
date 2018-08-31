const path = require('path');

const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');

const models = require('./db/models');

const app = express();

app.set('port', process.env.PORT || 8080);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('./routes/api-routes'));
app.use(require('./routes/html-routes'));
app.use(express.static(path.join(__dirname, 'public')));

models.sequelize
    .sync({ force: false })
    .then(() => {
        console.log('Database Synchronized');
        app.listen(app.get('port'), () => console.log(`Listening on port ${app.get('port')}`));
    })
    .catch(console.error);
