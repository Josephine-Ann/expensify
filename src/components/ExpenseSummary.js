// MINE
// import React from 'react';
// import { connect } from 'react-redux';
// import numeral from 'numeral';
// import expensesTotal from '../selectors/expenses-total'; 


// export const ExpenseSummary = ({ expensesTotal, amountExpenses }) => (
//     <div> 
//     { amountExpenses !== 1 ? 
//         <p>Your {amountExpenses} expenses come to {numeral(expensesTotal/ 100).format('$0,0.00')}</p> 
//         : 
//         <p>Your 1 expense comes to {numeral(expensesTotal/ 100).format('$0,0.00')}</p>}
//     </div>
// );

// const mapStateToProps = (state) => {
//     return {
//         expensesTotal: expensesTotal(state.expenses),
//         amountExpenses: state.expenses.length
//     };
// };

// export default connect(mapStateToProps)(ExpenseSummary);
import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses' ;
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  
  return (
    <div>
      <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);