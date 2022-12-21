import TradingViewWidget, { Themes, IntervalTypes } from 'react-tradingview-widget';


const Trading = () => (
   
  <div class="chartview" style={{height:"600px",width:"1500px",marginLeft:"10px"}}>
    <TradingViewWidget
      symbol="NASDAQ:AAPL"
      theme={Themes.DARK}
      locale="fr"
      autosize
      symbol="BINANCE:BTCPERP"
      interval={IntervalTypes.D}
      timezone="Etc/UTC"
      style="1"
      locale="in"
      />
  </div>
);

export default Trading;