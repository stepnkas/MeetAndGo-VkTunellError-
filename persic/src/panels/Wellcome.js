import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Header, Panel, PanelHeader, Group, SimpleCell, Button, Div} from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';


const ROUTES = {
	HOME: 'home',
	INTRO: 'intro',
	PROFILE: 'profile'
};

const WEllcome = () => {
    const [activePanel, setActivePanel] = useState(ROUTES.HOME);

    const routeNavigator = useRouteNavigator();
    return (
        <Panel>
            <PanelHeader>Добро пожаловать в Meet&Go </PanelHeader>
            {/* <Div>
				<Button text="Главная" onClick={() => routeNavigator.push(ROUTES.INTRO)} stretched size='l'>Вперёд</Button>
			</Div> */}
        </Panel>
);
};

export default WEllcome;