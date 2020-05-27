import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpenseSummary correctly with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseTotal={3334455} amountExpenses={3}/>);
    expect(wrapper).toMatchSnapshot();
});

// test('should render ExpenseSummary correctly with no expenses', () => {
//     const wrapper = shallow(<ExpenseSummary expenses={[]}/>);
//     expect(wrapper).toMatchSnapshot();
// });

