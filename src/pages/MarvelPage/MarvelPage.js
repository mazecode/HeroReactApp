import React from 'react';
import styles from './MarvelPage.module.scss';
import HeroList from "../../components/HeroList/HeroList";

const MarvelPage = () => {
	return (
		<div className={`${styles.MarvelPage} row row-cols-3`} data-testid="MarvelPage">
			<div className="col-12">
				<h1>Marvel Comics</h1>
			</div>
			<HeroList publisher="Marvel Comics"/>
		</div>
	)
};

MarvelPage.propTypes = {};

MarvelPage.defaultProps = {};

export default MarvelPage;
