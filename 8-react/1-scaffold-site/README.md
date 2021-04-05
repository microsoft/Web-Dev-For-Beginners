# Scaffold a React.js app: Introduction to React.js; JSX, Scaffold your site
### Introduction

In the previous web application projects, we learned how to build fully functional applications that runs directly in the browser using static HTML, CSS, and JavaScript. In this next chapter, we'll be using React, a declarative, efficient, and flexible JavaScript library for building modern user interfaces and web applications. It is a very popular choice when building a SPA, Single Page Application. Frameworks and libraries are commonly used in modern web applications because of the ease of starting a new project. A scaffolded project normally would have configurations, toolings and dependencies already set up and installed for you. We will be taking a practical approach by builidng a project to learn React as a frontend library and will also be linking resources such as the React documentation, for further reading. Throughtout the chapter, we will introduce concepts such as JSX, components, props, state, and lifecycle.

In this lesson, we'll be setting our React application using `create-react-app` and using a Tailwind for styling. This lesson is the first of three lessons in the React chapter where we will first scaffold the React project, install necessary tooling and libraries, one of which is TailwindCSS, a CSS utility library and build out the structure of the porfolio.

### Prerequisites

As this is the last chapter of the curriculum, prerequisites are all the chapters leading up to this React chapter.

- Basic familiarity with HTML & CSS.
- Basic knowledge of JavaScript and programming.
- Basic understanding of the DOM.
### Preparations

