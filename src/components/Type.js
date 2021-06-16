import React from 'react'

const Type = (props) => {
    const onCheckHandler = (event) => {
        if(event.target.checked === true) {
            if(event.target.value) {
                props.type__single(event.target.value);
            }
            else {
                props.type__twopart(event.target.value);
            }
        } 
        else return;
    }

    return (
        <div>
            <h2>What type of jokes I want?</h2>
            <input type="radio" name="type" value="single" defaultChecked={true} onClick={onCheckHandler} />Single
            <input type="radio" name="type" value="twopart" onClick={onCheckHandler} />Twopart
        </div>
    )
}

export default Type