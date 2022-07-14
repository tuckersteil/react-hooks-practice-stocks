import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolioStocks}) {
  console.log(portfolioStocks)

  function handleDelete(e){
    console.log(e)
  }
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolioStocks.map(stock=> (
          <Stock key={stock.id} stock={stock} />
      ))}
    </div>
  );
}

export default PortfolioContainer;
