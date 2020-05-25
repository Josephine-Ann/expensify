import moment from 'moment';
import { 
    setStartDate, 
    setEndDate, 
    sortByAmount, 
    sortByDate,
    setTextFilter 
} from '../../actions/filters';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should set sort by amount', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('should set sort by date', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('should set text to filter', () => {
    const action = setTextFilter('something')
    expect(action).toEqual({
        type: 'CHANGE_TEXT',
        text: 'something'
    });
});

test('should set text to default without variables', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});
// export const setTextFilter = (text = '') => ({
//     type: 'CHANGE_TEXT',
//     text
// })


// export const sortByDate = (sortBy) => ({
//     type: 'SORT_BY_DATE',
//     sortBy
// })


// export const sortByAmount = (sortBy) => ({
//     type: 'SORT_BY_AMOUNT',
//     sortBy
// })

// export const setStartDate = (startDate) => ({
//     type: 'SET_START_DATE',
//     startDate
// })

// export const setEndDate = (endDate) => ({
//     type: 'SET_END_DATE',
//     endDate
// })