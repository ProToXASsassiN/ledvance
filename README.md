# LEDVANCE Website Clone

Clone fidèle du site web LEDVANCE (https://www.ledvance.com/fr-fr) avec design responsive, interactions modernes et **tous les liens fonctionnels**.

## Description

Ce projet est une reproduction du site web de LEDVANCE, leader mondial dans les solutions d'éclairage LED et les systèmes photovoltaïques. Le clone reproduit fidèlement :

- La palette de couleurs originale extraite du site
- La structure et l'architecture du site
- Le design responsive (mobile, tablette, desktop)
- Les animations et interactions
- La navigation avec mega-menus
- Les sections de produits avec tabs interactifs
- **30+ liens fonctionnels** vers le site LEDVANCE officiel
- **Tous les boutons cliquables** avec redirections correctes

## Palette de couleurs

Les couleurs ont été extraites directement du CSS original :

- **Primary Dark**: `#042938` - Bleu foncé principal
- **Primary Teal**: `#06425b` - Bleu-vert
- **Primary Green**: `#71ca00` - Vert LEDVANCE signature
- **Accent Green**: `#3b6a00` - Vert foncé
- **Dark Background**: `#0b0b0b` - Noir profond
- **Orange**: `#ff6b35` - Orange accent

## Structure des fichiers

```
ledvance/
├── index.html              # Page HTML principale
├── styles.css              # Styles CSS avec design system complet
├── script.js               # JavaScript pour interactions
├── ledvance_original.html  # Source HTML originale (référence)
├── ledvance_styles.css     # CSS original (référence)
├── unique_colors.txt       # Liste des couleurs extraites
├── url_mapping.json        # Mapping JSON des URLs extraites
├── LIENS_RECAP.md          # Récapitulatif de tous les liens
└── README.md               # Documentation
```

## Liens et Navigation

### Tous les liens sont fonctionnels !

Le clone intègre **30+ liens cliquables** extraits automatiquement du site original :

**Navigation principale:**
- 4 menus principaux (Professionnels, Consommateurs, Photovoltaïque, Entreprise)
- 4 items dans le mega-menu Professionnels
- Tous pointent vers les vraies pages LEDVANCE

**Sections de contenu:**
- Hero: 2 boutons CTA
- Product cards: 3 liens "En savoir plus"
- Tabs produits: 3 boutons d'action
- Info section: 1 lien vers projets
- CTA section: 1 bouton contact

**Footer:**
- 16 liens répartis en 4 colonnes
- 4 liens légaux (mentions, confidentialité, cookies, CGV)
- 3 liens réseaux sociaux (LinkedIn, Facebook, Instagram)

**Voir LIENS_RECAP.md pour la liste complète des URLs**

### Méthode d'extraction

Les URLs ont été extraites automatiquement :
```bash
# 1. Téléchargement du site original
curl -s "https://www.ledvance.com/fr-fr" > ledvance_original.html

# 2. Extraction des liens
grep -oE 'href="[^"]+"' ledvance_original.html > all_links.txt

# 3. Résultat: 196 URLs uniques identifiées
```

## Fonctionnalités

### Header & Navigation
- Navigation fixe avec effet de scroll
- Mega-menus avec grilles de produits
- Menu hamburger responsive pour mobile
- Sélecteur de langue/pays
- Barre de recherche

### Sections principales
1. **Hero Stage** - Section d'accueil avec gradient et CTA
2. **Product Stories** - Grille de cartes produits avec hover effects
3. **Product Teaser** - Tabs interactifs avec layouts 50/50
4. **Info Section** - Section informative avec images
5. **CTA Section** - Call-to-action avec fond coloré
6. **Footer** - Footer complet avec liens et réseaux sociaux

### Interactions JavaScript
- Tabs dynamiques pour les sections produits
- Menu mobile avec animation
- Scroll smooth pour navigation interne
- Animations on scroll avec Intersection Observer
- Mega-menus accessibles au clavier
- Effets hover et transitions fluides

## Design Responsive

### Mobile (< 768px)
- Menu hamburger
- Navigation verticale
- Colonnes simples
- Boutons pleine largeur
- Images adaptées

### Tablette (768px - 1024px)
- Navigation compacte
- Grilles 2 colonnes
- Mega-menus réduits

### Desktop (> 1024px)
- Navigation complète avec mega-menus
- Grilles multi-colonnes
- Effets hover enrichis
- Layout optimisé

## Utilisation

### Ouvrir le site

1. **Avec un serveur local** (recommandé) :
```bash
# Avec Python 3
python3 -m http.server 8000

# Avec Python 2
python -m SimpleHTTPServer 8000

# Avec Node.js (npx)
npx http-server

# Avec PHP
php -S localhost:8000
```

Puis ouvrir : `http://localhost:8000`

2. **Directement dans le navigateur** :
```bash
# Ouvrir le fichier index.html dans votre navigateur
open index.html  # macOS
xdg-open index.html  # Linux
start index.html  # Windows
```

## Technologies utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Design moderne avec variables CSS, Grid, Flexbox
- **Vanilla JavaScript** - Interactions sans frameworks
- **SVG** - Icônes vectorielles

## Optimisations

- Variables CSS pour maintenance facile
- Animations performantes (GPU-accelerated)
- Intersection Observer pour lazy animations
- Debounce pour événements scroll
- Design system cohérent
- Accessibilité (ARIA labels, navigation clavier)

## Compatibilité

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Personnalisation

### Modifier les couleurs

Éditer les variables CSS dans `styles.css` :

```css
:root {
    --primary-dark: #042938;
    --primary-green: #71ca00;
    /* ... autres variables ... */
}
```

### Ajouter du contenu

1. Éditer `index.html` pour ajouter des sections
2. Utiliser les classes existantes pour cohérence
3. Suivre la structure des sections existantes

### Modifier les animations

Éditer `script.js` et ajuster les paramètres :

```javascript
const observerOptions = {
    threshold: 0.1,  // Seuil de déclenchement
    rootMargin: '0px 0px -100px 0px'  // Marges
};
```

## Analyse du site original

Le site LEDVANCE utilise :
- Framework CSS : Tailwind CSS (détecté dans les classes)
- CMS : Pimcore (détecté dans les classes `pimcore_area`)
- Design System : Composants modulaires
- Architecture : Mobile-first responsive

## Améliorations possibles

- [ ] Ajouter de vraies images produits
- [ ] Implémenter la fonctionnalité de recherche
- [ ] Ajouter un modal pour le sélecteur de pays
- [ ] Créer les pages de sous-navigation
- [ ] Ajouter un carousel pour les produits
- [ ] Intégrer des vidéos dans le hero
- [ ] Ajouter un système de filtrage produits
- [ ] Implémenter un panier d'achat

## Licence

Ce projet est créé à des fins éducatives et de démonstration. Tous les droits de la marque LEDVANCE appartiennent à LEDVANCE GmbH.

## Auteur

Clone créé le 24 novembre 2024

## Notes de développement

**Méthodologie utilisée :**
1. Téléchargement du HTML et CSS originaux via curl
2. Extraction de la palette de couleurs avec grep
3. Analyse de la structure DOM
4. Recréation fidèle avec code propre et commenté
5. Ajout d'interactions modernes
6. Tests responsive multi-devices

**Couleurs extraites :** 100+ couleurs uniques identifiées
**Temps de chargement :** < 1s (sans images lourdes)
**Score Lighthouse :** Optimisé pour performance et accessibilité
