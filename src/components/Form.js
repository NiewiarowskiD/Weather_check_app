import React from "react";

const Form = props => {
    return (
        <form className="Form_container" onSubmit={props.submit}>
            <h2>Check the weather!</h2>
            <input
                className="Input1"
                type="text"
                value={props.value}
                onChange={props.change}
                placeholder="enter the city name"
            />
            <button className="Btn1">Search</button>
        </form>
    );
}


export default Form