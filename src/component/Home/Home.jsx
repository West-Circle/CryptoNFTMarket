import React from 'react';

const Home = ({ accountAddress, accountBalance, NFTCount }) => {
    console.log("home")
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-5">NFT Auction House</h1>
          <p className="lead">
            Welcome to NFT Auction House
            You Can Create Your Own ERC721 implemented <i>NFTs</i> and Sell Them On The Market.
          </p>
          <hr className="my-5" />
          <div style={{textAlign:"center"}}>
            <p>
              <span className="font-weight-bold" style={{fontSize:"25px",fontStyle:"initial"}}>
              Total Number of NFTs on the Market : {NFTCount}
              </span>
              
            </p>  
          </div>
          <hr className="my-5" />
          <p className="lead">Account Address :
          <h3>{accountAddress}</h3>
          </p>
          <p className="lead">Account Balance :
          <h3>{accountBalance} ETH</h3>
          </p>
          
        </div>
      </div>
    );
  };

export default Home;