---
id: attachments
title: Pièces jointes
---

### 4.5 Pièces jointes

Une pièce jointe se crée à partir d'un nom, d'un type MIME et du contenu du fichier :

```java
Attachment attachment = new Attachment(
        "document.pdf",
        "application/pdf",
        fileContent
);

Notification notification = Notification.builder()
        .channel(Channel.EMAIL)
        .recipient("client@example.com")
        .subject("Document")
        .content("Veuillez trouver le document ci-joint.")
        .attachment(attachment)
        .build();

notificationService.send(notification);
```

Pour joindre un fichier présent dans les ressources du projet :

```java
ClassPathResource resource = new ClassPathResource("demo/document.pdf");
byte[] fileContent = resource.getInputStream().readAllBytes();
```

Les pièces jointes ne sont acceptées que sur le canal `EMAIL`. En ajouter une à une notification SMS provoque une erreur dès la construction de la notification.