import ExpenseDisplay from "./components/ExpenseDisplay";
import NewExpense from "./components/NewExpenseFolder/NewExpense";
import {useState} from 'react';

const dummyExpenses = [
  {
    id: 'e1',
    title: 'Toiletries',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];



function App() {
  const[expenses, setExpenses] = useState(dummyExpenses);


  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...expenses];
     });
   
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
     <ExpenseDisplay expenses={expenses}/>
     
    
    </div>
  );
}

export default App;