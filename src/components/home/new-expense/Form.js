import { useState } from "react";
const FormAddExpense = (props) => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredDate, setDate] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const setTitleHandler = (event) => {
    setTitle(event.target.value);
  };
  const setAmountHandler = (event) => {
    setAmount(event.target.value);
  };
  const setDateHandler = (event) => {
    setDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    
    const newExpense = {
      title: enteredTitle,
      date: enteredDate,
      amount: +enteredAmount,
    };
    props.onFormSubmission(newExpense);
    setTitle("");
    setDate("");
    setAmount("");
  };

  return (
    <form onSubmit={submitHandler}>
      <label>
        Title:
        <input type="text" value={enteredTitle} onChange={setTitleHandler} />
      </label>
      <label>
        Date:
        <input
          type="date"
          min="2019-01-01"
          value={enteredDate}
          onChange={setDateHandler}
        />
      </label>
      <label>
        Amount:
        <input
          type="Number"
          min="5"
          value={enteredAmount}
          onChange={setAmountHandler}
        />
      </label>
      <button type="submit">Add Expense</button>
    </form>
  );
};
export default FormAddExpense;
