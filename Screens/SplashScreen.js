import React, { Component } from 'react';
import { Image, View } from 'react-native';
import SplashImage from '../images/splash.jpg';

export default class SplashScreen extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		const { navigation } = this.props;
		setTimeout(() => {
			navigation.navigate('Home');
		}, 1000);
	}
	render() {
		// const { stores } = this.props;
		return (
			<View style={{ flex: 1 }}>
				<Image style={{ flex: 1, width: null, height: null }} source={SplashImage} />
			</View>
		);
	}
}
