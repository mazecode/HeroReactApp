import React from 'react';
import styles from './Dc.module.scss';
import HeroList from "../HeroList/HeroList";

const Dc = () => (
	<div className={styles.Dc} data-testid="Dc">
		<HeroList publisher="DC Comics"/>
	</div>
);

Dc.propTypes = {};

Dc.defaultProps = {};

export default Dc;
