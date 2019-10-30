import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { View, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import loginBg from '../images/login.jpg';

//utility
import Login from '../Components/Login';

export default class LoginScreen extends Component {
	render() {
		return (
			<Container>
				<View style={styles.container}>
					<Content scrollEnabled={false}>
						<ImageBackground style={styles.loginBackground} source={loginBg}>
							<View style={styles.loginForeground}>{<Login {...this.props} />}</View>
						</ImageBackground>
					</Content>
				</View>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0
	},
	loginBackground: {
		flex: 1,
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
		marginTop: 0
	},
	loginForeground: {
		flex: 1,
		marginTop: Dimensions.get('window').height / 2,
		paddingLeft: 60,
		paddingRight: 60
	}
});
