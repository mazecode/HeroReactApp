import {heroes} from "../data/heroes";

const getHeroesByName = (name) => {
	if(!name || Array.isArray(name) || name === '') {
		return [];
	}

	return heroes.filter(hero => {
			return  hero
				.superhero
				.toLowerCase()
				.includes(name.toLowerCase())
		}
	)
};

export default getHeroesByName;
