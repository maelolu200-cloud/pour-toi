---
name: "sourcing-createurs-insta"
description: "Trouve sur Instagram des créatrices FR de moins de 30k avec OnlyFans/MYM (ou Reveal, Patreon…), qui montrent leur visage, sans agence et pas porno, par effet boule de neige via les « comptes similaires » d'Instagram, et les liste dans un Google Sheet (plateforme, redirection bonne/mauvaise). Rythme visé 100 créatrices en 2 h. À utiliser dès que Maël parle de trouver des modèles, des créatrices, des prospects OFM, de sourcing Insta ou de remplir sa liste de DM."
---

# Sourcing créatrices Instagram

## Pourquoi ce skill existe

Maël veut passer ses journées à envoyer des DM, pas à chercher qui DM. Ce skill fait la recherche à sa place : il part de créatrices indépendantes, suit l'effet boule de neige, garde uniquement les **créatrices indépendantes** qui correspondent à sa cible, et livre la liste dans un Google Sheet.

Une créatrice qui a déjà une agence ne sert à rien à Maël : c'est un DM perdu.

**Ce skill ne fait que chercher et lister.** Il n'envoie jamais de message, ne suit personne, ne like rien. Maël fait les DM lui-même.

## Objectif de rythme : 100 en 2 h

L'ancienne version sortait ~100 créatrices en 5 h. La cible est **100 en 2 h, soit ~50/h**. Avec ~1 profil gardé sur 3, ça veut dire lire **~150 profils/h, donc ~25 s par profil** en moyenne. Chaque seconde perdue sur un profil qui sera écarté coûte cher. D'où les règles de vitesse ci-dessous : elles comptent autant que les critères de la cible.

Points de contrôle (dis-les à Maël dans le compte rendu) :

| Temps écoulé | Attendu |
|---|---|
| 30 min | ~25 |
| 1 h | ~50 |
| 1 h 30 | ~75 |

En retard de plus de 10 à un point de contrôle → change de point de départ (voir « Coins épuisés ») au lieu de continuer au même rythme.

## Compte utilisé

- Toutes les visites Instagram passent par le **compte secondaire** de Maël, connecté dans le navigateur intégré (built-in browser). Maël accepte qu'il se fasse bloquer.
- Si Instagram affiche « Connectez-vous pour continuer », demande à Maël de se reconnecter lui-même (Ctrl+Shift+B), puis reprends où tu t'étais arrêté. Ne tape jamais de mot de passe.
- Reste gratuit : pas d'Apify sauf si Maël le demande explicitement.

## Ce qu'il ne faut PAS faire

- **Pas d'appels à l'API interne d'Instagram** (`/api/v1/...`) : 429 immédiat. Lis les profils en naviguant sur la page.
- **Pas de recherche Google en boucle** : captcha tout de suite, et on ne contourne jamais un captcha.
- Ne jamais écrire dans la boîte DM de Maël.

## La cible (gardée seulement si tout est vrai)

1. **Moins de 30 000 abonnés.**
2. **Plateforme privée** : OnlyFans, MYM, Reveal, Patreon… en bio, sur une page de liens, ou signalée clairement. Un lien seulement « en story à la une » est accepté avec le statut « À vérifier ».
3. **Française / francophone FR-BE.**
4. **Pas de porno** : écarte les actrices X (« actrice », AVN, Dorcel, « TDS », « vidéos 🌶️ fait maison », « hot wife/libertine » explicite), les studios (jacquieetmichelelite…).
5. **Sans agence** (section suivante). Le critère le plus important.
6. **Visage visible** (section « Vérifier le visage »). Une créatrice sans visage ne sert à rien à Maël, au même titre qu'une créatrice en agence.

Écarte aussi : comptes de plus de 30k, marques, pages de fans/repost, studios, photographes, hommes, comptes privés, **profils générés par IA** (souvent écrit en bio). Si un profil laisse penser à une personne mineure, écarte-le sans le noter.

## Vérifier le visage

Maël veut des créatrices **qui montrent leur tête**. Les comptes « faceless » (visage caché, coupé, flouté) sont nombreux dans ce milieu et Instagram les regroupe entre eux : si on ne filtre pas, la boule de neige ne ramène presque plus que ça.

