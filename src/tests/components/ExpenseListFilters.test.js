import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
// import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        />
    );
});

 test('should render ExpenseListFilters correctly', () => {
     expect(wrapper).toMatchSnapshot();
 });

 test('should render ExpenseListFilters with alt data correctly', () => {
     wrapper.setProps({
         filters: altFilters
     });
     expect(wrapper).toMatchSnapshot();
 })

 test('should handle text change', () => {
     const value = 'rent';
  //     wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);  
     wrapper.find('input').simulate('change', {
         target: { value }
     });
     expect(setTextFilter).toHaveBeenLastCalledWith(value);
 });

// // (altFilters.text);
// //     expect(wrapper).toMatchSnapshot();

// // onTextChange = (e) => {
// //     this.props.dispatch(setTextFilter(e.target.value));
// // }

 test('should sort by date', () => {
     const value = 'date';
     wrapper.setProps({
         sortBy: 'amount'
     });
     wrapper.find('select').simulate('change', {
         target: { value }
     });
     expect(sortByDate).toHaveBeenCalled();  
 });

  test('should sort by date', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(sortByAmount).toHaveBeenCalled();  
});

// test('should sort by amount', () => {
//     wrapper.find('select').simulate('change', {
//         target: 'amount'
//     });
//     expect(sortByAmount).toHaveBeenLastCalledWith('amount');  
// });

 test('should handle date changes', () => {
     const startDate = moment(0).add(4, 'years');
     const endDate = moment(0).add(8, 'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate })
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)

});

// test('should handle date focus changes', () => {
//     wrapper.setProps({
//         calendarFocused: true
//     });
//     expect(wrapper).toMatchSnapshot();
// });

 test('should handle date focus changes', () => {
     const calendarFocused = 'endDate';
     wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)
     expect(wrapper.state('calendarFocused')).toEqual(calendarFocused)

 });

// // test('should handle onSubmit', () => {
// //     wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
// //     expect(history.push).toHaveBeenLastCalledWith('/');
// //     expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
// // });

// // test('should handle removeExpense', () => {
// //    wrapper.find('button').simulate('click');
// //    expect(history.push).toHaveBeenLastCalledWith('/');
// //    expect(removeExpense).toHaveBeenLastCalledWith({ 
// //        id: expenses[2].id
// //       });
// // });
// // onSubmit = (expense) => {
// //     // props.dispatch(editExpense(props.expense.id, expense));
// //     this.props.editExpense(this.props.expense.id, expense);
// //     this.props.history.push('/');
// // };
// // onRemove = () => {
// //     this.props.removeExpense({ id: this.props.expense.id });
// //     this.props.history.push('/');
// // }