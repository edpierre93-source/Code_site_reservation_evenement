chemin vers github https://github.com/edpierre93-source/Code_site_reservation_evenement.git

# 🎭 Projet "La Salle" - Page d'Accueil

Ce projet est une interface de site web responsive pour une salle de spectacle nommée **"La Salle"**. Elle présente les événements marquants, les prochaines dates et une section "Zoom" détaillée.

---

## 📂 Structure du Projet
Pour que le projet fonctionne, respectez cette arborescence :
- `index.html` : Structure de la page.
- `styles-2.css` : Design et responsive.
- `/Images` : Dossier contenant les visuels (`carre_vert.png`, etc.).

---

## 🧪 Phase de Test (Local)

Avant tout déploiement, il est important de vérifier la qualité du rendu. Voici le protocole de test à suivre :

### 1. Test de l'affichage (Rendering)
- **Navigateurs** : Ouvrir `index.html` sur au moins deux navigateurs différents (Chrome, Firefox ou Safari) pour vérifier la compatibilité.
- **Responsive** : Utiliser l'outil de développement (`F12` > icône Mobile) pour tester les points de rupture :
    - **Mobile (< 1024px)** : Vérifier que les éléments s'empilent verticalement.
    - **Desktop (> 1024px)** : Vérifier que les sections "Prochainement" et "Zoom" passent en côte à côte.

### 2. Test des liens et médias
- Cliquer sur les liens de la navigation (ex: Programme) pour vérifier que le chemin vers l'image ou la page est correct.
- Vérifier que toutes les images s'affichent (pas d'icône d'image brisée).

### 3. Validation du code
- **HTML** : Passer le code au [Validateur W3C](https://validator.w3.org/) pour corriger d'éventuelles erreurs de balisage.
- **CSS** : Vérifier la console du navigateur (`F12`) pour s'assurer qu'aucun fichier n'est manquant.

---

## 🚀 Phase de Déploiement

Une fois les tests validés, suivez ces étapes pour mettre le site en ligne.

### Déploiement via GitHub Pages
1. **Dépôt** : Créez un nouveau dépôt sur GitHub et poussez vos fichiers.
2. **Configuration** :
   - Allez dans l'onglet **Settings** du dépôt.
   - Menu à gauche : **Pages**.
   - Sous **Build and deployment**, choisissez la branche `main` et le dossier `/ (root)`.
3. **Mise en ligne** : Cliquez sur **Save**. Votre site sera publié à l'adresse `https://votre-nom.github.io/votre-projet/`.


## 🛠️ Maintenance
- Pour modifier le design, éditez uniquement `styles-2.css`.
- Pour ajouter un événement, dupliquez un bloc `<div class="teasing-evenement">` dans le fichier `index.html`.


## 🤖 Automatisation et Tests

Ce projet intègre des tests de qualité automatique (Linting) pour garantir un code propre et sans erreurs de syntaxe.

### 1. Tests Automatisés (Qualité du code)
Nous utilisons des outils de "Linting" pour garantir que le code respecte les standards du Web avant chaque déploiement.
* **Lancer les tests** : `npm test`
* **Vérifier le HTML** : `npm run lint:html`
* **Vérifier le CSS** : `npm run lint:css`

### 2. Tests de la couche API
Comme les données sont chargées dynamiquement, vérifiez les points suivants dans la console de votre navigateur (`F12`) :
* **Statut HTTP 200** : Vérifiez que le fichier `evenements.json` est bien chargé.
* **Rendu Dynamique** : Assurez-vous que chaque objet du JSON génère bien une carte `<div class="teasing-evenement">` dans le DOM.
* **Fallback** : Vérifiez qu'un message d'erreur s'affiche en console si le fichier JSON est malformé ou absent.

---

## 🚀 Déploiement & Automatisation (CI/CD)

Le projet est configuré avec un workflow **GitHub Actions** (`.github/workflows/ci.yml`) :
1. À chaque **Push**, les tests de Linting se lancent automatiquement.
2. Si les tests échouent, le déploiement est bloqué pour éviter de mettre en ligne un code erroné.

### Déploiement manuel rapide :
1. Installez les dépendances : `npm install`
2. Lancez un serveur local (ex: extension *Live Server* sur VS Code) pour autoriser les requêtes `fetch`.
3. Pour la mise en ligne, utilisez **GitHub Pages** en pointant sur la branche `main`.

---

## 📂 Structure finale des fichiers
```text
.
├── .github/workflows/ci.yml   # Automatisation des tests
├── index.html                 # Structure (Squelette)
├── styles-2.css               # Design Responsive
├── evenements.json            # Base de données (API REST)
├── package.json               # Scripts et dépendances
├── .stylelintrc.json          # Configuration du testeur CSS
└── Images/                    # Ressources graphiques