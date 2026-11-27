---
id: sms
title: Sms
---



### Envoi d'un SMS

```java
Notification notification = Notification.builder()
        .channel(Channel.SMS)
        .recipient("+261340000000")
        .content("Bonjour depuis Toolbox Notification.")
        .build();

List<NotificationResult> results = notificationService.send(notification);
```