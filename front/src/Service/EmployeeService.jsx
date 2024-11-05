import axios from "axios";

const REST_API_BASE_URL='http://localhost:8080';

export const staffDetails=(staff)=> axios.post(REST_API_BASE_URL,staff);

export const getDetails=()=> axios.get(REST_API_BASE_URL);