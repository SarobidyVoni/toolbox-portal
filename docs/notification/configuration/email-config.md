---
id: email-config
title: Configuration mail
---

### 3.4 Configuration Email

Toolbox Notification utilise un provider SMTP pour l'envoi des emails.

La configuration exacte dépend du serveur SMTP utilisé dans votre environnement (Gmail, Microsoft 365, serveur SMTP d'entreprise, etc.).

Exemple de configuration :

Dans `application.yml` :

```yaml
spring:
  mail:
    host: smtp.gmail.com
    port: 587
    username: ${SMTP_USER}
    password: ${SMTP_PASSWORD}
    properties:
      mail:
        smtp:
          auth: true
          starttls:
            enable: true

toolbox:
  notification:
    email:
      provider: smtp
      from: ${SMTP_USER}
      host: smtp.gmail.com
      port: 587
      username: ${SMTP_USER}
      password: ${SMTP_PASSWORD}
```

:::tip
Avec Gmail, utilisez un **mot de passe d'application** plutôt que le mot de passe du compte.
:::