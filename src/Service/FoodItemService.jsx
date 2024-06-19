import axios from "axios";

const REST_API_BASE_URL='http://localhost:8080/FoodItem';

export const addFood=(food)=> axios.post(REST_API_BASE_URL,food);

export const getfood=()=> axios.get(REST_API_BASE_URL);

export const getById=(st)=>axios.get(REST_API_BASE_URL+'/'+st,st);

export const getByIdUpd=(id)=>axios.get(REST_API_BASE_URL+'/id/'+id);

export const updateFood=(food,id)=>axios.put(REST_API_BASE_URL+'/'+id,food);

export const deleteFood=(id)=>axios.delete(REST_API_BASE_URL+'/'+id);

export const sqSetFreq=()=> axios.post(REST_API_BASE_URL+'/freq');

export const updatefreq=(id,freq)=>axios.put(REST_API_BASE_URL+'/freq/'+id,freq);