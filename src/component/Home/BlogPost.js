import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const BlogPost = ({state , data , lan}) => {
    function fn(text, count){
        return text.slice(0, count) + (text.length > count ? "..." : "");
    }
    var mobile =window.matchMedia("(max-width: 640px)")
    useEffect(() => {
         mobile =window.matchMedia("(max-width: 640px)")
    }, [])
    if(mobile.matches){
        return (
        <div className={'blog-post '+ state}>
        <div className='blue-blob'>
            
        </div>
        <div className='blog-post-image-mask'>
            <img alt='blog image' src={data.image} />
        </div>
        <div className='blog-content-side'>

            <div className='post-icon-div'>
                <img alt='quote icon' src='./images/quote-top.png' />
            </div>
            <div className='post-title-disc-div'>
            <div className='post-title-div'>
                <h2 className='post-title'>{fn(data.title, 50)}</h2>
            </div>
            <div className='post-short-disc-div'>
                <p className='post-short-disc'>{fn(data.content , 150)}</p>

            </div>
            </div>
            <div className='post-btn-div'>
            <Link to={"/blog-post/" +data.id} className='btn'>{lan == "fa" ? "ادامه مطلب" : (lan == "en" ? "read more" : "читать далее")}</Link>
        </div>
            <div className='post-bottom-icon'>
                <img alt='quote icon' src='./images/quote-bottom.png' />

            </div>
        </div>
        
    </div>
        )
    } else{
        return (
            <div className={lan =="fa" ? ('blog-post post-rtl '+ state) : ('blog-post '+ state)}>
                <div className='blue-blob'>
                    
                </div>
                <div className='blog-post-image-mask'>
                    <img alt='blog image' src={data.image}/>
                </div>
                <div className='blog-content-side'>
                    <div className='post-icon-div'>
                        <img alt='quote icon' src='./images/quote-top.png' />
                    </div>
                    <div className='post-title-div'>
                        <h2 className='post-title'>{fn(data.title, 50)}</h2>
                    </div>
                    <div className='post-short-disc-div'>
                        <p className='post-short-disc'>{fn(data.content , 150)}</p>
        
                    </div>
                    <div className='post-btn-div'>
                        <Link to={"/blog-post/" +data.id} className='btn'>{lan == "fa" ? "ادامه مطلب" : (lan == "en" ? "read more" : "читать далее")}</Link>
                    </div>
                    <div className='post-bottom-icon'>
                        <img alt='quote icon' src='./images/quote-bottom.png' />
        
                    </div>
                </div>
            </div>
          )
    }
  
}

export default BlogPost