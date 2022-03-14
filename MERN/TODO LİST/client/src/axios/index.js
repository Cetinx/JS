import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:5555'})

export const getAllMemories = async () => await API.get('/memories')

export const getMemory = async (id) => await API.get(`/memories/${id}`)

 export const crateMemories = async (newMemory) => {
   const {data} = await API.post('/memories' , newMemory)
  
 }

 export const updateMemory = async (id,updateMemory) => await API.put(`/memories/${id }`,updateMemory)

export const deleteMemory = async (id) => await API.delete(`/memories/${id}`) 

    
