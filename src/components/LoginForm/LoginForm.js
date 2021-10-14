import React from 'react';
import styles from './LoginForm.module.scss';

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const LoginForm = ({handleLogin}) => {
	return (
		<div className={styles.LoginForm} data-testid="LoginForm">
			<button
				className="btn btn-secondary"
				onClick={handleLogin}
			>
				Login
			</button>
		</div>
	);
}

LoginForm.propTypes = {};

LoginForm.defaultProps = {};

export default LoginForm;
