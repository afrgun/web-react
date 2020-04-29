import React, {Component} from 'react';
import { Grid, TextField, IconButton, InputAdornment, Tabs, Tab, AppBar,
		Card, CardMedia, CardContent, Button, Typography, CardActionArea, CardActions } from '@material-ui/core';
import ScrollMenu from "react-horizontal-scrolling-menu";
import SearchIcon from '@material-ui/icons/Search';
import * as actions from '../action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './homepage.css';


class HomePage extends Component{
	constructor(props) {
        super(props);
        this.state = {
			activeTab: 0,
			selected: 0,
			category: [],
			product: [],
			loaded: false,
		}
	}


	async componentWillMount(){
		console.log(this.props);
		if(this.props.allData.length == 0){
			await this._loadData();
		} else {
			this.setState({
				category: this.props.allData.category,
				product: this.props.allData.productPromo,
				loaded: true
			})
		}
	}

	_loadData(){
		const { getAllData } = this.props.actions;
		getAllData(this._handleCallbackData.bind(this));
	}
	
	_handleCallbackData(callback){
		let data = callback ? callback : [];
		this.setState({
			category: data.category,
			product: data.productPromo,
			loaded: true
		});
		console.log(this.state.product);
	}

	getDataAll(){
		
	}

	onSelect = key => {
		this.setState({ selected: key });
	  }

	handleChange = (event, activeTab) => {
		this.setState({ activeTab: activeTab});
		if(activeTab===3){
			this.props.history.push('/purchased/');
		}
	}

	renderMenuItem = ({ text, imgurl, selected }) => {
		return (
			<Card className={`menu-item ${selected ? "active" : ""}`}>
				<CardMedia
					className="media-cat"
					image={imgurl}
					title="Contemplative Reptile"
				/>
				<CardContent>
				{text}
				</CardContent>
			</Card>
		);
	};
	  
	Menu = list =>
		list.map((el, i) => {
		return (
			<this.renderMenuItem text={el.name} imgurl={el.imageUrl} key={i} />
		);
	});

	onChange = (e) => {
		this.props.history.push({
			pathname: '/search',
			searchText: e.target.value
		});
	}

	gotoDetail = (id) =>{
		this.props.history.push(`/produk/`,{
			id: id,
		})
	}

	render() {
		
		let { activeTab, category, loaded, selected, product } = this.state;

		this.menu = null;
    	this.menuItems = this.Menu(
			category.slice(0, category.length), 
			this.state.selected
		);

		const menu = this.menuItems;

		var produkComponent = [];
		if(product){
			produkComponent = (
				product.map((el, i) =>{
					return (
					<Card className="card-item" onClick={()=>this.gotoDetail(el.id)} key={i}>
						<CardActionArea>
							<CardMedia
								className="media-card"
								image={el.imageUrl}
							/>
							<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								{el.title}
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								{el.description}
							</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<Button size="small" color="primary">
								<FavoriteIcon />
							</Button>
						</CardActions>
						</Card>
					)
					
				})
			)
		}
		
		return (
			<React.Fragment>
				<Grid container item xs={12} className="header-search" justify="center" alignItems="center">
					<IconButton>
						<FavoriteIcon />
					</IconButton>
					<TextField
						onChange={this.onChange}
						className="Search"
						variant="outlined"
						InputProps={{
							endAdornment: (
							<InputAdornment>
								<IconButton>
									<SearchIcon />
								</IconButton>
							</InputAdornment>
							),
							className: "Search__input"
						}}
					/>			
				</Grid>
				
				{loaded ? <ScrollMenu
					data={menu}
					selected={selected}
					onSelect={this.onSelect}
					/> : 
				null}
            	
				{loaded ? 
					produkComponent : 
				null}
				
				<AppBar position="static" className="wrapper-tab">
					<Tabs value={activeTab} 
						onChange={this.handleChange} 
						aria-label="simple tabs example"
						variant="fullWidth">
						<Tab label="Home" />
						<Tab label="Feed" />
						<Tab label="Cart" />
						<Tab label="Profile" />{/* <Button size="small" color="primary" className="button-buy">
									Buy
									</Button> */}
					</Tabs>
					
				</AppBar>
			</React.Fragment>
		
		);
	  }
}
// export default HomePage;

function mapStateToProps(state) {
	return {
	  errorMsg:state.errorMsg,
	  allData: state.products.alldata,
	  products: state.products.productPromo
	};
  }
  
  function mapDispatchToProps(dispatch) {
	  
	return {
	  actions: bindActionCreators(actions, dispatch),
  
	};
  }


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);