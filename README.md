# 🏆 Bloomberg World Cup 2026 Predictor & Value Betting Terminal

Une console de simulation interactive et d'aide aux paris sportifs inspirée des terminaux financiers Bloomberg. L'application combine des modèles statistiques avancés en Python (Dixon-Coles & Poisson avec forme dynamique) avec une interface client rétro-cyberpunk complète en HTML/JS.

---

## 🛠️ Aperçu des Fonctionnalités

1.  **[ 1 ] RUN SIMULATIONS** : Prédiction de confrontation individuelle. Permet de lancer une simulation de Monte-Carlo animée en direct (jusqu'à 100 000 matches) et affiche un graphique de convergence des probabilités (1N2) sur Canvas DPI.
2.  **[ 2 ] PHASES DU TOURNOI** : Simulateur complet de la Coupe du Monde 2026 (48 équipes, 12 groupes, phases finales jusqu'au sacre) avec répartition des chances de victoires finales pour chaque nation (sous forme de diagramme en barres).
3.  **[ 3 ] CHERCHER STATISTIQUES** : Explorateur statistique affichant les détails Dixon-Coles ($\alpha$ d'attaque, $\beta$ de défense), le rang FIFA, l'historique H2H récent et la forme sur les 8 derniers matches.
4.  **[ 4 ] COMPARATEUR DE MODÈLES** : Analyse comparative des prédictions (1, N, 2 et scores exacts) entre trois modèles (Dixon-Coles Pur, Rolling H2H + Forme, et le Modèle Hybride Blended).
5.  **[ 5 ] ASSISTANT DE PARIS (Value Betting)** : Calculateur de rentabilité comparant les probabilités réelles estimées par notre modèle aux cotes du bookmaker pour identifier les **Value Bets** (pari à espérance positive).
6.  **[ 6 ] CALENDRIER DU TOURNOI** : Un calendrier interactif de la phase de groupes. Il simule de manière déterministe les matches passés, gère un ticker de matches en direct (live ticking) et intègre des boutons de redirection automatique pour lancer des prédictions ou calculer des values en un clic.

---

## 🔬 Modélisation Mathématique & Statistique

Les prédictions reposent sur un ensemble hybride optimisé :

*   **Modèle Dixon-Coles (Force pure)** : Modélisation par maximum de vraisemblance (MLE) de la force d'attaque ($\alpha$) et de défense ($\beta$) de chaque équipe nationale, ajustée par un facteur de domicile ($\gamma$) et une fonction de correction ($\tau$) pour la sous-estimation statistique des scores bas (0-0, 1-0, 0-1, 1-1).
*   **Ajustements Environnementaux** : Prise en compte du facteur d'altitude et de fatigue de voyage pour les pays visiteurs affrontant les pays hôtes (États-Unis, Mexique, Canada) en 2026.
*   **Modèle Rolling H2H + Forme** : Analyse des 10 dernières confrontations historiques directes cumulée à la forme des 8 derniers matches internationaux (pondération exponentielle temporelle).
*   **Fusion Hybride (Ensemble Blending)** : Optimisation mathématique (par minimisation Scipy) des poids de l'ensemble sur l'historique de validation 2022 (56% Dixon-Coles / 44% H2H & Forme).

---

## 📦 Structure du Projet

```
.
├── data/                       # Données CSV brutes historiques et de classements
├── data_copy/                  # Base SQLite consolidée et paramètres du modèle
│   ├── world_cup_data.db       # Source unique de vérité SQLite
│   ├── final_model_parameters.json # Paramètres Dixon-Coles & H2H compilés
│   └── h2h_history.json        # Base historique H2H
├── train_final_models.py       # Script d'entraînement et d'optimisation des modèles
├── fetch_winamax_odds.py       # Scraper automatique des cotes de Winamax.fr
├── simulate_past_matches.py    # Simulateur de matches passés en ligne de commande
├── predict_interactive.py      # Console CLI interactive de prédiction de confrontation
├── index.html                  # Interface utilisateur (Bloomberg Terminal UI)
├── style.css                   # Styles graphiques rétro-cyberpunk
├── script.js                   # Moteur de simulation JS (léger et dynamique)
└── .gitignore                  # Fichiers exclus du suivi Git
```

---

## 🚀 Guide de Démarrage

### 1. Cloner le projet et préparer l'environnement
Assurez-vous d'avoir Python 3.10+ et Node.js installés.
```bash
# Activer l'environnement virtuel (selon OS)
source .venv/bin/activate  # Mac/Linux
.venv\Scripts\activate     # Windows

# Installer les dépendances Python
pip install pandas numpy scipy
```

### 2. Entraîner les modèles de Machine Learning
Génère la base de paramètres et l'analyse de validation à partir de la base SQLite centralisée :
```bash
python train_final_models.py
```

### 3. Récupérer les cotes réelles du bookmaker (Winamax)
Télécharge et synchronise les cotes football actuelles de Winamax pour alimenter le terminal de Value Betting :
```bash
python fetch_winamax_odds.py
```

### 4. Lancer l'application web localement
Démarrez un serveur HTTP local (par exemple, le serveur natif de Python) :
```bash
python3 -m http.server 8000
```
Ouvrez ensuite votre navigateur et accédez à l'adresse : **`http://localhost:8000`**.

### 5. Exécuter des simulations dans le terminal shell
*   Pour simuler tous les matches passés du calendrier en ligne de commande :
    ```bash
    python simulate_past_matches.py
    ```
*   Pour lancer des prédictions interactives pas-à-pas en ligne de commande :
    ```bash
    python predict_interactive.py
    ```

---

## 📈 Guide de Publication sur GitHub

Pour héberger ce projet sur votre compte GitHub, suivez les instructions ci-dessous :

```bash
# 1. Initialiser le dépôt Git local
git init

# 2. Ajouter tous les fichiers (le .gitignore exclura les dossiers locaux volumineux)
git add .

# 3. Créer le commit initial
git commit -m "Initial commit: Bloomberg World Cup 2026 Simulator and Value Betting engine"

# 4. Créer un dépôt vide sur votre compte GitHub, puis lier le dépôt local
# (Remplacez l'URL par celle de votre dépôt GitHub)
git remote add origin https://github.com/VOTRE_NOM_UTILISATEUR/VOTRE_DEPOT.git

# 5. Renommer la branche par défaut en main
git branch -M main

# 6. Pousser le projet vers GitHub
git push -u origin main
```
