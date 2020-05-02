import React from 'react';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/AddExpensePage';
import expenses from '../fixtures/expenses'

let addExpense, history, wrapper;

beforeEach(() => {
    addExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
});

test('should render AddExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot();
})

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});

// test('should render error for invalid form submission', () => {
//     const wrapper = shallow(<ExpenseForm />);
//     expect(wrapper).toMatchSnapshot();
//     wrapper.find('form').simulate('submit', {
//         preventDefault: () => {}
//     });
//     expect(wrapper.state('error').length).toBeGreaterThan(0);
//     expect(wrapper).toMatchSnapshot();
// })