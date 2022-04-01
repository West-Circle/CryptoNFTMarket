import React from "react"
import { useState,useEffect } from "react";
import {Row, Col} from "antd"
import NFTList from "./NFTList"

const Market = ({
    NFTs,
    accountAddress,
    NFTCount,
    NFTContract,
    Auctions,
}) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(NFTs.length !== 0){
            if(NFTs[0].metaData !== undefined){
                setLoading(loading);
            }
            else setLoading(false);
        }
    }, [NFTs]);

    return(
        <div>
            <div className="jumbotron">
                <h1 className="display-5"> NFT Auction Market</h1>
                </div>
            <div className="card w-100 mt-1">
                <div className="card-body align-items-center d-flex justify-content-center">
                    <h5>
                        Total number of NFTs on the platform : {NFTCount}
                    </h5>
                </div>
            </div>
            <div className="d-flex flex-wrap mb-2">
                {NFTs.map((NFT) => {
                    return(
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
                                    <NFTList NFT={NFT}
                                        accountAddress={accountAddress}
                                        NFTContract={NFTContract}
                                        Auction={Auctions[parseInt(NFT.tokenID)-1]}
                                    />
                                </Col>
                            </Row>
                            
                        </div>
                    )
                })}
            </div>
            
        </div>
    )
}

export default Market;