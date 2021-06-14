# Build out your site: Components, State, Props, JSX & Hooks

### Introduction

We will be continuing on from the previous lesson where you set up your React project with Tailwind, a CSS utility-first library. This lesson will go over the core fundamentals of what makes React a modern library to build user interfaces using small composable pieces of code. We will be using 'components' to isolate blocks and elements of the project according to React's best code practice. What makes React a library instead of a framework is because of its flexibility, efficiency, and declarativeness and as developers we have the freedom to make architectural decisions that makes sense for our projects.

In this section, we'll start by laying out the foundations to create your very own customizable single page application portfolio in React. We will build out composable components, use React Hooks, use state and props to pass data around, and learn how to use JSX to render our templates in our portfolio application.

## JSX: JavaScript and XML

To refresh our memory in the last lesson, we edited the paragraph and anchor elements in a syntax that looks exactly like HTML. In fact, it is not HTML and is actually a markup language called JSX, which stands for JavaScript XML. Using JSX, we can write code that looks like HTML in our JavaScript files. JSX is not mandatory or neccessary to write markup in your React application but it is definitely a more convenient and accessible way. Consider the difference below in using the `createElement` method, which is what JSX is under the hood. `React.createElement` creates one instance of a component by passing the first argument a string of the element tag, the second argument as an empty object to pass in optional attributes, and lastly the inner tags you would like to render.

Using `React.createElement`:

```jsx
const Hero = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "My portfolio")
  );
};
```

Using JSX:
```jsx
const Hero = () => {
  return (
    <div className="hero">
      <h1>My portfolio</h1>
    </div>
  );
}
```

Essentially, JSX translate the HTML tags into `React.createElement` calls. Note that `className` attribute key is used instead of `class`, as `class` is a reserved keyword in JavaScript. JavaScript expressions can also be written inside JSX. For instance, the code below shows a variable or prop passed in. We will dive more into props later in the lesson. In the JSX, you  would then output the prop's value inside curly braces. When the component renders, the name's value will output onto the DOM.

```jsx
const Hero = ({ hero }) => {
  return (
    <div className="hero">
      <h1>My name is {hero.name} and this is my portfolio!</h1>
    </div>
  );
}

export default Hero;
```

## Components

Components are sections of your application that you extract out into separate files so that you can make them reusable. Conceptually, components are like JavaScript functions. There are two types of components, **functional components** and **class components**. Because of the nature of React's ecosystem and how its features, recommendations, and versions are continually updated, for brevity's sake we will learn the build the project with function components. You have already seen the first component generated when we ran `create-react-app` in `App.js`. The simplest way to define a component is to write a JavaScript function. Let's start by creating our first component file called `Hero.js` inside a new directory called `components/` under the `src` folder. A function component must always return markup, which is what `React.createElement` generates.

```jsx
const Hero = () => {
  return (
    <div className="hero">
      // ...
    </div>
  );
}

export default Hero;
```

As you can see, we've written our function using the arrow function concept introduced in JavaScript ES6 which works the same way as a regular function component. Function components are naturally stateless as what it usually does is returns something that parses into HTML elements. As your application gets more complex and need to handle changing of state, you'll need methods to hook into your components to handle that. Previously, components with state had to be written as classes, but thanks to the introduction of React Hooks (which we will get into in a later section), we can now write more declarative and performant code. Your use of classes or functions depends on your preference and situation.

When working with function components, we always want to aim to extract components out into smaller composable pieces. Our `Hero` component in this case can be described as a parent component. Whatever element that is contained inside of this component can potentially be extracted out into another subcomponent e.g a button component. We will show an example of this in our **props** section below. 

## Props

We briefly touched on props in our examples above. In this section, we'll go into more details of how to use props and how to use an alternative to props if you plan on passing data around your application.

### What are props (properties)?

Props (short for properties) are plain JavaScript objects that hold static or dynamic data that can effect the output of the render function in your application's components. Props are data that are meant to be passed around so consider that if you have a rather large application with nested components, you'll need to pass down data from the top most parent component down to the child component. Let's have a look at our 'Hero' component:

```jsx
const Hero = ({ hero }) => {
  return (
    <div className="hero">
      <h1>My name is {hero.name} and this is my portfolio!</h1>
    </div>
  );
}

export default Hero;
```

