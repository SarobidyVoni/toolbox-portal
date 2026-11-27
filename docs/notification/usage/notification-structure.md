---
id: notification-structure
title: Strucuture des notifications
---

### 4.1 Structure d'une notification

La classe `Notification` est l'objet central de la bibliothèque. Elle se construit avec un builder :

```java
Notification notification = Notification.builder()
        .channel(Channel.EMAIL)
        .recipient("client@example.com")
        .subject("Bienvenue")
        .content("Bonjour")
        .build();
```

Les champs disponibles :

- `channel` (obligatoire) : `EMAIL` ou `SMS` ;
- `recipient` (obligatoire) : un ou plusieurs destinataires ;
- `content` (obligatoire) : le contenu du message ;
- `subject` : le sujet (pour les emails) ;
- `metadata` : les valeurs des variables utilisées dans le sujet et le contenu ;
- `attachment` : les pièces jointes (emails uniquement).

L'envoi se fait ensuite par un appel unique :

```java
List<NotificationResult> results = notificationService.send(notification);