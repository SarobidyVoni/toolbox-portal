---
id: faq
title: FAQ
---

> ❓ **Pourquoi ai-je un statut `SUCCESS` mais aucun email reçu ?**

`SUCCESS` signifie que le serveur SMTP a accepté la demande d'envoi.

Cela ne garantit pas que le message a déjà été reçu par le destinataire. La livraison dépend ensuite du serveur de destination, des filtres anti-spam, d'une éventuelle quarantaine ou d'une boîte mail saturée.

Pensez à vérifier le dossier des courriers indésirables.

---

> ❓ **Pourquoi ai-je un statut `SUCCESS` mais aucun SMS reçu ?**

Le fournisseur SMS a accepté la demande d'envoi, mais la livraison finale dépend de la passerelle SMS et du réseau mobile.

Lors de nos tests avec Africa's Talking Sandbox, les requêtes étaient correctement acceptées par la plateforme sans être nécessairement délivrées sur un numéro malgache réel.

La Sandbox permet de valider l'intégration technique mais ne garantit pas la réception effective du SMS.

---

> ❓ **Pourquoi une `TemplateException` est-elle levée ?**

Une variable utilisée dans le sujet ou le contenu n'a pas de valeur correspondante dans les métadonnées.

Exemple :

```java
.content("Bonjour ${nom}")
```

sans :

```java
.metadata("nom", "Rakoto")
```

Dans ce cas, Toolbox bloque l'envoi avant toute tentative de transmission.

---

> ❓ **Pourquoi aucun provider n'est-il trouvé ?**

Cette erreur apparaît lorsqu'aucun fournisseur n'est enregistré pour le canal demandé.

Les causes les plus fréquentes sont :

- le module Email ou SMS n'est pas présent dans les dépendances Maven ;
- le provider n'est pas configuré ;
- la configuration du provider est incomplète ou invalide.

---

> ❓ **Peut-on envoyer un email et un SMS avec une seule notification ?**

Non.

Une notification est associée à un seul canal.

Pour envoyer un Email et un SMS, il faut construire deux notifications distinctes.

---

> ❓ **Les pièces jointes sont-elles supportées pour les SMS ?**

Non.

Les pièces jointes sont réservées au canal Email.

Toute tentative d'ajouter une pièce jointe à une notification SMS provoque une erreur lors de la construction de la notification.

---

> ❓ **Peut-on utiliser plusieurs destinataires ?**

Oui.

Les canaux Email et SMS supportent plusieurs destinataires.

Un résultat est retourné pour chaque destinataire.

---

> ❓ **Toolbox conserve-t-il un historique des envois ?**

Non.

Le Toolbox ne stocke :

- aucun historique ;
- aucune notification ;
- aucun template ;
- aucune trace des envois.

Si un historique est nécessaire, l'application consommatrice doit stocker les `NotificationResult`.

---

> ❓ **Toolbox effectue-t-il des retries automatiques ?**

Non.

Chaque notification est envoyée une seule fois.

Les éventuels mécanismes de retry restent sous la responsabilité de l'application qui utilise Toolbox Notification.

---
