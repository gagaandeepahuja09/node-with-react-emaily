import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {

	renderContent() {
		switch(this.props.auth) {
			case null:
				return 'Deciding';
			case false: 
				return 'I m logged out';
			default:
				return 'I m logged in';
		}
	}

	render() {
		console.log(this.props);
		return(
			<div>
				<nav>
			    <div className ="nav-wrapper">
			      <a className ="brand-logo">Emaily</a>
			      <ul id="nav-mobile" className ="right hide-on-med-and-down">
			        <li>
			        	{this.renderContent()}
			        </li>
			      </ul>
			    </div>
			  </nav>
			</div>
		);
	}
}

function mapStateToProps({ auth }) {
	return{ auth };
}

export default connect(mapStateToProps)(Header);

/*function mapStateToProps(state) {
	return({ auth: state.auth });
}*/