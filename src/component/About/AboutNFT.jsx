import { Typography, Switch } from 'antd';
import React from "react"
const { Paragraph} = Typography;

const AboutNFT = () => {
  const [ellipsis, setEllipsis] = React.useState(true);

  return (
    <div>
    <div className="jumbotron">
        <h1 className="display-10">About NFT & DAPP</h1>
    </div>
    <div className='jumbotron'>
      <p className='lead'>
        A non-fungible token (<i>NFT</i>) is a non-interchangeable[clarification needed] unit of data stored on a 
        blockchain, a form of digital ledger, that can be sold and traded.[1] Types of NFT data units may 
        be associated with digital files such as photos, videos, and audio. Because each token is uniquely 
        identifiable, NFTs differ from blockchain cryptocurrencies, such as Bitcoin.  
      </p>
      <p className='lead'>
        NFT ledgers claim to provide a public certificate of authenticity or proof of ownership,
        but the legal rights conveyed by an NFT can be uncertain. NFTs do not restrict the sharing 
        or copying of the underlying digital files, do not necessarily convey the copyright of the 
        digital files, and do not prevent the creation of NFTs with identical associated files.
      </p>
      <p>
      <p className='lead'>
        A decentralised application (DApp, dApp, Dapp, DApp, or DAPP) is an application that can operate autonomously, 
        typically through the use of smart contracts, that runs on a decentralized computing, blockchain system. 
        Like traditional applications, DApps provide some function or utility to its users. However, unlike 
        traditional applications, DApps operate without human intervention and are not owned by any one entity, 
        rather DApps distribute tokens that represent ownership. These tokens are distributed according to a 
        programmed algorithm to the users of the system, diluting ownership and control of the DApp. 
        Without any one entity controlling the system, the application becomes decentralised.Decentralised 
        applications have been popularised by distributed ledger technologies (DLT), such as the Ethereum 
        blockchain, on which DApps are built.
      </p>
      <a href='https://www.theverge.com/22310188/nft-explainer-what-is-blockchain-crypto-art-faq'
        style={{color:"blue",fontSize:"18px"}} target="_blank" 
      >
        What is NFT?
      </a>
      <br/>
      <a href='https://ethereum.org/en/developers/docs/dapps/'
        style={{color:"blue",fontSize:"18px"}} target="_blank" 
      >
        What is DAPP?
      </a>
      &nbsp;<br/><br/> 
      <a href='https://ethereum.org/en/nft/' target="_blank" >
        <h5 className='font-weight'>Click Here to Learn More</h5>
      </a>
      </p>
    </div>
    </div>
  );
};

export default AboutNFT;