import React from 'react'
import "../styles/blogpage.css"
import { useParams } from 'react-router-dom';
import { LanContext } from './Root';
import { useContext } from 'react';
const BlogPostPage = () => {
  const { id } = useParams();
  const lang = useContext(LanContext);
  return (
    <div className={lang.languge == "fa" ? 'blog-post-page dir-rtl' : "blog-post-page "}>
        <div className='blog-post-image-div'>
            <img src={lang.home.blog[id].image} className='blog-post-image' />
        </div>
        <div className='blog-post-title-div'>
            <h2 className='blog-post-title'>{lang.home.blog[id].title}</h2>
        </div>
        <div className='blog-post-content-div'>
            <p className='blog-post-content'>{lang.home.blog[id].content}</p>
        </div>
        
    </div>
  )
}

export default BlogPostPage