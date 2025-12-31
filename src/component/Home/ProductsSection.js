import React, { useContext, useEffect } from 'react'
import ProductComponentMobile from '../ProductComponentMobile'
import { Link } from 'react-router-dom'
import { LanContext } from '../../pages/Root'
import Hexagon from 'react-hexagon'
const ProductsSection = () => {
    var mobile =window.matchMedia("(max-width: 640px)")
    useEffect(() => {
        mobile =window.matchMedia("(max-width: 640px)")
    } , [])
    const lang = useContext(LanContext);

    useEffect(() => {
      if(!mobile.matches){
        const text = document.querySelector(".product-text-animation-div p")
        text.innerHTML = text.innerText.split("").map(
            (char , i) => 
            `<span style="transform:rotate(${i * 7.2}deg)">${char}</span>`
        ).join("")
      }
        

    }, [])

    if(mobile.matches ){
        return(
            <div className='home-products-section' id='product-section'>
                <div className='section-title-div'>
                    <h2 className='title'>{lang.languge == "fa" ? "محصولات ما" : (lang.languge == "en" ? " our products" : (lang.languge == "ar" ? "اإلنتاجات ":"наши продукты"))}</h2>
                </div>
                <ProductComponentMobile flex={"flex-reverse"} name={lang.home.products.UnsaturatedPolyesterResins.name} img="./images/sang1.webp" link={"/product-code/3"}/>
                <ProductComponentMobile name={lang.home.products.AlkydResins.name} img="/images/IndustrialPaints&Coatings1.webp" link={"/product-code/1"}/>
                <ProductComponentMobile flex={"flex-reverse"} name={lang.home.products.ResinsForPowderCoatings.name} img="/images/Pultrusion2.webp" link={"/product-code/2"}/>
                <ProductComponentMobile  name={lang.home.products.Driers.name} img="/images/Button.webp" link={"/product-code/4"}/>
                <ProductComponentMobile flex={"flex-reverse"} name={lang.home.products.SolidEpoxyResin.name} img="/images/galeb.webp"  link={"/product-code/5"}/>
                <ProductComponentMobile name={lang.home.products.MaleicResin.name} img="/images/Aplication-10-600x400.webp" link={"/tds/BMA401"}/>
                

            </div>
        )
    }else{
        return (
            <div className='home-products-section home-products-section-desktop' id='product-section'>
                <div className='product-section-title-div'>
                    <h2 className='product-section-title'>{lang.languge == "fa" ? "محصولات ما" : (lang.languge == "en" ? " our products" : (lang.languge == "ar" ? "اإلنتاجات ":"наши продукты"))}</h2>
                </div>
                <div className='about-circle-text-div'>
            <div className='product-text-animation-div'>
                <p>best exporter - best exporter - best exporter -</p>
               </div>
               </div>
                <div className='first-line-products-div'>
                {/* <div className='product-mobile-image-mask pentagon'>
                    <Link to={"/product-code"}>
                    <div className='product-name-hover-div'>
                        <p className='product-name-hover'>{lang.home.products.UnsaturatedPolyesterResins.name}</p>
                    </div>
                    </Link>
                    
                </div> */}
                
                <span>
                <Link to={"/product-code/3"}>
                <Hexagon
    style={{stroke: '#1d70b8', fill:"#1d70b8" }}
   
    
    
  />
    <h2 className='name-of-product'>{lang.home.products.UnsaturatedPolyesterResins.name}</h2>
  </Link>

  </span>
  <span>
  <Link to={"/product-code/1"}>
  <Hexagon
    style={{stroke: '#1d70b8', fill:"#1d70b8" }}
   
    
    
  />
  <h2 className='name-of-product'>{lang.home.products.AlkydResins.name}</h2>
  </Link>
  </span>
                </div>
                <div className='second-line-products-div'>
                
               <span>
               <Link to={"/product-code/2"}>
                <Hexagon
    style={{stroke: '#1d70b8', fill:"#1d70b8" }}
   
    
    
  />
    <h2 className='name-of-product'>{lang.home.products.ResinsForPowderCoatings.name}</h2>
    </Link>
  </span>
  <span>

  <Hexagon
  style={{stroke: 'orange' }}

 
  
  
/>
<h2 className='name-of-product products-title-hexa'>{lang.languge == "fa" ? "محصولات" : (lang.languge == "en" ?"products" : (lang.languge == "ar" ? "اإلنتاجات":"продукты"))}</h2>

</span>
<span>
<Link to={"/product-code/4"}>
<Hexagon
    style={{stroke: '#1d70b8', fill:"#1d70b8" }}
   
    
    
  />
    <h2 className='name-of-product'>{lang.home.products.Driers.name}</h2>
    </Link>
  </span>
                </div>
                <div className='third-line-products-div'>
                <span>
                <Link to={"/product-code/5"}>
                <Hexagon
    style={{stroke: '#1d70b8', fill:"#1d70b8" }}
   
    
    
  />
    <h2 className='name-of-product'>{lang.home.products.SolidEpoxyResin.name}</h2>
    </Link>
  </span>
  <span>
  <Link to={"/tds/BMA401"}>
  <Hexagon
  style={{stroke: '#1d70b8', fill:"#1d70b8" }}
 
  
  
/>
<h2 className='name-of-product'>{lang.home.products.MaleicResin.name}</h2>
</Link>
</span>
                </div>
                
            </div>
          )
    }
  
}

export default ProductsSection
