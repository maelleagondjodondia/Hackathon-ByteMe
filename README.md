<table width="100%" border="0" cellspacing="0" cellpadding="0">
<tr>
<td align="left"><h1>Hackathon - Ynov Toulouse 2025</h1></td>
<td align="right"><img src="ressources/logo.png" alt="Hackathon Ynov Toulouse 2025" width="100"/></td>
</tr>
</table>

> Ce repository contient les ressources ainsi que le code source développé lors du hackathon Ynov Toulouse 2025.

Cette template de README est un guide pour vous aider à structurer votre rendu de projet. N'hésitez pas à l'adapter ou surtout à le compléter avec des sections supplémentaires si nécessaire.

## Contexte

Et si on réinventait l’expérience babyfoot à Ynov ? L’objectif de ce hackathon est de moderniser et digitaliser l’usage des babyfoots présents dans le Souk pour créer un service _next-gen_, pensé pour près de 1000 étudiants !

Que ce soit via des gadgets connectés, un système de réservation intelligent, des statistiques en temps réel ou des fonctionnalités robustes pour une utilisation massive, nous cherchons des solutions innovantes qui allient créativité et technologie.

Toutes les filières sont invitées à contribuer : Dev, Data, Infra, IoT, Systèmes embarqués… chaque idée compte pour rendre le babyfoot plus fun, plus pratique et plus connecté.

Votre mission : transformer le babyfoot classique en expérience high-tech pour Ynov !

Bienvenue dans le Hackathon Ynov Toulouse 2025 !

> Retrouvez vos guidelines techniques dans le fichier [SPECIFICATIONS.md](./SPECIFICATIONS.md).

> P.S C'est un projet de groupe, pas autant de sous-projets que de filières dans votre équipe. Travaillez ensemble pour un seul et même projet au nom de votre équipe toute entière. Les guidelines sont là pour vous aider, pas pour vous diviser. Profitez de ce moment pour apprendre à travailler ensemble, partager vos compétences, et créer quelque chose d'unique.

## Equipe

- Dev' FullStack 1 : AGONDJO DONDIA Maëlle (Porte parole)
- Dev' FullStack 2 : LE MEUR Vincent
- Dev' Fullstack 3 : BENGHOUZI Pauline
- Cloud & Infrastructure 1 : GONZALEZ PATINO Luis Antonio
- Cloud & Infrastructure 2 : MBOK BATOUM Emmanuel Christian
- IA & Data 1 : KOUEMO TIENTCHEU Yvan Morryl
- IA & Data 1 : MAHUNON Harold
- IA & Data 1 : SOGBOSSI Michee

> Préciser qui est le porte parole de l'équipe, c'est lui qui répondra aux questions si nécessaire.

## Table des matières

- [Contexte](#contexte)
- [Equipe](#equipe)
- [Contenu du projet](#contenu-du-projet)
- [Technologies utilisées](#technologies-utilisées)
- [Architecture](#architecture)
- [Guide de déploiement](#guide-de-déploiement)
- [Etat des lieux](#etat-des-lieux)

## Contenu du projet

ByteMe vous présente Babyfoot Connect un site permettant de transformer les tables dans le Souk en une expérience moderne, intéractive et connecté.

Veuillez trouver la présentation du projet: https://www.canva.com/design/DAG2CAmtXa4/BkjK_gvrlreHx9S2BJcukw/edit?utm_content=DAG2CAmtXa4&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton

## Technologies utilisées

- Développement :
  React.js
  Next.js
  Tailwind
  
- Base de données:
  Python
  SQL
  Jupyter NoteBook
  
- Infrastructure Cloud:
  Ubuntu
  Pfsense (firewall)
  Nagios (Supervision)

- Gestion projet:
  Teams
  Notion
  GitHub
  
## Architecture
Voir: infra.jpg

## Guide de déploiement

Executez les scripts de setup pour les différents serveurs (Web Server & DB Host) pour permettre de exploiter les données et afficher le site web

Pour mettre en place le firewall, importez le fichier de configuration après avoir accédé à l'interface graphique de configuration -> Diagnostics > Backup & Restore

## Etat des lieux

- Développement:
  Vérification des emails (amélioration)
  
- Data & IA:
  Prédiction du gagnant / score (amélioration)
  
- Infrastructure Cloud:
  Implémentation de l'infrastructure locale dans le cloud (manquant)
