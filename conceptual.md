Conceptual Exercise
Answer the following questions below:

What is React? When and why would you use it?

React is a frontend JavaScript library used in web development for building interactive user interfaces.

Overall, React improves UI development. Before React, developers built UIs by hand with vanilla JavaScript or with less UI-focused React predecessors like jQuery. That meant longer development times and plenty of opportunities for errors and bugs.

What is Babel?

Babel is a JavaScript compiler. It's mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.
What is JSX?

JSX stands for JavaScript XML and allows us to write HTML in React.
JSX makes it easier to write and add HTML in React.
How is a Component created in React?

The simplest way to define a component is to write a JavaScript function.
When creating a React component, the component's name must start with an upper case letter.
When using functional components, the React component accepts a single “props” (which stands for properties) object argument with data and returns a React element.
Additionally an ES6 class can be used to define a component.
The class component has to include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives that component access to React.Component's functions.
The class component also requires a render() method used to return the HTML.
What are some difference between state and props?

State is mutable whereas props are not. When state is changed a component is re-rendered. Another difference is that state is not passed down to child components. The only way to pass information down to children is through props
What does "downward data flow" refer to in React?

Downward data flow is the idea that parent components pass data down to their children via props. In order to make data go the other way, we have to pass a function down from the parent that the child can then call with some information.
What is a controlled component?

One that is controlled by react and that state is always controlled by react. For example, in an input field in a form when the input is text react should control the state of the input so that it can use it. There could be issues if react is not aware of the changes being made in the DOM when compared to it's virtual DOM.
What is an uncontrolled component?

An uncontrolled component is one where react it not aware of the state change. It is very uncommon to need to use an uncontrolled component, but it can happen in the event of 3rd party libraries and inputs for uploading files.
What is the purpose of the key prop when rendering a list of components?

It allows react to identify which components are changed so that it knows which ones to re-render quickly. Without each item in the list having its own unique key, performance could take a hit since react would not be able to quickly identify which component has changed in the list.
Why is using an array index a poor choice for a key prop when rendering a list of components?

The 2 things that a key should be is stable and unique. An index would be unique but it would not be stable since the array can mutate and indices can shift around.
Describe useEffect. What use cases is it used for in React components?

The useEffect hook is used to run code after a rendering happens. Most commonly this is used to do something after a render, or after the initial render. Examples could
include communicating with an API, syncing information to local storage, or working with timers.

What does useRef do? Does a change to a ref value cause a rerender of a component?

The useRef() hook is used to keep track of variables without causing re-renders to a component (it creates refrences).
The useRef hook returns a mutable object which stays intact over the lifetime of a React component because the value is persisted by React across re-renders.
The returned object has a current property which can hold any modifiable value.
When would you use a ref? When wouldn't you use one?

Ref just means reference, so it can be a reference to anything (DOM node, JavaScript value, ...)
The ref can be used as instance variable for a function component in React whenever we need to track some kind of state without using React's re-render mechanism.
As much as using the ref attribute gives you the ability to perform certain operations and directly manipulate the DOM, it is a general rule of thumb to avoid using refs unless it's absolutely needed.
The official React documentation outlined only three possible use cases where refs are entirely considered useful for lack of better alternatives:
Managing focus, text selection, or media playback
Triggering imperative animations
Integrating with third-party DOM libraries
What is a custom hook in React? When would you want to write one?

Building custom hooks lets us extract component logic into reusable functions.
In order for React to recognize that a function is a custom hook, its name must start with use.
The same rules for using hooks also apply to custom hooks, for instance they cannot be nested in a condition or a loop and also cannot be called outside a functional component or within another hook.