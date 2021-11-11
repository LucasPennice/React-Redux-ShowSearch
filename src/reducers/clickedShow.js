const clickedShowReducer = (state = {}, action) => {
	switch (action.type) {
		case 'SET_CLICKED_SHOW':
			return (state = action.payload);
		default:
			return state;
	}
};

export default clickedShowReducer;
