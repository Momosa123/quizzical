# Guide de Migration vers Next.js et TypeScript

## Vue d'ensemble
Ce document sert de feuille de route pour migrer votre projet Quizzical de React vers Next.js avec TypeScript et Tailwind CSS. Suivez ces étapes progressivement pour une transition en douceur.

## Table des matières
- [Étape 1: Préparation et sauvegarde](#étape-1-préparation-et-sauvegarde)
- [Étape 2: Installation de Next.js](#étape-2-installation-de-nextjs)
- [Étape 3: Ajout de TypeScript](#étape-3-ajout-de-typescript)
- [Étape 4: Installation de Tailwind CSS](#étape-4-installation-de-tailwind-css)
- [Étape 5: Restructuration du projet](#étape-5-restructuration-du-projet)
- [Étape 6: Migration des fonctionnalités](#étape-6-migration-des-fonctionnalités)
- [Étape 7: Conversion progressive à TypeScript](#étape-7-conversion-progressive-à-typescript)
- [Étape 8: Tests et déploiement](#étape-8-tests-et-déploiement)
- [Ressources utiles](#ressources-utiles)
- [Checklist de migration](#checklist-de-migration)

## Étape 1: Préparation et sauvegarde

### Sauvegarde du projet
```bash
# Option 1: Créer une nouvelle branche Git
git checkout -b react-version

# Option 2: Copier le projet
cp -r quizzical quizzical-backup
```

### Documentation de la structure actuelle
- Listez les composants principaux et leurs relations
- Documentez le flux de données et la gestion d'état
- Identifiez les dépendances externes importantes

## Étape 2: Installation de Next.js

### Installation des dépendances
```bash
npm install next@latest
```

### Mise à jour du package.json
Remplacez les scripts existants par:
```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint"
}
```

## Étape 3: Ajout de TypeScript

### Installation des dépendances TypeScript
```bash
npm install --save-dev typescript @types/react @types/node @types/react-dom
```

### Configuration de TypeScript
Créez un fichier `tsconfig.json` à la racine (vide pour l'instant, Next.js le configurera au premier démarrage):
```bash
touch tsconfig.json
```

Lancez le serveur de développement pour générer la configuration automatiquement:
```bash
npm run dev
```

## Étape 4: Installation de Tailwind CSS

### Installation des dépendances
```bash
npm install -D tailwindcss postcss autoprefixer
```

### Initialisation de Tailwind CSS
```bash
npx tailwindcss init -p
```

### Configuration de Tailwind CSS
Créez ou modifiez le fichier `tailwind.config.js`:
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Configuration des styles globaux
Dans votre fichier `app/globals.css`, ajoutez les directives Tailwind:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Migration des styles CSS existants
1. Identifiez les classes CSS personnalisées
2. Créez des classes utilitaires personnalisées dans `tailwind.config.js`:
```js
module.exports = {
  theme: {
    extend: {
      colors: {
        'primary': '#your-color',
      },
      spacing: {
        'custom': 'your-value',
      },
    },
  },
}
```

3. Utilisez les classes Tailwind dans vos composants:
```tsx
// Avant
<div className="start-container">
  <h1 className="start-title">Quizzical</h1>
</div>

// Après
<div className="container mx-auto px-4">
  <h1 className="text-4xl font-bold text-center">Quizzical</h1>
</div>
```

## Étape 5: Restructuration du projet

### Création de la structure de dossiers Next.js
```bash
mkdir -p pages components styles public
```

### Organisation recommandée
```
quizzical/
├── components/       # Composants réutilisables
│   ├── Answer.tsx    # Composant de réponse migré
│   ├── Quizz.tsx     # Composant de quiz migré
│   └── Start.tsx     # Composant de démarrage migré
├── pages/            # Pages et routes Next.js
│   ├── _app.tsx      # Composant racine de l'application
│   ├── _document.tsx # Personnalisation du document HTML
│   ├── index.tsx     # Page d'accueil (anciennement Start.js)
│   └── quiz.tsx      # Page de quiz
├── public/           # Fichiers statiques
│   ├── blob-scene-haikei.png
│   └── blob.svg
├── styles/           # Fichiers CSS
│   ├── globals.css   # Styles globaux
│   └── Home.module.css # Styles spécifiques aux composants
├── types/            # Définitions de types TypeScript
│   └── index.ts      # Types partagés
├── utils/            # Fonctions utilitaires
│   └── api.ts        # Fonctions d'appel API
├── .gitignore
├── next.config.js    # Configuration Next.js
├── package.json
├── README.md
└── tsconfig.json
```

## Étape 6: Migration des fonctionnalités

### Création du composant racine (_app.tsx)
```tsx
// pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
```

### Migration de la page d'accueil
Convertir `Start.js` en `pages/index.tsx`

### Adaptation du routage
Remplacer la navigation par le composant Link de Next.js:
```tsx
import Link from 'next/link';

// Au lieu de <a href="...">
<Link href="/quiz">
  <a>Commencer le quiz</a>
</Link>
```

### Gestion des images
Utiliser le composant Image de Next.js:
```tsx
import Image from 'next/image';

// Au lieu de <img src="...">
<Image 
  src="/blob.svg" 
  alt="Description" 
  width={500} 
  height={300} 
/>
```

### Chargement des données
Utiliser les fonctions de données Next.js:
```tsx
// pages/quiz.tsx
export async function getServerSideProps() {
  // Récupérer les données du quiz
  const res = await fetch('https://api.example.com/quiz');
  const quizData = await res.json();
  
  return {
    props: {
      quizData,
    },
  };
}
```

## Étape 7: Conversion progressive à TypeScript

### Définition des interfaces principales
```tsx
// types/index.ts
export interface QuizQuestion {
  id: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface Answer {
  id: string;
  text: string;
  isCorrect: boolean;
  isSelected: boolean;
}

export interface QuizState {
  questions: QuizQuestion[];
  isLoading: boolean;
  error: string | null;
}
```

### Migration d'un composant simple (exemple)
```tsx
// components/Answer.tsx
import React from 'react';
import styles from '../styles/Answer.module.css';

interface AnswerProps {
  id: string;
  text: string;
  isSelected: boolean;
  isCorrect: boolean;
  isChecked: boolean;
  handleClick: (id: string) => void;
}

const Answer: React.FC<AnswerProps> = ({ 
  id, 
  text, 
  isSelected, 
  isCorrect, 
  isChecked, 
  handleClick 
}) => {
  // Logique du composant
  
  return (
    <button 
      className={`${styles.answer} ${isSelected ? styles.selected : ''}`}
      onClick={() => handleClick(id)}
    >
      {text}
    </button>
  );
};

export default Answer;
```

### Utilisation des hooks typés
```tsx
// Exemple avec useState
const [questions, setQuestions] = useState<QuizQuestion[]>([]);

// Exemple avec useReducer
type Action = 
  | { type: 'FETCH_START' }
  | { type: 'FETCH_SUCCESS', payload: QuizQuestion[] }
  | { type: 'FETCH_ERROR', payload: string };

const reducer = (state: QuizState, action: Action): QuizState => {
  // Logique du reducer
};
```

## Étape 8: Tests et déploiement

### Tests locaux
```bash
npm run dev     # Démarrer le serveur de développement
npm run build   # Vérifier que la build fonctionne
npm run lint    # Vérifier les erreurs de linting
```

### Configuration du déploiement
Mettre à jour la configuration pour GitHub Pages ou autre plateforme:

Pour GitHub Pages, créez un fichier `next.config.js`:
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/quizzical',
  assetPrefix: '/quizzical/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
```

### Script de déploiement
Mettre à jour les scripts de déploiement dans `package.json`:
```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "export": "next build && next export",
  "deploy": "npm run export && gh-pages -d out"
}
```

## Ressources utiles

### Documentation officielle
- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation TypeScript](https://www.typescriptlang.org/docs/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

### Tutoriels et exemples
- [Exemples Next.js avec TypeScript](https://github.com/vercel/next.js/tree/canary/examples/with-typescript)
- [Migration de Create React App vers Next.js](https://nextjs.org/docs/migrating/from-create-react-app)

### Outils
- [ts-migrate](https://github.com/airbnb/ts-migrate) - Outil d'aide à la migration vers TypeScript
- [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint) - Linting pour TypeScript

## Checklist de migration

### Préparation
- [ ] Sauvegarde du projet créée
- [ ] Structure actuelle documentée
- [ ] Fonctionnalités principales identifiées

### Installation
- [ ] Next.js installé
- [ ] TypeScript installé
- [ ] Tailwind CSS installé et configuré
- [ ] package.json mis à jour
- [ ] tsconfig.json généré

### Structure
- [ ] Dossier `pages` créé
- [ ] Dossier `components` créé
- [ ] Dossier `public` organisé
- [ ] Dossier `styles` créé
- [ ] Configuration Tailwind créée

### Migration des composants
- [ ] _app.tsx créé
- [ ] index.tsx (page d'accueil) migré
- [ ] Composant Answer migré
- [ ] Composant Quizz migré
- [ ] Composant Start migré
- [ ] Styles CSS convertis en classes Tailwind

### TypeScript
- [ ] Interfaces principales définies
- [ ] Props typées pour tous les composants
- [ ] États typés (useState, useReducer)
- [ ] Fonctions typées

### Fonctionnalités
- [ ] Routage adapté à Next.js
- [ ] Gestion des images adaptée
- [ ] Chargement des données adapté
- [ ] Styles CSS migrés

### Finalisation
- [ ] Tests locaux réussis
- [ ] Build fonctionnelle
- [ ] Configuration de déploiement mise à jour
- [ ] Déploiement réussi

---

**Note**: Adaptez ce guide selon les spécificités de votre projet. La migration peut être effectuée progressivement, en commençant par les composants les plus simples et en avançant vers les plus complexes. 