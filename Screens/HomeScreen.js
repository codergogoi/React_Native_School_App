import React, { Component } from 'react';
import { Container, Content, Button, View, Text } from 'native-base';
import { StyleSheet, Dimensions, ImageBackground } from 'react-native';
import logo from '../images/login.jpg';

export default class HomeScreen extends Component {
	onSignup = () => {
		const { navigation } = this.props;
		navigation.navigate('Signup');
	};

	onSignIn = () => {
		const { navigation } = this.props;
		navigation.navigate('Login');
	};

	render() {
		return (
			<Container>
				<View style={styles.container}>
					<Content scrollEnabled={false}>
						<ImageBackground style={styles.loginBackground} source={logo}>
							<View style={styles.loginPanel}>
								<Button light rounded block style={styles.signupBtn} onPress={this.onSignup}>
									<Text style={{ color: '#FFF' }}>Sign Up</Text>
								</Button>
								<Button light rounded block bordered style={styles.outlineBtn} onPress={this.onSignIn}>
									<Text style={{ color: '#30ACFF' }}>Sign In</Text>
								</Button>
							</View>
						</ImageBackground>
					</Content>
				</View>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	signupBtn: {
		backgroundColor: '#30ACFF',
		marginBottom: 20
	},
	outlineBtn: {
		borderColor: '#30ACFF'
	},
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
	loginPanel: {
		flex: 1,
		marginTop: Dimensions.get('window').height / 1.7,
		marginLeft: 60,
		marginRight: 60
	}
});
