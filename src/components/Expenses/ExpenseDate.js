import React from "react";
import "./ExpenseDate.css";
const ExpenseDate = ({ date }) => {
  const month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(
    date
  ); //date.getMonth("en-US", { month: "long" });
  const year = date.getFullYear();
  const day = new Intl.DateTimeFormat("en-US", { day: "2-digit" }).format(date);
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
