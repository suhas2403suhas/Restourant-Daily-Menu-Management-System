import axios from "axios";

const REST_API_BASE_URL='http://localhost:8080/Cat';

export const getCat=()=>axios.get(REST_API_BASE_URL);
export const addCat=(cat)=>axios.post(REST_API_BASE_URL,cat);