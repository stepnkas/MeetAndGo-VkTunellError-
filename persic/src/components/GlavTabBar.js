import React from 'react';
import { Epic, Tabbar, TabbarItem, PanelHeader, PanelHeaderButton, Panel, Div, Text, List, Cell } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import "../components/glav.css";
import { Icon24Back } from '@vkontakte/icons';



const GlavTabBar = () => {
    const routeNavigator = useRouteNavigator();
    return (
        <Tabbar >
            <PanelHeader >
                <List style={{ display: 'flex', flexDirection: 'row' }}>
                    <PanelHeaderButton>
                        <Icon24Back />
                    </PanelHeaderButton>
                    <Div>
                        Мероприятия
                    </Div>
                </List>
            </PanelHeader>
            <TabbarItem text="Поиск" /*onClick={() => routeNavigator.push('/')}*/ >
                <Icon24Back />
            </TabbarItem>
            <TabbarItem text="Плюс в кружочке" /*onClick={() => routeNavigator.push('/intro')}*/ >
                <Icon24Back />
            </TabbarItem>
            <TabbarItem text="Огонь" /*onClick={() => routeNavigator.push('/intro')}*/ >
                <Icon24Back />
            </TabbarItem>
            <TabbarItem text="ТЫ" /*onClick={() => routeNavigator.push('/intro')}*/ >
                <Icon24Back />
            </TabbarItem>

        </Tabbar>
    )
}

export default GlavTabBar;