import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import expensesTotal from '../selectors/expenses-total'; 


export const ExpenseSummary = ({ expensesTotal, amountExpenses }) => (
    <div> 
    { amountExpenses !== 1 ? 
        <p>Your {amountExpenses} expenses come to {numeral(expensesTotal/ 100).format('$0,0.00')}</p> 
        : 
        <p>Your 1 expense comes to {numeral(expensesTotal/ 100).format('$0,0.00')}</p>}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expensesTotal: expensesTotal(state.expenses),
        amountExpenses: state.expenses.length
    };
};

export default connect(mapStateToProps)(ExpenseSummary);
