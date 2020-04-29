import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './components/login';
import Home from './components/homepage';
import Purchased from './components/purchased';
import Produk from './components/produk';
import Search from './components/search';
import { Provider } from 'react-redux';

var styles = {
	root: {
	  paddingBottom: '50px',
	},
}

class Routes extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		const { store } = this.props;

        return(
			<Provider store={store}>
				<Router>
					<div style={styles.root}>
						<Route exact path="/" component={Login} />
						<Route path="/login" component={Login} />
						<Route path="/homepage" component={Home} />
						<Route path="/purchased" component={Purchased} />
						<Route path="/produk/" component={Produk} />
						<Route path="/search" component={Search} />
					</div>
				</Router>
			</Provider>
        )
    }
}

export default Routes;

// function mapStateToProps(state) {
// 	return {
// 	  errorMsg:state.errorMsg
// 	};
//   }
  
//   function mapDispatchToProps(dispatch) {
// 	return {
// 	  actions: bindActionCreators(actions, dispatch),
  
// 	};
//   }


// export default connect(mapStateToProps, mapDispatchToProps)(Routes);