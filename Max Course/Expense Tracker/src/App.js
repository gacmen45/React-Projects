import React,{useState} from 'react'

import NewExpense from './components/NewExpense/NewExpense'
import Expenses from './components/Expenses/Expenses'

const DUMMY_EXPENSES = [
	{
		id: 'e1',
		title: 'Karma dla pieska',
		amount: 189,
		date: new Date(2022, 9, 2),
	},
	{
		id: 'e2',
		title: 'Bigos',
		amount: 8.9,
		date: new Date(2022, 9, 1),
	},
	{
		id: 'e3',
		title: 'Hantle',
		amount: 89,
		date: new Date(2022, 8, 22),
	},
]


function App() {
	const [expenses,setExpenses]=useState(DUMMY_EXPENSES)
	
const addExpenseHandler = expense => {
	setExpenses(prevExpenses=>{
		return [expense,...prevExpenses]
	})
}

	return (
		<div>
			<NewExpense onAddExpense={addExpenseHandler}/>
			<Expenses items={expenses} />
		</div>
	)
}

export default App