- Regarde la **capture d'écran** prise juste après le chargement du profil (voir « Règles de vitesse », règle 2) : photo de profil + premiers posts visibles.
- **Visage = Oui** si le visage est net et reconnaissable sur la photo de profil **ou** sur au moins un des premiers posts visibles.
- **Écarte** si partout : visage caché (main, téléphone, emoji, autocollant), flouté, masqué, coupé au niveau du nez ou du menton, de dos, corps seul, ou photo de profil qui n'est pas elle (logo, dessin, paysage, IA).
- **Écarte sans capture** si la bio dit « faceless », « sans visage », « no face », « 🙈 visage », « je ne montre pas mon visage ».
- Doute (photo trop petite, pas de post visible) : garde avec Visage « À vérifier » et Statut « À vérifier ». Ne rouvre pas le profil pour ça.

## Détecter une créatrice qui a déjà une agence

Les agences font tourner des dizaines de comptes. Signes (deux ou plus → écarte ; en cas de doute, écarte) :

1. **Profil « tunnel »** : suit moins de ~30 comptes + bio « regarde ma story / ma bulle / oui j'en ai un ⬇️ » + peu de posts. C'est le signe le plus fréquent.
2. **Ferme de comptes** : plusieurs profils quasi identiques (même bio type « la plus fraîche », « ta blonde préférée », ~13 suivis, catégorie « Creator ») qui **se suggèrent tous entre eux** et sont « suivis par » le même compte. Exemples repérés : lola.ftn8, lolaa.ple, camille.arau, perrine.dmf, camilledlcroix, lou_ann.grn, ariiaguillard.08.
3. **Multi-comptes** : même prénom ou racine sur plusieurs pseudos. Exemples confirmés en agence : tulipe.off / lapetitetulip / labelletulipee ; julialianeeee / juliaa.amour ; ambre.reelss / mme_ambree ; leya.cirri / riccileya (même nom inversé). Aussi : « compte pv : @… » partagé entre deux profils, « nouveau compte, les autres sont des fakes ».
4. **Voisinage agence** : si les « comptes similaires » d'un profil contiennent **2 comptes ou plus de la liste noire**, considère ce profil comme un signe d'agence déjà coché. Instagram regroupe les comptes d'une même ferme.
5. Un simple **compte de secours** (« backup », « ancien compte supprimé à 18k ») seul n'est pas éliminatoire : garde avec une note.

### Liste noire (agences confirmées par Maël)

Ne jamais les garder, ne jamais les utiliser comme point de départ (leurs « similaires » sont surtout d'autres comptes d'agence) :

- luna209345, angeletabrune, ambre.houblon, maeva_littlee, anna.strlgg (+ variantes, ex. nana.strlg)
- nela_snakelaao, julialianeeee, juliaa.amour, ambre.reelss, mme_ambree
- tablotmadamee, gabby_svcret, leya.cirri, riccileya, naya_oraa
- elenamimss, steffy.bloom, ameliertx, mia_xxoff

Quand Maël signale d'autres comptes en agence, propose de les ajouter ici.

## Règles de vitesse

Ces règles existent parce que le temps part surtout dans des profils ouverts pour rien et dans des allers-retours du navigateur.

1. **Liste « déjà vus » avant tout.** Au démarrage, cherche dans Google Drive le dernier fichier `Prospects OFM (à jour N)` et lis-le : ces pseudos sont déjà traités. Tiens ensuite une liste de tous les pseudos vus dans la session (gardés **et** écartés). Avant d'ouvrir un profil, vérifie qu'il n'est ni déjà vu, ni en liste noire. Un profil rouvert, c'est ~25 s perdues.
2. **Une seule lecture par profil.** Sur chaque profil : `navigate`, puis **une capture d'écran** (pour le visage, avant que le panneau des similaires ne pousse la grille vers le bas), puis **un seul appel `javascript_tool`** avec le script de `scripts/lire_profil.js`. Le script attend le chargement tout seul (pas de pause fixe de 2,5 s), lit le header, ouvre les « comptes similaires » et renvoie tout d'un coup. Enchaîne navigate + capture + script pour 10-12 profils dans un même `browser_batch`. Si le script renvoie une liste de similaires vide ou incohérente 2 fois de suite, repasse à l'ancienne méthode (clic sur `svg[aria-label="Comptes similaires"]` puis lecture) pour la suite.
3. **Tri éclair sur le header, avant tout le reste.** Écarte tout de suite, sans aller plus loin : >30k, compte privé, pas de lien ni de mot-clé plateforme en bio (OF, MYM, Reveal, Patreon, 🔞, « exclu », « contenu »…), signe tunnel évident, homme, marque, **bio « faceless / sans visage »**, **aucun visage sur la capture**. Pas de Linktree, pas de deuxième regard.
4. **Pages de liens en fin de lot, hors Instagram.** Ne vérifie les Linktree / beacons / neocities que pour les profils qui ont passé le tri, à la fin de chaque lot. Utilise `WebFetch` (il ne passe pas par le compte Insta et ne ralentit pas le navigateur). Si WebFetch ne lit pas la page, mets « À vérifier » et passe : ne l'ouvre pas dans le navigateur.
5. **File d'attente par rendement.** Garde les points de départ dans une file. Un profil dont les similaires ont donné 3 gardées ou plus passe en tête ; un profil dont les similaires n'ont rien donné n'est plus exploré.