The `hero` prop variable is being passed down from our outer most parent component which is our `App.js` in this case. The `hero` variable is an arbitrary data value that we haven't defined yet. To pass in the prop, we include `hero` inside of the parentheses where our `Hero` function is defined. The wrapping of curly braces is destructuring our `hero` from props, otherwise we'll need to write access props doing this: `props.hero.name`. But what is happening here is that `hero` is a variable or 'placeholder' that when accessed at `hero.name` will render and evaluate to whatever you've set the the property name value to e.g a string containing your name.

Let's now have a look at our `App.js` with some markup edits and adding of a data layer:

```jsx
import { heroData } from './mock/data';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Hero hero={hero} />
    </div>
  );
}

export default App;
```

In `App.js`, we are importing in a mock data file, which we will get to creating later and defining an attribute prop called `hero` to pass in our data object called `heroData`. The prop attribute can be called any arbitrary name but is a good idea to name it something that pertains to the value you're expecting. In our `Hero.js`, we'll then need to pass in the prop and render out the hero data's property such as the `name`.

```jsx
const Hero = ({ hero }) => {
  return (
    <div className="hero">
      <h1>My name is {hero.name} and this is my portfolio!</h1>
    </div>
  );
}

export default Hero;
```

We won't be dealing with too much complex data in this project and course but the examples provided give some options as to how React can handle data in multiple ways depending on preference and use cases. Let's now create a file where we will store our portfolio data to pull from. In a real-world application, there are other ways to input and source your data from platforms such as a Content Management System or even from markdown. For this project and course, we'll be creating a mock data to pull data objects from, so let's get right to it!

### Creating a data source

First create a new directory in `src` called `mock` and a file inside of it call `data.js`. Copy in the following snippet to that file:

```jsx
// Head data
export const headData = {
  title: 'Name | Developer', // e.g: 'Name | Developer'
  description: 'Welcome to my portfolio', // e.g: Welcome to my website
};

// Hero data
export const heroData = {
  title: 'Hi, my name is',
  name: 'Name',
  subtitle: 'I\'m a developer!',
  cta: 'Know more',
};

// About data
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// Projects data
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// Contact data
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// Footer data
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};
```

In this file, we've created several objects with properties and immediately exported them. Each of the object points to a component in the portfolio project with mainly string properties that we will use to store our data. You can replace or fill out the key values on those properties when you start to build out more components. Note the `nanoid()` function we are calling at the `id` keys. `nanoid` is an external library we will be using to generate unique string IDs. Let's go ahead a install nano id now:

