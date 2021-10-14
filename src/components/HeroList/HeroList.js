import React from 'react';
import styles from './HeroList.module.scss';
import {getHeroesByPublisher} from "../../selectors/getHeroesByPublisher";
import HeroCard from "../HeroCard/HeroCard";

const HeroList = ({publisher}) => {
	const heroes = getHeroesByPublisher(publisher);

	return (
		<div className={`${styles.HeroList} card-columns _card-group`} data-testid="HeroList">
			{
				heroes.map(hero => <HeroCard key={hero.id} {...hero}/>)
			}
		</div>
	);
}

HeroList.propTypes = {};

HeroList.defaultProps = {};

export default HeroList;
