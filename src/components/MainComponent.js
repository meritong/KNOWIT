import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import HomePage from './HomePageComponent';
import Oppgave from './OppgaveComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

	render(){
		return(
			<div>
				<Header />
				    <Switch>
			            <Route path='/hjem' component={HomePage} />
			            <Route exact path='/oppgave' component={Oppgave} />
			            <Redirect to='/hjem' />
			        </Switch>
				<Footer />
			</div>
		);
	}
}

export default Main;