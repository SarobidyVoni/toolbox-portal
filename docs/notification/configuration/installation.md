---
id: installation
title: Installation & Configuration
---

### 1. Prérequis

- Java 17 ou supérieur ;
- Spring Boot ( indépendamment de la version ) ;
- Maven ;
- pour l'email : un serveur SMTP (Gmail, par exemple) ;
- pour le SMS : un compte Africa's Talking et une clé API.


## 2. Récupération et compilation du Toolbox

Commencez par récupérer le code source du projet :

```bash
git clone https://repository.pulse.mg/gitlab/toolbox-notification.git
```

Positionnez-vous à la racine du projet puis exécutez :

```bash
mvn clean install
```

Cette commande :

- compile tous les modules ;
- génère les JAR ;
- installe les artefacts dans le dépôt Maven local (`~/.m2/repository`).

Une fois cette étape terminée, les modules du Toolbox peuvent être utilisés comme dépendances dans une autre application.

---

## 3. Intégration dans une application Spring Boot
Créez ou utilisez une application Spring Boot puis ajoutez les dépendances nécessaires.

## 4. Dépendances Maven

Ajoutez le Starter, puis les modules correspondant aux canaux que vous utilisez.

:::note
Les coordonnées ci-dessous (`groupId`, version) sont indicatives. Remplacez-les par celles de votre dépôt Maven interne.
:::

```xml
<!-- Starter Spring Boot -->
<dependency>
    <groupId>com.pulse.toolbox.notification</groupId>
    <artifactId>TOOLBOX-NOTIFICATION-STARTER</artifactId>
    <version>1.0.0-SNAPSHOT</version>
</dependency>

<!-- Canal Email -->
<dependency>
    <groupId>com.pulse.toolbox.notification</groupId>
    <artifactId>TOOLBOX-NOTIFICATION-EMAIL</artifactId>
    <version>1.0.0-SNAPSHOT</version>
</dependency>

<!-- Canal SMS -->
<dependency>
    <groupId>com.pulse.toolbox.notification</groupId>
    <artifactId>TOOLBOX-NOTIFICATION-SMS</artifactId>
    <version>1.0.0-SNAPSHOT</version>
</dependency>
```

Ne gardez que les modules utiles. Si le module d'un canal est absent et que vous envoyez une notification sur ce canal, aucun fournisseur ne sera trouvé et l'envoi échouera.

## 5. Intégration Spring Boot

Le Starter fournit l'auto-configuration : il n'y a aucune annotation à ajouter. Une fois les dépendances présentes et la configuration renseignée, `NotificationService` est disponible en injection :

```java
import com.pulse.toolbox.notification.core.service.NotificationService;
import org.springframework.stereotype.Service;

@Service
public class WelcomeService {

    private final NotificationService notificationService;

    public WelcomeService(NotificationService notificationService) {
        this.notificationService = notificationService;
    }
}
```


## 6 Gestion des secrets

Ne placez jamais de mots de passe ni de clés API en clair dans le dépôt. Les exemples ci-dessus utilisent des variables d'environnement (`${SMTP_USER}`, `${SMTP_PASSWORD}`, `${SMS_API_KEY}`) que Spring résout au démarrage :

```bash
export SMTP_USER=notifications@exemple.com
export SMTP_PASSWORD=mot-de-passe-application
export SMS_API_KEY=votre-cle-api
```

En production, préférez le mécanisme de secrets de votre plateforme (Kubernetes Secrets, coffre-fort, variables du pipeline CI/CD).

:::warning
Ne versionnez jamais un fichier contenant des identifiants réels. Ajoutez-le à votre `.gitignore`.
:::
