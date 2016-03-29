# MapsOfInterest

-----------------------------------------------------------------------------------------------------------------------------------------------------------
                                                                ELEVES
-----------------------------------------------------------------------------------------------------------------------------------------------------------

  * Paul BILLECOCQ
  * Romain LE QUELLEC
  * Groupe : TIC 1

-----------------------------------------------------------------------------------------------------------------------------------------------------------
                                                            IDEE GENERALE
-----------------------------------------------------------------------------------------------------------------------------------------------------------

  * Réalisation d'un site web aidant les touristes à prévoir leurs voyages

-----------------------------------------------------------------------------------------------------------------------------------------------------------
                                                    FONCTIONNALITES IMPLEMENTEES
-----------------------------------------------------------------------------------------------------------------------------------------------------------

  * FormController :
      - Charger les données de nom de villes et leur position depuis un JSON local

      - Formulaire vérifié permettant à l'utilisateur de chercher une activité parmis Restaurant, Où sortir, Lieux à visiter, dans les villes proposées.
        Le bouton de soumission ne s'affiche que quand les différents champs sont correctement renseignés

      - Chargement des données spécifiques à la demande de l'utilisateur dans un tableau en récupérant un JSON depuis l'API de TourPedia

      - Filtrage des résultats : # Via une recherche clavier
                                 # Au nombre de résultats affichés

      - Filtre custom : La catégorie s'affiche avec la première lettre en majuscule

-----------------------------------------------------------------------------------------------------------------------------------------------------------
                                                  FONCTIONNALITES SUPPLEMENTAIRES
-----------------------------------------------------------------------------------------------------------------------------------------------------------

  * MapController :
        - Affichage des résultats dans une Google Map
        - Affichage de markers qui se clusterisent suivant le niveau de zoom afin d'afficher les résultats proprement sur la carte
        - Bonton d'actualisation qui recentre la map et actualise les markers suivant la dernière recherche effectuée

  * DataFactory :
        - Implementation d'une factory afin de pouvoir se passer des données d'un controller à l'autre et faciliter une possible évolution du code des différents controllers
