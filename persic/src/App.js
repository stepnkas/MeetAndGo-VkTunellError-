import { useActiveVkuiLocation, useGetPanelForView, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { View, Root, Tabbar, TabbarItem, Epic } from '@vkontakte/vkui';
import {Icon28NewsfeedOutline } from '@vkontakte/icons';
import HomePanel from './Panel/HomePanel.js';
import WEllcome from './panels/Wellcome.js';
import MYTabBar from './components/MyTabBar.js'
import Intro from './panels/hz/hz1.js';
import Panel2 from './Panel/PAnel2.js';


const App = () => {
    const {view: activeView} = useActiveVkuiLocation();
    const activePanel = useGetPanelForView('default_view');

	return (
		<Epic activeStory={activeView} tabbar={<MYTabBar />}>
			
			<View id={activeView} activePanel={activePanel}>
    			<HomePanel nav="home_panel" />
				<Panel2 nav="intro_panel" />
    		</View>
			
		</Epic>
	);
}

export default App;