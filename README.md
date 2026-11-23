# Le Pouls du Monde — prototype web

Prototype React/Vite responsive pour un observatoire citoyen, une académie et un espace de travail consacré aux enjeux mondiaux avec un angle Afrique de l'Ouest.

## Démarrer
1. Installer Node.js 20+.
2. Dans ce dossier : `npm install`
3. Lancer : `npm run dev`
4. Construire : `npm run build`

## Fonctionnalités présentes
- Accueil éditorial, globe 3D Three.js, bandeau de tendances, cartes d'articles.
- Graphique Recharts et carte régionale interactive de démonstration.
- Académie avec six cours et progression locale simulée.
- Outils de rédaction (modèles), débats, actions citoyennes, agenda et newsletter de démonstration.
- Recherche, français/anglais (interface prototype), mode clair/sombre, responsive mobile.
- Pages/mentions légales en fenêtres de démonstration, robots.txt, sitemap.xml, ads.txt à compléter.

## À savoir avant une mise en production
Ce livrable est un **prototype front-end**, pas encore un service public opérationnel. Les comptes, la base de données, les certificats vérifiables, le forum, la modération, les pétitions, le mentorat, le calendrier administrable, l'envoi de newsletter, l'export PDF réel, le CMS éditorial et la synchronisation des favoris nécessitent un backend et des services configurés.

Architecture recommandée :
- Supabase (Auth + PostgreSQL + Storage + Row Level Security) ou PostgreSQL/API dédiée.
- CMS : Directus ou Strapi pour articles, cours, ressources et événements.
- Stockage médias/CDN et vidéos adaptatives.
- Génération PDF côté serveur ou navigateur (avec modèles contrôlés).
- Modération humaine, signalement, anti-spam et sauvegardes.
- RGPD : CMP/consentement, registre des traitements, politique complète et procédure d'exercice des droits.
- AdSense : remplacer le placeholder de `public/ads.txt`, intégrer les balises publicitaires uniquement après approbation et consentement requis.
- Remplacer `example.org`, les images externes et les données de démonstration par des contenus licenciés et sourcés.

Les données de graphique et certains textes d'actualité sont explicitement des exemples éditoriaux, non des faits d'actualité vérifiés. Ne pas les publier comme données réelles sans validation et sources.
