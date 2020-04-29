import ACTIONS from '../constants';

const initialState = {
	alldata: [],
	dataProduk: [],
	dataCategory: [],
	dataPurchased: [],
}

export default function reducer(state = initialState, action){
	const {
		GET_ALL_DATA,
		GET_PRODUK,
		GET_CAT,
		GET_PURCHASED
	} = ACTIONS;
	const { type, message } = action;
	switch (type) {
		case GET_ALL_DATA:
		return {
			...state,
			alldata: action.payload
		};
		case GET_PRODUK:
		return {
			...state,
			dataProduk: action.payload
		};
		case GET_CAT:
		return {
			...state,
			dataCategory: action.payload
		};
		case GET_PURCHASED:
		return {
			...state,
			dataPurchased: action.payload
		};
		default: 
			return state;
	}
}