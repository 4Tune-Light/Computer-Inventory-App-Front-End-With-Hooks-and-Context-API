import axios from 'axios';
import { dispatcher } from '../GlobalState';

export const getCategories = () => {
	axios.get('/api/categories')
		.then(res => {
			dispatcher.dispatchCategory({
				type: 'GET_CATEGORIES',
				payload: res.data
			})
		})
		.then(() => dispatcher.setIsLoaded(true))
}