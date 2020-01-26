import React, {Component} from 'react';
import axios from 'axios';
import $ from "min-jquery";
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
		this.showData = this.showData.bind(this);

		this.state = {
			name: '',
			items: [],
			counter: 1
		}

	}

	componentDidMount(){	
		fetch('http://localhost:5000/users/')
			.then(response => response.json())
			.then( res => {
				this.setState({
					items: res.reverse()
				});
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
		//const test = JSON.stringify(user);
		console.log(user);

		axios.post('http://localhost:5000/users/add', user)
		
		this.setState({
			name: ''
		});
		console.log(this.state.items);
		var dataContainer = document.getElementById("leaderboard");	
		//var btn = document.getElementById("btn");
		var txt = "";
		//console.log("b hi");
		fetch('http://localhost:5000/users/')
			.then(response => response.json())
			.then( res => {
				console.log("submit response is ");
				console.log(res);
				this.setState({
					items: res.reverse()
				});
			});
		
		for (var i = 0; i < this.state.items.length; i++) {
			txt += "<p>" + this.state.items[i].name + "</p><br />";
		}
		//dataContainer.insertAdjacentHTML('beforeend', txt);
		dataContainer.innerHTML = txt;
		if(this.state.counter >= 1){
			//btn.innerHTML = "Reload";
		}
		this.state.counter++;
	}
	showData(){
		var dataContainer = document.getElementById("leaderboard");	
		var btn = document.getElementById("btn");
		var txt = "";
		console.log("b hi");
		fetch('http://localhost:5000/users/')
			.then(response => response.json())
			.then( res => {
				console.log("click response is ");
				console.log(res);
				this.setState({
					items: res.reverse()
				});
			});
		txt = "";
		
		for (var i = 0; i < this.state.items.length; i++) {
			txt += "<p>" + this.state.items[i].name + "</p><br />";
		}
		//dataContainer.insertAdjacentHTML('beforeend', txt);
		dataContainer.innerHTML = txt;
		if(this.state.counter >= 1){
			btn.innerHTML = "Reload";
		}
		this.state.counter++;
	}


	render(){
		const items = this.state.items;

		return(
			<center>
				<div>
					<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
					<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
					<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
					<form onSubmit = {this.onSubmit}>
						<input type="text" name="name" value={this.state.name} onChange = {this.onChangeName} />
						<input type="submit" />
						
					</form>
					<br />
					<br />
					<b>Leaderboard</b>	
					<button id="btn" className="btn btn-primary" onClick= {this.showData}> SHOW DATA</button>				
					<div id="leaderboard"></div>

				</div>
			</center>
		)
	}
}