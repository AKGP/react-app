import React, { Component } from 'react';
import User from './user';
import Add from './add';
class Users extends Component {
    state = {
        title: "User list",
        users: [{
            age: 20,
            name: "Ajay"
        },
        {
            age: 30,
            name: "Pappu"
        },
        {
            age: 15,
            name: "Ayesha"
        },
        {
            age: '7',
            name: "Tejas"
        }],
        name:'ajay part two '
    }

    makeYounger = () => {
        let newState = this.state.users.map(user => {
            if (user.age > 0) {
                user.age -= 10;
                if(user.age<0){
                    user.age = "cant be negative"
                }
            }
        });

        this.setState({
            newState
        })
    }

    changeValue = (event)=>{
        this.setState({
            name: event.target.value
        });
    }
    render() {
        return (
            <div>
                <h2>1. {this.state.title}</h2>
                {
                    this.state.users.map(user => {
                        return <User age={user.age}>{user.name}</User>
                    })  
                }
                <button onClick={this.makeYounger}>Change</button>


                <Add changeValue={this.changeValue} name={this.state.name}></Add>
            <p>{this.state.name}</p>
            </div>
        );

    }

}


export default Users;