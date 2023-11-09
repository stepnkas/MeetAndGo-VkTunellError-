import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Group} from '@vkontakte/vkui';

const Hz2 = () => {
    const [activePanel, setActivePanel] = React.useState('home');
    return (
        <Panel id="home">
            <PanelHeader separator={false} before={<PanelHeaderBack onClick={() => setActivePanel('home')} />}>
                Communities
            </PanelHeader>
            <Group>
                <Search />
                <Cell subtitle="Humor" before={<Avatar />} onClick={() => setActivePanel('panel3')}>
                    Swipe Right
                </Cell>
                <Cell subtitle="Cultural Center" before={<Avatar />} onClick={() => setActivePanel('panel3')}>
                    Out Cinema
                </Cell>
                <Cell subtitle="Movies" before={<Avatar />} onClick={() => setActivePanel('panel3')}>
                    #ARTPOKAZ
                </Cell>
            </Group>
      </Panel>
);
};

export default Hz2;