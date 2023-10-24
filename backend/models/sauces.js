const mongoose = require('mongoose');


// La méthode  Schema  de Mongoose vous permet de créer un schéma de données pour votre base de données MongoDB.
const saucesSchema = mongoose.Schema({
    userId: { type: String, required: true },
    name: { type: String, required: true },
    manufacturer: { type: String, required: true },
    description: { type: String, required: true },
    mainPepper: { type: String, required: true },
    imageUrl: { type: String, required: true },
    heat: { type: Number, required: true },
    likes: { type: Number, required: true },
    dislikes: { type: Number, required: true },
    // date: { type: Date, default: Date.now },
    usersLiked: { type: String, required: true },
    usersDisliked: { type: String, required: true },
});

// La méthode  model  transforme ce modèle en un modèle utilisable.
module.exports = mongoose.model('Sauces', saucesSchema);


// Ici, voici ce que nous faisons:

// nous créons un schéma de données qui contient les champs
// souhaités pour chaque Thing, indique leur type ainsi que
// leur caractère(obligatoire ou non).Pour cela,
//     on utilise la méthode Schema mise à disposition par Mongoose.
// Pas besoin de mettre un champ pour
// l'Id puisqu'il est automatiquement généré par Mongoose;

// ensuite, nous exportons ce schéma en tant que modèle Mongoose
// appelé « Thing », le rendant par là même disponible
// pour notre application Express.

