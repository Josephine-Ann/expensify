import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {} ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id  
})


// REMOVE_EXPENSE
// EDIT_EXPENSE

// figure out if it's a string? 
// righteeooooh, vale, a veure...

const editExpense = ( id, updates ) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates  
})

const setTextFilter = (text = '') => ({
    type: 'CHANGE_TEXT',
    text
})


const sortByDate = (sortBy) => ({
    type: 'SORT_BY_DATE',
    sortBy
})


const sortByAmount = (sortBy) => ({
    type: 'SORT_BY_AMOUNT',
    sortBy
})

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})



// SET_TEXT_FILTER
// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
        return [
            ...state,
            action.expense
        ];
        case 'REMOVE_EXPENSE':
            return [
                state.filter((expense) => expense.id != action.id )
            ];
        case 'EDIT_EXPENSE':
        return state.map((expense) => {
            if (expense.id === action.id) {
                return {
                    ...expense,
                    ...action.updates
                }
            } else {
                return expense;
            };
        });
        default: 
        return state;
    }
};

// console.log({
//     age: 27,
//     ...user,
//     location: 'Philadelphia',
// });

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = ( state = filtersReducerDefaultState, action ) => {
    switch (action.type) {
        case 'CHANGE_TEXT':
           return {
            ...state,
            text: action.text
           }
           case 'SORT_BY_DATE':
           return {
            ...state,
            sortBy: 'date'
           }
           case 'SORT_BY_AMOUNT':
           return {
            ...state,
            sortBy: 'amount'
           }
           case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
            case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default: 
        return state;
    }
}

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        // code above...when we start, we won't be strings. if we have not been set,
        // please...set us!
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt > b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount > b.amount ? 1 : -1;
        }
    })
};

// store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    }));

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 1000 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 10, createdAt: -10000 }))

// // store.dispatch(removeExpense({ id: expenseOne.expense.id }))

// store.dispatch(editExpense( expenseTwo.expense.id, { amount: 500 } ))

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));


const demoState = {
    expenses: [{
        id: 'dlfbhadsñlbh',
        description: 'January Rent',
        note: 'This was the final payment',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};

// const user = {
//     name: 'Jen',
//     age: 24
// };

// console.log({
//     age: 27,
//     ...user,
//     location: 'Philadelphia',
// });

