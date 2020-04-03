import React from 'react';
import { shallow } from 'enzyme';
import AddExpensePage from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses'

test('should render AddExpensePage correctly', () => {
    const onSubmit = jest.fn();
    const history = { push: jest.fn() };
    const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
    expect(wrapper).toMatchSnapshot();
})

test('should handle onSubmit', () => {
    const onSubmit = jest.fn();
    const history = { push: jest.fn() };
    const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
    wrapper.find('form').simulate('submit', { preventDefault() {} });
    wrapper.find('form').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(onSubmit).toHaveBeenLastCalledWith(expenses[1]);
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
