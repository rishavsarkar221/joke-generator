import React from 'react'
import Main from './Main';
import Important from './components/Important';
import Credits from './components/Credits';
import { NavLink, Switch, Route } from 'react-router-dom';

const App = () => {
	return (
		<div>
			<NavLink to="/" activeClassName="activeLink" className="link">Home</NavLink>
			<NavLink to="/IMPORTANT" activeClassName="activeLink" className="link">IMPORTANT!!!! DONT MISS!!!</NavLink>
			<NavLink to="/credits" activeClassName="activeLink" className="link">Credits</NavLink>

			<Switch>
				<Route exact path="/" component={Main} />
				<Route exact path="/IMPORTANT" component={Important} />
				<Route exact path="/credits" component={Credits} />
			</Switch>
		</div>
	)
}

export default App