import React from "react";
import {create} from "ipfs-http-client";
import pinataSDK from '@pinata/sdk';

const ipfs = create({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
});

export default class Create extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            NFTName: "",
            tokenURI: '',
            hash:'',
            buffer:null,
        }
    }

    onSubmit = async(e) => {
        e.preventDefault();
        let result  = await ipfs.add(this.state.buffer);
        this.setState({hash : result.path});
        let tokenURI = `https://ipfs.infura.io/ipfs/${result.path}`;
        this.setState({tokenURI});
        this.props.NFTContract.methods.createNFT(this.state.NFTName, tokenURI, 0).send({
            from:this.props.accountAddress, gas:'3000000'
        });
        console.log("NFT Name : ", this.state.NFTName, this.state.tokenURI);
    }

    onChange = (e) => {
        e.preventDefault();
        let file = e.target.files[0];
        let reader = new window.FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = () =>{
            this.setState({
                buffer:Buffer(reader.result),
            })
            console.log("buffer : ", this.state.buffer);
        }
    }

    render(){
        return(
            <div>
                <div className="jumbotron h-10">
                    <h1 className="display-5">Create Your Own NFT</h1>
                </div>
                <div className="p-3 jumbotron mt-1 h-100 border" style={{textAlign:"center"}}>
                    <form onSubmit={this.onSubmit} style={{textAlign:"center"}}>
                        <input className="form-control-lg text-align:center" type="file" style={{textAlign:"center"}} onChange={this.onChange}></input>
                        <br/>
                        <input
                            required
                            type="text"
                            value={this.state.NFTName}
                            className="form-control"
                            placeholder="Enter Your NFT Name"
                            style={{textAlign:"center"}}
                            onChange = {(e) => 
                                this.setState({
                                    NFTName: e.target.value
                                })
                            }
                        >
                        </input>
                        <button className="btn btn-outline-primary mt-3" style={{ width:"200px",textAlign:"center",background:"white",fontSize: "1.0rem", letterSpacing: "0.10rem" }}>
                            Create
                        </button>
                        <br/><br/>
                        <p>
                            <span>Image Preview URL : {this.state.hash === "" 
                                ? "NULL" 
                                : <a href={`https://ipfs.infura.io/ipfs/${this.state.hash}`} target="_blank" 
                                    style={{color:"blue"}} rel="noopener noreferrer">{`https://ipfs.infura.io/ipfs/${this.state.hash}`}</a> } 
                            </span>
                        </p>
                        <img src={`https://ipfs.infura.io/ipfs/${this.state.hash}`} 
                            style={{width:"400px" , height:"400px",visibility: (this.state.hash == '') ? 'hidden' : 'visible'}}></img>
      
                    </form>
                </div>
            </div>
        )
    }
}