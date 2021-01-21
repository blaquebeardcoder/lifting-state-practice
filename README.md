##Lifting State Practice##

In React applications, data usually flows from the top down. Why do we care? How does this apply?

When several components in a view need to share state, you lift, or hoist, the state up so that it's available to all the components that need it. Define the state in the highest component you can, so that you can pass it to any components which will need it.
Let's look at a search filter as an example. This app will have two basic components - one that displays a list of data, and one that captures user input to filter the data.
Practice: Build a fruit filter
Our data will be simple - a list of fruits. The app will end up looking something like this:
 
 
 
 
When building a React app, it's important to take time to define the app's structure before you start writing code. I'm going to define the components and the state I need before I write the code.

Components
This app needs two components:

A list component to display the list of fruit. This component needs one piece of data: the array of fruits to display.

An input to capture the filter value from the user. This component needs one piece of data: the current value of the filter.

State
This app needs to keep track of changes in two items:
The filtered list of fruits
The value of the filter
Component hierarchy
I have two sibling components (components at the same level of the tree/app) that need to be aware of each other's data. Specifically, the list component needs to only show the fruits that match the filter value. So I need to get data from one sibling to another. Something like this:
 

How to achieve this, though? Using unidrectional data flow, of course! If I create a container component to hold both the filter value and the filtered list, I can hoist the state to the container so it's available to all the children. It will then be simple to display the state in the child components. The data will flow like this:

 
Child components
Now that I know the components I need, the state I need, and where everything needs to be, I can start writing some code. First, I'll create the child components. I can use functional components, since they won't need to hold their own state.
const FruitList = props => (
  <ul>
     {props.fruits.map(fruit => <li>{fruit}</li>)}
  </ul>
)

const FruitFilter = props => (
  <div>
    <label htmlFor="fruit-filter">Filter these Fruits: </label>
    <input type="text" value={props.value} onChange={props.onChange} name="fruit-filter" />
   </div>
)
FruitList renders an unordered list (ul) which contains an array of li elements, each with a single fruit string. FruitList uses array map to convert the array of fruit strings in our data to an array of fruit li elements to render. Using map to convert data arrays to arrays of UI elements is a common pattern you will use, and see used, in React.
FruitFilter renders a single input. Its value and onChange callbacks will both be set by the container component.

Lifting State Practice
In React applications, data usually flows from the top down. Why do we care? How does this apply?
When several components in a view need to share state, you lift, or hoist, the state up so that it's available to all the components that need it. Define the state in the highest component you can, so that you can pass it to any components which will need it.
Let's look at a search filter as an example. This app will have two basic components - one that displays a list of data, and one that captures user input to filter the data.
Practice: Build a fruit filter
Our data will be simple - a list of fruits. The app will end up looking something like this:
 

 
 
 
 
When building a React app, it's important to take time to define the app's structure before you start writing code. I'm going to define the components and the state I need before I write the code.
Components
This app needs two components:
A list component to display the list of fruit. This component needs one piece of data: the array of fruits to display.
An input to capture the filter value from the user. This component needs one piece of data: the current value of the filter.
State
This app needs to keep track of changes in two items:
The filtered list of fruits
The value of the filter
Component hierarchy
I have two sibling components (components at the same level of the tree/app) that need to be aware of each other's data. Specifically, the list component needs to only show the fruits that match the filter value. So I need to get data from one sibling to another. Something like this:
 

How to achieve this, though? Using unidrectional data flow, of course! If I create a container component to hold both the filter value and the filtered list, I can hoist the state to the container so it's available to all the children. It will then be simple to display the state in the child components. The data will flow like this:

 
Child components
Now that I know the components I need, the state I need, and where everything needs to be, I can start writing some code. First, I'll create the child components. I can use functional components, since they won't need to hold their own state.
const FruitList = props => (
  <ul>
     {props.fruits.map(fruit => <li>{fruit}</li>)}
  </ul>
)

const FruitFilter = props => (
  <div>
    <label htmlFor="fruit-filter">Filter these Fruits: </label>
    <input type="text" value={props.value} onChange={props.onChange} name="fruit-filter" />
   </div>
)
FruitList renders an unordered list (ul) which contains an array of li elements, each with a single fruit string. FruitList uses array map to convert the array of fruit strings in our data to an array of fruit li elements to render. Using map to convert data arrays to arrays of UI elements is a common pattern you will use, and see used, in React.
FruitFilter renders a single input. Its value and onChange callbacks will both be set by the container component.

