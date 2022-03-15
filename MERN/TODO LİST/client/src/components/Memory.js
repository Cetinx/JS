import React , {useState,useEffect} from 'react'
import { BrowserRouter, Routes, Route , Link } from "react-router-dom";

import {getAllMemories , deleteMemory} from '../axios/index.js'
import moment from 'moment'

const Memory = () => {

 



  const [date,setDate] = useState([]);

  useEffect(() => {
    const getMemories2 = async () => {
      const {data} = await getAllMemories()
      await setDate(data)

    }
    getMemories2()
  } ,[])

 

  return (
    <div className='container'>
        <div className='row'>
          
    {date.map((Memory,idx) =>(

        <div className='col-md-3 mt-3' key={idx}>
         
             <div className="card" style={{width: '18rem'}}>
             <div className="card-body">   
                       <Link className="card-title" to={`/memory/${Memory._id}`} >  {Memory.title}</Link>
                       <p className="card-text mt-3" >{Memory.content}</p>
                       </div> 
            <ul className="list-group list-group-flush">
            <li className="list-group-item">date : {moment(Memory.crateAt).fromNow()}</li>
            </ul>

            <div className="card-body">
              <Link  className="card-link" to={`/update/${Memory._id}`}> Uptade</Link>
                <a className="card-link" style={{cursor:'pointer'}} onClick={() => {deleteMemory(Memory._id)}}  >Delete</a>
              </div>
 
  
      </div>
 </div>
        
   

    ))}
   
    

   </div>
    </div>
   
  )
}

export default Memory