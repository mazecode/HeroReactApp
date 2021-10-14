import React from 'react';
import styles from './DcPage.module.scss';
import Dc from "../../components/Dc/Dc";

const DcPage = () => (
	<div className={styles.DcPage} data-testid="DcPage">
		<h1>DC Comics</h1>
		<Dc />
	</div>
);

DcPage.propTypes = {};

DcPage.defaultProps = {};

export default DcPage;
