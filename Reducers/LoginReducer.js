import Action from '../Actions/UserActions';

const initialState = {
	userInfo: []
};

export default function(state = initialState, action) {
	switch (action.type) {
		case Action.LOGIN:
			console.log(`It is working... ${JSON.stringify(action.payload)}`);
			return {
				...state,
				userInfo: action.payload
			};
		case Action.SIGNUP: {
			return {
				...state,
				userInfo: action.payload
			};
		}
		default:
			return state;
	}
}
