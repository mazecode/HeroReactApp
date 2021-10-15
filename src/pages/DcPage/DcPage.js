import React from 'react';
import styles from './DcPage.module.scss';
import Dc from "../../components/Dc/Dc";

const DcPage = () => (
	<div className={`${styles.DcPage} row row-groups-3 mt-4`} data-testid="DcPage">
		<div className="col-12">
			<h1>DC Comics</h1>
			<Dc />
		</div>
	</div>
);

DcPage.propTypes = {};

DcPage.defaultProps = {};

export default DcPage;
