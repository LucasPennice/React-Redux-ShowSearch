import axios from 'axios';

export const fetchShowsData = (showName) => async (dispatch) => {
	const { data } = await axios.get(
		`https://api.tvmaze.com/search/shows?q=${showName}`
	);

	dispatch({ type: 'UPDATE_SHOWS_ARRAY', payload: data });
};

export const clearShowsArray = () => {
	return { type: 'CLEAR_SHOWS_ARRAY' };
};

export const setClickedShow = ({ show, score }) => {
	return {
		type: 'SET_CLICKED_SHOW',
		payload: {
			score: score,
			image: show.image ? show.image.original : URL,
			endedOn: show.ended || 'N/A',
			genres: show.genres,
			language: show.language,
			name: show.name,
			site: show.officialSite,
			premieredOn: show.premiered || 'N/A',
			status: show.status,
			summary: show.summary,
			type: show.type,
		},
	};
};
