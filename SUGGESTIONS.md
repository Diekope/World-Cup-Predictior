# Suggestions d'Amélioration du Projet

Le projet actuel est une excellente base de simulation interactive de Coupe du Monde. Voici comment nous pouvons l'améliorer :

## 1. Modélisation et Données
*   **[COMPLÉTÉ] Données H2H élargies** : Intégration de la base de données globale `results.csv` pour inclure tous les matchs internationaux de l'histoire (Coupes continentales, qualifications, matchs amicaux majeurs) dans le calcul des 10 dernières confrontations directes.
    *   *Résultat* : Le modèle H2H n'a plus de confrontations vides par défaut (1.2) pour les équipes s'étant déjà affrontées hors Coupe du Monde.
*   **Forces dynamiques (Forme récente)** : Les forces Dixon-Coles ($\alpha$, $\beta$) sont basées sur tout l'historique. 
    *   *Solution* : Appliquer un poids temporel exponentiel beaucoup plus fort pour valoriser les 3 dernières années ou utiliser les données réelles d'effectifs pour ajuster les forces.

## 2. Interface Utilisateur (Bloomberg Terminal)
*   **Graphique de convergence en direct** : Afficher un petit graphique dynamique montrant comment la probabilité (1N2) converge vers sa valeur finale au fil des simulations.
*   **Ajustements manuels** : Ajouter des curseurs (sliders) dans l'interface pour permettre à l'utilisateur de modifier manuellement la force offensive ou défensive des équipes avant de simuler (ex: simuler l'absence d'un joueur clé).

## 3. Nouvelles Fonctionnalités
*   **Simulateur de Tournoi complet** : Ajouter un onglet pour simuler l'intégralité de la Coupe du Monde 2026 (Phase de groupes + Tableau final) et afficher les chances de titre pour chaque nation.
