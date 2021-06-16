import React from 'react'

const Options = (props) => {
    const checkChecked = (event) => {
        if(event.target.checked === true) {
            props.addBlackList(event.target.value);
        }
        else {
            props.removeBlackList(event.target.value);
        }
    }

    return (
        <div>
            <h2>Blacklist These from my joke!</h2>
            <input type="checkbox" value="nsfw" onChange={checkChecked} />NSFW <br/>
            <input type="checkbox" value="religious" onChange={checkChecked} />RELIGIOUS <br/>
            <input type="checkbox" value="political" onChange={checkChecked} />POLITICAL <br/>
            <input type="checkbox" value="racist" onChange={checkChecked} />RACIST <br/>
            <input type="checkbox" value="sexist" onChange={checkChecked} />SEXIST <br/>
            <input type="checkbox" value="explicit" onChange={checkChecked} />EXPLICIT <br/>
        </div>
    )
}

export default Options