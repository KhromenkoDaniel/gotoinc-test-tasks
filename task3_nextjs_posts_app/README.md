# 📦 Task 3 | Next.js Posts App

## 📚 Navigation

- [Project Description](#project-description)
- [Tech Stack](#tech-stack)
- [Features & Functionality](#features-and-functionality)
    - [Login Form (Client & Server-Side)](#login-form-client-and-server-side)
    - [Protected Routes](#protected-routes)
    - [Homepage with Posts](#homepage-with-posts)
    - [Single Post Page](#single-post-page)
    - [Dynamic Metadata Configuration](#dynamic-metadata-configuration)
- [Project Files Overview](#project-files-overview)
- [Instructions to Run the Project](#instructions-to-run-the-project)
- [License](#license)

## Project Description

Create a Next.js application with user login, post viewing, and detailed post pages. This app demonstrates client-side and server-side login functionalities, protected routes, and SEO improvements using dynamic metadata. Posts are fetched from the JSONPlaceholder API.

## Tech Stack

- **Next.js 15**: Server-side rendering and static site generation.
- **React 18**: UI components.
- **TypeScript**: Type safety for JavaScript.
- **Tailwind CSS**: Rapid UI development.
- **Shadcn/ui**: Consistent UI components.
- **Cookies**: Token management.
- **Zod**: Schema validation.
- **React Hook Form**: Form state management.

## Features and Functionality

### Login Form (Client and Server-Side)

- Username/password fields.
- Hardcoded credentials: "admin" / "1234".
- Validates via Next.js API (`/api/login`).
- Uses React Hook Form for form state and validation.
- Stores tokens/sessions in cookies.
- Displays error messages for invalid login.

### Protected Routes

- Middleware for route protection (e.g., `/dashboard`).
- Validates token/session before rendering.
- Redirects unauthenticated users to login.

### Homepage with Posts

- Displays posts fetched from JSONPlaceholder API.
- Server-side data fetch using React Server Components.
- Shows title/short description for each post.
- Navigates to post details page on click.

### Single Post Page

- Dynamic route (`/posts/[id]`).
- Uses `getStaticPaths` and `getStaticProps` for post data.
- Displays full post details (title, description, body).

### Dynamic Metadata Configuration

- SEO enhancement using Metadata API.
- Updates `<title>` and `<meta>` tags based on post information.

## Project Files Overview

- **Components**:
    - **LoginForm**: Handles login.
    - **PostsList**: Displays list of posts.
    - **PostDetails**: Shows selected post details.
- **API**:
    - **/api/login**: Validates credentials.
- **Pages**:
    - **page.tsx**: Homepage with posts.
    - **posts/[id]/page.tsx**: Post details with dynamic metadata.
    - **dashboard/page.tsx**: Protected route.
    - **login/page.tsx**: Login page.
- **Middleware**:
    - **middleware.ts**: Protects routes based on authentication.

## Instructions to Run the Project

1. **Clone the repository**:

   ```bash
   https://github.com/KhromenkoDaniel/gotoinc-test-tasks/tree/master/task3_nextjs_posts_app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`.

4. **Build for production**:

   ```bash
   npm run build
   npm start
   ```

## License

MIT License.

