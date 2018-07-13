import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

	constructor (props){
		super(props);

		this.state = {
			isNavOpen: false,
		};
		this.toggleNav = this.toggleNav.bind(this);
	}

	toggleNav(){

		this.setState({

			isNavOpen: !this.state.isNavOpen

		});

	}

	render(){

		return(

			<React.Fragment>
				<div className="container">
				<Navbar light expand="md" >
		         
		            <NavbarBrand className="mr-auto">
		            	<img src="assets/images/logo.png" alt="KNOWIT" />
		            </NavbarBrand>
		            <NavbarToggler onClick={this.toggleNav} />
		            <Collapse isOpen={this.state.isNavOpen} navbar>
			        	<Nav className="ml-auto" navbar>
			        		<NavItem>
			        			<NavLink className="nav-link" to="/">
			        				Hjem
			        			</NavLink>
			        		</NavItem>
			        		<NavItem>
			        			<NavLink className="nav-link" to="/oppgave">
			        				Oppagve
			        			</NavLink>
			        		</NavItem>
			        	</Nav>
		            </Collapse>
		          
		        </Navbar>
		      	</div>
			</React.Fragment>

		);

	}
	
}

export default Header;