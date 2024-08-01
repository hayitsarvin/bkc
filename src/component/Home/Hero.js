import gsap from 'gsap'
import React, { useContext, useEffect, useState } from 'react'
import { LanContext } from '../../pages/Root'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
const Hero = () => {
    var mobile =window.matchMedia("(max-width: 640px)")
    useEffect(() => {
         mobile =window.matchMedia("(max-width: 640px)")
    }, [])
    const lang = useContext(LanContext);
    const [open , setOpen] =  useState(false);
    useEffect(() => {
        if (mobile.matches) {

        }else{
            const text = document.querySelector(".hero-text-animation-div p")
            text.innerHTML = text.innerText.split("").map(
                (char , i) => 
                `<span style="transform:rotate(${i * 7}deg)">${char}</span>`
            ).join("")
        }
       
       
        
            gsap.set(".hero .hero-title-div-mask .title" , {
                translateY:"0",
                // delay:6,
                // duration:0.7
            })
            gsap.set(".hero .hero-title-div-mask .title .blue-line" , {
               left:"45%",
                // delay:6.7,
                // duration:0.7
            })
            gsap.set(".hero .hero-back-top-image-div .hero-back-top-image-mask" , {
                translateY:0,
                //  delay:6.7,
                //  duration:0.7
             })
             gsap.set(".hero-video-and-text-div" , {
                left:"25%",
                //  delay:7.2,
                //  duration:0.5
             })
             gsap.set([".hero .top-text" , ".hero .subtext " , ".hero .hero-btn-div"] , {
                autoAlpha:1,
                //  delay:7.2,
                //  duration:0.5
             })
        
       

    }, [])
    const videoPlayHandler = () => {
        setOpen(true)
        
    }
    const videoCloseHandler = () => {
       setOpen(false)
    }
  return (
    <div className='hero'>
        {
            mobile.matches ? (<></>) : (
                <div className={open ? 'hero-video-play-full-div open' : 'hero-video-play-full-div' }>
                     <div className='video-exit' onClick={() => videoCloseHandler()}>
                    <img alt='close icon' className='close-icon' src='/images/close.svg' />
                </div>
                    <div className='hero-video-play-full-mask'>
                    <video  controls   >
                            <source src="/video/bkc-v2.mp4" type="video/mp4" />
                            <source src="/video/bkc-v2.ogg" type="video/ogg" />
                            
                        </video>
                     </div>
                </div>
            )
        }
        <div className='hero-blue-back-color'></div>
        <div className='hero-back-top-image-div'>
            <div className={lang.languge == "fa" ? 'hero-back-top-image-mask hero-back-image-farsi' : "hero-back-top-image-mask"}>
                <div className='blue-layer'></div>
                <img alt='bonyankala factory image' src='./images/back-top-image.webp'  className='hero-back-top-image' />
            </div>
        </div>
        <div className='video-play-back-blur'>
        <div className='video-exit' onClick={() => videoCloseHandler()}>
                    <img alt='close icon' className='close-icon' src='/images/close.svg' />
                </div>
        </div>
        <div className={lang.languge == "fa" ? 'hero-flex farsi-hero-flex' : "hero-flex"}>
            {
                mobile.matches ? (<></>) : (
                    <div className='hero-video-div' onClick={() => videoPlayHandler()}>
                    <div className='hero-video-and-text-div'>
                    
                   <div className='video-mask-div'>
                   
                    <span className='video-overlay'></span>
                    <img alt='play icon'  src='./images/play.png' className='play-icon'/>
                        <video   loop autoPlay muted   >
                            <source src="/video/bkc-v.mp4" type="video/mp4" />
                            <source src="/video/bkc-v.mp4" type="video/webm" />
                            
                        </video>
                        
                   </div>
                   <div className='hero-text-animation-div'>
                    <p>play the video - play the video - play the video -</p>
                   </div>
                   </div>
                   
                </div>
                )
            }
           
            <div className='hero-content-div'>
                {/* {
                    mobile.matches ? (<div className='mobile-hero-image-div'>
                        <div className='mobile-hero-image-mask'>
                            <div className='mobile-hero-image-overlay'></div>
                            <img src='./images/Group157.png' />
                            </div>
                    </div>) :(<></>)
                } */}
                <p className='top-text'>best exporter</p>
                <div className='hero-title-div-mask'>
                <h1 className='title'>{ lang.languge == "fa" ? "بنیان کالا شیمی" : "bonyan"}{ lang.languge == "fa" ? "": (<br/>)}<span className={ lang.languge == "fa" ?'blue-line top-40 left-0' : 'blue-line'} ></span>{ lang.languge == "fa" ? "": "kala chemie"}</h1>
                </div>
                <h2 className='subtext'>{lang.home.hero.subtitle}</h2>
                {
                      mobile.matches ? (<></>) : (
                        <div className='features-div features-div-farsi'>
                        <div className='feature'>
                            <div className='feature-icon-div'>
                                <img alt='bag icon' src='./images/quality.gif' className='feature-icon' />
                                
                            </div>
                           
                           
                           
                        </div>
  
        <div className='feature-text-div'>
                                        <p className='feature-text' >{lang.languge == "fa" ? "بهبود کیفیت بنیان کار ماست" : (lang.languge == "en" ? "Quality improvement is the basis of our work" : ( lang.languge == "ar" ? "تحسین الجودة قاعدة عملنا" :"Повышение качества – основа нашей работы")) }</p>
                                        
        </div>
<div className='feature'>
                            <div className='feature-icon-div'>
                                <img alt='truck icon' src='./images/quality.gif' className='feature-icon' />
                                
                            </div>
                            
                            </div>
                    </div>
                      )
                }
               
                <div className='hero-btn-div'>
                    <HashLink smooth to={"/#product-section"} className={ lang.languge == "fa" ? "btn btn-reverse" : (lang.languge == "ru" ? "btn btn-ru" : "btn")}><p>{lang.home.hero.heroBtn}</p><span><img alt='btn forward icon' src='/images/forward.svg' /></span></HashLink>
                   
                </div>
                {   
                
                    mobile.matches ? (
                        <div className='features-div'>
                           
                           <div className='feature'>
                            <div className='feature-icon-div'>
                                <img alt='bag icon' src='./images/quality.gif' className='feature-icon' />
                                
                            </div>
                           
                           
                           
                        </div>
  
        <div className='feature-text-div'>
                                        <p className='feature-text' >{lang.languge == "fa" ? "بهبود کیفیت بنیان کار ماست" : (lang.languge == "en" ? "Quality improvement is the basis of our work" : ( lang.languge == "ar" ? "تحسین الجودة قاعدة عملنا" :"Повышение качества – основа нашей работы")) }</p>
                                        
        </div>
<div className='feature'>
                            <div className='feature-icon-div'>
                                <img alt='truck icon' src='./images/quality.gif' className='feature-icon' />
                                
                            </div>
                            
                            </div>
                        </div>
                    ) : (<></>)
                    
                }
            </div>
        </div>
        <div className='bkc-logo-animation-div'>
            <div className='bkc-logo-animation'>
               
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                
            </div>
        </div>
    </div>
  )
}

export default Hero