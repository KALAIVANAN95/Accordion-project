import React, { useState } from 'react';
import Data from './Data';


import Accordion from './Accordion';
const App =() =>{


  const [data,setData]=useState(Data);

  return(
    <>
    <h1>React Accordion Project</h1>
    <div className='container'>

      <div className='accordionBlock'>

        {Data.map((val)=>{

          
          return(
            <>


            <Accordion   {...val}/>
             {/* <div className='question'>
            <h2>{val.question}</h2>
            <p>+</p>
            </div>
      
            <div className='answers'>
              <p>Some content
              </p>
            </div> */}
</>
          )
        })}

{/*      
<div className='question'> */}
      {/* <h2>{data}</h2>
      <p>+</p>
      </div>

      <div className='answers'>
        <p>Some content
        </p>
      </div> */}
      </div>
    </div>
    </>
  )

}

export default App;