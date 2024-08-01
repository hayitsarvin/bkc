import React, { useContext } from 'react'
import { LanContext } from '../pages/Root';
import axios from 'axios';

const PostCardAdmin = ({data, lan , deleteHandler}) => {
    const lang = useContext(LanContext);
   var languge = lang.languge;
   const title = languge == "fa" ? data.titleFa : (languge == "en" ? data.titleEn : data.titleRu)
   const text = languge == "fa" ? data.textFa : (languge == "en" ? data.textEn : data.textRu)
    function fn(text, count){
        return text.slice(0, count) + (text.length > count ? "..." : "");
    }
    
  return (
    <div className='post-card-admin-div'>
        <div className='post-card-admin-image-mask'>
            <img className='post-card-admin-image' src={"https://bonyankala.runflare.run/" + data.image} />
        </div>
        <div className='post-card-admin-content'>
            <h4 className='post-card-admin-title'>{fn(title , 50)}</h4>
            <p  className='post-card-admin-text'>{fn(text , 90)}</p>
        </div>
        <div className='post-card-admin-btns-div'>
            <div className='post-card-admin-edite-div'>
            <img src='./images/edite.svg' className='post-card-admin-delete'/>
            </div>
            <div className='post-card-admin-delete-div' onClick={() => deleteHandler(data._id)}>
                <img src='./images/delete.svg' className='post-card-admin-delete'/>
            </div>
        </div>
    </div>
  )
}

export default PostCardAdmin