import React, { useState } from 'react'
import "../styles/createPost.css"
import axios from 'axios';
import { redirect, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CreatePost = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [postLang , setPostLang] = useState("fa")
  const [titleFa , setTitleFa] = useState("")
  const [titleEn , setTitleEn] = useState("")
  const [titleRu , setTitleRu] = useState("")
  const [textFa , setTextFa] = useState("")
  const [textEn , setTextEn] = useState("")
  const [textRu , setTextRu] = useState("")
  const [image , setImage] = useState()
    function handleChange(e) {
        console.log(e.target.files);
        setFile(e.target.files[0]);
        setImage(URL.createObjectURL(e.target.files[0]));
    }
    
  const submitHandler = () => {
    const formData = new FormData();
    // {
    //   "titleFa" : titleFa ,
    //   "titleEn" : titleEn ,
    //   "titleRu" : titleRu ,
    //   "textFa" : textFa ,
    //   "textEn" : textEn ,
    //   "textRu" : textRu ,
    //   "image" : file
    // }
    formData.append("titleFa" , titleFa)
    formData.append("titleEn" , titleEn)
    formData.append("titleRu" , titleRu)
    formData.append("textFa" , textFa)
    formData.append("textEn" , textEn)
    formData.append("textRu" , textRu)
    formData.append("image" , file)
    axios.post("https://bonyankala.runflare.run/" ,  formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    } ).then(res => {
      console.log(res)
      navigate('/bonyan-admin-panel')
      
    }).catch(err => {
      console.log(err)
    })

  }
  return (
    <div className='add-post-page'>
      <div className='back-to-admin-div'>
        <Link to={"/bonyan-admin-panel"} className='back-link'>
        <img src="/images/arrow_back.svg" className='back-to-admin' />
        </Link>
      </div>
      <div className='add-post-form-div'>
        <form className='add-post-form'>
          <div className='add-image-div'>
        {/* <h2>Add Image:</h2> */}
            <div className='add-image-mask'>
            <img src={image ? image : "/images/0.png"} />
            </div>
            <label for="file-upload" class="custom-file-upload">
              عکس را آپلود کنید
            </label>
            <input id='file-upload' type="file" onChange={handleChange} />
            
            </div>
            <div className='add-content-div'>
              <div className='add-lang-div'>
                <label for="languges">زبان را انتخاب کنید :</label>

                <select name="languges" id="languges" onChange={(e) => setPostLang(e.target.value)}>
                <option value="fa" >farsi</option>

                  <option value="en" >english</option>
                  <option value="ru" >russian</option>
                 
                </select>
                
              </div>
              <div className='add-title-div'>
              <div className="input-data">
               <input type="text" required className="input" onChange={(e) => postLang == "fa" ? setTitleFa(e.target.value) : (postLang == "en" ? setTitleEn(e.target.value) : (postLang == "ru" ? setTitleRu(e.target.value) : ""))} value={postLang == "fa" ? titleFa : (postLang == "en" ? titleEn : (postLang == "ru" ? titleRu : ""))}/>
               {/* <div class="underline"></div> */}
               <label for="">عنوان را وارد کنید</label>
            </div>
              </div>
              <div className='add-text-div'>
              <div className="input-data textarea">
            <textarea rows="20" cols="200" required className= "input" onChange={(e) => postLang == "fa" ? setTextFa(e.target.value) : (postLang == "en" ? setTextEn(e.target.value) : (postLang == "ru" ? setTextRu(e.target.value) : ""))} value={postLang == "fa" ? textFa : (postLang == "en" ? textEn : (postLang == "ru" ? textRu : ""))}></textarea>
            <br />
            {/* <div class="underline"></div>  */}
            <label  for="">متن را وارد کنید</label>
            <br />
            
            </div>
        

              </div>
              <div className='btn' onClick={() => submitHandler()}>ساخت پست جدید</div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default CreatePost