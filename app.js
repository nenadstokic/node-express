const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/admin', adminRoutes); // /admin je prefix za sve rute u adminRoutes
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Stranica nije pronadjena :(</h1>');
});

app.listen(3000);