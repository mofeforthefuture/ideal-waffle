import React from 'react'

function Input({placeholder, height, width,}) {
    return (
        <div style={{width:'100%',height:'30px',paddingLeft:'5px', display:'flex',}}>
            <input style={{
                width:'100%', 
                height:'100%',
                borderWidth: 0, 
                borderRadius:4, 
                border:'none', 
                display:'flex'
                }} placeholder={`${placeholder}`}/>
        </div>
    )
}

export default Input
