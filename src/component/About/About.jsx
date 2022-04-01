import React from "react"
import wechatcode from "./wechatcode.jpg"
import {Descriptions, Image, Button,Layout} from 'antd'
export default class About extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'Peter',
            email:'westcircle0608@gmail.com',
            school:'浙江大学',
            class:
            <div>
                浙江大学计算机科学与技术学院 软件工程1902班
            </div>,
            hidden:true,
            preview:false,
            buttonvalue:"隐藏"
        }
        this.toggleShow = this.toggleShow.bind(this);
    }
    toggleShow(){
        this.setState({
            hidden: !this.state.hidden,
            preview : !this.state.preview,
        })
    }
    render(){
        return(
            <div>
            <div className="jumbotron">
                <h1 className="display-10">About Me</h1>
            </div>
            <div className="jumbotron">
                <div className="d-flex flex-wrap mb-2">
                    <div style={{textAlign:"center"}} className="w-100 p-10 mt-1 mb-1 border">
                        <Descriptions contentStyle={{fontSize:"20px",textAlign:"center"}} bordered size={'default'} column={1}>
                            <Descriptions.Item label="开发者昵称">{this.state.name}</Descriptions.Item>
                            <Descriptions.Item label="邮箱">{this.state.email}</Descriptions.Item>
                            <Descriptions.Item label="学校名称">{this.state.school}</Descriptions.Item>
                            <Descriptions.Item label="班级">{this.state.class}</Descriptions.Item>
                            <Descriptions.Item label="联系方式">
                                <Image src={wechatcode} alt="微信二维码" 
                                style={{width:"200px", height:"200px",visibility:(this.state.hidden) ? 'hidden' : 'visible'}} 
                                preview={this.state.preview}>
                                </Image>
                                <br/>
                                <button className="btn btn-primary " 
                                onClick={this.toggleShow} >
                                    {this.state.hidden ?  "显示" : "隐藏" }
                                </button>
                            </Descriptions.Item>
                        </Descriptions>
                    </div>
                </div>
            </div>
            </div>
        )
    }
} 