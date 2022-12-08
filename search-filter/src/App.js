
import React,{useState} from 'react'
import JSONDATA from './MOCK_DATA.json'
import './App.css'


function App() {
	const [serchTerm,setSearchTerm]= useState('')

const changeValue =(e)=>{
	setSearchTerm(e.target.value)
}

	return (
		<div className='app'>
			<input type='text' placeholder='Search...' onChange={changeValue} />
			{JSONDATA.filter((val)=>{
				if(serchTerm === ''){
					return val
				}else if(val.first_name.toLowerCase().includes(serchTerm.toLocaleLowerCase())){
					return val
				}
			}).map((val, key) => {
				return (<div key={key}>
					<p>{val.first_name}</p>
				</div>
					
				)
			})}
		</div>
	)
}

export default App
