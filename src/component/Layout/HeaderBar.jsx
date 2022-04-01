import React from "react";
import { Link } from "react-router-dom";

const Headerbar = () => {
    console.log("header")
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand ml-2">
            Crypto NFT Auction House
        </Link>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarNav" className="collapse navbar-collapse">
          <ul
            style={{ fontSize: "0.8rem", letterSpacing: "0.2rem" }}
            className="navbar-nav ml-auto"
          >
            <li className="nav-item">
              <Link to="/market" className="nav-link">
                Market
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/create" className="nav-link">
                Create
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/my-nfts" className="nav-link">
                My NFTs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/search" className="nav-link">
                Search
              </Link>
            </li>
            <li className="nav-item">
                <Link to="/aboutme" className="nav-link">
                    About Me
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/aboutnft" className="nav-link">
                    About NFT
                </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Headerbar;
