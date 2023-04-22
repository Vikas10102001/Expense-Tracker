import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import "./DeleteExpenseButton.css";
import { getDatabase, ref, remove } from "firebase/database";
import { dispatchAlert } from "../../../utils/alert";
export default function DeleteExpenseButton({ expense }) {
  const handleDeleteExpense = () => {
    const expenseId = expense.key;
    const user = JSON.parse(localStorage.getItem("user"));
    const db = getDatabase();
    const expenseRef = ref(db, "expenses/" + user.uid + "/" + expenseId);
    console.log(expenseRef);
    remove(expenseRef)
      .then(() => {
        dispatchAlert("Expense deleted successfully", "success");
      })
      .catch((error) => {
        console.log("error",error)
        dispatchAlert("Cant perform this action right now", "error");
      });
  };
  return (
    <FaTimesCircle className="deleteButton" onClick={handleDeleteExpense} />
  );
}
