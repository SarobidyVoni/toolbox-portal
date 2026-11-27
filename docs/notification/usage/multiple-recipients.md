---
id: multiple-recipients
title: Multiple destinataires
---

### Plusieurs destinataires

Il suffit d'appeler `recipient(...)` plusieurs fois. Cela fonctionne pour les emails comme pour les SMS :

```java
Notification notification = Notification.builder()
        .channel(Channel.EMAIL)
        .recipient("user1@example.com")
        .recipient("user2@example.com")
        .recipient("user3@example.com")
        .subject("Information")
        .content("Message de démonstration.")
        .build();

List<NotificationResult> results = notificationService.send(notification);
```

Vous obtenez autant de résultats que de destinataires, chacun avec son propre statut :

```text
user1@example.com -> SUCCESS
user2@example.com -> SUCCESS
user3@example.com -> FAILURE
```

L'échec d'un destinataire n'empêche pas le traitement des autres.