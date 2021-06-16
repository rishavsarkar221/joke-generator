import React, { useState } from 'react'

const Categories = (props) => {
    const [disabled, setDisabled] = useState(true);
    const [checked, setChecked] = useState(false);

    const radioChecked = (event) => {
        if(event.target.checked === true) {
            if(event.target.value === "Any") {
                props.categories__any(event.target.value);
                setDisabled(true);
                setChecked(false);
            }
            else if(event.target.value === "Custom") {
                props.categories__custom(event.target.value);
                setDisabled(false);
            }
        } else return;
    }

    const checkboxChecked = (event) => {
        if(event.target.checked === true) {
            props.addCustomCategory(event.target.value);
        }
        else {
            props.removeCustomCategory(event.target.value);
        }
    }

    return (
        <div>
            <h2>I want these types of jokes</h2>

            <input type="radio" value="Any" name="category" defaultChecked={true} onClick={radioChecked} />Any <br/><br/>
            <input type="radio" value="Custom" name="category" onClick={radioChecked} />Custom: <span style={{marginLeft: '5%'}}></span>
            
            <input type="checkbox" value="Programming" disabled={disabled} onClick={checkboxChecked} defaultChecked={checked} />Programming
            <input type="checkbox" value="Misc" disabled={disabled} onClick={checkboxChecked} defaultChecked={checked} />Misc
            <input type="checkbox" value="Dark" disabled={disabled} onClick={checkboxChecked} defaultChecked={checked} />Dark
            <input type="checkbox" value="Pun" disabled={disabled} onClick={checkboxChecked} defaultChecked={checked} />Pun
            <input type="checkbox" value="Spooky" disabled={disabled} onClick={checkboxChecked} defaultChecked={checked} />Spooky
            <input type="checkbox" value="Christmas" disabled={disabled} onClick={checkboxChecked} defaultChecked={checked} />Christmas
        </div>
    )
}

export default Categories