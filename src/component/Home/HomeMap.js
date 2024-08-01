import React from 'react'
import { LanContext } from '../../pages/Root';
import { useContext } from 'react';
import LazyLoad from 'react-lazy-load';

const HomeMap = () => {
  const lang = useContext(LanContext);
  return (
    <div className='map-section'>
        <div className='map-video-mask'>
        <LazyLoad offset={200} >
        <video  loop autoPlay muted  id="bgvidmap" playsInline >
                <source src="/video/map-3.webm" type="video/webm" />
                {/* <source src="/video/map-3.mp4" type="video/mp4" /> */}
        </video>
        </LazyLoad>
        </div>
        <div className='bkc-logo-animation-div'>
            <div className='bkc-logo-animation'>
               
                    <p className='bkc-logos3'>{lang.home.map.c1}</p>
                    <p className='bkc-logos3'>{lang.home.map.c2}</p>
                    <p className='bkc-logos3'>{lang.home.map.c3}</p>
                    <p className='bkc-logos3'>{lang.home.map.c4}</p>
                    <p className='bkc-logos3'>{lang.home.map.c5}</p>
                    <p className='bkc-logos3'>{lang.home.map.c6}</p>
                    <p className='bkc-logos3'>{lang.home.map.c7}</p>
                    <p className='bkc-logos3'>{lang.home.map.c8}</p>
                    <p className='bkc-logos3'>{lang.home.map.c9}</p>
                    <p className='bkc-logos3'>{lang.home.map.c10}</p>
                    <p className='bkc-logos3'>{lang.home.map.c11}</p>
                    <p className='bkc-logos3'>{lang.home.map.c12}</p>
                    <p className='bkc-logos3'>{lang.home.map.c13}</p>
                    <p className='bkc-logos3'>{lang.home.map.c14}</p>
                    <p className='bkc-logos3'>{lang.home.map.c15}</p>
                    <p className='bkc-logos3'>{lang.home.map.c16}</p>
                    <p className='bkc-logos3'>{lang.home.map.c1}</p>
                    <p className='bkc-logos3'>{lang.home.map.c2}</p>
                    <p className='bkc-logos3'>{lang.home.map.c3}</p>
                    <p className='bkc-logos3'>{lang.home.map.c4}</p>
                    <p className='bkc-logos3'>{lang.home.map.c5}</p>
                    <p className='bkc-logos3'>{lang.home.map.c6}</p>
                    <p className='bkc-logos3'>{lang.home.map.c7}</p>
                    <p className='bkc-logos3'>{lang.home.map.c8}</p>
                    <p className='bkc-logos3'>{lang.home.map.c9}</p>
                    <p className='bkc-logos3'>{lang.home.map.c10}</p>
                    <p className='bkc-logos3'>{lang.home.map.c11}</p>
                    <p className='bkc-logos3'>{lang.home.map.c12}</p>
                    <p className='bkc-logos3'>{lang.home.map.c13}</p>
                    <p className='bkc-logos3'>{lang.home.map.c14}</p>
                    <p className='bkc-logos3'>{lang.home.map.c15}</p>
                    <p className='bkc-logos3'>{lang.home.map.c16}</p>
                    {/* <p className='bkc-logos3'>{lang.home.map.c1}</p>
                    <p className='bkc-logos3'>{lang.home.map.c1}</p>
                    <p className='bkc-logos3'>{lang.home.map.c1}</p>
                    <p className='bkc-logos3'>{lang.home.map.c1}</p>
                    <p className='bkc-logos3'>{lang.home.map.c1}</p>
                    <p className='bkc-logos3'>{lang.home.map.c1}</p>
                    <p className='bkc-logos3'>{lang.home.map.c1}</p>
                    <p className='bkc-logos3'>{lang.home.map.c1}</p>
                    <p className='bkc-logos3'>{lang.home.map.c1}</p>
                    <p className='bkc-logos3'>{lang.home.map.c1}</p>
                    <p className='bkc-logos3'>{lang.home.map.c1}</p>
                    <p className='bkc-logos3'>{lang.home.map.c1}</p>
                    <p className='bkc-logos3'>{lang.home.map.c1}</p>
                    <p className='bkc-logos3'>{lang.home.map.c1}</p>
                    <p className='bkc-logos3'>{lang.home.map.c1}</p>
                    <p className='bkc-logos3'>{lang.home.map.c1}</p>
                    <p className='bkc-logos3'>{lang.home.map.c1}</p>
                    <p className='bkc-logos3'>{lang.home.map.c1}</p>
                    <p className='bkc-logos3'>{lang.home.map.c1}</p>
                    <p className='bkc-logos3'>{lang.home.map.c1}</p>
                    <p className='bkc-logos3'>{lang.home.map.c1}</p>
                    <p className='bkc-logos3'>{lang.home.map.c1}</p>
                    <p className='bkc-logos3'>{lang.home.map.c1}</p>
                    <p className='bkc-logos3'>{lang.home.map.c1}</p>
                    <p className='bkc-logos3'>{lang.home.map.c1}</p>
                    <p className='bkc-logos3'>{lang.home.map.c1}</p>
                    <p className='bkc-logos3'>{lang.home.map.c1}</p>
                    <p className='bkc-logos3'>{lang.home.map.c1}</p>
                    <p className='bkc-logos3'>{lang.home.map.c1}</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p>
                    <p className='bkc-logos3'>BKC</p> */}
                
            </div>
        </div>
    </div>
  )
}

export default HomeMap