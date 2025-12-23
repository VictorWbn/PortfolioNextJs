# Portfolio - Victor Wybon

## Technologies Utilisées

*   **Framework** : [Next.js 15+](https://nextjs.org/) (App Router)
*   **Langage** : TypeScript
*   **Style** : [Tailwind CSS](https://tailwindcss.com/) & [Material UI](https://mui.com/)
*   **Conteneurisation** : Docker & Docker Compose

## 🛠️ Installation et Lancement

### Prérequis

*   Node.js 20+ (si lancement local)
*   Docker & Docker Compose (si lancement conteneurisé)

### Option 1 : Lancement Local (Développement)

1.  Installer les dépendances :
    ```bash
    pnpm i
    ```

2.  Lancer le serveur de développement :
    ```bash
    pnpm dev
    ```

3.  Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Option 2 : Lancement avec Docker (Production)

1.  Construire et lancer le conteneur :
    ```bash
    docker-compose up -d --build
    ```

2.  L'application est accessible sur [http://localhost:3000](http://localhost:3000).

3.  Pour arrêter le conteneur :
    ```bash
    docker-compose down
    ```

## 📂 Structure du Projet

*   `app/` : Code source de l'application (Pages, Composants).
    *   `components/` : Composants réutilisables (Header, Hero, Timeline, Projects, Skills, Footer).
    *   `const/` : Constantes globales (liens, etc.).
*   `public/` : Fichiers statiques (images, CV, icônes).
*   `Dockerfile` : Configuration pour la construction de l'image Docker (Multi-stage build).
*   `docker-compose.yml` : Configuration pour l'orchestration du conteneur.

## 👤 Auteur

**Victor Wybon**
*   Étudiant en BUT Informatique à l'IUT de Lens.
*   Passionné par le développement Fullstack et l'hardware.