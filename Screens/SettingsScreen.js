import React, { Component } from 'react';
import { Container, Content, Button, Icon, Card, CardItem, Text } from 'native-base';
import { View, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import loginBg from '../images/splash.jpg';
import ProfileIcon from '../images/profile_icon.jpg';

//icons
import schedule from '../images/schedule.png';

//utility
// import Profile from '../Components/Profile';

export default class SettingsScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			papers: [
				{ subject: 'Math', date: '23:11 am' },
				{ subject: 'Science', date: '23:11 am' },
				{ subject: 'Social', date: '23:11 am' },
				{ subject: 'Math', date: '23:11 am' },
				{ subject: 'Biology', date: '23:11 am' },
				{ subject: 'Physics', date: '23:11 am' },
				{ subject: 'Cemistry', date: '23:11 am' },
				{ subject: 'Cemistry', date: '23:11 am' },
				{ subject: 'Bio', date: '23:11 am' },
				{ subject: 'Math', date: '23:11 am' }
			]
		};
	}
	static navigationOptions = ({ navigation }) => ({
		title: 'Settings',
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

	render() {
		const paperItems = this.state.papers.map((paper) => {
			return (
				<View style={styles.profileCard}>
					<Card style={styles.optionsCard}>
						<CardItem style={styles.scheduleCard}>
							<View style={styles.timespan}>
								<Icon name="perm-contact-calendar" style={{ color: '#30ACFF' }} size={50} />
								<Text style={styles.dateText}> {paper.date} </Text>
							</View>
							<View style={styles.paperspan}>
								<Text style={styles.subjectText}> Date: 22nd Oct </Text>
								<Text style={styles.subjectText}> Subject: {paper.subject} </Text>
							</View>
						</CardItem>
					</Card>
				</View>
			);
		});

		return (
			<Container>
				<View style={styles.container}>
					<Content scrollEnabled={true}>{paperItems}</Content>
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
	scheduleCard: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	timespan: {
		flexDirection: 'row'
	},
	paperspan: {
		flexDirection: 'column'
	},
	dateText: {
		color: '#F75605',
		fontSize: 22
	},
	subjectText: {
		color: '#F75605',
		fontSize: 22,
		fontWeight: '400'
	},
	btn: {
		flex: 1,
		backgroundColor: '#fff'
	},
	profileCard: {
		flex: 1,
		justifyContent: 'space-around',
		paddingLeft: 10,
		paddingRight: 10,
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