You need a local web server to test the web app we'll build in this lesson. If don't have one, you will need to install [Node.js](https://nodejs.org).

- Node.js. Make sure you version of Node.js is at least 12, or the latest stable release.
- Preferred code edition or IDE
- Terminal. MacOS and Windows both have built-in terminals. If you're using a code editor like VSCode, it also has conveniently built-in terminal.
- React devtools is recommended. It is a web browser extension that helps with developing and debugging when using React. We will be using the devtools when we start creating components.

## Project Setup

### Install React

First, we're going to boostrap the React project by installing it from our Terminal. React has a handy command `create-react-app` to run whereby it will bootsrap a starter project with all the necessary dependencies installed. You can read more about Create React App [here](https://github.com/facebook/create-react-app) Open your preferred terminal and run:

```bash
npx create-react-app portfolio

# OR

npm init react-app my-app

# OR

yarn create react-app portfolio
```

The first couple of keys runs and installs React and the `portfolio` is the name of your directory. It can be anything you decide to name it, but for simplicity sake let's call it `portfolio`. [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) is a package runner tool that comes with npm 5.2+ and higher. Running one of the above commands will create a directory called `portfolio` inside the current folder (usually your home directory).


Once the installation is done, change directory into your project folder and open the project up in your code editor.

```bash
cd portfolio
```
### React project structure

Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
portfolio
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── serviceWorker.js
    └── setupTests.js
```

The public folder contains our assets, html static files and custom client side javascript files. package.json is used by npm (Node package manager) to save all the packages needed to deploy our app, but we don't have to worry about this because CodeSandbox installs and updates this file for us.

In our public folder, we have a standard html file called index.html. This is our point of entry file where we have our root element, which is named by convention. If you scroll down to line 30 in the body element, you will see <div id="root"></div>. This is the root element where we will be injecting our application.

The src folder contains all our React code and houses our index.js, app.js and later on our components when we start to create them. In index.js, you will see something like this:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

Here we import the React library and we use the ReactDOM render() method in order to print the contents of our App component into the root div in our index.html that we specified above. Our main app component App.js has to be imported as well to be included in the render. The App.js component is passed in as the first argument in the render function and the rootElement as the second argument. That will tell React to render the app component and transform it into an element using the React.createElement method at build time to the index page. We will be stripping out all the scaffolded code in the component App.js and rebuilding it later on.

```js
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```

The `App` function in App.js represents a React function component. In React, components can be defined as class components or function components. We will get into explaining more about these components in the next chapter when we start building out more components. You can create your components as a individual files (Single File Component - SFC). In React, html-like tags which are what we call JSX can be passed in the return statement to be returned. The JSX inside the return function is what the App.js will render out. JSX stands for JavaScript XML and is a syntax extension to JavaScript that allows you to write markup inside a React component.

### Set up TailwindCSS and SASS

Before we go any further, let's install [TailwindCSS](https://tailwindcss.com/), the CSS utility library we will be using for styling of this project. Tailwind CSS is a highly customizable, low-level CSS framework that gives us all of the building blocks we need to build intuitive user interfaces. So, it is simply a utility first CSS framework. We want to write our CSS using SASS, a CSS compiler so that we can easily nest our styles seamlessly. Let's install Tailwind and the node-sass package:

#### Install Node SASS

```bash
npm i sass

# OR

yarn add sass
```

#### Install Tailwind

```bash
npm i tailwindcss autoprefixer postcss-cli

# OR

yarn add tailwindcss autoprefixer postcss-cli
```

More details on [here](https://tailwindcss.com/docs/installation).

Now, we need to generate the configuration for tailwind which will create a minimal `tailwind.config.js` file at the root of your project:

```bash
npx tailwind init

# OR 
npx tailwind init --full # with all default configuration

touch postcss.config.js
```

#### Install and configure CRACO

After running the above commands, the `tailwind.config.js` file is created which contains all our default configuration. Next we need to install [CRACO (Create React App Configuration Override)](https://github.com/gsoft-inc/craco), an easy and comprehensible configuration layer for create-react-app, because Create React App doesn't let you override the PostCSS configuration natively.

```bash
npm install @craco/craco

# OR

yarn add @craco/craco
```

When the installation is complete, update your scripts in your `package.json` file to use `craco` instead of `react-scripts` for all scripts except eject:

```diff
"scripts": {
- "start": "react-scripts start",
- "build": "react-scripts build",
- "test": "react-scripts test",
+ "start": "craco start",
+ "build": "craco build",
+ "test": "craco test",
"eject": "react-scripts eject"
},
```

Now, create a `craco.config.js` at the root of our project and add the tailwindcss and autoprefixer as PostCSS plugins:

```bash
touch craco.config.js
```

```js
// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}
```

#### Purge styles and include Tailwind in CSS

Because Tailwind is a library with default utility classes, CSS will be need to compiled for production. It is good practive to purge your project of unused styles in production builds so that load time is faster In your tailwind.config.js file, configure the purge option with the paths to all of your components so Tailwind can tree-shake unused styles in production builds:

```diff
// tailwind.config.js
module.exports = {
- purge: [],
+ purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
darkMode: false, // or 'media' or 'class'
theme: {
extend: {},
},
variants: {
extend: {},
},
plugins: [],
}
```

#### Create styles directory and files

Next, let's create a `styles` folder and a new `tailwind.scss` file inside of it. Move the `index.css` file that was generated when creating your React app into the `styles` directory and rename it to `index.scss`. In the `tailwind.scss` file, import in Tailwind's `base`, `components`, and `utitlities` styles, replacing all the original file contents.

```css
// src/tailwind.scss

@import "tailwindcss/base";

/* Start purging... */
@import "tailwindcss/components";
/* Stop purging. */

/* Start purging... */
@import "tailwindcss/utilities";
/* Stop purging. */

/* Custom utilities */
```

Next, you'll need to import the CSS file in your `/src/index.js`

```diff
import React from 'react';
import ReactDOM from 'react-dom';
+ import './styles/index.scss';
+ import './styles/tailwind.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

The `index.scss` will be empty for now until component styles are imported in when you start creating components in the next lesson.

#### Run your development environment

Run the below command to start up your development environment:

```bash
npm run start

# OR

yarn start
```

There might be a caveat with downgrading your PostCSS version if you run into this error when your development environment starts.

```
Error: PostCSS plugin tailwindcss requires PostCSS 8.
```

If this is the case, follow the rest of the commands below to install PostCSS 7 and restart your local development environment after. To read more about Tailwind's compatibility build [here](https://tailwindcss.com/docs/installation#post-css-7-compatibility-build).

```bash
npm uninstall tailwindcss postcss autoprefixer
npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9

# OR

yarn remove tailwindcss postcss autoprefixer
yarn add -D tailwindcss@npm:@tailwindcss/postcss7-compat @tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
```

Once the error clears out, let's go back to `App.js` and replace the markup with:

```jsx
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Frontend Foxes School
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn how to build your own portfolio
        </a>
      </header>
    </div>
  );
}

export default App;
```

In localhost:3000, you should be able to see the compiled and hotreloaded changes reflected in your browser!

## Next

In the next lesson, we will be diving into creating React components!

---

## Credits
Written with ♥️ by [Jaeriah Tay](https://www.twitter.com/jaeriahtay)