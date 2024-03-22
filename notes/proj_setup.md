
## Project Set-up

```shell
npx create-next-app@latest nextjs-dashboard --use-pnpm --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example"
Need to install the following packages:
create-next-app@14.1.4
Ok to proceed? (y) y
```


```shell
  pnpm run dev
    Starts the development server.

  pnpm run build
    Builds the app for production.

  pnpm start
    Runs the built app in production mode.

We suggest that you begin by typing:

  cd nextjs-dashboard
  pnpm run dev
```

[Learn Next.js: Getting Started | Next.js](https://nextjs.org/learn/dashboard-app/getting-started)

 -   **`/app`**: Contains all the routes, components, and logic for your application, this is where you'll be mostly working from.
 -   **`/app/lib`**: Contains functions used in your application, such as reusable utility functions and data fetching functions.
 -   **`/app/ui`**: Contains all the UI components for your application, such as cards, tables, and forms. To save time, we've pre-styled these components for you.
 -   **`/public`**: Contains all the static assets for your application, such as images.
 -   **`/scripts`**: Contains a seeding script that you'll use to populate your database in a later chapter.
 -   **Config Files**: You'll also notice config files such as `next.config.js` at the root of your application. Most of these files are created and pre-configured when you start a new project using `create-next-app`. You will not need to modify them in this course.