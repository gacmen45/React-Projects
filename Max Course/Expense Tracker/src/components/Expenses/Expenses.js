import React, { useState } from 'react'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import ExpenseList from './ExpenseList'
import ExpensesChart from './ExpensesChart'
import './Expenses.css'

const Expenses = props => {
	const [filteredYear, setFilteredYear] = useState('2022')

	const filterChangeHandler = selectedYear => {
		setFilteredYear(selectedYear)
		console.log(`in EXPENSE ${filteredYear}`)
	}

	const filteredExpenses = props.items.filter(expense => {
		return expense.date.getFullYear().toString() === filteredYear
	})

	

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
			<ExpensesChart expenses={filteredExpenses}/>
				<ExpenseList items={filteredExpenses}/>
			</Card>
		</div>
	)
}

export default Expenses
