
import "./ExpenseDisplay.css";
import ExpensesFilter from "./filter/Filter";
import Card from "./Card";

import {useState} from 'react';
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';


function ExpenseDisplay(props) {
    const [year, setYear] = useState('');

        const saveFilteredYearHandler =(year) => {
            setYear(year);
          
          
        }

        const filteredExpenses = props.expenses.filter(expense => {
            return expense.date.getFullYear().toString() === year;
        });

        

    return (
        <div className="expenses">
            <Card>
            <ExpensesFilter onSaveFilter={saveFilteredYearHandler} />
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpensesList expenses={filteredExpenses}/>
            </Card>
       
       
        </div>
    )
}

export default ExpenseDisplay;