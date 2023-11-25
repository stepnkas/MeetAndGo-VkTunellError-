import React, { useState } from "react";
import { Div, Panel, View, ConfigProvider, AdaptivityProvider, AppRoot, SplitLayout, Root, Epic, PanelHeader, Card, Group, Cell, Header, Avatar } from "@vkontakte/vkui";
import { useActiveVkuiLocation, useGetPanelForView } from "@vkontakte/vk-mini-apps-router";
import GlavTabBar from "../components/GlavTabBar";
import PropTypes from 'prop-types';

const GlavPanel = ({ fetchedUser, id}) => {

    const { view: activeView } = useActiveVkuiLocation();
    const activePanel = useGetPanelForView('default_view');

    return (
        
        <Panel id={id}>
            {fetchedUser &&
                <Group>
                    <Card style={{margin:"200px", backgroundColor: "#A095EF" }}>
                        <Group>
                            <Cell
                            before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
                            description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}>
                                {`${fetchedUser.first_name} ${fetchedUser.last_name}`}
                            </Cell>
                        </Group>
                        <Card>
                            shsdlkjfhs
                        </Card>
                    </Card>
                </Group>}
        </Panel>
        // <Epic tabbar={<GlavTabBar />} activeStory={activeView}>
        // </Epic>
    );
}

GlavPanel.propTypes = {
    id: PropTypes.string.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default GlavPanel;