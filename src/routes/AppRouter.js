import * as React from 'react';
import {useContext} from 'react';
import {BrowserRouter as Router, Switch,} from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import DashboardRoutes from "./DashboardRoutes";
import PrivateRoute from "./PrivateRoute";
import AuthContext from "../auth/AuthContext";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
	const authContext = useContext(AuthContext);

	return (
		<Router>
			<div>
				<Switch>
					<PublicRoute isAuthenticated={authContext.user.logged} path="/login" component={LoginPage} exact/>
					<PrivateRoute isAuthenticated={authContext.user.logged} path="/" component={DashboardRoutes}/>
				</Switch>
			</div>
		</Router>
	);
};

export default AppRouter;