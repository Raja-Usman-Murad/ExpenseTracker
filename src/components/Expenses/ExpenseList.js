import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = ({ filteredExpenses }) => {
  if (filteredExpenses.length > 0) {
    return filteredExpenses.map(({ id, title, amount, date }) => {
      return (
        <ExpenseItem
          key={id}
          id={id}
          title={title}
          amount={amount}
          date={date}
        ></ExpenseItem>
      );
    });
  } else {
    return <h2 className="expenses-list__fallback">Found No Expenses.</h2>;
  }
};
export default ExpenseList;
