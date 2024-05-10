# NC News Front End

## 📝 Overview

This is a front-end React-based project created as part of the [Northcoders](https://northcoders.com/) software development bootcamp. It forms the front-end counterpart to my previously developed back-end project, [NC News API](https://github.com/hellodanielwilliams/nc-news). It is a dynamic web application that consumes the API to present a social news aggregation platform where users can read articles, post comments, and vote on both.

## 💫 Project Features and Technologies

-   **React**: For building the component-based user interface.
-   **React Router**: For handling route navigation, links, parametric endpoints, and search parameters.
-   **Axios**: For handling HTTP requests to the back-end API.
-   **BEM style CSS**: Styled with CSS using the Block Element Modifier methodology for coherent structure, organisation and maintainability.
-   **Vite**: Build tool used for local development sever and bundling for production.
-   **Mobile-first Responsive Design**: Designed for mobile-first, and translated to larger screen sizes.
-   **Deployment**: In production, hosted on Netlify.

## 🛜 [Hosted Version](https://good-news-dw.netlify.app/)

A hosted version of the app is available [here](https://good-news-dw.netlify.app/).

> [!NOTE]  
> The application is connected to a back-end API hosted on the free tier of Render. This means that the server goes to sleep after 15 minutes of inactivity. Therefore, there may be longer initial load times when first visiting while the server spins up. If you get a loading message, please wait a few moments for the site to become fully responsive.

---

## ⚙️ Installation Instructions

Follow these instructions if you want to install and run a local copy of this front-end project.

### Prerequisites

-   Node.js (v21.4.0 or later)

#### 1. Clone this repo

Navigate to your target directory and clone this repo using your preferred method, e.g.:

```bash
git clone https://github.com/hellodanielwilliams/nc-news-front-end
```

Navigate into the directory and open in your preferred editor, e.g.:

```bash
cd nc-news-front-end
code .
```

#### 2. Install dependencies

Install all necessary dependencies by running the following command in the root directory:

```bash
npm install
```

#### 3. Start the local Vite dev server

This project uses Vite for running a local server. You can start it running instantly with the following script:

```bash
npm run dev
```

A link to a localhost will be displayed in the terminal allowing the site to be viewed in a browser on your machine, e.g.

```bash
Local:   http://localhost:5173/
```

#### 4. Build for production

Vite is also used for creating a production-ready build of the app. If you want to deploy your own version of the app, you can use the following script:

```bash
npm run build
```

Vite will create a `./dist` directory in the root. Use this as the deploy path for your chosen platform.
