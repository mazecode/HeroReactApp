import React from 'react';
import styles from './Marvel.module.scss';
import HeroList from "../HeroList/HeroList";

const Marvel = () => {
	return (
		<div className={`${styles.Marvel} row h-screen`} data-testid="Marvel">
			<div className="col-12 h-80">
				<HeroList publisher="Marvel Comics"/>
			</div>
		</div>
	);
}

Marvel.propTypes = {};

Marvel.defaultProps = {};

export default Marvel;
