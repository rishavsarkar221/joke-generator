import React from 'react'

const Joke = (props) => {
    return (
        <div>
            <br/>
            {
                props.data === undefined ? <h3>Sorry no jokes found in this filter 😥 Try other filters to see if it works</h3>
                : <h3>{props.data}</h3>
            }
        </div>
    )
}

export default Joke