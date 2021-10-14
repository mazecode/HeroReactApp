import React from 'react';
import styles from './HeroePage.module.scss';
import {Redirect, useParams} from "react-router-dom";
import {getHeroById} from "../../selectors/getHeroById";

const HeroePage = ({history}) => {
	const {heroeId} = useParams();
	const heroe = getHeroById(heroeId);

	if (!heroe) {
		return <Redirect to="/"/>;
	}

	const {
		alter_ego,
		characters,
		first_appearance,
		publisher,
		superhero,
	} = heroe;

	const handleReturn = () => {
		if (history.length <= 2) {
			return history.push('/');
		}

		return history.goBack()
	}

	return (
		<div className={`${styles.HeroePage} row`} data-testid="HeroePage">
			<div className="col-12">
				<img className="float-end" src={`/images/heroes/${heroeId}.jpg`} alt={superhero}/>

				<h1 className="display-1 mb-0 pb-0">{superhero}</h1>
				<strong className="display-4"><small>{characters}</small></strong>
				<p>{first_appearance}</p>
				<p>{alter_ego}</p>
				<p>{publisher}</p>
				<button onClick={handleReturn}>Back...</button>
			</div>
		</div>
	);
}

HeroePage.propTypes = {};

HeroePage.defaultProps = {};

export default HeroePage;
