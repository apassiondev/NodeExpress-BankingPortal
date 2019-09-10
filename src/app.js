const fs = require('fs');
const path = require('path');

const express = require('express');

const app = express();

const { accounts, users, writeJSON } = require('./data');

const accountRoutes = require('./routes/accounts');
const servicesRoutes = require('./routes/services');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/account', accountRoutes);
app.use('/services', servicesRoutes);

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Account Summary',
        accounts
    })
});

app.get('/profile', (req, res) => {
    res.render('profile', {
        user: users[0]
    });
});



var server = app.listen(3000, () => console.log(`PS Project Running on port ${server.address().port}`));