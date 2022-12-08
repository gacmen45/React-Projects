import React, { useState } from 'react'

import './Counter.css'

const Counter = () => {
	let number = 0
	const [count, setCount] = useState(number)

	const ascendingHandle = () => {
		setCount(count + 1)
	}
	const descendingHandle = () => {
		setCount(count - 1)
	}
	const resetHandle = () => {
		setCount(0)
	}

	return (
		<div className='wrapper'>
			<h1>Simple Counter in React</h1>
			<div>
				<div className='counter'>{count}</div>
				<div>
					<button onClick={descendingHandle}>-1</button>
					<button onClick={ascendingHandle}>+1</button>
				</div>
			</div>
			<button onClick={resetHandle}>Reset</button>
		</div>
	)
}

export default Counter
