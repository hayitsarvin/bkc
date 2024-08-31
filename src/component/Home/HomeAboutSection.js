import React, { useContext, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LanContext } from '../../pages/Root';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

gsap.registerPlugin(ScrollTrigger);
const HomeAboutSection = () => {
  const lang = useContext(LanContext);
  useEffect(() => {
    const text = document.querySelector(".about-go-text-animation")
        text.innerHTML = text.innerText.split("").map(
            (char , i) => 
            `<span style="transform: translate(-50% , -50%) rotate(${i * 7.8}deg)">${char}</span>`
        ).join("")
  },[])
var mobile =window.matchMedia("(max-width: 640px)")
useEffect(() => {
     mobile =window.matchMedia("(max-width: 640px)")
}, [mobile])

    useEffect(() => {
      if(mobile.matches){

      }else {
        const tl = gsap.timeline({
          scrollTrigger: {
            scrub:1,
            
            trigger: ".text-box-1",
            start: "top top",
            
            end: "bottom top",
            
          },
        });
        
        tl.to(".image-2", {
          translateY: "-101%",
          duration:3,
          ease: "sine.out",
        });
        const tl2 = gsap.timeline({
          scrollTrigger: {
            scrub:1,
            
            trigger: ".text-box-2",
            start: "top top",
            
            end: "bottom top",
            
          },
        });
        
        tl2.to(".image-3", {
          translateY: "-202%",
          duration:3,
          ease: "sine.out",
        });
      }
        
    } , [mobile])
    if(mobile.matches){
      return (
        <div className='home-about-section'>
            <div className='title-div'>
                <h2 className='title'>{lang.languge == "fa" ? "ما بنیان کالا شیمی هستیم ": (lang.languge == "en" ? "we are bonyan kala chemie" :( lang.languge == "ar" ?  "نحن بنيان كالا كيمي" : "мы Боньян Кала Хими"))}</h2>
            </div>
            <div className='home-about-section-content'>

                <div className='content-side-div'>
                    <div className='content about-content-box text-box-3'>
                        <div className='text-div'>
                            <p className='about-text'>{lang.home.about.subtextone}</p>
                        </div>
                        <div className='home-about-btn-div'>
                        <p className='about-go-text-animation'>about us - about us - about us - about us -</p>

                        <div className='btn-div'>
                           
                            <Link to={'/about-us'} className='about-section-btn'><span className='btn-text'>go</span></Link>

                        </div>
                         
                        </div>
                    </div>
                </div>
            </div>
        </div>
      )
    }else{
      return (
        // <LazyLoad offset={200} >

        <div className='home-about-section'>
            <div className='title-div'>
                <h2 className='title'>{lang.languge == "fa" ? "ما بنیان کالا شیمی هستیم ": (lang.languge == "en" ? "we are bonyan kala chemie" : "мы Боньян Кала Хими")}</h2>
            </div>
            <div className='home-about-section-content'>
                <div className='image-side-div'>
               
                    <div className='image-side-mask'>
                        <img alt='bonyan kala ' src='./images/back-top-image.jpg' className='about-image-side-image' />
                    {/* </LazyLoad> */}
                    {/* <LazyLoad offset={200} > */}

                    <img alt='bonyankala factory' src='./images/image2.jpg' className='about-image-side-image image-2' />
                    {/* </LazyLoad> */}
                    {/* <LazyLoad offset={200} > */}

                    <img alt='bonyankala factory 2' src='./images/image3.jpg' className='about-image-side-image image-3' />
                    {/* </LazyLoad> */}

                    </div>
                    
                </div>
                <div className='content-side-div'>
                    <div className='content about-content-box text-box-1'>
                        <div className='text-div'>
                            <p className='about-text'>{lang.home.about.subtextone}</p>
                        </div>
                       
                    </div>
                    <div className='content about-content-box text-box-2'>
                        <div className='text-div'>
                            <p className='about-text'>{lang.home.about.subtexttwo}</p>
                        </div>
                        
                    </div>
                    <div className='content about-content-box text-box-3'>
                        <div className='text-div'>
                            <p className='about-text'>{lang.home.about.subtextthree}</p>
                        </div>
                        <div className='home-about-btn-div'>
                        <p className='about-go-text-animation'>about us - about us - about us - about us -</p>

                        <div className='btn-div'>
                           
                            <Link to={'/about-us'} className='about-section-btn'><span className='btn-text'>go</span></Link>

                        </div>
                         
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
        // </LazyLoad>
      )

    }
  
}

export default HomeAboutSection