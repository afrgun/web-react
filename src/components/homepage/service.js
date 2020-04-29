import axios from 'axios';

class HomePageService{

	getData(){
		const URL = "https://private-4639ce-ecommerce56.apiary-mock.com/home";
		return new Promise((resolve, reject)=>{
            axios.get(URL).then(response=>{
                resolve(response);
            }).catch(error=>{
                reject('ERROR');
            })
        })
	}
}

export default HomePageService;