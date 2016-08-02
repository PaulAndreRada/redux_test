import {combineReducers, createStore } from 'redux'

// actions
const ADD_TODO = 'ADD_TODO'

// action creator
function addTodo(text){
  return {
    type: ADD_TODO,
    text
  }
}

// reducer
function todos( state = [], action){
  switch(action.type){
    case ADD_TODO:
     return [
       ...state,
       {
         text: action.text,
         completed: false,
       }
     ]
     default:
      return state
  }
};

const todoApp = combineReducers({
  todos
})

// store
let store = createStore(todoApp);

// log the initial state
console.log( store.getState())

// Every time the state changes, log it
// returns an unsubscribe object
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// dispatch some actions
store.dispatch(addTodo('make your first todo'))
store.dispatch(addTodo('second todo'))


// Stop listening to state updates
unsubscribe()
