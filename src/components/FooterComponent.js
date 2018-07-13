import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {

	render(){
		return(
			<div className="footer">
		        <div className="container">
		            <div className="row justify-content-center">   
		            	<div className="col-md-3">
		                    <h5>Om oppgaven</h5>
		                    <p> Hjemmeoppgaven er gitt av KNOWIT angående intervju  </p>
		                </div>          
		                <div className="col-md-3">
		                    <h5>Links</h5>
		                    <ul className="list-unstyled">
		                        <li><Link to="/home">Home</Link></li>
		                        <li><Link to="/oppgave">Oppgave</Link></li>
		                    </ul>
		                </div>
		                <div className="col-md-3">
		                    <h5>Lokasjon</h5>
		                    <address>
				              	Lakkegata 53, <br />
								0561 Oslo<br />
				              	Tel: <a href="tel:02486"> 02486 </a><br />
				              	E-post: <a href="mailto:post@knowit.no"> post@knowit.no</a>
		                    </address>
		                </div>
		                
		            </div>
		            <div className="row justify-content-center">             
		                <div className="col-auto">
		                    <p>© Copyright 2018 Meriton Gashi</p>
		                </div>
		            </div>
		        </div>
		    </div>

		);
	}
}

export default Footer;

