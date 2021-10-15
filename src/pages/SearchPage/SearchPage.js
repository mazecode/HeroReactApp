import React, {useMemo} from 'react';
import queryString from 'query-string';
import styles from './SearchPage.module.scss';
import HeroCard from "../../components/HeroCard/HeroCard";
import useForm from "../../hooks/useForm";
import {useLocation} from "react-router-dom";
import getHeroesByName from "../../selectors/getHeroesByName";

const SearchPage = ({history}) => {
	const location = useLocation();
	const {q = ''} = queryString.parse(location.search);
	const [formValues, handleInputChange, reset] = useForm({
		searchText: q
	});
	const {searchText} = formValues;

	const searchValueFn = (q) => {
		let result = [];

		if(Array.isArray(q)) {
			for (let i = 0; i < q.length; i++) {
				let f = q[i].trim();
				let tmp = getHeroesByName(f);
				result = [
					...result,
					...tmp,
				];
			}
		}

		return result;
	}

	const filtered = useMemo(() => {
			if(Array.isArray(q)) {
				return searchValueFn(q);
			}

			if(typeof q === 'string') {
				if(q.includes(',')) {
					return searchValueFn(q.split(','));
				}

				return getHeroesByName(q);
			}
		}, [q]);

	const handleSubmit = (e) => {
		e.preventDefault();
		history.push(`?q=${searchText}`)
	}

	return (
		<div className={`${styles.Search} row mt-4`} data-testid="SearchPage">
			<div className="col-5">
				<h1>Search...</h1>
				<form onSubmit={handleSubmit}
					  onReset={reset}>
					<input type="text"
						   name="searchText"
						   id="searchText"
						   className="form-control"
						   value={searchText}
						   onChange={handleInputChange}
						   autoComplete="off"/>

					<button type="submit" className="btn btn-dark btn-sm mt-2 w-100">Search...</button>
				</form>
			</div>
			<div className="col-7">
				<h4>Results</h4>

				<div className="col-12">
					{
						filtered.map(hero => (
							<HeroCard
								key={hero.id}
								{...hero}
							/>
						))
					}
				</div>
			</div>
		</div>
	);
}

SearchPage.propTypes = {};

SearchPage.defaultProps = {};

export default SearchPage;
