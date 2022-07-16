import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const dummy_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const dataFinal = (data) => {
    console.log(data);
    const dataDateConverted = data.map((element) => {
      return {
        ...element,
        date: new Date(Date.parse(element.date)),
      };
    });
    return dataDateConverted;
  };

  let data = JSON.parse(localStorage.getItem("List"));
  if (!data) {
    localStorage.setItem("List", JSON.stringify(dummy_DATA));
    const localStorageNoData = dataFinal(data);
    data = localStorageNoData;
  } else {
    const localStorageHaveData = dataFinal(data);
    data = localStorageHaveData;
  }

  const [expenses, setExpenses] = useState(data);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
    alert("Addedd Successfully :)");
  };
  localStorage.setItem("List", JSON.stringify(expenses));

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
