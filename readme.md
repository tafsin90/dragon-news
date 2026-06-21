# Dragoon News

Dragoon News is a responsive front-end web application built with modern technologies to deliver real-time news articles across multiple categories. The app provides a clean and engaging reading experience, complete with user authentication, category navigation, and detailed article views.

## Technologies Used

### Frontend

- **Next.js** — React framework for server-side rendering and routing
- **Tailwind CSS** — Utility-first CSS framework for styling
- **DaisyUI** — Tailwind CSS component library
- **react-fast-marquee** — Marquee/ticker animation component
- **react-icons** — Icon library
- **react-hook-form** — Performant form handling and validation
- **date-fns** — Lightweight date formatting utility

### Authentication

- **Better Auth** — Authentication framework (email/password + OAuth)
- **Google OAuth** — Sign-in via Google Cloud Console
- **GitHub OAuth** — Sign-in via GitHub OAuth App

## Features

- Responsive layout for desktop and mobile devices
- Category-based news browsing
- Detailed news pages with full article information
- User authentication with email/password and Google login
- Smooth UI components and interactive elements
- Modern form handling and validation

## API Base URL

The base URL for the news API is:

https://openapi.programming-hero.com/api

## API Endpoints

1. **Get All News Categories**
   - **URL**: `/news/categories`
   - **Full URL**: `https://openapi.programming-hero.com/api/news/categories`
   - **Method**: `GET`
   - **Description**: Retrieves a list of all available news categories.

2. **Get All News in a Category**
   - **URL Format**: `/news/category/{category_id}`
   - **Example**: `https://openapi.programming-hero.com/api/news/category/01`
   - **Method**: `GET`
   - **Description**: Retrieves all news articles for the specified category.
   - **Parameter**:
     - `category_id` (string): The unique ID of the news category.

3. **Get News Detail by ID**
   - **URL Format**: `/news/{news_id}`
   - **Example**: `https://openapi.programming-hero.com/api/news/0282e0e58a5c404fbd15261f11c2ab6a`
   - **Method**: `GET`
   - **Description**: Retrieves detailed information about a specific news article.
   - **Parameter**:
     - `news_id` (string): The unique ID of the news article.

## Getting Started

1. Clone the repo and install dependencies:

```bash
   git clone <repo-url>
   cd dragon-news
   npm install
```

2. Create a `.env.local` file in the root and add the following:

```env
   BETTER_AUTH_SECRET=
   BETTER_AUTH_URL=http://localhost:3000
   MONGO_URI=
   GOOGLE_CLIENT_ID=
   GOOGLE_CLIENT_SECRET=
   GITHUB_CLIENT_ID=
   GITHUB_CLIENT_SECRET=
```

3. Run the development server:

```bash
   npm run dev
```

4. Open the app in your browser at:
```
   http://localhost:3000
```

## Notes

- Authentication is handled using betterAuth and Google Cloud Console integration.
- The application uses a public API from Programming Hero to fetch news content.
