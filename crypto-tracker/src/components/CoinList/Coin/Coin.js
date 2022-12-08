const Coin = ({ name, acronym, value, cap }) => {
   

	return (
		<div>
			{name}
			<ul>
				<li>Acronym: {acronym}</li>
				<li>
					Current value:$
					{String(value)
			.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
			.trim()}
				</li>
				<li>
					Market cap:$
					{String(cap)
			.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
			.trim()}
				</li>
			</ul>
		</div>
	)
}

export default Coin
