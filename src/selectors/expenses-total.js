export default (expenses) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    if (expenses.length < 1 ) {
        return 0
    } else if (expenses.length === 1) {
        return expenses[0].amount
    } else {
        return expenses.map(expense => expense.amount).reduce(reducer)
    }
};

