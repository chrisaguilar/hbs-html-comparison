const path = require('path');

const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');

const apiRoutes = require('./routes/api-routes');
const handlebarsRoutes = require('./routes/handlebars-routes');
const models = require('./db/models');

const app = express();

const PORT = process.env.PORT || 8080;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: path.join(app.get('views'), 'layouts/main') }));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(apiRoutes);
app.use(handlebarsRoutes);
app.use(express.static(path.join(__dirname, 'public')));

models.sequelize
    .sync({ force: false })
    .then(() => {
        console.log('Database Synchronized');
        app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
    })
    .catch(console.error);