```bash
npm i nanoid

# OR

yarn add nanoid
```

 Unique ID keys are necessary when rendering lists in React as the keys help React to identify which items have changed. We will go more into keys and lists when we get to mapping out and rendering the lists in our components. Go to this [React documentation](https://reactjs.org/docs/lists-and-keys.html#keys) to read more about keys.

## Hooks and State

In this section, we'll be introducing another core concept of React, [hooks](https://reactjs.org/docs/hooks-intro.html). Hooks make function components stateful using these functions that hook into our components without using the 'class' concept in React. Currently, we are not using any data source of outputting any dynamic data just yet. But the idea is to make our data dynamic, so it's time to create your first Reactive variable and set your app's state. We will make use of the mock data structure we created earlier and pull it in as our state source. The idea of this data is to mock what an API (Application Programming Interface) data source might look like. We will not be going into APIs in this lesson but will utilize the idea of setting the state and passing it down into our components.

**State** is an attribute that is used to store information. It contains all the app component data that can dynamically change when the component re-renders. This means that the components has the ability to keep track of changing data. In a functional component, we can utilize the hook [`useState.](https://reactjs.org/docs/hooks-overview.html#state-hook)`. 

### State (`useState`)

To set state with `useState` we will first need to import it in our `App.js` component. Going back to our `App.js`, first let's import in the `useState` hook from React.

```jsx
import React, { useState } from 'react';
```

Next, we need to declare our state, our function to update state and call `useState` within our component. After the opening of our App function, we need to destructure and return `hero` and a function `setHero` from the hook `useState`. `useState` returns a tuple, which is an array with two items, in this case an initial value and a function that will update that value. The argument we will pass in to useState is the initial value of an empty object to be able to store the hero data in it when component mounts.

Within your component (under `function App() {`) add:

```jsx
const [hero, setHero] = useState({});
```

### Side-effect (`useEffect`)

Above we have defined the `setHero` function, which will be used to set the hero state. This function will simply be used to set the hero state. When the app component mounts to the DOM, we will use our next React hook `useEffect()` to set the hero data. It is a React lifecycle hook also known as side effects, that helps to call functions after the component first renders to the DOM and also anytime the DOM updates. Since we are loading data from a static mock file, we want to call our `setHero` function to update the state with the returned hero data so that we can render our updated data. This is a common pattern when you are fetching data from a remote endpoint.

First import `useEffect` from React in our import statement at the very top:

```jsx
import React, { useState, useEffect } from 'react';
```

Then we can set the hero data like so:

```jsx
useEffect(() => {
  setHero({ ...heroData });
}, []);
```

Above, we pass in our effect as the `heroData` and also by leaving the second argument array empty, this method will run once before the initial render. The three dots in `...heroData` is called the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) and it helps to pass in all the props so that we don't have to write out the prop variables individually.


The updated `App.js` file should now look like this:

```jsx
import React, { useState, useEffect } from 'react';
import { heroData } from './mock/data';
import Hero from './components/Hero';

function App() {
  const [hero, setHero] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
  }, []);

  return (
    <div>
      <Hero hero={hero} />
    </div>
  );
}

export default App;
```

Let's go back to our hero component and update it to pull in the necessary properties:

```jsx
import React from 'react';

const Hero = ({ hero }) => {

  return (
    <section className="hero">
      <div className="hero__container">
        <h1 className="hero__title">
          { hero.title || 'Hi, my name is' }
        <span>{ hero.name || 'Your name' }</span>
        <br />
        { hero.subtitle || 'I\'m a developer.' }
        </h1>
      </div>
    </section>
  );
}

export default Hero;
```

Just expanding on what we've already done above with this component, we are accessing the property `title`, `name`, and `subtitle` from the hero object being passed down from the application's state. The `||` is the logical OR operator that helps to fallback to the right expression which is a string when for instance, `hero.name` does not exist.

## Utilizing React devtools and creating subcomponents

In the previous lesson one of the recommendations is to install React devtools extension in your browser, if you haven't already, go ahead and do that as in the next section we will go into learning a bit inspecting our components and props and debugging.

Now go into your inspector tool under the React **Components** tab, you should see a view where you can click in and inspect the `App` and `Hero` components. If you've followed the above sections, you should see that you are able to see the `state` store in the App component under the `hooks` subheading:

```json
[
  {
    "name": "State",
    "value": {
      "title": "Hi, my name is",
      "name": "Name",
      "subtitle": "I'm a developer!",
      "cta": "Know more"
    }
  }
]
```

And when inspecting the hero component you should see:

```json
{
  "hero": {
    "title": "Ciao, my name is",
    "name": "Name",
    "subtitle": "I'm a developer!",
    "cta": "Know more"
  }
}
```

The `hero` object is being passed down to the hero component where you can then access all the property values. Developing your React as functional as possible when doing function programming is to componentize out your elements as much as possible. As example of this is a button component. We will utitlize the CTA button in this case to create a function component and consume it in our hero component.

```js
import { Link } from 'react-scroll';

const CtaButton = ({ cta }) => (
    <div className="hero__cta">
      <Link to="about" smooth-duration={1000}>
        { cta }
      </Link>
    </div>
);

export default CtaButton;
```

Then going back to your hero component, you will import `CtaButton` and include it in the template.

```js
import React from 'react';
import CtaButton from './CtaButton';

const Hero = ({ hero }) => {

  return (
    <section className="hero">
      <div className="hero__container">
        <h1 className="hero__title">
          { hero.title || 'Hi, my name is' }
        <span>{ hero.name || 'Your name' }</span>
        <br />
        { hero.subtitle || 'I\'m a developer.' }
        </h1>
        <CtaButton cta={hero.cta} />
      </div>
    </section>
  );
}

export default Hero;
```

Since the components we are builing out are static content, the rest of the components you will build out will follow the same pattern. Create the rest of the files in the `components` folder: `About.js`, `Projects.js`, `Resume.js` `Contact.js`, `Footer.js`.

Now you components folder should look like:

```
portfolio
└── src
    └── components
        ├── Hero.js
        ├── CtaButton.js
        ├── About.js
        ├── Projects.js
        ├── Contact.js
        └── Footer.js
```

Referring back to your data file, customize and add to the data objects however you need, and start building out the components. Don't forget to import them into `App.js` and include your components in the template as well for them to render out into the single page application.

In the next section, we will touch on styling Tailwind.


## Credits
Written with ♥️ by [Jaeriah Tay](https://www.twitter.com/jaeriahtay)



