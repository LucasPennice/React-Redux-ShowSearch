const showsArrayReducer = (state = [], action) => {
	switch (action.type) {
		case 'UPDATE_SHOWS_ARRAY':
			return (state = action.payload);
		case 'CLEAR_SHOWS_ARRAY':
			return (state = []);
		default:
			return state;
	}
};

export default showsArrayReducer;
