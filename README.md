# redux-toolkit-demo

Redux Toolkit is a set of tools that helps simplify Redux development. It includes utilities for creating and managing Redux stores, as well as for writing Redux actions and reducers.
Why should we upgrade to Redux Toolkit?

RTK going forward, is the new and improved official and opinionated package for writing standard Redux today as recommended by the Redux Developers team.
RTK is a Hooks based incarnation of Redux that simplifies Redux development, with quality of life improvements, like the ability to write mutable state updates in Reducers which are converted to Immutable state updates behind the scenes using a library called Immer, and auto-generated Actions from the Reducers themselves using Autodux, along with out-of-the-box support for Thunks.

There is also something called RTK query that can replace Async Thunks for data fetching in some cases.

Reason for using Redux toolkit:
A lot less boilerplate code is required compared to Redux.
Redux hooks like useSelector and useDispatch make things so short and easy to use. You don't need to do manual thunk setup as redux-toolkit comes with out of the box createAsyncThunk which enables you to perform async operations in a very hassle free way.
getState is also very helpful in obtaining state variables across any of your actions or async operations.
Mutability might be considered an advantage or disadvantage, but if you're not too used to writing with spread operators, you might love this feature as well. Do straight assignments and let the redux toolkit take care of mutability under the hood.
current can be used to log your state anywhere in case you want to debug and understand where things are going wrong.
Prebuilt templates: you might want to use npx create-react-app my-app --template redux-typescript. It gives you a setup-ready redux toolkit boilerplate and also contains a boilerplate of most important redux state management applications so that you could refer to them to create your own slices very easily.
Installing RTK in an existing project :-
npm install @reduxjs/toolkit

This repo demostrates how RTK can be used in handling both sync and async actions to control global states in a more effective and improved way. Follow these steps to run this demo project and understand the basic concepts of RTK.. 
git clone
npm i
npm start
