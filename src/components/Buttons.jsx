import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Buttons = () => {
    
    const [message,setMessage]=useState('Press a button')

    const handleClick =(buttonNumber)=>{
    if(buttonNumber===1)
        {setMessage('ONE');}
        
    else if(buttonNumber===2)
        {setMessage('TWO');}

    else if(buttonNumber===3)
    {setMessage('THREE');}

    useEffect(()=>{
        inpt2()

    },[])

};
  return (
                                        

<div style={{ textAlign: 'center', marginTop: '50px' }}>
<div style={{ marginTop: '20px' }}>
    


         <Button onClick={()=> handleClick(1)}>Button1</Button>
         <br /><br />
         <Button onClick={()=> handleClick(2)}>Button2</Button>
         <br /><br />
         <Button onClick={()=> handleClick(3)}>Button3</Button>
         <br /><br /><br />
         {message}

   </div>
    </div>
  )
}

export default Buttons