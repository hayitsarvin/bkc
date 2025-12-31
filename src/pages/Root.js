import React, { createContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import LoadingAnimation from '../component/LoadingAnimation'
import gsap from 'gsap'
export const LanContext = createContext('en');
const Root = () => {
  const langArray = [
    {
      languge:"en",
      home:{
        hero:{
          titleFirst:"bonyan",
          titleSecond:"kala chimie",
          subtitle:"Manufacturer of Resins for Powder Coatings, Unsaturated Polyester Resins, Epoxy Resin, Maleic Resin, Alkyd Resins and Driers",
          heroBtn:"product"
        } ,
        about:{
          title:"we are bonyan kala chimie",
          subtextone:"Established in 1997 Bonyan Kala Chemie (BKC) is the leading Iranian manufacturer of solvent-based Alkyd and Resins for Powder Coatings ,Unsaturated Polyester Resins ,Epoxy Resin ,Maleic Resin and paint driers.",
          subtexttwo:"As a privately owned, ISO certified organisation, BKC is a strong export oriented company with its annual 40 kMT production throughput and sales to domestic and export markets vastly scattered in MENA, CIS and Eastern Europe; for paint, coatings and composite industries.",
          subtextthree:"Our wide product portfolio and application range is strongly supported by a firm backbone of highly competent technical team, state of the art expertise and sophisticated QC/R&D laboratories equipped aligned with international standards"
        },
        products:{
          UnsaturatedPolyesterResins:{
            name:"unsaturated polyester resins",
            
          },
          AlkydResins:{
            name:"alkyd resins",
            
          },
          ResinsForPowderCoatings:{
            name:"resins for powder coatings"
          },
          Driers:{
            name:"driers"
          },
          ResinsForProtectiveCoatings:{
            name:"resins for protective coatings"
          },
          MaleicResin:{
            name:"maleic resin"
          }
        },
        map:{
          c1:"iraq",
          c2:"azerbaijan",
          c3:"uzbekistan",
          c4:"turkey",
          c5:"UAE",
          c6:"Ivory‌Coast",
          c7:"Nigeria",
          c8:"Ghana",
          c9:"Djibouti",
          c10:"Afghanistan",
          c11:"Pakistan",
          c12:"qatar",
          c13:"Oman",
          c14:"Kyrgyzstan",
          c15:"Kazakhstan",
          c16:"Russia"
        },
        blog:[{
          id:0,
          title:"The Second Presence of Bonyan Kala Chemie Co. (BKC) at Composite Expo 2019, Moscow",
          image:"/images/blog1.jpg",
          content:"Composite-Expo 2019, being held on 23 – 25 April 2019, is a leading international specialized event in composite industry in Russia, where full range of manufactures of raw materials, equipment and finished products of composites is widely introduced. As its second presence at the exhibition, BKC has tried to be a competent representative for Iran. Meet us at Booth #0A1"
      },
      {
          id:1,
          title:"The Eighth Successive Presence of Bonyan Kala Chemie Co. (BKC) at Middle East Coating Show (MECS) 2019 – Dubai",
          image:"/images/blog2.jpg",
          content:"MECS 2019, being held on 9 – 11 March 2019, is the largest exhibition in the Middle East and Persian Gulf region for suppliers of raw materials and equipped manufacturers for paint and coating industry. As its eighth successive presence at the exhibition, BKC has tried to be a competent representative for Iran."
      },
      {
          id:2,
          title:"The Presence of Bonyan Kala Chemie Co. (BKC) at the International Paint, Resin, Coatings, Composites and Plating Industries Fair (IPCC 2019) – Tehran",
          image:"/images/blog3.jpg",
          content:"We will be exhibiting in the IPCC 2019 at Tehran Permanent Fairground from the 9th of December to the 12th of December.We invite you to visit our Stand 20, Hall 07. See you there!"
      }
    ]
      },
      aboutus:{
        textone:"Established in 1997 Bonyan Kala Chemie (BKC) is the leading Iranian manufacturer of solvent-based Alkyd and Unsaturated Polyester Resins and paint driers.",
        texttwo:"Polyester Resins and paint driers. As a privately owned, ISO certified organisation, BKC is a strong export oriented company with its annual 40 kMT production throughput and sales to domestic and export markets vastly scattered in MENA, CIS and Eastern Europe; for paint, coatings and composite industries. Our wide product portfolio and application range is strongly supported by a firm backbone of highly competent technical team, state of the art expertise and sophisticated QC/R&D laboratories equipped aligned with international standards.",
        textthree:"This successful steady presence in the international markets has scored BKC as a distinguished pioneering export manufacturer of its sector.",
        textfour:"Besides, through persistent implementation of ISO 9001:2015-the Quality Management System- accredited by international and national inspection and classification entities, we ensure that our premium quality products are satisfactorily supplied to our clients.",
        market:{
          title:"Our Main Target Market Sectors And Major Product Applications Include:",
          appone:"Architectural & industrial Paints and Coatings",
          apptwo:"Composite industries",
          appthree:"General GRP/FRP",
          appfour:"Marine, transportation and Energy",
          appfive:"Pipes and pipe lining",
          appsix:"SMC and BMC",
          appseven:"Chemical containment and fire retardant",
          appeight:"Stone industries"
          
        }
      }
    },
    {
      languge:"fa",
      home:{
        hero:{
          titleFirst:"بنیان",
          titleSecond:"کالا شیمی",
          subtitle:"تولید کننده انواع رزین های پلی استر اشباع ، غیر اشباع ، اپوکسی ، مالئیک رزین ، رزین های آلکیدی و خشک کن",
          heroBtn:"محصولات"
        },
        about:{
          title:"ما بنیان کالا شیمی هستیم",
          subtextone:"شرکت بنیان کالا شیمی (BKC) تولیدکننده برتر رزین هاي الکید حلال پایه، پلی استر اشباع و غیر اشباع ، اپوکسی رزین ، مالئیک رزین و خشک کن هاي رنگ در ایران، فعالیت خود را از سال 1375آغاز کرده است.",
          subtexttwo:"این شرکت صادرات محور بخش خصوصی با ظرفیت سالانه 40 هزار تن، افزون بر تامین بازار داخلی در صنایع رنگ، پوشش و کامپوزیت، در عرصه بین المللی نیز حضوري فعال دارد و محصولات خود را به طور گسترده در کشورهاي خاورمیانه، افریقاي شمالی، اروپاي شرقی و آسیای میانه عرضه می کند.",
          subtextthree:"ما به پشتوانه وجود کارشناسان خبره، دانش فنی روز و تجهیزات پیشرفته منطبق با استانداردهاي بین المللی در خط تولید، آزمایشگاه هاي کنترل کیفیت و تحقیق و توسعه خود، موفق به تولید و ارائه محصولاتی متنوع با کاربردهاي گسترده در صنایع و بازارهای هدف شده ایم."
        },
        products:{
          UnsaturatedPolyesterResins:{
            name:"رزین پلی استر غیر اشباع"
          },
          AlkydResins:{
            name:"رزین آلکید"
          },
          ResinsForPowderCoatings:{
            name:"رزین‌های پوشش پودری"
          },
          Driers:{
            name:"خشک کن"
          },
          ResinsForProtectiveCoatings:{
            name:"رزین‌های پوشش محافظ"
          },
          MaleicResin:{
            name:"رزین مالئیک"
          }
        },
        map:{
          c1:"عراق",
          c2:"آذربایجان",
          c3:"ازبکستان",
          c4:"ترکیه",
          c5:"امارات",
          c6:"ساحل‌عاج",
          c7:"نیجریه",
          c8:"غنا",
          c9:"جیبوتی",
          c10:"اففانستان",
          c11:"پاکستان",
          c12:"قطر",
          c13:"عمان",
          c14:"قرقیزستان",
          c15:"قزاقستان",
          c16:"روسیه"
        },
        blog:[{
          id:0,
          title:"دومین حضور شرکت بنیان کالا شیمی در نمایشگاه بین المللی کامپوزیت اکسپو 2019 – مسکو",
          image:"/images/blog1.jpg",
          content:"نمایشگاه کامپوزیت اکسپو 2019 روسیه که از تاریخ 3 لغایت 5 اردیبهشت ماه 1398 در مسکو برگزار می ­شود، مهمترین رویداد بین­ المللی تخصصی صنعت کامپوزیت در این کشور است و با حضور شرکت­های تولیدکننده مواد اولیه، محصولات و سازندگان تجهیزات مرتبط با صنعت کامپوزیت برپا می­ گردد.  شرکت بنيان‌کالا‌شيمی در دومین حضور خود در این نمایشگاه، سعی نموده نماينده موفقی برای ميهن عزيزمان باشد.  این شرکت، بازدیدکنندگان گرامی را به حضور در غرفه خود به شماره 0A17 دعوت می­ نماید."
      },
      {
          id:1,
          title:"هشتمین حضور متوالی شرکت بنیان کالا شیمی در نمایشگاه بین المللی رنگ و پوشش خاورمیانه 2019 – دبی",
          image:"/images/blog2.jpg",
          content:"نمايشگاه رنگ و پوشش‌های صنعتی خاورميانه (سال 2019)، که از تاريخ ۲۴ لغايت ۲۶ اسفند ماه 1397 در دبی برگزار می‌شود، بزرگترين رويداد در زمينه رنگ و پوشش‌های صنعتی در منطقه خاورميانه و خليج‌فارس می‌باشد که برای تامين‌کنندگان مواد‌ اوليه، محصولات و نيز سازندگان تجهيزات مرتبط با صنايع رنگ و ساير پوشش‌های صنعتی برپا می‌گردد.  شرکت بنيان‌کالا‌شيمی در هشتمین حضور متوالی خود در اين نمايشگاه، سعی نموده نماينده موفقی برای ميهن عزيزمان باشد.  این شرکت در غرفه شماره F07 پذيرای بازديد‌کنندگان محترم خواهد بود."
      },
      {
          id:2,
          title:"حضور شرکت بنیان کالا شیمی در نوزدهمین دوره از نمایشگاه بین المللی رنگ، رزین، پوشش های صنعتی، مواد کامپوزیت و صنعت آبکاری 1398 تهران",
          image:"/images/blog3.jpg",
          content:"شرکت بنیان کالا شیمی در نوزدهمین دوره از نمايشگاه بین المللی رنگ، رزین، پوشش‌های صنعتی، مواد کامپوزیت و صنعت آبکاری حضور خواهد داشت.  این نمایشگاه در محل دائمی نمايشگاه‌های بين‌المللی تهران از تاريخ 18 لغايت 21 آذر ماه سال 1398 برگزار می گردد.  با افتخار پذیرای بازدیدکنندگان محترم در سالن 7، غرفه 20 هستیم"
      }
    ]
      },
      aboutus:{
        textone:"شرکت بنیان کالا شیمی (BKC) تولیدکننده برتر رزین هاي الکید حلال پایه، پلی استر غیر اشباع و خشک کن هاي رنگ در ایران، فعالیت خود را از سال 1375آغاز کرده است.",
        texttwo:"این شرکت صادرات محور بخش خصوصی با ظرفیت سالانه 40 هزار تن، افزون بر تامین بازار داخلی در صنایع رنگ، پوشش و کامپوزیت، در عرصه بین المللی نیز حضوري فعال دارد و محصولات خود را به طور گسترده در کشورهاي خاورمیانه، افریقاي شمالی، اروپاي شرقی و آسیای میانه عرضه می کند. ما به پشتوانه وجود کارشناسان خبره، دانش فنی روز و تجهیزات پیشرفته منطبق با استانداردهاي بین المللی در خط تولید، آزمایشگاه هاي کنترل کیفیت و تحقیق و توسعه خود، موفق به تولید و ارائه محصولاتی متنوع با کاربردهاي گسترده در صنایع و بازارهای هدف شده ایم.",
        textthree:"این حضور مستمر و پر رنگ در بازارهاي جهانی جایگاه ما را در میان تولیدکنندگان برتر و پیشرو صادراتی در حوزه فعالیت تخصصی خود تثبیت و تضمین کرده است.",
        textfour:"کسب گواهینامه سیستم مدیریت کیفیت مبتنی بر  ISO 9001:2015از مراجع بین المللی و نیز تاییدیه های معتبر محصولات تولیدی از موسسات رده بندی تراز اول ملی، به مشتریان ما اطمینان خاطر مضاعف می دهد که همواره محصولی با کیفیت بالا دریافت و مصرف خواهند کرد.",
        market:{
          title:"بازارهای هدف و کاربردهاي اصلی محصولات ما عبارتند از",
          appone:"رنگ و پوشش های صنعتی و ساختمانی",
          apptwo:"صنایع کامپوزیت",
          appthree:"قطعات و ورق های الیاف شیشه",
          appfour:"صنایع شناورسازی، حمل و نقل، زیرساخت و انرژی",
          appfive:"لوله های انتقال آب و فاضلاب",
          appsix:"SMC و BMC",
          appseven:"مخازن مواد شیمیایی",
          appeight:"قطعات مقاوم در برابر آتش"
          
        }
      }
    },
    {
      languge:"ar",
      home:{
        hero:{
          titleFirst:"شرکة »بنیا ن «",
          titleSecond:"للمنتجات الکیمیاویة",
          subtitle:"نطاق النشاط: إنتاج انواع راتنجات البولیستر المشبعة و غیرالمشبعة، راتنجات مالییک و األلکیدي، و المج ففات",
          heroBtn:"لنتاجات "
        },
        about:{
          title:"ما بنیان کالا شیمی هستیم",
          subtextone:"شرکة «بنیان» بدأت نشاطاتها في مجال تصنیع المنتجات الکیمیاویة من عامّ 1996 في إیران ",
          subtexttwo:"شركة «بنیان» للقطاع الخاصّ الموجهة للتصدير، بقدرة إنتاج 40 ألف طن سنویة، بالإضافة إلى تزويد السوق الوطني في صناعات الدهانات والطلاء والصناعات المركبة، لها أيضًا مشارکة نشطة على الساحة الدولية، ويتمّ توزيع منتجاتها على نطاق واسع في الشرق الأوسط وشمال أفريقيا وأوروبا الشرقية وآسيا الوسطى.",
          subtextthree:"بدعم من الخبراء المختصین والمعرفة التقنية الحديثة والمعدّات المتقدمة بما يتماشى مع المعايير الدولية في عملیة الإنتاج، ومختبرات مراقبة الجودة والبحث والتطوير، نجحنا في صناعة وتوفير منتجات متنوعة ذات تطبيقات واسعة في الصناعات والأسواق المستهدفة."
        },
        products:{
          UnsaturatedPolyesterResins:{
            name:"راتنجات البولیستر المشبعة"
          },
          AlkydResins:{
            name:"راتنجات الألكيد"
          },
          ResinsForPowderCoatings:{
            name:"راتنجات الطلاء المسحوق"
          },
          Driers:{
            name:"مجفّف الطلاء"
          },
          ResinsForProtectiveCoatings:{
            name:"راتنجات الطلاء الواقي"
          },
          MaleicResin:{
            name:"راتنجات المالییک"
          }
        },
        map:{
          c1:"عراق",
          c2:"آذربایجان",
          c3:"ازبکستان",
          c4:"ترکیه",
          c5:"امارات",
          c6:"ساحل‌عاج",
          c7:"نیجریه",
          c8:"غنا",
          c9:"جیبوتی",
          c10:"اففانستان",
          c11:"پاکستان",
          c12:"قطر",
          c13:"عمان",
          c14:"قرقیزستان",
          c15:"قزاقستان",
          c16:"روسیه"
        },
        blog:[{
          id:0,
          title:"التواجد الثاني لشركة بنيان كالا كيمي (BKC) في معرض المركب 2019، موسكو",
          image:"/images/blog1.jpg",
          content:"يعد معرض Composite-Expo 2019، الذي يقام في الفترة من 23 إلى 25 أبريل 2019، حدثًا دوليًا متخصصًا رائدًا في صناعة المواد المركبة في روسيا، حيث يتم تقديم مجموعة كاملة من المصنوعات من المواد الخام والمعدات والمنتجات النهائية من المواد المركبة على نطاق واسع. وفي حضورها الثاني في المعرض، حاولت شركة BKC أن تكون ممثلًا مختصًا لإيران. قابلنا في الجناح رقم 0A1"
      },
      {
          id:1,
          title:"التواجد الثامن على التوالي لشركة بنيان كالا كيمي (BKC) في معرض الشرق الأوسط للطلاء (MECS) 2019 – دبي",
          image:"/images/blog2.jpg",
          content:"يعد معرض MECS 2019، الذي يقام في الفترة من 9 إلى 11 مارس 2019، أكبر معرض في منطقة الشرق الأوسط والخليج العربي لموردي المواد الخام والمصنعين المجهزين لصناعة الطلاء والطلاء. وبحضورها الثامن على التوالي في المعرض، حاولت شركة BKC أن تكون ممثلًا كفؤًا لإيران."
      },
      {
          id:2,
          title:"حضور شركة بنيان كالا كيمي (BKC) في المعرض الدولي للدهانات والراتنجات والطلاءات والمواد المركبة والطلاءات (IPCC 2019) – طهران",
          image:"/images/blog3.jpg",
          content:"سنعرض في IPCC 2019 في أرض المعارض الدائمة بطهران في الفترة من 9 ديسمبر إلى 12 ديسمبر. ندعوكم لزيارة جناحنا 20، القاعة 07. نراكم هناك!"
      }
    ]
      },
      aboutus:{
        textone:"شرکة «بنیان» بدأت نشاطاتها في مجال تصنیع المنتجات الکیمیاویة من عامّ 1996 في إیران .",
        texttwo:" شركة «بنیان» للقطاع الخاصّ الموجهة للتصدير، بقدرة إنتاج 40 ألف طن سنویة، بالإضافة إلى تزويد السوق الوطني في صناعات الدهانات والطلاء والصناعات المركبة، لها أيضًا مشارکة نشطة على الساحة الدولية، ويتمّ توزيع منتجاتها على نطاق واسع في الشرق الأوسط وشمال أفريقيا وأوروبا الشرقية وآسيا الوسطى و  بدعم من الخبراء المختصین والمعرفة التقنية الحديثة والمعدّات المتقدمة بما يتماشى مع المعايير الدولية في عملیة الإنتاج، ومختبرات مراقبة الجودة والبحث والتطوير، نجحنا في صناعة وتوفير منتجات متنوعة ذات تطبيقات واسعة في الصناعات والأسواق المستهدفة.",
        textthree:"أدّى هذا التواجد المستمر والواسع النطاق في الأسواق العالمية إلى ترسيخ وضمان مكانتنا بين أفضل منتجي التصدير الرائدين في مجال نشاطنا المتخصص.",
        textfour:"من المنظَّمات الدولیة و کذا الحصول على الموافقات الصحيحة من مؤسسات التصنيف الوطنية من المستوى الأول يمنح عملائنا الکرام ضمانًا مزدوجًا بأنهم سيحصلون دائمًا على منتج عالي الجودة ISO 9001:2015 الحصول على شهادة نظام إدارة الجودة بناءً على .",
        market:{
          title:"الأسواق المستهدفة والإسنخدامات الرئيسية لمنتجاتنا هي:",
          appone:"الدهانات والطلاءات الصناعية والبنائیة",
          apptwo:"الصناعات المرکّبة(الکمبوزیت)",
          appthree:"القطع والألواح من الألياف الزجاجية",
          appfour:"صناعات التعويم والمواصلات والبنية الأساسیة والطاقة",
          appfive:"أنابيب المياه والصرف الصحي (المجاري)",
          appsix:"SMC و BMC",
          appseven:"مخازن مواد شیمیایی",
          appeight:"حاویات التخزین للمواد الكيميائية"
          
        }
      }
    },
    {
      languge:"ru",
      home:{
        hero:{
          titleFirst:"بنیان",
          titleSecond:"کالا شیمی",
          subtitle:"Производитель Насыщенные полиэфирные смолы ,ненасыщенных полиэфирных смол, Эпоксидные смолы,Малеиновая Смола, алкидных смол и сиккативов",
          heroBtn:"ПРОДУКЦИЯ"
        },
        about:{
          title:"we are bonyan kala chimie",
          subtextone:"Компания Bonyan Kala Chemie (BKC), основанная в 1997, является ведущим иранским производителем алкидных и Насыщенные полиэфирные, ненасыщенных полиэфирных смол на основе растворителя, Эпоксидные смолы, Малеиновая Смола, а также сиккативов.",
          subtexttwo:"BKC – частная компания, сертифицированная по стандартам ISO, ориентирована на экспорт, ее производительность красок, покрытий и композитов составляет 40 тысяч метрических тонн в год, поставляемых на внутренний и внешний рынок, который охватывает Ближний Восток и Северную Африку, СНГ и Восточную Европу",
          subtextthree:"продуктовая линейка и обширная область применения обеспечены надежной поддержкой высокопрофессиональной технической команды, передовой экпертизой и высокотехнологичными лабораториями качества и НИЦ, оборудованными в соответствии с международными стандартами…"
        },
        products:{
          UnsaturatedPolyesterResins:{
            name:"Ненасыщенные полиэфирные смолы"
          },
          AlkydResins:{
            name:"Алкидные смолы"
          },
          ResinsForPowderCoatings:{
            name:"Смолы для порошковых покрытий"
          },
          Driers:{
            name:"Сиккативы"
          },
          ResinsForProtectiveCoatings:{
            name:"Смолы для защитных покрытий"
          },
          MaleicResin:{
            name:"Малеиновая Смола"
          }
        },
        map:{
          c1:"iraq",
          c2:"azerbaijan",
          c3:"uzbekistan",
          c4:"turkey",
          c5:"UAE",
          c6:"Ivory‌Coast",
          c7:"Nigeria",
          c8:"Ghana",
          c9:"Djibouti",
          c10:"Afghanistan",
          c11:"Pakistan",
          c12:"qatar",
          c13:"Oman",
          c14:"Kyrgyzstan",
          c15:"Kazakhstan",
          c16:"Russia"
        },
        blog:[{
          id:0,
          title:"Второе участие Bonyan Kala Chemie Co. (BKC) в выставке Composite Expo 2019, Москва",
          image:"/images/blog1.jpg",
          content:"Composite-Expo 2019, проходящей с 23 по 25 апреля 2019 года, является ведущим международным специализированным мероприятием в композитной отрасли России, где широко представлен полный спектр производств сырья, оборудования и готовой продукции из композитов. В качестве своего второго присутствия на выставке, BKC попытался быть компетентным представителем Ирана."
      },
      {
          id:1,
          title:"Восьмое по счету участие Bonyan Kala Chemie Co. (BKC) в выставке покрытия Ближнего Востока (MECS) 2019-Дубай",
          image:"/images/blog2.jpg",
          content:"MECS 2019, проходящая 9-11 марта 2019 года, является крупнейшей выставкой на Ближнем Востоке и в регионе Персидского залива для поставщиков сырья и производителей оборудования для лакокрасочной промышленности.В качестве своего восьмого последовательного присутствия на выставке BKC пыталась быть компетентным представителем Ирана."
      },
      {
          id:2,
          title:"Шестнадцатое участие Bonyan Kala Chemie Co. (BKC) в международной выставке красок, смол, покрытий, композитов и гальванических производств (IPCC 2019) – Тегеран",
          image:"/images/blog3.jpg",
          content:"МГЭИК, как ведущая выставка красок и смол в регионе пройдет на постоянной ярмарке Тегерана 23 – 26 января 2019 года. Встретимся на стенде 32, зал 7."
      }
    ]
      },
      aboutus:{
        textone:"Компания Bonyan Kala Chemie (BKC), основанная в 1997, является ведущим иранским производителем алкидных и ненасыщенных полиэфирных смол на основе растворителя, а также сиккативов.",
        texttwo:"BKC – частная компания, сертифицированная по стандартам ISO, ориентирована на экспорт, ее производительность красок, покрытий и композитов составляет 40 тысяч метрических тонн в год, поставляемых на внутренний и внешний рынок, который охватывает Ближний Восток и Северную Африку, СНГ и Восточную Европу. Наша широкая продуктовая линейка и обширная область применения обеспечены надежной поддержкой высокопрофессиональной технической команды, передовой экпертизой и высокотехнологичными лабораториями качества и НИЦ, оборудованными в соответствии с международными стандартами.",
        textthree:"Это постоянное успешное присутствие на международном рынке позволило BKC зарекомендовать себя как вторитетного производителя и экспортера, лидирующего в своем сегменте.",
        textfour:"Кроме того, благодаря внедрению и поддержанию стандартов Системы качества ISO 9001:2015, подтвежденному международной и национальной инспекцией и номенклатурными образованиями, мы можем гарантировать премиальное качество продукции и соблюдение условий поставки заказчикам.",
        market:{
          title:"Среди наших целевых сегментов рынка применения продукции следуюцие:",
          appone:"Строительные и промышленные краски и покрытия",
          apptwo:"Производство композитов",
          appthree:"Производство стеклопластика/фиброармированного пластика",
          appfour:"Морские суда, транспортировка и энергетика",
          appfive:"Трубопроводы и обвязка",
          appsix:"Листовые пресс-материалы и премиксы",
          appseven:"Химические и огнезащитные составы",
          appeight:"Производство камня"
          
        }
      }
    }
  ]
  const [lang, setLang] = useState('en');
  const [page, setPage] = useState(0);
  const [langIndex, setLangIndex] = useState(0);
  var mobile =window.matchMedia("(max-width: 640px)")
 useEffect(() => {
      if(lang == "en" ){
          setLangIndex(0)
      }else if(lang == "fr" ){
        setLangIndex(1)
    }else if(lang == "ar" ){
      setLangIndex(2)
  }else if(lang == "ru" ){
      setLangIndex(3)
  }
 } , [lang])
  return (
    <>
     <LanContext.Provider value={langArray[langIndex]}>
    <Navbar setLang={setLang} setPage={setPage} page={page}/>
     <LoadingAnimation />
      
    <Outlet  />
   
    <Footer />
    </LanContext.Provider>
    </>
  )
}

export default Root
