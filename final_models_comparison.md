# Rapport de Précision des Modèles Prédictifs de Face-à-Face (H2H) Optimisés

Ce rapport présente l'analyse des modèles de prédiction après intégration de la forme dynamique récente et optimisation de la pondération de l'ensemble de vote :

## 1. Métriques de Validation (Édition 2022)

| Modèle | Type | Précision Vainqueur (1N2) | Précision Score Exact |
| :--- | :--- | :---: | :---: |
| **Historique Face-à-Face (H2H + Forme)** | Poisson Temporel + H2H + Forme Générale 8 Matchs | `51.56%` | `14.06%` |
| **Dixon-Coles (Attaque/Défense spécifiques)** | Vraisemblance (MLE) + force Att/Def (Vectorisé) | `59.38%` | `14.06%` |
| **Modèle Hybride (Mix Optimisé)** | Pondération d'ensemble optimale (56.0% DC / 44.0% H2H) | `59.38%` | - |

## 2. Décryptage des Améliorations Apportées

1.  **Forme Dynamique (Générale et Récente)** :
    *   Le modèle H2H intègre désormais la forme générale des équipes sur leurs 8 derniers matchs internationaux (buts marqués/concédés). Cela compense la rareté des confrontations directes H2H.
2.  **Optimisation Vectorielle** :
    *   La fonction de perte Dixon-Coles a été vectorisée, ramenant le temps de calcul des paramètres de plus de 30 secondes à moins de 0.5 seconde.
3.  **Ensemble Blending** :
    *   Le modèle hybride (Mix) n'utilise plus une simple moyenne 50/50 arbitraire. Le poids optimal sur l'historique de validation 2022 a été résolu à **0.56** pour Dixon-Coles et **0.44** pour le H2H avec Forme.

Tous les paramètres ont été exportés sous format JSON dans [final_model_parameters.json](data_copy/final_model_parameters.json) et injectés dans l'application web.