## Déroulé

### 1. Points de départ
- Pseudos donnés par Maël (créatrices indépendantes déjà contactées). Sinon, demande-en 5 à 10.
- **Uniquement des créatrices avec visage.** Si un pseudo de départ est faceless, ne l'explore pas et dis-le à Maël : ses « similaires » seront faceless aussi.
- Les listes d'abonnements (« suivi(e)s ») rapportent peu : les créatrices suivent surtout leurs amis, des strip-teaseuses ou des comptes musique/tatouage. **N'utilise les abonnements qu'en dernier recours.**

### 2. Effet boule de neige : les « comptes similaires »
- Sur le profil d'une créatrice gardée, les « comptes similaires » proposent ~8-10 profils proches. C'est bien plus ciblé que les abonnements.
- Chaque créatrice gardée **avec Visage = Oui** devient un nouveau point de départ (placée dans la file selon son rendement). Une créatrice gardée avec Visage « À vérifier » n'en devient pas un.
- Si les « similaires » reviennent vides plusieurs fois de suite, c'est un début de limitation : fais une pause de 2 min, puis reprends à un rythme plus lent.

### 3. Coins épuisés
Un coin est épuisé quand **2 lots de suite** donnent moins de 3 gardées (surtout des tunnels, des >30k, des faceless, des modèles « artistiques » sans plateforme). Un lot à plus de la moitié faceless = coin faceless : change tout de suite. Change alors de point de départ : prends le meilleur de la file, ou demande 3 nouveaux pseudos à Maël. Ne t'acharne pas.

### 4. Redirection
- Sur la page de liens, compte les boutons.
- **5 boutons ou plus → Redirection « MAUVAISE »** ; lien direct ou page courte → « Bonne ».
- Page avec avertissement 18+ : ne clique pas « j'ai plus de 18 ans », note « À vérifier ».

### 5. Leaks
- **Ne pas chercher les leaks** : Maël le fait lui-même.

### 6. Google Sheet
- Google Drive `create_file` en CSV (`contentMimeType: text/csv`), titre `Prospects OFM (à jour N)`.
- Le connecteur ne sait pas modifier un Sheet existant : chaque mise à jour = un nouveau fichier qui reprend **toute** la liste. Dis à Maël lequel est le bon.
- Colonnes : `Pseudo | Lien profil | Abonnés | Plateforme | Lien plateforme | Redirection | Visage | Trouvée via | Statut | Notes`. Visage = « Oui » ou « À vérifier ». Mets les « Oui » en premier.
- Livre un Sheet toutes les **~25 nouvelles créatrices** (au lieu de 15-20 : moins d'interruptions, Maël a quand même de quoi DM en parallèle).

## Compte rendu (format TDAH, court)

```
✅ [N] créatrices dans le Sheet → [lien]
⏱️ [X] min écoulées — rythme [Y]/h (objectif 50/h)
🚫 écartées : [A] agence/tunnel, [B] >30k, [C] porno, [D] déjà vues, [E] sans visage
⚠️ [seulement si besoin]
👉 Prochaine action : …
```

Sois honnête sur le rythme : si tu es sous 50/h, dis-le et dis ce que tu changes.
