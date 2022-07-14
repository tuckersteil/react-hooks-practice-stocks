import React, {useEffect, useState} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const[stocks, setStocks]=useState([])
  const[portfolioStocks, setPortfolio]=useState([])

  useEffect(()=> {
    fetch("http://localhost:3001/stocks")
    .then((r) => r.json())
    .then((listing) => setStocks(listing));
  },[])
  function addToPortfolio(ownedStock){
    if (portfolioStocks.includes(ownedStock)){
      return 
    }
    else{
      setPortfolio([...portfolioStocks, ownedStock])
    }
  }
  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer onAddStock={addToPortfolio}stocks={stocks}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioStocks={portfolioStocks}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
