import { createStore } from 'redux';

const add = ({ a, b }, c) => {
    return a + b + c;
}

// console.log(add({ a: 1, b: 12}, 100))

const incrementCount = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy  
})

const decrementCount = ({ decrementBy = 1}) => ({
    type: 'DECREMENT',
    decrementBy
})

const setCount = ({ count }) => ({
    type: 'SET',
    count
})

const resetCount = ({ count } = {}) => ({
    type: 'RESET',
    count
})

// reducers
// reducers are pure functions, defined by what's put in and what comes out, no global variables 

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
            case 'DECREMENT':
                return {
                    count: state.count - action.decrementBy
                };
            case 'RESET':
                return {
                    count: 0
                };
                case 'SET':
                    return {
                        count: action.count
                    };
            default: 
            return state;
    }
};

const store = createStore(countReducer);

 const unsubscribe = store.subscribe(() => {
     console.log(store.getState());
 })

// if (action.type === 'INCREMENT') {
//     return {
//         count: state.count + 1
//     }
// } else {
//     return state;
// }
// })

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(setCount({ count: 30 }));
store.dispatch(resetCount());

unsubscribe();


// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 2
// });


// // unsubscribe();

//  store.dispatch({
//      type: 'SET',
//      count: 101
//  });

//  unsubscribe();

// // store.dispatch({
// //     type: 'INCREMENT'
// // });

// // store.dispatch({
// //     type: 'INCREMENT'
// // });

// // store.dispatch({
// //     type: 'RESET'
// // });


