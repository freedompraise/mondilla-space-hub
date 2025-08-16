
# Mondilla Space Hub

Mondilla Space Hub is a modern SaaS landing page for **Mondilla Connect**, a platform designed to empower remote teams with intelligent workspaces, real-time communication, and powerful project management tools. Built with React, TypeScript, Tailwind CSS, and Framer Motion, this project provides a responsive and visually appealing user interface to showcase the product's features, pricing, and contact information.

## Table of Contents
- [Features](#features)
- [Project Setup Instructions](#project-setup-instructions)
- [Extra Notes](#extra-notes)

## Features
- **Responsive Landing Page**: A fully responsive design optimized for desktop and mobile devices using Tailwind CSS.
- **Interactive Components**:
  - **Navbar**: A navigation bar for easy access to sections like Features, Pricing, and Contact.
  - **Hero Section**: A visually engaging introduction to Mondilla Connect.
  - **Features Section**: Highlights the key functionalities of the SaaS product.
  - **Pricing Section**: Displays pricing plans for potential users.
  - **Contact Section**: Allows users to get in touch with the Mondilla Connect team.
  - **Footer**: Includes the Mondilla logo, social media links, product/company navigation, and copyright information.
- **Smooth Animations**: Utilizes Framer Motion for subtle animations, such as fade-ins and staggered transitions, enhancing the user experience.
- **Dark Mode Support**: Seamlessly switches between light and dark themes with Tailwind CSS classes.
- **Social Media Integration**: Links to social media platforms for user engagement, included in the footer.
- **SEO and Accessibility**: Structured with semantic HTML and Tailwind’s utility classes for better accessibility and styling.

## Project Setup Instructions
Follow these steps to set up and run the Mondilla Space Hub project locally:

### Prerequisites
- **Node.js**: Version 16 or higher. Install via [Node.js](https://nodejs.org/) or [nvm](https://github.com/nvm-sh/nvm).
- **npm**: Comes with Node.js, or use **yarn** as an alternative.
- **Git**: Required to clone the repository.

### Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/freedompraise/mondilla-space-hub.git
   cd mondilla-space-hub
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```
   *or, if using yarn*:
   ```bash
   yarn install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   *or, if using yarn*:
   ```bash
   yarn dev
   ```

4. **Access the Application**:
   - Open your browser and navigate to `http://localhost:5173` (default Vite port, confirm in the console).

5. **Build for Production** (optional):
   ```bash
   npm run build
   ```
   - Preview the production build:
     ```bash
     npm run preview
     ```

6. **Linting** (optional):
   - Run ESLint to check for code quality:
     ```bash
     npm run lint
     ```

### Configuration
- No `.env` file is required based on the provided code, as this is a frontend-only project. If additional environment variables are needed (e.g., for API integrations), create a `.env` file and configure as necessary.

## Extra Notes
- **Technologies Used**:
  - **Frontend**: React, TypeScript, Vite, Tailwind CSS, Framer Motion.
  - **Icons**: Phosphor Icons for React.
  - **Utilities**: `clsx` and `tailwind-merge` for dynamic class management.
  - **Development Tools**: ESLint with Rocketseat config, Prettier with Tailwind CSS plugin, PostCSS, and Autoprefixer.
- **Deployment**:
  - The project is likely deployable to platforms like Vercel or Netlify. For Vercel, use:
    ```bash
    vercel --prod
    ```
    Ensure you have the Vercel CLI installed and logged in.
- **Contributing**:
  - Contributions are welcome! Fork the repository, create a feature branch, and submit a pull request. Ensure code adheres to ESLint rules (`npm run lint`) and follows the project’s style guide.
- **Contactვ
