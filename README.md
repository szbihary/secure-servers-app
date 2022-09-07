# Secure Servers App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Features

- Login page
  - Authorization token is saved as a cookie with 1 day expiration.
- Server page
  - This page contains the server list in a table with sortable headers.
- A simple navigation bar
- Logout functionality
- Loading states are indicated for the user during requests.
- User-friendly error messages provided.

## Install

It's recommended to use `nvm` for node version management.

```
nvm install 16.15
nvm use 16.15
npm ci
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

### `npm run eject`

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## Formatting

In order to achieve a consistent code style please use [Prettier](https://prettier.io/). In VSCode adding these settings to your workspace will set up the extension to format your code every time you save a file:

```

{
"editor.formatOnSave": true,
"editor.defaultFormatter": "esbenp.prettier-vscode"
}

```

## Recommended improvements

- Improve test coverage, add integration and E2E tests.
- Navigation Bar design and mobile view should be improved.
- Product name, product logo could be added to LoginForm and navigation bar/header.
- Product related favicon could be added.
- Filtering option can be added to the table (+ sticky header).
- `react-query` package currently does not support IE11. To support IE11, this library from node_modules should be transpiled with Babel.
