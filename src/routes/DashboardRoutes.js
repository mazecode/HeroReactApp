import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import MarvelPage from "../pages/MarvelPage/MarvelPage";
import DcPage from "../pages/DcPage/DcPage";
import HeroePage from "../pages/HeroePage/HeroePage";
import {Navbar} from "../components/Navbar/Navbar";
import SearchPage from "../pages/SearchPage/SearchPage";

const DashboardRoutes = () => {
	return (
		<div data-testid="DashboardRoutes">
			<Navbar/>

			<div className="container">
				<Switch>
					<Route path="/heroe/:heroeId" component={HeroePage}/>
					<Route path="/marvel" component={MarvelPage} exact/>
					<Route path="/dc" component={DcPage} exact/>
					<Route path="/search" component={SearchPage} exact/>

					<Redirect to="/marvel"/>
				</Switch>
			</div>
		</div>
	);
};

DashboardRoutes.propTypes = {};

DashboardRoutes.defaultProps = {};

export default DashboardRoutes;
