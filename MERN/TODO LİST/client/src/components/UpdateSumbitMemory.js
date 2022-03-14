import React , {useState,useEffect} from 'react'
import {useParams , useNavigate} from 'react-router-dom'

import { getMemory , updateMemory} from '../axios/index'

const UpdateSumbitMemory = () => {

  let navigate = useNavigate();

  const {id} = useParams();

 const [memoryData,setMemoryData] = useState({
  title:"",
  content:"" 
 })

 useEffect(() => {

  const postUpdateMemory = async () => {
    const {data} = await getMemory(id);
    setMemoryData(data)
    


  }
  postUpdateMemory()
 },[id])
  
  return (
<form onSubmit={(e) =>{
    e.preventDefault()
    
   updateMemory(id,memoryData)

   navigate('/');
   
}} >
    <div className='row'>
    <div className='col-md-3'>

</div>
       
        <div className='col-md-6'>
            <h5 className='mt-3'>Crate Todo List</h5>
             <div className="mb-3 mt-3">
            <label className="form-label">Title</label>
            <input value={memoryData.title} name='title' className="form-control" onChange={(e) =>setMemoryData({...memoryData,title:e.target.value}) } />      
           </div>

           <div className="mb-3 mt-3">
            <label className="form-label">Descrption</label>
            <textarea value={memoryData.content} name='content' onChange={(e) =>setMemoryData({...memoryData,content:e.target.value}) } className="form-control" />      
           </div>

          

        

         

 
         <button type="submit" className="btn btn-primary w-100">Gönder</button>
    </div>
        
        <div className='col-md-3 mt-5 mb-5'>
           
        </div>
        </div>
  

</form>
  )
}

export default UpdateSumbitMemory