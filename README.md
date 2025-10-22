# Application PWA 

Affiche les données des toilettes et mesure d'eau récupérées d'une API

## Installation 

Installer les dépendances
```bash
npm install
```
## Démarrage

### Mode développement
```bash
npm run dev
```

### Build pour PWA
```bash
npm run build
```

### Mode PWA
```bash
npm run preview
```

## Documentation
Une fois le serveur démarré, accédez à la documentation interactive JSdoc :
```bash
start .\docs\index.html
```

## Structure du projet

```
pwa/
├── docs/    
├── public/                         # Images de l'application
├── src/                            # Logique métier
│   ├── components                  # Composants de l'application
      ├── BatterieToilettes.jsx     # Composant du niveau de batterie
      ├── MesureChaumont.jsx        # Composant du bridge de Chaumont
      ├── MesureTavers.jsx          # Composant du bridge de Tavers
      └── OccupationToilettes.jsx   # Composant du statut d'occupation des toilettes
│   ├── App.css                     # Style de l'application
│   ├── App.jsx                     # Composant racine
│   ├── index.css                   # Style globaux
│   └── main.jsx                    # Point d'entrée de l'application 
├── .env                            # Variables d'environnement
├── .gitignore                      # Fichiers ignorés par Git
├── index.html                      # Fichier HTML pour afficher l'application
├── jsdoc.json                      # Configuration pour JSdoc
├── package.json                    # Dépendances et scripts
├── package-lock.json               # Généré lors de la commande NPM install
├── README.md                       # README de l'application
└── vite.config.js                  # Configuration de vite pour la PWA
```