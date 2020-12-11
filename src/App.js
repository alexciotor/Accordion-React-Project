 import Accordion from './accordion'
 
import{useState, useEffect } from 'react'
import data from './data';
function App() {

 
  return (
 <main>
<div className="container">
<div className='h3-title' >
<h3  >Questions and answers about login</h3>
</div>
<section className="info">
{data.map(item=>{
  return <Accordion key={item.id} {...item} />

})
}
</section>
</div> 
 </main>
 
  )}
 

export default App;
