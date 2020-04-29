import React, {Component} from 'react';
import { Grid, IconButton,Toolbar, AppBar, Typography, ListItem, ListItemAvatar, Avatar, ListItemText} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import * as actions from '../action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class PurchasedPage extends Component{
	constructor(props) {
        super(props);
        this.state = {
			products: [],
		}
	}

	componentWillMount(){
		this.setState({
			products: this.props.products
		})
	}
	
	getDataAll(){
		
	}

	render() {
		const { products } = this.state;

		console.log(this.state);
		var produkComponent = [];
		if(products != []){
			produkComponent = (
			products.map((el, i) =>{
				return (
					<ListItem alignItems="flex-start" key={el.id}>
						<ListItemAvatar>
							<Avatar alt="Remy Sharp" src={el.imageUrl} />
						</ListItemAvatar>
						<ListItemText
							primary={el.title}
							secondary={
								<React.Fragment>
									<Typography
										component="span"
										variant="body2"
										// className={classes.inline}
										color="textPrimary"
									>
										{el.price}
									</Typography>
								</React.Fragment>
							}
						/>
					</ListItem>
				)
			})
			)
		}
		
		return (
			<React.Fragment>
				<AppBar position="static">
					<Toolbar>
						<IconButton edge="start" onClick={this.props.history.goBack}>
							<ArrowBackIcon />
						</IconButton>
						<Typography variant="h6" className="title">
						Purchased History
						</Typography>
					</Toolbar>
				</AppBar>
				<Grid container item xs={12} className="header-search" justify="center" alignItems="center">
					{produkComponent}
				</Grid>				
			</React.Fragment>
		
		);
	  }
}

function mapStateToProps(state) {
	return {
	  errorMsg:state.errorMsg,
	  allData: state.products.alldata,
	  products: state.products.dataProduk
	};
  }
  
  function mapDispatchToProps(dispatch) {
	  
	return {
	  actions: bindActionCreators(actions, dispatch),
  
	};
  }


export default connect(mapStateToProps, mapDispatchToProps)(PurchasedPage);
// export default PurchasedPage;