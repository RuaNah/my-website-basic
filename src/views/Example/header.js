import React from "react";


class Header extends React.Component{
    state = {
        name:"Quốc Huy",
        day:5
    }
    handleCLick =()=>{
        alert(1);
    }
    render(){
        return(
            <div>
               <p>Đây là Component mới</p>
               <p>Tôi tên là {this.state.name}</p>
               <button onClick={this.handleCLick}>Click here</button>
            </div>
        )
    }
}

export default Header;