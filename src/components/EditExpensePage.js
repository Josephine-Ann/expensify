import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import DeleteModal from './DeleteModal'

export class EditExpensePage extends React.Component {
    state = {
        deletedOption: false
    };
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    onRemove = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    }
    onSelect = () => {
        this.setState({ deletedOption: true })
    }
    clearStateCloseModal = () => {
        this.setState(() => ({ deletedOption: null  }));
      }
    render() {
        return (
            <div>
                <div className="content-container">
                    <div className="page-header">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                    <ExpenseForm 
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.onSelect}>Remove expense</button>
                    <DeleteModal
                    modalOpen={this.state.deletedOption}
                    clearStateCloseModal={this.clearStateCloseModal}
                    onRemove={this.onRemove}
                    />
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id )
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
     startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);


 // yarn add react-modal@2.2.2
// make a new component 
// import Modal from 'react-modal';
// default arrow function with props 
// <Modal isOpen={!!props.selectedOption} (will resolve to true/false) contentLabel="Selected Option ">
// </Modal>
// above layer, track selectedOption as undefined
// Pass it down to option modal in render of that layer,
// handleDeleteOption = (optionToRemove) => {
// selectedOption={this.state.selectedOption}
//this.setState((prevState) => ({
//    options: prevState.options.filter((option) => optionToRemove !== option)
// }))}