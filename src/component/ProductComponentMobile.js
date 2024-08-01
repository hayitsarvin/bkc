import React from 'react'
import "../styles/productmobile.css"
import { Link } from 'react-router-dom'
import { LanContext } from '../pages/Root';
import { useContext } from 'react';
const ProductComponentMobile = ({flex="" , name , img, link}) => {
    const lang = useContext(LanContext);
  return (
    <div className='home-product-mobile-div'>
        <div className={'product-mobile-flex ' + flex}>
            <div className='product-mobile-image-div'>
                <div className='product-mobile-image-mask pentagon'>
                    <img alt='product image aplication' src={img} />
                </div>
            </div>
            <div className='product-mobile-content-div'>
                <div className='product-mobile-name-div'>
                    <h3 className={lang.languge == "fa" ? 'product-mobile-name product-mobile-name-farsi' : "product-mobile-name"}>{name}</h3>
                </div>
                {/* <div className='product-mobile-text-div'>
                    <p className='product-mobile-text'>this is a test text for product in mobile devices so lets try to finish this project and go for webflow.</p>
                </div> */}
                <div className='product-mobile-btn-div'>
                    <div className='btn '>
                        <Link to={link} >{lang.languge == "fa" ?  "دیدن محصول" : (lang.languge == "en" ?  "see product" : "посмотреть продукт")}</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductComponentMobile