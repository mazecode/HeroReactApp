import React, {useContext} from 'react';
import styles from './LoginPage.module.scss';
import LoginForm from "../../components/LoginForm/LoginForm";
import AuthContext from "../../auth/AuthContext";
import {types} from "../../types/types";

const LoginPage = ({history}) => {
	const {dispatch} = useContext(AuthContext);
	const lastPath = localStorage.getItem('lastpath') || '/';
	const handleClickLogin = () => {
		dispatch({
			type: types.LOGIN,
			payload: {
				name: 'Mazecode'
			}
		});

		return history.push(lastPath);
	}

	return (
		<div className={styles.LoginPage} data-testid="LoginPage">
			<LoginForm handleLogin={handleClickLogin}/>
		</div>
	);
}
LoginPage.propTypes = {};

LoginPage.defaultProps = {};

export default LoginPage;
