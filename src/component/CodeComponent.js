import React from 'react'
import { Link } from 'react-router-dom'

const CodeComponent = ({img,codesArray}) => {
  return (
    <div className='codes-div'>
        <div className='application-image-mask'>
            <img alt='product image' src={img} className='application-image'/>
        </div>
        <div className='code-content-div'>
           
            {
                codesArray.map(code => (
                    <div className='code-btn'>
                    <Link to={"/tds/"+code}>
        
                        <a href='#' className='btn'>{code}</a>
                    </Link>
        
                    </div>
                ))
            }
            
        </div>
    </div>
  )
}

export default CodeComponent