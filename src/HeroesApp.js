import './HeroesApp.css';
import AppRouter from "./routes/AppRouter";
import AuthContext from "./auth/AuthContext";
import {useEffect, useReducer} from "react";
import authReducer from "./auth/authReducer";

const HeroesApp = () => {
	const init = () => {
		return JSON.parse(localStorage.getItem('user')) || {logged: false};
	}

	const [user, dispatch] = useReducer(authReducer, {}, init);

	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(user));
	}, [user]);

	return (
		<AuthContext.Provider value={{user, dispatch}}>
			<AppRouter/>
		</AuthContext.Provider>
	);
}

export default HeroesApp;