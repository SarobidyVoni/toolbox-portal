---
id: email
title: Mail 
---

### Envoi d'un Email
```java
Notification notification = Notification.builder()
        .channel(Channel.EMAIL)
        .recipient("client@example.com")
        .subject("Bienvenue")
        .content("Bonjour et bienvenue sur notre plateforme.")
        .build();

List<NotificationResult> results = notificationService.send(notification);
```

Ce scénario a été validé avec un serveur SMTP Gmail.

