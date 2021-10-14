import React from 'react';
import styles from './LoginPage.module.scss';
import LoginForm from "../../components/LoginForm/LoginForm";

const LoginPage = ({history}) => {
	const handleClickLogin = () => {
		return history.push("/");
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
