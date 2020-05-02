import expensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';


test('predict total accurately', () => {
    const result = expensesTotal(expenses);
    expect(result).toBe(114195);
});


test('predict total 0 if nothing introduced', () => {
    const result = expensesTotal([]);
    expect(result).toBe(0);
});

test('predict 195 with only 1rst fixture introduced', () => {
    const result = expensesTotal([expenses[0]]);
    expect(result).toBe(195);
});