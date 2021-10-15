import React, {useContext} from 'react'
import {Link, NavLink, useHistory} from 'react-router-dom'
import AuthContext from "../../auth/AuthContext";
import {types} from "../../types/types";

export const Navbar = () => {
	const {user: {name}, dispatch} = useContext(AuthContext);
	const history = useHistory();

	const handleLogout = () => {
		dispatch({
			type: types.LOGOUT,
			payload: {}
		});

		localStorage.setItem('user', "{'logger': false}");
		history.push('/login');
	}

	return (
		<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
			<div className="container-fluid">
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse"
						data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
						aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"/>
				</button>
				<div className="collapse navbar-collapse" id="navbarTogglerDemo01">
					<Link className="navbar-brand" to="/">Heroes App</Link>
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink activeClassName="active" className="nav-link active" to="/"
									 exact>Asociaciones</NavLink>
						</li>
						<li className="nav-item">
							<NavLink activeClassName="active" className="nav-link" to="/marvel" exact>Marvel</NavLink>
						</li>
						<li className="nav-item">
							<NavLink activeClassName="active" className="nav-link" to="/dc" exact>DC</NavLink>
						</li>
						<li className="nav-item">
							<NavLink activeClassName="active" className="nav-link" to="/search" exact>Search</NavLink>
						</li>
					</ul>
					<form className="d-flex">
						<strong className="nav-link nav-item text-white">{name || 'Anonimous'}</strong>
						<button
							className="btn btn-outline-light"
							onClick={handleLogout}
						>
							Logout
						</button>
					</form>
				</div>
			</div>
		</nav>
	)
}