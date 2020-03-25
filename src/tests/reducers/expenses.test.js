import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT'});
    expect(state).toEqual([]);
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            amount: 0,
            createdAt: 0,
            description: "",
            id: expect.any(String),
            note: ""
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[1], expenses[2], action.expense ]);
});

test('should edit expense', () => {
    const exp = {
        amount: 1,
        createdAt: 1
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: "1",
        updates: {
            amount: exp.amount,
            createdAt: exp.createdAt
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].amount).toEqual(1);
    expect(state[0].createdAt).toEqual(1);
});

test('should edit expense', () => {
    const exp = {
        amount: 1,
        createdAt: 1
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: "-1",
        updates: exp
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].amount).toEqual(expenses[0].amount);
    expect(state[0].createdAt).toEqual(expenses[0].createdAt);
});
// test('should not edit expense if expense not found', () => {
//     const action = {
//         type: 'EDIT_EXPENSE',
//         expense: {
//             amount: 22,
//             createdAt: 0,
//             description: "hi",
//             id: '-1',
//             note: "hello"
//         }
//     };
//     const state = expensesReducer(expenses, action);
//     expect(state).toEqual([expenses[1], expenses[1], expenses[2]]);
// });