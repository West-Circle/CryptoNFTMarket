import React, { useState, useEffect } from "react";
import MyNFTInfo from "./MyNFTInfo";
import {Row, Col} from "antd"
const MyNFT = ({
    accountAddress,
    NFTs,
    NFTContract,
    NFTNumOfAccount,
    Auctions,
    currentTime, 
}) => {
    const [loading,setLoading] = useState(false);
    const [myNFTs, setMyNFTs] = useState([]);
    useEffect(() => {
        if(NFTs.length !== 0){
            if(NFTs[0].metaData !== undefined){
                setLoading(loading)
            }else{
                setLoading(false);
            }
        }
        const myNFTs = NFTs.filter(
            (NFT) => NFT.currentOwner === accountAddress
        );
        setMyNFTs(myNFTs);
    }, [NFTs]);

    return(
        <div>
            <div className="card mt-1">
                <div className="card-body align-items-center d-flex justify-content-center">
                    <h5>
                    Total Number of NFTs Own : {NFTNumOfAccount}
                    </h5>
                    
                </div>
            </div>
            <div className="d-flex flex-wrap mb-2">
                {myNFTs.map((NFT) => {
                    return (
                        <div key={NFT.tokenID} style={{textAlign:"center"}} className="w-100 p-10 mt-1 mb-1 border">
                            <Row>
                                <Col>
                                    <img src={NFT.tokenURI} id="preview_img" width="250px" height="250px" alt=""></img>
                                    <br/>
                                    <br/>
                                    <p>
                                        <span className="font-weight-bold">Image Preview URL</span>
                                        :{" "}
                                        <a href={`${NFT.tokenURI}`} target="_blank" rel="noopener noreferrer">{NFT.tokenURI}</a>
                                    </p>
                                    <MyNFTInfo
                                        NFT={NFT}
                                        accountAddress={accountAddress}
                                        NFTContract={NFTContract}
                                        Auction={Auctions[parseInt(NFT.tokenID)-1]}
                                        currentTime={currentTime}
                                    />
                                </Col>
                            </Row>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default MyNFT;