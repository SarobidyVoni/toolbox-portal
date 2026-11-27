---
id: reading-results
title: Reading results
---

### 4.7 Lecture des résultats

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