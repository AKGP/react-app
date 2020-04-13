import React from 'react';





function Add(props){
    return <div>
        <h2>2. Add Component</h2>
        <br>
        </br>
        <input type="text" onChange={(e)=>{props.changeValue(e)}} value = {props.name}></input>
    </div>
}

export default Add;
