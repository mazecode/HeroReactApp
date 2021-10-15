import React from 'react';
import styles from './HeroCard.module.scss';
import {Link} from "react-router-dom";

const HeroCard = ({
					  id,
					  superhero,
					  alter_ego,
					  characters,
					  first_appearance
				  }) => {

	return (
		<div className={`${styles.HeroCard} card text-white bg-primary mb-3 `}
			 data-testid="HeroCard"
			 style={{width: '18rem'}}>
			<img className="card-img" src={`/images/heroes/${id}.jpg`} alt={superhero}/>
			<div className="card-img-overlay">
				<h5 className="card-title">{superhero}</h5>
				<p className="card-text">{alter_ego}</p>
				{
					alter_ego === characters &&
					<p className="card-text">{characters}</p>
				}
				<p className="card-text">
					<small className="text-muted">{first_appearance}</small>
				</p>
				<Link to={`/heroe/${id}`} className="card-link btn btn-primary">More...</Link>
			</div>
		</div>
	);
}
HeroCard.propTypes = {};

HeroCard.defaultProps = {};

export default HeroCard;
