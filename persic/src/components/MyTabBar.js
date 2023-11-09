import { View, Root, Tabbar, TabbarItem, Epic, Button, Div } from '@vkontakte/vkui';
import {Icon28NewsfeedOutline} from '@vkontakte/icons';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import "../components/glav.css";

const MYTabBar = () => {
    const routeNavigator = useRouteNavigator();
    return (

        // <Tabbar>
        //     <TabbarItem text="Главная" onClick={() => routeNavigator.push('/')} >	
        //     	<Icon28NewsfeedOutline />
		// 	</TabbarItem>
		// 	<TabbarItem text="Профиль" onClick={() => routeNavigator.push('/intro')} >
		// 		<Icon28NewsfeedOutline />
		// 	</TabbarItem>
		// </Tabbar>
		
        <Div className='Wellcome'>
            <Button text="Главная" onClick={() => routeNavigator.push('/intro')} className="GlavButton">Вперёд</Button>
        </Div>
    )
}

export default MYTabBar;