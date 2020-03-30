import React from 'react'; 
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
    <div>
    <Link to={`/edit/${id}`}>
    <p>{description}</p>
    </Link>
    <p>{createdAt} - {amount}</p>
    </div>
);

export default ExpenseListItem;

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
// localhost: 8080/edit/123423
