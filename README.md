# My Personal Portfolio

This is a modern, responsive personal portfolio website designed to showcase my projects, skills, and experience. It features a clean user interface and a functional contact form to allow visitors to get in touch.

## Features

-   **Responsive Design:** Optimized for various screen sizes, from mobile to desktop.
-   **Project Showcase:** Dedicated section to highlight key projects with descriptions.
-   **Skills Section:** Displays technical skills and proficiencies.
-   **Contact Form:** A functional form for visitors to send messages, powered by a custom Node.js backend and MongoDB.

## Technologies Used

### Frontend

-   **React:** A JavaScript library for building user interfaces.
-   **Vite:** A fast build tool for modern web projects.
-   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
-   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
-   **shadcn/ui:** A collection of re-usable components built with Radix UI and Tailwind CSS.

### Backend

-   **Node.js:** A JavaScript runtime built on Chrome's V8 JavaScript engine.
-   **Express.js:** A fast, unopinionated, minimalist web framework for Node.js.
-   **Mongoose:** An elegant MongoDB object modeling for Node.js.
-   **MongoDB:** A NoSQL document database for storing contact messages.

## Getting Started (Local Development)

To run this project locally, follow these steps:

### Prerequisites

-   Node.js (LTS version recommended)
-   npm (Node Package Manager)
-   MongoDB (Community Server installed and running locally)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <YOUR_REPOSITORY_URL>
    cd <YOUR_PROJECT_NAME>
    ```

2.  **Install frontend dependencies:**
    ```bash
    npm install
    ```

3.  **Install backend dependencies:**
    ```bash
    cd backend
    npm install
    cd ..
    ```

### Running the Application

1.  **Start your local MongoDB instance.**
    Ensure your MongoDB server is running. If you installed it as a service, it should start automatically. Otherwise, you might need to run `mongod` from your MongoDB installation's `bin` directory.

2.  **Start the backend server:**
    ```bash
    cd backend
    npm start
    ```
    This will start the backend on `http://localhost:5000`.

3.  **Start the frontend development server:**
    ```bash
    npm run dev
    ```
    This will typically open your portfolio in your browser at `http://localhost:5173` (or another available port).

## Deployment

This project is designed for deployment using modern cloud platforms:

-   **Frontend:** Can be deployed to static hosting services like [Netlify](https://www.netlify.com/) or [Vercel](https://vercel.com/) for free.
-   **Backend:** Can be deployed as a web service to platforms like [Render](https://render.com/) (free tier available).
-   **Database:** A cloud-hosted MongoDB instance, such as [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (free M0 cluster available), is recommended for the live environment.

Refer to the respective platform documentation for detailed deployment instructions.