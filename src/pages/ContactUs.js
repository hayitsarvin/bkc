import React, { useEffect, useState } from 'react'
import "../styles/contactus.css"
import { LanContext } from './Root';
import { useContext } from 'react';
import emailjs from '@emailjs/browser';
import axios from 'axios';
const ContactUs = () => {
   const lang = useContext(LanContext);
   const [name , setName] = useState()
   const [lastName , setLastName] = useState()
   const [email , setEmail] = useState()
   const [phone , setPhone] = useState()
   const [message , setMessage] = useState()
   var languge = lang.languge;
   useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
    const submitHandler = (e) => {
      e.preventDefault()
      if(name  && email && phone && message){
         emailjs.send('service_w6jtngs', 'template_xak04t8',{from_name: name +" "+ lastName ,phone:phone, message: message , from_email:email}, '7S3I1XJFQOgj9n0Ob');
      }
     

    }
  return (
    <div className='contact-us-div'>
        <div className='contact-us-content-flex'>
            {/* <div className='contact-us-title-div'>
                <h1 className='contact-us-title'>we are bonyan kala</h1>
            </div> */}
            <div className='contact-form-div'>
                {/* <div className='contact-form'> */}
                <div class="container">
      <div class="text">{languge == "fa" ? "تماس با ما" : (languge == "en" ? "Get In Touch": (languge == "ar" ? "جهات االتصال" :"Связаться"))}</div>
      <form onSubmit={(e) => submitHandler(e)}>
         <div class="form-row">
            <div  className={languge == "fa" ? "input-data dir-rtl" : "input-data"}>
               <input value={name} onChange={(e) => setName(e.target.value)} type="text" required className={(languge == "fa" || languge == "ar") ? "input dir-rtl" : "input"}/>
               <div class="underline"></div>
               <label for="">{languge == "fa" ? "نام" : (languge == "en" ? "first name": (languge == "ar" ? "الاسم":"имя"))}</label>
            </div>
            <div className={languge == "fa" ? "input-data dir-rtl" : "input-data"}>
               <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text"  className={(languge == "fa" || languge == "ar") ? "input dir-rtl" : "input"}/>
               <div class="underline"></div>
               <label for="">{languge == "fa" ? "خانوادگی" : (languge == "en" ? "last name": (languge == "ar" ?"الاسم العائلي" :"фамилия"))}</label>
            </div>
         </div>
         <div class="form-row">
            <div className={languge == "fa" ? "input-data dir-rtl" : "input-data"}>
               <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" required className={(languge == "fa" || languge == "ar") ? "input dir-rtl" : "input"}/>
               <div class="underline"></div>
               <label for="">{languge == "fa" ? "ایمیل" : (languge == "en" ? "email": (languge == "ar" ? "البرید الکتروني":"электронная почта"))}</label>
            </div>
            <div className={languge == "fa" ? "input-data dir-rtl" : "input-data"}>
               <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" required className={(languge == "fa" || languge == "ar") ? "input dir-rtl" : "input"}/>
               <div class="underline"></div>
               <label for="">{languge == "fa" ? "شماره" : (languge == "en" ? "phone number": (languge=="ar"? "رقم الهاتف" :"номер телефона"))}</label>
            </div>
         </div>
         <div class="form-row">
         <div className={languge == "fa" ? "input-data textarea dir-rtl" : "input-data textarea"}>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows="8" cols="80" required className={(languge == "fa" || languge == "ar") ? "input dir-rtl" : "input"}></textarea>
            <br />
            <div class="underline"></div>
            <label  for="">{languge == "fa" ? "پیغام خود را وارد کنید" : (languge == "en" ? "write your message": (languge == "ar" ? "اکتب رسالتک" :"напишите свое сообщение"))}</label>
            <br />
            
            </div>
            </div>
            <div class="form-row submit-btn " >
               
                  <input type='submit'  className=''  value={languge == "fa" ? "ارسال" : (languge == "en" ? "send" : (languge == "ar" ? "أرسل الرسالة" : "конец" ))}/>
               
            </div>
          
      </form>
      </div>

                {/* </div> */}
            </div>
        </div>
    </div>
    
  )
}

export default ContactUs