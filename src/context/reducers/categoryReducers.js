const initState = {
	categories: [],
};

export default function(state = initState, action) {
	switch (action.type) {
		case 'GET_CATEGORIES':
			return {
				...state,
				categories: action.payload.data
			}
		default:
			return state;
	}
}