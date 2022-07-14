import React from "react";

function Stock({stock, portfolioStocks, onAddStock, onDelete}) {
 const {id, ticker, name, price} = stock
 

 function handleClick(){
     onAddStock(stock)
   }
   
 
  return (
    <div>
      <div className="card">
        <div className="card-body" onClick={handleClick}>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
