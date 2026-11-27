---
id: sms-config
title: Configuration sms
---

### 3.5 Configuration SMS

```yaml
toolbox:
  notification:
    sms:
      provider: africastalking
      url: https://api.sandbox.africastalking.com/version1/messaging
      api-key: ${SMS_API_KEY}
      username: sandbox
      default-country-code: "+261"
```

L'exemple utilise l'environnement **Sandbox** d'Africa's Talking, pratique pour les tests. En production, remplacez l'URL, le nom d'utilisateur et la clé API par ceux de votre compte réel.

