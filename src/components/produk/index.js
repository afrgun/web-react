import React, {Component} from 'react';
import { Grid, IconButton,Toolbar, AppBar,
		Card, CardMedia, CardContent,Typography, CardActionArea} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import * as actions from '../action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './produk.css';

class ProdukPage extends Component{
	constructor(props) {
        super(props);
        this.state = {
			id: this.props.location.state.id,
			products: [],
			productDetail: [],
			loaded: false
		}
	}

	componentWillMount(){
		this.setState({
			products: this.props.products
		})
	}

	componentDidMount(){
		this.getDataDetail();
	}
	
	getDataDetail(){
		let { products } = this.state;
		const ids = products.find(el => el.id === this.state.id);
		this.setState({ 
			productDetail: ids,
			loaded: true
		});
	}

	render() {
		const { productDetail, loaded } = this.state;

		console.log(this.state);
		var produkComponent = [];
		if(productDetail != []){
			produkComponent = (
					
			<Card className="card-item">
				<CardActionArea>
					<CardMedia
					className="media-card"
					image={productDetail.imageUrl}
					title="Contemplative Reptile"
					/>
					<CardContent className="wrapContent">
						<Typography gutterBottom variant="h5" component="h2">
							{productDetail.title}
						</Typography>
						<Typography gutterBottom variant="h5" component="h2" className="favorite">
							<FavoriteIcon />
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							{productDetail.description}
						</Typography>
					</CardContent>
					<Typography variant="body2" color="textSecondary" component="p" className="price">
					{productDetail.price}
					</Typography>
					<Typography variant="body2" color="textSecondary" component="p" className="button-buy">
					buy
					</Typography>
						
				</CardActionArea>
			</Card>	
					
					
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
						Produk Detail
						</Typography>
						<IconButton edge="end">
							<ShareIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
				<Grid container item xs={12} className="header-search" justify="center" alignItems="center">
					{loaded ? produkComponent : null}
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


export default connect(mapStateToProps, mapDispatchToProps)(ProdukPage);