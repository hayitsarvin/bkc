import React from 'react'
import "../styles/tds.css"
import { useParams } from 'react-router-dom';
import { tds } from '../data/data';
import { LanContext } from './Root';
import { useContext } from 'react';
import { useEffect } from 'react';
import PdfBtn from '../component/PdfBtn';
const Tds = () => {
  const { id } = useParams();
  const lang = useContext(LanContext);
  var languge = lang.languge;
  const product = tds[id][languge]
 
  useEffect(() => {
    languge = lang.languge;
  },[lang])
  useEffect(() => {
    
  },[languge])
  return (
    <div className={languge == "ru" ? 'tds-page tds-ru' : "tds-page"}>
        <div className={languge == "fa" ? 'content-div farsi-content-div': "content-div"}>

        <div className={languge == "fa" ? 'farsi-content-rtl-div': ""}>
        <div className='tds-title'>
            <h2 className='title'>{product.name}</h2>
        </div>
        <div className='product-description-div'>
            <h3 className='product-description-title' >{languge == "fa" ? "توضیحات" : (languge == "en" ? "Description" : (languge == "ar" ? "التوصیف" : "Описание"))}</h3>
            <p className='product-description'>{product.Description}</p>
        </div>
        <div className='characteristics-and-advantages-div'>
            <h3 className='characteristics-and-advantages-title'>{languge == "fa" ? "ویژگی ها و مزایا" : (languge == "en" ? "Characteristics and Advantages" : (languge == "ar" ? "الميزات والفوائد" :"Характеристики и преимущества"))}:</h3>
            <ul className='characteristics-and-advantages'>
                {
                  product.Characteristics.map(c => {
                    return(
                      <li>{c}</li>
                    )
                  }) 
                }
            </ul>
        </div>
        <div className='uses-div'>
            <h3 className='uses-title'>{languge == "fa" ? "کاربرد ها" : (languge == "en" ? "uses" : (languge == "ar" ? "التطبيقات" : "использует"))}</h3>
            <ul className='uses'>
            {
                 product.Uses.map(c => {
                    return(
                      <li>{c}</li>
                    )
                  }) 
                }
            </ul>
        </div>
        <div className='download-btn-div'>
          <PdfBtn file={product.pdf} name={product.name}/>
        </div>
        </div>
        <div className='barrel-image-mask'>
                <img src='/images/Barrel.png'/>
            </div>
        </div>
        <div className='table-div'>
            
        <table class="tg">
<thead>
  <tr>
    <th class="tg-0lax">{languge == "fa" ? "ویژگی ها" : "propertis"}</th>
    <th class="tg-0lax">{languge == "fa" ? "واحد" : "unit"}</th>
    <th class="tg-0lax">{languge == "fa" ? "مقدار" : "value"}</th>
    <th class="tg-baqh">{languge == "fa" ? "روش آزمون" : "test method"}</th>
  </tr>
</thead>
<tbody>
  
  {
  product.Table.map(c => {
    return(
<tr>
    <td class="tg-hmp3 ">{c.propertis}</td>
    <td class="tg-hmp3 dark-blue">{c.unit}</td>
    <td class="tg-hmp3">{c.value}</td>
    <td class="tg-hmp3 dark-blue">{c.testMethod}</td>
  </tr>
    )
  })
 }
</tbody>
</table>
</div>
    </div>
  )
}

export default Tds