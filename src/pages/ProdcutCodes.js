import React, { useEffect } from 'react'
import "../styles/productcode.css"
import CodeComponent from '../component/CodeComponent'
import gsap from 'gsap'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { productData } from '../data/data'
import { useContext } from 'react'
import { LanContext } from './Root'
const ProdcutCodes = () => {
  const { id } = useParams();
  const [product , setProduct] = useState()
  const lang = useContext(LanContext);
  var mobile =window.matchMedia("(max-width: 640px)")
  useEffect(() => {
      mobile =window.matchMedia("(max-width: 640px)")
  } , [])
  useEffect(() => {
    const audio = new Audio('/video/audio-bkc.mp3');
    // audio.muted = true;
    audio.play()

    document.body.addEventListener("mousemove" , e => {
    // audio.muted = false;

    })
    return () => {
        audio.pause()
    }
    
    // console.log("DAS",audio);
  } ,[])
  const AlkydResins = productData.AlkydResins.map(data => { 
    return (<>
    <h2 className='product-sub-name'>{lang.languge == "fa" ? data.nameFa : (lang.languge == "en" ? data.name : data.nameRu)}</h2>

    <div className='codes-list-div'>
      {data.applications.map(d => {
        return( <CodeComponent  img={d.image} codesArray={d.codes}/>)
       
      })}
    </div>
</>)
  }) 
  const SaturatedPolyesterResins = productData.SaturatedPolyesterResins.map(data => { 
    return (<>
    <h2  className='product-sub-name'>{data.name}</h2>

    <div className='codes-list-div'>
      {data.applications.map(d => {
        return( <CodeComponent  img={d.image} codesArray={d.codes}/>)
       
      })}
    </div>
</>)
  }) 
  const UnsaturatedPolyesterResins = 
    (<>


    <div className='codes-list-div'>
      {productData.UnsaturatedPolyesterResins.applications.map(d => {
        return( <CodeComponent  img={d.image} codesArray={d.codes}/>)
       
      })}
    </div>
</>)
  const Driers = 
  (<>


  <div className='codes-list-div'>
    {productData.Driers.applications.map(d => {
      return( <CodeComponent  img={d.image} codesArray={d.codes}/>)
     
    })}
  </div>
</>)
 const Epoxy = 
 (<>


 <div className='codes-list-div'>
   {productData.Epoxy.applications.map(d => {
     return( <CodeComponent  img={d.image} codesArray={d.codes}/>)
    
   })}
 </div>
</>)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const [videoSkipStatus , setVideoSkipStatus] = useState(false)
  const videoSkip = () => {
    if(!videoSkipStatus){
      gsap.to([".product-code-title-div" ,".codes-list-div", ".product-sub-name"] , {
        autoAlpha:1,
        translateY:"0",
        
        duration:1
      })
      gsap.set([".skip-div" ] , {
        autoAlpha:0,
        display:"none",
        
        duration:1
      })
    setVideoSkipStatus(true)

    }
  }
  useEffect(() => {
    if(mobile.matches){
      videoSkip()
    }
  },[mobile])
  useEffect(() => {
    if(id == 1) {
      console.log(productData.AlkydResins[0].name);
      console.log(productData.AlkydResins[1].name);
      console.log(productData.AlkydResins[0].applications);

    }
  }, [])

  useEffect(() => {
   
    // document.querySelector('.product-code-page video').pause();
    // gsap.to(".video-back-div" , {
      
    //   delay:15,
    //   duration:0.5
    // })
    gsap.to([".product-code-title-div" ,".codes-list-div" , ".product-sub-name"] , {
      autoAlpha:1,
      translateY:"0",
      delay:17,
      duration:1
    })
  }, [])
  return (
    <div className='product-code-page' onClick={() => videoSkip()}>
      
      <div className='skip-div' onClick={() => videoSkip()}>
        <p className='skip-btn'>skip</p>
      </div>
        <div className='video-back-div' >
            <video  loop autoPlay muted  id="bgvid" playsInline poster="/images/bkc-code-c.jpg" >
                <source src="/video/bkc-code.webm" type="video/webm" />
                <source src="/video/bkc-code-c.mp4" type="video/mp4" />
        </video>
        
        </div>
        <div className='product-code-title-div'>
        
{/* <audio src="/video/a.mp3" autoplay></audio> */}
            <h3 className='product-code-title'>{
          id == 1 ? (lang.home.products.AlkydResins.name) : (
            id == 2 ? (lang.home.products.SaturatedPolyesterResins.name) : (
              id == 3 ? (lang.home.products.UnsaturatedPolyesterResins.name) : (
                id == 4 ? (lang.home.products.Driers.name) : (
                  id == 5 ? (lang.home.products.SolidEpoxyResin.name) : (<></>)
                )
              )
            )
          )
        }</h3>
        </div>
       
            {/* <div className='codes-list-div'>
            <CodeComponent />
            <CodeComponent />
            <CodeComponent />
            <CodeComponent />
        </div> */}
        {
          id == 1 ? (AlkydResins) : (
            id == 2 ? (SaturatedPolyesterResins) : (
              id == 3 ? (UnsaturatedPolyesterResins) : (
                id == 4 ? (Driers) : (
                  id == 5 ? (Epoxy) : (<></>)
                )
              )
            )
          )
        }
      
    </div>
  )
}

export default ProdcutCodes