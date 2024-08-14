// import { createStore, combineReducers, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import counterReducer from "../features/counter/reducer";
// import multiCounterReducer from "../features/multiCounter/reducer";
// import todoReducer from "../features/todo/reducer";
// import { thunk } from "redux-thunk";

// const initialState = {};
// const store = createStore(
//   combineReducers({
//     counter: counterReducer,
//     multiCounter: multiCounterReducer,
//     todo: todoReducer,
//   }),
//   initialState,
//   composeWithDevTools(applyMiddleware(thunk))
// );

// export default store;

import counterReducer from "../features/counter/reducer";
import multiCounterReducer from "../features/multiCounter/reducer";
import todoReducer from "../features/todo/reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    multiCounter: multiCounterReducer,
    todo: todoReducer,
  },
});

export default store;

// import { createStore, combineReducers, applyMiddleware } from "redux";
// import { thunk } from "redux-thunk"; // Import redux-thunk
// import counterReducer from "../features/counter/reducer";
// import multiCounterReducer from "../features/multiCounter/reducer";
// import todoReducer from "../features/todo/reducer";

// // Combine reducers
// const rootReducer = combineReducers({
//   counter: counterReducer,
//   multiCounter: multiCounterReducer,
//   todo: todoReducer,
// });

// const initialState = {};

// // Create store with only redux-thunk middleware
// const store = createStore(
//   rootReducer,
//   initialState,
//   applyMiddleware(thunk)
// );

// export default store;

