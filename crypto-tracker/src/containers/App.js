import React, {Component} from 'react'
import Coin from '../components/CoinList/Coin/Coin';
import Header from '../components/Header/Header';
import './App.css';


class App extends Component {
state = {
  cryptos: [
    {name:"Bitcoin", acronym:"BTC", value:1948159, cap:372711793629},
    {name:"Ethereum", acronym:"ETH", value:133170, cap:63303802831},
    {name:"Tether", acronym:"USDT", value:1, cap:67960294726},
{name:"USD Coin", acronym:"USDC", value:1, cap:47668092147}  
  ],
  marketCap:94358251310674,
}

  render(){
  return (
    <div className="App">
      <Header cap={this.state.marketCap}/>
     <Coin 
     name={this.state.cryptos[0].name}
     acronym={this.state.cryptos[0].acronym}
     value={this.state.cryptos[0].value}
     cap={this.state.cryptos[0].cap}
     />
     <Coin 
     name={this.state.cryptos[1].name}
     acronym={this.state.cryptos[1].acronym}
     value={this.state.cryptos[1].value}
     cap={this.state.cryptos[1].cap}
     />
     <Coin 
     name={this.state.cryptos[2].name}
     acronym={this.state.cryptos[2].acronym}
     value={this.state.cryptos[2].value}
     cap={this.state.cryptos[2].cap}
     />
     <Coin 
     name={this.state.cryptos[3].name}
     acronym={this.state.cryptos[3].acronym}
     value={this.state.cryptos[3].value}
     cap={this.state.cryptos[3].cap}
     />
     
    </div>
  );}
}

export default App;


