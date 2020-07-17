import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character = async () => {
	const id = getHash();
	const character = await getData(id);
	const {
		image,
		name,
		episode,
		status,
		species,
		gender,
		origin,
		location,
	} = character;
	const view = `
        <div class="characters-inner">
            <article class="characters-card shadow">
                <img src="${image}" alt="${name}" />
                <h2>${name}</h2>
            </article>
            <article class="characters-card">
                <h3>Episodes: <small>${episode.length}</small></h3>
                <h3>Status: <small>${status}</small></h3>
                <h3>Species: <small>${species}</small></h3>
                <h3>Gender: <small>${gender}</small></h3>
                <h3>Origin: <small>${origin.name}</small></h3>
                <h3>Last Location: <small>${location.name}</small></h3>
            </article>
        </div>
    `;
	return view;
};

export default Character;
