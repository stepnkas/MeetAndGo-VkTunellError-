import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import {Root, View, Panel, PanelHeader,Header, ScreenSpinner, AdaptivityProvider, AppRoot, ConfigProvider, SplitLayout, SplitCol, Group, Title, Input, Button, InfoRow, List, Cell, PanelHeaderContent } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import './components/glav.css';

import WEllcome from './panels/Wellcome.js';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	

	return (
		<ConfigProvider>
			<AdaptivityProvider>
				<AppRoot>
					<SplitLayout >
						<SplitCol>
							<View activePanel={activePanel}>
								<WEllcome id="home"/>
							</View>
						</SplitCol>
					</SplitLayout>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	);
}

export default App;
