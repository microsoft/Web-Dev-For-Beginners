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
const Hero = ({ name }) => {
  return (
    <div className="hero">
      <h1>My name is {name} and this is my portfolio!</h1>
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

The `hero` prop variable is being passed down from our outer most parent component which is our `App.js` in this case. The `hero` variable is an arbitrary data value that we haven't defined yet. But what is happening here is that `hero` is a variable or 'placeholder' that when accessed at `hero.name` will render and evaluate to whatever you've set the the property name value to e.g a string containing your name.

Let's now have a look at our `App.js` with some markup edits and adding of a data layer:

```jsx
import { heroData } from './mock/data';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Hero hero={{ ...hero }} />
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

## Hooks

In this section, we'll be introducing another core concept of React, [hooks](https://reactjs.org/docs/hooks-intro.html). Hooks make function components stateful without using the 'class' concept in React.

useState

useEffect

The three dots in `...heroData` is called the [spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) and it helps to pass in all the props so that we don't have to write out the prop variables individually.
## Hooks

## Credits
Written with ♥️ by [Jaeriah Tay](https://www.twitter.com/jaeriahtay)



