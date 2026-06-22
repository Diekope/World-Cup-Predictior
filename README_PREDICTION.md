# Plan de l'Algorithme de Prédiction - Coupe du Monde

Ce document décrit la conception, l'entraînement et l'évaluation de l'algorithme de prédiction des scores et des vainqueurs pour la Coupe du Monde de la FIFA.

## 1. Préparation des Données

*   **Période d'étude** : Entraînement sur les Coupes du Monde de **1994 à 2022**.
*   **Source des données** :
    *   `data/matches_1930_2022.csv` (filtré pour les années >= 1994).
    *   `data/fifa_ranking_2022-10-06.csv` (pour les points/classements historiques de 2022).
    *   `data/fifa_ranking_2026-06-08.csv` (pour les prédictions de 2026).
*   **Copie des données** : Une copie du dossier `data` sera effectuée sous `data_copy/` (ou `data_modified/`) pour appliquer les transformations nécessaires (normalisation des noms de pays, jointures de classements).

## 2. Variables du Modèle (Features)

*   `points_diff` : Différence de points FIFA entre l'équipe à domicile et l'équipe à l'extérieur.
*   `rank_diff` : Différence de classement FIFA entre l'équipe à domicile et l'équipe à l'extérieur.
*   `is_host` : Indicateur binaire si l'équipe joue dans son propre pays (avantage à domicile).

## 3. Algorithme de Régression de Poisson

Pour prédire les buts marqués par chaque équipe :
*   **Modèle 1** : Prédit les buts de l'équipe à domicile ($\lambda_{home}$).
*   **Modèle 2** : Prédit les buts de l'équipe à l'extérieur ($\lambda_{away}$).

### Suivi et Visualisation de l'Entraînement
Afin de visualiser l'évolution des performances et de la perte (loss) pendant l'entraînement, nous utiliserons un algorithme d'optimisation itératif (par exemple via la descente de gradient sur la déviance de Poisson ou via un modèle Gradient Boosting avec fonction de perte Poisson).
*   Nous enregistrerons la perte (deviance/loss) à chaque itération.
*   Nous tracerons et sauvegarderons un graphique de la courbe d'apprentissage pour visualiser la convergence du modèle.

## 4. Évaluation

*   **Entraînement** : 1994 - 2018.
*   **Validation** : 2022.
*   **Métriques** :
    *   Précision du vainqueur (1N2).
    *   Précision du score exact.
    *   Erreur quadratique moyenne (MSE) sur les buts.
