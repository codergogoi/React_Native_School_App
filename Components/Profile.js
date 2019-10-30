import React, { Component } from 'react';
import { Button, Item, Input, Icon, Text, Form } from 'native-base';

export default class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userInfo: []
		};
	}

	/*
	{"status":200,"status_message":"SELECT * FROM tns_current_student WHERE uid='DEM0123' AND pwd='123'","data":{"uid":"DEM0123","name":"Jayanta ","sch_id":"DEM01","std":"X","div":"A","roll_no":"1","subscribe":"YES","isauthor":"0","isexternal":"NO","test_count":"1"}}
    */

	signIn = () => {
		const { email, password } = this.state;
		const { navigate } = this.props.navigation;

		console.log(`Email: ${email} password ${password}`);

		axios.defaults.baseURL = 'http://localhost:8888/testnscore/api.v2/';
		// axios.defaults.headers.common['Authorization'] = '124524563';
		axios.defaults.headers.post['Content-Type'] = 'application/json';

		axios
			.post('index.php', {
				platform: 'iOS',
				cmd: 'LOGIN',
				uid: email,
				pwd: password
			})
			.then((response) => {
				var userData = JSON.parse(JSON.stringify(response.data));
				if (userData.status === 200) {
					this.setState({ userInfo: userData.data, isLogin: true });
					navigate('Profile');
				} else if (userData.status === 202) {
					alert('User Already LogedIn');
				} else {
					alert('wrong User ID password');
				}
			})
			.catch(function(error) {
				alert('Opps something went wrong');
				console.log(`Error ${error}`);
			});

		console.log(this.state.test);
	};

	render() {
		// const { auth } = this.props.stores;
		return <Text> Some Profile Text </Text>;
	}
}
