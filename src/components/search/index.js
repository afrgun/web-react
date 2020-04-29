import React, {useState, useEffect} from 'react';
import { Grid, TextField, IconButton, InputAdornment, ListItem, ListItemAvatar, Avatar, ListItemText, Typography  } from '@material-ui/core';
import { useLocation } from "react-router-dom";
import * as actions from '../action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './search.css';


function SearchPage(props){
	const location = useLocation();
	
  const [text, setText] = useState(location.searchText);
  
	const changeSearch = (e) => {
		const text = e.target.value;
		setText(text);
	}
	
	return (
		<React.Fragment>
			<Grid container item xs={12} className="header-search" justify="center" alignItems="center">
				<IconButton onClick={props.history.goBack}>
					<ArrowBackIcon />
				</IconButton>
				<TextField
					value={text}
					onChange={changeSearch}
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
        {
          props.products.map((repo, index)=>{
            return (
              <ListItem alignItems="flex-start" key={repo.id}>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={repo.imageUrl} />
                </ListItemAvatar>
                <ListItemText
                  primary={repo.title}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body2"
                        // className={classes.inline}
                        color="textPrimary"
                      >
                        {repo.price}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>		
            )
          })
          
        }
				
			</Grid>
			
		</React.Fragment>
	
	);
	  
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


export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);