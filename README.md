# ADMIN DASHBOARD
# React/Next.js Frontend Application

## Overview

This project is a responsive web application built using modern front-end technologies as a demonstration of proficiency in React/Next.js development. It features a simple login form, an admin dashboard UI, and a user list display, all while focusing on responsiveness, code quality, and front-end architecture.

## Technical Requirements

* **Frontend Framework:** React (with Vite)
* **State Management:** Context API
* **Styling:** Tailwind CSS
* **Build Tooling:** Vite
* **Version Control:** Git

## Assignment Details

### Login Page

* A simple login form with "Name" and "Email" input fields.
* Upon submission, user data (name and email) is stored in Chrome's Local Storage.
* The Context API is used to access and display the logged-in user's name across the application.
* No backend or API integration is implemented; login behavior is mocked.

### Admin Dashboard UI

* A responsive admin dashboard UI designed to match the provided screenshot.
* Implemented with proper component architecture and a clean layout.
* Styled exclusively using Tailwind CSS.
* Employs grid and flex layouts to ensure responsiveness across various screen sizes.
* Includes a navigation sidebar (as per the design).
* Features dashboard cards or sections to display information.

### User List

* Displays a list of users fetched from a local `users.json` file (mock data).
* For each user, the following information is displayed:
    * Name
    * Email
    * Role
    * Status (Active/Inactive)
* Utilizes a reusable user card or table layout for presenting user data.

### Bonus Task: User Details Modal

* Implements a popup/modal that appears when a user entry in the list is clicked.
* The modal displays the full details of the selected user, sourced from the same `users.json` file.
* Features a smooth transition/animation for showing and hiding the modal.

## Functional Requirements

* **Responsive Design:** The application is fully responsive and adapts seamlessly to different screen sizes.
* **Reusable Components:** The codebase is structured with reusable and modular components to promote maintainability and scalability.
* **Transitions and Animations:** Smooth transitions and animations are incorporated to enhance the user experience.
* **Routing:** Proper routing is implemented to navigate between the login page, dashboard, and user list.
* **Error and Loading States:** Basic handling for potential error states and loading states is implemented where appropriate.

## Setup Instructions

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd <repository-name>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```

    Open your browser and navigate to `http://localhost:3000` (or the port specified in your terminal).


## Approach

This project follows a component-based architecture, breaking down the UI into smaller, reusable units. Tailwind CSS is utilized for all styling, ensuring a consistent and maintainable design system. State management is handled using React's Context API for simplicity in this mock application, allowing for easy access to user information across different components. Routing is implemented to navigate between the different sections of the application. Mock data for the user list is stored in a local JSON file, simulating data fetching. Responsiveness is achieved through Tailwind CSS's utility classes and the strategic use of grid and flex layouts.

## Bonus Points Implemented

* **Popup/Modal:** A user details modal is implemented with a smooth transition effect.

## Deployment

The application has been deployed using [Vercel/Netlify/etc.]. You can view the live demo here: [Deployment Link]

## Evaluation Criteria

This project aims to adhere to the following evaluation criteria:

* **Clean and scalable folder/component structure:** The project is organized with a logical and well-structured file and component hierarchy.
* **Reusable and modular components:** The codebase emphasizes the creation of reusable components to promote efficiency and maintainability.
* **Strict use of Tailwind CSS:** All styling is done using Tailwind CSS utility classes, avoiding external CSS files unless absolutely necessary.
* **Code readability, naming conventions, and maintainability:** The code is written with clear and consistent naming conventions, ensuring readability and ease of maintenance.

## Further Improvements (Potential Future Enhancements)

* Implementation of unit tests.
* Migration to TypeScript for enhanced type safety.
* Performance optimization techniques (e.g., code splitting, lazy loading).
* More advanced error handling and loading state indicators.
* Form validation for the login form.
* More sophisticated dashboard visualizations.
* Features like user filtering and sorting in the user list.

Thank you for reviewing this project!
