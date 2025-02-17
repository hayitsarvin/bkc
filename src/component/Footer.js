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
                        <p><img alt='location icon' src='/images/location.png' className='footer-icon'/>{languge == "fa" ? ("ایران - تهران خیابان نلسون ماندلا - خیابان عاطفی غربی پلاک 109" ): (languge == "en" ? ("Nelson Mandela Street - Western Atfi Street, Number 109,Tehran, IRAN") :(languge == "ar" ? " ایران، طهران، شارع نيلسون مانديلا - شارع عاطفي الغربي، رقم 109": ("Иран, Тегеран, Улица Нельсона Манделы - Западная улица Атфи, дом 109")))}</p>
                    </div>
                    <div className='footer-info-phone'>
                        <p><img alt='call icon' src='/images/call.png' className='footer-icon' />(+98 - 21) 21 00 00 08</p>
                        <p><img alt='fax icon' src='/images/fax.png' className='footer-icon' />(+98 - 21) 21 00 00 08</p>
                    </div>
                    <div className='footer-info-email'>
                        <p><img alt='mail icon' src='/images/mail.png' className='footer-icon' />info@bonyankala.com</p>
                    </div>
            </div>
            <div className='google-map-div'>
            {/* <iframe title='googleMap' className='google-map' src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d1619.344915115713!2d51.41539!3d35.733846!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x3f8e0131020a7e99%3A0x985dd8f8628335ca!2sPCM8%2BJ9V%20District%206%2C%20Tehran%2C%20Tehran%20Province%2C%20Iran!3m2!1d35.734112499999995!2d51.4159219!5e0!3m2!1sen!2sus!4v1699784972105!5m2!1sen!2sus" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
            <iframe  className='google-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.10610505738!2d51.414026312009!3d35.772769872443476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0689f7d18999%3A0x21ed013cd321e531!2sTehran%20Province%2C%20Tehran%2C%20District%203%2C%20W%20Atefi%20St%2C%20Iran!5e0!3m2!1sen!2sit!4v1739791341467!5m2!1sen!2sit" width="600" height="450" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className='footer-line-div'>
                    <div className='footer-white-line'></div>
            </div>

        </div>
    </div>
  )
}

export default Footer