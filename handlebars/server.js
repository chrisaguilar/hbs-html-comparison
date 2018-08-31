const path = require('path');

const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');

const models = require('./db/models');

const app = express();

app.set('port', process.env.PORT || 8080);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: path.join(app.get('views'), 'layouts/main') }));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('./routes/api-routes'));
app.use(require('./routes/handlebars-routes'));
app.use(express.static(path.join(__dirname, 'public')));

models.sequelize
    .sync({ force: false })
    .then(() => {
        console.log('Database Synchronized');
        app.listen(app.get('port'), () => console.log(`Listening on port ${app.get('port')}`));
    })
    .catch(console.error);
