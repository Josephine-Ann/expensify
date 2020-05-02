import React from 'react';
import { NavLink } from 'react-router-dom';
import ExpenseSummary from './ExpenseSummary';


const Header = () => (
    <header>
        <h1>Expensify</h1>
        <ExpenseSummary/>
        <NavLink activeClassName="isActive" exact={true} to="/">Dashboard</NavLink>
        <NavLink activeClassName="isActive" to="/create">Create an expense</NavLink>
        <NavLink activeClassName="isActive" to="/help">Help</NavLink>
    </header>
);

export default Header;

