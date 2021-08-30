
import ExpenseForm from './ExpenseForm'
import './NewExpense.css';
import {useState} from 'react';



const NewExpense = (props) => {
    const[showForm, setShowForm] = useState(false);

        const saveExpenseDataHandler = (enteredExpenseData)=> {
            const expenseData = {
                ...enteredExpenseData,
                id: Math.random().toString(),
            }
         props.onAddExpense(expenseData);
        }

    const addNewHandler = () => {
      setShowForm(true);
    };

    const cancelbtnHandler =() => {
      setShowForm(false);
    };

    return(
        <div className='new-expense'>
            {!showForm && <button onClick={addNewHandler}>Add New Expense</button>}
            {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onClick={cancelbtnHandler}/>}
          
           
        </div>
    )

};


export default NewExpense; 