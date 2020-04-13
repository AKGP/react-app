import React from 'react';
const User = (props) => {
    let age = props.age ? props.age : 'NA';

    return (
    <div>{props.children} | Age: {age}</div>
    );
}


export default User;