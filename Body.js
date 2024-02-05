import React, {useState} from "react";

const Body=()=> {
  
    return (
      <div className="token-swap-container">
        
        <div className="input-container">
          <label htmlFor="inputToken">RBNT :</label>
          <input
            type="text"
            className="inputToken"
          />
        </div>
  
        <div className="output-container">
          <label htmlFor="outputToken">My Token :</label>
          <input
            type="text"
            className="outputToken"
          />
        </div>
  
        <button>Swap Tokens</button>
      </div>
    );
}

export default Body;