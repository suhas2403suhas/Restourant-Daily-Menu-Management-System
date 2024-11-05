import axios from "axios";

const REST_API_BASE_URL='http://localhost:8080/bill';

export const addBill=(bill)=> axios.post(REST_API_BASE_URL,bill);
export const getAllBill =()=>axios.get(REST_API_BASE_URL);