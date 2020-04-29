import React, {Component} from 'react';
import { Grid, TextField, Button, Checkbox, FormControlLabel } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import './login.css';


class LoginPage extends Component{

	constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
        }
    }

	handleChange = () => {
		console.log('changed');
	};

	submitLogin = (e) => {
		e.preventDefault();
		this.setState({ isLogin: true })
	}

	render() {
		if (this.state.isLogin) {
            return (
                <Redirect to="/homepage" />
            )
		} 
		else {
			return (
				<React.Fragment>
					<div className="Login">
						<Grid container className="container" direction="column" justify="center" alignItems="center">
							
							<h1> LOGIN </h1>
							<form>
								<Grid item xs={12}>
									<TextField className="Login__input" id="standard-basic" label="Username" variant="outlined"/>
								
									<TextField className="Login__input" id="standard-basic" label="Password" variant="outlined"/>
								</Grid>
	
								<Grid container item xs={12}>
									<Grid item xs={6}>
										<FormControlLabel
											control={<Checkbox onChange={this.handleChange} name="gilad" />}
											label="Remember Me"
											/>
									</Grid>
	
									<Grid container item xs={6} justify="flex-end">
										<Button variant="contained" color="primary" className="Login__signin" onClick={this.submitLogin}>
											Sign in
										</Button>
									</Grid>
								</Grid>
								
								<Grid container item xs={12} justify="center">
									<Button className="Login__facebook" variant="contained" color="primary"> Signin With Facebook </Button>
								</Grid>
								<Grid container item xs={12} justify="center">
									<Button className="Login__gmail" variant="contained" color="primary"> Signin with gmail </Button>
								</Grid>
							</form>
							
						</Grid>
					</div>  
				</React.Fragment>
			);
		}
		
	}
}
export default LoginPage;