import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';


test('should render ExpenseListItem with expense', () => {
    const expense = expenses[0]
    const wrapper = shallow(<ExpenseListItem key={expense.id} description={expense.description} createdAt={expense.createdAt} amount={expense.amount}/>);
    expect(wrapper).toMatchSnapshot();
});


test('should render ExpenseListItem with expense', () => {
    const wrapper = shallow(<ExpenseListItem key={[]} description={[]} createdAt={[]} amount={[]}/>);
    expect(wrapper).toMatchSnapshot();
});