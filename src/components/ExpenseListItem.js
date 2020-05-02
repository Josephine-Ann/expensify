import React from 'react'; 
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
    <div>
    <Link to={`/edit/${id}`}>
    <p>{description}</p>
    </Link>
    <p>
    {numeral(amount/ 100).format('$0,0.00')}
    - 
    {moment(createdAt).format('MMMM Do, YYYY')} 
    </p>
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
