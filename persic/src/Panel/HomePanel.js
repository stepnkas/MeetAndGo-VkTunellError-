import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import {
	Root, View, Tabbar, TabbarItem, Panel, PanelHeader, Header, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout,
	SplitCol, Group, Title, Input, Button, InfoRow, List, Cell, PanelHeaderContent, Epic
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { Snackbar, Avatar } from '@vkontakte/vkui';
import { Icon28NewsfeedOutline } from '@vkontakte/icons';

import WEllcome from '../panels/Wellcome.js';
import Verification from '../panels/verification';
import { string } from 'prop-types';
import Intro from '../panels/hz/hz1';
import GlavPanel from './GlavPanel.js';
import { useActiveVkuiLocation, useGetPanelForView, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import MYTabBar from '../components/MyTabBar.js';


const ROUTES = {
	HOME: 'home',
	INTRO: 'intro',
	PROFILE: 'profile'
};

const Storage_Keys = {
	STATUS: "status",

};

const App = () => {
	const [activePanel, setActivePanel] = useState(ROUTES.HOME);
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const [userHasSeenIntro, setUserHasSeenIntro] = useState(false);
	const [snackbar, setSnackbar] = useState(false);

	const routeNavigator = useRouteNavigator();

	useEffect(() => {
		bridge.subscribe((type = "VKWebAppInitFalled", data = {}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});

		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			const storageDate = await bridge.send('VKWebAppStorageGet', {
				keys: Object.values(Storage_Keys)
			});
			console.log(storageDate);
			const data = {};
			storageDate.keys.forEach(({ key: keyString, value: valueString }) => {
				try {
					data[key] = value ? JSON.parse(value) : {};
					switch (key) {
						case Storage_Keys.STATUS:
							if (data[key].hasSeenIntro) {
								setActivePanel(ROUTES.WEllcome);
								setUserHasSeenIntro(true);

							}
							break;
						default:
							break;
					}
				} catch (error) {
					setSnackbar(<Snackbar layout='vertical' onClose={() => setSnackbar(null)} before={<Avatar size={24} style={{ background: 'var(--dynamic-red)' }}>sdfdsf</Avatar>} duration={900}>
						проблема с получением данных из Storage
					</Snackbar>)
				}
			})
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	const viewIntro = async function () {
		try {
			await bridge.send('VKWebAppStorageSet', {
				key: Storage_Keys.STATUS,
				value: JSON.stringify({
					hasSeenIntro: true
				})
			});
		} catch (error) {
			setSnackbar(<Snackbar layout='vertical' onClose={() => setSnackbar(null)} before={<Avatar size={24} style={{ background: 'var(--dynamic-red)' }}>sdfdsf</Avatar>} duration={900}>
				проблема с отправкой данных в Storage
			</Snackbar>)
		}
	}
	const { view: activeView } = useActiveVkuiLocation();
	const active1Panel = useGetPanelForView('default_view');
	return (
		<Epic activeStory={activeView} tabbar={<MYTabBar />}>
			<View id={activeView} activePanel={activePanel}>
				<WEllcome id={ROUTES.HOME} />
			</View>
		</Epic>
	);
}

export default App;
