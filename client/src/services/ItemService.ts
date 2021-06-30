import axios from 'axios';

const ITEM_API_BASE_URL = "http://localhost:8080/item"
const ITEM_API_BASE_URL2 = "http://localhost:8080/item"

class ItemService {
    getItems(){
        return axios.get(ITEM_API_BASE_URL);
    }

    addItem(item){
        return axios.post(ITEM_API_BASE_URL2, item);
    }
}

export default new ItemService()