const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Tes données d'événements
const evenements = [
    {
        id: 1,
        titre: "Soirée Electro-Deep",
        date: "15/04/2026",
        description: "Un voyage sonore unique avec les DJ les plus influents de la scène actuelle.",
        image: "Images/carre_vert.png"
    },
    {
        id: 2,
        titre: "Rock Altitude",
        date: "22/04/2026",
        description: "Le retour des guitares saturées pour une soirée mémorable.",
        image: "Images/carre_vert.png"
    },
    {
        id: 3,
        titre: "Jazz & Wine",
        date: "30/04/2026",
        description: "Dégustation et musique live dans une ambiance feutrée.",
        image: "Images/carre_vert.png"
    }
];

// Route GET pour envoyer les événements au front-end
app.get('/api/evenements', (req, res) => {
    res.json(evenements);
});

app.listen(PORT, () => {
    console.log(`Serveur API lancé sur http://localhost:${PORT}`);
});