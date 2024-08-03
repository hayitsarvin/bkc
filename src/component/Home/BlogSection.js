import React, { useEffect, useState } from 'react'
import BlogPost from './BlogPost'

import "../../styles/blog.css"
import { useContext } from 'react';
import { LanContext } from '../../pages/Root';

const BlogSection = () => {
    const lang = useContext(LanContext);
    const [activePost , setActivePost] = useState(1)

    var mobile =window.matchMedia("(max-width: 640px)")
    useEffect(() => {
         mobile =window.matchMedia("(max-width: 640px)")
    }, [])

    const prevHandler = () => {
        console.log(activePost , "prev");
        if(activePost > 0){
            setActivePost(activePost - 1)
        }else{
            setActivePost(2)
        }
    }
    const nextHandler = () => {
        console.log(activePost , "next");
        if(activePost < 2){
            setActivePost(activePost + 1)
        }else{
            setActivePost(0)
        }
    }
    const pickClass = (id) => {
        console.log(id , activePost);
        if(id == activePost) {
            return "active"
        }else if(id > activePost){
            return "next"
        }else if(id < activePost){
            return "prev"
        }
    }
    
    if(mobile.matches){
        return (
            <div className='blog-section'>
                
                <div className='blog-section-div'>
                <div className='blog-section-title-div'>
                    <h2 className='blog-section-title'>{lang.languge == "fa" ?  "بلاگ" : (lang.languge == "en" ?  "our blog" : (lang.languge == "ru" ? "наш блог" : "مدونتنا"))}</h2>
                </div>
                    <div className='blog-active-post-div'>
                    {
                           lang.home.blog.map(post => {
                            return( <BlogPost state={ pickClass(post.id)} data={post} lan={lang.languge}/>)
                           } ) 
                        }
                    </div>
                    <div className='slider-btns-div'>
                    <div className='slider-left-div' onClick={() => prevHandler()}>
                        <div className='slider-left'>
                            <img alt='left icon' src='./images/arrow-left.png' />
                        </div>
                    </div>
                    <div className='slider-right-div' onClick={() => nextHandler()}>
                        <div className='slider-right'>
                            <img alt='right icon' src='./images/arrow-right.png' />
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
        )

    }else {
        return (
            <div className='blog-section'>
                <div className='blog-section-div'>
                    <div className='slider-left-div' onClick={() => prevHandler()}>
                        <div className='slider-left'>
                            <img alt='left icon' src='./images/arrow-left.png' />
                        </div>
                    </div>
                    <div className='blog-active-post-div'>
                        {
                           lang.home.blog.map(post => {
                            return( <BlogPost key={post.id} state={ pickClass(post.id)} data={post} lan={lang.languge}/>)
                           } ) 
                        }
                       
                        {/* <BlogPost state={pickClass(1)}/>
                        <BlogPost state={pickClass(2)}/> */}
                    </div>
                    
    
                    <div className='slider-right-div' onClick={() => nextHandler()}>
                        <div className='slider-right'>
                            <img alt='right icon' src='./images/arrow-right.png' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default BlogSection