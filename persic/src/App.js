import React, { useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { useActiveVkuiLocation, useGetPanelForView, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { View, Root, Tabbar, TabbarItem, Epic, SplitCol, Div, ConfigProvider, AdaptivityProvider, AppRoot, usePlatform, ScreenSpinner, SplitLayout } from '@vkontakte/vkui';
import HomePanel from './Panel/HomePanel.js';
import Panel2 from './Panel/PAnel2.js';
import GlavTabBar from './components/GlavTabBar.js';
import GlavPanel from './Panel/GlavPanel.js';
import { useState } from 'react';


const App = () => {
	const [fetchedUser, setUser] = useState(null);
	const { view: activeView } = useActiveVkuiLocation();
	const activePanel = useGetPanelForView('default_view');
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const [welcomeScreenVisible, setWelcomeScreenVisible] = useState(false);

	const hasSeenWelcomeScreen = () => {
		const seen = localStorage.getItem("welcomeScreenShown");
		if (!seen) {
			localStorage.setItem("welcomeScreenShown", "true");
			return false;
		}
		return true;
	};

	useEffect(() => {
		setWelcomeScreenVisible(!hasSeenWelcomeScreen());
	}, []);

	return welcomeScreenVisible ? (
		<>
			<HomePanel nav="home_panel" />
			<Panel2 nav="intro_panel" />
		</>

	) : (
		< >
			<SplitLayout popout={popout}>
				<SplitCol>
					<View id={activeView} activePanel={activePanel}>
						{/* <HomePanel nav="home_panel" />
						<Panel2 nav="intro_panel" /> */}
						<GlavPanel nav="profile_panel" fetchedUser={fetchedUser} id='profile' />
					</View>
				</SplitCol>
			</SplitLayout>
			{/* <Epic activeStory={activeView} tabbar={<GlavTabBar />}>
				<View id={activeView}>

					<Div>fjsdlfsdjl</Div>
				</View>
			</Epic> */}

			{/* {activeView ? (
				<Epic activeStory={activeView} tabbar={<MYTabBar />}>
					<View id={activeView} activePanel={activePanel}>
						<HomePanel nav="home_panel" />
						<Panel2 nav="intro_panel" />
					</View>
				</Epic>
			) : (
				<Epic tabbar={<GlavTabBar />}>
					<View id={activeView}>
						<GlavPanel></GlavPanel>
					</View>
				</Epic>
			)} */}
		</>
	);
}

export default App;