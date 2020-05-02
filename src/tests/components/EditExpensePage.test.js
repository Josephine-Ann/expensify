import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses'
import { EditExpensePage } from '../../components/EditExpensePage';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage 
        editExpense={editExpense} 
        removeExpense={removeExpense} 
        history={history}
        expense={expenses[2]} 
    />
    );
 });

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
 })

test('should handle onSubmit', () => {
      wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
      expect(history.push).toHaveBeenLastCalledWith('/');
      expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('should handle removeExpense', () => {
     wrapper.find('button').simulate('click');
     expect(history.push).toHaveBeenLastCalledWith('/');
     expect(removeExpense).toHaveBeenLastCalledWith({ 
         id: expenses[2].id
        });
 });

// import React from 'react';
// import { shallow } from 'enzyme';
// import { AddExpensePage } from '../../components/AddExpensePage';
// import expenses from '../fixtures/expenses'

// let addExpense, history, wrapper;

// beforeEach(() => {
//     addExpense = jest.fn();
//     history = { push: jest.fn() };
//     wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
// });

// test('should render AddExpensePage correctly', () => {
//     expect(wrapper).toMatchSnapshot();
// })

// test('should handle onSubmit', () => {
//     wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
//     expect(history.push).toHaveBeenLastCalledWith('/');
//     expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
// });