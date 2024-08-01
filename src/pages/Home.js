import React, { useContext, useEffect } from 'react'
import Hero from '../component/Home/Hero'
import "../styles/home.css"
// import HomeAboutSection from '../component/Home/HomeAboutSection'
import ProductsSection from '../component/Home/ProductsSection'
import BlogSection from '../component/Home/BlogSection'
import { Link } from 'react-router-dom'
import HomeMap from '../component/Home/HomeMap'

import { Suspense } from 'react'
import { LanContext } from './Root'
const HomeAboutSection = React.lazy(() => import("../component/Home/HomeAboutSection"));
const Home = () => {
  const lang = useContext(LanContext);
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='home-page'>
      <Hero />
      <Suspense fallback={<div>Loading</div>}>

      <div className='danesh-bonyan-section'>
        <div className='danesh-bonyan'>
          {
            lang.languge== "fa"?(
              <p>موجب خرسندی است که به اطلاع برسانم ، با لطف خداوند و همفکری و تلاش همه همکاران محترم و بر اساس ارزیابی معاونت
محترم علمی و فناوری ریاست جمهوری ، شرکت بنیان کالا شیمی مفتخر به دریافت عنوان " <a href='https://pub.daneshbonyan.ir/dashboard'>دانش بنیان فن آور</a> "  گردید 
</p>
            ) :(
              lang.languge == "en" ? (
                <p>It is my pleasure to inform you that with the grace of God and the cooperation and efforts of all respected colleagues and based on the evaluation of the respected vice president for science and technology, Banyan Kala Chemi Company was honored to receive the title of <a href='https://pub.daneshbonyan.ir/dashboard'>"Technology-based Knowledge"</a> 
</p>
              ) :(lang.languge == "ru" ? (
                <p>
            
Мне приятно сообщить вам, что по милости Божией, а также при сотрудничестве и усилиях всех уважаемых коллег и на основании оценки уважаемого вице-президента по науке и технологиям, компания Banyan Kala Chemi удостоилась чести получить звание <a href='https://pub.daneshbonyan.ir/dashboard'>«Технолог». -основанные знания»</a> 
</p>
              ) : (
                <p>يسعدني أن أبلغكم أنه بفضل الله وتعاون وجهود جميع الزملاء المحترمين وبناء على تقييم نائب الرئيس المحترم للعلوم والتكنولوجيا، تشرفت شركة بنيان كالا كيمي بالحصول على لقب <a href='https://pub.daneshbonyan.ir/dashboard'>"التكنولوجيا المعرفة القائمة على "</a> 
</p>
              )

              )
            )
          }
        </div>
        <div className='danesh-bonyan-footer'>
          <p className='modir-header'>{lang.languge == "fa" ? ("مدیرعامل") : ( lang.languge == "en" ? ("ceo") : (lang.languge == "ru" ? ("Генеральный директор") : ("المدير التنفيذي")))}</p>
          <p className='modir-footer'>{lang.languge == "fa" ? ("محسن مبارکی") : ( lang.languge == "en" ? ("mohsen mobaraki") : (lang.languge == "ru" ? ("mohsen mobaraki") : ("محسن مبارکی")))}</p>
        </div>
      </div>
      <HomeAboutSection />
      </Suspense>
      <ProductsSection />
      <Suspense fallback={<div>Loading</div>}>
      <HomeMap />
      </Suspense>
      <BlogSection />
    </div>
  )
}

export default Home