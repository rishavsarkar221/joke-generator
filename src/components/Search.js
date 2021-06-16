import React from 'react'

const Search = (props) => {
    const onChangeHandler = (event) => {
        props.search(event.target.value);
    }

    return (
        <div>
            <label>Search for a joke that contains this string: </label>
            <input type="text" onChange={onChangeHandler} />
        </div>
    )
}

export default Search