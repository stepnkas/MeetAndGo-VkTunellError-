import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Header, Panel, PanelHeader, Group, SimpleCell, Button, View} from '@vkontakte/vkui';
import Hz1 from './hz/hz1';
import Hz2 from './hz/hz2';

const Verification = () => {
    return (
        <View>
            <Hz1 />
            <Hz2 />
        </View>
);
};

export default Verification;