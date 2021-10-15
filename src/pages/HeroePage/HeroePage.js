import React, {useMemo} from 'react';
import styles from './HeroePage.module.scss';
import {Redirect, useParams} from "react-router-dom";
import {getHeroById} from "../../selectors/getHeroById";

const HeroePage = ({history}) => {
	const {heroeId} = useParams();
	const heroe = useMemo(() => getHeroById(heroeId), [heroeId]);

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
		<div className={`${styles.HeroePage} row mt-4`} data-testid="HeroePage">
			<div className="col-12">
				<img className="float-end animate__animated animate__fadeInRight"
					 src={`/images/heroes/${heroeId}.jpg`}
					 alt={superhero}/>
				<div className="mb-4">
					<h1 className="display-1 mb-0 pb-0 animate__animated animate__bounce">{superhero}</h1>
					<strong className="display-4"><small>{characters}</small></strong>
					<p>{first_appearance}</p>
					<p>{alter_ego}</p>
					<p>{publisher}</p>
					<button className="btn btn-sm btn-dark w-100 mt-4"
							onClick={handleReturn}>Back...
					</button>
				</div>
			</div>
		</div>
	);
}

HeroePage.propTypes = {};

HeroePage.defaultProps = {};

export default HeroePage;
