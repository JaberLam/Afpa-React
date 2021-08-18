# Recap de la mise en place du projet

Next.js est un framework React qui permet de générer des sites statiques/générés coté-serveur (Static Site Generation et Server-Side Rendering respectivement) à partir de composants React.
Cette approche permet une optimisation du SEO & des performances.

1. **Initialisation du projet**

Nous avons utilisé l'outil npx pour installer notre projet Next.js
``` npx create-next-app learning-next ```

Nous avons récupéré le template du starter de Next.js pour ensuite générer notre propre projet.

Nous avons ensuite supprimé le boilerplate (le code de base) du fichier **index.js.js** à la racine du dossier **/pages**

2. **Mise en place d'un layout de base.**

Pour mettre un Layout de base, nous avons utilisé la structure des composants web comme React, en générant un template basique dans un dossier **components** et dans un fichier spécifique au layout -> **components/Layout.js**. La syntaxe est la même que pour un composant React, puisque Next.js est un framework React, donc il supporte tous les éléments React __"out-of-the-box"__, c'est à dire par défaut.

Nous utilisons un système de modules CSS pour implémenter du style à nos composants, en prenant soin de conserver une cohérence entre les noms de modules CSS et les noms de composants.

Finalement, pour que le layout soit intégré au site, il a fallu l'ajouter directement autour du point d'entrée **<Component>** du fichier **pages/_app.js** .

3. **Génération d'un Document Web personnalisé.**

Les sites web démarrent toujours par une définition de la page HTML. Pour cela on passe traditionnellement par les balises **<html>,<body> et <head>** dans lesquelles l'on peut spécifier certaines informations.

Ces informations ont trait à la compatibilité du site, mais aussi au référencement du site (plus spécifiquement dans le cas de la balise <head>).

Ces balises sont auto-générées par Next.js et il faut créer un Document Web (donc la page HTML) personnalisé afin d'ajuster ces paramètres.
Pour cela, on va créer un fichier **pages/_document.js** qui contiendra ces balises. Cela nous permettra une plus grand liberté vis-à-vis des paramètres à inclure dans notre page HTML.

4. **Génération de pages supplémentaires.**

Ensuite, nous avons créé des pages supplémentaires à notre site. Avec React, les pages sont séparés par du code. Il faut donc coder une séparation des pages, autrement celle-ci n'est pas stricte. Avec Next.js, le routing se fait sur la base de fichiers, et elle est donc plus facile à visualiser et à réaliser.

**Page Statique basique**

Pour générer une page statique, il suffit de créer un nouveau fichier javascript nommé comme on souhaite nommer la page dans le dossier **/pages**, e.g. **pages/about.js**, et d'y ajouter un composant React.

**Pages Statiques emboitées (nested)**

Pour générer des pages statiques emboîtés (nested static pages), il suffit de créer un dossier représentant le chemin (pour accéder à www.monsite.fr/hello/, on créera un dossier hello, et on y ajoutera les pages auxquelles on peut accéder à partir de la route /hello/), et y ajouter de nouveaux fichiers javascript qui comportent des composants React.

**Comment rendre une page dynamique ?**

Pour rendre une page dynamique (c'est à dire qu'elle comporte des informations récupérées depuis d'autres sites/qui comportent des informations spécifiques à l'utilisateur/la requête), il faudra utiliser plusieurs méthodes. Ces méthodes sont **getStaticProps** ou **getServerSideProps** qui contiendront des appels à nos informations dynamiques sous forme de modules (avec un return contenant les props à intégrer), qu'il faudra ensuite importer dans le composant React de base.

**Qu'en est-il des pages donc le chemin dépend d'informations récupérées depuis le backend/une API**

Pour les pages entièrement dynamiques (typiquement des pages d'un élement singulier/single element) peuvent être au moins inférées à partir de nos appels au backend. D'une manière générale il convient de les définir dans des pages crochetées e.g. **pages/hello/[id]/index.js**. Il faudra aussi définir la méthode de récupération de leur chemin à l'aide d'une méthode **getStaticPaths** si on utilise **getStaticProps**. Pour récupérer les informations nécessaires pour générer l'appel au backend, on utilisera soit le router de next (**useRouter**), soit le context de l'application dans les paramètres de la méthode **getStaticProps/getServerSideProps**

Dans ces pages, le contenu est généralement facile à organiser, il suffira d'inclure leur contenu dynamique dans une template générique d'un élément singulier.

5. **Utiliser la génération de routes API de Next.js**

Next.js permet de générer des routes API à partir d'un backend généré par lui-même, ou bien de fichiers JSON.
Cette méthode de mise en place de backend permet d'éviter le problème de CORS (Cross-Origin Resource Sharing) puisque l'origine est la même pour le front et le back.

//C'est l'objet du cours d'aujourd'hui




