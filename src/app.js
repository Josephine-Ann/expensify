import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routes/AppRouter';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();



store.dispatch(addExpense({ description: 'Water bill', amount: 100 }))
store.dispatch(addExpense({ description: 'Gas bill', amount: 10 }))
store.dispatch(setTextFilter('gas'));

setTimeout(() => {
    store.dispatch(setTextFilter('rent'));
}, 3000)

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
    <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));

