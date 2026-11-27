---
id: templates
title: Variable et Template
---


### 4.4 Variables et templates

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