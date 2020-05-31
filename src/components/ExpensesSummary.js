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
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ visibleExpenseCount, invisibleExpenseCount, visibleExpensesTotal, invisibleExpensesTotal }) => {
  const visibleExpenseWord = visibleExpenseCount === 1 ? 'expense' : 'expenses' ;
  const invisibleExpenseWord = invisibleExpenseCount === 1 ? 'expense' : 'expenses' ;

  const visibleFormattedExpensesTotal = numeral(visibleExpensesTotal / 100).format('$0,0.00');
  const invisibleFormattedExpensesTotal = numeral(invisibleExpensesTotal / 100).format('$0,0.00');

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{visibleExpenseCount}</span> {visibleExpenseWord} totalling <span>{visibleFormattedExpensesTotal}</span></h1>
        <h1 className="page-header__title">Hidden <span>{invisibleExpenseCount}</span> {invisibleExpenseWord} totalling <span>{invisibleFormattedExpensesTotal}</span></h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  const invisibleExpenses = state.expenses 

  return {
    visibleExpenseCount: visibleExpenses.length,
    invisibleExpenseCount: state.expenses.length - visibleExpenses.length,
    visibleExpensesTotal: selectExpensesTotal(visibleExpenses),
    invisibleExpensesTotal: selectExpensesTotal(invisibleExpenses) - selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);