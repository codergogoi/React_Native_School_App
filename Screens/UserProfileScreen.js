import React, { Component } from 'react';
import { Container, Content, Button, Icon, Card, CardItem, Text } from 'native-base';
import { View, ImageBackground, StyleSheet, Dimensions, Image } from 'react-native';
import loginBg from '../images/splash.jpg';
import ProfileIcon from '../images/profile_icon.jpg';

//icons
import schedule from '../images/schedule.png';
import report from '../images/report.png';
import settings from '../images/settings.png';
import exam from '../images/test_exam.png';
import activeImg from '../images/active.jpg';

export default class UserProfileScreen extends Component {
	constructor(props) {
		super(props);
	}
	static navigationOptions = ({ navigation }) => ({
		title: 'My Profile',
		headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
		headerStyle: {
			color: 'white',
			backgroundColor: '#30ACFF'
		},
		headerLeft: (
			<Button transparent onPress={() => navigation.goBack()}>
				<Icon name="arrow-back" style={{ color: '#FFF' }} Size={32} />
			</Button>
		)
	});

	onTapScheduleList = () => {
		const { navigation } = this.props;
		navigation.push('Schedule');
	};

	onTapExam = () => {
		const { navigation } = this.props;
		navigation.push('Exam');
	};

	onTapReport = () => {
		const { navigation } = this.props;
		navigation.push('Report');
	};

	onTapSettings = () => {
		const { navigation } = this.props;
		navigation.push('Settings');
	};

	onTapSubscribe = () => {
		// const { navigation } = this.props;
		// navigation.push('Signup');
		alert('subscribe');
	};

	render() {
		return (
			<Container>
				<View style={styles.container}>
					<Content scrollEnabled={false}>
						<View style={styles.profilePicBg}>
							<Card style={styles.userPic} />
							<Card style={styles.userDetails}>
								<Text style={{ color: '#FFF', fontSize: 16, fontWeight: '300' }}>Hello Jayanta,</Text>
							</Card>
						</View>
						<View style={styles.profileCard}>details Informtaiton to edit</View>
					</Content>
				</View>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0
	},
	subscribeButton: {
		backgroundColor: '#30ACFF',
		color: '#FFF',
		marginBottom: 5,
		marginTop: 10
	},
	accessCard: {
		flex: 1,
		flexDirection: 'column'
	},
	services: {
		flexDirection: 'row'
	},
	boardInfo: {
		marginTop: 10,
		flexDirection: 'column'
	},
	serviceText: {
		color: '#F75605',
		fontSize: 22,
		fontWeight: '400'
	},
	statusImg: {
		width: 32,
		height: 32
	},
	btnSubscribe: {
		flex: 1,
		backgroundColor: '#F75605'
	},
	btn: {
		flex: 1,
		backgroundColor: '#fff'
	},
	profileCard: {
		flex: 1,
		justifyContent: 'space-around',
		paddingLeft: 30,
		paddingRight: 30,
		flexDirection: 'row'
	},
	userPic: {
		width: 80,
		height: 80,
		marginLeft: 20,
		borderRadius: 40,
		backgroundColor: '#FFF'
	},
	userDetails: {
		flex: 1,
		height: 80,
		backgroundColor: 'transparent',
		borderColor: 'transparent'
	},
	optionsCard: {
		flex: 1,
		height: 150,
		backgroundColor: 'white',
		padding: 10,
		borderRadius: 10,
		shadowColor: '#000',
		shadowOpacity: 0.1,
		shadowRadius: 5,
		marginLeft: 10
	},
	profilePicBg: {
		flex: 1,
		width: Dimensions.get('window').width,
		height: 90,
		marginTop: 0,
		backgroundColor: '#30ACFF',
		borderBottomRightRadius: 250,
		flexDirection: 'row'
	},
	profilePic: {
		width: Dimensions.get('window').width,
		height: 150
	},
	loginForeground: {
		flex: 1,
		marginTop: Dimensions.get('window').height / 1.75,
		paddingTop: 20,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 90,
		bottom: 0
	},
	icons: {
		top: 10,
		flex: 1,
		width: 100,
		height: 100
	}
});
