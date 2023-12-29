- This repo will have all the coding assignment given in Namaste React web series

# Namaste-Food
- HeaderComponent
  --Logo
  --Navigation
BodyComponent
  --search
  --RestaurentCardComponent
    --  Restaurent cards
Footer
  --Links
  --copyright    


# useState
- It is a utility function provided by React to re-render the component whenever state of component changes.
- It gives you two things in an array :
  1. state variable - It is special kind of variable which React provides, it is special because whenever this variable changes the component get re-rendered. This variable holds the current state of our component.

  2. setState - Developer needs to call this function, whenver data is changed. Developer need to pass the current state of the component to this function and it will re-renders the component with the new state.

# useEffect
- It is one more utility function provided by react to render something after the rendering of component is done.
- It takes two argument , one is call back function and other is dependency array.


# Redux
- Install @reduxjs/toolkit and react-redux
- Let's create or build our store
- Connect our store to our app (hope you remember react-redux)
- Create slice in the store (cartSlice in our case)
- dispatch an action
- read the data from store (using Selector)