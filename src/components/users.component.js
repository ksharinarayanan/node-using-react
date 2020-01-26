import React, {Component} from 'react';
import axios from 'axios';
//import {Link} from 'react-router-dom';

const UsersList = props => (
	<div>
	{props.user.name}
	<br /> 
	</div>
);

export default class Users extends Component{

	constructor(props){
		super(props);

		this.onChangeName = this.onChangeName.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			name: '',
			allUsers: []
		}

	}

	componentDidMount(){
		axios.get('http://localhost:5000/users/')
			.then(response => {
				if(response.data.length > 0){
					this.setState({
		
						allUsers: response.data.reverse()
					}); 
					console.log(this.state.allUsers);				
				}
				
			});
	}

	onChangeName(e){
		this.setState({
			name: e.target.value
		});
	};

	onSubmit(e){
		e.preventDefault();
		const user = {
			name: this.state.name
		};	

		console.log(user);

		axios.post('http://localhost:5000/users/add', user)
			.then(res => console.log(res.data));

		this.setState({
			name: ''
		});

	}

	printAllUsers(){
		/*
		var txt = "";
		for (var i = this.state.allUsers.length - 1; i >= 0; i--) {
			txt += this.state.allUsers[i].name;
		}

		return txt;
		*/
		return this.state.allUsers.map(currentUser => {
			return <UsersList user = {currentUser} />;
		});
	}



	render(){
		return(
			<center>
				<div>
					<form onSubmit = {this.onSubmit}>
						<input type="text" name="name" value={this.state.name} onChange = {this.onChangeName} />
						<input type="submit" />
						
					</form>
					<br />
					<br />
					{this.printAllUsers() }
				</div>
			</center>
		)
	}
}