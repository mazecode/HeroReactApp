import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
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
							<NavLink activeClassName="active" className="nav-link" to="/" exact>Asociaciones</NavLink>
						</li>
						<li className="nav-item">
							<NavLink activeClassName="active" className="nav-link" to="/marvel" exact>Marvel</NavLink>
						</li>
						<li className="nav-item">
							<NavLink activeClassName="active" className="nav-link" to="/dc" exact>DC</NavLink>
						</li>
					</ul>
					<form className="d-flex">
						<NavLink
							activeClassName="active"
							className="btn btn-outline-success"
							exact
							to="/login"
						>
							Logout
						</NavLink>
					</form>
				</div>
			</div>
		</nav>
	)
}