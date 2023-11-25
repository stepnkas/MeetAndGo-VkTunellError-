import { View, Root, Tabbar, TabbarItem, Epic, Div, Button } from '@vkontakte/vkui';
import {Icon28NewsfeedOutline} from '@vkontakte/icons';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import React from 'react';
import "../components/glav.css";



const MYTabBar = () => {
    const routeNavigator = useRouteNavigator();
    return (
		
        <Div className='Wellcome'>
            <Button text="Главная" onClick={() => routeNavigator.push('/intro')} stretched size='l'>Вперёд</Button>
        </Div>
    )
}

export default MYTabBar;