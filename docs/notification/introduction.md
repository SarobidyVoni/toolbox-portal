---
id: introduction
title: Introduction
---

### 1. Présentation et objectifs

Dans beaucoup de projets, l'envoi d'emails et de SMS est codé directement dans l'application. Chaque équipe réécrit sa propre logique d'envoi, sa propre configuration et sa propre gestion des erreurs. Résultat : 
- du **code dupliqué** , 
- des **comportements qui diffèrent** d'un projet à l'autre, 
- des **corrections** à répéter partout.

Toolbox Notification répond à ce problème. L'application construit une notification, la transmet au service, et récupère les résultats :

```java
List<NotificationResult> results = notificationService.send(notification);
```

Le choix du canal, le traitement des variables et la communication avec les fournisseurs sont gérés par la bibliothèque. Vous n'avez à manipuler directement ni serveur SMTP ni API SMS.

L'objectif est de proposer une solution simple à intégrer, réutilisable d'une application à l'autre, cohérente dans son comportement et facile à étendre.

### 2. Fonctionnalités principales et canaux disponibles
Toolbox Notification propose une API commune pour deux canaux :

- **EMAIL** : envoi via SMTP ;
- **SMS** : envoi via Africa's Talking.


Une notification est toujours associée à un seul canal. Pour envoyer un email et un SMS, il faut donc créer deux notifications.

La bibliothèque permet de :

- envoyer des emails via SMTP (validé avec Gmail) ;
- envoyer des SMS via Africa's Talking ;
- insérer des variables dans le sujet et le contenu (`${nom}`, `${numero}`...) ;
- envoyer à un ou plusieurs destinataires ;
- joindre des fichiers aux emails ;
- obtenir un résultat individuel par destinataire ;
- s'intégrer automatiquement à Spring Boot grâce à un Starter.

:::info
Un statut `SUCCESS` signifie que le fournisseur a **accepté** la demande d'envoi. Il ne garantit pas que le message est arrivé chez le destinataire. Voir la section [5.1](../toolbox-notification.md#51-statuts).
:::

---