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

Components are sections of your application that you extract out into separate files so that you can make them reusable. Conceptually, components are like JavaScript functions. There are two types of components, functional components and class components. Because of the nature of React's ecosystem and how its features, recommendations, and versions are continually updated, for brevity's sake we will learn the build the project with function components. You have already seen the first component generated when we ran `create-react-app` in `App.js`. The simplest way to define a component is to write a JavaScript function. Let's start by creating our first component file called `Hero.js` inside a new directory called `components/` under the `src` folder. A function component must always return markup, which is what `React.createElement` generates.

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

As you can see, we've written our function using the arrow function concept introduced in JavaScript ES6 which works the same way as a regular function component.

## Props

We briefly touched on props in our examples above. In this section, we'll go into more details of how to use props and how to use an alternative to props if you plan on passing data around your application.

### What are props (properties)?

Props (short for properties) are plain JavaScript objects that hold data that can effect the output of the render function your application's components. Props are data that are meant to be passed around so consider that if you have a rather large application with nested components, you'll need to pass down data from the top most parent component down to the child component. Let's have a look at our 'Hero' component:

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

The `name` prop variable is being passed down from a parent component which is our `App.js` in this case. This is currently an arbitrary data value that we haven't defined yet. But what is happening here is that `name` is a variable or 'placeholder' that when rendered will evaluate to whatever you've set the value to e.g a string containing your name.

Let's now have a look at our `App.js` with some markup edits and adding of a data layer:

```jsx
import { heroData } from './mock/data';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Hero heroData={heroData} />
    </div>
  );
}

export default App;
```

We are importing in a mock data file, which we will get to creating later and defining an attribute prop called `heroData` to pass in our data also called `heroData`. The attribute can be called any arbitrary name but is a good idea to name it something that pertains to the value you're expecting. In our `Hero.js`, we'll then need to pass in the prop and render out the hero data's property such as a `name`.

```jsx
const Hero = ({ heroData }) => {
  return (
    <div className="hero">
      <h1>My name is {heroData.name} and this is my portfolio!</h1>
    </div>
  );
}

export default Hero;
```

We won't be dealing with too much complex data in this course but the examples provided give some options as to how React can handle data in multiple ways depending on preference and use cases. Before we go any further with introducing another way of providing centralized data, let's create a file where we will store our portfolio data to pull from. In a real-world application, there are other ways to input and source your data from platforms suchs as a Content Management System or even from markdown.

### Creating a data source

install nanoid

## Context and hooks

useContext

## Hooks

## Credits
Written with ♥️ by [Jaeriah Tay](https://www.twitter.com/jaeriahtay)



