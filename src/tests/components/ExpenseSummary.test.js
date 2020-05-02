import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';

test('should render ExpenseSummary correctly with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseTotal={3334455} amountExpenses={3}/>);
    expect(wrapper).toMatchSnapshot();
});

// test('should render ExpenseSummary correctly with no expenses', () => {
//     const wrapper = shallow(<ExpenseSummary expenses={[]}/>);
//     expect(wrapper).toMatchSnapshot();
// });

