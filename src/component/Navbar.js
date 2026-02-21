import React, { createContext, useEffect, useState } from 'react'
import "../styles/navbar.css"
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContext } from 'react';
import { Link, useLocation } from "react-router-dom";
import { LanContext } from '../pages/Root';
import { useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

const Navbar = ({setLang , setPage , page}) => {
    const { pathname } = useLocation();
    const [lanOpen , setLanOpen] = useState(false)
    
    function useOutsideAlerter(ref) {
        useEffect(() => {
          /**
           * Alert if clicked on outside of element
           */
          function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
              setLanOpen(false)
            }
          }
          // Bind the event listener
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, [ref]);
      }
      const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);



    const [lan , setLan] = useState("en")
    const theme = useContext(LanContext);
    const [hamOpen , setHamOpen] = useState(false)
    const [activeLink , setActiveLink] = useState(0)
    useEffect(() => {
        if (pathname === '/') setActiveLink(0);
        else if (pathname === '/about-us') setActiveLink(1);
        else if (pathname === '/contact-us') setActiveLink(2);
        else if (pathname.startsWith('/articles')) setActiveLink(3);
    }, [pathname])
    useEffect(() => {
        // const tl = gsap.timeline({
        //     scrollTrigger: {
              
        //       trigger: ".hero",
        //       start: "top+=50 top",
        //         markers:true
              
        //     },
        //   });
          
         const navani = gsap.to(".navbar .nav-back", {
            scrollTrigger: {
              
                trigger: ".hero",
                start: "top+=65 top",
                toggleActions: 'play none none reverse',
              },
           
            translateY:"0px",
            duration:0.5,
            ease: "sine.out",
          });
         
    }, [])
    return (
        <div className={'navbar' + (pathname.startsWith('/articles') ? ' navbar--scrolled' : '')}>
            <div className='navbar-logo-div' >
              <Link to={"/"}>
                <img alt='bonyankala logo' className='navbar-logo' src='/images/BKCLogo.png' />
                </Link>
            </div>
            <div className='navbar-links-div'>
                
                <Link to={"/"} className={'link ' + (activeLink == 0 ? "active" : "")} onClick={() => {setActiveLink(0);setPage(0)}}>{lan == "fa" ? "خانه" : (lan == "en" ? "Home" : (lan == "ar" ? "الصفحة الرئیسیة" :"дом"))}</Link>
                <Link to={"/about-us"} className={'link ' + (activeLink == 1 ? "active" : "")} onClick={() => {setActiveLink(1);setPage(1)}}>{lan == "fa" ? "درباره ما" : (lan == "en" ? "About us" : (lan == "ar" ?"معلومات عنّا" :"О нас"))}</Link>
                <Link to={"/contact-us"} className={'link ' + (activeLink == 2 ? "active" : "")} onClick={() => {setActiveLink(2);setPage(2)}}>{lan == "fa" ? "تماس با ما" : (lan == "en" ? "Contact us" : (lan == "ar" ? "جهات االتصال" :"Связаться с нами"))}</Link>
                <Link to={"/articles"} className={'link ' + (activeLink == 3 ? "active" : "")} onClick={() => {setActiveLink(3);setPage(3)}}>{theme?.articles?.navLabel || (lan == "fa" ? "مقالات" : (lan == "en" ? "Articles" : (lan == "ar" ? "المقالات" : "Статьи")))}</Link>
            </div>
            <div className='navbar-contact-div'>
                <div className='select-lang-div' ref={wrapperRef}>
                    <div className='active-lang-div' onClick={() => setLanOpen(!lanOpen)}>
                    {lan == "en" ? (<img src='/images/en.png' />) : (lan == "fa" ? <img src='/images/ir.png' /> : (lan == "ar" ?<img src='/images/sa.svg' /> :<img src='/images/ru.png' />))}
                        <p className='active-lang'>{lan}</p>
                        
                    </div>
                    <div className={ lanOpen ? "lang-options-div open" : "lang-options-div" }>
                        <p className='lang-option' onClick={() => { setLan("en"); setLang("en");setLanOpen(false)}}><img src='/images/en.png' /> EN</p>
                        <p className='lang-option' onClick={() => { setLan("fa"); setLang("fr");setLanOpen(false)}}><img src='/images/ir.png' /> FA</p>
                        <p className='lang-option' onClick={() => { setLan("ru"); setLang("ru");setLanOpen(false)}}><img src='/images/ru.png' /> RU</p>
                        <p className='lang-option' onClick={() => { setLan("ar"); setLang("ar");setLanOpen(false)}}><img src='/images/sa.svg' /> AR</p>
                    </div>
                    
                    
                </div>
                <div className='ham-menu' onClick={() => setHamOpen(!hamOpen)}>
                    <span className={hamOpen ? "rotate-45" : ""}></span>
                    <span className={hamOpen ? "fade" : ""}></span>
                    <span className={hamOpen ? "minus-rotate-45" : ""}></span>
                </div>
                <div className={hamOpen ? 'mobile-navbar-div ham-open' : "mobile-navbar-div" }>
                    <Link className='mobile-link' to={"/"} onClick={() => setHamOpen(false)}>{lan == "fa" ? "خانه" : (lan == "en" ? "Home" : (lan == "ar" ? "الصفحة الرئیسیة" :"дом"))}</Link>
                    <Link className='mobile-link' to={"/about-us"} onClick={() => setHamOpen(false)}>{lan == "fa" ? "درباره ما" : (lan == "en" ? "About us" : (lan == "ar" ?"معلومات عنّا" :"О нас"))}</Link>
                    <Link className='mobile-link' to={"/contact-us"} onClick={() => setHamOpen(false)}>{lan == "fa" ? "تماس با ما" : (lan == "en" ? "Contact us" : (lan == "ar" ? "جهات االتصال" :"Связаться с нами"))}</Link>
                    <Link className='mobile-link' to={"/articles"} onClick={() => setHamOpen(false)}>{theme?.articles?.navLabel || (lan == "fa" ? "مقالات" : (lan == "en" ? "Articles" : (lan == "ar" ? "المقالات" : "Статьи")))}</Link>
                </div>
                {
                    page == 2 ? ("") : ( <Link className='contact-us-nav' to={"/contact-us"}>
                    <div className={lan == "ru" ? 'btn btn-ru nav-contact-btn' :'btn nav-contact-btn'}>
                        <p>{lan == "fa" ? "تماس با ما" : (lan == "ru" ?"связаться с нами" : (lan == "ar"? "جهات االتصال" :"contact us")) }</p><span><img alt='forward icon' src='/images/forward.svg' /></span>
                    </div>
                    </Link>)
                   
                }
            </div>
            <div className='nav-back'></div>

        </div>
  )
}

export default Navbar
