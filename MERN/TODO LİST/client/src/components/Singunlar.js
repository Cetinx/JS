import React , {useState , useEffect } from 'react'
import {useParams} from 'react-router-dom'
import {getMemory} from '../axios/index.js'

import moment from 'moment'

const Singunlar = () => {

  const {id} = useParams();

  const [date,setDate] = useState('');


  useEffect(() => {
    const asyncGetMemories  = async () => {

      const {data} = await getMemory(id)
      console.log(data);
      setDate(data)

    }
    asyncGetMemories()
  },[])


  return (
    <div className='container mb-5'>
    <section id="blog" className="blog">
<div className="container" data-aos="fade-up">

 <div className="row">
     <div className='col-lg-2'>

     </div>

   <div className="col-lg-8 entries mt-3 mb-5">

 
   <div className="card mb-3">
     <img src="https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg" alt="" className="img-fluid"/>
<div className="card-body">
<h5 className="card-title">{date.title}</h5>
<p className="card-text">{date.content}</p>
<p className="card-text"><small className="text-muted">{moment(date.crateAt).fromNow()}</small></p>
</div>
</div>



   </div>



 </div>

</div>
</section>
</div>
  )
}

export default Singunlar