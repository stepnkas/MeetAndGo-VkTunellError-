import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Group, Div} from '@vkontakte/vkui';
import { Avatar } from '@vkontakte/vkui';

const Intro = ({id, snackbarError, fetchedUser, userHasSeenIntro, go}) => {
    
    return (
        <Panel id={id} centered={true}>
            <PanelHeader>
                sdlfjsdfslkjflsdfsdfsdfsfsdfsdfsdfsd
            </PanelHeader>
            {/* {(!userHasSeenIntro && fetchedUser) && 
            <Fragment>
                <Group>
                    <Div className='User'>
                        {fetchedUser.photo_200 && <Avatar src={fetchedUser.photo_200} />}
                    </Div>
                </Group>    
            </Fragment>
            }
            {snackbarError} */}
        </Panel>
);
};

export default Intro;