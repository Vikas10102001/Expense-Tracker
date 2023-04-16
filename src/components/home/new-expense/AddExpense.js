// import "./AddExpense.css"
import Form from "./Form"
import "./Form.css"
const AddExpense = (props) => {
   const addNewExpenseItem = (newAddedExpense) => {
      props.onGettingNewExpense(newAddedExpense)
   }
   return (
      <Form onFormSubmission={addNewExpenseItem} />
   )
}
export default AddExpense