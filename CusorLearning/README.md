# React Router Project

A modern React application with React Router, featuring multiple pages and reusable components.

## Features

- **Pages**: Home, About, Services, Portfolio, Contact
- **Common Components**: Header and Footer (shared across all pages)
- **Home Page Components**: Carousel Slider, Client Component, Product Component
- **About Page Components**: Client Component, Certification Component

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the Project

Start the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── common/
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── home/
│   │   ├── Carousel.jsx
│   │   ├── Carousel.css
│   │   ├── Client.jsx
│   │   ├── Client.css
│   │   ├── Product.jsx
│   │   └── Product.css
│   └── about/
│       ├── Client.jsx
│       ├── Client.css
│       ├── Certification.jsx
│       └── Certification.css
├── pages/
│   ├── Home.jsx
│   ├── Home.css
│   ├── About.jsx
│   ├── About.css
│   ├── Services.jsx
│   ├── Services.css
│   ├── Portfolio.jsx
│   ├── Portfolio.css
│   ├── Contact.jsx
│   └── Contact.css
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## Technologies Used

- React 18
- React Router DOM 6
- Vite
- CSS3
