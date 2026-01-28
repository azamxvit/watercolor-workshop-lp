# 🎨 St. Petersburg Art Course Landing Page

![Status](https://img.shields.io/badge/status-completed-success)
![Tech](https://img.shields.io/badge/stack-HTML5_|_CSS3_|_jQuery_|_Bootstrap_4-orange)
![License](https://img.shields.io/badge/license-MIT-green)

This project is a pixel-perfect, responsive landing page designed for the exclusive watercolor workshop "Saint Petersburg Through the Years" by Vladimir Zarutsky. Built with a focus on semantic HTML and modular CSS architecture, the application provides an immersive presentation of the course curriculum, pricing tiers, and FAQ sections. It features interactive elements such as a real-time currency converter and a dynamic materials list to enhance user engagement and conversion rates across all devices.

## 🚀 Key Features

* **Modular Architecture**: CSS is strictly organized into `variables`, `layout`, `components`, and `sections` to ensure scalability and maintainability.
* **Smart Currency Converter**: A custom jQuery-based logic that instantly converts pricing between **RUB (₽)** and **USD ($)** using data attributes for precision.
* **Interactive UI**: Features a sticky navigation bar, smooth scrolling anchor links, and an expandable accordion for FAQs.
* **Fully Responsive**: Optimized for mobile, tablet, and desktop screens using a hybrid approach of Bootstrap 4 grid and custom Flexbox/Grid layouts.

## 🛠 Tech Stack

* **Core**: Semantic HTML5, CSS3 (Custom Properties / Variables)
* **Framework**: Bootstrap 4.6 (Grid system & Utility classes)
* **Scripting**: jQuery 3.6 (DOM manipulation, Animation, Logic)
* **Typography**: Google Fonts (PT Sans) & Custom Web Fonts (Bernier Distressed)
* **Assets**: SVG Icons, Optimized Images

## ⚙️ Getting Started

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/azamxvit/watercolor-workshop-lp.git](https://github.com/azamxvit/watercolor-workshop-lp.git)
    cd spb-art-course-landing
    ```

2.  **Project Structure**
    The project uses a native technology stack requiring no build process.
    ```text
    project/
    ├── assets/          # Images, Fonts, Icons
    ├── css/             # Modular Styles (main, sections, variables)
    ├── js/              # Interactive Logic (Currency converter, Scroll)
    └── index.html       # Main Entry Point
    ```

3.  **Run the project**
    Simply open `index.html` in your preferred browser or use Live Server in VS Code.

## 🏗 Architecture & Decisions

* **CSS Separation of Concerns**: Instead of a monolithic CSS file, styles are split:
    * `variables.css`: Global design tokens (colors, fonts).
    * `components.css`: Reusable UI elements (buttons, cards).
    * `sections.css`: Specific layout for Hero, Tariffs, etc.
* **Data-Driven JS Logic**: The currency converter relies on `data-rub` attributes to store the base integer value of prices. This ensures accurate calculations regardless of the localized formatting displayed to the user.
* **Visual Fidelity**: Utilizes CSS Grid for the intricate 3x3 gallery layout within tariff cards to match the original design specifications perfectly.
