import React from 'react'
import "../styles/footer.css"
import { LanContext } from '../pages/Root';
import { useContext } from 'react';
const Footer = () => {
    const lang = useContext(LanContext);
   var languge = lang.languge;
  return (
    <div className='footer'>
        <div className='footer-content-div'>
            <div className='footer-logo-div'>
                    <div className='footer-logo'>
                        <img alt='bonyan kala logo' src='/images/BKCLogo.png' />
                    </div>
            </div>
            <div className='footer-info-div'>
                    <div className='footer-info-address'>
                        <p><img alt='location icon' src='/images/location.png' className='footer-icon'/>{languge == "fa" ? ("ایران - تهران میدان آرژانتین خیابان بخارست کوچه سیزدهم پلاک 4 واحد 7" ): (languge == "en" ? ("Unit 7, No 4, 13th St, Ahmad Qasir (Bokharest) Ave,Tehran, 1513754915 IRAN") :(languge == "ar" ? " ایران، طهران، دّو ، شارع بخارست، زقاق ،13 رقم ،4 الوحدة 7": ("Иран, 1513754915 Тегеран, Проспект Ахмада Казира (Бохареста), 13-я ул., 4, стр.7")))}</p>
                    </div>
                    <div className='footer-info-phone'>
                        <p><img alt='call icon' src='/images/call.png' className='footer-icon' />(+98 - 21) 88 55 55 57</p>
                        <p><img alt='fax icon' src='/images/fax.png' className='footer-icon' />(+98 - 21) 88 71 68 08</p>
                    </div>
                    <div className='footer-info-email'>
                        <p><img alt='mail icon' src='/images/mail.png' className='footer-icon' />info@bonyankala.com</p>
                    </div>
            </div>
            <div className='google-map-div'>
            <iframe title='googleMap' className='google-map' src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d1619.344915115713!2d51.41539!3d35.733846!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x3f8e0131020a7e99%3A0x985dd8f8628335ca!2sPCM8%2BJ9V%20District%206%2C%20Tehran%2C%20Tehran%20Province%2C%20Iran!3m2!1d35.734112499999995!2d51.4159219!5e0!3m2!1sen!2sus!4v1699784972105!5m2!1sen!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='footer-line-div'>
                    <div className='footer-white-line'></div>
            </div>

        </div>
    </div>
  )
}

export default Footer