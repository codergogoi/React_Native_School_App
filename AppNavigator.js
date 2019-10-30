import React from 'react';
import { DrawerNavigator, StackNavigator, DrawerItems, NavigationActions } from 'react-navigation';
import HomeScreen from './Screens/HomeScreen';
import SplashScreen from './Screens/SplashScreen';
import SignupScreen from './Screens/SignupScreen';
import LoginScreen from './Screens/LoginScreen';
import ProfileScreen from './Screens/ProfileScreen';
import UserProfile from './Screens/UserProfileScreen';
import ScheduleScreen from './Screens/ScheduleScreen';
import ExamScreen from './Screens/ExamScreen';
import ReportScreen from './Screens/ReportScreen';
import SettingsScreen from './Screens/SettingsScreen';

import { ScrollView } from 'react-native';
import { Icon, Button } from 'native-base';

const hiddenItems = [ 'Splash', 'Home', 'Login', 'Signup', 'Profile' ];

const SideBar = (props) => {
	const propsClone = {
		...props,
		items: props.items.filter((item) => !hiddenItems.includes(item.key))
	};
	return (
		<ScrollView>
			<DrawerItems {...propsClone} />
		</ScrollView>
	);
};

const MenuButton = ({ navigate }) => (
	<Button
		transparent
		light
		style={{
			marginTop: 0
		}}
		onPress={() => {
			navigate.openDrawer();
		}}
	>
		<Icon
			style={{
				Color: '#fff'
			}}
			size={28}
			name="menu"
		/>
	</Button>
);

const Home = {
	screen: HomeScreen,
	navigationOption: {
		header: null
	}
};

const Splash = {
	screen: SplashScreen,
	navigationOption: {
		header: null
	}
};

const Login = {
	screen: LoginScreen,
	navigationOption: {
		header: null
	}
};

const Signup = {
	screen: SignupScreen,
	navigationOption: {
		header: null
	}
};

const Profile = {
	screen: ProfileScreen,
	navigationOption: {
		headerMode: 'screen',
		headerTitle: 'Profile',
		drawerTitle: 'My Profile'
	}
};

const MyProfile = {
	screen: UserProfile,
	navigationOption: {
		headerMode: 'screen',
		headerTitle: 'My Profile',
		drawerTitle: 'My Profile'
	}
};

const Schedule = {
	screen: ScheduleScreen,
	navigationOption: {
		headerMode: 'screen',
		headerTitle: 'Schedule',
		drawerTitle: 'Upcomming Exams'
	}
};

const Exam = {
	screen: ExamScreen,
	navigationOption: {
		headerMode: 'screen',
		headerTitle: 'Exam',
		drawerTitle: 'Test Exam'
	}
};

const Settings = {
	screen: SettingsScreen,
	navigationOption: {
		headerMode: 'screen',
		headerTitle: 'Settings',
		drawerTitle: 'Settings'
	}
};

const Report = {
	screen: ReportScreen,
	navigationOption: {
		headerMode: 'screen',
		headerTitle: 'Reports',
		drawerTitle: 'Exam reports'
	}
};

const ProfileStack = StackNavigator(
	{
		Profile: Profile,
		MyProfile: MyProfile,
		Schedule: Schedule,
		Exam: Exam,
		Report: Report,
		Settings: Settings
	},
	{
		navigationOptions: ({ navigation, HeaderProps }) => ({
			headerLeft: <MenuButton navigate={navigation} />,
			headerStyle: {
				backgroundColor: '#30ACFF'
			},
			headerTintColor: '#fff'
		})
	}
);

const RouteConfig = {
	initialRoute: 'Splash',
	contentComponent: SideBar,
	navigationOptions: {
		gesturesEnabled: false
	}
};
const AppNavigator = DrawerNavigator(
	{
		Splash: Splash,
		Home: Home,
		Login: Login,
		Signup: Signup,
		Profile: { screen: ProfileStack },
		MyProfile: MyProfile,
		Schedule: Schedule,
		Exam: Exam,
		Report: Report,
		Settings: Settings
	},
	RouteConfig
);

export default AppNavigator;
