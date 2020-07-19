import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App";
ReactDOM.render(<App />,document.getElementById("root"));
//when rendering components in a loop we need to add key while array.map
//but we cant use this key as a prop
//template literal is used to insert javascript in string
//{} is used to insert javascript in HTML
//you cant {loop/conditionals} in it
//to do this you searched how to insert html in {} which is stupid
//but we can use  {console.log}
//we can also use {array.map(return component)} this enables use to render components in loop with logic
// function name (req){
//     doing things...
//     return stuff;
// }
// for anonymous functions
// (req)=>{
//     doing things...
//     return stuff;
// }
// req=>{
//     doing things..
//     return stuff;
// }
// req => 2*req (if not doing things)
//array methods
//Map -Create a new array by doing something with each item in an array.

//Filter - Create a new array by keeping the items that return true.

//Reduce - Accumulate a value by doing something to each item in an array.

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.
// 12-15 hrs a week for pet project and 12-15hrs a week for free-lancing
//(condition)?(true expression):(false expression)
//(condition)&&(true expression) if only true part there else use null in false part
//React apne developers ko dudh pilata hai by giving them the ability to use declaritive programming but stuff like DOM manipulation is imperative programming
//we can chose to drink or not to drink sweet sweet milk of react
//When writing React, it’s often good not to think of how you want to accomplish a result, but instead what the component should look like in it’s new state.
//it is easier to work with declaritive programming rather than imperative(DOM manipulation) in react
//React sees difference in DOM and manipulate only those nodes that need changing that makes it faster 
//selector api makes it more easier to DOM manipulate than Jquery
//ReactDOM never manipulates and Hooks is the way to go in react , Using vanilla DOM manipulation is going AWAY from React path hence DEclaritive approach is preferred
//onclick(re_renderfunction_containing onclick will work) but if re rendering defined as anonymous function inside onclick then it 
//Can You call an anonymous function inside itself probably no because it is a use and throw function
//useState(initial value)=>[value,function] hooks (state ko change karne ke liye hooks use karo)
//in forms event.preventDefaults(); prevent reloading of page but does it still send the post requests
// whence we were using hidden input component
