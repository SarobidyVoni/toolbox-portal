---
id: usage-notification
title: Usage
---

### 1. Structure d'une notification

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
```

### 2. Envoi d'un Email

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

### 3. Envoi d'un SMS

```java
Notification notification = Notification.builder()
        .channel(Channel.SMS)
        .recipient("+261340000000")
        .content("Bonjour depuis Toolbox Notification.")
        .build();

List<NotificationResult> results = notificationService.send(notification);
```

Le numéro doit être au format international. Si vous renseignez un numéro local, `default-country-code` est utilisé pour le compléter.

### 4. Variables et templates

Le sujet et le contenu acceptent des variables au format `${nom}`. Leurs valeurs sont fournies via `metadata` :

```java
Notification notification = Notification.builder()
        .channel(Channel.EMAIL)
        .recipient("client@example.com")
        .subject("Bienvenue ${nom}")
        .content("""
                Bonjour ${nom},

                Votre numéro client est ${numero}.
                """)
        .metadata("nom", "Rakoto")
        .metadata("numero", "CLI-2026-001")
        .build();

notificationService.send(notification);
```

Le destinataire reçoit :

```text
Sujet : Bienvenue Rakoto

Bonjour Rakoto,

Votre numéro client est CLI-2026-001.
```

Les variables fonctionnent de la même façon pour les SMS.

:::warning
Toute variable utilisée doit avoir une valeur dans `metadata`. Sinon, une `TemplateException` est levée **avant** l'envoi : aucun message ne part tant que la variable n'est pas renseignée.
:::

### 5. Pièces jointes

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

### 6. Plusieurs destinataires

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

### 7. Lecture des résultats

Parcourez la liste retournée et réagissez selon le statut :

```java
for (NotificationResult result : results) {
    switch (result.status()) {
        case SUCCESS -> System.out.println("Notification acceptée");
        case FAILURE -> System.out.println("Erreur : " + result.errorCode());
        case UNKNOWN -> System.out.println("Résultat incertain");
    }
}
```

Le détail des statuts et des codes d'erreur est expliqué dans le chapitre suivant.
