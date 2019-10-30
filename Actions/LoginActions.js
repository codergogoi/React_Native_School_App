import Action from './UserActions';
import { BASE_URL } from './AppConst';
import axios from 'axios';

export const DoLogin = (postData) => (dispatch) => {
	fetch(BASE_URL, {
		method: 'POST',
		headers: {
			'content-type': 'application/json'
		},
		body: JSON.stringify(postData)
	})
		.then((res) => res.json())
		.then((userInfo) =>
			dispatch({
				type: Action.LOGIN,
				payload: userInfo
			})
		)
		.catch((err) => console.log(`Error Encountered ${err}`));
};
