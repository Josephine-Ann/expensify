import React from 'react'; 
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, description, amount, createdAt, id }) => (
    <div>
    <p>{description}</p>
    <p>{amount}</p>
    <p>{createdAt}</p>
    <button onClick={() => {
        dispatch(removeExpense(id));
    }}>Remove</button>
    </div>
);

export default connect()(ExpenseListItem);

// import React from 'react';
// import { connect } from 'react-redux';
// import { setTextFilter } from '../actions/filters';

// const ExpenseListFilters = (props) => (
//     <div>
//     <input type="text" value={props.filters.text} onChange={(e) => {
//         props.dispatch(setTextFilter(e.target.value));
//         console.log(e.target.value)
//     }}/>
//     </div>
// );

// const mapStateToProps = (state) => {
//     return {
//         filters: state.filters
//     }
// }

// export default connect(mapStateToProps)(ExpenseListFilters);
