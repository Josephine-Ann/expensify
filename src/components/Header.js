import React from 'react';
import { NavLink } from 'react-router-dom';
import ExpenseSummary from './ExpenseSummary';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';


export const Header = ({ startLogout }) => (
    <header>
        <h1>Expensify</h1>
        <ExpenseSummary/>
        <NavLink to="/dashboard" activeClassName="is-active">Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create an expense</NavLink>
        <button onClick={startLogout}>Logout</button>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})  

export default connect(undefined, mapDispatchToProps)(Header);

