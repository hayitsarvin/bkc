import React, { useContext, useEffect, useState } from 'react'
import "../styles/aboutus.css"
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LanContext } from './Root';


gsap.registerPlugin(ScrollTrigger);
const AboutUs = () => {
  const lang = useContext(LanContext);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  var mobile =window.matchMedia("(max-width: 640px)")
    useEffect(() => {
         mobile =window.matchMedia("(max-width: 640px)")
    }, [])
    const showHandler = (id) => {

      var element = document.getElementById(id );
  element.classList.add("opacity-one");

    }
    const hideHandler = (id) => {

      var element = document.getElementById(id );
  element.classList.remove("opacity-one");

    }
    useEffect(() => {
      if(mobile.matches){


      }else{
        gsap.to(".about-us-page .about-page-title", {
          scrollTrigger: {
              scrub: 1,
              trigger: ".about-us-hero",
              start: "top top",
              end: "bottom top",
              
              
            },
         
          translateY:"-500%",
          
          // duration:0.5,
          ease: "sine.out",
        });
        gsap.to(".about-us-page .about-page-date", {
          scrollTrigger: {
              scrub: 1,
              trigger: ".about-page-date-div",
              start: "top bottom",
              end: "bottom top",
              
              
            },
         
          translateY:"-500%",
          scale:3,
          // duration:0.5,
          ease: "sine.out",
        });
        gsap.to(".about-us-page .third-text", {
          scrollTrigger: {
              scrub: 1,
              trigger: ".about-third-text-div",
              start: "top bottom",
              end: "bottom top",
              
              
            },
         
          translateY:"-500%",
          scale:2,
          // duration:0.5,
          ease: "sine.out",
        });
        gsap.to(".about-us-page .fourt-text-div .fort-text", {
          scrollTrigger: {
              scrub: 1,
              trigger: ".about-fourt-div",
              start: "top bottom",
              end: "bottom top",
             
            },
         
          translateY:"-500%",
          scale:2,
          // duration:0.5,
          ease: "sine.out",
        });
        gsap.to(".about-us-page .fourt-text-div .fort-text-2", {
          scrollTrigger: {
              scrub: 1,
              trigger: ".about-fourt-div",
              start: "top bottom",
              end: "bottom top",
             
            },
         
          translateY:"-300%",
          scale:1.5,
          // duration:0.5,
          ease: "sine.out",
        });
        gsap.to(".about-us-page .about-left-text", {
          scrollTrigger: {
              scrub: 1,
              trigger: ".about-image-and-text-div",
              start: "top bottom+=200",
              end: "bottom top",
              
              
            },
         
          
          translateY:"-600%",
          duration:0.5,
          ease: "sine.out",
        });
        gsap.to(".about-us-page .about-right-image-mask", {
          scrollTrigger: {
              scrub: 1,
              trigger: ".about-image-and-text-div",
              start: "top bottom+=200",
              end: "bottom top",
              
              
            },
         
          translateY:"-200%",
          
          duration:0.5,
          ease: "sine.out",
        });
        gsap.to(".about-us-page .about-circle-text-div", {
          scrollTrigger: {
              scrub: 1,
              trigger: ".about-page-date-div",
              start: "top bottom",
              end: "bottom top",
             
              
            },
         
          translateY:"-100%",

          // duration:0.5,
          ease: "sine.out",
        });
        gsap.to(".about-us-page .about-date-image", {
          scrollTrigger: {
              scrub: 1,
              trigger: ".about-page-date-div",
              start: "top bottom",
              end: "bottom top",
              
              
            },
         
          // translateY:"-200%",
          left:"100%",
          duration:0.5,
          ease: "sine.out",
        });
        gsap.to(".about-us-page .about-hero-image", {
          scrollTrigger: {
              scrub: 1,
              trigger: ".about-us-hero",
              start: "top top",
              end: "bottom top",
              
              
            },
         
          translateY:"-200%",
          duration:0.5,
          ease: "sine.out",
        });
        gsap.to(".about-us-page .about-target-market-div .target-market-title-div", {
          scrollTrigger: {
              scrub: 1,
              trigger: ".about-target-market-div",
              start: "top bottom",
              end: "bottom top",
              
              
            },
         
          translateY:"-600%",
          scale:1.5,
          duration:0.5,
          ease: "sine.out",
        });
        gsap.to(".about-us-page .about-target-market-div .target-market-names-div", {
          scrollTrigger: {
              scrub: 1,
              trigger: ".about-target-market-div",
              start: "top bottom",
              end: "bottom top",
              
              
            },
         
          translateY:"-100%",
          scale:1.3,
          duration:0.5,
          ease: "sine.out",
        });
        gsap.to(".certificate-section .certificates-div", {
          scrollTrigger: {
              scrub: 1,
              trigger: ".certificate-section",
              start: "top center-=100",
              end: "bottom top",

            pin:true,
              
             
            },
          
         
          left:"-2750px",
          duration:1,
          ease: "sine.out",
        });
      }
        
    }, [])
    useEffect(() => {
        const text = document.querySelector(".about-text-animation-div p")
        text.innerHTML = text.innerText.split("").map(
            (char , i) => 
            `<span style="transform:rotate(${i * 8.3}deg)">${char}</span>`
        ).join("")

    }, [])
    const [showImageId , setSHowImageId] = useState()
    const closeImageHandler = () => {
        gsap.to(".certificate-show-image-div" , {
          display:"none"
        })
    }
    const openImageHandler = (id) => {
      gsap.to(".certificate-show-image-div" , {
        display:"block"
      })
      setSHowImageId(id)

      
  }
  return (
    <>
     <div className='certificate-show-image-div'>
      <div className='exit-div' onClick={() => closeImageHandler()}>
        <img src='/images/close.svg' />
      </div>
              <div className='certificate-show-image-mask'>
                <img src='./images/c1-full.webp' className={showImageId == 1 ?'certificate-show-image show-image' : 'certificate-show-image'} />
                <img src='./images/c2-full.webp' className={showImageId == 2 ?'certificate-show-image show-image' : 'certificate-show-image'} />
                <img src='./images/c3-full.webp' className={showImageId == 3 ?'certificate-show-image show-image' : 'certificate-show-image'} />
                <img src='./images/c4-full.webp' className={showImageId == 4 ?'certificate-show-image show-image' : 'certificate-show-image'} />
                <img src='./images/c5-full.webp' className={showImageId == 5 ?'certificate-show-image show-image' : 'certificate-show-image'} />
                <img src='./images/c6-full.webp' className={showImageId == 6 ?'certificate-show-image show-image' : 'certificate-show-image'} />
                <img src='./images/c7-full.webp' className={showImageId == 7 ?'certificate-show-image show-image' : 'certificate-show-image'} />
                <img src='./images/c8-full.webp' className={showImageId == 8 ?'certificate-show-image show-image' : 'certificate-show-image'} />
                <img src='./images/c9-full.webp' className={showImageId == 9 ?'certificate-show-image show-image' : 'certificate-show-image'} />
                <img src='./images/c10-full.webp' className={showImageId == 10 ?'certificate-show-image show-image' : 'certificate-show-image'} />
                <img src='./images/c11-full.webp' className={showImageId == 11 ?'certificate-show-image show-image' : 'certificate-show-image'} />
              </div>
            </div>
    <div className='about-us-page'>
     
        <div className='about-us-hero'>
            <div className='about-hero-image'>
                <img src='./images/back-top-image.jpg' />
            </div>
            <h1 className='about-page-title'>bonyan kala chemie</h1>
        </div>
        <div className='about-page-date-div'>
        <div className='about-date-image'>
                <img src='./images/image3.jpg' />
            </div>
            <h2 className='about-page-date'>1997</h2>
            
            <div className='about-circle-text-div'>
            <div className='about-text-animation-div'>
                <p>bonyan kala - bonyan kala - bonyan kala -</p>
               </div>
               </div>
        </div>
        <div className='about-third-text-div'>
            <p className='third-text'>{lang.aboutus.textone}</p>
        </div>
        <div className='about-fourt-div'>
        <div className='about-image-and-text-div'>
            <div className='about-image-and-text-div-left'>
                <p className='about-left-text'>{lang.aboutus.texttwo}</p>
            </div>
            <div className='about-image-and-text-div-right'>
                <div className='about-right-image-mask'>
                    <img src='./images/image4.jpg'  />
                </div>
            </div>
        </div>
        <div className='fourt-text-div'>
            <p className='fort-text'>{lang.aboutus.textthree}</p>
            <p className='fort-text-2'>{lang.aboutus.textfour}</p>
        </div>
        
        
        </div>
        <div className='about-target-market-div'>
          <div className='market-image-back'>
            <img id='i1' src='./images/image2.jpg' />
            </div>
            <div className='market-image-back'>
            <img id='i2' src='./images/image4.jpg' />
            </div>
            <div className='market-image-back'>
            <img id='i3' src='./images/image3.jpg' />
            </div>
            <div className='market-image-back'>
            <img id='i4' src='./images/image4.jpg' />
            </div>
            
         
            <div className='target-market-title-div'>
                <h3 className='target-market-title'>{lang.aboutus.market.title}</h3>
            </div>
            <div className='target-market-names-div'>
                <p className='target-market-name' onMouseOver={() => showHandler("i1")} onMouseLeave={() => hideHandler("i1")}>{lang.aboutus.market.appone}</p>
                <p className='target-market-name' onMouseOver={() => showHandler("i2")} onMouseLeave={() => hideHandler("i2")}>{lang.aboutus.market.apptwo}</p>
                <p className='target-market-name' onMouseOver={() => showHandler("i3")} onMouseLeave={() => hideHandler("i3")}>{lang.aboutus.market.appthree}</p>
                <p className='target-market-name' onMouseOver={() => showHandler("i4")} onMouseLeave={() => hideHandler("i4")}>{lang.aboutus.market.appfour}</p>
                <p className='target-market-name' onMouseOver={() => showHandler("i4")} onMouseLeave={() => hideHandler("i4")}>{lang.aboutus.market.appfive}</p>
                <p className='target-market-name' onMouseOver={() => showHandler("i4")} onMouseLeave={() => hideHandler("i4")}>{lang.aboutus.market.appsix}</p>
                <p className='target-market-name' onMouseOver={() => showHandler("i4")} onMouseLeave={() => hideHandler("i4")}>{lang.aboutus.market.appseven}</p>
                <p className='target-market-name' onMouseOver={() => showHandler("i4")} onMouseLeave={() => hideHandler("i4")}>{lang.aboutus.market.appeight}</p>
            </div>
        </div>
        
        <div className='certificate-section'>
            
            <div className='certificates-div'>
                <div className='certificate-div'>
                    <div className='certificate-image-mask'>
                        <img src='./images/c1.webp' onClick={() => openImageHandler(1)}/>
                    </div>
                    <h4 className='certificate-name'>Paint and Resin Manufacturers Association of Iran</h4>
                </div>
                <div className='certificate-div'>
                    <div className='certificate-image-mask'>
                    <img src='./images/c2.webp' onClick={() => openImageHandler(2)}/>
                        
                    </div>
                    <h4 className='certificate-name'>ICS Certificates</h4>

                </div>
                <div className='certificate-div'>
                    <div className='certificate-image-mask'>
                    <img src='./images/c3.webp' onClick={() => openImageHandler(3)}/>
                        
                    </div>
                    <h4 className='certificate-name'>Iran Composites Association</h4>

                </div>
                <div className='certificate-div'>
                    <div className='certificate-image-mask'>
                    <img src='./images/c4.webp' onClick={() => openImageHandler(4)}/>
                        
                    </div>
                    <h4 className='certificate-name'>Top Chemicals Exporter
2016 , 2017 , 2018</h4>

                </div>
                <div className='certificate-div'>
                    <div className='certificate-image-mask'>
                    <img src='./images/c5.webp' onClick={() => openImageHandler(5)}/>
                        
                    </div>
                    <h4 className='certificate-name'>SGS Certificate</h4>

                </div>
                <div className='certificate-div'>
                    <div className='certificate-image-mask'>
                    <img src='./images/c6.webp' onClick={() => openImageHandler(6)}/>
                        
                    </div>
                    <h4 className='certificate-name'>Certificate of Appreciation
Plant Expansion Project</h4>

                </div>
                <div className='certificate-div'>
                    <div className='certificate-image-mask'>
                    <img src='./images/c7.webp' onClick={() => openImageHandler(7)}/>
                        
                    </div>
                    <h4 className='certificate-name'>R & D Unit Certificate
</h4>

                </div>

                <div className='certificate-div'>
                    <div className='certificate-image-mask'>
                    <img src='./images/c8.webp' onClick={() => openImageHandler(8)}/>
                        
                    </div>
                    <h4 className='certificate-name'>R & D Unit Certificate
</h4>

                </div>

                <div className='certificate-div'>
                    <div className='certificate-image-mask'>
                    <img src='./images/c9.webp' onClick={() => openImageHandler(9)}/>
                        
                    </div>
                    <h4 className='certificate-name'>R & D Unit Certificate
</h4>

                </div>

                <div className='certificate-div'>
                    <div className='certificate-image-mask'>
                    <img src='./images/c10.webp' onClick={() => openImageHandler(10)}/>
                        
                    </div>
                    <h4 className='certificate-name'>R & D Unit Certificate
</h4>

                </div>

                <div className='certificate-div'>
                    <div className='certificate-image-mask'>
                    <img src='./images/c11.webp' onClick={() => openImageHandler(11)}/>
                        
                    </div>
                    <h4 className='certificate-name'>R & D Unit Certificate
</h4>

                </div>


            </div>
            
        </div>
    </div>
    </>
  )
}

export default AboutUs