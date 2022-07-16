import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = ({ onSaveExpenseData, onCancel }) => {
  const [userInput, setUserInput] = useState({
    title: "",
    date: "",
    amount: "",
  });
  const ChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserInput((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: userInput.title,
      amount: userInput.amount,
      date: new Date(userInput.date),
    };
    onSaveExpenseData(expenseData);
    setUserInput({
      title: "",
      date: "",
      amount: "",
    });
    console.log("ExpenseForm", expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={userInput.title}
            type="text"
            name="title"
            onChange={ChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={userInput.amount}
            type="number"
            name="amount"
            min="0.01"
            step="0.01"
            onChange={ChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={userInput.date}
            name="date"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={ChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
