import React, { Component } from 'react';
import { Button, Item, Input, Icon, Text, Form } from 'native-base';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { DoLogin } from '../Actions/LoginActions';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			userInfo: [],
			test: '',
			isLogin: false
		};
	}

	//Life Cycle Methods
	componentWillReceiveProps(nextProps) {
		console.log(`received Props ${nextProps}`);
	}

	/*
	{"status":200,"status_message":"SELECT * FROM tns_current_student WHERE uid='DEM0123' AND pwd='123'","data":{"uid":"DEM0123","name":"Jayanta ","sch_id":"DEM01","std":"X","div":"A","roll_no":"1","subscribe":"YES","isauthor":"0","isexternal":"NO","test_count":"1"}}
	*/

	signIn = () => {
		const { email, password } = this.state;
		const postData = {
			platform: 'iOS',
			cmd: 'LOGIN',
			uid: email,
			pwd: password
		};
		this.props.DoLogin(postData);
	};

	onDidLogin = () => {
		const userInfo = this.props.userInfo;
		const { navigate } = this.props.navigation;

		if (userInfo.status === 200) {
			navigate('Profile');
		} else if (userInfo.status == 202) {
			alert('Opps! Multiple Login Not Allowed!');
		} else if (userInfo.status == 404) {
			alert('Opps! Entered User ID and Password doesnot match!');
		}
	};

	render() {
		this.onDidLogin();

		return (
			<Form>
				<Item style={{ marginBottom: 20 }}>
					<Icon style={{ color: '#fff' }} name="person-outline" />
					<Input
						style={{ color: '#000' }}
						placeholder="Please Enter Email"
						placeholderTextColor="#dddd"
						onChangeText={(email) => this.setState({ email: email })}
					/>
				</Item>
				<Item style={{ marginBottom: 40 }}>
					<Icon style={{ color: '#fff' }} name="lock-open" />
					<Input
						style={{ color: '#000' }}
						placeholder="Please Enter Password"
						placeholderTextColor="#dddd"
						secureTextEntry={true}
						onChangeText={(pass) => this.setState({ password: pass })}
					/>
				</Item>

				<Button light rounded block style={styles.signupBtn} onPress={this.signIn.bind(this)}>
					<Text style={{ color: '#FFF' }}>Login</Text>
				</Button>
			</Form>
		);
	}
}

const mapStateToProps = (state) => ({
	userInfo: state.loginReducer.userInfo
});

export default connect(mapStateToProps, { DoLogin })(Login);

const styles = StyleSheet.create({
	signupBtn: {
		backgroundColor: '#30ACFF',
		color: '#FFF',
		marginBottom: 20
	},
	outlineBtn: {
		borderColor: '#30ACFF',
		color: '#30ACFF'
	}
});
