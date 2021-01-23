import data from './data'
import {FiPlus} from 'react-icons/fi'
import {FiMinus} from 'react-icons/fi'
import {useState} from 'react'
const Accordion=({title,info})=>{
     const [showInfo,setShowInfo] = useState(false)
   return (
 <article className="article">
 <div className="title-content">
 <h3 className="title" >{title}</h3>
 <button onClick={()=>{
setShowInfo(!showInfo)

 }} className="btn">{showInfo? <FiMinus/> : <FiPlus/>}</button>
 </div>
 <div className="info2">
 { showInfo && <p>{info}</p>}
 </div>
 </article>
   )   
}
export default Accordion