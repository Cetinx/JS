import React , {useState,useEffect} from 'react'
import { useNavigate  } from "react-router-dom";

import { getMemory , crateMemories} from '../axios/index'

const SumbitMemory = () => {
  let navigate = useNavigate();

 const [memoryData,setMemoryData] = useState({
  title:"",
  content:"" 
 })
  
  return (
<form onSubmit={(e) =>{
    e.preventDefault()
    
    crateMemories(memoryData)

    navigate('/');
}} >
    <div className='row'>
    <div className='col-md-3'>

</div>
       
        <div className='col-md-6'>
            <h5 className='mt-3'>Crate Todo List</h5>
             <div className="mb-3 mt-3">
            <label className="form-label">Title</label>
            <input name='title' className="form-control" onChange={(e) =>setMemoryData({...memoryData,title:e.target.value}) } />      
           </div>

           <div className="mb-3 mt-3">
            <label className="form-label">Descrption</label>
            <textarea name='content' onChange={(e) =>setMemoryData({...memoryData,content:e.target.value}) } className="form-control" />      
           </div>

          

        

         

 
         <button type="submit" className="btn btn-primary w-100">Gönder</button>
    </div>
        
        <div className='col-md-3 mt-5 mb-5'>
           
        </div>
        </div>
  

</form>
  )
}

export default SumbitMemory