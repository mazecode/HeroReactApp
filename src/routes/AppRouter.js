import * as React from 'react';
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import DashboardRoutes from "./DashboardRoutes";

export const AppRouter = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route path="/login" component={LoginPage} exact/>
					<Route path="/" component={DashboardRoutes}/>
				</Switch>
			</div>
		</Router>
	);
};