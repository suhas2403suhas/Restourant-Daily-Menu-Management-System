import axios from "axios";

const REST_API_BASE_URL='http://localhost:8080/Cust';

export const addCust=(Cust)=>axios.post(REST_API_BASE_URL,Cust);
export const getCust=()=>axios.get(REST_API_BASE_URL);