# Build out your site: Components, State, Props & JSX

### Introduction

We will be continuing on from the previous lesson where you set up your React project with Tailwind, a CSS utility-first library. This lesson will go over the core fundamentals of what makes React a modern library to build user interfaces using small composable pieces of code. We will be using 'components' to isolate blocks and elements of the project according to React's best code practice. What makes React a library instead of a framework is because of its flexibility, efficiency, and declarativeness and as developers we have the freedom to make architectural decisions that makes sense for our projects.

In this section, we'll start by laying out the foundations to create your very own customizable single page application portfolio in React. We will build out composable components, use state and props to pass data around, and learn how to use JSX to render our templates in our portfolio application.

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
function Hero() {
  return (
    <div className="hero">
      <h1>My portfolio</h1>
    </div>
  );
}

export default App;
```


## Components

What are Components?

Components are sections of your application that you extract out into separate files so that you can make them reusable. Conceptually, components are like JavaScript functions. There are two types of components, functional components and class components. Because of the nature of React's ecosystem and how its features, recommendations, and versions are continually updated, for brevity's sake we will learn the build the project with function components. You have already seen the first component generated when we ran `create-react-app` in `App.js`. The simplest way to define a component is to write a JavaScript function. Let's start by creating our first component file called `Hero.js` inside a new directory called `components/` under the `src` folder. A function component must always return markup, which is what `React.createElement` generates.

```jsx
function Hero() {
  return (
    <div className="hero">
      // ...
    </div>
  );
}

export default App;
```

We will go into more details as we build out more components in the project. 

Now that we've walked through the starting structure in a React application, this is where the real fun begins. As you know we will be building a real-world e-commerce application sourcing data from an API data source. In order to do that, we will need to install a package dependency. So let's get right to it!

## State and props

## Credits
Written with ♥️ by [Jaeriah Tay](https://www.twitter.com/jaeriahtay)



