const Header = ({ cap }) => {
	

	return (
		<div>
			<h1>CryptoTracker</h1>
			<p>
				Market Cap:$
				{String(cap)
			.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
			.trim()}
			</p>
		</div>
	)
}

export default Header
