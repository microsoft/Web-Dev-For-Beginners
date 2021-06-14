# Styling and Deployment: Tailwind utility styling and deployment

### Introduction

In this section, we will finalize our portfolio project by first going over to how style in [Tailwind](https://tailwindcss.). The [Tailwind documentation](https://tailwindcss.com/docs) will be your best friend during this section, as it will give you all the style utilities to make your portfolio amazing! we will then wrap by going over a couple hosting provider deployment options for you to ship your portfolio live!

## Tailwind and BEM

Before we get into creating our style files, lets retract and look at the `Hero` and `CtaButton` components we created. You may have noticed in the outer most parent div we give our class as specific name `className="hero"`, and our the nested divs as `hero__container` and `hero__title`. We are following by [BEM standards](http://getbem.com/introduction/) here. It is one of the most efficient and ledgeable ways to structure out your CSS and SASS. You can read more into details of the other benefits of BEM in the link shared above. We have decided to go with BEM in this project because extracting out styling to style files will help to keep your project organized and ultimately your code readable and ledgeable. Tailwind's does not recommended one over the other, using utility class names inline or extracting CSS or SASS to other files. In fact, Tailwind has documentation on [how to set your preprocessors](https://tailwindcss.com/docs/using-with-preprocessors) in your project.

# Styling files

Now, lets get started on creating some of our starting styles files. First create a `tailwind.scss` folder in `index.scss` in `src`. Open up `tailwind.js` and copy the below code in. 

```css
@import "tailwindcss/base";

/* Custom base styles here */
@import './base/base';

/* Start purging... */
@import "tailwindcss/components";
/* Stop purging. */

/* Start purging... */
@import "tailwindcss/utilities";
/* Stop purging. */

/* Custom utilities */
```

Now let's create two folders named `base` and `components` inside of a `styles` folder which you will create as well. Inside of `base`, create `_base.scss` and inside of `components`, `_hero.scss`. Your styles directory structure should now look like this:

```
portfolio
├── src
├── ├── styles
├──     │    └── base
├──     │        └── _base.scss
├──     ├── components
├──     │   └── _hero.scss
├──     │   index.scss
└──     └── tailwind.scss
```


## Credits
Written with ♥️ by [Jaeriah Tay](https://www.twitter.com/jaeriahtay)

