import React, { useEffect, useState } from 'react'
import "../styles/loadinganimation.css"
import gsap from 'gsap'

const LoadingAnimation = () => {
 
    const [percent , setPercent] = useState(0)
    var percentNum = 0
    // setPercent(5)
    useEffect(() => {
        gsap.to(".loading-animation-div" , {
            translateY: "-101%",
            duration:1,
            delay:10,
           
        })
        
        // setInterval(() => {
        //     if(percent >= 100) {

        //     }else{
        //        setPercent(percent++)
        //     }
            
        // }, 1000);
        
        
    },[])
    useEffect(() => {
        const counter = setInterval(()  => {
            
            if(percentNum < 100){
            percentNum += 1
            setPercent(percentNum)
                gsap.to(".loading-black-back" , {
                    width: percentNum + "%",
                })
            
            }else{
                clearInterval(counter);
                // alert("fuck")
                
            }
            console.log("object");
        }, 100);
    }, [])
    
  
    
  return (
    <div className='loading-animation-div'>
        <div className='loading-black-back' >

        </div>
        <div className='loading-process-div'>
            <p className='loading-process'>{percent}</p>
        </div>
        
        <div className='loading-logo-div'>

            <h3 className='loading-logo'>BKC</h3>
        <p className='loading-text'>BONYAN KALA CHEMIE</p>

        </div>
        {/* <div className='loading-percent-div'>
            <h3 className='loading-percent'>{percent}%</h3>
        </div> */}
    </div>
  )
}

export default LoadingAnimation