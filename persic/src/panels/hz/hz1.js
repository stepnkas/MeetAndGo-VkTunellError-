import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, Group, Div, List, Cell, Checkbox, Button } from '@vkontakte/vkui';
import { Avatar } from '@vkontakte/vkui';
import CheckboxBlock from '../../components/CheckboxBlock';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';

const Intro = ({ id, snackbarError, fetchedUser, userHasSeenIntro, go }) => {
  const routeNavigator = useRouteNavigator();
  const [selectedSports, setSelectedSports] = useState([]);

  const handleSportSelection = (sport) => {
    setSelectedSports(prevSelectedSports => {
      if (prevSelectedSports.includes(sport)) {
        return prevSelectedSports.filter(s => s !== sport);
      } else {
        return [...prevSelectedSports, sport];
      }
    });
  }

  // Виды спорта
  const sports = [
    "Футбол",
    "Баскетбол",
    "Теннис",
    "Волейбол",
    "Хоккей",
    "Бокс",
    "Армреслинг",
    "Плавание",
    "Гимнастика",
    "Бег",
    "Борьба",
    "Скейтбординг",
    "Сноубординг",
    "Единоборства"
  ];

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const sportsColumn1 = sports.slice(0, Math.ceil(sports.length / 2));
  const sportsColumn2 = sports.slice(Math.ceil(sports.length / 2));

  return (
    <Panel id={id} centered={true}>
      <PanelHeader>Каким спортом вы занимаетесь?</PanelHeader>
      <List>
        <Div>
          Выберите минимум 3 категории:
        </Div>
        <List style={{ display: 'flex' }}>
          <Div>
            {sportsColumn1.map(sport => (
              <CheckboxBlock checked={selectedSports.includes(sport)} key={sport}
                onClick={() => handleSportSelection(sport)} label={sport}
                onChange={handleCheckboxChange}
              >
              </CheckboxBlock>

            ))}
          </Div>
          <Div>
            {sportsColumn2.map(sport => (
              <Cell
                key={sport}
                asideContent={<Checkbox checked={selectedSports.includes(sport)} />}
                onClick={() => handleSportSelection(sport)}
              >
                {sport}
              </Cell>
            ))}
          </Div>
        </List>
      </List>
      <Div>
				<Button text="Главная" onClick={() => routeNavigator.push('/profile')} stretched size='l'>Вперёд</Button>
			</Div>
    </Panel>
  );
  //     return (
  //         <Panel id={id} centered={true}>
  //             <PanelHeader>
  //                 Каким спортом вы занимаетесь?
  //             </PanelHeader>
  //             {(!userHasSeenIntro && fetchedUser) && 
  //             <Fragment>
  //                 <Group>
  //                     <Div className='User'>
  //                         {fetchedUser.photo_200 && <Avatar src={fetchedUser.photo_200} />}
  //                     </Div>
  //                 </Group>    
  //             </Fragment>
  //             }
  //             {snackbarError}
  //         </Panel>
  // );
};

export default Intro;