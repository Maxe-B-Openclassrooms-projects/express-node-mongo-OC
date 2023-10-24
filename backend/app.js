const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require("body-parser");
const path = require('path');
const stuffRoutes = require('../routes/stuff.js')
const userRoutes = require('../routes/user.js');


mongoose.connect('mongodb+srv://max:Je5kc1qkRFrWYY0D@cluster0.cxqlesa.mongodb.net/',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

//intercept les requetes content type json remplace le body parser, on accede ainsi au corps de la requete


// Control pour les erreurs de CORS //
// Ces headers permettent:

// d'accéder à notre API depuis n'importe quelle origine('*');

// d'ajouter les headers mentionnés aux requêtes envoyées vers notre API (Origin , X-Requested-With , etc.) ;

app.use(express.json());
app.use(morgan('dev'));
// d'envoyer des requêtes avec les méthodes mentionnées ( GET ,POST , etc.).

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());
app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));






module.exports = app;



