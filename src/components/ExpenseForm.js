import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import { addExpense } from '../actions/expenses';

const now = moment();

export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            description: props.expense ? props.expense.description : "",
            note: props.expense ? props.expense.note : "",
            amount: props.expense ? (props.expense.amount / 100).toString() : "",
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }; 
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: "Please give description and amount" }));
        } else {
            //props.dispatch(addExpense({ description: this.state.description, note: this.state.note, amount: this.state.amount, createdAt: this.state.createdAt }))
            this.setState(() => ({ error: "" }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
             })
        }
    }
    render () {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.onSubmit}>
            <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
            />
            <SingleDatePicker 
            date={this.state.createdAt} // represents where you want to start
            onDateChange={this.onDateChange} // when someone picks a day 
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1} // how many months shown
            isOutsideRange={(day) => false } // What is the logic for when you can choose date? we have no restrictions
            />
            <input
            type="test"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
            />
            <textarea 
            value={this.state.note}
            onChange={this.onNoteChange}
            placeholder="Add a note for your expense (optional)">
            </textarea>
            <button>Add Expense</button>
            </form>
            </div>
        )
    }
}

