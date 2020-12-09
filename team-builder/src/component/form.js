import React from 'react';

function Form(props){
    return(

    
    <form onSubmit={props.onFSubmit}>
        
        <label>Name:
            <input
            onChange={props.onInputChange}
            value={props.teamInfo.fName}
            name='fName'
            type='text'
        />
        </label>
        <label>Email:
            <input
            onChange={props.onInputChange}
            value={props.teamInfo.email}
            name='email'
            type='email'
            />
        </label>
        <label>Role:
            <input
            onChange={props.onInputChange}
            value={props.teamInfo.role}
            name='role'
            type='text'
            />
        </label>
        <button>Submit</button>
    </form>
    )
}

export default Form;