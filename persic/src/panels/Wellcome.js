import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Header, Panel, PanelHeader, Group, SimpleCell, Button} from '@vkontakte/vkui';

const WEllcome = () => {
    return (
        <Panel id="home">
            <Group>
            <Header>Meet&Go</Header>
                <SimpleCell>
                    Добро пожаловать в Meet&Go
                </SimpleCell>
                <Button>Вперёд</Button>
            </Group>
        </Panel>
);
};

export default WEllcome;