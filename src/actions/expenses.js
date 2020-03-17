import uuid from 'uuid';


export const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {} ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

export const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id  
})


// REMOVE_EXPENSE
// EDIT_EXPENSE

// figure out if it's a string? 
// righteeooooh, vale, a veure...

export const editExpense = ( id, updates ) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates  
})
