import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';

const Home = ({ id, go, fetchedUser }) => <Panel id={id}>Hello</Panel>;

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		bdate: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

{/* <Panel id='main'>
									<Header	className='header'>
										Meet&Go
									</Header>
									<Group>
										<Home fetchedUser={fetchedUser}></Home>
									</Group>
									<Group>
										<form className='da'>
											<div className='de'>глагол</div>
											<Input
											 	className='input'
												placeholder='введите глагол'
												id="verb"
												type='text'
												value={form1}
												onChange={changeText}/>
											<Button size='l' className='button' stretched onClick={hadlerSubmit}>
												получить
											</Button>
										</form>
									</Group>
									<Group>
										<PanelHeaderContent >sdflsdf</PanelHeaderContent >
											<List className="list-forms">
											<Cell>
												<InfoRow header="2 форма">{form2}</InfoRow>
											</Cell>
											<Cell>
												<InfoRow header="3 форма">{form3}</InfoRow>
											</Cell>
											<Cell>
												<InfoRow header="перевод">{translate}</InfoRow>
											</Cell>
											</List>
									</Group>
								</Panel> */}

export default Home;
