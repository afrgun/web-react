import ACTIONS from '../constants';
import axios from 'axios';
export function getAllData(callback) {
	const URL = "https://private-4639ce-ecommerce56.apiary-mock.com/home";
	return(dispatch) => {
		axios.get(URL)
		  .then((response) => {
			  callback(response.data[0].data);
			  dispatch(setAllData(response.data[0].data));
			  dispatch(setProduk(response.data[0].data.productPromo));
			  dispatch(setCategory(response.data[0].data.category));
			})
		  	.catch((response) => {return Promise.reject(response);});
	  	};
}

function setAllData(payload){
	return { type: ACTIONS.GET_ALL_DATA, payload}
}

function setProduk(payload){
	return { type: ACTIONS.GET_PRODUK, payload }
}

function setCategory(payload){
	return { type: ACTIONS.GET_CAT, payload }
}
	