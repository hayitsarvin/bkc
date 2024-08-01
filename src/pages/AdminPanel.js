import React, { useEffect, useState } from 'react'
import PostCardAdmin from '../component/PostCardAdmin'
import { useContext } from 'react';
import { LanContext } from './Root';
import "../styles/admin.css"
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const AdminPanel = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    if(!user){
      navigate("/login")
    }
  } , [])
  const [posts , setPosts] = useState([])
  const [deleted , setDeleted] = useState(false)
    const lang = useContext(LanContext);
    const getPosts = () => {

    }
    useEffect(() => {
      axios.get("https://bonyankala.runflare.run/" )
      .then((res) => {
        setPosts(res.data);
     
        console.log("data " , res.data);
      
    })
    .catch((err) => {

    });
    console.log("posts: " ,posts);
    }, [deleted])
    const fetech = () => {
      axios.get("https://bonyankala.runflare.run/" )
      .then((res) => {
        setPosts(res.data);
     
        console.log("data " , res.data);
      
    })
    }
    const deleteHandler = (id) => {
      axios.delete("https://bonyankala.runflare.run/"+ id)
      fetech()
  }
    
  return (
    <div className='admin-panel-page'>
        <div className='posts-list-container'>
        {
          posts.length > 0 ? (
            posts.map(post => {
              return( <PostCardAdmin  data={post} lan={lang.languge} deleteHandler={deleteHandler}/>)
              // return (<p>{post.titleFa}</p>)
             }) 
          ) : ("")
            
        }
        <div className='add-new-post-card'>
        <Link className='add-new-post-link' to={"/bonyan-admin-panel/create-post"}>

            <p className='add-icon'>+</p>
            <p className='add-text'>add post</p>
        </Link>


        </div>
        </div>
    </div>
  )
}

export default AdminPanel