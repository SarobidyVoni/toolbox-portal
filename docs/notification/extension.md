---
id: extension
title: Extension
---

Dans la plupart des cas, les fournisseurs fournis par la bibliothèque suffisent. Si vous devez brancher une passerelle spécifique ou un système interne, vous pouvez écrire votre propre fournisseur.

### 6.1 Provider personnalisé

Un provider est le composant qui réalise l'envoi réel pour un canal. Il implémente l'interface `NotificationProvider` :

```java
@Component
public class CustomSmsProvider implements NotificationProvider {

    @Override
    public String getName() {
        return "custom-sms";
    }

    @Override
    public Channel getChannel() {
        return Channel.SMS;
    }

    @Override
    public List<NotificationResult> send(Notification notification) {
        // Votre logique d'envoi

        return List.of();
    }
}
```

Votre provider doit respecter ces règles :

- ne gérer qu'un seul canal ;
- retourner un résultat par destinataire, dans le même ordre que les destinataires ;
- ne jamais retourner `null` ;
- utiliser uniquement les statuts `SUCCESS`, `FAILURE` ou `UNKNOWN`.

### 6.2 Sélection des providers

Le choix du fournisseur est automatique : un email utilise le provider Email, un SMS le provider SMS.

Si votre application déclare son propre provider pour un canal, il est utilisé **à la place** de celui de Toolbox. Vous pouvez ainsi remplacer le comportement par défaut sans toucher à la bibliothèque. Par exemple, un `CustomEmailProvider` déclaré dans votre application remplace le provider SMTP fourni.

Un seul provider peut être actif par canal :

```text
EMAIL -> CustomEmailProvider    (valide)
SMS   -> SmsProvider            (valide)

EMAIL -> ProviderA              (invalide)
EMAIL -> ProviderB
```

Si deux providers sont déclarés pour le même canal, Toolbox signale une erreur de configuration plutôt que de choisir au hasard.

:::tip
Réservez les providers personnalisés aux besoins que les implémentations standard ne couvrent pas.
:::