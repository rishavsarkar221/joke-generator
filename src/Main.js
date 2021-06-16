import React, { useState } from 'react';
import Options from './components/Options';
import Categories from './components/Categories';
import Joke from './components/Joke';
import Type from './components/Type';
import axios from 'axios';
import Search from './components/Search';

const App = () => {
	const [blacklists, setBlacklists] = useState([]);
	const [categories, setCategories] = useState("Any");
	const [type, setType] = useState("single");
	const [searchedValue, setSearchedValue] = useState("");
	const [data, setData] = useState("");
	const [path, setPath] = useState("https://v2.jokeapi.dev/");

	//Handles Categories
	const categories__any = (value) => {
		setCategories(value);
	}

	const categories__custom = (value) => {
		setCategories([]);
	}

	const addCustomCategory = (value) => {
		setCategories((oldVal) => [...oldVal]);
		setCategories((oldVal) => [...oldVal, value]);
	}

	const removeCustomCategory = (value) => {
		setCategories(oldVal => oldVal.filter(val => val !== value))
	}

	console.log(categories)

	//Handles BlackLists
	const addBlackListHandler = (value) => {
		setBlacklists(oldLists => [...oldLists, value]);
	}

	const removeBlackListHandler = (value) => {
		setBlacklists(oldLists => oldLists.filter(removeVal => removeVal !== value));
	}

	console.log(blacklists)



	//Handles Type (single or twopart)
	const type__single = (value) => {
		setType(value);
	}

	const type__twopart = (value) => {
		setType(value);
	}

	
	//Handles Search
	const search = (value) => {
		setSearchedValue(value);
	}


	//Main API THINGY!
	let showBlacklist = "";

    const sendJoke = () => {
        if(blacklists.length === 0) {
            showBlacklist = "";
        } else {
            showBlacklist = "?blacklistFlags=";
        }

        const getJoke = async () => {
			let typeQuestionMarkOrAmbpercent = "?";
			let searchQuestionMarkOrAmbpercent = "?";

			let url = `https://v2.jokeapi.dev/joke/${categories}${showBlacklist}${blacklists}${typeQuestionMarkOrAmbpercent}type=${type}${searchQuestionMarkOrAmbpercent}contains=${searchedValue}`;

			if(url.includes("?blacklistFlags")) {
				typeQuestionMarkOrAmbpercent = "&";
				url = `https://v2.jokeapi.dev/joke/${categories}${showBlacklist}${blacklists}${typeQuestionMarkOrAmbpercent}type=${type}${searchQuestionMarkOrAmbpercent}contains=${searchedValue}`;
			}
			else {
				typeQuestionMarkOrAmbpercent = "?";
				url = `https://v2.jokeapi.dev/joke/${categories}${showBlacklist}${blacklists}${typeQuestionMarkOrAmbpercent}type=${type}${searchQuestionMarkOrAmbpercent}contains=${searchedValue}`;
			}

			if(url.includes("?blacklistFlags") || url.includes(`${typeQuestionMarkOrAmbpercent}type=${type}`)) {
				searchQuestionMarkOrAmbpercent = "&";
				url = `https://v2.jokeapi.dev/joke/${categories}${showBlacklist}${blacklists}${typeQuestionMarkOrAmbpercent}type=${type}${searchQuestionMarkOrAmbpercent}contains=${searchedValue}`;
			} else {
				searchQuestionMarkOrAmbpercent = "?";
				url = `https://v2.jokeapi.dev/joke/${categories}${showBlacklist}${blacklists}${typeQuestionMarkOrAmbpercent}type=${type}${searchQuestionMarkOrAmbpercent}contains=${searchedValue}`;
			}

			const res = await axios.get(url);
			setPath(url);
			
			if(type === 'single') {
				setData(res.data.joke);	
			}
			else if(type === 'twopart') {
				setData(`${res.data.setup}
						${res.data.delivery}
				`);
			}
        }
        getJoke();
    }

	console.log(data)

	return (
		<div>
			<Categories categories__any={categories__any} categories__custom={categories__custom} addCustomCategory={addCustomCategory} removeCustomCategory={removeCustomCategory} />
			
			<Options addBlackList={addBlackListHandler} removeBlackList={removeBlackListHandler} />
			
			<br/>

			<Search search={search} />

			<Type type__single={type__single} type__twopart={type__twopart} />
			<br/>
			
			<button onClick={sendJoke}>Get Joke</button>
			
			<br/>
			<Joke category={categories} blacklistFlags={blacklists} data={data} />
			
			<br/><br/><br/>
			
			Source of Joke: <a href={path} target="_blank">{path}</a>
		</div>
	);
}

export default App