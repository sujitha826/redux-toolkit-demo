<<<<<<< HEAD
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
=======
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
>>>>>>> e5f79defb3108d3e60c579c2c49fcc2d22acd2b2
