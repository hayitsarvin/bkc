


export const productData = {
    AlkydResins : [{
        name:"short oil",
        nameFa:"کوتاه روغن",
        nameRu:"короткая нефть",
        applications:[
            {
                image:"/images/IndustrialPaints&Coatings1.jpg",
                codes:["BAS320"  ,"BAS312" , "BAS311" , "BAS310" , "BAS308" , "BAS307" , "BAS305" , "BAS304" , "BAS302"]
            },
            {
                image:"/images/WoodCoating2.jpeg",
                codes:[ "BAS311" , "BAS310" ,"BAS307" , "BAS304" , "BAS302"]
            },
        ]
    },
    {
        name:"medium oil",
        nameFa:"متوسط روغن",
        nameRu:"среднее масло",
        applications:[
            {
                image:"/images/IndustrialPaints&Coatings1.jpg",
                codes:["BAM212" , "BAM208" , "BAM207" , "BAM203"]
            },
            {
                image:"/images/ArchitecturalPaints&Coatings1.jpg",
                codes:["BAM208" , "BAM203"]
            },
        ]
    },
    {
        name:"long oil",
        nameFa:"درشت روغن",
        nameRu:"длинная нефть",
        applications:[
            {
                image:"/images/ArchitecturalPaints&Coatings1.jpg",
                codes:["BAL133" ,"BAL118" ,"BAL117" , "BAL116" , "BAL108" , "BAL106" , "BAL105" , "BAL104"]
            },
            {
                image:"/images/IndustrialPaints&Coatings1.jpg",
                codes:["70"]
            },
            {
                image:"/images/ArchitecturalPaints&Coatings1.jpg",
                codes:["BAL133" , "BAL106"]
            },
        ]
    }

] ,
SaturatedPolyesterResins :[
    {
        name: "PE / TGIC",
        applications: [
            {
                image:"/images/IndustrialPaints&Coatings1.jpg",
                codes:["550"]
            }
        ]
    },
    {
        name: "EP / PE",
        applications: [
            {
                image:"/images/sang1.jpg",
                codes:["510" , "520" , "530"]
            }
        ]
    }
],
UnsaturatedPolyesterResins: {
    applications:[
        {
            image: "/images/galeb.jpg",
            codes:["BUP640","BUP621" ,"BUP617" ,"BUP611" , "BUP610"]
        },
        {
            image: "/images/loleh.png",
            codes:["BUP660", "BUP630" , "BUP621" ,"BUP620"]
        },
        {
            image: "/images/dasti.jpg",
            codes:["BUP630" ,"BUP621" , "BUP615" , "BUP614"]
        },
        {
            image: "/images/loleh.png",
            codes:["BUP660" , "BUP631" ,"BUP630"]
        },
        {
            image:  "/images/smc.jpg",
            codes:["BUP672" , "BUP671" , "BUP670"]
        },
        {
            image:  "/images/sang1.jpg",
            codes:["BUP690" ,"BUP665" , "BUP625", "BUP624", "BUP623" ,"BUP621"]
        },
        {
            image: "/images/Button.jpg",
            codes:["BUP640"]
        },
        {
            image: "/images/gel.jpg",
            codes:["BUP665" ,"BUP645" , "BUP635" ,"BUP620"]
        },
        {
            image: "/images/Pultrusion2.jpg",
            codes:["BUP660" , "BUP631" ,"BUP630"]
        }
    ]
},
Driers: {
    applications:[
        {
            image: "/images/gel.jpg",
            codes:["BDCa5"]
        },
        {
            image: "/images/Pultrusion2.jpg",
            codes:["BDPb32"]
        },
        {
            image: "/images/smc.jpg",
            codes:["BDCo10"]
        },
        {
            image: "/images/loleh.png",
            codes:["BDZr18" ]
        }
    ]
    
},
Epoxy: {
    applications:[
        {
            image: "/images/Pultrusion2.jpg",
            codes:["BEP4757" , "BEP4809"]
        },
        {
            image: "/images/IndustrialPaints&Coatings1.jpg",
            codes:["BEP4503" ,"BEP4604"]
        },
        {
            image: "/images/galeb.jpg",
            codes:["BEP4701"]
        }
    ]
}
}

export const tds = {
    // BAS315 :{
    //     fa:{
    //      product:"رزین آلکید کوتاه روغن اصلاح شده با استایرن",
    //      name:"BAS315",
    //      Description:"BAS 315 X-60 رزین آلکید هوا­خشک کوتاه روغن اصلاح شده با استایرن بر پایه اسید چرب روغن سویا با سرعت خشک­ شوندگی بسیار زیاد و مقاوت خوب به محیط­های اسیدی و بازی می­باشد.",
    //      Characteristics:[
    //          "سرعت خشک شوندگی بسیار زیاد",
    //          "مقاومت خوب به محیط های اسیدی و بازی"
    //      ],
    //      Uses:[
    //          "رنگ‌ها و پوشش­‌های صنعتی",
    //          "رنگ های چکشی",
    //          "رنگ های سریع خشک"
    //      ],
    //      Table:[
    //          {
    //              propertis:"درصد روغن (تقریبی)",
    //              unit:"% wt",
    //              value:"30±1",
    //              testMethod:"محاسبه"
    //          },
    //          {
    //              propertis:"رنگ",
    //              unit:"Gardner",
    //              value:"4>",
    //              testMethod:"ASTM D1544"
    //          },
    //          {
    //              propertis:"گرانروی (℃25)",
    //              unit:"St",
    //              value:"30-60",
    //              testMethod:"ASTM D1545"
    //          },
    //          {
    //              propertis:"عدد اسیدی",
    //              unit:"mg KOH/g",
    //              value:"4-7",
    //              testMethod:"ASTM D1639"
    //          },
    //          {
    //              propertis:"درصد جامد",
    //              unit:"% wt",
    //              value:"60±1",
    //              testMethod:"ASTM D1259"
    //          },
    //          {
    //              propertis:"چگالی  (℃23)",
    //              unit:"g/cm³",
    //              value:"1.04",
    //              testMethod:"ASTM D1475"
    //          },
    //          {
    //              propertis:"نقطه اشتعال (جام روباز)",
    //              unit:"℃",
    //              value:"23.2",
    //              testMethod:"ASTM D92"
    //          }
    //      ],
 
    //      safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های آلکیدی رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
    //      Packaging:"200 کیلوگرم (خالص) در بشکه‌های فولادی.",
    //      Storage:"محصول را در محل خنک و در دمای کمتر از ℃25 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید.",
    //      Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
    //     },
    //     en:{
    //      product:"Alkyd Resins",
    //      name:"BAS315",
    //      Description:"BAS 315 X-60 is an air drying styrene-modified short oil alkyd resin based on soybean oil fatty acid which offers very fast drying and good resistance to acidic and basic agents.",
    //      Characteristics:[
    //          "Very fast drying",
    //          "Good resistance to acidic and basic agents"
    //      ],
    //      Uses:[
    //          "Industrial paints and coatings",
    //          "Hammer finished paints",
    //          "Fast dry paints"
    //      ],
    //      Table:[
    //          {
    //              propertis:"oil percentage (approximate)",
    //              unit:"% wt",
    //              value:"30±1",
    //              testMethod:"Computing"
    //          },
    //          {
    //              propertis:"color",
    //              unit:"Gardner",
    //              value:"4>",
    //              testMethod:"ASTM D1544"
    //          },
    //          {
    //              propertis:"Viscosity (25℃)",
    //              unit:"St",
    //              value:"30-60",
    //              testMethod:"ASTM D1545"
    //          },
    //          {
    //              propertis:"acid number",
    //              unit:"mg KOH/g",
    //              value:"4-7",
    //              testMethod:"ASTM D1639"
    //          },
    //          {
    //              propertis:"percent solids",
    //              unit:"% wt",
    //              value:"60±1",
    //              testMethod:"ASTM D1259"
    //          },
    //          {
    //              propertis:"Density (23℃)",
    //              unit:"g/cm³",
    //              value:"1.04",
    //              testMethod:"ASTM D1475"
    //          },
    //          {
    //              propertis:"Flashing point (open cup)",
    //              unit:"℃",
    //              value:"23.2",
    //              testMethod:"ASTM D92"
    //          }
             
    //      ],
    //      safety:"The usual protective measures employed during the handling of Alkyd Resins should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
    //      Packaging:"200 kg (net) in steel drums.",
    //      Storage:"Store in a cool place below 25 °C and away from moisture and direct sunlight.",
    //      Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
    //     },
    //     ru:{
    //      product:"Стирол-модифицированная тощая алкидная смола",
    //      name:"BAS315",
    //      Description:"BAS 315 X-60 – модифицированная стиролом короткая масляная алкидная смола воздушной сушки на основе жирной кислоты соевого масла, которая обеспечивает Очень быструю сушку и хорошую устойчивость к кислотным и основным агентам.",
    //      Characteristics:[
    //          "Очень быстро сохнет",
    //          "Хорошая устойчивость к кислотным и основным агентам"
    //      ],
    //      Uses:[
    //          "Промышленные краски и покрытия",
    //          "Покрытия с молотковым эффектом",
    //          "Быстросохнущие краски"
    //      ],
    //      Table:[
    //          {
    //              propertis:"Содержание масла (прибл.)",
    //              unit:"% веса",
    //              value:"30±1",
    //              testMethod:"Расчеты"
    //          },
    //          {
    //              propertis:"Цвет",
    //              unit:"Гарднер",
    //              value:"Max 4",
    //              testMethod:"ASTM D1544"
    //          },
    //          {
    //              propertis:"Вязкость (при 25°C)",
    //              unit:"Ст",
    //              value:"30-60",
    //              testMethod:"ASTM D1545"
    //          },
    //          {
    //              propertis:"Кислотное число",
    //              unit:"мг KOH/г",
    //              value:"4-7",
    //              testMethod:"ASTM D1639"
    //          },
    //          {
    //              propertis:"Сухой остаток",
    //              unit:"% веса",
    //              value:"60±1",
    //              testMethod:"ASTM D1259"
    //          },
    //          {
    //              propertis:"Плотность (при 23°C)",
    //              unit:"г/см³",
    //              value:"1.04",
    //              testMethod:"ASTM D1475"
    //          },
    //          {
    //              propertis:"Температура вспышки (в открытом тигле)",
    //              unit:"℃",
    //              value:"23.2",
    //              testMethod:"ASTM D92"
    //          }
    //      ],
    //      safety:"Следует соблюдать стандартные меры безопасности транспортировки алкидных смол. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
    //      Packaging:"200 кг (нетто) в металлических бочках.",
    //      Storage:"Хранить в прохладном месте при температуре ниже 25 °C и вдали от влаги и прямых солнечных лучей.",
    //      Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
    //     }
 
    //  },
    BAS320 :{
       fa:{
        product:"رزین آلکید کوتاه روغن اصلاح شده با استایرن",
        name:"BAS320",
        pdf:"BAS320-Fa.pdf",
        Description:"BAS 320 X-60 رزین آلکید هوا­خشک کوتاه روغن اصلاح شده با استایرن بر پایه اسید چرب روغن سویا با سرعت خشک­ شوندگی بسیار زیاد و مقاوت خوب به محیط­های اسیدی و بازی می­باشد.",
        Characteristics:[
            "سرعت خشک شوندگی بسیار زیاد",
            "مقاومت خوب به محیط های اسیدی و بازی"
        ],
        Uses:[
            "رنگ‌ها و پوشش­‌های صنعتی",
            "رنگ های چکشی",
            "رنگ های سریع خشک"
        ],
        Table:[
            {
                propertis:"درصد روغن (تقریبی)",
                unit:"% wt",
                value:"30±1",
                testMethod:"محاسبه"
            },
            {
                propertis:"رنگ",
                unit:"Gardner",
                value:"4>",
                testMethod:"ASTM D1544"
            },
            {
                propertis:"گرانروی (℃25)",
                unit:"St",
                value:"30-60",
                testMethod:"ASTM D1545"
            },
            {
                propertis:"عدد اسیدی",
                unit:"mg KOH/g",
                value:"4-7",
                testMethod:"ASTM D1639"
            },
            {
                propertis:"درصد جامد",
                unit:"% wt",
                value:"60±1",
                testMethod:"ASTM D1259"
            },
            {
                propertis:"چگالی  (℃23)",
                unit:"g/cm³",
                value:"1.04",
                testMethod:"ASTM D1475"
            },
            {
                propertis:"نقطه اشتعال (جام روباز)",
                unit:"℃",
                value:"23.2",
                testMethod:"ASTM D92"
            }
        ],

        safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های آلکیدی رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
        Packaging:"200 کیلوگرم (خالص) در بشکه‌های فولادی.",
        Storage:"محصول را در محل خنک و در دمای کمتر از ℃25 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید.",
        Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
       },
       en:{
        product:"Alkyd Resins",
        name:"BAS320",
        pdf:"BAS320-En.pdf",
        Description:"BAS 320 X-60 is an air drying styrene-modified short oil alkyd resin based on soybean oil fatty acid which offers very fast drying and good resistance to acidic and basic agents.",
        Characteristics:[
            "Very fast drying",
            "Good resistance to acidic and basic agents"
        ],
        Uses:[
            "Industrial paints and coatings",
            "Hammer finished paints",
            "Fast dry paints"
        ],
        Table:[
            {
                propertis:"oil percentage (approximate)",
                unit:"% wt",
                value:"30±1",
                testMethod:"Computing"
            },
            {
                propertis:"color",
                unit:"Gardner",
                value:"4>",
                testMethod:"ASTM D1544"
            },
            {
                propertis:"Viscosity (25℃)",
                unit:"St",
                value:"30-60",
                testMethod:"ASTM D1545"
            },
            {
                propertis:"acid number",
                unit:"mg KOH/g",
                value:"4-7",
                testMethod:"ASTM D1639"
            },
            {
                propertis:"percent solids",
                unit:"% wt",
                value:"60±1",
                testMethod:"ASTM D1259"
            },
            {
                propertis:"Density (23℃)",
                unit:"g/cm³",
                value:"1.04",
                testMethod:"ASTM D1475"
            },
            {
                propertis:"Flashing point (open cup)",
                unit:"℃",
                value:"23.2",
                testMethod:"ASTM D92"
            }
            
        ],
        safety:"The usual protective measures employed during the handling of Alkyd Resins should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
        Packaging:"200 kg (net) in steel drums.",
        Storage:"Store in a cool place below 25 °C and away from moisture and direct sunlight.",
        Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
       },
       ru:{
        product:"Стирол-модифицированная тощая алкидная смола",
        name:"BAS320",
        pdf:"BAS320-RU.pdf",
        Description:"BAS 320 X-60 – модифицированная стиролом короткая масляная алкидная смола воздушной сушки на основе жирной кислоты соевого масла, которая обеспечивает Очень быструю сушку и хорошую устойчивость к кислотным и основным агентам.",
        Characteristics:[
            "Очень быстро сохнет",
            "Хорошая устойчивость к кислотным и основным агентам"
        ],
        Uses:[
            "Промышленные краски и покрытия",
            "Покрытия с молотковым эффектом",
            "Быстросохнущие краски"
        ],
        Table:[
            {
                propertis:"Содержание масла (прибл.)",
                unit:"% веса",
                value:"30±1",
                testMethod:"Расчеты"
            },
            {
                propertis:"Цвет",
                unit:"Гарднер",
                value:"Max 4",
                testMethod:"ASTM D1544"
            },
            {
                propertis:"Вязкость (при 25°C)",
                unit:"Ст",
                value:"30-60",
                testMethod:"ASTM D1545"
            },
            {
                propertis:"Кислотное число",
                unit:"мг KOH/г",
                value:"4-7",
                testMethod:"ASTM D1639"
            },
            {
                propertis:"Сухой остаток",
                unit:"% веса",
                value:"60±1",
                testMethod:"ASTM D1259"
            },
            {
                propertis:"Плотность (при 23°C)",
                unit:"г/см³",
                value:"1.04",
                testMethod:"ASTM D1475"
            },
            {
                propertis:"Температура вспышки (в открытом тигле)",
                unit:"℃",
                value:"23.2",
                testMethod:"ASTM D92"
            }
        ],
        safety:"Следует соблюдать стандартные меры безопасности транспортировки алкидных смол. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
        Packaging:"200 кг (нетто) в металлических бочках.",
        Storage:"Хранить в прохладном месте при температуре ниже 25 °C и вдали от влаги и прямых солнечных лучей.",
        Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
       }

    },
    BAS312 :{
        fa:{
         product:"رزین آلکید کوتاه روغن",
         name:"BAS312",
         pdf:"BAS312-Fa.pdf",
         Description:"BAS 312 X-60 رزین آلکید کوتاه روغن بر پایه اسید چرب روغن سویا با سختی، چسبندگی و انعطاف­‌پذیری عالی و خشک­‌شوندگی سطحی و عمقی و براقیت و حفظ براقیت بسیار خوب است.",
         Characteristics:[
            "سختی عالی",
            "جسبندگی و انعطاف­‌پذیری عالی",
            "خشک‌­شوندگی سطحی و عمقی بسیار خوب",
            "ترکنندگی و قابلیت پراکنش رنگدانه بسیار خوب",
            "حلال­‌خوری بسیار خوب",
            "براقیت و دوام براقیت بسیار خوب",
            "رنگ‌ها و پوشش­‌های صنعتی",
            "ضد زنگ و آستر ضد خوردگی",
            "بتونه فوری بر پایه نیتروسلولز"
         ],
         Uses:[
             "رنگ‌ها و پوشش­‌های صنعتی",
             "رنگ های چکشی",
             "رنگ های سریع خشک"
         ],
         Table:[
            {
                propertis:"درصد روغن (تقریبی)",
                unit:"% wt",
                value:"32",
                testMethod:"محاسبه"
            },
            {
                propertis:"رنگ",
                unit:"Gardner",
                value:"4.5>",
                testMethod:"ASTM D1544"
            },
            {
                propertis:"گرانروی (℃25)",
                unit:"St",
                value:"80-120",
                testMethod:"ASTM D1545"
            },
            {
                propertis:"عدد اسیدی",
                unit:"mg KOH/g",
                value:"10>",
                testMethod:"ASTM D1639"
            },
            {
                propertis:"درصد جامد",
                unit:"% wt",
                value:"60±1",
                testMethod:"ASTM D1259"
            },
            {
                propertis:"چگالی  (℃23)",
                unit:"g/cm³",
                value:"1.0396",
                testMethod:"ASTM D1475"
            },
            {
                propertis:"نقطه اشتعال (جام روباز)",
                unit:"℃",
                value:"23.2",
                testMethod:"ASTM D92"
            }
        ],
         safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های آلکیدی رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
         Packaging:"200 کیلوگرم (خالص) در بشکه‌های فولادی.",
         Storage:"محصول را در محل خنک و در دمای کمتر از ℃25 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید.",
         Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
        },
        en:{
         product:"Alkyd Resins",
         name:"BAS312",
         pdf:"BAS312-En.pdf",
         Description:"BAS 312 X-60 is a short oil alkyd resin based on soybean oil fatty acid which offers excellent hardness, adhesion and flexibility and very good surface and deep drying and gloss and gloss retention.",
         Characteristics:[
             "Excellent hardness",
             "Excellent adhesion and flexibility",
             "Very good surface and deep drying",
             "Very good pigment wetting and dispersing",
             "Very good solvent tolerance",
             "Very good gloss and gloss retention"
         ],
         Uses:[
             "Industrial paints and coatings",
             "Anti corrosion primers",
             "Nitro cellulose putties and fillers"
         ],
         Table:[
            {
                propertis:"oil percentage (approximate)",
                unit:"% wt",
                value:"32",
                testMethod:"Computing"
            },
            {
                propertis:"color",
                unit:"Gardner",
                value:"4.5>",
                testMethod:"ASTM D1544"
            },
            {
                propertis:"Viscosity (25℃)",
                unit:"St",
                value:"80-120",
                testMethod:"ASTM D1545"
            },
            {
                propertis:"acid number",
                unit:"mg KOH/g",
                value:"10>",
                testMethod:"ASTM D1639"
            },
            {
                propertis:"percent solids",
                unit:"% wt",
                value:"60±1",
                testMethod:"ASTM D1259"
            },
            {
                propertis:"Density (23℃)",
                unit:"g/cm³",
                value:"1.0396",
                testMethod:"ASTM D1475"
            },
            {
                propertis:"Flashing point (open cup)",
                unit:"℃",
                value:"23.2",
                testMethod:"ASTM D92"
            }
            
        ],
         safety:"The usual protective measures employed during the handling of Alkyd Resins should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
         Packaging:"200 kg (net) in steel drums.",
         Storage:"Store in a cool place below 25 °C and away from moisture and direct sunlight.",
         Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
        },
        ru:{
         product:"Тощая алкидная смола",
         name:"BAS312",
         pdf:"BAS312-RU.pdf4",
         Description:"BAS 312 X-60 тощая алкидная смола на основе жирных кислот соевого масла, обладающая отличной твердостью, адгезией и пластичностью, очень хорошим поверхностным и глубоким высыханием, и блеском и устойчивостью блескаis.",
         Characteristics:[
             "Отличная твердость",
             "Отличные адгезия и пластичность",
             "Очень хорошее поверхностное и глубокое высыхание",
             "Очень хорошее увлажнение пигмента и распыление",
             "Очень хорошая устойчивость к растворителям",
             "Очень хороший блеск и устойчивость блеска"
         ],
         Uses:[
             "Промышленные краски и покрытия",
             "Антикоррозийные грунтовки",
             "Нитроцеллюлозные шпатлевки и наполнители"
         ],
         Table:[
            {
                propertis:"Содержание масла (прибл.)",
                unit:"% веса",
                value:"32",
                testMethod:"Расчеты"
            },
            {
                propertis:"Цвет",
                unit:"Гарднер",
                value:"Max 4.5",
                testMethod:"ASTM D1544"
            },
            {
                propertis:"Вязкость (при 25°C)",
                unit:"Ст",
                value:"80-120",
                testMethod:"ASTM D1545"
            },
            {
                propertis:"Кислотное число",
                unit:"мг KOH/г",
                value:"10>",
                testMethod:"ASTM D1639"
            },
            {
                propertis:"Сухой остаток",
                unit:"% веса",
                value:"60±1",
                testMethod:"ASTM D1259"
            },
            {
                propertis:"Плотность (при 23°C)",
                unit:"г/см³",
                value:"1.0396",
                testMethod:"ASTM D1475"
            },
            {
                propertis:"Температура вспышки (в открытом тигле)",
                unit:"℃",
                value:"23.2",
                testMethod:"ASTM D92"
            }
        ],
         safety:"Следует соблюдать стандартные меры безопасности транспортировки алкидных смол. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
         Packaging:"200 кг (нетто) в металлических бочках.",
         Storage:"Хранить в прохладном месте при температуре ниже 25 °C и вдали от влаги и прямых солнечных лучей.",
         Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
        }
 
     },
     BAS311 :{
         fa:{
          product:"رزین آلکید کوتاه روغن",
          name:"BAS311",
          pdf:"BAS311-Fa.pdf",
          Description:"BAS 311 X-65 رزین آلکید کوتاه روغن بر پایه اسید چرب روغن سویا با سختی، خشک‌­شوندگی سطحی و عمقی، چسبندگی، انعطاف‌­پذیری و ترکنندگی و قابلیت پراکنش رنگدانه بسیار خوب است.",
          Characteristics:[
             "براقیت و حفظ براقیت عالی",
             "سختی بسیار خوب",
             "خشک­‌شوندگی سطحی و عمقی بسیار خوب",
             "­جسبندگی و انعطاف­‌پذیری بسیار خوب",
             "ترکنندگی و قابلیت پراکنش رنگدانه بسیار خوب",
             "حلال­‌خوری بسیار خوب"
          ],
          Uses:[
              "رنگ‌ها و پوشش­‌های صنعتی",
              "رنگ­‌ چکشی",
              "جلا، لعاب و رنگ کوره‌­ای",
              "ضدزنگ و آستر ضد خوردگی",
              "پوشش چوب",
              "جلا، ورنی و شفاف‌­پوشه­‌های اصلاح شده با آمینو رزین"
          ],
          Table:[
            {
                propertis:"درصد روغن (تقریبی)",
                unit:"% wt",
                value:"32",
                testMethod:"محاسبه"
            },
            {
                propertis:"رنگ",
                unit:"Gardner",
                value:"3>",
                testMethod:"ASTM D1544"
            },
            {
                propertis:"گرانروی (℃25)",
                unit:"St",
                value:"550-650",
                testMethod:"ASTM D1545"
            },
            {
                propertis:"عدد اسیدی",
                unit:"mg KOH/g",
                value:"10>",
                testMethod:"ASTM D1639"
            },
            {
                propertis:"درصد جامد",
                unit:"% wt",
                value:"65±1",
                testMethod:"ASTM D1259"
            },
            {
                propertis:"چگالی  (℃23)",
                unit:"g/cm³",
                value:"1.0331",
                testMethod:"ASTM D1475"
            },
            {
                propertis:"نقطه اشتعال (جام روباز)",
                unit:"℃",
                value:"23.1",
                testMethod:"ASTM D92"
            }
        ],
          safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های آلکیدی رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
          Packaging:"200 کیلوگرم (خالص) در بشکه‌های فولادی.",
          Storage:"محصول را در محل خنک و در دمای کمتر از ℃25 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید.",
          Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
         },
         en:{
          product:"Alkyd Resins",
          name:"BAS311",
          pdf:"BAS311-En.pdf",
          Description:"BAS 311 X-65 is a short oil alkyd resin based on soybean oil fatty acid which offers very good hardness, surface and deep drying, adhesion, flexibility and pigment wetting and dispersing.",
          Characteristics:[
              "Excellent gloss and gloss retention",
              "Very good hardness",
              "Very good surface and deep drying",
              "Very good adhesion and flexibility",
              "Very good pigment wetting and dispersing",
              "Very good solvent tolerance"
          ],
          Uses:[
             "Industrial paints and coatings",
             "Lacquers, stoving enamels and paints",
             "Anti corrosion primers",
             "Wood coatings",
             "Amino modified lacquers, varnishes and clear coats"
          ],
          Table:[
            {
                propertis:"oil percentage (approximate)",
                unit:"% wt",
                value:"32",
                testMethod:"Computing"
            },
            {
                propertis:"color",
                unit:"Gardner",
                value:"3>",
                testMethod:"ASTM D1544"
            },
            {
                propertis:"Viscosity (25℃)",
                unit:"St",
                value:"550-650",
                testMethod:"ASTM D1545"
            },
            {
                propertis:"acid number",
                unit:"mg KOH/g",
                value:"10>",
                testMethod:"ASTM D1639"
            },
            {
                propertis:"percent solids",
                unit:"% wt",
                value:"65±1",
                testMethod:"ASTM D1259"
            },
            {
                propertis:"Density (23℃)",
                unit:"g/cm³",
                value:"1.0331",
                testMethod:"ASTM D1475"
            },
            {
                propertis:"Flashing point (open cup)",
                unit:"℃",
                value:"23.1",
                testMethod:"ASTM D92"
            }
            
        ],
          safety:"The usual protective measures employed during the handling of Alkyd Resins should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
          Packaging:"200 kg (net) in steel drums.",
          Storage:"Store in a cool place below 25 °C and away from moisture and direct sunlight.",
          Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
         },
         ru:{
          product:"Тощая алкидная смола",
          name:"BAS311",
          pdf:"BAS311-RU.pdf",
          Description:"BAS 311 X-65 – тощая алкидная смола на основе жирных кислот соевого масла, обладающая очень хорошей твердостью, поверхностным и глубоким высыханием, адгезией, пластичностью и увлажнением пигмента и распылением.",
          Characteristics:[
              "Отличные блеск и устойчивость блеска",
              "Очень хорошая твердость",
              "Очень хорошее поверхностное и глубокое высыхание",
              "Очень хорошая адгезия и пластичность",
              "Очень хорошее увлажнение пигмента и распыление",
              "Очень хорошая устойчивость к растворителям"
          ],
          Uses:[
              "Промышленные краски и покрытия",
              "Лаки, горячие эмали и краски",
              "Антикоррозийные грунтовки",
              "Покрытия для дерева",
              "Аминомодифицированные лаки, политура и непигментированные покрытия"
          ],
          Table:[
            {
                propertis:"Содержание масла (прибл.)",
                unit:"% веса",
                value:"32",
                testMethod:"Расчеты"
            },
            {
                propertis:"Цвет",
                unit:"Гарднер",
                value:"Max 3",
                testMethod:"ASTM D1544"
            },
            {
                propertis:"Вязкость (при 25°C)",
                unit:"Ст",
                value:"550-650",
                testMethod:"ASTM D1545"
            },
            {
                propertis:"Кислотное число",
                unit:"мг KOH/г",
                value:"10>",
                testMethod:"ASTM D1639"
            },
            {
                propertis:"Сухой остаток",
                unit:"% веса",
                value:"65±1",
                testMethod:"ASTM D1259"
            },
            {
                propertis:"Плотность (при 23°C)",
                unit:"г/см³",
                value:"1.0331",
                testMethod:"ASTM D1475"
            },
            {
                propertis:"Температура вспышки (в открытом тигле)",
                unit:"℃",
                value:"23.1",
                testMethod:"ASTM D92"
            }
        ],
          safety:"Следует соблюдать стандартные меры безопасности транспортировки алкидных смол. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
          Packaging:"200 кг (нетто) в металлических бочках.",
          Storage:"Хранить в прохладном месте при температуре ниже 25 °C и вдали от влаги и прямых солнечных лучей.",
          Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
         }
  
      },
      BAS310 :{
          fa:{
           product:"رزین آلکید کوتاه روغن",
           name:"BAS310",
           pdf:"BAS310-Fa.pdf",
           Description:"BAS 310 X-60 رزین آلکید کوتاه روغن بر پایه اسید چرب روغن سویا با سختی، خشک­‌شوندگی سطحی و عمقی، چسبندگی، انعطاف­‌پذیری و ترکنندگی و قابلیت پراکنش رنگدانه عالی است.",
           Characteristics:[
              "براقیت و حفظ براقیت عالی",
              "سختی بسیار خوب",
              "خشک­‌شوندگی سطحی و عمقی بسیار خوب",
              "­جسبندگی و انعطاف­‌پذیری بسیار خوب",
              "ترکنندگی و قابلیت پراکنش رنگدانه بسیار خوب",
              "حلال­‌خوری بسیار خوب"
           ],
           Uses:[
               "رنگ‌ها و پوشش­‌های صنعتی",
               "رنگ­‌ چکشی",
               "جلا، لعاب و رنگ کوره‌­ای",
               "ضدزنگ و آستر ضد خوردگی",
               "پوشش چوب",
               "جلا، ورنی و شفاف‌­پوشه­‌های اصلاح شده با آمینو رزین"
           ],
           Table:[
            {
                propertis:"درصد روغن (تقریبی)",
                unit:"% wt",
                value:"33",
                testMethod:"محاسبه"
            },
            {
                propertis:"رنگ",
                unit:"Gardner",
                value:"2.5>",
                testMethod:"ASTM D1544"
            },
            {
                propertis:"گرانروی (℃25)",
                unit:"St",
                value:"200-300",
                testMethod:"ASTM D1545"
            },
            {
                propertis:"عدد اسیدی",
                unit:"mg KOH/g",
                value:"10>",
                testMethod:"ASTM D1639"
            },
            {
                propertis:"درصد جامد",
                unit:"% wt",
                value:"60±1",
                testMethod:"ASTM D1259"
            },
            {
                propertis:"چگالی  (℃23)",
                unit:"g/cm³",
                value:"1.0289",
                testMethod:"ASTM D1475"
            },
            {
                propertis:"نقطه اشتعال (جام روباز)",
                unit:"℃",
                value:"24.2",
                testMethod:"ASTM D92"
            }
        ],
           safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های آلکیدی رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
           Packaging:"200 کیلوگرم (خالص) در بشکه‌های فولادی.",
           Storage:"محصول را در محل خنک و در دمای کمتر از ℃25 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید.",
           Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
          },
          en:{
           product:"Alkyd Resins",
           name:"BAS310",
           pdf:"BAS310-En.pdf",
           Description:"BAS 310 X-60 is a short oil alkyd resin based on soybean oil fatty acid which offers very good hardness, surface and deep drying, adhesion, flexibility and pigment wetting and dispersing.",
           Characteristics:[
               "Excellent gloss and gloss retention",
               "Very good hardness",
                "Very good surface and deep drying",
                "Very good adhesion and flexibility",
                "Very good pigment wetting and dispersing",
                "Very good solvent tolerance"
           ],
           Uses:[
             "Industrial paints and coatings",
             "Hammer finish paints",
             "Lacquers, stoving enamels and paints",
             "Anti corrosion primers",
             "Wood coatings",
             "Amino modified lacquers, varnishes and clear coats"
           ],
           Table:[
            {
                propertis:"oil percentage (approximate)",
                unit:"% wt",
                value:"33",
                testMethod:"Computing"
            },
            {
                propertis:"color",
                unit:"Gardner",
                value:"2.5>",
                testMethod:"ASTM D1544"
            },
            {
                propertis:"Viscosity (25℃)",
                unit:"St",
                value:"200-300",
                testMethod:"ASTM D1545"
            },
            {
                propertis:"acid number",
                unit:"mg KOH/g",
                value:"10>",
                testMethod:"ASTM D1639"
            },
            {
                propertis:"percent solids",
                unit:"% wt",
                value:"60±1",
                testMethod:"ASTM D1259"
            },
            {
                propertis:"Density (23℃)",
                unit:"g/cm³",
                value:"1.0289",
                testMethod:"ASTM D1475"
            },
            {
                propertis:"Flashing point (open cup)",
                unit:"℃",
                value:"24.2",
                testMethod:"ASTM D92"
            }
            
        ],
           safety:"The usual protective measures employed during the handling of Alkyd Resins should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
           Packaging:"200 kg (net) in steel drums.",
           Storage:"Store in a cool place below 25 °C and away from moisture and direct sunlight.",
           Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
          },
          ru:{
           product:"Тощая алкидная смола",
           name:"BAS310",
           pdf:"BAS310-RU.pdf",
           Description:"BAS 310 X-60 – тощая алкидная смола на основе жирных кислот соевого масла, обладающая очень хорошей твердостью, поверхностным и глубоким высыханием, адгезией, пластичностью и увлажнением пигмента и распылением.",
           Characteristics:[
              "Отличные блеск и устойчивость блеска",
              "Очень хорошая твердость",
              "Очень хорошее поверхностное и глубокое высыхание",
              "Очень хорошая адгезия и пластичность",
              "Очень хорошее увлажнение пигмента и распыление",
              "Очень хорошая устойчивость к растворителям"
           ],
           Uses:[
               "Промышленные краски и покрытия",
               "Покрытия с молотковым эффектом",
               "Лаки, горячие эмали и краски",
               "Антикоррозийные грунтовки",
               "Покрытия для дерева",
               "Аминомодифицированные лаки, политура и непигментированные покрытия"
           ],
           Table:[
            {
                propertis:"Содержание масла (прибл.)",
                unit:"% веса",
                value:"33",
                testMethod:"Расчеты"
            },
            {
                propertis:"Цвет",
                unit:"Гарднер",
                value:"Max 2.5",
                testMethod:"ASTM D1544"
            },
            {
                propertis:"Вязкость (при 25°C)",
                unit:"Ст",
                value:"200-300",
                testMethod:"ASTM D1545"
            },
            {
                propertis:"Кислотное число",
                unit:"мг KOH/г",
                value:"10>",
                testMethod:"ASTM D1639"
            },
            {
                propertis:"Сухой остаток",
                unit:"% веса",
                value:"60±1",
                testMethod:"ASTM D1259"
            },
            {
                propertis:"Плотность (при 23°C)",
                unit:"г/см³",
                value:"1.0289",
                testMethod:"ASTM D1475"
            },
            {
                propertis:"Температура вспышки (в открытом тигле)",
                unit:"℃",
                value:"24.2",
                testMethod:"ASTM D92"
            }
        ],
           safety:"Следует соблюдать стандартные меры безопасности транспортировки алкидных смол. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
           Packaging:"200 кг (нетто) в металлических бочках.",
           Storage:"Хранить в прохладном месте при температуре ниже 25 °C и вдали от влаги и прямых солнечных лучей.",
           Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
          }
   
       },
       BAS308 :{
           fa:{
            product:"رزین آلکید کوتاه روغن",
            name:"BAS308",
            pdf:"BAS308-Fa.pdf",
            Description:"BAS 308 X-60 رزین آلکید کوتاه روغن هوا­خشک بر پایه اسید چرب روغن سویا با سختی، خشک‌­شوندگی سطحی و عمقی، براقیت و حفظ براقیت، تر­کنندگی و قابلیت پراکنش رنگدانه عالی است.",
            Characteristics:[
               "سختی عالی",
               "خشک­‌شوندگی سطحی و عمقی عالی",
               "چسبندگی و سنباده­خوری بسیار خوب",
               "­پوشش­‌دهی بسیار خوب",
               "سرعت خشک­‌شوندگی بسیار زیاد"
            ],
            Uses:[
                "رنگ‌ها و پوشش­‌های صنعتی",
                "رنگ­‌های چکشی",
                "رنگ­‌های سریع خشک"
            ],
            Table:[
                {
                    propertis:"درصد روغن (تقریبی)",
                    unit:"% wt",
                    value:"28",
                    testMethod:"محاسبه"
                },
                {
                    propertis:"رنگ",
                    unit:"Gardner",
                    value:"5>",
                    testMethod:"ASTM D1544"
                },
                {
                    propertis:"گرانروی (℃25)",
                    unit:"St",
                    value:"100-150",
                    testMethod:"ASTM D1545"
                },
                {
                    propertis:"عدد اسیدی",
                    unit:"mg KOH/g",
                    value:"12>",
                    testMethod:"ASTM D1639"
                },
                {
                    propertis:"درصد جامد",
                    unit:"% wt",
                    value:"60±1",
                    testMethod:"ASTM D1259"
                },
                {
                    propertis:"چگالی  (℃23)",
                    unit:"g/cm³",
                    value:"1.0285",
                    testMethod:"ASTM D1475"
                },
                {
                    propertis:"نقطه اشتعال (جام روباز)",
                    unit:"℃",
                    value:"26.2",
                    testMethod:"ASTM D92"
                }
            ],
            safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های آلکیدی رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
            Packaging:"200 کیلوگرم (خالص) در بشکه‌های فولادی.",
            Storage:"محصول را در محل خنک و در دمای کمتر از ℃25 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید.",
            Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
           },
           en:{
            product:"Alkyd Resins",
            name:"BAS308",
            pdf:"BAS308-En.pdf",
            Description:"BAS 308 X-60 is an air drying short oil alkyd resin based on soybean oil fatty acid which offers excellent hardness, surface and deep drying, gloss and gloss retention and pigment wetting and dispersing.",
            Characteristics:[
                "Excellent hardness",
                "Excellent surface and deep drying",
                "Very good adhesion and sanding property",
                "Very good coverage",
                "Very fast drying"
            ],
            Uses:[
             "Industrial paints and coatings",
             "Hammer finish paints",
             "Fast dry paints"
            ],
            Table:[
                {
                    propertis:"oil percentage (approximate)",
                    unit:"% wt",
                    value:"28",
                    testMethod:"Computing"
                },
                {
                    propertis:"color",
                    unit:"Gardner",
                    value:"5>",
                    testMethod:"ASTM D1544"
                },
                {
                    propertis:"Viscosity (25℃)",
                    unit:"St",
                    value:"100-150",
                    testMethod:"ASTM D1545"
                },
                {
                    propertis:"acid number",
                    unit:"mg KOH/g",
                    value:"12>",
                    testMethod:"ASTM D1639"
                },
                {
                    propertis:"percent solids",
                    unit:"% wt",
                    value:"60±1",
                    testMethod:"ASTM D1259"
                },
                {
                    propertis:"Density (23℃)",
                    unit:"g/cm³",
                    value:"1.0285",
                    testMethod:"ASTM D1475"
                },
                {
                    propertis:"Flashing point (open cup)",
                    unit:"℃",
                    value:"26.2",
                    testMethod:"ASTM D92"
                }
                
            ],
            safety:"The usual protective measures employed during the handling of Alkyd Resins should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
            Packaging:"200 kg (net) in steel drums.",
            Storage:"Store in a cool place below 25 °C and away from moisture and direct sunlight.",
            Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
           },
           ru:{
            product:"Тощая алкидная смола",
            name:"BAS308",
            pdf:"BAS308-RU.pdf",
            Description:"BAS 308 X-60 – тощая алкидная смола воздушной сушки на основе жирных кислот соевого масла, обладающая отличной твердостью, поверхностным и глубоким высыханием, блеском и устойчивостью блеска и увлажнением пигмента и распылением.",
            Characteristics:[
              "Отличная твердость",
              "Отличное поверхностное и глубокое высыхание",
              "Очень хорошая адгезия и шлифуемость",
              "Очень хорошее покрытие",
              "Очень быстро сохнет"
            ],
            Uses:[
                "Промышленные краски и покрытия",
                "Покрытия с молотковым эффектом",
                "Быстросохнущие краски"
            ],
            Table:[
                {
                    propertis:"Содержание масла (прибл.)",
                    unit:"% веса",
                    value:"28",
                    testMethod:"Расчеты"
                },
                {
                    propertis:"Цвет",
                    unit:"Гарднер",
                    value:"Max 5",
                    testMethod:"ASTM D1544"
                },
                {
                    propertis:"Вязкость (при 25°C)",
                    unit:"Ст",
                    value:"100-150",
                    testMethod:"ASTM D1545"
                },
                {
                    propertis:"Кислотное число",
                    unit:"мг KOH/г",
                    value:"12>",
                    testMethod:"ASTM D1639"
                },
                {
                    propertis:"Сухой остаток",
                    unit:"% веса",
                    value:"60±1",
                    testMethod:"ASTM D1259"
                },
                {
                    propertis:"Плотность (при 23°C)",
                    unit:"г/см³",
                    value:"1.0285",
                    testMethod:"ASTM D1475"
                },
                {
                    propertis:"Температура вспышки (в открытом тигле)",
                    unit:"℃",
                    value:"26.2",
                    testMethod:"ASTM D92"
                }
            ],
            safety:"Следует соблюдать стандартные меры безопасности транспортировки алкидных смол. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
            Packaging:"200 кг (нетто) в металлических бочках.",
            Storage:"Хранить в прохладном месте при температуре ниже 25 °C и вдали от влаги и прямых солнечных лучей.",
            Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
           }
    
        },
        BAS307 :{
            fa:{
             product:"رزین آلکید کوتاه روغن",
             name:"BAS307",
             pdf:"BAS307-Fa.pdf",
             Description:"BAS 307 X-60 رزین آلکید کوتاه روغن بر پایه اسید چرب روغن نارگیل با سختی، براقیت و حفظ براقیت و چسبندگی عالی است.",
             Characteristics:[
               "سختی عالی",
               "براقیت و حفظ براقیت عالی",
               "چسبندگی و انعطاف­‌پذیری عالی",
               "حلال­‌خوری عالی",
               "ترکنندگی و قابلیت پراکنش رنگدانه خوب"
             ],
             Uses:[
                "رنگ‌ها و پوشش­‌های صنعتی",
                "جلا، لعاب و رنگ کوره­‌ای",
                "رنگ فوری بر پایه نیتروسلولز",
                "پوشش چوب",
                "جلاء ورنی و شفاف­‌پوشه­‌های اصلاح شده با آمینو رزین"
             ],
             Table:[
                {
                    propertis:"درصد روغن (تقریبی)",
                    unit:"% wt",
                    value:"36 ",
                    testMethod:"محاسبه"
                },
                {
                    propertis:"رنگ",
                    unit:"Gardner",
                    value:"1>",
                    testMethod:"ASTM D1544"
                },
                {
                    propertis:"گرانروی (℃25)",
                    unit:"St",
                    value:"250-450",
                    testMethod:"ASTM D1545"
                },
                {
                    propertis:"عدد اسیدی",
                    unit:"mg KOH/g",
                    value:"10>",
                    testMethod:"ASTM D1639"
                },
                {
                    propertis:"درصد جامد",
                    unit:"% wt",
                    value:"60±1",
                    testMethod:"ASTM D1259"
                },
                {
                    propertis:"چگالی  (℃23)",
                    unit:"g/cm³",
                    value:"1.0093",
                    testMethod:"ASTM D1475"
                },
                {
                    propertis:"نقطه اشتعال (جام روباز)",
                    unit:"℃",
                    value:"21",
                    testMethod:"ASTM D92"
                }
            ],
             safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های آلکیدی رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
             Packaging:"200 کیلوگرم (خالص) در بشکه‌های فولادی.",
             Storage:"محصول را در محل خنک و در دمای کمتر از ℃25 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید.",
             Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
            },
            en:{
             product:"Alkyd Resins",
             name:"BAS307",
             pdf:"BAS307-En.pdf",
             Description:"BAS 307 X-60 is a short oil alkyd resin based on coconut oil fatty acid which offers excellent hardness, gloss and gloss retention and adhesion.",
             Characteristics:[
                 "Excellent hardness",
                 "Excellent gloss and gloss retention",
                 "Excellent adhesion and flexibility",
                 "Excellent solvent tolerance",
                 "Good pigment wetting and dispersing"
             ],
             Uses:[
              "Industrial paints and coatings",
              "Lacquers, stoving enamels and paints",
              "Nitro cellulose enamels and paints",
              "Wood coatings",
              "Amino modified lacquers, varnishes and clear coats"
             ],
             Table:[
                {
                    propertis:"oil percentage (approximate)",
                    unit:"% wt",
                    value:"36",
                    testMethod:"Computing"
                },
                {
                    propertis:"color",
                    unit:"Gardner",
                    value:"1>",
                    testMethod:"ASTM D1544"
                },
                {
                    propertis:"Viscosity (25℃)",
                    unit:"St",
                    value:"250-450",
                    testMethod:"ASTM D1545"
                },
                {
                    propertis:"acid number",
                    unit:"mg KOH/g",
                    value:"10>",
                    testMethod:"ASTM D1639"
                },
                {
                    propertis:"percent solids",
                    unit:"% wt",
                    value:"60±1",
                    testMethod:"ASTM D1259"
                },
                {
                    propertis:"Density (23℃)",
                    unit:"g/cm³",
                    value:"1.0093",
                    testMethod:"ASTM D1475"
                },
                {
                    propertis:"Flashing point (open cup)",
                    unit:"℃",
                    value:"21",
                    testMethod:"ASTM D92"
                }
                
            ],
             safety:"The usual protective measures employed during the handling of Alkyd Resins should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
             Packaging:"200 kg (net) in steel drums.",
             Storage:"Store in a cool place below 25 °C and away from moisture and direct sunlight.",
             Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
            },
            ru:{
             product:"Тощая алкидная смола",
             name:"BAS307",
             pdf:"BAS-307-RU.pdf",
             Description:"BAS 307 X-60 – тощая алкидная смола на основе жирных кислот кокосового масла, обладающая отличной твердостью, блеском и устойчивостью блеска и адгезией.",
             Characteristics:[
               "Отличная твердость",
               "Отличный блеск и устойчивость блеска",
               "Отличная адгезия и пластичность",
               "Отличная устойчивость к растворителям",
               "Хорошее увлажнение пигмента и распыление"
             ],
             Table:[
                {
                    propertis:"Содержание масла (прибл.)",
                    unit:"% веса",
                    value:"36",
                    testMethod:"Расчеты"
                },
                {
                    propertis:"Цвет",
                    unit:"Гарднер",
                    value:"Max 1",
                    testMethod:"ASTM D1544"
                },
                {
                    propertis:"Вязкость (при 25°C)",
                    unit:"Ст",
                    value:"250-450",
                    testMethod:"ASTM D1545"
                },
                {
                    propertis:"Кислотное число",
                    unit:"мг KOH/г",
                    value:"10>",
                    testMethod:"ASTM D1639"
                },
                {
                    propertis:"Сухой остаток",
                    unit:"% веса",
                    value:"60±1",
                    testMethod:"ASTM D1259"
                },
                {
                    propertis:"Плотность (при 23°C)",
                    unit:"г/см³",
                    value:"1.0093",
                    testMethod:"ASTM D1475"
                },
                {
                    propertis:"Температура вспышки (в открытом тигле)",
                    unit:"℃",
                    value:"21",
                    testMethod:"ASTM D92"
                }
            ],
             Uses:[
                 "Промышленные краски и покрытия",
                 "Лаки, горячие эмали и краски",
                 "Нитроцеллюлозные эмали и краски",
                 "Покрытия для дерева",
                 "Аминомодифицированные лаки, политура и непигментированные покрытия"
             ],
             safety:"Следует соблюдать стандартные меры безопасности транспортировки алкидных смол. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
             Packaging:"200 кг (нетто) в металлических бочках.",
             Storage:"Хранить в прохладном месте при температуре ниже 25 °C и вдали от влаги и прямых солнечных лучей.",
             Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
            }
     
         },
         BAS305 :{
             fa:{
              product:"رزین آلکید کوتاه روغن",
              name:"BAS305",
              pdf:"BAS-305-Farsi.pdf",
              Description:"BAS 305 X-50 رزین آلکید کوتاه روغن هوا­خشک بر پایه اسید چرب روغن سویا با سختی، براقیت و حفظ براقیت بسیار خوب و خشک­‌شوندگی سطحی و عمقی، ترکنندگی و قابلیت پراکنش رنگدانه عالی است.",
              Characteristics:[
                "خشک­‌شوندگی سطحی و عمقی عالی",
                "تر­کنندگی و قابلیت پراکنش رنگدانه عالی",
                "سختی بسیار خوب",
                "براقیت و حفظ براقیت بسیار خوب",
                "­سرعت خشک­شوندگی بسیار زیاد",
                "حلال­‌خوری خوب",
                "چسبندگی و انعطاف‌­پذیری خوب"
              ],
              Uses:[
                 "رنگ‌ها و پوشش­‌های صنعتی",
                 "رنگ چکشی",
                 "رنگ سریع خشک"
              ],
              Table:[
                {
                    propertis:"درصد روغن (تقریبی)",
                    unit:"% wt",
                    value:"32 ",
                    testMethod:"محاسبه"
                },
                {
                    propertis:"رنگ",
                    unit:"Gardner",
                    value:"3>",
                    testMethod:"ASTM D1544"
                },
                {
                    propertis:"گرانروی (℃25)",
                    unit:"St",
                    value:"40-90",
                    testMethod:"ASTM D1545"
                },
                {
                    propertis:"عدد اسیدی",
                    unit:"mg KOH/g",
                    value:"10>",
                    testMethod:"ASTM D1639"
                },
                {
                    propertis:"درصد جامد",
                    unit:"% wt",
                    value:"50±1",
                    testMethod:"ASTM D1259"
                },
                {
                    propertis:"چگالی  (℃23)",
                    unit:"g/cm³",
                    value:"1.0065",
                    testMethod:"ASTM D1475"
                },
                {
                    propertis:"نقطه اشتعال (جام روباز)",
                    unit:"℃",
                    value:"23.1",
                    testMethod:"ASTM D92"
                }
            ],
              safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های آلکیدی رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
              Packaging:"200 کیلوگرم (خالص) در بشکه‌های فولادی.",
              Storage:"محصول را در محل خنک و در دمای کمتر از ℃25 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید.",
              Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
             },
             en:{
              product:"Alkyd Resins",
              name:"BAS305",
              pdf:"BAS-305-Eng.pdf",
              Description:"BAS 305 X-50 is an air drying short oil alkyd resin based on soybean oil fatty acid which offers very good hardness, gloss and gloss retention and excellent surface and deep drying and pigment wetting and dispersing.",
              Characteristics:[
                 "Excellent surface and deep drying",
                 "Excellent pigment wetting and dispersing",
                 "Very good hardness",
                 "Very good gloss and gloss retention",
                 "Very fast drying",
                 "Good solvent tolerance",
                 "Good adhesion and flexibility"
              ],
              Uses:[
               "Industrial paints and coatings",
               "Hammer finish paints",
               "Fast dry paints"
              ],
              Table:[
                {
                    propertis:"oil percentage (approximate)",
                    unit:"% wt",
                    value:"32",
                    testMethod:"Computing"
                },
                {
                    propertis:"color",
                    unit:"Gardner",
                    value:"3>",
                    testMethod:"ASTM D1544"
                },
                {
                    propertis:"Viscosity (25℃)",
                    unit:"St",
                    value:"40-90",
                    testMethod:"ASTM D1545"
                },
                {
                    propertis:"acid number",
                    unit:"mg KOH/g",
                    value:"10>",
                    testMethod:"ASTM D1639"
                },
                {
                    propertis:"percent solids",
                    unit:"% wt",
                    value:"50±1",
                    testMethod:"ASTM D1259"
                },
                {
                    propertis:"Density (23℃)",
                    unit:"g/cm³",
                    value:"1.0065",
                    testMethod:"ASTM D1475"
                },
                {
                    propertis:"Flashing point (open cup)",
                    unit:"℃",
                    value:"23.1",
                    testMethod:"ASTM D92"
                }
                
            ],
              safety:"The usual protective measures employed during the handling of Alkyd Resins should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
              Packaging:"200 kg (net) in steel drums.",
              Storage:"Store in a cool place below 25 °C and away from moisture and direct sunlight.",
              Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
             },
             ru:{
              product:"Тощая алкидная смола",
              name:"BAS305",
              pdf:"BAS-305-RU.pdf",
              Description:"BAS 305 X-50 – тощая алкидная смола воздушной сушки на основе жирных кислот соевого масла, обладающая очень хорошей твердостью, блеском и устойчивостью блеска, отличным поверхностным и глубоким высыханием, увлажнением пигмента и распылением.",
              Characteristics:[
                "Отличное поверхностное и глубокое высыхание",
                "Отличное увлажнение пигмента и распыление",
                "Очень хорошая твердость",
                "Очень хороший блеск и устойчивость блеска",
                "Очень быстро сохнет",
                "Хорошая устройчивость к растворителям",
                "Хорошая адгезия и пластичность"
              ],
              Uses:[
                  "Промышленные краски и покрытия",
                  "Покрытия с молотковым эффектом",
                  "Быстросохнущие краски"
              ],
              Table:[
                {
                    propertis:"Содержание масла (прибл.)",
                    unit:"% веса",
                    value:"32",
                    testMethod:"Расчеты"
                },
                {
                    propertis:"Цвет",
                    unit:"Гарднер",
                    value:"Max 3",
                    testMethod:"ASTM D1544"
                },
                {
                    propertis:"Вязкость (при 25°C)",
                    unit:"Ст",
                    value:"40-90",
                    testMethod:"ASTM D1545"
                },
                {
                    propertis:"Кислотное число",
                    unit:"мг KOH/г",
                    value:"10>",
                    testMethod:"ASTM D1639"
                },
                {
                    propertis:"Сухой остаток",
                    unit:"% веса",
                    value:"50±1",
                    testMethod:"ASTM D1259"
                },
                {
                    propertis:"Плотность (при 23°C)",
                    unit:"г/см³",
                    value:"1.0065",
                    testMethod:"ASTM D1475"
                },
                {
                    propertis:"Температура вспышки (в открытом тигле)",
                    unit:"℃",
                    value:"23.1",
                    testMethod:"ASTM D92"
                }
            ],
              safety:"Следует соблюдать стандартные меры безопасности транспортировки алкидных смол. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
              Packaging:"200 кг (нетто) в металлических бочках.",
              Storage:"Хранить в прохладном месте при температуре ниже 25 °C и вдали от влаги и прямых солнечных лучей.",
              Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
             }
      
          },
          BAS304 :{
              fa:{
               product:"رزین آلکید کوتاه روغن",
               name:"BAS304",
               pdf:"BAS-304-Farsi.pdf",
               Description:"BAS 304 X-60 رزین آلکید کوتاه روغن بر پایه اسید چرب روغن نارگیل با سختی، براقیت و حفظ براقیت، چسبندگی و انعطاف‌­پذیری بسیار خوب است.",
               Characteristics:[
                 "تر­کنندگی و قابلیت پراکنش رنگدانه عالی",
                 "سختی بسیار خوب",
                 "براقیت و حفظ براقیت بسیار خوب",
                 "چسبندگی و انعطاف­‌پذیری بسیار خوب",
                 "حلال­‌خوری خوب"
               ],
               Uses:[
                  "رنگ‌ها و پوشش­‌های صنعتی",
                  "جلا، لعاب و رنگ کوره­ای",
                  "رنگ فوری بر پایه نیتروسلولز",
                  "پوشش چوب",
                  "جلا، ورنی و شفاف­‌پوشه­‌های اصلاح شده با آمینو رزین"
               ],
               Table:[
                {
                    propertis:"درصد روغن (تقریبی)",
                    unit:"% wt",
                    value:"23",
                    testMethod:"محاسبه"
                },
                {
                    propertis:"رنگ",
                    unit:"Gardner",
                    value:"1>",
                    testMethod:"ASTM D1544"
                },
                {
                    propertis:"گرانروی (℃25)",
                    unit:"St",
                    value:"80-90",
                    testMethod:"ASTM D1545"
                },
                {
                    propertis:"عدد اسیدی",
                    unit:"mg KOH/g",
                    value:"10>",
                    testMethod:"ASTM D1639"
                },
                {
                    propertis:"درصد جامد",
                    unit:"% wt",
                    value:"60±1",
                    testMethod:"ASTM D1259"
                },
                {
                    propertis:"چگالی  (℃23)",
                    unit:"g/cm³",
                    value:"1.0591",
                    testMethod:"ASTM D1475"
                },
                {
                    propertis:"نقطه اشتعال (جام روباز)",
                    unit:"℃",
                    value:"24",
                    testMethod:"ASTM D92"
                }
            ],
               safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های آلکیدی رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
               Packaging:"200 کیلوگرم (خالص) در بشکه‌های فولادی.",
               Storage:"محصول را در محل خنک و در دمای کمتر از ℃25 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید.",
               Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
              },
              en:{
               product:"Alkyd Resins",
               name:"BAS304",
               pdf:"BAS-304-Eng.pdf",
               Description:"BAS 304 X-60 is a short oil alkyd resin based on coconut oil fatty acid which offers very good hardness, gloss and gloss retention, adhesion and flexibility.",
               Characteristics:[
                  "Excellent pigment wetting and dispersing",
                  "Very good hardness",
                  "Very good gloss and gloss retention",
                  "Very good adhesion and flexibility",
                  "Good solvent tolerance"
               ],
               Uses:[
                    "Industrial paints and coatings",
                    "Lacquers, stoving enamels and paints",
                    "Nitro cellulose enamels and paints",
                    "Wood coatings",
                    "Amino modified lacquers, varnishes and clear coats"
               ],
               Table:[
                {
                    propertis:"oil percentage (approximate)",
                    unit:"% wt",
                    value:"23",
                    testMethod:"Computing"
                },
                {
                    propertis:"color",
                    unit:"Gardner",
                    value:"1>",
                    testMethod:"ASTM D1544"
                },
                {
                    propertis:"Viscosity (25℃)",
                    unit:"St",
                    value:"80-90",
                    testMethod:"ASTM D1545"
                },
                {
                    propertis:"acid number",
                    unit:"mg KOH/g",
                    value:"10>",
                    testMethod:"ASTM D1639"
                },
                {
                    propertis:"percent solids",
                    unit:"% wt",
                    value:"60±1",
                    testMethod:"ASTM D1259"
                },
                {
                    propertis:"Density (23℃)",
                    unit:"g/cm³",
                    value:"1.0591",
                    testMethod:"ASTM D1475"
                },
                {
                    propertis:"Flashing point (open cup)",
                    unit:"℃",
                    value:"24",
                    testMethod:"ASTM D92"
                }
                
            ],
               safety:"The usual protective measures employed during the handling of Alkyd Resins should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
               Packaging:"200 kg (net) in steel drums.",
               Storage:"Store in a cool place below 25 °C and away from moisture and direct sunlight.",
               Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
              },
              ru:{
               product:"Тощая алкидная смола",
               name:"BAS304",
               pdf:"BAS-304-RU.pdf",
               Description:"BAS 304 X-60 – тощая алкидная смола на основе жирных кислот кокосового масла, обладающая очень хорошей твердостью, блеском и устойчивостью блеска, адгезией и пластичностью.",
               Characteristics:[
                 "Отличное увлажнение пигмента и распыление",
                 "Очень хорошая твердость",
                 "Очень хороший блеск и устойчивость блеска",
                 "Очень хорошая адгезия и пластичность",
                 "Хорошая устойчивость к растворителям"
               ],
               Uses:[
                   "Промышленные краски и покрытия",
                   "Лаки, горячие эмали и краски",
                   "Нитроцеллюлозные эмали и краски",
                   "Покрытия для дерева",
                   "Аминомодифицированные лаки, политура и непигментированные покрытия"
               ],
               Table:[
                {
                    propertis:"Содержание масла (прибл.)",
                    unit:"% веса",
                    value:"23",
                    testMethod:"Расчеты"
                },
                {
                    propertis:"Цвет",
                    unit:"Гарднер",
                    value:"Max 1",
                    testMethod:"ASTM D1544"
                },
                {
                    propertis:"Вязкость (при 25°C)",
                    unit:"Ст",
                    value:"80-90",
                    testMethod:"ASTM D1545"
                },
                {
                    propertis:"Кислотное число",
                    unit:"мг KOH/г",
                    value:"10>",
                    testMethod:"ASTM D1639"
                },
                {
                    propertis:"Сухой остаток",
                    unit:"% веса",
                    value:"60±1",
                    testMethod:"ASTM D1259"
                },
                {
                    propertis:"Плотность (при 23°C)",
                    unit:"г/см³",
                    value:"1.0591",
                    testMethod:"ASTM D1475"
                },
                {
                    propertis:"Температура вспышки (в открытом тигле)",
                    unit:"℃",
                    value:"24",
                    testMethod:"ASTM D92"
                }
            ],
               safety:"Следует соблюдать стандартные меры безопасности транспортировки алкидных смол. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
               Packaging:"200 кг (нетто) в металлических бочках.",
               Storage:"Хранить в прохладном месте при температуре ниже 25 °C и вдали от влаги и прямых солнечных лучей.",
               Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
              }
       
           },
           BAS302 :{
               fa:{
                product:"رزین آلکید کوتاه روغن",
                name:"BAS302",
                pdf:"BAS-302-Farsi.pdf",
                Description:"BAS 302 X-60 رزین آلکید کوتاه روغن بر پایه اسید چرب روغن نارگیل با سختی، براقیت و حفظ براقیت و چسبندگی بسیار خوب است.",
                Characteristics:[
                  "تر­کنندگی و قابلیت پراکنش رنگدانه عالی",
                  "سختی بسیار خوب",
                  "براقیت و حفظ براقیت بسیار خوب",
                  "­چسبندگی و انعطاف‌­پذیری بسیار خوب",
                  "حلال­‌خوری خوب"
                ],
                Uses:[
                   "رنگ‌ها و پوشش­‌های صنعتی",
                   "جلا، لعاب و رنگ کوره­ای",
                   "رنگ فوری بر پایه نیتروسلولز",
                   "پوشش چوب",
                   "جلا، ورنی و شفاف­‌پوشه­‌های اصلاح شده با آمینو رزین"
                ],
                Table:[
                    {
                        propertis:"درصد روغن (تقریبی)",
                        unit:"% wt",
                        value:"31",
                        testMethod:"محاسبه"
                    },
                    {
                        propertis:"رنگ",
                        unit:"Gardner",
                        value:"1>",
                        testMethod:"ASTM D1544"
                    },
                    {
                        propertis:"گرانروی (℃25)",
                        unit:"St",
                        value:"50-80",
                        testMethod:"ASTM D1545"
                    },
                    {
                        propertis:"عدد اسیدی",
                        unit:"mg KOH/g",
                        value:"10>",
                        testMethod:"ASTM D1639"
                    },
                    {
                        propertis:"درصد جامد",
                        unit:"% wt",
                        value:"60±1",
                        testMethod:"ASTM D1259"
                    },
                    {
                        propertis:"چگالی  (℃23)",
                        unit:"g/cm³",
                        value:"1.0407",
                        testMethod:"ASTM D1475"
                    },
                    {
                        propertis:"نقطه اشتعال (جام روباز)",
                        unit:"℃",
                        value:"24",
                        testMethod:"ASTM D92"
                    }
                ],
                safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های آلکیدی رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                Packaging:"200 کیلوگرم (خالص) در بشکه‌های فولادی.",
                Storage:"محصول را در محل خنک و در دمای کمتر از ℃25 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید.",
                Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
               },
               en:{
                product:"Alkyd Resins",
                name:"BAS302",
                pdf:"BAS-302-Eng.pdf",
                Description:"BAS 302 X-60 is a short oil alkyd resin based on coconut oil fatty acid which offers very good hardness, gloss and gloss retention and adhesion.",
                Characteristics:[
                   "Excellent pigment wetting and dispersing",
                   "Very good hardness",
                   "Very good gloss and gloss retention",
                   "Very good adhesion and flexibility",
                   "Good solvent tolerance"
                ],
                Uses:[
                     "Industrial paints and coatings",
                     "Lacquers, stoving enamels and paints",
                     "Nitro cellulose enamels and paints",
                     "Wood coatings",
                     "Amino modified lacquers, varnishes and clear coats"

                ],
                Table:[
                    {
                        propertis:"oil percentage (approximate)",
                        unit:"% wt",
                        value:"31",
                        testMethod:"Computing"
                    },
                    {
                        propertis:"color",
                        unit:"Gardner",
                        value:"1>",
                        testMethod:"ASTM D1544"
                    },
                    {
                        propertis:"Viscosity (25℃)",
                        unit:"St",
                        value:"50-80",
                        testMethod:"ASTM D1545"
                    },
                    {
                        propertis:"acid number",
                        unit:"mg KOH/g",
                        value:"10>",
                        testMethod:"ASTM D1639"
                    },
                    {
                        propertis:"percent solids",
                        unit:"% wt",
                        value:"60±1",
                        testMethod:"ASTM D1259"
                    },
                    {
                        propertis:"Density (23℃)",
                        unit:"g/cm³",
                        value:"1.0407",
                        testMethod:"ASTM D1475"
                    },
                    {
                        propertis:"Flashing point (open cup)",
                        unit:"℃",
                        value:"24",
                        testMethod:"ASTM D92"
                    }
                    
                ],
                safety:"The usual protective measures employed during the handling of Alkyd Resins should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                Packaging:"200 kg (net) in steel drums.",
                Storage:"Store in a cool place below 25 °C and away from moisture and direct sunlight.",
                Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
               },
               ru:{
                product:"Тощая алкидная смола",
                name:"BAS302",
                pdf:"BAS-302-RU.pdf",
                Description:"BAS 302 X-60 – тощая алкидная смола на основе жирных кислот кокосового масла, обладающая очень хорошей твердостью, блеском и устойчивостью блеска и адгезией.",
                Characteristics:[
                  "Отличное увлажнение пигмента и распыление",
                  "Очень хорошая твердость",
                  "Очень хороший блеск и устойчивость блеска",
                  "Очень хорошая адгезия и пластичность",
                  "Хорошая устойчивость к растворителям"
                ],
                Uses:[
                    "Промышленные краски и покрытия",
                    "Лаки, горячие эмали и краски",
                    "Нитроцеллюлозные эмали и краски",
                    "Покрытия для дерева",
                    "Аминомодифицированные лаки, политура и непигментированные покрытия"
                ],
                Table:[
                    {
                        propertis:"Содержание масла (прибл.)",
                        unit:"% веса",
                        value:"31",
                        testMethod:"Расчеты"
                    },
                    {
                        propertis:"Цвет",
                        unit:"Гарднер",
                        value:"Max 1",
                        testMethod:"ASTM D1544"
                    },
                    {
                        propertis:"Вязкость (при 25°C)",
                        unit:"Ст",
                        value:"50-80",
                        testMethod:"ASTM D1545"
                    },
                    {
                        propertis:"Кислотное число",
                        unit:"мг KOH/г",
                        value:"10>",
                        testMethod:"ASTM D1639"
                    },
                    {
                        propertis:"Сухой остаток",
                        unit:"% веса",
                        value:"60±1",
                        testMethod:"ASTM D1259"
                    },
                    {
                        propertis:"Плотность (при 23°C)",
                        unit:"г/см³",
                        value:"1.0407",
                        testMethod:"ASTM D1475"
                    },
                    {
                        propertis:"Температура вспышки (в открытом тигле)",
                        unit:"℃",
                        value:"24",
                        testMethod:"ASTM D92"
                    }
                ],
                safety:"Следует соблюдать стандартные меры безопасности транспортировки алкидных смол. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                Packaging:"200 кг (нетто) в металлических бочках.",
                Storage:"Хранить в прохладном месте при температуре ниже 25 °C и вдали от влаги и прямых солнечных лучей.",
                Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
               }
        
            },
            BAM203 :{
                fa:{
                 product:"رزین آلکید متوسط روغن",
                 name:"BAM203",
                 pdf:"BAM203-Fa.pdf",
                 Description:"BAM 203 X-60 رزین آلکید متوسط روغن بر پایه اسید چرب روغن سویا با سختی، خشک­‌شوندگی سطحی و عمقی و براقیت و حفظ براقیت عالی است.",
                 Characteristics:[
                   "سختی عالی",
                   "خشک­‌شوندگی سطحی و عمقی عالی",
                   "براقیت و حفظ براقیت عالی",
                   "چسبندگی و انعطاف­پذیری عالی",
                   "­تر­کنندگی و قابلیت پراکنش رنگدانه عالی",
                   "حلال­‌خوری خوب"
                 ],
                 Uses:[
                   "رنگ‌ها و پوشش­‌های صنعتی",
                   "رنگ­­‌های تعمیراتی خودرو",
                   "رنگ‌های سریع خشک",
                   "افشانه (اسپری) رنگ"
                 ],
                 Table:[
                    {
                        propertis:"درصد روغن (تقریبی)",
                        unit:"% wt",
                        value:"46",
                        testMethod:"محاسبه"
                    },
                    {
                        propertis:"رنگ",
                        unit:"Gardner",
                        value:"2>",
                        testMethod:"ASTM D1544"
                    },
                    {
                        propertis:"گرانروی (℃25)",
                        unit:"St",
                        value:"50-100",
                        testMethod:"ASTM D1545"
                    },
                    {
                        propertis:"عدد اسیدی",
                        unit:"mg KOH/g",
                        value:"10>",
                        testMethod:"ASTM D1639"
                    },
                    {
                        propertis:"درصد جامد",
                        unit:"% wt",
                        value:"60±1",
                        testMethod:"ASTM D1259"
                    },
                    {
                        propertis:"چگالی  (℃23)",
                        unit:"g/cm³",
                        value:"1.0078",
                        testMethod:"ASTM D1475"
                    },
                    {
                        propertis:"نقطه اشتعال (جام روباز)",
                        unit:"℃",
                        value:"24",
                        testMethod:"ASTM D92"
                    }
                ],
                 safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های آلکیدی رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                 Packaging:"190 کیلوگرم (خالص) در بشکه‌های فولادی.",
                 Storage:"محصول را در محل خنک و در دمای کمتر از ℃25 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید.",
                 Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
                },
                en:{
                 product:"Medium oil Alkyd Resin",
                 name:"BAM203",
                 pdf:"BAM203-En.pdf",
                 Description:"BAM 203 X-60 is a medium oil alkyd resin based on soybean oil fatty acid which offers excellent hardness, surface and deep drying and gloss and gloss retention.",
                 Characteristics:[
                    "Excellent hardness",
                    "Excellent surface and deep drying",
                    "Excellent gloss and gloss retention",
                    "Excellent adhesion and flexibility",
                    "Excellent pigment wetting and dispersing",
                    "Good solvent tolerance"
                 ],
                 Uses:[
                     "Industrial paints and coatings",
                     "Automotive repair paints",
                     "Fast dry paints",
                     "Aerosol cans and paint sprays"
 
                 ],
                 Table:[
                    {
                        propertis:"oil percentage (approximate)",
                        unit:"% wt",
                        value:"46",
                        testMethod:"Computing"
                    },
                    {
                        propertis:"color",
                        unit:"Gardner",
                        value:"2>",
                        testMethod:"ASTM D1544"
                    },
                    {
                        propertis:"Viscosity (25℃)",
                        unit:"St",
                        value:"50-100",
                        testMethod:"ASTM D1545"
                    },
                    {
                        propertis:"acid number",
                        unit:"mg KOH/g",
                        value:"10>",
                        testMethod:"ASTM D1639"
                    },
                    {
                        propertis:"percent solids",
                        unit:"% wt",
                        value:"60±1",
                        testMethod:"ASTM D1259"
                    },
                    {
                        propertis:"Density (23℃)",
                        unit:"g/cm³",
                        value:"1.0078",
                        testMethod:"ASTM D1475"
                    },
                    {
                        propertis:"Flashing point (open cup)",
                        unit:"℃",
                        value:"24",
                        testMethod:"ASTM D92"
                    }
                    
                ],
                 safety:"The usual protective measures employed during the handling of Alkyd Resins should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                 Packaging:"190 kg (net) in steel drums.",
                 Storage:"Store in a cool place below 25 °C and away from moisture and direct sunlight.",
                 Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
                },
                ru:{
                 product:"Aлкидная смола средней жирности",
                 name:"BAM203",
                 pdf:"BAM203-RU.pdf",
                 Description:"BAM 203 X-60 –алкидная смола средней жирности на основе жирных кислот соевого масла, обладающая отличной твердостью, поверхностным и глубоким высыханием, блеском и устойчивостью блеска.",
                 Characteristics:[
                   "Отличная твердость",
                   "Отличное поверхностное и глубокое высыхание",
                   "Отличный блеск и сохранение блеска",
                   "Отличная адгезия и пластичность",
                   "Отличное увлажнение пигмента и распыление",
                   "Хорошая устойчивость к растворителям"
                 ],
                 Uses:[
                     "Строительные краски и покрытия",
                     "Краски для авторемонта",
                     "Быстросохнущие краски",
                     "Аэрозольные баллончики и распылители краски"
                 ],
                 Table:[
                    {
                        propertis:"Содержание масла (прибл.)",
                        unit:"% веса",
                        value:"46",
                        testMethod:"Расчеты"
                    },
                    {
                        propertis:"Цвет",
                        unit:"Гарднер",
                        value:"Max 2",
                        testMethod:"ASTM D1544"
                    },
                    {
                        propertis:"Вязкость (при 25°C)",
                        unit:"Ст",
                        value:"50-100",
                        testMethod:"ASTM D1545"
                    },
                    {
                        propertis:"Кислотное число",
                        unit:"мг KOH/г",
                        value:"10>",
                        testMethod:"ASTM D1639"
                    },
                    {
                        propertis:"Сухой остаток",
                        unit:"% веса",
                        value:"60±1",
                        testMethod:"ASTM D1259"
                    },
                    {
                        propertis:"Плотность (при 23°C)",
                        unit:"г/см³",
                        value:"1.0078",
                        testMethod:"ASTM D1475"
                    },
                    {
                        propertis:"Температура вспышки (в открытом тигле)",
                        unit:"℃",
                        value:"24",
                        testMethod:"ASTM D92"
                    }
                ],
                 safety:"Следует соблюдать стандартные меры безопасности транспортировки алкидных смол. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                 Packaging:"190 кг (нетто) в металлических бочках.",
                 Storage:"Хранить в прохладном месте при температуре ниже 25 °C и вдали от влаги и прямых солнечных лучей.",
                 Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
                }
         
             },
             BAM207 :{
                 fa:{
                  product:"رزین آلکید متوسط روغن",
                  name:"BAM207",
                  pdf:"BAM203-Fa.pdf",
                  Description:"BAM 207 WS-55 رزین آلکید متوسط روغن بر پایه اسید چرب روغن سویا با سختی، خشک­‌شوندگی سطحی و عمقی و براقیت و حفظ براقیت عالی است.",
                  Characteristics:[
                    "سختی عالی",
                    "خشک­‌شوندگی سطحی و عمقی عالی",
                    "براقیت و حفظ براقیت عالی",
                    "چسبندگی و انعطاف­پذیری عالی",
                    "­تر­کنندگی و قابلیت پراکنش رنگدانه عالی",
                    "حلال­‌خوری عالی"
                  ],
                  Uses:[
                    "رنگ‌ها و پوشش­‌های صنعتی",
                    "رنگ­­ سوله",
                    "ضد زنگ و آستر ضدخوردگی"
                  ],
                  Table:[
                    {
                        propertis:"درصد روغن (تقریبی)",
                        unit:"% wt",
                        value:"46",
                        testMethod:"محاسبه"
                    },
                    {
                        propertis:"رنگ",
                        unit:"Gardner",
                        value:"3>",
                        testMethod:"ASTM D1544"
                    },
                    {
                        propertis:"گرانروی (℃25)",
                        unit:"St",
                        value:"250-600",
                        testMethod:"ASTM D1545"
                    },
                    {
                        propertis:"عدد اسیدی",
                        unit:"mg KOH/g",
                        value:"10>",
                        testMethod:"ASTM D1639"
                    },
                    {
                        propertis:"درصد جامد",
                        unit:"% wt",
                        value:"55±1",
                        testMethod:"ASTM D1259"
                    },
                    {
                        propertis:"چگالی  (℃23)",
                        unit:"g/cm³",
                        value:"0.9358",
                        testMethod:"ASTM D1475"
                    },
                    {
                        propertis:"نقطه اشتعال (جام روباز)",
                        unit:"℃",
                        value:"24",
                        testMethod:"ASTM D92"
                    }
                ],
                  safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های آلکیدی رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                  Packaging:"190 کیلوگرم (خالص) در بشکه‌های فولادی.",
                  Storage:"محصول را در محل خنک و در دمای کمتر از ℃25 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید.",
                  Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
                 },
                 en:{
                  product:"Medium oil Alkyd Resin",
                  name:"BAM207",
                  pdf:"BAM203-En.pdf",
                  Description:"BAM 207 WS-55 is a Medium oil alkyd resin based on soybean oil fatty acid which offers excellent hardness, surface and through drying and gloss and gloss retention.",
                  Characteristics:[
                    "Excellent hardness",
                    "Excellent surface and through drying",
                    "Excellent gloss and gloss retention",
                    "Excellent solvent tolerance",
                    "Very good adhesion and flexibility",
                    "Very good pigment wetting and dispersing"
                  ],
                  Uses:[
                     "Industrial paints and coatings",
                     "Metallic structures paints",
                     "Anti corrosion primers"
  
                  ],
                  Table:[
                    {
                        propertis:"oil percentage (approximate)",
                        unit:"% wt",
                        value:"46",
                        testMethod:"Computing"
                    },
                    {
                        propertis:"color",
                        unit:"Gardner",
                        value:"3>",
                        testMethod:"ASTM D1544"
                    },
                    {
                        propertis:"Viscosity (25℃)",
                        unit:"St",
                        value:"250-600",
                        testMethod:"ASTM D1545"
                    },
                    {
                        propertis:"acid number",
                        unit:"mg KOH/g",
                        value:"10>",
                        testMethod:"ASTM D1639"
                    },
                    {
                        propertis:"percent solids",
                        unit:"% wt",
                        value:"55±1",
                        testMethod:"ASTM D1259"
                    },
                    {
                        propertis:"Density (23℃)",
                        unit:"g/cm³",
                        value:"0.9358",
                        testMethod:"ASTM D1475"
                    },
                    {
                        propertis:"Flashing point (open cup)",
                        unit:"℃",
                        value:"24",
                        testMethod:"ASTM D92"
                    }
                    
                ],
                  safety:"The usual protective measures employed during the handling of Alkyd Resins should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                  Packaging:"190 kg (net) in steel drums.",
                  Storage:"Store in a cool place below 25 °C and away from moisture and direct sunlight.",
                  Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
                 },
                 ru:{
                  product:"Aлкидная смола средней жирности",
                  name:"BAM207",
                  pdf:"BAM203-RU.pdf",
                  Description:"BAM 207 WS-55 алкидная смола средней жирности на основе жирных кислот соевого масла, обладающая отличной твердостью, очень хорошим поверхностным и глубоким высыханием, и блеском и устойчивостью блеска.",
                  Characteristics:[
                   "Отличная твердость",
                   "Отличное поверхностное и глубокое высыхание",
                   "Отличный блеск и устойчивость блеска",
                   "Отличная устойчивость к растворителям",
                   "Очень хорошая адгезия и пластичность",
                   "Очень хорошее увлажнение пигмента и распыление"
                  ],
                  Uses:[
                      "Промышленные краски и покрытия",
                      "Краски для металлоконструкций",
                      "Антикоррозийные грунтовки"
                  ],
                  Table:[
                    {
                        propertis:"Содержание масла (прибл.)",
                        unit:"% веса",
                        value:"46",
                        testMethod:"Расчеты"
                    },
                    {
                        propertis:"Цвет",
                        unit:"Гарднер",
                        value:"Max 3",
                        testMethod:"ASTM D1544"
                    },
                    {
                        propertis:"Вязкость (при 25°C)",
                        unit:"Ст",
                        value:"250-600",
                        testMethod:"ASTM D1545"
                    },
                    {
                        propertis:"Кислотное число",
                        unit:"мг KOH/г",
                        value:"10>",
                        testMethod:"ASTM D1639"
                    },
                    {
                        propertis:"Сухой остаток",
                        unit:"% веса",
                        value:"55±1",
                        testMethod:"ASTM D1259"
                    },
                    {
                        propertis:"Плотность (при 23°C)",
                        unit:"г/см³",
                        value:"0.9358",
                        testMethod:"ASTM D1475"
                    },
                    {
                        propertis:"Температура вспышки (в открытом тигле)",
                        unit:"℃",
                        value:"24",
                        testMethod:"ASTM D92"
                    }
                ],
                  safety:"Следует соблюдать стандартные меры безопасности транспортировки алкидных смол. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                  Packaging:"190 кг (нетто) в металлических бочках.",
                  Storage:"Хранить в прохладном месте при температуре ниже 25 °C и вдали от влаги и прямых солнечных лучей.",
                  Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
                 }
          
              },
              BAM208 :{
                  fa:{
                   product:"رزین آلکید متوسط روغن",
                   name:"BAM208",
                   pdf:"BAM208-Fa.pdf",
                   Description:"BAM 208 WSX-55 رزین آلکید متوسط روغن بر پایه اسید چرب روغن سویا با سختی، خشک‌­شوندگی سطحی و عمقی و چسبندگی بسیار خوب و براقیت و حفظ براقیت عالی است.",
                   Characteristics:[
                     "براقیت و حفظ براقیت عالی",
                     "سختی بسیار خوب",
                     "خشک­‌شوندگی سطحی وعمقی بسیار خوب",
                     "چسبندگی و انعطاف­‌پذیری بسیار خوب",
                     "حلال­‌خوری بسیار خوب",
                     "ترکنندگی و قابلیت پراکنش رنگدانه عالی"
                   ],
                   Uses:[
                     "رنگ‌ها و پوشش­‌های صنعتی",
                     "رنگ­‌های تعمیراتی خودرو",
                     "افشانه (اسپری) رنگ"
                   ],
                   Table:[
                    {
                        propertis:"درصد روغن (تقریبی)",
                        unit:"% wt",
                        value:"48",
                        testMethod:"محاسبه"
                    },
                    {
                        propertis:"رنگ",
                        unit:"Gardner",
                        value:"1.5>",
                        testMethod:"ASTM D1544"
                    },
                    {
                        propertis:"گرانروی (℃25)",
                        unit:"St",
                        value:"80-180",
                        testMethod:"ASTM D1545"
                    },
                    {
                        propertis:"عدد اسیدی",
                        unit:"mg KOH/g",
                        value:"10>",
                        testMethod:"ASTM D1639"
                    },
                    {
                        propertis:"درصد جامد",
                        unit:"% wt",
                        value:"55±1",
                        testMethod:"ASTM D1259"
                    },
                    {
                        propertis:"چگالی  (℃23)",
                        unit:"g/cm³",
                        value:"0.9433",
                        testMethod:"ASTM D1475"
                    },
                    {
                        propertis:"نقطه اشتعال (جام روباز)",
                        unit:"℃",
                        value:"28",
                        testMethod:"ASTM D92"
                    }
                ],
                   safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های آلکیدی رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                   Packaging:"190 کیلوگرم (خالص) در بشکه‌های فولادی.",
                   Storage:"محصول را در محل خنک و در دمای کمتر از ℃25 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید.",
                   Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
                  },
                  en:{
                   product:"Medium oil Alkyd Resin",
                   name:"BAM208",
                   pdf:"BAM208-En.pdf",
                   Description:"BAM 208 WSX-55 is a medium oil alkyd resin based on soybean oil fatty acid which offers very good hardness, surface and deep drying and adhesion and excellent gloss and gloss retention.",
                   Characteristics:[
                     "Excellent gloss and gloss retention",
                     "Excellent pigment wetting and dispersing",
                     "Very good hardness",
                     "Very good surface and deep drying",
                     "Very good adhesion and flexibility",
                     "Very good solvent tolerance"
                   ],
                   Uses:[
                      "Industrial paints and coatings",
                      "Automotive repair paints",
                      "Aerosol cans and paint sprays"
   
                   ],
                   Table:[
                    {
                        propertis:"oil percentage (approximate)",
                        unit:"% wt",
                        value:"48",
                        testMethod:"Computing"
                    },
                    {
                        propertis:"color",
                        unit:"Gardner",
                        value:"1.5>",
                        testMethod:"ASTM D1544"
                    },
                    {
                        propertis:"Viscosity (25℃)",
                        unit:"St",
                        value:"80-180",
                        testMethod:"ASTM D1545"
                    },
                    {
                        propertis:"acid number",
                        unit:"mg KOH/g",
                        value:"10>",
                        testMethod:"ASTM D1639"
                    },
                    {
                        propertis:"percent solids",
                        unit:"% wt",
                        value:"55±1",
                        testMethod:"ASTM D1259"
                    },
                    {
                        propertis:"Density (23℃)",
                        unit:"g/cm³",
                        value:"0.9433",
                        testMethod:"ASTM D1475"
                    },
                    {
                        propertis:"Flashing point (open cup)",
                        unit:"℃",
                        value:"28",
                        testMethod:"ASTM D92"
                    }
                    
                ],
                   safety:"The usual protective measures employed during the handling of Alkyd Resins should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                   Packaging:"190 kg (net) in steel drums.",
                   Storage:"Store in a cool place below 25 °C and away from moisture and direct sunlight.",
                   Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
                  },
                  ru:{
                   product:"Aлкидная смола средней жирности",
                   name:"BAM208",
                   pdf:"BAM208-RU.pdf",
                   Description:"BAM 208 WSX-55 –алкидная смола средней жирности на основе жирных кислот соевого масла, обладающая очень хорошей твердостью, поверхностным и глубоким высыханием, адгезией и отличным блеском и устойчивостью блеска.",
                   Characteristics:[
                    "Отличный блеск и устойчивость блеска",
                    "Отличное увлажнение пигмента и распыление",
                    "Очень хорошая твердость",
                    "Очень хорошее поверхностное и глубокое высыхание",
                    "Очень хорошая адгезия и пластичность",
                    "Очень хорошая устойчивость к растворителям"
                   ],
                   Uses:[
                       "Промышленные краски и покрытия",
                       "Краски для авторемонта",
                       "Аэрозольные баллончики и распыляемые краски"
                   ],
                   Table:[
                    {
                        propertis:"Содержание масла (прибл.)",
                        unit:"% веса",
                        value:"48",
                        testMethod:"Расчеты"
                    },
                    {
                        propertis:"Цвет",
                        unit:"Гарднер",
                        value:"Max 1.5",
                        testMethod:"ASTM D1544"
                    },
                    {
                        propertis:"Вязкость (при 25°C)",
                        unit:"Ст",
                        value:"80-180",
                        testMethod:"ASTM D1545"
                    },
                    {
                        propertis:"Кислотное число",
                        unit:"мг KOH/г",
                        value:"10>",
                        testMethod:"ASTM D1639"
                    },
                    {
                        propertis:"Сухой остаток",
                        unit:"% веса",
                        value:"55±1",
                        testMethod:"ASTM D1259"
                    },
                    {
                        propertis:"Плотность (при 23°C)",
                        unit:"г/см³",
                        value:"0.9433",
                        testMethod:"ASTM D1475"
                    },
                    {
                        propertis:"Температура вспышки (в открытом тигле)",
                        unit:"℃",
                        value:"28",
                        testMethod:"ASTM D92"
                    }
                ],
                   safety:"Следует соблюдать стандартные меры безопасности транспортировки алкидных смол. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                   Packaging:"190 кг (нетто) в металлических бочках.",
                   Storage:"Хранить в прохладном месте при температуре ниже 25 °C и вдали от влаги и прямых солнечных лучей.",
                   Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
                  }
           
               },
               BAM212 :{
                   fa:{
                    product:"رزین آلکید متوسط روغن",
                    name:"BAM212",
                    pdf:"BAM212-Fa.pdf",
                    Description:"BAM 212 X-60 رزین آلکید متوسط روغن بر پایه اسید چرب روغن سویا با سختی، خشک­‌شوندگی سطحی و عمقی و براقیت و حفظ براقیت عالی است.",
                    Characteristics:[
                      "سختی عالی",
                      "خشک­‌شوندگی سطحی وعمقی عالی",
                      "براقیت و حفظ براقیت عالی",
                      "­چسبندگی و انعطاف­‌پذیری عالی",
                      "تر­کنندگی و قابلیت پراکنش رنگدانه عالی",
                      "حلال­‌خوری خوب"
                    ],
                    Uses:[
                      "رنگ‌ها و پوشش­‌های صنعتی",
                      "رنگ­‌های تعمیراتی خودرو"
                    ],

                    Table:[
                        {
                            propertis:"درصد روغن (تقریبی)",
                            unit:"% wt",
                            value:"48",
                            testMethod:"محاسبه"
                        },
                        {
                            propertis:"رنگ",
                            unit:"Gardner",
                            value:"1>",
                            testMethod:"ASTM D1544"
                        },
                        {
                            propertis:"گرانروی (℃25)",
                            unit:"St",
                            value:"60-90",
                            testMethod:"ASTM D1545"
                        },
                        {
                            propertis:"عدد اسیدی",
                            unit:"mg KOH/g",
                            value:"10>",
                            testMethod:"ASTM D1639"
                        },
                        {
                            propertis:"درصد جامد",
                            unit:"% wt",
                            value:"60±1",
                            testMethod:"ASTM D1259"
                        },
                        {
                            propertis:"چگالی  (℃23)",
                            unit:"g/cm³",
                            value:"1.0003",
                            testMethod:"ASTM D1475"
                        },
                        {
                            propertis:"نقطه اشتعال (جام روباز)",
                            unit:"℃",
                            value:"21.8",
                            testMethod:"ASTM D92"
                        }
                    ],
                    safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های آلکیدی رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                    Packaging:"190 کیلوگرم (خالص) در بشکه‌های فولادی.",
                    Storage:"محصول را در محل خنک و در دمای کمتر از ℃25 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید.",
                    Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
                   },
                   en:{
                    product:"Medium oil Alkyd Resin",
                    name:"BAM212",
                    pdf:"BAM212-En.pdf",
                    Description:"BAM 212 X-60 is a medium oil alkyd resin based on soybean oil fatty acid which offers excellent hardness, surface and deep drying and gloss and gloss retention.",
                    Characteristics:[
                      "Excellent hardness",
                      "Excellent surface and deep drying",
                      "Excellent gloss and gloss retention",
                      "Excellent adhesion and flexibility",
                      "Excellent pigment wetting and dispersing",
                      "Good solvent tolerance"
                    ],
                    Uses:[
                       "Industrial paints and coatings",
                       "Automotive repair paints"
    
                    ],
                    Table:[
                        {
                            propertis:"oil percentage (approximate)",
                            unit:"% wt",
                            value:"48",
                            testMethod:"Computing"
                        },
                        {
                            propertis:"color",
                            unit:"Gardner",
                            value:"1>",
                            testMethod:"ASTM D1544"
                        },
                        {
                            propertis:"Viscosity (25℃)",
                            unit:"St",
                            value:"60-90",
                            testMethod:"ASTM D1545"
                        },
                        {
                            propertis:"acid number",
                            unit:"mg KOH/g",
                            value:"10>",
                            testMethod:"ASTM D1639"
                        },
                        {
                            propertis:"percent solids",
                            unit:"% wt",
                            value:"60±1",
                            testMethod:"ASTM D1259"
                        },
                        {
                            propertis:"Density (23℃)",
                            unit:"g/cm³",
                            value:"1.0003",
                            testMethod:"ASTM D1475"
                        },
                        {
                            propertis:"Flashing point (open cup)",
                            unit:"℃",
                            value:"21.8",
                            testMethod:"ASTM D92"
                        }
                        
                    ],
                    safety:"The usual protective measures employed during the handling of Alkyd Resins should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                    Packaging:"190 kg (net) in steel drums.",
                    Storage:"Store in a cool place below 25 °C and away from moisture and direct sunlight.",
                    Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
                   },
                   ru:{
                    product:"Aлкидная смола средней жирности",
                    name:"BAM212",
                    pdf:"BAM212-RU.pdf",
                    Description:"BAM 212 X-60 –алкидная смола средней жирности на основе жирных кислот соевого масла, обладающая отличной твердостью, поверхностным и глубоким высыханием, блеском и устойчивостью блеска.",
                    Characteristics:[
                     "Отличная твердость",
                     "Отличное поверхностное и глубокое высыхание",
                     "Отличный блеск и устойчивость блеска",
                     "Отличная адгезия и пластичность",
                     "Отличное увлажнение пигмента и распыление",
                     "Хорошая устойчивость к растворителям"
                    ],
                    Uses:[
                        "Промышленные краски и покрытия",
                        "Краски для авторемонта"
                    ],
                    Table:[
                        {
                            propertis:"Содержание масла (прибл.)",
                            unit:"% веса",
                            value:"48",
                            testMethod:"Расчеты"
                        },
                        {
                            propertis:"Цвет",
                            unit:"Гарднер",
                            value:"Max 1",
                            testMethod:"ASTM D1544"
                        },
                        {
                            propertis:"Вязкость (при 25°C)",
                            unit:"Ст",
                            value:"60-90",
                            testMethod:"ASTM D1545"
                        },
                        {
                            propertis:"Кислотное число",
                            unit:"мг KOH/г",
                            value:"10>",
                            testMethod:"ASTM D1639"
                        },
                        {
                            propertis:"Сухой остаток",
                            unit:"% веса",
                            value:"60±1",
                            testMethod:"ASTM D1259"
                        },
                        {
                            propertis:"Плотность (при 23°C)",
                            unit:"г/см³",
                            value:"1.0003",
                            testMethod:"ASTM D1475"
                        },
                        {
                            propertis:"Температура вспышки (в открытом тигле)",
                            unit:"℃",
                            value:"21.8",
                            testMethod:"ASTM D92"
                        }
                    ],
                    safety:"Следует соблюдать стандартные меры безопасности транспортировки алкидных смол. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                    Packaging:"190 кг (нетто) в металлических бочках.",
                    Storage:"Хранить в прохладном месте при температуре ниже 25 °C и вдали от влаги и прямых солнечных лучей.",
                    Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
                   }
            
                },
                BAL104 :{
                    fa:{
                     product:"رزین آلکید بلند روغن",
                     name:"BAL104",
                     pdf:"BAL104-Fa.pdf",
                     Description:"BAL 104 WS-70  رزین آلکید بلند روغن بر پایه اسید چرب روغن سویا با حلال­‌خوری عالی و فیلرخوری بسیار زیاد است.",
                     Characteristics:[
                       "حلال­‌خوری بسیار عالی",
                       "فیلرخوری بسیار زیاد"
                     ],
                     Uses:[
                       "رنگ­‌ها و پوشش­‌های ساختمانی",
                       "آستر"
                     ],
                     Table:[
                        {
                            propertis:"درصد روغن (تقریبی)",
                            unit:"% wt",
                            value:"56",
                            testMethod:"محاسبه"
                        },
                        {
                            propertis:"رنگ",
                            unit:"Gardner",
                            value:"5-8>",
                            testMethod:"ASTM D1544"
                        },
                        {
                            propertis:"گرانروی (℃25)",
                            unit:"St",
                            value:"1000-3500",
                            testMethod:"ASTM D1545"
                        },
                        {
                            propertis:"عدد اسیدی",
                            unit:"mg KOH/g",
                            value:"10>",
                            testMethod:"ASTM D1639"
                        },
                        {
                            propertis:"درصد جامد",
                            unit:"% wt",
                            value:"70±1",
                            testMethod:"ASTM D1259"
                        },
                        {
                            propertis:"چگالی  (℃23)",
                            unit:"g/cm³",
                            value:"0.9792",
                            testMethod:"ASTM D1475"
                        },
                        {
                            propertis:"نقطه اشتعال (جام روباز)",
                            unit:"℃",
                            value:"30",
                            testMethod:"ASTM D92"
                        }
                    ],
                     safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های آلکیدی رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                     Packaging:"190 کیلوگرم (خالص) در بشکه‌های فولادی.",
                     Storage:"محصول را در محل خنک و در دمای کمتر از ℃25 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید.",
                     Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
                    },
                    en:{
                     product:"Long oil Alkyd Resin",
                     name:"BAL104",
                     pdf:"BAL104-En.pdf",
                     Description:"BAL 104 WS-70 is a long oil alkyd resin based on soybean oil fatty acid which offers excellent solvent tolerance and very high filler and extender binding capacity.",
                     Characteristics:[
                       "Excellent solvent tolerance",
                       "Very high filler and extender binding capacity"
                     ],
                     Uses:[
                        "Architectural paints and coatings",
                        "Primer and surfacer"
     
                     ],
                     Table:[
                        {
                            propertis:"oil percentage (approximate)",
                            unit:"% wt",
                            value:"56",
                            testMethod:"Computing"
                        },
                        {
                            propertis:"color",
                            unit:"Gardner",
                            value:"5-8",
                            testMethod:"ASTM D1544"
                        },
                        {
                            propertis:"Viscosity (25℃)",
                            unit:"St",
                            value:"1000-3500",
                            testMethod:"ASTM D1545"
                        },
                        {
                            propertis:"acid number",
                            unit:"mg KOH/g",
                            value:"10>",
                            testMethod:"ASTM D1639"
                        },
                        {
                            propertis:"percent solids",
                            unit:"% wt",
                            value:"70±1",
                            testMethod:"ASTM D1259"
                        },
                        {
                            propertis:"Density (23℃)",
                            unit:"g/cm³",
                            value:"0.9792",
                            testMethod:"ASTM D1475"
                        },
                        {
                            propertis:"Flashing point (open cup)",
                            unit:"℃",
                            value:"30",
                            testMethod:"ASTM D92"
                        }
                        
                    ],
                     safety:"The usual protective measures employed during the handling of Alkyd Resins should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                     Packaging:"190 kg (net) in steel drums.",
                     Storage:"Store in a cool place below 25 °C and away from moisture and direct sunlight.",
                     Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
                    },
                    ru:{
                     product:"Жирная алкидная смола",
                     name:"BAL104",
                     pdf:"BAL104-RU.pdf",
                     Description:"BAL 104 WS-70 –  жирная алкидная смола на основе жирных кислот соевого масла, обладающая отличной устойчивостью к растворителям и очень высокой связывающей способностью наполнителей и экстендеров.",
                     Characteristics:[
                      "Отличная устойчивость к растворителю",
                      "Очень высокая связывающая способность наполнителей и экстендеров"
                     ],
                     Uses:[
                         "Строительные краски и покрытия",
                         "Грунтовки и подмазки"
                     ],
                     Table:[
                        {
                            propertis:"Содержание масла (прибл.)",
                            unit:"% веса",
                            value:"56",
                            testMethod:"Расчеты"
                        },
                        {
                            propertis:"Цвет",
                            unit:"Гарднер",
                            value:"5-8",
                            testMethod:"ASTM D1544"
                        },
                        {
                            propertis:"Вязкость (при 25°C)",
                            unit:"Ст",
                            value:"1000-3500",
                            testMethod:"ASTM D1545"
                        },
                        {
                            propertis:"Кислотное число",
                            unit:"мг KOH/г",
                            value:"10>",
                            testMethod:"ASTM D1639"
                        },
                        {
                            propertis:"Сухой остаток",
                            unit:"% веса",
                            value:"70±1",
                            testMethod:"ASTM D1259"
                        },
                        {
                            propertis:"Плотность (при 23°C)",
                            unit:"г/см³",
                            value:"0.9792",
                            testMethod:"ASTM D1475"
                        },
                        {
                            propertis:"Температура вспышки (в открытом тигле)",
                            unit:"℃",
                            value:"30",
                            testMethod:"ASTM D92"
                        }
                    ],
                     safety:"Следует соблюдать стандартные меры безопасности транспортировки алкидных смол. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                     Packaging:"190 кг (нетто) в металлических бочках.",
                     Storage:"Хранить в прохладном месте при температуре ниже 25 °C и вдали от влаги и прямых солнечных лучей.",
                     Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
                    }
             
                 },
                 BAL106 :{
                     fa:{
                      product:"رزین آلکید بلند روغن",
                      name:"BAL106",
                      pdf:"BAL106-Fa.pdf",
                      Description:"BAL 106 WS-70 رزین آلکید بلند روغن بر پایه اسید چرب روغن سویا با خشک‌­شوندگی سطحی و عمقی خوب، براقیت و حفظ براقیت و حلال­‌خوری بسیار خوب است.",
                      Characteristics:[
                       "براقیت و حفظ براقیت بسیار خوب",
                       "حلال­‌خوری بسیار خوب",
                       "خشک­‌شوندگی سطحی و عمقی خوب",
                       "­پوشش­‌دهی خوب",
                       "فیلرخوری بسیار زیاد"
                      ],
                      Uses:[
                        "رنگ­‌ها و پوشش­‌های ساختمانی",
                        "خمیر رنگدانه",
                        "افشانه (اسپری) رنگ"
                      ],
                      Table:[
                        {
                            propertis:"درصد روغن (تقریبی)",
                            unit:"% wt",
                            value:"56",
                            testMethod:"محاسبه"
                        },
                        {
                            propertis:"رنگ",
                            unit:"Gardner",
                            value:"6.5>",
                            testMethod:"ASTM D1544"
                        },
                        {
                            propertis:"گرانروی (℃25)",
                            unit:"St",
                            value:"300-1500",
                            testMethod:"ASTM D1545"
                        },
                        {
                            propertis:"عدد اسیدی",
                            unit:"mg KOH/g",
                            value:"10>",
                            testMethod:"ASTM D1639"
                        },
                        {
                            propertis:"درصد جامد",
                            unit:"% wt",
                            value:"70±1",
                            testMethod:"ASTM D1259"
                        },
                        {
                            propertis:"چگالی  (℃23)",
                            unit:"g/cm³",
                            value:"0.9612",
                            testMethod:"ASTM D1475"
                        },
                        {
                            propertis:"نقطه اشتعال (جام روباز)",
                            unit:"℃",
                            value:"24.2",
                            testMethod:"ASTM D92"
                        }
                    ],
                      safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های آلکیدی رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                      Packaging:"190 کیلوگرم (خالص) در بشکه‌های فولادی.",
                      Storage:"محصول را در محل خنک و در دمای کمتر از ℃25 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید.",
                      Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
                     },
                     en:{
                      product:"Long oil Alkyd Resin",
                      name:"BAL106",
                      pdf:"BAL106-En.pdf",
                      Description:"BAL 106 WS-70 is a long oil alkyd resin based on soybean oil fatty acid which offers good surface and deep drying, very good gloss and gloss retention and solvent tolerance.",
                      Characteristics:[
                        "Very good gloss and gloss retention",
                        "Very good solvent tolerance",
                        "Good surface and deep drying",
                        "Good coverage",
                        "Outstanding filler binding power",

                      ],
                      Uses:[
                         "Architectural paints and coatings",
                         "Primer and surfacer",
                         "Aerosol cans and paint sprays"
      
                      ],
                      Table:[
                        {
                            propertis:"oil percentage (approximate)",
                            unit:"% wt",
                            value:"56",
                            testMethod:"Computing"
                        },
                        {
                            propertis:"color",
                            unit:"Gardner",
                            value:"<6.5",
                            testMethod:"ASTM D1544"
                        },
                        {
                            propertis:"Viscosity (25℃)",
                            unit:"St",
                            value:"300-1500",
                            testMethod:"ASTM D1545"
                        },
                        {
                            propertis:"acid number",
                            unit:"mg KOH/g",
                            value:"10>",
                            testMethod:"ASTM D1639"
                        },
                        {
                            propertis:"percent solids",
                            unit:"% wt",
                            value:"70±1",
                            testMethod:"ASTM D1259"
                        },
                        {
                            propertis:"Density (23℃)",
                            unit:"g/cm³",
                            value:"0.9612",
                            testMethod:"ASTM D1475"
                        },
                        {
                            propertis:"Flashing point (open cup)",
                            unit:"℃",
                            value:"24.2",
                            testMethod:"ASTM D92"
                        }
                        
                    ],
                      safety:"The usual protective measures employed during the handling of Alkyd Resins should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                      Packaging:"190 kg (net) in steel drums.",
                      Storage:"Store in a cool place below 25 °C and away from moisture and direct sunlight.",
                      Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
                     },
                     ru:{
                      product:"Жирная алкидная смола",
                      name:"BAL106",
                      pdf:"BAL106-RU.pdf",
                      Description:"BAL 106 WS-70 – жирная алкидная смола на основе жирных кислот соевого масла, обладающая хорошим поверхностным и глубоким высыханием, очень хорошим блеском и устойчивостью блеска и устойчивостью к растворителям",
                      Characteristics:[
                       "Очень хороший блеск и устойчивость блеска",
                       "Очень хорошая устойчивость к растворителю",
                       "Хорошее поверхностное и глубокое высыхание",
                       "Хорошее покрытие",
                       "Исключительная связывающая способность наполнителя"
                      ],
                      Uses:[
                          "Строительные краски и покрытия",
                          "Пигментные пасты",
                          "Аэрозольные баллончики и распылители краски"
                      ],
                      Table:[
                        {
                            propertis:"Содержание масла (прибл.)",
                            unit:"% веса",
                            value:"56",
                            testMethod:"Расчеты"
                        },
                        {
                            propertis:"Цвет",
                            unit:"Гарднер",
                            value:"<6.5",
                            testMethod:"ASTM D1544"
                        },
                        {
                            propertis:"Вязкость (при 25°C)",
                            unit:"Ст",
                            value:"300-1500",
                            testMethod:"ASTM D1545"
                        },
                        {
                            propertis:"Кислотное число",
                            unit:"мг KOH/г",
                            value:"10>",
                            testMethod:"ASTM D1639"
                        },
                        {
                            propertis:"Сухой остаток",
                            unit:"% веса",
                            value:"70±1",
                            testMethod:"ASTM D1259"
                        },
                        {
                            propertis:"Плотность (при 23°C)",
                            unit:"г/см³",
                            value:"0.9612",
                            testMethod:"ASTM D1475"
                        },
                        {
                            propertis:"Температура вспышки (в открытом тигле)",
                            unit:"℃",
                            value:"24.2",
                            testMethod:"ASTM D92"
                        }
                    ],
                      safety:"Следует соблюдать стандартные меры безопасности транспортировки алкидных смол. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                      Packaging:"190 кг (нетто) в металлических бочках.",
                      Storage:"Хранить в прохладном месте при температуре ниже 25 °C и вдали от влаги и прямых солнечных лучей.",
                      Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
                     }
              
                  },
                  BAL108 :{
                      fa:{
                       product:"رزین آلکید بلند روغن",
                       name:"BAL108",
                       pdf:"BAL108-Fa.pdf",
                       Description:"BAL 108 WS-70 رزین آلکید بلند روغن بر پایه اسید چرب روغن سویا با سختی، خشک­‌شوندگی سطحی و عمقی، براقیت و حفظ براقیت و چسبندگی عالی است.",
                       Characteristics:[
                        "سختی عالی",
                        "خشک‌­شوندگی سطحی و عمقی عالی",
                        "براقیت و حفظ براقیت عالی",
                        "چسبندگی عالی",
                        "حلال­‌خوری بسیار خوب",
                        "­پوشش­‌دهی خوب"
                       ],
                       Table:[
                        {
                            propertis:"درصد روغن (تقریبی)",
                            unit:"% wt",
                            value:"58",
                            testMethod:"محاسبه"
                        },
                        {
                            propertis:"رنگ",
                            unit:"Gardner",
                            value:"4.5>",
                            testMethod:"ASTM D1544"
                        },
                        {
                            propertis:"گرانروی (℃25)",
                            unit:"St",
                            value:"300-500",
                            testMethod:"ASTM D1545"
                        },
                        {
                            propertis:"عدد اسیدی",
                            unit:"mg KOH/g",
                            value:"10>",
                            testMethod:"ASTM D1639"
                        },
                        {
                            propertis:"درصد جامد",
                            unit:"% wt",
                            value:"70±1",
                            testMethod:"ASTM D1259"
                        },
                        {
                            propertis:"چگالی  (℃23)",
                            unit:"g/cm³",
                            value:"0.9716",
                            testMethod:"ASTM D1475"
                        },
                        {
                            propertis:"نقطه اشتعال (جام روباز)",
                            unit:"℃",
                            value:"30",
                            testMethod:"ASTM D92"
                        }
                    ],
                       Uses:[
                         "رنگ­‌ها و پوشش­‌های ساختمانی",
                         "رنگ­‌های براق و نیمه­‌براق",
                         "جلا، ورنی و شفاف‌­پوشه (clear coat)"
                       ],

                       safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های آلکیدی رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                       Packaging:"190 کیلوگرم (خالص) در بشکه‌های فولادی.",
                       Storage:"محصول را در محل خنک و در دمای کمتر از ℃25 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید.",
                       Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
                      },
                      en:{
                       product:"Long oil Alkyd Resin",
                       name:"BAL108",
                       pdf:"BAL108-En.pdf",
                       Description:"BAL 108 WS-70 is a long oil alkyd resin based on soybean oil fatty acid which offers excellent hardness, surface and deep drying, gloss and gloss retention and adhesion.",
                       Characteristics:[
                         "Excellent hardness",
                         "Excellent surface and deep drying",
                         "Excellent gloss and gloss retention",
                         "Excellent adhesion",
                         "Very good solvent tolerance",
                         "Good coverage"
 
                       ],
                       Uses:[
                          "Architectural paints and coatings",
                          "Gloss and semi gloss paints",
                          "Clear coat, lacquers and varnishes"
       
                       ],
                       Table:[
                        {
                            propertis:"oil percentage (approximate)",
                            unit:"% wt",
                            value:"58",
                            testMethod:"Computing"
                        },
                        {
                            propertis:"color",
                            unit:"Gardner",
                            value:"<4.5",
                            testMethod:"ASTM D1544"
                        },
                        {
                            propertis:"Viscosity (25℃)",
                            unit:"St",
                            value:"300-500",
                            testMethod:"ASTM D1545"
                        },
                        {
                            propertis:"acid number",
                            unit:"mg KOH/g",
                            value:"10>",
                            testMethod:"ASTM D1639"
                        },
                        {
                            propertis:"percent solids",
                            unit:"% wt",
                            value:"70±1",
                            testMethod:"ASTM D1259"
                        },
                        {
                            propertis:"Density (23℃)",
                            unit:"g/cm³",
                            value:"0.9716",
                            testMethod:"ASTM D1475"
                        },
                        {
                            propertis:"Flashing point (open cup)",
                            unit:"℃",
                            value:"30",
                            testMethod:"ASTM D92"
                        }
                        
                    ],
                       safety:"The usual protective measures employed during the handling of Alkyd Resins should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                       Packaging:"190 kg (net) in steel drums.",
                       Storage:"Store in a cool place below 25 °C and away from moisture and direct sunlight.",
                       Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
                      },
                      ru:{
                       product:"Жирная алкидная смола",
                       name:"BAL108",
                       pdf:"BAL108-RU.pdf",
                       Description:"BAL 108 WS-70 – жираня алкидная смола на основе жирных кислот соевого масла, обладающая отличной твердостью, поверхностным и глубоким высыханием, блеском и сохранением блеска, и адгезией.",
                       Characteristics:[
                        "Отличная твердость",
                        "Отличное поверхностное и глубокое высыхание",
                        "Отличный блеск и сохранение блеска",
                        "Отличная адгезия",
                        "Очень хорошая стойкость к растворителю",
                        "Хорошее покрытие"
                       ],
                       Uses:[
                           "Строительные краски и покрытия",
                           "Глянцевые и полуматовые краски",
                           "Прокровные (непигментированные) лаки, лаки и политура"
                       ],
                       Table:[
                        {
                            propertis:"Содержание масла (прибл.)",
                            unit:"% веса",
                            value:"58",
                            testMethod:"Расчеты"
                        },
                        {
                            propertis:"Цвет",
                            unit:"Гарднер",
                            value:"<4.5",
                            testMethod:"ASTM D1544"
                        },
                        {
                            propertis:"Вязкость (при 25°C)",
                            unit:"Ст",
                            value:"300-500",
                            testMethod:"ASTM D1545"
                        },
                        {
                            propertis:"Кислотное число",
                            unit:"мг KOH/г",
                            value:"10>",
                            testMethod:"ASTM D1639"
                        },
                        {
                            propertis:"Сухой остаток",
                            unit:"% веса",
                            value:"70±1",
                            testMethod:"ASTM D1259"
                        },
                        {
                            propertis:"Плотность (при 23°C)",
                            unit:"г/см³",
                            value:"0.9716",
                            testMethod:"ASTM D1475"
                        },
                        {
                            propertis:"Температура вспышки (в открытом тигле)",
                            unit:"℃",
                            value:"30",
                            testMethod:"ASTM D92"
                        }
                    ],
                       safety:"Следует соблюдать стандартные меры безопасности транспортировки алкидных смол. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                       Packaging:"190 кг (нетто) в металлических бочках.",
                       Storage:"Хранить в прохладном месте при температуре ниже 25 °C и вдали от влаги и прямых солнечных лучей.",
                       Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
                      }
               
                   },
                   BAL116 :{
                       fa:{
                        product:"رزین آلکید بلند روغن",
                        name:"BAL116",
                        pdf:"BAL116-Fa.pdf",
                        Description:"BAL 116 WS-70 رزین آلکید بلند روغن بر پایه اسید چرب روغن سویا با سختی و خشک‌­شوندگی سطحی و عمقی عالی و براقیت و حفظ براقیت بسیار خوب است.",
                        Characteristics:[
                        "سختی عالی",
                        "خشک‌­شوندگی سطحی و عمقی عالی",
                        "براقیت و حفظ براقیت بسیار خوب",
                        "حلال­‌خوری بسیار خوب"
                        ],
                        Uses:[
                          "رنگ­‌ها و پوشش­‌های ساختمانی",
                          "رنگ­‌های براق و نیمه­‌براق",
                          "جلا، ورنی و شفاف‌­پوشه (clear coat)"
                        ],
                        Table:[
                            {
                                propertis:"درصد روغن (تقریبی)",
                                unit:"% wt",
                                value:"57",
                                testMethod:"محاسبه"
                            },
                            {
                                propertis:"رنگ",
                                unit:"Gardner",
                                value:"4.5>",
                                testMethod:"ASTM D1544"
                            },
                            {
                                propertis:"گرانروی (℃25)",
                                unit:"St",
                                value:"1000-2500",
                                testMethod:"ASTM D1545"
                            },
                            {
                                propertis:"عدد اسیدی",
                                unit:"mg KOH/g",
                                value:"10>",
                                testMethod:"ASTM D1639"
                            },
                            {
                                propertis:"درصد جامد",
                                unit:"% wt",
                                value:"70±1",
                                testMethod:"ASTM D1259"
                            },
                            {
                                propertis:"چگالی  (℃23)",
                                unit:"g/cm³",
                                value:"0.9695",
                                testMethod:"ASTM D1475"
                            },
                            {
                                propertis:"نقطه اشتعال (جام روباز)",
                                unit:"℃",
                                value:"24.2",
                                testMethod:"ASTM D92"
                            }
                        ],
                        safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های آلکیدی رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                        Packaging:"190 کیلوگرم (خالص) در بشکه‌های فولادی.",
                        Storage:"محصول را در محل خنک و در دمای کمتر از ℃25 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید.",
                        Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
                       },
                       en:{
                        product:"Long oil Alkyd Resin",
                        name:"BAL116",
                        pdf:"BAL116-En.pdf",
                        Description:"BAL 116 WS-70 is a long oil alkyd resin based on soybean oil fatty acid which offers excellent hardness, surface and deep drying and very good gloss and gloss retention.",
                        Characteristics:[
                          "Excellent hardness",
                          "Excellent surface and deep drying",
                            "Very good gloss and gloss retention",
                            "Very good solvent tolerance"
  
                        ],
                        Uses:[
                           "Architectural paints and coatings",
                           "Gloss and semi gloss paints",
                           "Clear coat, lacquers and varnishes"
        
                        ],
                        Table:[
                            {
                                propertis:"oil percentage (approximate)",
                                unit:"% wt",
                                value:"57",
                                testMethod:"Computing"
                            },
                            {
                                propertis:"color",
                                unit:"Gardner",
                                value:"<4.5",
                                testMethod:"ASTM D1544"
                            },
                            {
                                propertis:"Viscosity (25℃)",
                                unit:"St",
                                value:"1000-2500",
                                testMethod:"ASTM D1545"
                            },
                            {
                                propertis:"acid number",
                                unit:"mg KOH/g",
                                value:"10>",
                                testMethod:"ASTM D1639"
                            },
                            {
                                propertis:"percent solids",
                                unit:"% wt",
                                value:"70±1",
                                testMethod:"ASTM D1259"
                            },
                            {
                                propertis:"Density (23℃)",
                                unit:"g/cm³",
                                value:"0.9695",
                                testMethod:"ASTM D1475"
                            },
                            {
                                propertis:"Flashing point (open cup)",
                                unit:"℃",
                                value:"24.2",
                                testMethod:"ASTM D92"
                            }
                            
                        ],
                        safety:"The usual protective measures employed during the handling of Alkyd Resins should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                        Packaging:"190 kg (net) in steel drums.",
                        Storage:"Store in a cool place below 25 °C and away from moisture and direct sunlight.",
                        Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
                       },
                       ru:{
                        product:"Жирная алкидная смола",
                        name:"BAL116",
                        pdf:"BAL116-RU.pdf",
                        Description:"BAL 116 WS-70 – жирная алкидная смола на основе жирных кислот соевого масла, обладающая отличной твердостью, поверхностным и глубоким высыханием, очень хорошим блеском и устройчивостью блеска.",
                        Characteristics:[
                         "Отличная твердость",
                         "Отличное поверхностное и глубокое высыхание",
                         "Очень хороший блеск и сохранение блеска",
                         "Очень хорошая устойчивость к растворителю"
                        ],
                        Uses:[
                            "Строительные краски и покрытия",
                            "Глянцевые и полуматовые краски",
                            "Прокровные (непигментированные) лаки, лаки и политура"
                        ],
                        Table:[
                            {
                                propertis:"Содержание масла (прибл.)",
                                unit:"% веса",
                                value:"57",
                                testMethod:"Расчеты"
                            },
                            {
                                propertis:"Цвет",
                                unit:"Гарднер",
                                value:"<4.5",
                                testMethod:"ASTM D1544"
                            },
                            {
                                propertis:"Вязкость (при 25°C)",
                                unit:"Ст",
                                value:"1000-2500",
                                testMethod:"ASTM D1545"
                            },
                            {
                                propertis:"Кислотное число",
                                unit:"мг KOH/г",
                                value:"10>",
                                testMethod:"ASTM D1639"
                            },
                            {
                                propertis:"Сухой остаток",
                                unit:"% веса",
                                value:"70±1",
                                testMethod:"ASTM D1259"
                            },
                            {
                                propertis:"Плотность (при 23°C)",
                                unit:"г/см³",
                                value:"0.9695",
                                testMethod:"ASTM D1475"
                            },
                            {
                                propertis:"Температура вспышки (в открытом тигле)",
                                unit:"℃",
                                value:"24.2",
                                testMethod:"ASTM D92"
                            }
                        ],
                        safety:"Следует соблюдать стандартные меры безопасности транспортировки алкидных смол. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                        Packaging:"190 кг (нетто) в металлических бочках.",
                        Storage:"Хранить в прохладном месте при температуре ниже 25 °C и вдали от влаги и прямых солнечных лучей.",
                        Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
                       }
                
                    },
                    BAL117 :{
                        fa:{
                         product:"رزین آلکید بلند روغن",
                         name:"BAL117",
                         pdf:"BAL117-Fa.pdf",
                         Description:"BAL 117 WS-70 رزین آلکید بلند روغن بر پایه اسید چرب روغن سویا با خشک­‌شوندگی سطحی و عمقی، براقیت و حفظ براقیت و چسبندگی بسیار خوب و پوشش­‌دهی خوب است.",
                         Characteristics:[
                          "خشک­‌شوندگی سطحی و عمقی بسیار خوب",
                          "براقیت و حفظ براقیت بسیار خوب",
                          "چسبندگی بسیار خوب",
                          "حلال­‌خوری بسیار خوب",
                          "­پوشش­‌دهی خوب",
                          "فیلرخوری بسیار زیاد",

                         ],
                         Uses:[
                           "رنگ­‌ها و پوشش­‌های ساختمانی",
                           "رنگ­‌های براق و نیمه­‌براق"
                         ],
                         Table:[
                            {
                                propertis:"درصد روغن (تقریبی)",
                                unit:"% wt",
                                value:"50",
                                testMethod:"محاسبه"
                            },
                            {
                                propertis:"رنگ",
                                unit:"Gardner",
                                value:"4.5>",
                                testMethod:"ASTM D1544"
                            },
                            {
                                propertis:"گرانروی (℃25)",
                                unit:"St",
                                value:"10000-20000",
                                testMethod:"ASTM D1545"
                            },
                            {
                                propertis:"عدد اسیدی",
                                unit:"mg KOH/g",
                                value:"10>",
                                testMethod:"ASTM D1639"
                            },
                            {
                                propertis:"درصد جامد",
                                unit:"% wt",
                                value:"70±1",
                                testMethod:"ASTM D1259"
                            },
                            {
                                propertis:"چگالی  (℃23)",
                                unit:"g/cm³",
                                value:"0.9970",
                                testMethod:"ASTM D1475"
                            },
                            {
                                propertis:"نقطه اشتعال (جام روباز)",
                                unit:"℃",
                                value:"26",
                                testMethod:"ASTM D92"
                            }
                        ],
                         safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های آلکیدی رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                         Packaging:"190 کیلوگرم (خالص) در بشکه‌های فولادی.",
                         Storage:"محصول را در محل خنک و در دمای کمتر از ℃25 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید.",
                         Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
                        },
                        en:{
                         product:"Long oil Alkyd Resin",
                         name:"BAL117",
                         pdf:"BAL117-En.pdf",
                         Description:"BAL 117 WS-70 is a long oil alkyd resin based on soybean oil fatty acid which offers very good surface and deep drying, gloss and gloss retention and adhesion good coverage.",
                         Characteristics:[
                           "Very good surface and deep drying",
                           "Very good gloss and gloss retention",
                           "Very good adhesion",
                           "Very good solvent tolerance",
                           "Good coverage",
                           "Outstanding filler binding power"
   
                         ],
                         Uses:[
                            "Architectural paints and coatings",
                            "Gloss and semi gloss paints"
         
                         ],
                         Table:[
                            {
                                propertis:"oil percentage (approximate)",
                                unit:"% wt",
                                value:"50",
                                testMethod:"Computing"
                            },
                            {
                                propertis:"color",
                                unit:"Gardner",
                                value:"<4.5",
                                testMethod:"ASTM D1544"
                            },
                            {
                                propertis:"Viscosity (25℃)",
                                unit:"St",
                                value:"10000-20000",
                                testMethod:"ASTM D1545"
                            },
                            {
                                propertis:"acid number",
                                unit:"mg KOH/g",
                                value:"10>",
                                testMethod:"ASTM D1639"
                            },
                            {
                                propertis:"percent solids",
                                unit:"% wt",
                                value:"70±1",
                                testMethod:"ASTM D1259"
                            },
                            {
                                propertis:"Density (23℃)",
                                unit:"g/cm³",
                                value:"0.9970",
                                testMethod:"ASTM D1475"
                            },
                            {
                                propertis:"Flashing point (open cup)",
                                unit:"℃",
                                value:"26",
                                testMethod:"ASTM D92"
                            }
                            
                        ],
                         safety:"The usual protective measures employed during the handling of Alkyd Resins should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                         Packaging:"190 kg (net) in steel drums.",
                         Storage:"Store in a cool place below 25 °C and away from moisture and direct sunlight.",
                         Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
                        },
                        ru:{
                         product:"Жирная алкидная смола",
                         name:"BAL117",
                         pdf:"BAL117-RU.pdf",
                         Description:"BAL 117 WS-70 – жирная алкидная смола на основе жирных кислот соевого масла, обладающая очень хорошим поверхностным и глубоким высыханием, блеском и сохранением блеска, адгезией и хорошим покрытием.",
                         Characteristics:[
                           "Очень хорошее поверхностное и глубокое высыхание",
                           "Отличный блеск и сохранение блеска",
                           "Очень хорошая адгезия",
                           "Очень хорошая стойкость к растворителю",
                           "Хорошее покрытие",
                           "Исключительная связующая способность наполнителя"
                         ],
                         Uses:[
                             "Строительные краски и покрытия",
                             "Глянцевые и полуматовые краски"
                         ],
                         Table:[
                            {
                                propertis:"Содержание масла (прибл.)",
                                unit:"% веса",
                                value:"50",
                                testMethod:"Расчеты"
                            },
                            {
                                propertis:"Цвет",
                                unit:"Гарднер",
                                value:"<4.5",
                                testMethod:"ASTM D1544"
                            },
                            {
                                propertis:"Вязкость (при 25°C)",
                                unit:"Ст",
                                value:"10000-20000",
                                testMethod:"ASTM D1545"
                            },
                            {
                                propertis:"Кислотное число",
                                unit:"мг KOH/г",
                                value:"10>",
                                testMethod:"ASTM D1639"
                            },
                            {
                                propertis:"Сухой остаток",
                                unit:"% веса",
                                value:"70±1",
                                testMethod:"ASTM D1259"
                            },
                            {
                                propertis:"Плотность (при 23°C)",
                                unit:"г/см³",
                                value:"0.9970",
                                testMethod:"ASTM D1475"
                            },
                            {
                                propertis:"Температура вспышки (в открытом тигле)",
                                unit:"℃",
                                value:"26",
                                testMethod:"ASTM D92"
                            }
                        ],
                         safety:"Следует соблюдать стандартные меры безопасности транспортировки алкидных смол. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                         Packaging:"190 кг (нетто) в металлических бочках.",
                         Storage:"Хранить в прохладном месте при температуре ниже 25 °C и вдали от влаги и прямых солнечных лучей.",
                         Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
                        }
                 
                     },
                     BAL118 :{
                         fa:{
                          product:"رزین آلکید بلند روغن",
                          name:"BAL118",
                          pdf:"BAL118-Fa.pdf",
                          Description:"BAL 118 WS-70 رزین آلکید بلند روغن بر پایه اسید چرب روغن سویا با خشک­‌شوندگی سطحی و عمقی، براقیت و حفظ براقیت و چسبندگی بسیارخوب و پوشش­‌دهی خوب است.",
                          Characteristics:[
                           "خشک­‌شوندگی سطحی و عمقی بسیار خوب",
                           "براقیت و حفظ براقیت بسیار خوب",
                           "چسبندگی بسیار خوب",
                           "حلال­‌خوری بسیار خوب",
                           "­پوشش­‌دهی خوب",
                           "فیلرخوری بسیار زیاد",

 
                          ],
                          Uses:[
                            "رنگ­‌ها و پوشش­‌های ساختمانی",
                            "رنگ­‌های براق و نیمه­‌براق"
                          ],
                          Table:[
                            {
                                propertis:"درصد روغن (تقریبی)",
                                unit:"% wt",
                                value:"58",
                                testMethod:"محاسبه"
                            },
                            {
                                propertis:"رنگ",
                                unit:"Gardner",
                                value:"5>",
                                testMethod:"ASTM D1544"
                            },
                            {
                                propertis:"گرانروی (℃25)",
                                unit:"St",
                                value:"1000-3000",
                                testMethod:"ASTM D1545"
                            },
                            {
                                propertis:"عدد اسیدی",
                                unit:"mg KOH/g",
                                value:"10>",
                                testMethod:"ASTM D1639"
                            },
                            {
                                propertis:"درصد جامد",
                                unit:"% wt",
                                value:"70±1",
                                testMethod:"ASTM D1259"
                            },
                            {
                                propertis:"چگالی  (℃23)",
                                unit:"g/cm³",
                                value:"0.9642",
                                testMethod:"ASTM D1475"
                            },
                            {
                                propertis:"نقطه اشتعال (جام روباز)",
                                unit:"℃",
                                value:"30",
                                testMethod:"ASTM D92"
                            }
                        ],
                          safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های آلکیدی رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                          Packaging:"190 کیلوگرم (خالص) در بشکه‌های فولادی.",
                          Storage:"محصول را در محل خنک و در دمای کمتر از ℃25 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید.",
                          Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
                         },
                         en:{
                          product:"Long oil Alkyd Resin",
                          name:"BAL118",
                          pdf:"BAL118-En.pdf",
                          Description:"BAL 118 WS-70 is a long oil alkyd resin based on soybean oil fatty acid which offers very good surface and deep drying, gloss and gloss retention and adhesion and good coverage.",
                          Characteristics:[
                            "Very good surface and deep drying",
                            "Very good gloss and gloss retention",
                            "Very good adhesion",
                            "Very good solvent tolerance",
                            "Good coverage",
                            "Outstanding filler binding power"
    
                          ],
                          Uses:[
                             "Architectural paints and coatings",
                             "Gloss and semi gloss paints"
          
                          ],
                          Table:[
                            {
                                propertis:"oil percentage (approximate)",
                                unit:"% wt",
                                value:"58",
                                testMethod:"Computing"
                            },
                            {
                                propertis:"color",
                                unit:"Gardner",
                                value:"<5",
                                testMethod:"ASTM D1544"
                            },
                            {
                                propertis:"Viscosity (25℃)",
                                unit:"St",
                                value:"1000-3000",
                                testMethod:"ASTM D1545"
                            },
                            {
                                propertis:"acid number",
                                unit:"mg KOH/g",
                                value:"10>",
                                testMethod:"ASTM D1639"
                            },
                            {
                                propertis:"percent solids",
                                unit:"% wt",
                                value:"70±1",
                                testMethod:"ASTM D1259"
                            },
                            {
                                propertis:"Density (23℃)",
                                unit:"g/cm³",
                                value:"0.9642",
                                testMethod:"ASTM D1475"
                            },
                            {
                                propertis:"Flashing point (open cup)",
                                unit:"℃",
                                value:"30",
                                testMethod:"ASTM D92"
                            }
                            
                        ],
                          safety:"The usual protective measures employed during the handling of Alkyd Resins should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                          Packaging:"190 kg (net) in steel drums.",
                          Storage:"Store in a cool place below 25 °C and away from moisture and direct sunlight.",
                          Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
                         },
                         ru:{
                          product:"Жирная алкидная смола",
                          name:"BAL118",
                          pdf:"BAL118-RU.pdf",
                          Description:"BAL 118 WS-70 – жирная алкидная смола на основе жирных кислот соевого масла, обладающая очень хорошим поверхностным и глубоким высыханием, блеском и устойчивостью блеска, адгезией и хорошим покрытием.",
                          Characteristics:[
                           "Очень хорошее поверхностное и глубокое высыхание",
                           "Очень хороший блеск и устойчивость блеска",
                           "Очень хорошая адгезия",
                           "Очень хорошая стойкость к растворителю",
                           "Хорошее покрытие",
                           "Исключительная связующая способность наполнителя"
                          ],
                          Uses:[
                              "Строительные краски и покрытия",
                              "Глянцевые и полуматовые краски"
                          ],
                          Table:[
                            {
                                propertis:"Содержание масла (прибл.)",
                                unit:"% веса",
                                value:"58",
                                testMethod:"Расчеты"
                            },
                            {
                                propertis:"Цвет",
                                unit:"Гарднер",
                                value:"<5",
                                testMethod:"ASTM D1544"
                            },
                            {
                                propertis:"Вязкость (при 25°C)",
                                unit:"Ст",
                                value:"1000-3000",
                                testMethod:"ASTM D1545"
                            },
                            {
                                propertis:"Кислотное число",
                                unit:"мг KOH/г",
                                value:"10>",
                                testMethod:"ASTM D1639"
                            },
                            {
                                propertis:"Сухой остаток",
                                unit:"% веса",
                                value:"70±1",
                                testMethod:"ASTM D1259"
                            },
                            {
                                propertis:"Плотность (при 23°C)",
                                unit:"г/см³",
                                value:"0.9642",
                                testMethod:"ASTM D1475"
                            },
                            {
                                propertis:"Температура вспышки (в открытом тигле)",
                                unit:"℃",
                                value:"30",
                                testMethod:"ASTM D92"
                            }
                        ],
                          safety:"Следует соблюдать стандартные меры безопасности транспортировки алкидных смол. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                          Packaging:"190 кг (нетто) в металлических бочках.",
                          Storage:"Хранить в прохладном месте при температуре ниже 25 °C и вдали от влаги и прямых солнечных лучей.",
                          Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
                         }
                  
                      },
                      BAL133 :{
                          fa:{
                           product:"رزین آلکید بلند روغن",
                           name:"BAL133",
                           pdf:"BAL133-Fa.pdf",
                           Description:"BAL 133 WS-70 رزین آلکید بلند روغن بر پایه اسید چرب روغن سویا / آفتاب­­گردان با سختی، خشک­‌شوندگی سطحی و عمقی و براقیت و حفظ براقیت عالی است.",
                           Characteristics:[
                            "سختی عالی",
                            "خشک‌­شوندگی سطحی و عمقی عالی",
                            "براقیت و حفظ براقیت عالی",
                            "چسبندگی عالی",
                            "­ترکنندگی و قابلیت پراکنش رنگدانه عالی",
                            "حلال­‌خوری بسیار خوب",
                            "پوشش دهی بسیار خوب"
 
  
                           ],
                           Uses:[
                             "رنگ­‌ها و پوشش­‌های ساختمانی",
                             "رنگ­‌های براق و نیمه­‌براق",
                             "جلا، ورنی و شفاف‌­پوشه (clear coat)",
                             "افشانه (اسپری) رنگ"
                           ],
                           Table:[
                            {
                                propertis:"درصد روغن (تقریبی)",
                                unit:"% wt",
                                value:"54",
                                testMethod:"محاسبه"
                            },
                            {
                                propertis:"رنگ",
                                unit:"Gardner",
                                value:"2>",
                                testMethod:"ASTM D1544"
                            },
                            {
                                propertis:"گرانروی (℃25)",
                                unit:"St",
                                value:"150-400",
                                testMethod:"ASTM D1545"
                            },
                            {
                                propertis:"عدد اسیدی",
                                unit:"mg KOH/g",
                                value:"10>",
                                testMethod:"ASTM D1639"
                            },
                            {
                                propertis:"درصد جامد",
                                unit:"% wt",
                                value:"70±1",
                                testMethod:"ASTM D1259"
                            },
                            {
                                propertis:"چگالی  (℃23)",
                                unit:"g/cm³",
                                value:"0.9734",
                                testMethod:"ASTM D1475"
                            },
                            {
                                propertis:"نقطه اشتعال (جام روباز)",
                                unit:"℃",
                                value:"30",
                                testMethod:"ASTM D92"
                            }
                        ],
                           safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های آلکیدی رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                           Packaging:"190 کیلوگرم (خالص) در بشکه‌های فولادی.",
                           Storage:"محصول را در محل خنک و در دمای کمتر از ℃25 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید.",
                           Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
                          },
                          en:{
                           product:"Long oil Alkyd Resin",
                           name:"BAL133",
                           pdf:"BAL133-En.pdf",
                           Description:"BAL 133 WS-70 is a long oil alkyd resin based on soybean/sunflower oil fatty acids which offers excellent hardness, surface and deep drying and gloss and gloss retention.",
                           Characteristics:[
                             "Excellent hardness",
                             "Excellent surface and deep drying",
                             "Excellent gloss and gloss retention",
                             "Excellent adhesion",
                             "Excellent pigment wetting and dispersing",
                             "Very good solvent tolerance",
                             "Very good coverage"
     
                           ],
                           Uses:[
                              "Architectural paints and coatings",
                              "Gloss and semi gloss paints",
                              "Clear coat, lacquers and varnishes",
                              "Aerosol cans and paint sprays"
           
                           ],
                           Table:[
                            {
                                propertis:"oil percentage (approximate)",
                                unit:"% wt",
                                value:"54",
                                testMethod:"Computing"
                            },
                            {
                                propertis:"color",
                                unit:"Gardner",
                                value:"<2",
                                testMethod:"ASTM D1544"
                            },
                            {
                                propertis:"Viscosity (25℃)",
                                unit:"St",
                                value:"150-400",
                                testMethod:"ASTM D1545"
                            },
                            {
                                propertis:"acid number",
                                unit:"mg KOH/g",
                                value:"10>",
                                testMethod:"ASTM D1639"
                            },
                            {
                                propertis:"percent solids",
                                unit:"% wt",
                                value:"70±1",
                                testMethod:"ASTM D1259"
                            },
                            {
                                propertis:"Density (23℃)",
                                unit:"g/cm³",
                                value:"0.9734",
                                testMethod:"ASTM D1475"
                            },
                            {
                                propertis:"Flashing point (open cup)",
                                unit:"℃",
                                value:"30",
                                testMethod:"ASTM D92"
                            }
                            
                        ],
                           safety:"The usual protective measures employed during the handling of Alkyd Resins should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                           Packaging:"190 kg (net) in steel drums.",
                           Storage:"Store in a cool place below 25 °C and away from moisture and direct sunlight.",
                           Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
                          },
                          ru:{
                           product:"Жирная алкидная смола",
                           name:"BAL133",
                           pdf:"BAL133-RU.pdf",
                           Description:"BAL 133 WS-70 – жирная  алкидная смола на основе жирных кислот соевого/ подсолнечного масла, обладающая отличной твердостью, поверхностным и глубоким высыханием, блеском и сохранением блеска.",
                           Characteristics:[
                            "Отличная твердость",
                            "Отличное поверхностное и глубокое высыхание",
                            "Отличный блеск и сохранение блеска",
                            "Отличная адгезия",
                            "Отличное увлажнение пигмента и распыление",
                            "Очень хорошая стойкость к растворителю",
                            "Очень хорошее покрытие"
                           ],
                           Uses:[
                               "Строительные краски и покрытия",
                               "Глянцевые и полуматовые краски",
                               "Прокровные (непигментированные) лаки, лаки и политура",
                               "Аэрозольные баллончики и распылители краски"
                           ],
                           Table:[
                            {
                                propertis:"Содержание масла (прибл.)",
                                unit:"% веса",
                                value:"54",
                                testMethod:"Расчеты"
                            },
                            {
                                propertis:"Цвет",
                                unit:"Гарднер",
                                value:"<2",
                                testMethod:"ASTM D1544"
                            },
                            {
                                propertis:"Вязкость (при 25°C)",
                                unit:"Ст",
                                value:"150-400",
                                testMethod:"ASTM D1545"
                            },
                            {
                                propertis:"Кислотное число",
                                unit:"мг KOH/г",
                                value:"10>",
                                testMethod:"ASTM D1639"
                            },
                            {
                                propertis:"Сухой остаток",
                                unit:"% веса",
                                value:"70±1",
                                testMethod:"ASTM D1259"
                            },
                            {
                                propertis:"Плотность (при 23°C)",
                                unit:"г/см³",
                                value:"0.9734",
                                testMethod:"ASTM D1475"
                            },
                            {
                                propertis:"Температура вспышки (в открытом тигле)",
                                unit:"℃",
                                value:"30",
                                testMethod:"ASTM D92"
                            }
                        ],
                           safety:"Следует соблюдать стандартные меры безопасности транспортировки алкидных смол. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                           Packaging:"190 кг (нетто) в металлических бочках.",
                           Storage:"Хранить в прохладном месте при температуре ниже 25 °C и вдали от влаги и прямых солнечных лучей.",
                           Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
                          }
                   
                       },
                       BUP614 :{
                           fa:{
                            product:"رزین پلی استر غیر اشباع",
                            name:"BUP614",
                            pdf:"BUP614-Fa.pdf",
                            Description:"BUP 614 رزین پلی استر غیر اشباع بر پایه اورتوفتالیک و غیرفعال، دارای رنگ کم، گرانروی متوسط و ویژگی­‌های مکانیکی خوب جهت پخت در دمای محیط به کمک متیل اتیل کتون پراکسید است.",
                            Characteristics:[
                             "رنگ کم",
                            "گرانروی متوسط",
                            "ویژگی­‌های مکانیکی خوب",
                            "چسبندگی خوب به الیاف شیشه­"
   
                            ],
                            Uses:[
                              "لایه­‌گذاری دستی",
                              "ساخت ورق",
                              "کاربردهای عمومی"
                            ],
                            Table: [
                                {
                                    propertis:"شکل ظاهری",
                                    unit:"-",
                                    value:"شفاف",
                                    testMethod:"-"
                                },
                                {
                                    propertis:"رنگ",
                                    unit:"Gardner",
                                    value:"1>",
                                    testMethod:"ASTM D1544"
                                },
                                {
                                    propertis:"گرانروی (℃25)",
                                    unit:"mPa.s (cP)",
                                    value:"280-480",
                                    testMethod:"ISO 2555"
                                },
                                {
                                    propertis:"چگالی  (℃23)",
                                    unit:"g/cm³",
                                    value:"1.1477",
                                    testMethod:"ASTM D1475"
                                },
                                {
                                    propertis:"عدد اسیدی",
                                    unit:"mg KOH/g",
                                    value:"22>",
                                    testMethod:"ASTM D1639"
                                },
                                {
                                    propertis:"درصد جامد",
                                    unit:"% wt",
                                    value:"64±2",
                                    testMethod:"ASTM D1259"
                                },
                                {
                                    propertis:"*زمان ژل شدن",
                                    unit:"min",
                                    value:"20-35",
                                    testMethod:"ASTM D2471"
                                },
                                {
                                    propertis:"زمان پخت",
                                    unit:"min",
                                    value:"12-18",
                                    testMethod:"ASTM D2471"
                                },
                                {
                                    propertis:"دمای بیشینه گرمازایی (پیک اگزوترم)",
                                    unit:"℃",
                                    value:"190>",
                                    testMethod:"ASTM D2471"
                                },
                                {
                                    propertis:"جذب آب",
                                    unit:"% wt",
                                    value:"0.3>",
                                    testMethod:"ISO 62"
                                },
                                {
                                    propertis:"نقطه اشتعال (جام روباز)",
                                    unit:"℃",
                                    value:"23",
                                    testMethod:"ASTM D92"
                                },
                                {
                                    propertis:"استحکام کششی",
                                    unit:"MPa",
                                    value:"50<",
                                    testMethod:"ISO 527-2"
                                },
                                {
                                    propertis:"ازدیاد طول",
                                    unit:"%",
                                    value:"11.26",
                                    testMethod:"ISO 527-2"
                                },
                                {
                                    propertis:"مدول کششی",
                                    unit:"MPa",
                                    value:"293",
                                    testMethod:"ISO 527-2"
                                },
                                {
                                    propertis:"استحکام خمشی",
                                    unit:"MPa",
                                    value:"95<",
                                    testMethod:"ISO 178"
                                },
                                {
                                    propertis:"مدول خمشی",
                                    unit:"MPa",
                                    value:"1387",
                                    testMethod:"ISO 178"
                                },
                                {
                                    propertis:"دمای خمش گرمایی",
                                    unit:"℃",
                                    value:"55<",
                                    testMethod:"ASTM D648"
                                },
                                {
                                    propertis:"سختی ( بارکول)",
                                    unit:"-",
                                    value:"35<",
                                    testMethod:"ASTM D2583"
                                },
                                {
                                    propertis:"جمع شدگی طولی  (L/L∆)",
                                    unit:"%",
                                    value:"1>",
                                    testMethod:"ASTM D2566"
                                }
                            ],
                            safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های پلی استر غیر اشباع رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                            Packaging:"225 کیلوگرم (خالص) در بشکه‌های فولادی.",
                            Storage:"محصول را در محل خنک و در دمای کمتر از ℃25 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید. در صورت رعایت شرایط نامبرده، عمر مفید انبارداری محصول حداقل 6 ماه از زمان تحویل است.",
                            Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
                           },
                           en:{
                            product:"Unsaturated Polyester Resin",
                            name:"BUP614",
                            pdf:"BUP614-En.pdf",
                            Description:"BUP 614 is an un-promoted orthophthalic based unsaturated polyester resin with low color, medium viscosity and good mechanical properties for ambient temperature cure with MEK peroxide.",
                            Characteristics:[
                              "Low color",
                              "Medium viscosity",
                              "Good mechanical properties",
                              "Good adhesion to glass fiber"
      
                            ],
                            Uses:[
                               "Hand lay-up",
                               "Sheet fabrication",
                               "General purpose applications"
            
                            ],
                            Table: [
                                {
                                    propertis:"Appearance",
                                    unit:"-",
                                    value:"Clear",
                                    testMethod:"-"
                                },
                                {
                                    propertis:"Color",
                                    unit:"Gardner",
                                    value:"1>",
                                    testMethod:"ASTM D1544"
                                },
                                {
                                    propertis:"Viscosity (at 25°C)",
                                    unit:"mPa.s (cP)",
                                    value:"280-480",
                                    testMethod:"ISO 2555"
                                },
                                {
                                    propertis:"Density (at 23°C)",
                                    unit:"g/cm³",
                                    value:"1.1477",
                                    testMethod:"ASTM D1475"
                                },
                                {
                                    propertis:"Acid number",
                                    unit:"mg KOH/g",
                                    value:"22>",
                                    testMethod:"ASTM D1639"
                                },
                                {
                                    propertis:"Solid content",
                                    unit:"wt %",
                                    value:"64±2",
                                    testMethod:"ASTM D1259"
                                },
                                {
                                    propertis:"Gel time*",
                                    unit:"min",
                                    value:"20-35",
                                    testMethod:"ASTM D2471"
                                },
                                {
                                    propertis:"Curing time",
                                    unit:"min",
                                    value:"12-18",
                                    testMethod:"ASTM D2471"
                                },
                                {
                                    propertis:"Peak exothermic temperature",
                                    unit:"℃",
                                    value:"190>",
                                    testMethod:"ASTM D2471"
                                },
                                {
                                    propertis:"Water absorption",
                                    unit:"% wt ",
                                    value:"0.3>",
                                    testMethod:"ISO 62"
                                },
                                {
                                    propertis:"Flash point (open cup)",
                                    unit:"℃",
                                    value:"23",
                                    testMethod:"ASTM D92"
                                },
                                {
                                    propertis:"Tensile strength",
                                    unit:"MPa",
                                    value:"50<",
                                    testMethod:"ISO 527-2"
                                },
                                {
                                    propertis:"Tensile elongation",
                                    unit:"%",
                                    value:"11.26",
                                    testMethod:"ISO 527-2"
                                },
                                {
                                    propertis:"Tensile modulus",
                                    unit:"MPa",
                                    value:"293",
                                    testMethod:"ISO 527-2"
                                },
                                {
                                    propertis:"Flexural strength",
                                    unit:"MPa",
                                    value:"95<",
                                    testMethod:"ISO 178"
                                },
                                {
                                    propertis:"Flexural modulus",
                                    unit:"MPa",
                                    value:"1387",
                                    testMethod:"ISO 178"
                                },
                                {
                                    propertis:"Heat distortion temperature (HDT)",
                                    unit:"℃",
                                    value:"55<",
                                    testMethod:"ASTM D648"
                                },
                                {
                                    propertis:"Hardness (Barcol))",
                                    unit:"-",
                                    value:"35<",
                                    testMethod:"ASTM D2583"
                                },
                                {
                                    propertis:"Linear shrinkage (∆L/L)",
                                    unit:"%",
                                    value:"1>",
                                    testMethod:"ASTM D2566"
                                }
                            ],
                            safety:"The usual protective measures employed during the handling of Unsaturated Polyester Resins should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                            Packaging:"225 kg (net) in steel drums.",
                            Storage:"Store in a cool place below 25 °C and away from moisture and direct sunlight. Under above mentioned storage conditions, the shelf life of the resin will be at least 6 months ex-works.",
                            Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
                           },
                           ru:{
                            product:"Ненасыщенная полиэфирная смола",
                            name:"BUP614",
                            pdf:"TDS-BUP-614_RU.pdf",
                            Description:"BUP 614 немодифицированная ненасыщенная полиэфирная смола на ортофталевой основе, со средней вязкостью, ограниченной усадкой и хорошими механическими свойствами для отверждения при комнатной температуре с помощью MEK пероксида.",
                            Characteristics:[
                                "Низкая пигментация",
                                "Средняя вязкость",
                                "Хорошие механические свойства",
                                "Хорошая адгезия к стекловолокну"
                            ],
                            Uses:[
                                "Ручное формования",
                                "Производство листовых материалов",
                                "Универсальные применения"
                            ],
                            Table: [
                                {
                                    propertis:"Внешний вид",
                                    unit:"-",
                                    value:"Прозрачный",
                                    testMethod:"-"
                                },
                                {
                                    propertis:"Цвет",
                                    unit:"Гарднер",
                                    value:"1>",
                                    testMethod:"ASTM D1544"
                                },
                                {
                                    propertis:"Вязкость (при 25°C)",
                                    unit:"мПа.с (сантипуаз)",
                                    value:"280-480",
                                    testMethod:"ISO 2555"
                                },
                                {
                                    propertis:"Плотность (при 23°C)",
                                    unit:"г/см³",
                                    value:"1.1477",
                                    testMethod:"ASTM D1475"
                                },
                                {
                                    propertis:"Кислотное число",
                                    unit:"мг KOH/г",
                                    value:"22>",
                                    testMethod:"ASTM D1639"
                                },
                                {
                                    propertis:"Сухой остаток",
                                    unit:"% веса",
                                    value:"64±2",
                                    testMethod:"ASTM D1259"
                                },
                                {
                                    propertis:"Время гелеобразования*",
                                    unit:"минуты",
                                    value:"20-35",
                                    testMethod:"ASTM D2471"
                                },
                                {
                                    propertis:"Время отверждения",
                                    unit:"минуты",
                                    value:"12-18",
                                    testMethod:"ASTM D2471"
                                },
                                {
                                    propertis:"Пик на экзотермической кривой",
                                    unit:"℃",
                                    value:"190>",
                                    testMethod:"ASTM D2471"
                                },
                                {
                                    propertis:"Влагопоглощение",
                                    unit:"% веса",
                                    value:"0.3>",
                                    testMethod:"ISO 62"
                                },
                                {
                                    propertis:"Температура вспышки (в откр. тигле)",
                                    unit:"℃",
                                    value:"23",
                                    testMethod:"ASTM D92"
                                },
                                {
                                    propertis:"Прочность на растяжение/разрыв",
                                    unit:"МПa",
                                    value:"50<",
                                    testMethod:"ISO 527-2"
                                },
                                {
                                    propertis:"Удлинение при растяжении",
                                    unit:"%",
                                    value:"11.26",
                                    testMethod:"ISO 527-2"
                                },
                                {
                                    propertis:"Удлинение при растяжении",
                                    unit:"МПa",
                                    value:"293",
                                    testMethod:"ISO 527-2"
                                },
                                {
                                    propertis:"Прочность на изгиб",
                                    unit:"МПa",
                                    value:"95<",
                                    testMethod:"ISO 178"
                                },
                                {
                                    propertis:"Модуль упругости при изгибе",
                                    unit:"МПa",
                                    value:"1387",
                                    testMethod:"ISO 178"
                                },
                                {
                                    propertis:"Температура допустимой деформации",
                                    unit:"℃",
                                    value:"55<",
                                    testMethod:"ASTM D648"
                                },
                                {
                                    propertis:"Твердость (по Барколу)",
                                    unit:"-",
                                    value:"35<",
                                    testMethod:"ASTM D2583"
                                },
                                {
                                    propertis:"Линейная усадка (∆L/L)",
                                    unit:"%",
                                    value:"1>",
                                    testMethod:"ASTM D2566"
                                }
                            ],
                            safety:"Следует соблюдать стандартные меры безопасности транспортировки ненасыщенных полиэфирных смол. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                            Packaging:"225 кг (нетто) в металлических бочках.",
                            Storage:"Хранить в прохладном месте при температуре ниже 25 °C и вдали от влаги и прямых солнечных лучей. При соблюдении вышеуказанных условий хранения срок годности смолы составляет не менее 6 месяцев с даты выпуска.",
                            Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
                           }
                    
                        },
                        BUP615 :{
                            fa:{
                             product:"رزین پلی استر غیر اشباع",
                             name:"BUP615",
                             pdf:"BUP615-Fa.pdf",
                             Description:"BUP 615 رزین پلی استر غیر اشباع بر پایه اورتوفتالیک و غیرفعال، دارای رنگ کم، گرانروی متوسط و ویژگی­‌های مکانیکی خوب جهت پخت در دمای محیط به کمک متیل اتیل کتون پراکسید است.",
                             Characteristics:[
                              "رنگ کم",
                             "گرانروی متوسط",
                             "ویژگی­‌های مکانیکی خوب"
    
                             ],
                             Uses:[
                               "لایه­‌گذاری دستی",
                               "ساخت مبلمان شهری",
                               "کاربردهای عمومی"
                             ],
                             Table: [
                                {
                                    propertis:"شکل ظاهری",
                                    unit:"-",
                                    value:"شفاف",
                                    testMethod:"-"
                                },
                                {
                                    propertis:"رنگ",
                                    unit:"Gardner",
                                    value:"2>",
                                    testMethod:"ASTM D1544"
                                },
                                {
                                    propertis:"گرانروی (℃25)",
                                    unit:"mPa.s (cP)",
                                    value:"380-480",
                                    testMethod:"ISO 2555"
                                },
                                {
                                    propertis:"چگالی  (℃23)",
                                    unit:"g/cm³",
                                    value:"1.1197",
                                    testMethod:"ASTM D1475"
                                },
                                {
                                    propertis:"عدد اسیدی",
                                    unit:"mg KOH/g",
                                    value:"10-13",
                                    testMethod:"ASTM D1639"
                                },
                                {
                                    propertis:"درصد جامد",
                                    unit:"% wt",
                                    value:"63±2",
                                    testMethod:"ASTM D1259"
                                },
                                {
                                    propertis:"*زمان ژل شدن",
                                    unit:"min",
                                    value:"11-25",
                                    testMethod:"ASTM D2471"
                                },
                                {
                                    propertis:"زمان پخت",
                                    unit:"min",
                                    value:"9-15",
                                    testMethod:"ASTM D2471"
                                },
                                {
                                    propertis:"دمای بیشینه گرمازایی (پیک اگزوترم)",
                                    unit:"℃",
                                    value:"190>",
                                    testMethod:"ASTM D2471"
                                },
                                {
                                    propertis:"جذب آب",
                                    unit:"% wt",
                                    value:"0.3>",
                                    testMethod:"ISO 62"
                                },
                                {
                                    propertis:"نقطه اشتعال (جام روباز)",
                                    unit:"℃",
                                    value:"19",
                                    testMethod:"ASTM D92"
                                },
                                {
                                    propertis:"استحکام کششی",
                                    unit:"MPa",
                                    value:"55<",
                                    testMethod:"ISO 527-2"
                                },
                                {
                                    propertis:"ازدیاد طول",
                                    unit:"%",
                                    value:"10.61",
                                    testMethod:"ISO 527-2"
                                },
                                {
                                    propertis:"مدول کششی",
                                    unit:"MPa",
                                    value:"460",
                                    testMethod:"ISO 527-2"
                                },
                                {
                                    propertis:"استحکام خمشی",
                                    unit:"MPa",
                                    value:"100<",
                                    testMethod:"ISO 178"
                                },
                                {
                                    propertis:"مدول خمشی",
                                    unit:"MPa",
                                    value:"2409",
                                    testMethod:"ISO 178"
                                },
                                {
                                    propertis:"دمای خمش گرمایی",
                                    unit:"℃",
                                    value:"55<",
                                    testMethod:"ASTM D648"
                                },
                                {
                                    propertis:"سختی ( بارکول)",
                                    unit:"-",
                                    value:"37<",
                                    testMethod:"ASTM D2583"
                                },
                                {
                                    propertis:"جمع شدگی طولی  (L/L∆)",
                                    unit:"%",
                                    value:"1.5>",
                                    testMethod:"ASTM D2566"
                                }
                            ],
                             safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های پلی استر غیر اشباع رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                             Packaging:"225 کیلوگرم (خالص) در بشکه‌های فولادی.",
                             Storage:"محصول را در محل خنک و در دمای کمتر از ℃25 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید. در صورت رعایت شرایط نامبرده، عمر مفید انبارداری محصول حداقل 6 ماه از زمان تحویل است.",
                             Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
                            },
                            en:{
                             product:"Unsaturated Polyester Resin",
                             name:"BUP615",
                             pdf:"BUP615-En.pdf",
                             Description:"BUP 615 is an un-promoted orthophthalic based unsaturated polyester resin with low color, medium viscosity and good mechanical properties for ambient temperature cure with MEK peroxide.",
                             Characteristics:[
                               "Low color",
                               "Medium viscosity",
                               "Good mechanical properties"
       
                             ],
                             Uses:[
                                "Hand lay-up",
                                "Urban furniture fabrication",
                                "General purpose applications"
             
                             ],
                             Table: [
                                {
                                    propertis:"Appearance",
                                    unit:"-",
                                    value:"Clear",
                                    testMethod:"-"
                                },
                                {
                                    propertis:"Color",
                                    unit:"Gardner",
                                    value:"2>",
                                    testMethod:"ASTM D1544"
                                },
                                {
                                    propertis:"Viscosity (at 25°C)",
                                    unit:"mPa.s (cP)",
                                    value:"380-480",
                                    testMethod:"ISO 2555"
                                },
                                {
                                    propertis:"Density (at 23°C)",
                                    unit:"g/cm³",
                                    value:"1.1197",
                                    testMethod:"ASTM D1475"
                                },
                                {
                                    propertis:"Acid number",
                                    unit:"mg KOH/g",
                                    value:"10-13",
                                    testMethod:"ASTM D1639"
                                },
                                {
                                    propertis:"Solid content",
                                    unit:"wt %",
                                    value:"63±2",
                                    testMethod:"ASTM D1259"
                                },
                                {
                                    propertis:"Gel time*",
                                    unit:"min",
                                    value:"11-25",
                                    testMethod:"ASTM D2471"
                                },
                                {
                                    propertis:"Curing time",
                                    unit:"min",
                                    value:"9-15",
                                    testMethod:"ASTM D2471"
                                },
                                {
                                    propertis:"Peak exothermic temperature",
                                    unit:"℃",
                                    value:"190>",
                                    testMethod:"ASTM D2471"
                                },
                                {
                                    propertis:"Water absorption",
                                    unit:"% wt ",
                                    value:"0.3>",
                                    testMethod:"ISO 62"
                                },
                                {
                                    propertis:"Flash point (open cup)",
                                    unit:"℃",
                                    value:"19",
                                    testMethod:"ASTM D92"
                                },
                                {
                                    propertis:"Tensile strength",
                                    unit:"MPa",
                                    value:"55<",
                                    testMethod:"ISO 527-2"
                                },
                                {
                                    propertis:"Tensile elongation",
                                    unit:"%",
                                    value:"10.61",
                                    testMethod:"ISO 527-2"
                                },
                                {
                                    propertis:"Tensile modulus",
                                    unit:"MPa",
                                    value:"460",
                                    testMethod:"ISO 527-2"
                                },
                                {
                                    propertis:"Flexural strength",
                                    unit:"MPa",
                                    value:"100<",
                                    testMethod:"ISO 178"
                                },
                                {
                                    propertis:"Flexural modulus",
                                    unit:"MPa",
                                    value:"2409",
                                    testMethod:"ISO 178"
                                },
                                {
                                    propertis:"Heat distortion temperature (HDT)",
                                    unit:"℃",
                                    value:"55<",
                                    testMethod:"ASTM D648"
                                },
                                {
                                    propertis:"Hardness (Barcol))",
                                    unit:"-",
                                    value:"37<",
                                    testMethod:"ASTM D2583"
                                },
                                {
                                    propertis:"Linear shrinkage (∆L/L)",
                                    unit:"%",
                                    value:"1.5>",
                                    testMethod:"ASTM D2566"
                                }
                            ],
                             safety:"The usual protective measures employed during the handling of Unsaturated Polyester Resins should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                             Packaging:"225 kg (net) in steel drums.",
                             Storage:"Store in a cool place below 25 °C and away from moisture and direct sunlight. Under above mentioned storage conditions, the shelf life of the resin will be at least 6 months ex-works.",
                             Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
                            },
                            ru:{
                             product:"Ненасыщенная полиэфирная смола",
                             name:"BUP615",
                             pdf:"TDS-BUP-615_RU.pdf",
                             Description:"BUP 615 – слабоокрашенная немодифицированная ненасыщенная полиэфирная смола на ортофталевой основе, со средней вязкостью, ограниченной усадкой и хорошими механическими свойствами для отверждения при комнатной температуре с помощью MEK пероксида.",
                             Characteristics:[
                                 "Низкая пигментация",
                                 "Средняя вязкость",
                                 "Хорошие механические свойства"
                             ],
                             Uses:[
                                 "Ручное формования",
                                 "Производство урбанистической мебели",
                                 "Универсальные применения"
                             ],
                             Table: [
                                {
                                    propertis:"Внешний вид",
                                    unit:"-",
                                    value:"Прозрачный",
                                    testMethod:"-"
                                },
                                {
                                    propertis:"Цвет",
                                    unit:"Гарднер",
                                    value:"2>",
                                    testMethod:"ASTM D1544"
                                },
                                {
                                    propertis:"Вязкость (при 25°C)",
                                    unit:"мПа.с (сантипуаз)",
                                    value:"380-480",
                                    testMethod:"ISO 2555"
                                },
                                {
                                    propertis:"Плотность (при 23°C)",
                                    unit:"г/см³",
                                    value:"1.1197",
                                    testMethod:"ASTM D1475"
                                },
                                {
                                    propertis:"Кислотное число",
                                    unit:"мг KOH/г",
                                    value:"10-13",
                                    testMethod:"ASTM D1639"
                                },
                                {
                                    propertis:"Сухой остаток",
                                    unit:"% веса",
                                    value:"63±2",
                                    testMethod:"ASTM D1259"
                                },
                                {
                                    propertis:"Время гелеобразования*",
                                    unit:"минуты",
                                    value:"11-25",
                                    testMethod:"ASTM D2471"
                                },
                                {
                                    propertis:"Время отверждения",
                                    unit:"минуты",
                                    value:"9-15",
                                    testMethod:"ASTM D2471"
                                },
                                {
                                    propertis:"Пик на экзотермической кривой",
                                    unit:"℃",
                                    value:"190>",
                                    testMethod:"ASTM D2471"
                                },
                                {
                                    propertis:"Влагопоглощение",
                                    unit:"% веса",
                                    value:"0.3>",
                                    testMethod:"ISO 62"
                                },
                                {
                                    propertis:"Температура вспышки (в откр. тигле)",
                                    unit:"℃",
                                    value:"19",
                                    testMethod:"ASTM D92"
                                },
                                {
                                    propertis:"Прочность на растяжение/разрыв",
                                    unit:"МПa",
                                    value:"55<",
                                    testMethod:"ISO 527-2"
                                },
                                {
                                    propertis:"Удлинение при растяжении",
                                    unit:"%",
                                    value:"10.61",
                                    testMethod:"ISO 527-2"
                                },
                                {
                                    propertis:"Удлинение при растяжении",
                                    unit:"МПa",
                                    value:"460",
                                    testMethod:"ISO 527-2"
                                },
                                {
                                    propertis:"Прочность на изгиб",
                                    unit:"МПa",
                                    value:"100<",
                                    testMethod:"ISO 178"
                                },
                                {
                                    propertis:"Модуль упругости при изгибе",
                                    unit:"МПa",
                                    value:"2409",
                                    testMethod:"ISO 178"
                                },
                                {
                                    propertis:"Температура допустимой деформации",
                                    unit:"℃",
                                    value:"55<",
                                    testMethod:"ASTM D648"
                                },
                                {
                                    propertis:"Твердость (по Барколу)",
                                    unit:"-",
                                    value:"37<",
                                    testMethod:"ASTM D2583"
                                },
                                {
                                    propertis:"Линейная усадка (∆L/L)",
                                    unit:"%",
                                    value:"1.5>",
                                    testMethod:"ASTM D2566"
                                }
                            ],
                             safety:"Следует соблюдать стандартные меры безопасности транспортировки ненасыщенных полиэфирных смол. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                             Packaging:"225 кг (нетто) в металлических бочках.",
                             Storage:"Хранить в прохладном месте при температуре ниже 25 °C и вдали от влаги и прямых солнечных лучей. При соблюдении вышеуказанных условий хранения срок годности смолы составляет не менее 6 месяцев с даты выпуска.",
                             Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
                            }
                     
                         },
                         BUP617 :{
                             fa:{
                              product:"رزین پلی استر غیر اشباع",
                              name:"BUP617",
                              pdf:"BUP617-Fa.pdf",
                              Description:"BUP 617 رزین پلی استر غیر اشباع بر پایه اورتوفتالیک و غیرفعال، دارای رنگ کم، گرانروی متوسط و ویژگی­‌های مکانیکی خوب جهت پخت در دمای محیط به کمک متیل اتیل کتون پراکسید است.",
                              Characteristics:[
                               "رنگ کم",
                              "گرانروی متوسط",
                              "ویژگی­‌های مکانیکی خوب",
                              "چسبندگی خوب به الیاف شیشه­",
                              "فیلرخوری متوسط"
     
                              ],
                              Uses:[
                                "قالب­‌گیری مدل­‌های شفاف تزئینی",
                                "قالب­‌گیری قطعات بسیار شفاف",
                                "کاربردهای عمومی"
                              ],
                              Table: [
                                {
                                    propertis:"شکل ظاهری",
                                    unit:"-",
                                    value:"شفاف",
                                    testMethod:"-"
                                },
                                {
                                    propertis:"رنگ",
                                    unit:"Gardner",
                                    value:"1>",
                                    testMethod:"ASTM D1544"
                                },
                                {
                                    propertis:"گرانروی (℃25)",
                                    unit:"mPa.s (cP)",
                                    value:"380-480",
                                    testMethod:"ISO 2555"
                                },
                                {
                                    propertis:"چگالی  (℃23)",
                                    unit:"g/cm³",
                                    value:"1.1476",
                                    testMethod:"ASTM D1475"
                                },
                                {
                                    propertis:"عدد اسیدی",
                                    unit:"mg KOH/g",
                                    value:"20-30",
                                    testMethod:"ASTM D1639"
                                },
                                {
                                    propertis:"درصد جامد",
                                    unit:"% wt",
                                    value:"62±2",
                                    testMethod:"ASTM D1259"
                                },
                                {
                                    propertis:"*زمان ژل شدن",
                                    unit:"min",
                                    value:"8-25",
                                    testMethod:"ASTM D2471"
                                },
                                {
                                    propertis:"زمان پخت",
                                    unit:"min",
                                    value:"10-20",
                                    testMethod:"ASTM D2471"
                                },
                                {
                                    propertis:"دمای بیشینه گرمازایی (پیک اگزوترم)",
                                    unit:"℃",
                                    value:"190>",
                                    testMethod:"ASTM D2471"
                                },
                                {
                                    propertis:"جذب آب",
                                    unit:"% wt",
                                    value:"0.3>",
                                    testMethod:"ISO 62"
                                },
                                {
                                    propertis:"نقطه اشتعال (جام روباز)",
                                    unit:"℃",
                                    value:"17.3",
                                    testMethod:"ASTM D92"
                                },
                                {
                                    propertis:"استحکام کششی",
                                    unit:"MPa",
                                    value:"45<",
                                    testMethod:"ISO 527-2"
                                },
                                {
                                    propertis:"ازدیاد طول",
                                    unit:"%",
                                    value:"9.12",
                                    testMethod:"ISO 527-2"
                                },
                                {
                                    propertis:"مدول کششی",
                                    unit:"MPa",
                                    value:"513",
                                    testMethod:"ISO 527-2"
                                },
                                {
                                    propertis:"استحکام خمشی",
                                    unit:"MPa",
                                    value:"100<",
                                    testMethod:"ISO 178"
                                },
                                {
                                    propertis:"مدول خمشی",
                                    unit:"MPa",
                                    value:"3484",
                                    testMethod:"ISO 178"
                                },
                                {
                                    propertis:"دمای خمش گرمایی",
                                    unit:"℃",
                                    value:"60<",
                                    testMethod:"ASTM D648"
                                },
                                {
                                    propertis:"سختی ( بارکول)",
                                    unit:"-",
                                    value:"40<",
                                    testMethod:"ASTM D2583"
                                },
                                {
                                    propertis:"جمع شدگی طولی  (L/L∆)",
                                    unit:"%",
                                    value:"1>",
                                    testMethod:"ASTM D2566"
                                }
                            ],
                              safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های پلی استر غیر اشباع رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                              Packaging:"225 کیلوگرم (خالص) در بشکه‌های فولادی.",
                              Storage:"محصول را در محل خنک و در دمای کمتر از ℃25 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید. در صورت رعایت شرایط نامبرده، عمر مفید انبارداری محصول حداقل 6 ماه از زمان تحویل است.",
                              Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
                             },
                             en:{
                              product:"Unsaturated Polyester Resin",
                              name:"BUP617",
                              pdf:"BUP617-En.pdf",
                              Description:"BUP 617 is an un-promoted orthophthalic based unsaturated polyester resin with low color, medium viscosity and good mechanical properties for ambient temperature cure with MEK peroxide.",
                              Characteristics:[
                                "Low color",
                                "Medium viscosity",
                                "Good mechanical properties",
                                "Medium filler and extender binding capacity"
        
                              ],
                              Uses:[
                                 "Hand lay-up",
                                 "Urban furniture fabrication",
                                 "General purpose applications"
              
                              ],
                              Table: [
                                {
                                    propertis:"Appearance",
                                    unit:"-",
                                    value:"Clear",
                                    testMethod:"-"
                                },
                                {
                                    propertis:"Color",
                                    unit:"Gardner",
                                    value:"1>",
                                    testMethod:"ASTM D1544"
                                },
                                {
                                    propertis:"Viscosity (at 25°C)",
                                    unit:"mPa.s (cP)",
                                    value:"380-480",
                                    testMethod:"ISO 2555"
                                },
                                {
                                    propertis:"Density (at 23°C)",
                                    unit:"g/cm³",
                                    value:"1.1476",
                                    testMethod:"ASTM D1475"
                                },
                                {
                                    propertis:"Acid number",
                                    unit:"mg KOH/g",
                                    value:"20-30",
                                    testMethod:"ASTM D1639"
                                },
                                {
                                    propertis:"Solid content",
                                    unit:"wt %",
                                    value:"62±2",
                                    testMethod:"ASTM D1259"
                                },
                                {
                                    propertis:"Gel time*",
                                    unit:"min",
                                    value:"8-25",
                                    testMethod:"ASTM D2471"
                                },
                                {
                                    propertis:"Curing time",
                                    unit:"min",
                                    value:"10-20",
                                    testMethod:"ASTM D2471"
                                },
                                {
                                    propertis:"Peak exothermic temperature",
                                    unit:"℃",
                                    value:"190>",
                                    testMethod:"ASTM D2471"
                                },
                                {
                                    propertis:"Water absorption",
                                    unit:"% wt ",
                                    value:"0.3>",
                                    testMethod:"ISO 62"
                                },
                                {
                                    propertis:"Flash point (open cup)",
                                    unit:"℃",
                                    value:"17.3",
                                    testMethod:"ASTM D92"
                                },
                                {
                                    propertis:"Tensile strength",
                                    unit:"MPa",
                                    value:"45<",
                                    testMethod:"ISO 527-2"
                                },
                                {
                                    propertis:"Tensile elongation",
                                    unit:"%",
                                    value:"9.12",
                                    testMethod:"ISO 527-2"
                                },
                                {
                                    propertis:"Tensile modulus",
                                    unit:"MPa",
                                    value:"513",
                                    testMethod:"ISO 527-2"
                                },
                                {
                                    propertis:"Flexural strength",
                                    unit:"MPa",
                                    value:"100<",
                                    testMethod:"ISO 178"
                                },
                                {
                                    propertis:"Flexural modulus",
                                    unit:"MPa",
                                    value:"3484",
                                    testMethod:"ISO 178"
                                },
                                {
                                    propertis:"Heat distortion temperature (HDT)",
                                    unit:"℃",
                                    value:"60<",
                                    testMethod:"ASTM D648"
                                },
                                {
                                    propertis:"Hardness (Barcol))",
                                    unit:"-",
                                    value:"40<",
                                    testMethod:"ASTM D2583"
                                },
                                {
                                    propertis:"Linear shrinkage (∆L/L)",
                                    unit:"%",
                                    value:"1>",
                                    testMethod:"ASTM D2566"
                                }
                            ],
                              safety:"The usual protective measures employed during the handling of Unsaturated Polyester Resins should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                              Packaging:"225 kg (net) in steel drums.",
                              Storage:"Store in a cool place below 25 °C and away from moisture and direct sunlight. Under above mentioned storage conditions, the shelf life of the resin will be at least 6 months ex-works.",
                              Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
                             },
                             ru:{
                              product:"Ненасыщенная полиэфирная смола",
                              name:"BUP617",
                              pdf:"TDS-BUP-617_RU.pdf",
                              Description:"BUP 617 – слабоокрашенная немодифицированная ненасыщенная полиэфирная смола на ортофталевой основе, со средней вязкостью и хорошими механическими свойствами для отверждения при комнатной температуре с помощью MEK пероксида.",
                              Characteristics:[
                                  "Низкая пигментация",
                                  "Средняя вязкость",
                                  "Хорошая адгезия к стекловолокну",
                                  "Хорошие механические свойства",
                                  "Средняя связующая способность наполнителей и экстендеров"
                              ],
                              Uses:[
                                  "Производство закладных деталей",
                                  "Высокопрозрачное литье",
                                  "Универсальные применения"
                              ],
                              Table: [
                                {
                                    propertis:"Внешний вид",
                                    unit:"-",
                                    value:"Прозрачный",
                                    testMethod:"-"
                                },
                                {
                                    propertis:"Цвет",
                                    unit:"Гарднер",
                                    value:"1>",
                                    testMethod:"ASTM D1544"
                                },
                                {
                                    propertis:"Вязкость (при 25°C)",
                                    unit:"мПа.с (сантипуаз)",
                                    value:"380-480",
                                    testMethod:"ISO 2555"
                                },
                                {
                                    propertis:"Плотность (при 23°C)",
                                    unit:"г/см³",
                                    value:"1.1476",
                                    testMethod:"ASTM D1475"
                                },
                                {
                                    propertis:"Кислотное число",
                                    unit:"мг KOH/г",
                                    value:"20-30",
                                    testMethod:"ASTM D1639"
                                },
                                {
                                    propertis:"Сухой остаток",
                                    unit:"% веса",
                                    value:"62±2",
                                    testMethod:"ASTM D1259"
                                },
                                {
                                    propertis:"Время гелеобразования*",
                                    unit:"минуты",
                                    value:"8-25",
                                    testMethod:"ASTM D2471"
                                },
                                {
                                    propertis:"Время отверждения",
                                    unit:"минуты",
                                    value:"10-20",
                                    testMethod:"ASTM D2471"
                                },
                                {
                                    propertis:"Пик на экзотермической кривой",
                                    unit:"℃",
                                    value:"190>",
                                    testMethod:"ASTM D2471"
                                },
                                {
                                    propertis:"Влагопоглощение",
                                    unit:"% веса",
                                    value:"0.3>",
                                    testMethod:"ISO 62"
                                },
                                {
                                    propertis:"Температура вспышки (в откр. тигле)",
                                    unit:"℃",
                                    value:"17.3",
                                    testMethod:"ASTM D92"
                                },
                                {
                                    propertis:"Прочность на растяжение/разрыв",
                                    unit:"МПa",
                                    value:"45<",
                                    testMethod:"ISO 527-2"
                                },
                                {
                                    propertis:"Удлинение при растяжении",
                                    unit:"%",
                                    value:"9.12",
                                    testMethod:"ISO 527-2"
                                },
                                {
                                    propertis:"Удлинение при растяжении",
                                    unit:"МПa",
                                    value:"513",
                                    testMethod:"ISO 527-2"
                                },
                                {
                                    propertis:"Прочность на изгиб",
                                    unit:"МПa",
                                    value:"100<",
                                    testMethod:"ISO 178"
                                },
                                {
                                    propertis:"Модуль упругости при изгибе",
                                    unit:"МПa",
                                    value:"3484",
                                    testMethod:"ISO 178"
                                },
                                {
                                    propertis:"Температура допустимой деформации",
                                    unit:"℃",
                                    value:"60<",
                                    testMethod:"ASTM D648"
                                },
                                {
                                    propertis:"Твердость (по Барколу)",
                                    unit:"-",
                                    value:"40<",
                                    testMethod:"ASTM D2583"
                                },
                                {
                                    propertis:"Линейная усадка (∆L/L)",
                                    unit:"%",
                                    value:"1>",
                                    testMethod:"ASTM D2566"
                                }
                            ],
                              safety:"Следует соблюдать стандартные меры безопасности транспортировки ненасыщенных полиэфирных смол. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                              Packaging:"225 кг (нетто) в металлических бочках.",
                              Storage:"Хранить в прохладном месте при температуре ниже 25 °C и вдали от влаги и прямых солнечных лучей. При соблюдении вышеуказанных условий хранения срок годности смолы составляет не менее 6 месяцев с даты выпуска.",
                              Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
                             }
                      
                          },
                          BUP620 :{
                              fa:{
                               product:"رزین پلی استر غیر اشباع",
                               name:"BUP620",
                               pdf:"BUP620-Fa.pdf",
                               Description:"BUP 620 رزین پلی استر غیر اشباع بر پایه اورتوفتالیک و غیرفعال، دارای فعالیت کم، گرانروی متوسط، انعطاف­پذیری و شفافیت خوب جهت پخت در دمای محیط به کمک متیل اتیل کتون پراکسید است.",
                               Characteristics:[
                                "رنگ کم",
                               "گرانروی متوسط",
                               "ویژگی­‌های مکانیکی و شیمیایی عالی",
                               "چسبندگی خوب به الیاف شیشه­",
                               "فیلرخوری بسیار زیاد"
                             
      
                               ],
                               Uses:[
                                 "تولید لوله",
                                 "تولید مخازن",
                                 "ساخت اتصالات بهداشتی ساختمانی",
                                 "ژل کوت"
                               ],
                               Table: [
                                {
                                    propertis:"شکل ظاهری",
                                    unit:"-",
                                    value:"شفاف",
                                    testMethod:"-"
                                },
                                {
                                    propertis:"رنگ",
                                    unit:"Gardner",
                                    value:"0.5>",
                                    testMethod:"ASTM D1544"
                                },
                                {
                                    propertis:"گرانروی (℃25)",
                                    unit:"mPa.s (cP)",
                                    value:"400-650",
                                    testMethod:"ISO 2555"
                                },
                                {
                                    propertis:"چگالی  (℃23)",
                                    unit:"g/cm³",
                                    value:"1.1339",
                                    testMethod:"ASTM D1475"
                                },
                                {
                                    propertis:"عدد اسیدی",
                                    unit:"mg KOH/g",
                                    value:"26>",
                                    testMethod:"ASTM D1639"
                                },
                                {
                                    propertis:"درصد جامد",
                                    unit:"% wt",
                                    value:"62±3",
                                    testMethod:"ASTM D1259"
                                },
                                {
                                    propertis:"*زمان ژل شدن",
                                    unit:"min",
                                    value:"12-18",
                                    testMethod:"ASTM D2471"
                                },
                                {
                                    propertis:"زمان پخت",
                                    unit:"min",
                                    value:"11-18",
                                    testMethod:"ASTM D2471"
                                },
                                {
                                    propertis:"دمای بیشینه گرمازایی (پیک اگزوترم)",
                                    unit:"℃",
                                    value:"200>",
                                    testMethod:"ASTM D2471"
                                },
                                {
                                    propertis:"جذب آب",
                                    unit:"% wt",
                                    value:"0.3>",
                                    testMethod:"ISO 62"
                                },
                                {
                                    propertis:"نقطه اشتعال (جام روباز)",
                                    unit:"℃",
                                    value:"24.5",
                                    testMethod:"ASTM D92"
                                },
                                {
                                    propertis:"استحکام کششی",
                                    unit:"MPa",
                                    value:"70<",
                                    testMethod:"ISO 527-2"
                                },
                                {
                                    propertis:"ازدیاد طول",
                                    unit:"%",
                                    value:"4.9",
                                    testMethod:"ISO 527-2"
                                },
                                {
                                    propertis:"مدول کششی",
                                    unit:"MPa",
                                    value:"1106",
                                    testMethod:"ISO 527-2"
                                },
                                {
                                    propertis:"استحکام خمشی",
                                    unit:"MPa",
                                    value:"130<",
                                    testMethod:"ISO 178"
                                },
                                {
                                    propertis:"مدول خمشی",
                                    unit:"MPa",
                                    value:"2577",
                                    testMethod:"ISO 178"
                                },
                                {
                                    propertis:"دمای خمش گرمایی",
                                    unit:"℃",
                                    value:"75<",
                                    testMethod:"ASTM D648"
                                },
                                {
                                    propertis:"سختی ( بارکول)",
                                    unit:"-",
                                    value:"44<",
                                    testMethod:"ASTM D2583"
                                },
                                {
                                    propertis:"جمع شدگی طولی  (L/L∆)",
                                    unit:"%",
                                    value:"1.3>",
                                    testMethod:"ASTM D2566"
                                }
                            ],
                               safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های پلی استر غیر اشباع رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                               Packaging:"225 کیلوگرم (خالص) در بشکه‌های فولادی.",
                               Storage:"محصول را در محل خنک و در دمای کمتر از ℃25 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید. در صورت رعایت شرایط نامبرده، عمر مفید انبارداری محصول حداقل 6 ماه از زمان تحویل است.",
                               Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
                              },
                              en:{
                               product:"Unsaturated Polyester Resin",
                               name:"BUP620",
                               pdf:"BUP620-En.pdf",
                               Description:"BUP 620 is an un-promoted orthophthalic based unsaturated polyester resin with low reactivity, medium viscosity, good flexibility and transparency for ambient temperature cure with MEK peroxide.",
                               Characteristics:[
                                 "Very low color",
                                 "Medium viscosity",
                                 "Excellent adhesion to glass fibers",
                                 "Excellent mechanical and chemical properties",
                                 "Outstanding filler binding power"
         
                               ],
                               Uses:[
                                  "Manufacturing pipes",
                                  "Manufacturing tanks and reservoirs",
                                  "Fabricating structural hygienic fittings",
                                  "Gel coats"
               
                               ],
                               Table: [
                                {
                                    propertis:"Appearance",
                                    unit:"-",
                                    value:"Clear",
                                    testMethod:"-"
                                },
                                {
                                    propertis:"Color",
                                    unit:"Gardner",
                                    value:"0.5>",
                                    testMethod:"ASTM D1544"
                                },
                                {
                                    propertis:"Viscosity (at 25°C)",
                                    unit:"mPa.s (cP)",
                                    value:"400-650",
                                    testMethod:"ISO 2555"
                                },
                                {
                                    propertis:"Density (at 23°C)",
                                    unit:"g/cm³",
                                    value:"1.1339",
                                    testMethod:"ASTM D1475"
                                },
                                {
                                    propertis:"Acid number",
                                    unit:"mg KOH/g",
                                    value:"26>",
                                    testMethod:"ASTM D1639"
                                },
                                {
                                    propertis:"Solid content",
                                    unit:"wt %",
                                    value:"62±3",
                                    testMethod:"ASTM D1259"
                                },
                                {
                                    propertis:"Gel time*",
                                    unit:"min",
                                    value:"12-18",
                                    testMethod:"ASTM D2471"
                                },
                                {
                                    propertis:"Curing time",
                                    unit:"min",
                                    value:"11-18",
                                    testMethod:"ASTM D2471"
                                },
                                {
                                    propertis:"Peak exothermic temperature",
                                    unit:"℃",
                                    value:"200>",
                                    testMethod:"ASTM D2471"
                                },
                                {
                                    propertis:"Water absorption",
                                    unit:"% wt ",
                                    value:"0.3>",
                                    testMethod:"ISO 62"
                                },
                                {
                                    propertis:"Flash point (open cup)",
                                    unit:"℃",
                                    value:"24.5",
                                    testMethod:"ASTM D92"
                                },
                                {
                                    propertis:"Tensile strength",
                                    unit:"MPa",
                                    value:"70<",
                                    testMethod:"ISO 527-2"
                                },
                                {
                                    propertis:"Tensile elongation",
                                    unit:"%",
                                    value:"4.9",
                                    testMethod:"ISO 527-2"
                                },
                                {
                                    propertis:"Tensile modulus",
                                    unit:"MPa",
                                    value:"1106",
                                    testMethod:"ISO 527-2"
                                },
                                {
                                    propertis:"Flexural strength",
                                    unit:"MPa",
                                    value:"130<",
                                    testMethod:"ISO 178"
                                },
                                {
                                    propertis:"Flexural modulus",
                                    unit:"MPa",
                                    value:"2577",
                                    testMethod:"ISO 178"
                                },
                                {
                                    propertis:"Heat distortion temperature (HDT)",
                                    unit:"℃",
                                    value:"75<",
                                    testMethod:"ASTM D648"
                                },
                                {
                                    propertis:"Hardness (Barcol))",
                                    unit:"-",
                                    value:"44<",
                                    testMethod:"ASTM D2583"
                                },
                                {
                                    propertis:"Linear shrinkage (∆L/L)",
                                    unit:"%",
                                    value:"1.3>",
                                    testMethod:"ASTM D2566"
                                }
                            ],
                               safety:"The usual protective measures employed during the handling of Unsaturated Polyester Resins should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                               Packaging:"225 kg (net) in steel drums.",
                               Storage:"Store in a cool place below 25 °C and away from moisture and direct sunlight. Under above mentioned storage conditions, the shelf life of the resin will be at least 6 months ex-works.",
                               Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
                              },
                              ru:{
                               product:"Ненасыщенная полиэфирная смола",
                               name:"BUP620",
                               pdf:"TDS-BUP-620_RU.pdf",
                               Description:"BUP 620 – слабореактивная немодифицированная ненасыщенная полиэфирная смола на ортофталевой основе, со средней вязкостью, хорошей пластичностью и хорошими механическими свойствами для отверждения при комнатной температуре с помощью MEK пероксида.",
                               Characteristics:[
                                   "Очень низкая пигментация",
                                   "Средняя вязкость",
                                   "Отличная адгезия к стекловолокну",
                                   "Отличные механические и химические свойства",
                                   "Исключительная связующая способность наполнителей"
                               ],
                               Uses:[
                                   "Производство трубопроводов",
                                   "Производство чанов и резервуаров",
                                   "Конструкционные гигиенические фитинги",
                                   "Наружные смоляные слои"
                               ],
                               Table: [
                                {
                                    propertis:"Внешний вид",
                                    unit:"-",
                                    value:"Прозрачный",
                                    testMethod:"-"
                                },
                                {
                                    propertis:"Цвет",
                                    unit:"Гарднер",
                                    value:"0.5>",
                                    testMethod:"ASTM D1544"
                                },
                                {
                                    propertis:"Вязкость (при 25°C)",
                                    unit:"мПа.с (сантипуаз)",
                                    value:"400-650",
                                    testMethod:"ISO 2555"
                                },
                                {
                                    propertis:"Плотность (при 23°C)",
                                    unit:"г/см³",
                                    value:"1.1339",
                                    testMethod:"ASTM D1475"
                                },
                                {
                                    propertis:"Кислотное число",
                                    unit:"мг KOH/г",
                                    value:"26>",
                                    testMethod:"ASTM D1639"
                                },
                                {
                                    propertis:"Сухой остаток",
                                    unit:"% веса",
                                    value:"62±3",
                                    testMethod:"ASTM D1259"
                                },
                                {
                                    propertis:"Время гелеобразования*",
                                    unit:"минуты",
                                    value:"12-18",
                                    testMethod:"ASTM D2471"
                                },
                                {
                                    propertis:"Время отверждения",
                                    unit:"минуты",
                                    value:"11-18",
                                    testMethod:"ASTM D2471"
                                },
                                {
                                    propertis:"Пик на экзотермической кривой",
                                    unit:"℃",
                                    value:"200>",
                                    testMethod:"ASTM D2471"
                                },
                                {
                                    propertis:"Влагопоглощение",
                                    unit:"% веса",
                                    value:"0.3>",
                                    testMethod:"ISO 62"
                                },
                                {
                                    propertis:"Температура вспышки (в откр. тигле)",
                                    unit:"℃",
                                    value:"24.5",
                                    testMethod:"ASTM D92"
                                },
                                {
                                    propertis:"Прочность на растяжение/разрыв",
                                    unit:"МПa",
                                    value:"70<",
                                    testMethod:"ISO 527-2"
                                },
                                {
                                    propertis:"Удлинение при растяжении",
                                    unit:"%",
                                    value:"4.9",
                                    testMethod:"ISO 527-2"
                                },
                                {
                                    propertis:"Удлинение при растяжении",
                                    unit:"МПa",
                                    value:"1106",
                                    testMethod:"ISO 527-2"
                                },
                                {
                                    propertis:"Прочность на изгиб",
                                    unit:"МПa",
                                    value:"130<",
                                    testMethod:"ISO 178"
                                },
                                {
                                    propertis:"Модуль упругости при изгибе",
                                    unit:"МПa",
                                    value:"2577",
                                    testMethod:"ISO 178"
                                },
                                {
                                    propertis:"Температура допустимой деформации",
                                    unit:"℃",
                                    value:"75<",
                                    testMethod:"ASTM D648"
                                },
                                {
                                    propertis:"Твердость (по Барколу)",
                                    unit:"-",
                                    value:"44<",
                                    testMethod:"ASTM D2583"
                                },
                                {
                                    propertis:"Линейная усадка (∆L/L)",
                                    unit:"%",
                                    value:"1.3>",
                                    testMethod:"ASTM D2566"
                                }
                            ],
                               safety:"Следует соблюдать стандартные меры безопасности транспортировки ненасыщенных полиэфирных смол. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                               Packaging:"225 кг (нетто) в металлических бочках.",
                               Storage:"Хранить в прохладном месте при температуре ниже 25 °C и вдали от влаги и прямых солнечных лучей. При соблюдении вышеуказанных условий хранения срок годности смолы составляет не менее 6 месяцев с даты выпуска.",
                               Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
                              }
                       
                           },
                           BUP621 :{
                               fa:{
                                product:"رزین پلی استر غیر اشباع",
                                name:"BUP621",
                                pdf:"BUP621-Fa.pdf",
                                Description:"BUP 621 رزین پلی استر غیر اشباع بر پایه اورتوفتالیک و غیرفعال، دارای رنگ کم، گرانروی متوسط و ویژگی­‌های مکانیکی بسیار خوب جهت پخت در دمای محیط به کمک متیل اتیل کتون پراکسید است.",
                                Characteristics:[
                                 "رنگ کم",
                                 "گرانروی متوسط",
                                 "چسبندگی عالی به الیاف شیشه­",
                                 "ویژگی های مکانیکی بسیار خوب",
                                 "فیلرخوری بسیار زیاد"
       
                                ],
                                Uses:[
                                  "قالب­‌گیری قطعات تزئینی",
                                  "قالب­‌گیری مدل­‌های شفاف تزئینی",
                                  "قالب­‌گیری قطعات بسیار شفاف",
                                  "لایه­‌گذاری دستی",
                                  "ساخت مبلمان شهری",
                                  "ساخت وسایل پارک آبی",
                                  "ساخت وسایل زمین بازی کودکان",
                                  "سنگ رویه",
                                  "سنگ مصنوعی"
                                ],
                                Table: [
                                    {
                                        propertis:"شکل ظاهری",
                                        unit:"-",
                                        value:"شفاف",
                                        testMethod:"-"
                                    },
                                    {
                                        propertis:"رنگ",
                                        unit:"Gardner",
                                        value:"1>",
                                        testMethod:"ASTM D1544"
                                    },
                                    {
                                        propertis:"گرانروی (℃25)",
                                        unit:"mPa.s (cP)",
                                        value:"380-480",
                                        testMethod:"ISO 2555"
                                    },
                                    {
                                        propertis:"چگالی  (℃23)",
                                        unit:"g/cm³",
                                        value:"1.1293",
                                        testMethod:"ASTM D1475"
                                    },
                                    {
                                        propertis:"عدد اسیدی",
                                        unit:"mg KOH/g",
                                        value:"26>",
                                        testMethod:"ASTM D1639"
                                    },
                                    {
                                        propertis:"درصد جامد",
                                        unit:"% wt",
                                        value:"62±2",
                                        testMethod:"ASTM D1259"
                                    },
                                    {
                                        propertis:"*زمان ژل شدن",
                                        unit:"min",
                                        value:"6-25",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"زمان پخت",
                                        unit:"min",
                                        value:"8-16",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"دمای بیشینه گرمازایی (پیک اگزوترم)",
                                        unit:"℃",
                                        value:"190>",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"جذب آب",
                                        unit:"% wt",
                                        value:"0.3>",
                                        testMethod:"ISO 62"
                                    },
                                    {
                                        propertis:"نقطه اشتعال (جام روباز)",
                                        unit:"℃",
                                        value:"22",
                                        testMethod:"ASTM D92"
                                    },
                                    {
                                        propertis:"استحکام کششی",
                                        unit:"MPa",
                                        value:"60<",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"ازدیاد طول",
                                        unit:"%",
                                        value:"8.86",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"مدول کششی",
                                        unit:"MPa",
                                        value:"639",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"استحکام خمشی",
                                        unit:"MPa",
                                        value:"115<",
                                        testMethod:"ISO 178"
                                    },
                                    {
                                        propertis:"مدول خمشی",
                                        unit:"MPa",
                                        value:"2384",
                                        testMethod:"ISO 178"
                                    },
                                    {
                                        propertis:"دمای خمش گرمایی",
                                        unit:"℃",
                                        value:"60<",
                                        testMethod:"ASTM D648"
                                    },
                                    {
                                        propertis:"سختی ( بارکول)",
                                        unit:"-",
                                        value:"40<",
                                        testMethod:"ASTM D2583"
                                    },
                                    {
                                        propertis:"جمع شدگی طولی  (L/L∆)",
                                        unit:"%",
                                        value:"1.3>",
                                        testMethod:"ASTM D2566"
                                    }
                                ],
                                safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های پلی استر غیر اشباع رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                                Packaging:"225 کیلوگرم (خالص) در بشکه‌های فولادی.",
                                Storage:"محصول را در محل خنک و در دمای کمتر از ℃25 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید. در صورت رعایت شرایط نامبرده، عمر مفید انبارداری محصول حداقل 6 ماه از زمان تحویل است.",
                                Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
                               },
                               en:{
                                product:"Unsaturated Polyester Resin",
                                name:"BUP621",
                                pdf:"BUP621-En.pdf",
                                Description:"BUP 621 is an un-promoted orthophthalic based unsaturated polyester resin with low color, medium viscosity and very good mechanical properties for ambient temperature cure with MEK peroxide.",
                                Characteristics:[
                                  "Low color",
                                  "Medium viscosity",
                                  "Excellent adhesion to glass fibers",
                                  "Very good mechanical properties",
                                  "Outstanding filler binding power"
          
                                ],
                                Uses:[
                                   "Casting decorative parts and accessories",
                                   "Manufacturing embedded parts",
                                   "Highly transparent castings",
                                   "Hand lay-up",
                                   "Urban furniture fabrication",
                                   "Aqua park equipment fabrication",
                                   "Playing Ground Equipment fabrication",
                                   "Solid surface",
                                   "Artificial stone"
                
                                ],
                                Table: [
                                    {
                                        propertis:"Appearance",
                                        unit:"-",
                                        value:"Clear",
                                        testMethod:"-"
                                    },
                                    {
                                        propertis:"Color",
                                        unit:"Gardner",
                                        value:"1>",
                                        testMethod:"ASTM D1544"
                                    },
                                    {
                                        propertis:"Viscosity (at 25°C)",
                                        unit:"mPa.s (cP)",
                                        value:"380-480",
                                        testMethod:"ISO 2555"
                                    },
                                    {
                                        propertis:"Density (at 23°C)",
                                        unit:"g/cm³",
                                        value:"1.1293",
                                        testMethod:"ASTM D1475"
                                    },
                                    {
                                        propertis:"Acid number",
                                        unit:"mg KOH/g",
                                        value:"26>",
                                        testMethod:"ASTM D1639"
                                    },
                                    {
                                        propertis:"Solid content",
                                        unit:"wt %",
                                        value:"62±2",
                                        testMethod:"ASTM D1259"
                                    },
                                    {
                                        propertis:"Gel time*",
                                        unit:"min",
                                        value:"6-25",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"Curing time",
                                        unit:"min",
                                        value:"8-16",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"Peak exothermic temperature",
                                        unit:"℃",
                                        value:"190>",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"Water absorption",
                                        unit:"% wt ",
                                        value:"0.3>",
                                        testMethod:"ISO 62"
                                    },
                                    {
                                        propertis:"Flash point (open cup)",
                                        unit:"℃",
                                        value:"22",
                                        testMethod:"ASTM D92"
                                    },
                                    {
                                        propertis:"Tensile strength",
                                        unit:"MPa",
                                        value:"60<",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"Tensile elongation",
                                        unit:"%",
                                        value:"8.86",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"Tensile modulus",
                                        unit:"MPa",
                                        value:"639",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"Flexural strength",
                                        unit:"MPa",
                                        value:"115<",
                                        testMethod:"ISO 178"
                                    },
                                    {
                                        propertis:"Flexural modulus",
                                        unit:"MPa",
                                        value:"2384",
                                        testMethod:"ISO 178"
                                    },
                                    {
                                        propertis:"Heat distortion temperature (HDT)",
                                        unit:"℃",
                                        value:"60<",
                                        testMethod:"ASTM D648"
                                    },
                                    {
                                        propertis:"Hardness (Barcol))",
                                        unit:"-",
                                        value:"40<",
                                        testMethod:"ASTM D2583"
                                    },
                                    {
                                        propertis:"Linear shrinkage (∆L/L)",
                                        unit:"%",
                                        value:"1.3>",
                                        testMethod:"ASTM D2566"
                                    }
                                ],
                                safety:"The usual protective measures employed during the handling of Unsaturated Polyester Resins should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                                Packaging:"225 kg (net) in steel drums.",
                                Storage:"Store in a cool place below 25 °C and away from moisture and direct sunlight. Under above mentioned storage conditions, the shelf life of the resin will be at least 6 months ex-works.",
                                Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
                               },
                               ru:{
                                product:"Ненасыщенная полиэфирная смола",
                                name:"BUP621",
                                pdf:"TDS-BUP-621_RU.pdf",
                                Description:"BUP 621 – слабоокрашенная немодифицированная ненасыщенная полиэфирная смола на ортофталевой основе, со средней вязкостью и очень хорошими механическими свойствами для отверждения при комнатной температуре с помощью MEK пероксида.",
                                Characteristics:[
                                   "Низкая пигментация",
                                   "Средняя вязкость",
                                   "Отличная адгезия к стекловолокну",
                                   "Очень хорошие механические свойства",
                                   "Исключительная связующая способность наполнителей"
                                ],
                                Uses:[
                                    "Литье декоративных деталей и аксессуаров",
                                    "Производство закладных деталей",
                                    "Высокопрозрачное литье",
                                    "Ручное формование",
                                    "Изготовление урбанистической мебели",
                                    "Изготовление оборудования для аквапарков",
                                    "Изготовление оборудования для спортплощадок",
                                    "Соединительный камень",
                                    "Искусственный камень"
                                ],
                                Table: [
                                    {
                                        propertis:"Внешний вид",
                                        unit:"-",
                                        value:"Прозрачный",
                                        testMethod:"-"
                                    },
                                    {
                                        propertis:"Цвет",
                                        unit:"Гарднер",
                                        value:"1>",
                                        testMethod:"ASTM D1544"
                                    },
                                    {
                                        propertis:"Вязкость (при 25°C)",
                                        unit:"мПа.с (сантипуаз)",
                                        value:"380-480",
                                        testMethod:"ISO 2555"
                                    },
                                    {
                                        propertis:"Плотность (при 23°C)",
                                        unit:"г/см³",
                                        value:"1.1293",
                                        testMethod:"ASTM D1475"
                                    },
                                    {
                                        propertis:"Кислотное число",
                                        unit:"мг KOH/г",
                                        value:"26>",
                                        testMethod:"ASTM D1639"
                                    },
                                    {
                                        propertis:"Сухой остаток",
                                        unit:"% веса",
                                        value:"62±2",
                                        testMethod:"ASTM D1259"
                                    },
                                    {
                                        propertis:"Время гелеобразования*",
                                        unit:"минуты",
                                        value:"6-25",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"Время отверждения",
                                        unit:"минуты",
                                        value:"8-16",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"Пик на экзотермической кривой",
                                        unit:"℃",
                                        value:"190>",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"Влагопоглощение",
                                        unit:"% веса",
                                        value:"0.3>",
                                        testMethod:"ISO 62"
                                    },
                                    {
                                        propertis:"Температура вспышки (в откр. тигле)",
                                        unit:"℃",
                                        value:"22",
                                        testMethod:"ASTM D92"
                                    },
                                    {
                                        propertis:"Прочность на растяжение/разрыв",
                                        unit:"МПa",
                                        value:"60<",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"Удлинение при растяжении",
                                        unit:"%",
                                        value:"8.86",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"Удлинение при растяжении",
                                        unit:"МПa",
                                        value:"639",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"Прочность на изгиб",
                                        unit:"МПa",
                                        value:"115<",
                                        testMethod:"ISO 178"
                                    },
                                    {
                                        propertis:"Модуль упругости при изгибе",
                                        unit:"МПa",
                                        value:"2384",
                                        testMethod:"ISO 178"
                                    },
                                    {
                                        propertis:"Температура допустимой деформации",
                                        unit:"℃",
                                        value:"60<",
                                        testMethod:"ASTM D648"
                                    },
                                    {
                                        propertis:"Твердость (по Барколу)",
                                        unit:"-",
                                        value:"40<",
                                        testMethod:"ASTM D2583"
                                    },
                                    {
                                        propertis:"Линейная усадка (∆L/L)",
                                        unit:"%",
                                        value:"1.3>",
                                        testMethod:"ASTM D2566"
                                    }
                                ],
                                safety:"Следует соблюдать стандартные меры безопасности транспортировки ненасыщенных полиэфирных смол. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                                Packaging:"225 кг (нетто) в металлических бочках.",
                                Storage:"Хранить в прохладном месте при температуре ниже 25 °C и вдали от влаги и прямых солнечных лучей. При соблюдении вышеуказанных условий хранения срок годности смолы составляет не менее 6 месяцев с даты выпуска.",
                                Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
                               }
                        
                            }
                            ,
                           BUP623 :{
                               fa:{
                                product:"رزین پلی استر غیر اشباع",
                                name:"BUP623",
                                pdf:"BUP623-Fa.pdf",
                                Description:"BUP 623 رزین پلی استر غیر اشباع بر پایه اورتوفتالیک و غیرفعال، دارای گرانروی متوسط، جمع­‌شدگی محدود و ویژگی­‌های مکانیکی بسیار خوب جهت پخت در دمای محیط به کمک متیل اتیل کتون پراکسید است.",
                                Characteristics:[
                                 "گرانروی متوسط",
                                 "جمع‌­شدگی کم",
                                 "چسبندگی بسیار خوب به الیاف شیشه­",
                                 "ویژگی­‌های مکانیکی بسیار خوب",
                                 "فیلرخوری بسیار زیاد"
       
                                ],
                                Uses:[
                                  "سنگ رویه",
                                  "سنگ مصنوعی"
                                ],
                                Table: [
                                    {
                                        propertis:"شکل ظاهری",
                                        unit:"-",
                                        value:"شفاف",
                                        testMethod:"-"
                                    },
                                    {
                                        propertis:"رنگ",
                                        unit:"Gardner",
                                        value:"1>",
                                        testMethod:"ASTM D1544"
                                    },
                                    {
                                        propertis:"گرانروی (℃25)",
                                        unit:"mPa.s (cP)",
                                        value:"500-700",
                                        testMethod:"ISO 2555"
                                    },
                                    {
                                        propertis:"چگالی  (℃23)",
                                        unit:"g/cm³",
                                        value:"1.1448",
                                        testMethod:"ASTM D1475"
                                    },
                                    {
                                        propertis:"عدد اسیدی",
                                        unit:"mg KOH/g",
                                        value:"25>",
                                        testMethod:"ASTM D1639"
                                    },
                                    {
                                        propertis:"درصد جامد",
                                        unit:"% wt",
                                        value:"65±2",
                                        testMethod:"ASTM D1259"
                                    },
                                    {
                                        propertis:"*زمان ژل شدن",
                                        unit:"min",
                                        value:"12-25",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"زمان پخت",
                                        unit:"min",
                                        value:"7-12",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"دمای بیشینه گرمازایی (پیک اگزوترم)",
                                        unit:"℃",
                                        value:"180>",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"جذب آب",
                                        unit:"% wt",
                                        value:"0.3>",
                                        testMethod:"ISO 62"
                                    },
                                    {
                                        propertis:"نقطه اشتعال (جام روباز)",
                                        unit:"℃",
                                        value:"22",
                                        testMethod:"ASTM D92"
                                    },
                                    {
                                        propertis:"استحکام کششی",
                                        unit:"MPa",
                                        value:"50<",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"ازدیاد طول",
                                        unit:"%",
                                        value:"8.2",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"مدول کششی",
                                        unit:"MPa",
                                        value:"583",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"استحکام خمشی",
                                        unit:"MPa",
                                        value:"120<",
                                        testMethod:"ISO 178"
                                    },
                                    {
                                        propertis:"مدول خمشی",
                                        unit:"MPa",
                                        value:"2055",
                                        testMethod:"ISO 178"
                                    },
                                    {
                                        propertis:"دمای خمش گرمایی",
                                        unit:"℃",
                                        value:"55<",
                                        testMethod:"ASTM D648"
                                    },
                                    {
                                        propertis:"سختی ( بارکول)",
                                        unit:"-",
                                        value:"40<",
                                        testMethod:"ASTM D2583"
                                    },
                                    {
                                        propertis:"جمع شدگی طولی  (L/L∆)",
                                        unit:"%",
                                        value:"1>",
                                        testMethod:"ASTM D2566"
                                    }
                                ],
                                safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های پلی استر غیر اشباع رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                                Packaging:"225 کیلوگرم (خالص) در بشکه‌های فولادی.",
                                Storage:"محصول را در محل خنک و در دمای کمتر از ℃25 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید. در صورت رعایت شرایط نامبرده، عمر مفید انبارداری محصول حداقل 6 ماه از زمان تحویل است.",
                                Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
                               },
                               en:{
                                product:"Unsaturated Polyester Resin",
                                name:"BUP623",
                                pdf:"BUP623-En.pdf",
                                Description:"BUP 623 is an un-promoted orthophthalic based unsaturated polyester resin with medium viscosity, limited shrinkage and very good mechanical properties for ambient temperature cure with MEK peroxide.",
                                Characteristics:[
                                    "Medium viscosity",
                                    "Limited shrinkage",
                                    "Very good adhesion to glass fibers",
                                    "Very good mechanical properties",
                                    "Outstanding filler binding power",
                                    "Outstanding filler binding power"
          
                                ],
                                Uses:[
                                   
                                   "Solid surface",
                                   "Artificial stone"
                
                                ],
                                Table: [
                                    {
                                        propertis:"Appearance",
                                        unit:"-",
                                        value:"Clear",
                                        testMethod:"-"
                                    },
                                    {
                                        propertis:"Color",
                                        unit:"Gardner",
                                        value:"1>",
                                        testMethod:"ASTM D1544"
                                    },
                                    {
                                        propertis:"Viscosity (at 25°C)",
                                        unit:"mPa.s (cP)",
                                        value:"500-700",
                                        testMethod:"ISO 2555"
                                    },
                                    {
                                        propertis:"Density (at 23°C)",
                                        unit:"g/cm³",
                                        value:"1.1448",
                                        testMethod:"ASTM D1475"
                                    },
                                    {
                                        propertis:"Acid number",
                                        unit:"mg KOH/g",
                                        value:"25>",
                                        testMethod:"ASTM D1639"
                                    },
                                    {
                                        propertis:"Solid content",
                                        unit:"wt %",
                                        value:"65±2",
                                        testMethod:"ASTM D1259"
                                    },
                                    {
                                        propertis:"Gel time*",
                                        unit:"min",
                                        value:"12-25",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"Curing time",
                                        unit:"min",
                                        value:"7-12",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"Peak exothermic temperature",
                                        unit:"℃",
                                        value:"180>",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"Water absorption",
                                        unit:"% wt ",
                                        value:"0.3>",
                                        testMethod:"ISO 62"
                                    },
                                    {
                                        propertis:"Flash point (open cup)",
                                        unit:"℃",
                                        value:"22",
                                        testMethod:"ASTM D92"
                                    },
                                    {
                                        propertis:"Tensile strength",
                                        unit:"MPa",
                                        value:"50<",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"Tensile elongation",
                                        unit:"%",
                                        value:"8.2",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"Tensile modulus",
                                        unit:"MPa",
                                        value:"583",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"Flexural strength",
                                        unit:"MPa",
                                        value:"120<",
                                        testMethod:"ISO 178"
                                    },
                                    {
                                        propertis:"Flexural modulus",
                                        unit:"MPa",
                                        value:"2055",
                                        testMethod:"ISO 178"
                                    },
                                    {
                                        propertis:"Heat distortion temperature (HDT)",
                                        unit:"℃",
                                        value:"55<",
                                        testMethod:"ASTM D648"
                                    },
                                    {
                                        propertis:"Hardness (Barcol))",
                                        unit:"-",
                                        value:"40<",
                                        testMethod:"ASTM D2583"
                                    },
                                    {
                                        propertis:"Linear shrinkage (∆L/L)",
                                        unit:"%",
                                        value:"1>",
                                        testMethod:"ASTM D2566"
                                    }
                                ],
                                safety:"The usual protective measures employed during the handling of Unsaturated Polyester Resins should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                                Packaging:"225 kg (net) in steel drums.",
                                Storage:"Store in a cool place below 25 °C and away from moisture and direct sunlight. Under above mentioned storage conditions, the shelf life of the resin will be at least 6 months ex-works.",
                                Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
                               },
                               ru:{
                                product:"Ненасыщенная полиэфирная смола",
                                name:"BUP623",
                                pdf:"TDS-BUP-623_RU.pdf",
                                Description:"BUP 623 –немодифицированная ненасыщенная полиэфирная смола на ортофталевой основе, со средней вязкостью, ограниченной усадкой и очень хорошими механическими свойствами для отверждения при комнатной температуре с помощью MEK пероксида.",
                                Characteristics:[
                                    "Средняя вязкость",
                                    "Ограниченная усадка",
                                    "Очень хорошая адгезия к стекловолокну",
                                    "Очень хорошие механические свойства",
                                    "Исключительная связующая способность наполнителей"
                                ],
                                Uses:[
                                    
                                    "Соединительный камень",
                                    "Искусственный камень"
                                ],
                                Table: [
                                    {
                                        propertis:"Внешний вид",
                                        unit:"-",
                                        value:"Прозрачный",
                                        testMethod:"-"
                                    },
                                    {
                                        propertis:"Цвет",
                                        unit:"Гарднер",
                                        value:"1>",
                                        testMethod:"ASTM D1544"
                                    },
                                    {
                                        propertis:"Вязкость (при 25°C)",
                                        unit:"мПа.с (сантипуаз)",
                                        value:"500-700",
                                        testMethod:"ISO 2555"
                                    },
                                    {
                                        propertis:"Плотность (при 23°C)",
                                        unit:"г/см³",
                                        value:"1.1448",
                                        testMethod:"ASTM D1475"
                                    },
                                    {
                                        propertis:"Кислотное число",
                                        unit:"мг KOH/г",
                                        value:"25>",
                                        testMethod:"ASTM D1639"
                                    },
                                    {
                                        propertis:"Сухой остаток",
                                        unit:"% веса",
                                        value:"65±2",
                                        testMethod:"ASTM D1259"
                                    },
                                    {
                                        propertis:"Время гелеобразования*",
                                        unit:"минуты",
                                        value:"12-25",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"Время отверждения",
                                        unit:"минуты",
                                        value:"7-12",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"Пик на экзотермической кривой",
                                        unit:"℃",
                                        value:"180>",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"Влагопоглощение",
                                        unit:"% веса",
                                        value:"0.3>",
                                        testMethod:"ISO 62"
                                    },
                                    {
                                        propertis:"Температура вспышки (в откр. тигле)",
                                        unit:"℃",
                                        value:"22",
                                        testMethod:"ASTM D92"
                                    },
                                    {
                                        propertis:"Прочность на растяжение/разрыв",
                                        unit:"МПa",
                                        value:"50<",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"Удлинение при растяжении",
                                        unit:"%",
                                        value:"8.2",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"Удлинение при растяжении",
                                        unit:"МПa",
                                        value:"583",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"Прочность на изгиб",
                                        unit:"МПa",
                                        value:"120<",
                                        testMethod:"ISO 178"
                                    },
                                    {
                                        propertis:"Модуль упругости при изгибе",
                                        unit:"МПa",
                                        value:"2055",
                                        testMethod:"ISO 178"
                                    },
                                    {
                                        propertis:"Температура допустимой деформации",
                                        unit:"℃",
                                        value:"55<",
                                        testMethod:"ASTM D648"
                                    },
                                    {
                                        propertis:"Твердость (по Барколу)",
                                        unit:"-",
                                        value:"40<",
                                        testMethod:"ASTM D2583"
                                    },
                                    {
                                        propertis:"Линейная усадка (∆L/L)",
                                        unit:"%",
                                        value:"1>",
                                        testMethod:"ASTM D2566"
                                    }
                                ],
                                safety:"Следует соблюдать стандартные меры безопасности транспортировки ненасыщенных полиэфирных смол. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                                Packaging:"225 кг (нетто) в металлических бочках.",
                                Storage:"Хранить в прохладном месте при температуре ниже 25 °C и вдали от влаги и прямых солнечных лучей. При соблюдении вышеуказанных условий хранения срок годности смолы составляет не менее 6 месяцев с даты выпуска.",
                                Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
                               }
                        
                            },
                            BUP624 :{
                                fa:{
                                 product:"رزین پلی استر غیر اشباع",
                                 name:"BUP623",
                                 pdf:"BUP624-Fa.pdf",
                                 Description:"BUP 624 رزین پلی استر غیر اشباع بر پایه اورتوفتالیک و غیرفعال، دارای رنگ کم و گرانروی متوسط و ویژگی­‌های مکانیکی بسیار خوب جهت پخت در دمای محیط به کمک متیل اتیل کتون پراکسید است.",
                                 Characteristics:[
                                  "رنگ کم",
                                  "گرانروی متوسط",
                                  "مقاومت در برابر اشعه فرابنفش",
                                  "ویژگی­‌های مکانیکی بسیار خوب",
                                  "فیلرخوری بسیار زیاد"
        
                                 ],
                                 Uses:[
                                   "سنگ مرمر",
                                   "سنگ مصنوعی"
                                 ],

                                 Table: [
                                    {
                                        propertis:"شکل ظاهری",
                                        unit:"-",
                                        value:"شفاف",
                                        testMethod:"-"
                                    },
                                    {
                                        propertis:"رنگ",
                                        unit:"Gardner",
                                        value:"1>",
                                        testMethod:"ASTM D1544"
                                    },
                                    {
                                        propertis:"گرانروی (℃25)",
                                        unit:"mPa.s (cP)",
                                        value:"450-700",
                                        testMethod:"ISO 2555"
                                    },
                                    {
                                        propertis:"چگالی  (℃23)",
                                        unit:"g/cm³",
                                        value:"1.1314",
                                        testMethod:"ASTM D1475"
                                    },
                                    {
                                        propertis:"عدد اسیدی",
                                        unit:"mg KOH/g",
                                        value:"20>",
                                        testMethod:"ASTM D1639"
                                    },
                                    {
                                        propertis:"درصد جامد",
                                        unit:"% wt",
                                        value:"65±2",
                                        testMethod:"ASTM D1259"
                                    },
                                    {
                                        propertis:"*زمان ژل شدن",
                                        unit:"min",
                                        value:"10-25",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"زمان پخت",
                                        unit:"min",
                                        value:"8-14",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"دمای بیشینه گرمازایی (پیک اگزوترم)",
                                        unit:"℃",
                                        value:"180>",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"جذب آب",
                                        unit:"% wt",
                                        value:"0.28>",
                                        testMethod:"ISO 62"
                                    },
                                    {
                                        propertis:"نقطه اشتعال (جام روباز)",
                                        unit:"℃",
                                        value:"21",
                                        testMethod:"ASTM D92"
                                    },
                                    {
                                        propertis:"استحکام کششی",
                                        unit:"MPa",
                                        value:"65<",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"ازدیاد طول",
                                        unit:"%",
                                        value:"9.4",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"مدول کششی",
                                        unit:"MPa",
                                        value:"600",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"استحکام خمشی",
                                        unit:"MPa",
                                        value:"130<",
                                        testMethod:"ISO 178"
                                    },
                                    {
                                        propertis:"مدول خمشی",
                                        unit:"MPa",
                                        value:"2176",
                                        testMethod:"ISO 178"
                                    },
                                    {
                                        propertis:"دمای خمش گرمایی",
                                        unit:"℃",
                                        value:"65<",
                                        testMethod:"ASTM D648"
                                    },
                                    {
                                        propertis:"سختی ( بارکول)",
                                        unit:"-",
                                        value:"42<",
                                        testMethod:"ASTM D2583"
                                    },
                                    {
                                        propertis:"جمع شدگی طولی  (L/L∆)",
                                        unit:"%",
                                        value:"1.2>",
                                        testMethod:"ASTM D2566"
                                    }
                                ],
                                 safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های پلی استر غیر اشباع رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                                 Packaging:"225 کیلوگرم (خالص) در بشکه‌های فولادی.",
                                 Storage:"محصول را در محل خنک و در دمای کمتر از ℃25 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید. در صورت رعایت شرایط نامبرده، عمر مفید انبارداری محصول حداقل 6 ماه از زمان تحویل است.",
                                 Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
                                },
                                en:{
                                 product:"Unsaturated Polyester Resin",
                                 name:"BUP624",
                                 pdf:"BUP624-En.pdf",
                                 Description:"BUP 624 is an un-promoted orthophthalic based unsaturated polyester resin with low color and medium viscosity and very good mechanical properties for ambient temperature cure with MEK peroxide.",
                                 Characteristics:[
                                     "Low color",
                                     "Medium viscosity",
                                     "Resistant to UV",
                                     "Very good mechanical properties",
                                     "Outstanding filler binding power"
           
                                 ],
                                 Uses:[
                                    
                                    "Marble surface",
                                    "Artificial stone"
                 
                                 ],
                                 Table: [
                                    {
                                        propertis:"Appearance",
                                        unit:"-",
                                        value:"Clear",
                                        testMethod:"-"
                                    },
                                    {
                                        propertis:"Color",
                                        unit:"Gardner",
                                        value:"1>",
                                        testMethod:"ASTM D1544"
                                    },
                                    {
                                        propertis:"Viscosity (at 25°C)",
                                        unit:"mPa.s (cP)",
                                        value:"450-700",
                                        testMethod:"ISO 2555"
                                    },
                                    {
                                        propertis:"Density (at 23°C)",
                                        unit:"g/cm³",
                                        value:"1.1314",
                                        testMethod:"ASTM D1475"
                                    },
                                    {
                                        propertis:"Acid number",
                                        unit:"mg KOH/g",
                                        value:"20>",
                                        testMethod:"ASTM D1639"
                                    },
                                    {
                                        propertis:"Solid content",
                                        unit:"wt %",
                                        value:"65±2",
                                        testMethod:"ASTM D1259"
                                    },
                                    {
                                        propertis:"Gel time*",
                                        unit:"min",
                                        value:"10-25",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"Curing time",
                                        unit:"min",
                                        value:"8-14",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"Peak exothermic temperature",
                                        unit:"℃",
                                        value:"180>",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"Water absorption",
                                        unit:"% wt ",
                                        value:"0.28>",
                                        testMethod:"ISO 62"
                                    },
                                    {
                                        propertis:"Flash point (open cup)",
                                        unit:"℃",
                                        value:"21",
                                        testMethod:"ASTM D92"
                                    },
                                    {
                                        propertis:"Tensile strength",
                                        unit:"MPa",
                                        value:"65<",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"Tensile elongation",
                                        unit:"%",
                                        value:"9.4",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"Tensile modulus",
                                        unit:"MPa",
                                        value:"600",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"Flexural strength",
                                        unit:"MPa",
                                        value:"130<",
                                        testMethod:"ISO 178"
                                    },
                                    {
                                        propertis:"Flexural modulus",
                                        unit:"MPa",
                                        value:"2176",
                                        testMethod:"ISO 178"
                                    },
                                    {
                                        propertis:"Heat distortion temperature (HDT)",
                                        unit:"℃",
                                        value:"65<",
                                        testMethod:"ASTM D648"
                                    },
                                    {
                                        propertis:"Hardness (Barcol))",
                                        unit:"-",
                                        value:"42<",
                                        testMethod:"ASTM D2583"
                                    },
                                    {
                                        propertis:"Linear shrinkage (∆L/L)",
                                        unit:"%",
                                        value:"1.2>",
                                        testMethod:"ASTM D2566"
                                    }
                                ],
                                 safety:"The usual protective measures employed during the handling of Unsaturated Polyester Resins should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                                 Packaging:"225 kg (net) in steel drums.",
                                 Storage:"Store in a cool place below 25 °C and away from moisture and direct sunlight. Under above mentioned storage conditions, the shelf life of the resin will be at least 6 months ex-works.",
                                 Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
                                },
                                ru:{
                                 product:"Ненасыщенная полиэфирная смола",
                                 name:"BUP624",
                                 pdf:"TDS-BUP-624_RU.pdf",
                                 Description:"BUP 624 –слабоокрашенная немодифицированная ненасыщенная полиэфирная смола на ортофталевой основе, со средней вязкостью и очень хорошими механическими свойствами для отверждения при комнатной температуре с помощью MEK пероксида.",
                                 Characteristics:[
                                     "Низкая пигментация",
                                     "Средняя вязкость",
                                     "Устойчивость к УФ-излучению",
                                     "Очень хорошие механические свойства",
                                     "Исключительная связующая способность наполнителей"
                                 ],
                                 Uses:[
                                    "Искусственный камень",
                                    "Искусственный мрамор"
                                 ],
                                 Table: [
                                    {
                                        propertis:"Внешний вид",
                                        unit:"-",
                                        value:"Прозрачный",
                                        testMethod:"-"
                                    },
                                    {
                                        propertis:"Цвет",
                                        unit:"Гарднер",
                                        value:"1>",
                                        testMethod:"ASTM D1544"
                                    },
                                    {
                                        propertis:"Вязкость (при 25°C)",
                                        unit:"мПа.с (сантипуаз)",
                                        value:"450-700",
                                        testMethod:"ISO 2555"
                                    },
                                    {
                                        propertis:"Плотность (при 23°C)",
                                        unit:"г/см³",
                                        value:"1.1314",
                                        testMethod:"ASTM D1475"
                                    },
                                    {
                                        propertis:"Кислотное число",
                                        unit:"мг KOH/г",
                                        value:"20>",
                                        testMethod:"ASTM D1639"
                                    },
                                    {
                                        propertis:"Сухой остаток",
                                        unit:"% веса",
                                        value:"65±2",
                                        testMethod:"ASTM D1259"
                                    },
                                    {
                                        propertis:"Время гелеобразования*",
                                        unit:"минуты",
                                        value:"10-25",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"Время отверждения",
                                        unit:"минуты",
                                        value:"8-14",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"Пик на экзотермической кривой",
                                        unit:"℃",
                                        value:"180>",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"Влагопоглощение",
                                        unit:"% веса",
                                        value:"0.28>",
                                        testMethod:"ISO 62"
                                    },
                                    {
                                        propertis:"Температура вспышки (в откр. тигле)",
                                        unit:"℃",
                                        value:"21",
                                        testMethod:"ASTM D92"
                                    },
                                    {
                                        propertis:"Прочность на растяжение/разрыв",
                                        unit:"МПa",
                                        value:"65<",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"Удлинение при растяжении",
                                        unit:"%",
                                        value:"9.4",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"Удлинение при растяжении",
                                        unit:"МПa",
                                        value:"600",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"Прочность на изгиб",
                                        unit:"МПa",
                                        value:"130<",
                                        testMethod:"ISO 178"
                                    },
                                    {
                                        propertis:"Модуль упругости при изгибе",
                                        unit:"МПa",
                                        value:"2176",
                                        testMethod:"ISO 178"
                                    },
                                    {
                                        propertis:"Температура допустимой деформации",
                                        unit:"℃",
                                        value:"65<",
                                        testMethod:"ASTM D648"
                                    },
                                    {
                                        propertis:"Твердость (по Барколу)",
                                        unit:"-",
                                        value:"42<",
                                        testMethod:"ASTM D2583"
                                    },
                                    {
                                        propertis:"Линейная усадка (∆L/L)",
                                        unit:"%",
                                        value:"1.2>",
                                        testMethod:"ASTM D2566"
                                    }
                                ],
                                 safety:"Следует соблюдать стандартные меры безопасности транспортировки ненасыщенных полиэфирных смол. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                                 Packaging:"225 кг (нетто) в металлических бочках.",
                                 Storage:"Хранить в прохладном месте при температуре ниже 25 °C и вдали от влаги и прямых солнечных лучей. При соблюдении вышеуказанных условий хранения срок годности смолы составляет не менее 6 месяцев с даты выпуска.",
                                 Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
                                }
                         
                             },
                             BUP630 :{
                                 fa:{
                                  product:"رزین پلی استر غیر اشباع",
                                  name:"BUP630",
                                  pdf:"BUP630-Fa.pdf",
                                  Description:"BUP 630 رزین پلی استر غیر اشباع بر پایه اورتوفتالیک غیرفعال و تیکسوتروپ، دارای رنگ کم، گرانروی متوسط، جذب آب کم و ویژگی­‌های مکانیکی بسیار خوب جهت پخت در دمای محیط به کمک متیل اتیل کتون پراکسید است.",
                                  Characteristics:[
                                   "رنگ کم",
                                   "گرانروی متوسط",
                                  "جذب آب کم",
                                  "مقاومت در برابر آبکافت (هیدرولیز)",
                                  " مقاومت در برابر ضربه",
                                  "ویژگی­‌های مکانیکی بسیار خوب",
                                  "داراری گواهی بهداشتی تماس با آب"
         
                                  ],
                                  Uses:[
                                    "تولید لوله",
                                    "تولید مخازن",
                                    "ساخت اتصالات بهداشتی ساختمانی",
                                    "لایه­‌گذاری دستی",
                                    "ساخت وسایل پارک آبی",
                                    "شناورها و قایق­‌های دریایی",
                                    "پالتروژن"
                                  ],
                                  Table: [
                                    {
                                        propertis:"شکل ظاهری",
                                        unit:"-",
                                        value:"شفاف",
                                        testMethod:"-"
                                    },
                                    {
                                        propertis:"رنگ",
                                        unit:"Gardner",
                                        value:"2>",
                                        testMethod:"ASTM D1544"
                                    },
                                    {
                                        propertis:"گرانروی (℃25)",
                                        unit:"mPa.s (cP)",
                                        value:"450-700",
                                        testMethod:"ISO 2555"
                                    },
                                    {
                                        propertis:"چگالی  (℃23)",
                                        unit:"g/cm³",
                                        value:"1.1351",
                                        testMethod:"ASTM D1475"
                                    },
                                    {
                                        propertis:"عدد اسیدی",
                                        unit:"mg KOH/g",
                                        value:"10-14",
                                        testMethod:"ASTM D1639"
                                    },
                                    {
                                        propertis:"درصد جامد",
                                        unit:"% wt",
                                        value:"63±2",
                                        testMethod:"ASTM D1259"
                                    },
                                    {
                                        propertis:"*زمان ژل شدن",
                                        unit:"min",
                                        value:"15-35",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"زمان پخت",
                                        unit:"min",
                                        value:"10-20",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"دمای بیشینه گرمازایی (پیک اگزوترم)",
                                        unit:"℃",
                                        value:"190>",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"جذب آب",
                                        unit:"% wt",
                                        value:"0.2>",
                                        testMethod:"ISO 62"
                                    },
                                    {
                                        propertis:"نقطه اشتعال (جام روباز)",
                                        unit:"℃",
                                        value:"22",
                                        testMethod:"ASTM D92"
                                    },
                                    {
                                        propertis:"استحکام کششی",
                                        unit:"MPa",
                                        value:"60<",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"ازدیاد طول",
                                        unit:"%",
                                        value:"3.4",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"مدول کششی",
                                        unit:"MPa",
                                        value:"1895",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"استحکام خمشی",
                                        unit:"MPa",
                                        value:"120<",
                                        testMethod:"ISO 178"
                                    },
                                    {
                                        propertis:"مدول خمشی",
                                        unit:"MPa",
                                        value:"3618",
                                        testMethod:"ISO 178"
                                    },
                                    {
                                        propertis:"دمای خمش گرمایی",
                                        unit:"℃",
                                        value:"65<",
                                        testMethod:"ASTM D648"
                                    },
                                    {
                                        propertis:"سختی ( بارکول)",
                                        unit:"-",
                                        value:"40<",
                                        testMethod:"ASTM D2583"
                                    },
                                    {
                                        propertis:"جمع شدگی طولی  (L/L∆)",
                                        unit:"%",
                                        value:"1.3>",
                                        testMethod:"ASTM D2566"
                                    }
                                ],
                                  safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های پلی استر غیر اشباع رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                                  Packaging:"225 کیلوگرم (خالص) در بشکه‌های فولادی.",
                                  Storage:"محصول را در محل خنک و در دمای کمتر از ℃25 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید. در صورت رعایت شرایط نامبرده، عمر مفید انبارداری محصول حداقل 6 ماه از زمان تحویل است.",
                                  Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
                                 },
                                 en:{
                                  product:"Unsaturated Polyester Resin",
                                  name:"BUP630",
                                  pdf:"BUP630-En.pdf",
                                  Description:"BUP 630 is an un-promoted orthophthalic based unsaturated polyester resin with low color, medium viscosity, limited water absorption and very good mechanical properties for ambient temperature cure with MEK peroxide.",
                                  Characteristics:[
                                     "Low color",
                                     "Medium viscosity",
                                     "Limited water absorption",
                                     "Resistance to hydrolysis",
                                     "Impact resistant",
                                     "Very good mechanical properties",
                                     "Water contact/ hygienic approval",
                                     

            
                                  ],
                                  Uses:[
                                    "Manufacturing pipes",
                                    "Manufacturing tanks and reservoirs",
                                    "Fabricating structural hygienic fittings",
                                    "Hand lay-up",
                                    "Aqua park equipment fabrication",
                                    "Marine vessels and boats",
                                    "Pultrusion"
                  
                                  ],
                                  Table: [
                                    {
                                        propertis:"Appearance",
                                        unit:"-",
                                        value:"Clear",
                                        testMethod:"-"
                                    },
                                    {
                                        propertis:"Color",
                                        unit:"Gardner",
                                        value:"2>",
                                        testMethod:"ASTM D1544"
                                    },
                                    {
                                        propertis:"Viscosity (at 25°C)",
                                        unit:"mPa.s (cP)",
                                        value:"450-700",
                                        testMethod:"ISO 2555"
                                    },
                                    {
                                        propertis:"Density (at 23°C)",
                                        unit:"g/cm³",
                                        value:"1.1351",
                                        testMethod:"ASTM D1475"
                                    },
                                    {
                                        propertis:"Acid number",
                                        unit:"mg KOH/g",
                                        value:"10-14",
                                        testMethod:"ASTM D1639"
                                    },
                                    {
                                        propertis:"Solid content",
                                        unit:"wt %",
                                        value:"63±2",
                                        testMethod:"ASTM D1259"
                                    },
                                    {
                                        propertis:"Gel time*",
                                        unit:"min",
                                        value:"15-35",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"Curing time",
                                        unit:"min",
                                        value:"10-20",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"Peak exothermic temperature",
                                        unit:"℃",
                                        value:"190>",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"Water absorption",
                                        unit:"% wt ",
                                        value:"0.2>",
                                        testMethod:"ISO 62"
                                    },
                                    {
                                        propertis:"Flash point (open cup)",
                                        unit:"℃",
                                        value:"22",
                                        testMethod:"ASTM D92"
                                    },
                                    {
                                        propertis:"Tensile strength",
                                        unit:"MPa",
                                        value:"60<",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"Tensile elongation",
                                        unit:"%",
                                        value:"3.4",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"Tensile modulus",
                                        unit:"MPa",
                                        value:"1895",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"Flexural strength",
                                        unit:"MPa",
                                        value:"120<",
                                        testMethod:"ISO 178"
                                    },
                                    {
                                        propertis:"Flexural modulus",
                                        unit:"MPa",
                                        value:"3618",
                                        testMethod:"ISO 178"
                                    },
                                    {
                                        propertis:"Heat distortion temperature (HDT)",
                                        unit:"℃",
                                        value:"65<",
                                        testMethod:"ASTM D648"
                                    },
                                    {
                                        propertis:"Hardness (Barcol))",
                                        unit:"-",
                                        value:"40<",
                                        testMethod:"ASTM D2583"
                                    },
                                    {
                                        propertis:"Linear shrinkage (∆L/L)",
                                        unit:"%",
                                        value:"1.3>",
                                        testMethod:"ASTM D2566"
                                    }
                                ],
                                  safety:"The usual protective measures employed during the handling of Unsaturated Polyester Resins should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                                  Packaging:"225 kg (net) in steel drums.",
                                  Storage:"Store in a cool place below 25 °C and away from moisture and direct sunlight. Under above mentioned storage conditions, the shelf life of the resin will be at least 6 months ex-works.",
                                  Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
                                 },
                                 ru:{
                                  product:"Ненасыщенная полиэфирная смола",
                                  name:"BUP630",
                                  pdf:"TDS-BUP-630_RU.pdf",
                                  Description:"BUP 630 –слабоокрашенная немодифицированная ненасыщенная полиэфирная смола на ортофталевой основе, со средней вязкостью, ограниченным водопоглощением и очень хорошими механическими свойствами для отверждения при комнатной температуре с помощью MEK пероксида.",
                                  Characteristics:[
                                      "Низкая пигментация",
                                      "Средняя вязкость",
                                      "Ограниченное водопоглощение",
                                      "Стойкость к гидролизу",
                                      "Ударопрочность",
                                      "Очень хорошие механические свойства",
                                      "Водостойкость и гигиеничность"
                                  ],
                                  Uses:[
                                     "Производство трубопроводов",
                                     "Производство чанов и резервуаров",
                                     "Изготовление конструкционных гигиенических фитингов",
                                     "Ручное формование",
                                     "Изготовление оборудования для аквапарков",
                                     "Морские судна и яхты",
                                     "Пултрузия/протяжка"
                                  ],
                                  Table: [
                                    {
                                        propertis:"Внешний вид",
                                        unit:"-",
                                        value:"Прозрачный",
                                        testMethod:"-"
                                    },
                                    {
                                        propertis:"Цвет",
                                        unit:"Гарднер",
                                        value:"2>",
                                        testMethod:"ASTM D1544"
                                    },
                                    {
                                        propertis:"Вязкость (при 25°C)",
                                        unit:"мПа.с (сантипуаз)",
                                        value:"450-700",
                                        testMethod:"ISO 2555"
                                    },
                                    {
                                        propertis:"Плотность (при 23°C)",
                                        unit:"г/см³",
                                        value:"1.1351",
                                        testMethod:"ASTM D1475"
                                    },
                                    {
                                        propertis:"Кислотное число",
                                        unit:"мг KOH/г",
                                        value:"10-14",
                                        testMethod:"ASTM D1639"
                                    },
                                    {
                                        propertis:"Сухой остаток",
                                        unit:"% веса",
                                        value:"63±2",
                                        testMethod:"ASTM D1259"
                                    },
                                    {
                                        propertis:"Время гелеобразования*",
                                        unit:"минуты",
                                        value:"15-35",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"Время отверждения",
                                        unit:"минуты",
                                        value:"10-20",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"Пик на экзотермической кривой",
                                        unit:"℃",
                                        value:"190>",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"Влагопоглощение",
                                        unit:"% веса",
                                        value:"0.2>",
                                        testMethod:"ISO 62"
                                    },
                                    {
                                        propertis:"Температура вспышки (в откр. тигле)",
                                        unit:"℃",
                                        value:"22",
                                        testMethod:"ASTM D92"
                                    },
                                    {
                                        propertis:"Прочность на растяжение/разрыв",
                                        unit:"МПa",
                                        value:"60<",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"Удлинение при растяжении",
                                        unit:"%",
                                        value:"3.4",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"Удлинение при растяжении",
                                        unit:"МПa",
                                        value:"1895",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"Прочность на изгиб",
                                        unit:"МПa",
                                        value:"120<",
                                        testMethod:"ISO 178"
                                    },
                                    {
                                        propertis:"Модуль упругости при изгибе",
                                        unit:"МПa",
                                        value:"3618",
                                        testMethod:"ISO 178"
                                    },
                                    {
                                        propertis:"Температура допустимой деформации",
                                        unit:"℃",
                                        value:"65<",
                                        testMethod:"ASTM D648"
                                    },
                                    {
                                        propertis:"Твердость (по Барколу)",
                                        unit:"-",
                                        value:"40<",
                                        testMethod:"ASTM D2583"
                                    },
                                    {
                                        propertis:"Линейная усадка (∆L/L)",
                                        unit:"%",
                                        value:"1.3>",
                                        testMethod:"ASTM D2566"
                                    }
                                ],
                                  safety:"Следует соблюдать стандартные меры безопасности транспортировки ненасыщенных полиэфирных смол. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                                  Packaging:"225 кг (нетто) в металлических бочках.",
                                  Storage:"Хранить в прохладном месте при температуре ниже 25 °C и вдали от влаги и прямых солнечных лучей. При соблюдении вышеуказанных условий хранения срок годности смолы составляет не менее 6 месяцев с даты выпуска.",
                                  Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
                                 }
                          
                              },
                              BUP631 :{
                                  fa:{
                                   product:"رزین پلی استر غیر اشباع",
                                   name:"BUP631",
                                   pdf:"BUP631-Fa.pdf",
                                   Description:"BUP 631 رزین پلی استر غیر اشباع بر پایه اورتوفتالیک، پیش‌­فعال­‌شده و تیکسوتروپ، دارای گرانروی متوسط، جذب آب کم، مقاومت در برابر هیدرولیز و ویژگی­‌های مکانیکی بسیار خوب جهت پخت در دمای محیط به کمک متیل اتیل کتون پراکسید است.",
                                   Characteristics:[
                                    "رنگ کم",
                                   "جذب آب کم",
                                   "مقاومت در برابر آبکافت (هیدرولیز)",
                                   "چسبندگی عالی به الیاف شیشه­",
                                   "ویژگی­‌های مکانیکی و شیمیایی بسیار خوب"
          
                                   ],
                                   Uses:[
                                     "شناورها و قایق­‌های دریایی",
                                     "پالتروژن"
                                   ],
                                   Table: [
                                    {
                                        propertis:"شکل ظاهری",
                                        unit:"-",
                                        value:"مه آلود- بنفش فام",
                                        testMethod:"-"
                                    },
                                    {
                                        propertis:"رنگ",
                                        unit:"Gardner",
                                        value:"-",
                                        testMethod:"ASTM D1544"
                                    },
                                    {
                                        propertis:"گرانروی (℃25)",
                                        unit:"mPa.s (cP)",
                                        value:"700-1000",
                                        testMethod:"ISO 2555"
                                    },
                                    {
                                        propertis:"چگالی  (℃23)",
                                        unit:"g/cm³",
                                        value:"1.1599",
                                        testMethod:"ASTM D1475"
                                    },
                                    {
                                        propertis:"عدد اسیدی",
                                        unit:"mg KOH/g",
                                        value:"20>",
                                        testMethod:"ASTM D1639"
                                    },
                                    {
                                        propertis:"درصد جامد",
                                        unit:"% wt",
                                        value:"63±2",
                                        testMethod:"ASTM D1259"
                                    },
                                    {
                                        propertis:"*زمان ژل شدن",
                                        unit:"min",
                                        value:"18-35",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"زمان پخت",
                                        unit:"min",
                                        value:"12-25",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"دمای بیشینه گرمازایی (پیک اگزوترم)",
                                        unit:"℃",
                                        value:"170>",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"جذب آب",
                                        unit:"% wt",
                                        value:"0.22>",
                                        testMethod:"ISO 62"
                                    },
                                    {
                                        propertis:"نقطه اشتعال (جام روباز)",
                                        unit:"℃",
                                        value:"23",
                                        testMethod:"ASTM D92"
                                    },
                                    {
                                        propertis:"استحکام کششی",
                                        unit:"MPa",
                                        value:"65<",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"ازدیاد طول",
                                        unit:"%",
                                        value:"3.41",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"مدول کششی",
                                        unit:"MPa",
                                        value:"1660",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"استحکام خمشی",
                                        unit:"MPa",
                                        value:"120<",
                                        testMethod:"ISO 178"
                                    },
                                    {
                                        propertis:"مدول خمشی",
                                        unit:"MPa",
                                        value:"3983",
                                        testMethod:"ISO 178"
                                    },
                                    {
                                        propertis:"دمای خمش گرمایی",
                                        unit:"℃",
                                        value:"65<",
                                        testMethod:"ASTM D648"
                                    },
                                    {
                                        propertis:"سختی ( بارکول)",
                                        unit:"-",
                                        value:"40<",
                                        testMethod:"ASTM D2583"
                                    },
                                    {
                                        propertis:"جمع شدگی طولی  (L/L∆)",
                                        unit:"%",
                                        value:"1.2>",
                                        testMethod:"ASTM D2566"
                                    }
                                ],
                                   safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های پلی استر غیر اشباع رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                                   Packaging:"225 کیلوگرم (خالص) در بشکه‌های فولادی.",
                                   Storage:"محصول را در محل خنک و در دمای کمتر از ℃25 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید. در صورت رعایت شرایط نامبرده، عمر مفید انبارداری محصول حداقل 6 ماه از زمان تحویل است.",
                                   Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
                                  },
                                  en:{
                                   product:"Unsaturated Polyester Resin",
                                   name:"BUP631",
                                   pdf:"BUP631-En.pdf",
                                   Description:"BUP 631 is a pre-promoted and thixotropic orthophthalic based unsaturated polyester resin with medium viscosity, limited water absorption, resistant to hydrolysis and very good mechanical properties for ambient temperature cure with MEK peroxide.",
                                   Characteristics:[
                                      "Medium viscosity",
                                      "Limited water absorption",
                                      "Resistance to hydrolysis",
                                      "Excellent adhesion to glass fiber",
                                      "Very good mechanical and chemical properties"
                                      
 
             
                                   ],
                                   Uses:[
                                     
                                     "Marine vessels and boats",
                                     "Pultrusion"
                   
                                   ],
                                   Table: [
                                    {
                                        propertis:"Appearance",
                                        unit:"-",
                                        value:"Hazy, violet",
                                        testMethod:"-"
                                    },
                                    {
                                        propertis:"Color",
                                        unit:"Gardner",
                                        value:"-",
                                        testMethod:"ASTM D1544"
                                    },
                                    {
                                        propertis:"Viscosity (at 25°C)",
                                        unit:"mPa.s (cP)",
                                        value:"700-1000",
                                        testMethod:"ISO 2555"
                                    },
                                    {
                                        propertis:"Density (at 23°C)",
                                        unit:"g/cm³",
                                        value:"1.1599",
                                        testMethod:"ASTM D1475"
                                    },
                                    {
                                        propertis:"Acid number",
                                        unit:"mg KOH/g",
                                        value:"<20",
                                        testMethod:"ASTM D1639"
                                    },
                                    {
                                        propertis:"Solid content",
                                        unit:"wt %",
                                        value:"63±2",
                                        testMethod:"ASTM D1259"
                                    },
                                    {
                                        propertis:"Gel time*",
                                        unit:"min",
                                        value:"18-35",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"Curing time",
                                        unit:"min",
                                        value:"12-25",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"Peak exothermic temperature",
                                        unit:"℃",
                                        value:"170>",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"Water absorption",
                                        unit:"% wt ",
                                        value:"0.22>",
                                        testMethod:"ISO 62"
                                    },
                                    {
                                        propertis:"Flash point (open cup)",
                                        unit:"℃",
                                        value:"23",
                                        testMethod:"ASTM D92"
                                    },
                                    {
                                        propertis:"Tensile strength",
                                        unit:"MPa",
                                        value:"65<",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"Tensile elongation",
                                        unit:"%",
                                        value:"3.41",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"Tensile modulus",
                                        unit:"MPa",
                                        value:"1660",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"Flexural strength",
                                        unit:"MPa",
                                        value:"120<",
                                        testMethod:"ISO 178"
                                    },
                                    {
                                        propertis:"Flexural modulus",
                                        unit:"MPa",
                                        value:"3983",
                                        testMethod:"ISO 178"
                                    },
                                    {
                                        propertis:"Heat distortion temperature (HDT)",
                                        unit:"℃",
                                        value:"65<",
                                        testMethod:"ASTM D648"
                                    },
                                    {
                                        propertis:"Hardness (Barcol))",
                                        unit:"-",
                                        value:"40<",
                                        testMethod:"ASTM D2583"
                                    },
                                    {
                                        propertis:"Linear shrinkage (∆L/L)",
                                        unit:"%",
                                        value:"1.2>",
                                        testMethod:"ASTM D2566"
                                    }
                                ],
                                   safety:"The usual protective measures employed during the handling of Unsaturated Polyester Resins should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                                   Packaging:"225 kg (net) in steel drums.",
                                   Storage:"Store in a cool place below 25 °C and away from moisture and direct sunlight. Under above mentioned storage conditions, the shelf life of the resin will be at least 6 months ex-works.",
                                   Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
                                  },
                                  ru:{
                                   product:"Ненасыщенная полиэфирная смола",
                                   name:"BUP631",
                                   pdf:"TDS-BUP-631_RU.pdf",
                                   Description:"BUP 631 –тиксотропная предускореная ненасыщенная полиэфирная смола на ортофталевой основе, со средней вязкостью, ограниченным водопоглощением, устойчивая к гидролизу и с очень хорошими механическими свойствами для отверждения при комнатной температуре с помощью MEK пероксида.",
                                   Characteristics:[
                                      "Средняя вязкость",
                                      "Ограниченное водопоглощение",
                                      "Стойкость к гидролизу",
                                      "Отличная адгезия к стекловолокну",
                                      "Очень хорошие механические и химические свойства"
                                   ],
                                   Uses:[
                                      "Морские судна и яхты",
                                      "Пултрузия/протяжка"
                                   ],
                                   Table: [
                                    {
                                        propertis:"Внешний вид",
                                        unit:"-",
                                        value:"Дымчатый, лиловый",
                                        testMethod:"-"
                                    },
                                    {
                                        propertis:"Цвет",
                                        unit:"Гарднер",
                                        value:"-",
                                        testMethod:"ASTM D1544"
                                    },
                                    {
                                        propertis:"Вязкость (при 25°C)",
                                        unit:"мПа.с (сантипуаз)",
                                        value:"700-1000",
                                        testMethod:"ISO 2555"
                                    },
                                    {
                                        propertis:"Плотность (при 23°C)",
                                        unit:"г/см³",
                                        value:"1.1599",
                                        testMethod:"ASTM D1475"
                                    },
                                    {
                                        propertis:"Кислотное число",
                                        unit:"мг KOH/г",
                                        value:"<20",
                                        testMethod:"ASTM D1639"
                                    },
                                    {
                                        propertis:"Сухой остаток",
                                        unit:"% веса",
                                        value:"63±2",
                                        testMethod:"ASTM D1259"
                                    },
                                    {
                                        propertis:"Время гелеобразования*",
                                        unit:"минуты",
                                        value:"18-35",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"Время отверждения",
                                        unit:"минуты",
                                        value:"12-25",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"Пик на экзотермической кривой",
                                        unit:"℃",
                                        value:"170>",
                                        testMethod:"ASTM D2471"
                                    },
                                    {
                                        propertis:"Влагопоглощение",
                                        unit:"% веса",
                                        value:"0.22>",
                                        testMethod:"ISO 62"
                                    },
                                    {
                                        propertis:"Температура вспышки (в откр. тигле)",
                                        unit:"℃",
                                        value:"23",
                                        testMethod:"ASTM D92"
                                    },
                                    {
                                        propertis:"Прочность на растяжение/разрыв",
                                        unit:"МПa",
                                        value:"65<",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"Удлинение при растяжении",
                                        unit:"%",
                                        value:"3.41",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"Удлинение при растяжении",
                                        unit:"МПa",
                                        value:"1660",
                                        testMethod:"ISO 527-2"
                                    },
                                    {
                                        propertis:"Прочность на изгиб",
                                        unit:"МПa",
                                        value:"120<",
                                        testMethod:"ISO 178"
                                    },
                                    {
                                        propertis:"Модуль упругости при изгибе",
                                        unit:"МПa",
                                        value:"3983",
                                        testMethod:"ISO 178"
                                    },
                                    {
                                        propertis:"Температура допустимой деформации",
                                        unit:"℃",
                                        value:"65<",
                                        testMethod:"ASTM D648"
                                    },
                                    {
                                        propertis:"Твердость (по Барколу)",
                                        unit:"-",
                                        value:"40<",
                                        testMethod:"ASTM D2583"
                                    },
                                    {
                                        propertis:"Линейная усадка (∆L/L)",
                                        unit:"%",
                                        value:"1.2>",
                                        testMethod:"ASTM D2566"
                                    }
                                ],
                                   safety:"Следует соблюдать стандартные меры безопасности транспортировки ненасыщенных полиэфирных смол. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                                   Packaging:"225 кг (нетто) в металлических бочках.",
                                   Storage:"Хранить в прохладном месте при температуре ниже 25 °C и вдали от влаги и прямых солнечных лучей. При соблюдении вышеуказанных условий хранения срок годности смолы составляет не менее 6 месяцев с даты выпуска.",
                                   Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
                                  }
                           
                               },
                               BUP640 :{
                                   fa:{
                                    product:"رزین پلی استر غیر اشباع",
                                    name:"BUP640",
                                    pdf:"BUP640-Fa.pdf",
                                    Description:"BUP 640 رزین پلی استر غیر اشباع بر پایه اورتوفتالیک و غیر فعال، دارای رنگ بسیار کم، گرانروی و درصد جامد زیاد؛ شفافیت، انعطاف­‌پذیری و ویژگی­‌های مکانیکی خوب جهت پخت در دمای محیط به کمک متیل اتیل کتون پراکسید است.",
                                    Characteristics:[
                                     "رنگ بسیارکم",
                                     "گرانروی و درصد جامد زیاد",
                                     "انعطاف­‌پذیری و شفافیت خوب",
                                     "ویژگی‌­های مکانیکی خوب"
           
                                    ],
                                    Uses:[
                                      "تولید دکمه",
                                      "قالب­‌گیری مدل­‌های شفاف تزئینی",
                                      "قالب­‌گیری قطعات بسیار شفاف"
                                    ],
                                    Table: [
                                        {
                                            propertis:"شکل ظاهری",
                                            unit:"-",
                                            value:"شفاف",
                                            testMethod:"-"
                                        },
                                        {
                                            propertis:"رنگ",
                                            unit:"Gardner",
                                            value:"0.3",
                                            testMethod:"ASTM D1544"
                                        },
                                        {
                                            propertis:"گرانروی (℃25)",
                                            unit:"mPa.s (cP)",
                                            value:"1200-1700",
                                            testMethod:"ISO 2555"
                                        },
                                        {
                                            propertis:"چگالی  (℃23)",
                                            unit:"g/cm³",
                                            value:"1.1678",
                                            testMethod:"ASTM D1475"
                                        },
                                        {
                                            propertis:"عدد اسیدی",
                                            unit:"mg KOH/g",
                                            value:"25>",
                                            testMethod:"ASTM D1639"
                                        },
                                        {
                                            propertis:"درصد جامد",
                                            unit:"% wt",
                                            value:"71±2",
                                            testMethod:"ASTM D1259"
                                        },
                                        {
                                            propertis:"*زمان ژل شدن",
                                            unit:"min",
                                            value:"8-12",
                                            testMethod:"ASTM D2471"
                                        },
                                        {
                                            propertis:"زمان پخت",
                                            unit:"min",
                                            value:"6-10",
                                            testMethod:"ASTM D2471"
                                        },
                                        {
                                            propertis:"دمای بیشینه گرمازایی (پیک اگزوترم)",
                                            unit:"℃",
                                            value:"170>",
                                            testMethod:"ASTM D2471"
                                        },
                                        {
                                            propertis:"جذب آب",
                                            unit:"% wt",
                                            value:"0.3>",
                                            testMethod:"ISO 62"
                                        },
                                        {
                                            propertis:"نقطه اشتعال (جام روباز)",
                                            unit:"℃",
                                            value:"22",
                                            testMethod:"ASTM D92"
                                        },
                                        {
                                            propertis:"استحکام کششی",
                                            unit:"MPa",
                                            value:"45<",
                                            testMethod:"ISO 527-2"
                                        },
                                        {
                                            propertis:"ازدیاد طول",
                                            unit:"%",
                                            value:"3.41",
                                            testMethod:"ISO 527-2"
                                        },
                                        {
                                            propertis:"مدول کششی",
                                            unit:"MPa",
                                            value:"440",
                                            testMethod:"ISO 527-2"
                                        },
                                        {
                                            propertis:"استحکام خمشی",
                                            unit:"MPa",
                                            value:"90<",
                                            testMethod:"ISO 178"
                                        },
                                        {
                                            propertis:"مدول خمشی",
                                            unit:"MPa",
                                            value:"1650",
                                            testMethod:"ISO 178"
                                        },
                                        {
                                            propertis:"دمای خمش گرمایی",
                                            unit:"℃",
                                            value:"55<",
                                            testMethod:"ASTM D648"
                                        },
                                        {
                                            propertis:"سختی ( بارکول)",
                                            unit:"-",
                                            value:"35<",
                                            testMethod:"ASTM D2583"
                                        },
                                        {
                                            propertis:"جمع شدگی طولی  (L/L∆)",
                                            unit:"%",
                                            value:"1>",
                                            testMethod:"ASTM D2566"
                                        }
                                    ],
                                    safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های پلی استر غیر اشباع رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                                    Packaging:"225 کیلوگرم (خالص) در بشکه‌های فولادی.",
                                    Storage:"محصول را در محل خنک و در دمای کمتر از ℃25 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید. در صورت رعایت شرایط نامبرده، عمر مفید انبارداری محصول حداقل 1 ماه از زمان تحویل است.",
                                    Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
                                   },
                                   en:{
                                    product:"Unsaturated Polyester Resin",
                                    name:"BUP640",
                                    pdf:"BUP640-En.pdf",
                                    Description:"BUP 640 is an un-promoted orthophthalic based unsaturated polyester resin with very low color, high solid and viscosity, good flexibility, transparency and mechanical properties for ambient temperature cure with MEK peroxide.",
                                    Characteristics:[
                                       "Very low color",
                                       "High solid and viscosity",
                                       "Good flexibility and transparency",
                                       "Good mechanical properties"
                                       
  
              
                                    ],
                                    Uses:[
                                      "Manufacturing buttons",
                                      "Manufacturing embedded parts",
                                      "Highly transparent castings"
                    
                                    ],
                                    Table: [
                                        {
                                            propertis:"Appearance",
                                            unit:"-",
                                            value:"clear",
                                            testMethod:"-"
                                        },
                                        {
                                            propertis:"Color",
                                            unit:"Gardner",
                                            value:"<0.3",
                                            testMethod:"ASTM D1544"
                                        },
                                        {
                                            propertis:"Viscosity (at 25°C)",
                                            unit:"mPa.s (cP)",
                                            value:"1200-1700",
                                            testMethod:"ISO 2555"
                                        },
                                        {
                                            propertis:"Density (at 23°C)",
                                            unit:"g/cm³",
                                            value:"1.1678",
                                            testMethod:"ASTM D1475"
                                        },
                                        {
                                            propertis:"Acid number",
                                            unit:"mg KOH/g",
                                            value:"<25",
                                            testMethod:"ASTM D1639"
                                        },
                                        {
                                            propertis:"Solid content",
                                            unit:"wt %",
                                            value:"71±2",
                                            testMethod:"ASTM D1259"
                                        },
                                        {
                                            propertis:"Gel time*",
                                            unit:"min",
                                            value:"8-12",
                                            testMethod:"ASTM D2471"
                                        },
                                        {
                                            propertis:"Curing time",
                                            unit:"min",
                                            value:"6-10",
                                            testMethod:"ASTM D2471"
                                        },
                                        {
                                            propertis:"Peak exothermic temperature",
                                            unit:"℃",
                                            value:"170>",
                                            testMethod:"ASTM D2471"
                                        },
                                        {
                                            propertis:"Water absorption",
                                            unit:"% wt ",
                                            value:"0.3>",
                                            testMethod:"ISO 62"
                                        },
                                        {
                                            propertis:"Flash point (open cup)",
                                            unit:"℃",
                                            value:"22",
                                            testMethod:"ASTM D92"
                                        },
                                        {
                                            propertis:"Tensile strength",
                                            unit:"MPa",
                                            value:"45<",
                                            testMethod:"ISO 527-2"
                                        },
                                        {
                                            propertis:"Tensile elongation",
                                            unit:"%",
                                            value:"3.41",
                                            testMethod:"ISO 527-2"
                                        },
                                        {
                                            propertis:"Tensile modulus",
                                            unit:"MPa",
                                            value:"440",
                                            testMethod:"ISO 527-2"
                                        },
                                        {
                                            propertis:"Flexural strength",
                                            unit:"MPa",
                                            value:"90<",
                                            testMethod:"ISO 178"
                                        },
                                        {
                                            propertis:"Flexural modulus",
                                            unit:"MPa",
                                            value:"1650",
                                            testMethod:"ISO 178"
                                        },
                                        {
                                            propertis:"Heat distortion temperature (HDT)",
                                            unit:"℃",
                                            value:"55<",
                                            testMethod:"ASTM D648"
                                        },
                                        {
                                            propertis:"Hardness (Barcol))",
                                            unit:"-",
                                            value:"35<",
                                            testMethod:"ASTM D2583"
                                        },
                                        {
                                            propertis:"Linear shrinkage (∆L/L)",
                                            unit:"%",
                                            value:"1>",
                                            testMethod:"ASTM D2566"
                                        }
                                    ],
                                    safety:"The usual protective measures employed during the handling of Unsaturated Polyester Resins should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                                    Packaging:"225 kg (net) in steel drums.",
                                    Storage:"Store in a cool place below 25 °C and away from moisture and direct sunlight. Under above mentioned storage conditions, the shelf life of the resin will be at least 1 months ex-works.",
                                    Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
                                   },
                                   ru:{
                                    product:"Ненасыщенная полиэфирная смола",
                                    name:"BUP640",
                                    pdf:"TDS-BUP-640_RU.pdf",
                                    Description:"BUP 640 –слабоокрашенная немодифицированная ненасыщенная полиэфирная смола на ортофталевой основе, высоконаполненная, с высокой вязкостью, хорошей пластичностью, прозрачностью и механическими свойствами для отверждения при комнатной температуре с помощью MEK пероксида.",
                                    Characteristics:[
                                       "Очень низкая пигментация",
                                       "Высокое содержание сухого вещества и вязкость",
                                       "Хорошая пластичность и прозрачность",
                                       "Хорошие механические свойства"

                                    ],
                                    Uses:[
                                       "Производство пуговиц",
                                       "Производсто закладных деталей",
                                       "Высокопрозрачное литье"
                                    ],
                                    Table: [
                                        {
                                            propertis:"Внешний вид",
                                            unit:"-",
                                            value:"Прозрачный",
                                            testMethod:"-"
                                        },
                                        {
                                            propertis:"Цвет",
                                            unit:"Гарднер",
                                            value:"<0.3",
                                            testMethod:"ASTM D1544"
                                        },
                                        {
                                            propertis:"Вязкость (при 25°C)",
                                            unit:"мПа.с (сантипуаз)",
                                            value:"1200-1700",
                                            testMethod:"ISO 2555"
                                        },
                                        {
                                            propertis:"Плотность (при 23°C)",
                                            unit:"г/см³",
                                            value:"1.1678",
                                            testMethod:"ASTM D1475"
                                        },
                                        {
                                            propertis:"Кислотное число",
                                            unit:"мг KOH/г",
                                            value:"<25",
                                            testMethod:"ASTM D1639"
                                        },
                                        {
                                            propertis:"Сухой остаток",
                                            unit:"% веса",
                                            value:"71±2",
                                            testMethod:"ASTM D1259"
                                        },
                                        {
                                            propertis:"Время гелеобразования*",
                                            unit:"минуты",
                                            value:"8-12",
                                            testMethod:"ASTM D2471"
                                        },
                                        {
                                            propertis:"Время отверждения",
                                            unit:"минуты",
                                            value:"6-10",
                                            testMethod:"ASTM D2471"
                                        },
                                        {
                                            propertis:"Пик на экзотермической кривой",
                                            unit:"℃",
                                            value:"170>",
                                            testMethod:"ASTM D2471"
                                        },
                                        {
                                            propertis:"Влагопоглощение",
                                            unit:"% веса",
                                            value:"0.3>",
                                            testMethod:"ISO 62"
                                        },
                                        {
                                            propertis:"Температура вспышки (в откр. тигле)",
                                            unit:"℃",
                                            value:"22",
                                            testMethod:"ASTM D92"
                                        },
                                        {
                                            propertis:"Прочность на растяжение/разрыв",
                                            unit:"МПa",
                                            value:"45<",
                                            testMethod:"ISO 527-2"
                                        },
                                        {
                                            propertis:"Удлинение при растяжении",
                                            unit:"%",
                                            value:"3.41",
                                            testMethod:"ISO 527-2"
                                        },
                                        {
                                            propertis:"Удлинение при растяжении",
                                            unit:"МПa",
                                            value:"440",
                                            testMethod:"ISO 527-2"
                                        },
                                        {
                                            propertis:"Прочность на изгиб",
                                            unit:"МПa",
                                            value:"90<",
                                            testMethod:"ISO 178"
                                        },
                                        {
                                            propertis:"Модуль упругости при изгибе",
                                            unit:"МПa",
                                            value:"1650",
                                            testMethod:"ISO 178"
                                        },
                                        {
                                            propertis:"Температура допустимой деформации",
                                            unit:"℃",
                                            value:"55<",
                                            testMethod:"ASTM D648"
                                        },
                                        {
                                            propertis:"Твердость (по Барколу)",
                                            unit:"-",
                                            value:"35<",
                                            testMethod:"ASTM D2583"
                                        },
                                        {
                                            propertis:"Линейная усадка (∆L/L)",
                                            unit:"%",
                                            value:"1>",
                                            testMethod:"ASTM D2566"
                                        }
                                    ],
                                    safety:"Следует соблюдать стандартные меры безопасности транспортировки ненасыщенных полиэфирных смол. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                                    Packaging:"225 кг (нетто) в металлических бочках.",
                                    Storage:"Хранить в прохладном месте при температуре ниже 25 °C и вдали от влаги и прямых солнечных лучей. При соблюдении вышеуказанных условий хранения срок годности смолы составляет не менее 1 месяца с даты выпуска.",
                                    Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
                                   }
                            
                                },
                                BUP645 :{
                                    fa:{
                                     product:"رزین پلی استر غیر اشباع",
                                     name:"BUP645",
                                     pdf:"BUP645-Fa.pdf",
                                     Description:"BUP 645 رزین پلی استر غیر اشباع بر پایه اورتوفتالیک و غیر فعال، دارای رنگ بسیار کم، گرانروی متوسط و ویژگی­‌های مکانیکی خوب جهت پخت در دمای محیط به کمک متیل اتیل کتون پراکسید است.",
                                     Characteristics:[
                                      "رنگ بسیارکم",
                                        "انعطاف­‌پذیری و شفافیت خوب",
                                        "ویژگی‌­های مکانیکی خوب"
                                     ],
                                     Uses:[
                                       "لاک و عایق الکتریکی"
                                     ],
                                     Table: [
                                        {
                                            propertis:"شکل ظاهری",
                                            unit:"-",
                                            value:"شفاف",
                                            testMethod:"-"
                                        },
                                        {
                                            propertis:"رنگ",
                                            unit:"Gardner",
                                            value:"0.3",
                                            testMethod:"ASTM D1544"
                                        },
                                        {
                                            propertis:"گرانروی (℃25)",
                                            unit:"mPa.s (cP)",
                                            value:"400-500",
                                            testMethod:"ISO 2555"
                                        },
                                        {
                                            propertis:"چگالی  (℃23)",
                                            unit:"g/cm³",
                                            value:"1.1446",
                                            testMethod:"ASTM D1475"
                                        },
                                        {
                                            propertis:"عدد اسیدی",
                                            unit:"mg KOH/g",
                                            value:"26>",
                                            testMethod:"ASTM D1639"
                                        },
                                        {
                                            propertis:"درصد جامد",
                                            unit:"% wt",
                                            value:"64±2",
                                            testMethod:"ASTM D1259"
                                        },
                                        {
                                            propertis:"*زمان ژل شدن",
                                            unit:"min",
                                            value:"8-15",
                                            testMethod:"ASTM D2471"
                                        },
                                        {
                                            propertis:"زمان پخت",
                                            unit:"min",
                                            value:"8-13",
                                            testMethod:"ASTM D2471"
                                        },
                                        {
                                            propertis:"دمای بیشینه گرمازایی (پیک اگزوترم)",
                                            unit:"℃",
                                            value:"190>",
                                            testMethod:"ASTM D2471"
                                        },
                                        {
                                            propertis:"جذب آب",
                                            unit:"% wt",
                                            value:"0.25>",
                                            testMethod:"ISO 62"
                                        },
                                        {
                                            propertis:"نقطه اشتعال (جام روباز)",
                                            unit:"℃",
                                            value:"21",
                                            testMethod:"ASTM D92"
                                        },
                                        {
                                            propertis:"استحکام کششی",
                                            unit:"MPa",
                                            value:"40<",
                                            testMethod:"ISO 527-2"
                                        },
                                        {
                                            propertis:"ازدیاد طول",
                                            unit:"%",
                                            value:"9.2",
                                            testMethod:"ISO 527-2"
                                        },
                                        {
                                            propertis:"مدول کششی",
                                            unit:"MPa",
                                            value:"415",
                                            testMethod:"ISO 527-2"
                                        },
                                        {
                                            propertis:"استحکام خمشی",
                                            unit:"MPa",
                                            value:"70<",
                                            testMethod:"ISO 178"
                                        },
                                        {
                                            propertis:"مدول خمشی",
                                            unit:"MPa",
                                            value:"1410",
                                            testMethod:"ISO 178"
                                        },
                                        {
                                            propertis:"دمای خمش گرمایی",
                                            unit:"℃",
                                            value:"55<",
                                            testMethod:"ASTM D648"
                                        },
                                        {
                                            propertis:"سختی ( بارکول)",
                                            unit:"-",
                                            value:"30<",
                                            testMethod:"ASTM D2583"
                                        },
                                        {
                                            propertis:"جمع شدگی طولی  (L/L∆)",
                                            unit:"%",
                                            value:"1.1>",
                                            testMethod:"ASTM D2566"
                                        }
                                    ],
                                     safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های پلی استر غیر اشباع رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                                     Packaging:"225 کیلوگرم (خالص) در بشکه‌های فولادی.",
                                     Storage:"محصول را در محل خنک و در دمای کمتر از ℃25 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید. در صورت رعایت شرایط نامبرده، عمر مفید انبارداری محصول حداقل 6 ماه از زمان تحویل است.",
                                     Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
                                    },
                                    en:{
                                     product:"Unsaturated Polyester Resin",
                                     name:"BUP645",
                                     pdf:"BUP645-En.pdf",
                                     Description:"BUP 645 is an un-promoted orthophthalic based unsaturated polyester resin with very low color, medium viscosity and good mechanical properties for ambient temperature cure with MEK peroxide.",
                                     Characteristics:[
                                        "Very low color",

                                        "Good flexibility and transparency",
                                        "Good mechanical properties"
                                        
   
               
                                     ],
                                     Uses:[
                                       "Lacquer and electrical insulation applications"
                     
                                     ],
                                     Table: [
                                        {
                                            propertis:"Appearance",
                                            unit:"-",
                                            value:"clear",
                                            testMethod:"-"
                                        },
                                        {
                                            propertis:"Color",
                                            unit:"Gardner",
                                            value:"<0.3",
                                            testMethod:"ASTM D1544"
                                        },
                                        {
                                            propertis:"Viscosity (at 25°C)",
                                            unit:"mPa.s (cP)",
                                            value:"400-500",
                                            testMethod:"ISO 2555"
                                        },
                                        {
                                            propertis:"Density (at 23°C)",
                                            unit:"g/cm³",
                                            value:"1.1446",
                                            testMethod:"ASTM D1475"
                                        },
                                        {
                                            propertis:"Acid number",
                                            unit:"mg KOH/g",
                                            value:"<26",
                                            testMethod:"ASTM D1639"
                                        },
                                        {
                                            propertis:"Solid content",
                                            unit:"wt %",
                                            value:"64±2",
                                            testMethod:"ASTM D1259"
                                        },
                                        {
                                            propertis:"Gel time*",
                                            unit:"min",
                                            value:"8-15",
                                            testMethod:"ASTM D2471"
                                        },
                                        {
                                            propertis:"Curing time",
                                            unit:"min",
                                            value:"8-13",
                                            testMethod:"ASTM D2471"
                                        },
                                        {
                                            propertis:"Peak exothermic temperature",
                                            unit:"℃",
                                            value:"190>",
                                            testMethod:"ASTM D2471"
                                        },
                                        {
                                            propertis:"Water absorption",
                                            unit:"% wt ",
                                            value:"0.25>",
                                            testMethod:"ISO 62"
                                        },
                                        {
                                            propertis:"Flash point (open cup)",
                                            unit:"℃",
                                            value:"21",
                                            testMethod:"ASTM D92"
                                        },
                                        {
                                            propertis:"Tensile strength",
                                            unit:"MPa",
                                            value:"40<",
                                            testMethod:"ISO 527-2"
                                        },
                                        {
                                            propertis:"Tensile elongation",
                                            unit:"%",
                                            value:"9.2",
                                            testMethod:"ISO 527-2"
                                        },
                                        {
                                            propertis:"Tensile modulus",
                                            unit:"MPa",
                                            value:"415",
                                            testMethod:"ISO 527-2"
                                        },
                                        {
                                            propertis:"Flexural strength",
                                            unit:"MPa",
                                            value:"70<",
                                            testMethod:"ISO 178"
                                        },
                                        {
                                            propertis:"Flexural modulus",
                                            unit:"MPa",
                                            value:"1410",
                                            testMethod:"ISO 178"
                                        },
                                        {
                                            propertis:"Heat distortion temperature (HDT)",
                                            unit:"℃",
                                            value:"55<",
                                            testMethod:"ASTM D648"
                                        },
                                        {
                                            propertis:"Hardness (Barcol))",
                                            unit:"-",
                                            value:"30<",
                                            testMethod:"ASTM D2583"
                                        },
                                        {
                                            propertis:"Linear shrinkage (∆L/L)",
                                            unit:"%",
                                            value:"1.1>",
                                            testMethod:"ASTM D2566"
                                        }
                                    ],
                                     safety:"The usual protective measures employed during the handling of Unsaturated Polyester Resins should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                                     Packaging:"225 kg (net) in steel drums.",
                                     Storage:"Store in a cool place below 25 °C and away from moisture and direct sunlight. Under above mentioned storage conditions, the shelf life of the resin will be at least 6 months ex-works.",
                                     Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
                                    },
                                    ru:{
                                     product:"Ненасыщенная полиэфирная смола",
                                     name:"BUP645",
                                     pdf:"TDS-BUP-645_RU.pdf",
                                     Description:"BUP 645 –слабоокрашенная немодифицированная ненасыщенная полиэфирная смола на ортофталевой основе, высоконаполненная, с высокой вязкостью, хорошей пластичностью, прозрачностью и механическими свойствами для отверждения при комнатной температуре с помощью MEK пероксида.",
                                     Characteristics:[
                                        "Очень низкая пигментация",

                                        "Хорошая пластичность и прозрачность",
                                        "Хорошие механические свойства"
 
                                     ],
                                     Uses:[
                                        "Лаки и электроизоляционные материалы"
                                     ],
                                     Table: [
                                        {
                                            propertis:"Внешний вид",
                                            unit:"-",
                                            value:"Прозрачный",
                                            testMethod:"-"
                                        },
                                        {
                                            propertis:"Цвет",
                                            unit:"Гарднер",
                                            value:"<0.3",
                                            testMethod:"ASTM D1544"
                                        },
                                        {
                                            propertis:"Вязкость (при 25°C)",
                                            unit:"мПа.с (сантипуаз)",
                                            value:"400-500",
                                            testMethod:"ISO 2555"
                                        },
                                        {
                                            propertis:"Плотность (при 23°C)",
                                            unit:"г/см³",
                                            value:"1.1446",
                                            testMethod:"ASTM D1475"
                                        },
                                        {
                                            propertis:"Кислотное число",
                                            unit:"мг KOH/г",
                                            value:"<26",
                                            testMethod:"ASTM D1639"
                                        },
                                        {
                                            propertis:"Сухой остаток",
                                            unit:"% веса",
                                            value:"64±2",
                                            testMethod:"ASTM D1259"
                                        },
                                        {
                                            propertis:"Время гелеобразования*",
                                            unit:"минуты",
                                            value:"8-15",
                                            testMethod:"ASTM D2471"
                                        },
                                        {
                                            propertis:"Время отверждения",
                                            unit:"минуты",
                                            value:"8-13",
                                            testMethod:"ASTM D2471"
                                        },
                                        {
                                            propertis:"Пик на экзотермической кривой",
                                            unit:"℃",
                                            value:"190>",
                                            testMethod:"ASTM D2471"
                                        },
                                        {
                                            propertis:"Влагопоглощение",
                                            unit:"% веса",
                                            value:"0.25>",
                                            testMethod:"ISO 62"
                                        },
                                        {
                                            propertis:"Температура вспышки (в откр. тигле)",
                                            unit:"℃",
                                            value:"21",
                                            testMethod:"ASTM D92"
                                        },
                                        {
                                            propertis:"Прочность на растяжение/разрыв",
                                            unit:"МПa",
                                            value:"40<",
                                            testMethod:"ISO 527-2"
                                        },
                                        {
                                            propertis:"Удлинение при растяжении",
                                            unit:"%",
                                            value:"8.2",
                                            testMethod:"ISO 527-2"
                                        },
                                        {
                                            propertis:"Удлинение при растяжении",
                                            unit:"МПa",
                                            value:"415",
                                            testMethod:"ISO 527-2"
                                        },
                                        {
                                            propertis:"Прочность на изгиб",
                                            unit:"МПa",
                                            value:"70<",
                                            testMethod:"ISO 178"
                                        },
                                        {
                                            propertis:"Модуль упругости при изгибе",
                                            unit:"МПa",
                                            value:"1410",
                                            testMethod:"ISO 178"
                                        },
                                        {
                                            propertis:"Температура допустимой деформации",
                                            unit:"℃",
                                            value:"55<",
                                            testMethod:"ASTM D648"
                                        },
                                        {
                                            propertis:"Твердость (по Барколу)",
                                            unit:"-",
                                            value:"30<",
                                            testMethod:"ASTM D2583"
                                        },
                                        {
                                            propertis:"Линейная усадка (∆L/L)",
                                            unit:"%",
                                            value:"1.1>",
                                            testMethod:"ASTM D2566"
                                        }
                                    ],
                                     safety:"Следует соблюдать стандартные меры безопасности транспортировки ненасыщенных полиэфирных смол. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                                     Packaging:"225 кг (нетто) в металлических бочках.",
                                     Storage:"Хранить в прохладном месте при температуре ниже 25 °C и вдали от влаги и прямых солнечных лучей. При соблюдении вышеуказанных условий хранения срок годности смолы составляет не менее 6 месяца с даты выпуска.",
                                     Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
                                    }
                             
                                 },
                                 BUP660 :{
                                     fa:{
                                      product:"رزین پلی استر غیر اشباع",
                                      name:"BUP660",
                                      pdf:"BUP660-Fa.pdf",
                                      Description:"BUP 660 رزین پلی استر غیر اشباع بر پایه ایزوفتالیک و غیر فعال، دارای رنگ کم و گرانروی متوسط، جمع‌‌­شدگی و جذب آب کم و ویژگی­‌های مکانیکی بسیار خوب جهت پخت در دمای محیط به کمک متیل اتیل کتون پراکسید است.",
                                      Characteristics:[
                                       "رنگ بسیارکم",
                                       "گرانروی متوسط",
                                       "جمع­‌شدگی و جذب آب کم",
                                       "چسبندگی عالی به الیاف شیشه­",
                                       "ویژگی­‌های مکانیکی و شیمیایی بسیار خوب",
                                       "دارای گواهی بهداشتی تماس با آب"
                                      ],
                                      Uses:[
                                        "تولید لوله",
                                        "تولید مخازن",
                                        "ساخت اتصالات بهداشتی ساختمانی",
                                        "شناورها و قایق های دریایی",
                                        "پالتروژن"
                                      ],
                                      Table: [
                                        {
                                            propertis:"شکل ظاهری",
                                            unit:"-",
                                            value:"شفاف",
                                            testMethod:"-"
                                        },
                                        {
                                            propertis:"رنگ",
                                            unit:"Gardner",
                                            value:"2",
                                            testMethod:"ASTM D1544"
                                        },
                                        {
                                            propertis:"گرانروی (℃25)",
                                            unit:"mPa.s (cP)",
                                            value:"600-900",
                                            testMethod:"ISO 2555"
                                        },
                                        {
                                            propertis:"چگالی  (℃23)",
                                            unit:"g/cm³",
                                            value:"1.1300",
                                            testMethod:"ASTM D1475"
                                        },
                                        {
                                            propertis:"عدد اسیدی",
                                            unit:"mg KOH/g",
                                            value:"20>",
                                            testMethod:"ASTM D1639"
                                        },
                                        {
                                            propertis:"درصد جامد",
                                            unit:"% wt",
                                            value:"64±2",
                                            testMethod:"ASTM D1259"
                                        },
                                        {
                                            propertis:"*زمان ژل شدن",
                                            unit:"min",
                                            value:"15-25",
                                            testMethod:"ASTM D2471"
                                        },
                                        {
                                            propertis:"زمان پخت",
                                            unit:"min",
                                            value:"8-20",
                                            testMethod:"ASTM D2471"
                                        },
                                        {
                                            propertis:"دمای بیشینه گرمازایی (پیک اگزوترم)",
                                            unit:"℃",
                                            value:"210>",
                                            testMethod:"ASTM D2471"
                                        },
                                        {
                                            propertis:"جذب آب",
                                            unit:"% wt",
                                            value:"0.25>",
                                            testMethod:"ISO 62"
                                        },
                                        {
                                            propertis:"نقطه اشتعال (جام روباز)",
                                            unit:"℃",
                                            value:"22",
                                            testMethod:"ASTM D92"
                                        },
                                        {
                                            propertis:"استحکام کششی",
                                            unit:"MPa",
                                            value:"70<",
                                            testMethod:"ISO 527-2"
                                        },
                                        {
                                            propertis:"ازدیاد طول",
                                            unit:"%",
                                            value:"9.4",
                                            testMethod:"ISO 527-2"
                                        },
                                        {
                                            propertis:"مدول کششی",
                                            unit:"MPa",
                                            value:"750",
                                            testMethod:"ISO 527-2"
                                        },
                                        {
                                            propertis:"استحکام خمشی",
                                            unit:"MPa",
                                            value:"130<",
                                            testMethod:"ISO 178"
                                        },
                                        {
                                            propertis:"مدول خمشی",
                                            unit:"MPa",
                                            value:"2473",
                                            testMethod:"ISO 178"
                                        },
                                        {
                                            propertis:"دمای خمش گرمایی",
                                            unit:"℃",
                                            value:"70<",
                                            testMethod:"ASTM D648"
                                        },
                                        {
                                            propertis:"سختی ( بارکول)",
                                            unit:"-",
                                            value:"45<",
                                            testMethod:"ASTM D2583"
                                        },
                                        {
                                            propertis:"جمع شدگی طولی  (L/L∆)",
                                            unit:"%",
                                            value:"1.3>",
                                            testMethod:"ASTM D2566"
                                        }
                                    ],
                                      safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های پلی استر غیر اشباع رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                                      Packaging:"225 کیلوگرم (خالص) در بشکه‌های فولادی.",
                                      Storage:"محصول را در محل خنک و در دمای کمتر از ℃25 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید. در صورت رعایت شرایط نامبرده، عمر مفید انبارداری محصول حداقل 6 ماه از زمان تحویل است.",
                                      Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
                                     },
                                     en:{
                                      product:"Unsaturated Polyester Resin",
                                      name:"BUP660",
                                      pdf:"BUP660-En.pdf",
                                      Description:"BUP 660 is an un-promoted isophthalic based unsaturated polyester resin with low color and medium viscosity, limited shrinkage and water absorption and very good mechanical properties for ambient temperature cure with MEK peroxide.",
                                      Characteristics:[
                                            "Low color",
                                            "Medium viscosity",
                                            "Limited shrinkage and water absorption",
                                            "Excellent adhesion to glass fibers",
                                            "Very good mechanical and chemical properties",
                                            "Water Contact/ hygienic approval"
                
                                      ],
                                      Uses:[
                                        "Manufacturing pipes",
                                        "Manufacturing tanks and reservoirs",
                                        "Fabricating structural hygienic fittings",
                                        "Marine vessels and boats",
                                        "Pultrusion"
                      
                                      ],
                                      Table: [
                                        {
                                            propertis:"Appearance",
                                            unit:"-",
                                            value:"clear",
                                            testMethod:"-"
                                        },
                                        {
                                            propertis:"Color",
                                            unit:"Gardner",
                                            value:"<2",
                                            testMethod:"ASTM D1544"
                                        },
                                        {
                                            propertis:"Viscosity (at 25°C)",
                                            unit:"mPa.s (cP)",
                                            value:"600-900",
                                            testMethod:"ISO 2555"
                                        },
                                        {
                                            propertis:"Density (at 23°C)",
                                            unit:"g/cm³",
                                            value:"1.1300",
                                            testMethod:"ASTM D1475"
                                        },
                                        {
                                            propertis:"Acid number",
                                            unit:"mg KOH/g",
                                            value:"<20",
                                            testMethod:"ASTM D1639"
                                        },
                                        {
                                            propertis:"Solid content",
                                            unit:"wt %",
                                            value:"64±2",
                                            testMethod:"ASTM D1259"
                                        },
                                        {
                                            propertis:"Gel time*",
                                            unit:"min",
                                            value:"15-25",
                                            testMethod:"ASTM D2471"
                                        },
                                        {
                                            propertis:"Curing time",
                                            unit:"min",
                                            value:"8-20",
                                            testMethod:"ASTM D2471"
                                        },
                                        {
                                            propertis:"Peak exothermic temperature",
                                            unit:"℃",
                                            value:"210>",
                                            testMethod:"ASTM D2471"
                                        },
                                        {
                                            propertis:"Water absorption",
                                            unit:"% wt ",
                                            value:"0.25>",
                                            testMethod:"ISO 62"
                                        },
                                        {
                                            propertis:"Flash point (open cup)",
                                            unit:"℃",
                                            value:"22",
                                            testMethod:"ASTM D92"
                                        },
                                        {
                                            propertis:"Tensile strength",
                                            unit:"MPa",
                                            value:"70<",
                                            testMethod:"ISO 527-2"
                                        },
                                        {
                                            propertis:"Tensile elongation",
                                            unit:"%",
                                            value:"9.4",
                                            testMethod:"ISO 527-2"
                                        },
                                        {
                                            propertis:"Tensile modulus",
                                            unit:"MPa",
                                            value:"750",
                                            testMethod:"ISO 527-2"
                                        },
                                        {
                                            propertis:"Flexural strength",
                                            unit:"MPa",
                                            value:"130<",
                                            testMethod:"ISO 178"
                                        },
                                        {
                                            propertis:"Flexural modulus",
                                            unit:"MPa",
                                            value:"2473",
                                            testMethod:"ISO 178"
                                        },
                                        {
                                            propertis:"Heat distortion temperature (HDT)",
                                            unit:"℃",
                                            value:"70<",
                                            testMethod:"ASTM D648"
                                        },
                                        {
                                            propertis:"Hardness (Barcol))",
                                            unit:"-",
                                            value:"45<",
                                            testMethod:"ASTM D2583"
                                        },
                                        {
                                            propertis:"Linear shrinkage (∆L/L)",
                                            unit:"%",
                                            value:"1.3>",
                                            testMethod:"ASTM D2566"
                                        }
                                    ],
                                      safety:"The usual protective measures employed during the handling of Unsaturated Polyester Resins should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                                      Packaging:"225 kg (net) in steel drums.",
                                      Storage:"Store in a cool place below 25 °C and away from moisture and direct sunlight. Under above mentioned storage conditions, the shelf life of the resin will be at least 6 months ex-works.",
                                      Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
                                     },
                                     ru:{
                                      product:"Ненасыщенная полиэфирная смола",
                                      name:"BUP660",
                                      pdf:"TDS-BUP-660_RU.pdf",
                                      Description:"BUP 660 – слабоокрашенная немодифицированная ненасыщенная полиэфирная смола на изофталевой основе, средней вязкости, ограниченной усадкой и водопоглощением и очень хорошоими механическими свойствами для отверждения при комнатной температуре с помощью MEK пероксида.",
                                      Characteristics:[
                                         "Низкая пигментация",
                                         "Средняя вязкость",
                                         "Ограниченная усадка и водопоглощение",
                                         "Отличная адгезия к стекловолокну",
                                         "Очень хорошие механические и химические свойства",
                                         "Водостойкость и гигиеничность"

                                      ],
                                      Uses:[
                                        "Производство трубопроводов",
                                        "Производство чанов и резервуаров",
                                        "Изготовление конструкционных гигиеничных фитингов",
                                        "Морские суда и яхты",
                                        "Пултрузия/протяжка"
                                      ],
                                      Table: [
                                        {
                                            propertis:"Внешний вид",
                                            unit:"-",
                                            value:"Прозрачный",
                                            testMethod:"-"
                                        },
                                        {
                                            propertis:"Цвет",
                                            unit:"Гарднер",
                                            value:"<2",
                                            testMethod:"ASTM D1544"
                                        },
                                        {
                                            propertis:"Вязкость (при 25°C)",
                                            unit:"мПа.с (сантипуаз)",
                                            value:"600-900",
                                            testMethod:"ISO 2555"
                                        },
                                        {
                                            propertis:"Плотность (при 23°C)",
                                            unit:"г/см³",
                                            value:"1.1300",
                                            testMethod:"ASTM D1475"
                                        },
                                        {
                                            propertis:"Кислотное число",
                                            unit:"мг KOH/г",
                                            value:"<20",
                                            testMethod:"ASTM D1639"
                                        },
                                        {
                                            propertis:"Сухой остаток",
                                            unit:"% веса",
                                            value:"64±2",
                                            testMethod:"ASTM D1259"
                                        },
                                        {
                                            propertis:"Время гелеобразования*",
                                            unit:"минуты",
                                            value:"15-25",
                                            testMethod:"ASTM D2471"
                                        },
                                        {
                                            propertis:"Время отверждения",
                                            unit:"минуты",
                                            value:"8-20",
                                            testMethod:"ASTM D2471"
                                        },
                                        {
                                            propertis:"Пик на экзотермической кривой",
                                            unit:"℃",
                                            value:"210>",
                                            testMethod:"ASTM D2471"
                                        },
                                        {
                                            propertis:"Влагопоглощение",
                                            unit:"% веса",
                                            value:"0.25>",
                                            testMethod:"ISO 62"
                                        },
                                        {
                                            propertis:"Температура вспышки (в откр. тигле)",
                                            unit:"℃",
                                            value:"22",
                                            testMethod:"ASTM D92"
                                        },
                                        {
                                            propertis:"Прочность на растяжение/разрыв",
                                            unit:"МПa",
                                            value:"70<",
                                            testMethod:"ISO 527-2"
                                        },
                                        {
                                            propertis:"Удлинение при растяжении",
                                            unit:"%",
                                            value:"9.4",
                                            testMethod:"ISO 527-2"
                                        },
                                        {
                                            propertis:"Удлинение при растяжении",
                                            unit:"МПa",
                                            value:"750",
                                            testMethod:"ISO 527-2"
                                        },
                                        {
                                            propertis:"Прочность на изгиб",
                                            unit:"МПa",
                                            value:"130<",
                                            testMethod:"ISO 178"
                                        },
                                        {
                                            propertis:"Модуль упругости при изгибе",
                                            unit:"МПa",
                                            value:"2473",
                                            testMethod:"ISO 178"
                                        },
                                        {
                                            propertis:"Температура допустимой деформации",
                                            unit:"℃",
                                            value:"70<",
                                            testMethod:"ASTM D648"
                                        },
                                        {
                                            propertis:"Твердость (по Барколу)",
                                            unit:"-",
                                            value:"45<",
                                            testMethod:"ASTM D2583"
                                        },
                                        {
                                            propertis:"Линейная усадка (∆L/L)",
                                            unit:"%",
                                            value:"1.3>",
                                            testMethod:"ASTM D2566"
                                        }
                                    ],
                                      safety:"Следует соблюдать стандартные меры безопасности транспортировки ненасыщенных полиэфирных смол. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                                      Packaging:"225 кг (нетто) в металлических бочках.",
                                      Storage:"Хранить в прохладном месте при температуре ниже 25 °C и вдали от влаги и прямых солнечных лучей. При соблюдении вышеуказанных условий хранения срок годности смолы составляет не менее 6 месяца с даты выпуска.",
                                      Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
                                     }
                              
                                  },
                                  BUP665 :{
                                      fa:{
                                       product:"رزین پلی استر غیر اشباع",
                                       name:"BUP665",
                                       pdf:"BUP665-Fa.pdf",
                                       Description:"UP 665 رزین پلی استر غیر اشباع بر پایه ایزوفتالیک/NPG و غیر فعال، دارای رنگ بسیار کم، گرانروی متوسط، جمع­‌شدگی و جذب آب کم و ویژگی­‌های مکانیکی بسیار خوب جهت پخت در دمای محیط به کمک متیل اتیل کتون پراکسید است.",
                                       Characteristics:[
                                        "رنگ بسیارکم",
                                        "گرانروی متوسط",
                                        "جمع­‌شدگی و جذب آب کم",
                                        "چسبندگی خوب به الیاف شیشه­",
                                        "مقاومت در برابر آبکافت (هیدرولیز)",
                                        "ویژگی­‌های مکانیکی و شیمیایی بسیار خوب"
                                       ],
                                       Uses:[
                                         "لقمه و سنباده سنگ",
                                         "ژل کوت"
                                       ],
                                       Table: [
                                        {
                                            propertis:"شکل ظاهری",
                                            unit:"-",
                                            value:"شفاف",
                                            testMethod:"-"
                                        },
                                        {
                                            propertis:"رنگ",
                                            unit:"Gardner",
                                            value:"2>",
                                            testMethod:"ASTM D1544"
                                        },
                                        {
                                            propertis:"گرانروی (℃25)",
                                            unit:"mPa.s (cP)",
                                            value:"800-1200",
                                            testMethod:"ISO 2555"
                                        },
                                        {
                                            propertis:"چگالی  (℃23)",
                                            unit:"g/cm³",
                                            value:"1.1247",
                                            testMethod:"ASTM D1475"
                                        },
                                        {
                                            propertis:"عدد اسیدی",
                                            unit:"mg KOH/g",
                                            value:"20>",
                                            testMethod:"ASTM D1639"
                                        },
                                        {
                                            propertis:"درصد جامد",
                                            unit:"% wt",
                                            value:"66±2",
                                            testMethod:"ASTM D1259"
                                        },
                                        {
                                            propertis:"*زمان ژل شدن",
                                            unit:"min",
                                            value:"7-12",
                                            testMethod:"ASTM D2471"
                                        },
                                        {
                                            propertis:"زمان پخت",
                                            unit:"min",
                                            value:"5-10",
                                            testMethod:"ASTM D2471"
                                        },
                                        {
                                            propertis:"دمای بیشینه گرمازایی (پیک اگزوترم)",
                                            unit:"℃",
                                            value:"210>",
                                            testMethod:"ASTM D2471"
                                        },
                                        {
                                            propertis:"جذب آب",
                                            unit:"% wt",
                                            value:"0.28>",
                                            testMethod:"ISO 62"
                                        },
                                        {
                                            propertis:"نقطه اشتعال (جام روباز)",
                                            unit:"℃",
                                            value:"23",
                                            testMethod:"ASTM D92"
                                        },
                                        {
                                            propertis:"استحکام کششی",
                                            unit:"MPa",
                                            value:"75<",
                                            testMethod:"ISO 527-2"
                                        },
                                        {
                                            propertis:"ازدیاد طول",
                                            unit:"%",
                                            value:"7.02",
                                            testMethod:"ISO 527-2"
                                        },
                                        {
                                            propertis:"مدول کششی",
                                            unit:"MPa",
                                            value:"931",
                                            testMethod:"ISO 527-2"
                                        },
                                        {
                                            propertis:"استحکام خمشی",
                                            unit:"MPa",
                                            value:"140<",
                                            testMethod:"ISO 178"
                                        },
                                        {
                                            propertis:"مدول خمشی",
                                            unit:"MPa",
                                            value:"3448",
                                            testMethod:"ISO 178"
                                        },
                                        {
                                            propertis:"دمای خمش گرمایی",
                                            unit:"℃",
                                            value:"90<",
                                            testMethod:"ASTM D648"
                                        },
                                        {
                                            propertis:"سختی ( بارکول)",
                                            unit:"-",
                                            value:"45<",
                                            testMethod:"ASTM D2583"
                                        },
                                        {
                                            propertis:"جمع شدگی طولی  (L/L∆)",
                                            unit:"%",
                                            value:"1.1>",
                                            testMethod:"ASTM D2566"
                                        }
                                    ],
                                       safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های پلی استر غیر اشباع رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                                       Packaging:"225 کیلوگرم (خالص) در بشکه‌های فولادی.",
                                       Storage:"محصول را در محل خنک و در دمای کمتر از ℃25 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید. در صورت رعایت شرایط نامبرده، عمر مفید انبارداری محصول حداقل 6 ماه از زمان تحویل است.",
                                       Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
                                      },
                                      en:{
                                       product:"Unsaturated Polyester Resin",
                                       name:"BUP665",
                                       pdf:"BUP665-En.pdf",
                                       Description:"BUP 665 is an un-promoted orthophthalic based unsaturated polyester resin with very low color, medium viscosity and good mechanical properties for ambient temperature cure with MEK peroxide.",
                                       Characteristics:[
                                          "Very low color",
                                          "Medium viscosity",
                                          "Limited shrinkage and water absorption",
                                          "Good adhesion to glass fibers",
                                          "Resistant to hydrolysis",
                                          "Very good mechanical and chemical properties"
                                          
     
                 
                                       ],
                                       Uses:[
                                         "Abrasive and grindstone applications",
                                         "Gel coats"
                       
                                       ],
                                       Table: [
                                        {
                                            propertis:"Appearance",
                                            unit:"-",
                                            value:"clear",
                                            testMethod:"-"
                                        },
                                        {
                                            propertis:"Color",
                                            unit:"Gardner",
                                            value:"<1",
                                            testMethod:"ASTM D1544"
                                        },
                                        {
                                            propertis:"Viscosity (at 25°C)",
                                            unit:"mPa.s (cP)",
                                            value:"800-1200",
                                            testMethod:"ISO 2555"
                                        },
                                        {
                                            propertis:"Density (at 23°C)",
                                            unit:"g/cm³",
                                            value:"1.1247",
                                            testMethod:"ASTM D1475"
                                        },
                                        {
                                            propertis:"Acid number",
                                            unit:"mg KOH/g",
                                            value:"<20",
                                            testMethod:"ASTM D1639"
                                        },
                                        {
                                            propertis:"Solid content",
                                            unit:"wt %",
                                            value:"66±2",
                                            testMethod:"ASTM D1259"
                                        },
                                        {
                                            propertis:"Gel time*",
                                            unit:"min",
                                            value:"7-12",
                                            testMethod:"ASTM D2471"
                                        },
                                        {
                                            propertis:"Curing time",
                                            unit:"min",
                                            value:"5-10",
                                            testMethod:"ASTM D2471"
                                        },
                                        {
                                            propertis:"Peak exothermic temperature",
                                            unit:"℃",
                                            value:"210>",
                                            testMethod:"ASTM D2471"
                                        },
                                        {
                                            propertis:"Water absorption",
                                            unit:"% wt ",
                                            value:"0.28>",
                                            testMethod:"ISO 62"
                                        },
                                        {
                                            propertis:"Flash point (open cup)",
                                            unit:"℃",
                                            value:"23",
                                            testMethod:"ASTM D92"
                                        },
                                        {
                                            propertis:"Tensile strength",
                                            unit:"MPa",
                                            value:"74<",
                                            testMethod:"ISO 527-2"
                                        },
                                        {
                                            propertis:"Tensile elongation",
                                            unit:"%",
                                            value:"7.02",
                                            testMethod:"ISO 527-2"
                                        },
                                        {
                                            propertis:"Tensile modulus",
                                            unit:"MPa",
                                            value:"931",
                                            testMethod:"ISO 527-2"
                                        },
                                        {
                                            propertis:"Flexural strength",
                                            unit:"MPa",
                                            value:"140<",
                                            testMethod:"ISO 178"
                                        },
                                        {
                                            propertis:"Flexural modulus",
                                            unit:"MPa",
                                            value:"3448",
                                            testMethod:"ISO 178"
                                        },
                                        {
                                            propertis:"Heat distortion temperature (HDT)",
                                            unit:"℃",
                                            value:"90<",
                                            testMethod:"ASTM D648"
                                        },
                                        {
                                            propertis:"Hardness (Barcol))",
                                            unit:"-",
                                            value:"45<",
                                            testMethod:"ASTM D2583"
                                        },
                                        {
                                            propertis:"Linear shrinkage (∆L/L)",
                                            unit:"%",
                                            value:"1.1>",
                                            testMethod:"ASTM D2566"
                                        }
                                    ],
                                       safety:"The usual protective measures employed during the handling of Unsaturated Polyester Resins should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                                       Packaging:"225 kg (net) in steel drums.",
                                       Storage:"Store in a cool place below 25 °C and away from moisture and direct sunlight. Under above mentioned storage conditions, the shelf life of the resin will be at least 6 months ex-works.",
                                       Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
                                      },
                                      ru:{
                                       product:"Ненасыщенная полиэфирная смола",
                                       name:"BUP665",
                                       pdf:"TDS-BUP-665_RU.pdf",
                                       Description:"BUP 665 – очень слабоокрашенная немодифицированная ненасыщенная полиэфирная смола на неопропиленгликолевой/изофталевой основе, средней вязкости, с ограниченной усадкой и водопоглощением и очень хорошоими механическими свойствами для отверждения при комнатной температуре с помощью MEK пероксида.",
                                       Characteristics:[
                                         "Очень низкая пигментация",
                                         "Средняя вязкость",
                                         "Ограниченная усадка и водопоглощение",
                                         "Хорошая адгезия к стекловолокну",
                                         "Устойчивость к гидролизу",
                                         "Очень хорошие механические и химические свойства"
                                       ],
                                       Uses:[
                                          "Абразивы и шлифовальные камни",
                                          "Наружный отделочный слой/гелькоут"
                                       ],
                                       Table: [
                                        {
                                            propertis:"Внешний вид",
                                            unit:"-",
                                            value:"Прозрачный",
                                            testMethod:"-"
                                        },
                                        {
                                            propertis:"Цвет",
                                            unit:"Гарднер",
                                            value:"<1",
                                            testMethod:"ASTM D1544"
                                        },
                                        {
                                            propertis:"Вязкость (при 25°C)",
                                            unit:"мПа.с (сантипуаз)",
                                            value:"800-1200",
                                            testMethod:"ISO 2555"
                                        },
                                        {
                                            propertis:"Плотность (при 23°C)",
                                            unit:"г/см³",
                                            value:"1.1247",
                                            testMethod:"ASTM D1475"
                                        },
                                        {
                                            propertis:"Кислотное число",
                                            unit:"мг KOH/г",
                                            value:"<20",
                                            testMethod:"ASTM D1639"
                                        },
                                        {
                                            propertis:"Сухой остаток",
                                            unit:"% веса",
                                            value:"66±2",
                                            testMethod:"ASTM D1259"
                                        },
                                        {
                                            propertis:"Время гелеобразования*",
                                            unit:"минуты",
                                            value:"7-12",
                                            testMethod:"ASTM D2471"
                                        },
                                        {
                                            propertis:"Время отверждения",
                                            unit:"минуты",
                                            value:"5-10",
                                            testMethod:"ASTM D2471"
                                        },
                                        {
                                            propertis:"Пик на экзотермической кривой",
                                            unit:"℃",
                                            value:"210>",
                                            testMethod:"ASTM D2471"
                                        },
                                        {
                                            propertis:"Влагопоглощение",
                                            unit:"% веса",
                                            value:"0.28>",
                                            testMethod:"ISO 62"
                                        },
                                        {
                                            propertis:"Температура вспышки (в откр. тигле)",
                                            unit:"℃",
                                            value:"23",
                                            testMethod:"ASTM D92"
                                        },
                                        {
                                            propertis:"Прочность на растяжение/разрыв",
                                            unit:"МПa",
                                            value:"75<",
                                            testMethod:"ISO 527-2"
                                        },
                                        {
                                            propertis:"Удлинение при растяжении",
                                            unit:"%",
                                            value:"7.02",
                                            testMethod:"ISO 527-2"
                                        },
                                        {
                                            propertis:"Удлинение при растяжении",
                                            unit:"МПa",
                                            value:"931",
                                            testMethod:"ISO 527-2"
                                        },
                                        {
                                            propertis:"Прочность на изгиб",
                                            unit:"МПa",
                                            value:"140<",
                                            testMethod:"ISO 178"
                                        },
                                        {
                                            propertis:"Модуль упругости при изгибе",
                                            unit:"МПa",
                                            value:"3448",
                                            testMethod:"ISO 178"
                                        },
                                        {
                                            propertis:"Температура допустимой деформации",
                                            unit:"℃",
                                            value:"90<",
                                            testMethod:"ASTM D648"
                                        },
                                        {
                                            propertis:"Твердость (по Барколу)",
                                            unit:"-",
                                            value:"45<",
                                            testMethod:"ASTM D2583"
                                        },
                                        {
                                            propertis:"Линейная усадка (∆L/L)",
                                            unit:"%",
                                            value:"1.1>",
                                            testMethod:"ASTM D2566"
                                        }
                                    ],
                                       safety:"Следует соблюдать стандартные меры безопасности транспортировки ненасыщенных полиэфирных смол. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                                       Packaging:"225 кг (нетто) в металлических бочках.",
                                       Storage:"Хранить в прохладном месте при температуре ниже 25 °C и вдали от влаги и прямых солнечных лучей. При соблюдении вышеуказанных условий хранения срок годности смолы составляет не менее 6 месяца с даты выпуска.",
                                       Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
                                      }
                               
                                   },
                                   BUP670 :{
                                       fa:{
                                        product:"رزین پلی استر غیر اشباع",
                                        name:"BUP670",
                                        pdf:"BUP670-Fa.pdf",
                                        Description:"BUP 670 رزین پلی استر غیر اشباع بر پایه ایزوفتالیک و غیر فعال، دارای ویژگی­‌های مکانیکی و شیمیایی عالی، گرانروی زیاد و مقاومت در برابر هیدرولیز و ضربه جهت پخت در دمای بالا به کمک TBPB است.",
                                        Characteristics:[
                                         "ویژگی­‌های مکانیکی و شیمیایی عالی",
                                         "گرانروی زیاد",
                                         "مقاومت در برابر آبکافت (هیدرولیز)",
                                         "مقاومت در برابر ضربه"
                                        ],
                                        Uses:[
                                         "تولید SMC و BMC"
                                        ],
                                        Table: [
                                            {
                                                propertis:"شکل ظاهری",
                                                unit:"-",
                                                value:"شفاف",
                                                testMethod:"-"
                                            },
                                            {
                                                propertis:"رنگ",
                                                unit:"Gardner",
                                                value:"2>",
                                                testMethod:"ASTM D1544"
                                            },
                                            {
                                                propertis:"گرانروی (℃25)",
                                                unit:"mPa.s (cP)",
                                                value:"900-1200",
                                                testMethod:"ISO 2555"
                                            },
                                            {
                                                propertis:"چگالی  (℃23)",
                                                unit:"g/cm³",
                                                value:"1.1197",
                                                testMethod:"ASTM D1475"
                                            },
                                            {
                                                propertis:"عدد اسیدی",
                                                unit:"mg KOH/g",
                                                value:"14-18",
                                                testMethod:"ASTM D1639"
                                            },
                                            {
                                                propertis:"درصد جامد",
                                                unit:"% wt",
                                                value:"65±2",
                                                testMethod:"ASTM D1259"
                                            },
                                            {
                                                propertis:"*زمان ژل شدن",
                                                unit:"min",
                                                value:"50-100",
                                                testMethod:"ASTM D2471"
                                            },
                                            {
                                                propertis:"زمان پخت",
                                                unit:"min",
                                                value:"100-150",
                                                testMethod:"ASTM D2471"
                                            },
                                            {
                                                propertis:"دمای بیشینه گرمازایی (پیک اگزوترم)",
                                                unit:"℃",
                                                value:"300>",
                                                testMethod:"ASTM D2471"
                                            },
                                            {
                                                propertis:"جذب آب",
                                                unit:"% wt",
                                                value:"0.1>",
                                                testMethod:"ISO 62"
                                            },
                                            {
                                                propertis:"نقطه اشتعال (جام روباز)",
                                                unit:"℃",
                                                value:"23.8",
                                                testMethod:"ASTM D92"
                                            },
                                            {
                                                propertis:"استحکام کششی",
                                                unit:"MPa",
                                                value:"60<",
                                                testMethod:"ISO 527-2"
                                            },
                                            {
                                                propertis:"ازدیاد طول",
                                                unit:"%",
                                                value:"5.9",
                                                testMethod:"ISO 527-2"
                                            },
                                            {
                                                propertis:"مدول کششی",
                                                unit:"MPa",
                                                value:"1065",
                                                testMethod:"ISO 527-2"
                                            },
                                            {
                                                propertis:"استحکام خمشی",
                                                unit:"MPa",
                                                value:"120<",
                                                testMethod:"ISO 178"
                                            },
                                            {
                                                propertis:"مدول خمشی",
                                                unit:"MPa",
                                                value:"3190",
                                                testMethod:"ISO 178"
                                            },
                                            {
                                                propertis:"دمای خمش گرمایی",
                                                unit:"℃",
                                                value:"90<",
                                                testMethod:"ASTM D648"
                                            },
                                            {
                                                propertis:"سختی ( بارکول)",
                                                unit:"-",
                                                value:"40<",
                                                testMethod:"ASTM D2583"
                                            },
                                            {
                                                propertis:"جمع شدگی طولی  (L/L∆)",
                                                unit:"%",
                                                value:"1>",
                                                testMethod:"ASTM D2566"
                                            }
                                        ],
                                        safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های پلی استر غیر اشباع رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                                        Packaging:"225 کیلوگرم (خالص) در بشکه‌های فولادی.",
                                        Storage:"محصول را در محل خنک و در دمای کمتر از ℃25 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید. در صورت رعایت شرایط نامبرده، عمر مفید انبارداری محصول حداقل 3 ماه از زمان تحویل است.",
                                        Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
                                       },
                                       en:{
                                        product:"Unsaturated Polyester Resin",
                                        name:"BUP670",
                                        pdf:"BUP670-En.pdf",
                                        Description:"BUP 670 is an un-promoted isophthalic based unsaturated polyester resin with excellent mechanical and chemical properties, high viscosity and resistance to hydrolysis and impact for high temperature cure with TBPB.",
                                        Characteristics:[
                                           "Excellent mechanical and chemical properties",
                                           "High viscosity",
                                           "Resistance to hydrolysis",
                                           "Impact resistant"
                                           
      
                  
                                        ],
                                        Uses:[
                                          "Manufacturing SMC and BMC parts"
                        
                                        ],
                                        Table: [
                                            {
                                                propertis:"Appearance",
                                                unit:"-",
                                                value:"clear",
                                                testMethod:"-"
                                            },
                                            {
                                                propertis:"Color",
                                                unit:"Gardner",
                                                value:"<2",
                                                testMethod:"ASTM D1544"
                                            },
                                            {
                                                propertis:"Viscosity (at 25°C)",
                                                unit:"mPa.s (cP)",
                                                value:"900-1200",
                                                testMethod:"ISO 2555"
                                            },
                                            {
                                                propertis:"Density (at 23°C)",
                                                unit:"g/cm³",
                                                value:"1.1197",
                                                testMethod:"ASTM D1475"
                                            },
                                            {
                                                propertis:"Acid number",
                                                unit:"mg KOH/g",
                                                value:"14-18",
                                                testMethod:"ASTM D1639"
                                            },
                                            {
                                                propertis:"Solid content",
                                                unit:"wt %",
                                                value:"65±2",
                                                testMethod:"ASTM D1259"
                                            },
                                            {
                                                propertis:"Gel time*",
                                                unit:"min",
                                                value:"50-100",
                                                testMethod:"ASTM D2471"
                                            },
                                            {
                                                propertis:"Curing time",
                                                unit:"min",
                                                value:"100-150",
                                                testMethod:"ASTM D2471"
                                            },
                                            {
                                                propertis:"Peak exothermic temperature",
                                                unit:"℃",
                                                value:"300>",
                                                testMethod:"ASTM D2471"
                                            },
                                            {
                                                propertis:"Water absorption",
                                                unit:"% wt ",
                                                value:"0.1>",
                                                testMethod:"ISO 62"
                                            },
                                            {
                                                propertis:"Flash point (open cup)",
                                                unit:"℃",
                                                value:"23.8",
                                                testMethod:"ASTM D92"
                                            },
                                            {
                                                propertis:"Tensile strength",
                                                unit:"MPa",
                                                value:"60<",
                                                testMethod:"ISO 527-2"
                                            },
                                            {
                                                propertis:"Tensile elongation",
                                                unit:"%",
                                                value:"5.9",
                                                testMethod:"ISO 527-2"
                                            },
                                            {
                                                propertis:"Tensile modulus",
                                                unit:"MPa",
                                                value:"1065",
                                                testMethod:"ISO 527-2"
                                            },
                                            {
                                                propertis:"Flexural strength",
                                                unit:"MPa",
                                                value:"120<",
                                                testMethod:"ISO 178"
                                            },
                                            {
                                                propertis:"Flexural modulus",
                                                unit:"MPa",
                                                value:"3190",
                                                testMethod:"ISO 178"
                                            },
                                            {
                                                propertis:"Heat distortion temperature (HDT)",
                                                unit:"℃",
                                                value:"90<",
                                                testMethod:"ASTM D648"
                                            },
                                            {
                                                propertis:"Hardness (Barcol))",
                                                unit:"-",
                                                value:"40<",
                                                testMethod:"ASTM D2583"
                                            },
                                            {
                                                propertis:"Linear shrinkage (∆L/L)",
                                                unit:"%",
                                                value:"1>",
                                                testMethod:"ASTM D2566"
                                            }
                                        ],
                                        
                                        safety:"The usual protective measures employed during the handling of Unsaturated Polyester Resins should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                                        Packaging:"225 kg (net) in steel drums.",
                                        Storage:"Store in a cool place below 25 °C and away from moisture and direct sunlight. Under above mentioned storage conditions, the shelf life of the resin will be at least 3 months ex-works.",
                                        Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
                                       },
                                       ru:{
                                        product:"Ненасыщенная полиэфирная смола",
                                        name:"BUP670",
                                        pdf:"TDS-BUP-670_RU.pdf",
                                        Description:"BUP 670 – немодифицированная ненасыщенная полиэфирная смола на изофталевой основе с отличными механическими и химическими свойствами, высокой вязкости, устойчивая к гидролизу и ударным нагрузкам, для отверждения при высокой температуре с помощью третбутилпербензоата (TBPB).",
                                        Characteristics:[
                                          "Отличные механические и химические свойства",
                                          "Высокая вязкость",
                                          "Устойчивость к гидролизу",
                                          "Ударопрочность"
                                        ],
                                        Uses:[
                                           "Составляющие листового прессматериала (SMC) и премикса (BMC)"
                                        ],
                                        Table: [
                                            {
                                                propertis:"Внешний вид",
                                                unit:"-",
                                                value:"Прозрачный",
                                                testMethod:"-"
                                            },
                                            {
                                                propertis:"Цвет",
                                                unit:"Гарднер",
                                                value:"<2",
                                                testMethod:"ASTM D1544"
                                            },
                                            {
                                                propertis:"Вязкость (при 25°C)",
                                                unit:"мПа.с (сантипуаз)",
                                                value:"900-1200",
                                                testMethod:"ISO 2555"
                                            },
                                            {
                                                propertis:"Плотность (при 23°C)",
                                                unit:"г/см³",
                                                value:"1.1197",
                                                testMethod:"ASTM D1475"
                                            },
                                            {
                                                propertis:"Кислотное число",
                                                unit:"мг KOH/г",
                                                value:"14-18",
                                                testMethod:"ASTM D1639"
                                            },
                                            {
                                                propertis:"Сухой остаток",
                                                unit:"% веса",
                                                value:"65±2",
                                                testMethod:"ASTM D1259"
                                            },
                                            {
                                                propertis:"Время гелеобразования*",
                                                unit:"минуты",
                                                value:"50-100",
                                                testMethod:"ASTM D2471"
                                            },
                                            {
                                                propertis:"Время отверждения",
                                                unit:"минуты",
                                                value:"100-150",
                                                testMethod:"ASTM D2471"
                                            },
                                            {
                                                propertis:"Пик на экзотермической кривой",
                                                unit:"℃",
                                                value:"300>",
                                                testMethod:"ASTM D2471"
                                            },
                                            {
                                                propertis:"Влагопоглощение",
                                                unit:"% веса",
                                                value:"0.1>",
                                                testMethod:"ISO 62"
                                            },
                                            {
                                                propertis:"Температура вспышки (в откр. тигле)",
                                                unit:"℃",
                                                value:"23.8",
                                                testMethod:"ASTM D92"
                                            },
                                            {
                                                propertis:"Прочность на растяжение/разрыв",
                                                unit:"МПa",
                                                value:"60<",
                                                testMethod:"ISO 527-2"
                                            },
                                            {
                                                propertis:"Удлинение при растяжении",
                                                unit:"%",
                                                value:"5.9",
                                                testMethod:"ISO 527-2"
                                            },
                                            {
                                                propertis:"Удлинение при растяжении",
                                                unit:"МПa",
                                                value:"1065",
                                                testMethod:"ISO 527-2"
                                            },
                                            {
                                                propertis:"Прочность на изгиб",
                                                unit:"МПa",
                                                value:"120<",
                                                testMethod:"ISO 178"
                                            },
                                            {
                                                propertis:"Модуль упругости при изгибе",
                                                unit:"МПa",
                                                value:"3190",
                                                testMethod:"ISO 178"
                                            },
                                            {
                                                propertis:"Температура допустимой деформации",
                                                unit:"℃",
                                                value:"90<",
                                                testMethod:"ASTM D648"
                                            },
                                            {
                                                propertis:"Твердость (по Барколу)",
                                                unit:"-",
                                                value:"40<",
                                                testMethod:"ASTM D2583"
                                            },
                                            {
                                                propertis:"Линейная усадка (∆L/L)",
                                                unit:"%",
                                                value:"1>",
                                                testMethod:"ASTM D2566"
                                            }
                                        ],
                                        safety:"Следует соблюдать стандартные меры безопасности транспортировки ненасыщенных полиэфирных смол. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                                        Packaging:"225 кг (нетто) в металлических бочках.",
                                        Storage:"Хранить в прохладном месте при температуре ниже 25 °C и вдали от влаги и прямых солнечных лучей. При соблюдении вышеуказанных условий хранения срок годности смолы составляет не менее 3 месяца с даты выпуска.",
                                        Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
                                       }
                                
                                    },
                                    BUP672 :{
                                        fa:{
                                         product:"رزین پلی استر غیر اشباع",
                                         name:"BUP672",
                                         pdf:"BUP672-Fa.pdf",
                                         Description:"BUP 672 رزین پلی استر غیر اشباع بر پایه ارتوفتالیک و غیر فعال، دارای ویژگی­‌های مکانیکی و شیمیایی خوب، گرانروی زیاد و مقاومت در برابر هیدرولیز و ضربه جهت پخت در دمای بالا به کمک TBPB است.",
                                         Characteristics:[
                                          "ویژگی­‌های مکانیکی و شیمیایی خوب",
                                          "گرانروی زیاد",
                                          "مقاومت در برابر آبکافت (هیدرولیز)",
                                          "مقاومت در برابر ضربه"
                                         ],
                                         Uses:[
                                          "تولید SMC و BMC"
                                         ],
                                         Table: [
                                            {
                                                propertis:"شکل ظاهری",
                                                unit:"-",
                                                value:"شفاف",
                                                testMethod:"-"
                                            },
                                            {
                                                propertis:"رنگ",
                                                unit:"Gardner",
                                                value:"2>",
                                                testMethod:"ASTM D1544"
                                            },
                                            {
                                                propertis:"گرانروی (℃25)",
                                                unit:"mPa.s (cP)",
                                                value:"1100-1300",
                                                testMethod:"ISO 2555"
                                            },
                                            {
                                                propertis:"چگالی  (℃23)",
                                                unit:"g/cm³",
                                                value:"1.1139",
                                                testMethod:"ASTM D1475"
                                            },
                                            {
                                                propertis:"عدد اسیدی",
                                                unit:"mg KOH/g",
                                                value:"14-18",
                                                testMethod:"ASTM D1639"
                                            },
                                            {
                                                propertis:"درصد جامد",
                                                unit:"% wt",
                                                value:"65±2",
                                                testMethod:"ASTM D1259"
                                            },
                                            {
                                                propertis:"*زمان ژل شدن",
                                                unit:"min",
                                                value:"100-150",
                                                testMethod:"ASTM D2471"
                                            },
                                            {
                                                propertis:"زمان پخت",
                                                unit:"min",
                                                value:"130-200",
                                                testMethod:"ASTM D2471"
                                            },
                                            {
                                                propertis:"دمای بیشینه گرمازایی (پیک اگزوترم)",
                                                unit:"℃",
                                                value:"300>",
                                                testMethod:"ASTM D2471"
                                            },
                                            {
                                                propertis:"جذب آب",
                                                unit:"% wt",
                                                value:"0.1>",
                                                testMethod:"ISO 62"
                                            },
                                            {
                                                propertis:"نقطه اشتعال (جام روباز)",
                                                unit:"℃",
                                                value:"24",
                                                testMethod:"ASTM D92"
                                            },
                                            {
                                                propertis:"استحکام کششی",
                                                unit:"MPa",
                                                value:"50<",
                                                testMethod:"ISO 527-2"
                                            },
                                            {
                                                propertis:"ازدیاد طول",
                                                unit:"%",
                                                value:"4.48",
                                                testMethod:"ISO 527-2"
                                            },
                                            {
                                                propertis:"مدول کششی",
                                                unit:"MPa",
                                                value:"1133",
                                                testMethod:"ISO 527-2"
                                            },
                                            {
                                                propertis:"استحکام خمشی",
                                                unit:"MPa",
                                                value:"120<",
                                                testMethod:"ISO 178"
                                            },
                                            {
                                                propertis:"مدول خمشی",
                                                unit:"MPa",
                                                value:"3646",
                                                testMethod:"ISO 178"
                                            },
                                            {
                                                propertis:"دمای خمش گرمایی",
                                                unit:"℃",
                                                value:"120<",
                                                testMethod:"ASTM D648"
                                            },
                                            {
                                                propertis:"سختی ( بارکول)",
                                                unit:"-",
                                                value:"40<",
                                                testMethod:"ASTM D2583"
                                            },
                                            {
                                                propertis:"جمع شدگی طولی  (L/L∆)",
                                                unit:"%",
                                                value:"1.1>",
                                                testMethod:"ASTM D2566"
                                            }
                                        ],
                                         safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های پلی استر غیر اشباع رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                                         Packaging:"225 کیلوگرم (خالص) در بشکه‌های فولادی.",
                                         Storage:"محصول را در محل خنک و در دمای کمتر از ℃25 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید. در صورت رعایت شرایط نامبرده، عمر مفید انبارداری محصول حداقل 3 ماه از زمان تحویل است.",
                                         Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
                                        },
                                        en:{
                                         product:"Unsaturated Polyester Resin",
                                         name:"BUP672",
                                         pdf:"BUP672-En.pdf",
                                         Description:"BUP 672 is an un-promoted orthophthalic based unsaturated polyester resin with good mechanical and chemical properties, high viscosity, resistance to hydrolysis and impact for high temperature cure with TBPB.",
                                         Characteristics:[
                                           "Good mechanical and chemical properties",
                                           "High viscosity",
                                           "Resistance to hydrolysis",
                                           "Impact resistant"
       
                   
                                         ],
                                         Uses:[
                                           "Manufacturing SMC and BMC parts"
                         
                                         ],
                                         Table: [
                                            {
                                                propertis:"Appearance",
                                                unit:"-",
                                                value:"clear",
                                                testMethod:"-"
                                            },
                                            {
                                                propertis:"Color",
                                                unit:"Gardner",
                                                value:"<2",
                                                testMethod:"ASTM D1544"
                                            },
                                            {
                                                propertis:"Viscosity (at 25°C)",
                                                unit:"mPa.s (cP)",
                                                value:"1100-1300",
                                                testMethod:"ISO 2555"
                                            },
                                            {
                                                propertis:"Density (at 23°C)",
                                                unit:"g/cm³",
                                                value:"1.1139",
                                                testMethod:"ASTM D1475"
                                            },
                                            {
                                                propertis:"Acid number",
                                                unit:"mg KOH/g",
                                                value:"14-18",
                                                testMethod:"ASTM D1639"
                                            },
                                            {
                                                propertis:"Solid content",
                                                unit:"wt %",
                                                value:"65±2",
                                                testMethod:"ASTM D1259"
                                            },
                                            {
                                                propertis:"Gel time*",
                                                unit:"min",
                                                value:"100-150",
                                                testMethod:"ASTM D2471"
                                            },
                                            {
                                                propertis:"Curing time",
                                                unit:"min",
                                                value:"130-200",
                                                testMethod:"ASTM D2471"
                                            },
                                            {
                                                propertis:"Peak exothermic temperature",
                                                unit:"℃",
                                                value:"300>",
                                                testMethod:"ASTM D2471"
                                            },
                                            {
                                                propertis:"Water absorption",
                                                unit:"% wt ",
                                                value:"0.1>",
                                                testMethod:"ISO 62"
                                            },
                                            {
                                                propertis:"Flash point (open cup)",
                                                unit:"℃",
                                                value:"24",
                                                testMethod:"ASTM D92"
                                            },
                                            {
                                                propertis:"Tensile strength",
                                                unit:"MPa",
                                                value:"50<",
                                                testMethod:"ISO 527-2"
                                            },
                                            {
                                                propertis:"Tensile elongation",
                                                unit:"%",
                                                value:"4.48",
                                                testMethod:"ISO 527-2"
                                            },
                                            {
                                                propertis:"Tensile modulus",
                                                unit:"MPa",
                                                value:"1133",
                                                testMethod:"ISO 527-2"
                                            },
                                            {
                                                propertis:"Flexural strength",
                                                unit:"MPa",
                                                value:"120<",
                                                testMethod:"ISO 178"
                                            },
                                            {
                                                propertis:"Flexural modulus",
                                                unit:"MPa",
                                                value:"3646",
                                                testMethod:"ISO 178"
                                            },
                                            {
                                                propertis:"Heat distortion temperature (HDT)",
                                                unit:"℃",
                                                value:"120<",
                                                testMethod:"ASTM D648"
                                            },
                                            {
                                                propertis:"Hardness (Barcol))",
                                                unit:"-",
                                                value:"40<",
                                                testMethod:"ASTM D2583"
                                            },
                                            {
                                                propertis:"Linear shrinkage (∆L/L)",
                                                unit:"%",
                                                value:"1.1>",
                                                testMethod:"ASTM D2566"
                                            }
                                        ],
                                         safety:"The usual protective measures employed during the handling of Unsaturated Polyester Resins should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                                         Packaging:"225 kg (net) in steel drums.",
                                         Storage:"Store in a cool place below 25 °C and away from moisture and direct sunlight. Under above mentioned storage conditions, the shelf life of the resin will be at least 3 months ex-works.",
                                         Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
                                        },
                                        ru:{
                                         product:"Ненасыщенная полиэфирная смола",
                                         name:"BUP672",
                                         pdf:"TDS-BUP-672_RU.pdf",
                                         Description:"BUP 672 – немодифицированная ненасыщенная полиэфирная смола на ортофталевой основе с хорошими механическими и химическими свойствами, высокой вязкости, устойчивая к гидролизу и ударным нагрузкам, для отверждения при высокой температуре с помощью третбутилпербензоата (TBPB).",
                                         Characteristics:[
                                            "Хорошие механические и химические свойства",
                                            "Высокая вязкость",
                                            "Устойчивость к гидролизу",
                                            "Ударопрочность"
                                         ],
                                         Uses:[
                                            "Составляющие листового прессматериала (SMC) и премикса (BMC)"
                                         ],
                                         Table: [
                                            {
                                                propertis:"Внешний вид",
                                                unit:"-",
                                                value:"Прозрачный",
                                                testMethod:"-"
                                            },
                                            {
                                                propertis:"Цвет",
                                                unit:"Гарднер",
                                                value:"<2",
                                                testMethod:"ASTM D1544"
                                            },
                                            {
                                                propertis:"Вязкость (при 25°C)",
                                                unit:"мПа.с (сантипуаз)",
                                                value:"1100-1300",
                                                testMethod:"ISO 2555"
                                            },
                                            {
                                                propertis:"Плотность (при 23°C)",
                                                unit:"г/см³",
                                                value:"1.1139",
                                                testMethod:"ASTM D1475"
                                            },
                                            {
                                                propertis:"Кислотное число",
                                                unit:"мг KOH/г",
                                                value:"14-18",
                                                testMethod:"ASTM D1639"
                                            },
                                            {
                                                propertis:"Сухой остаток",
                                                unit:"% веса",
                                                value:"65±2",
                                                testMethod:"ASTM D1259"
                                            },
                                            {
                                                propertis:"Время гелеобразования*",
                                                unit:"минуты",
                                                value:"100-150",
                                                testMethod:"ASTM D2471"
                                            },
                                            {
                                                propertis:"Время отверждения",
                                                unit:"минуты",
                                                value:"130-200",
                                                testMethod:"ASTM D2471"
                                            },
                                            {
                                                propertis:"Пик на экзотермической кривой",
                                                unit:"℃",
                                                value:"300>",
                                                testMethod:"ASTM D2471"
                                            },
                                            {
                                                propertis:"Влагопоглощение",
                                                unit:"% веса",
                                                value:"0.1>",
                                                testMethod:"ISO 62"
                                            },
                                            {
                                                propertis:"Температура вспышки (в откр. тигле)",
                                                unit:"℃",
                                                value:"24",
                                                testMethod:"ASTM D92"
                                            },
                                            {
                                                propertis:"Прочность на растяжение/разрыв",
                                                unit:"МПa",
                                                value:"50<",
                                                testMethod:"ISO 527-2"
                                            },
                                            {
                                                propertis:"Удлинение при растяжении",
                                                unit:"%",
                                                value:"4.48",
                                                testMethod:"ISO 527-2"
                                            },
                                            {
                                                propertis:"Удлинение при растяжении",
                                                unit:"МПa",
                                                value:"1133",
                                                testMethod:"ISO 527-2"
                                            },
                                            {
                                                propertis:"Прочность на изгиб",
                                                unit:"МПa",
                                                value:"120<",
                                                testMethod:"ISO 178"
                                            },
                                            {
                                                propertis:"Модуль упругости при изгибе",
                                                unit:"МПa",
                                                value:"3646",
                                                testMethod:"ISO 178"
                                            },
                                            {
                                                propertis:"Температура допустимой деформации",
                                                unit:"℃",
                                                value:"120<",
                                                testMethod:"ASTM D648"
                                            },
                                            {
                                                propertis:"Твердость (по Барколу)",
                                                unit:"-",
                                                value:"40<",
                                                testMethod:"ASTM D2583"
                                            },
                                            {
                                                propertis:"Линейная усадка (∆L/L)",
                                                unit:"%",
                                                value:"1.1>",
                                                testMethod:"ASTM D2566"
                                            }
                                        ],
                                         safety:"Следует соблюдать стандартные меры безопасности транспортировки ненасыщенных полиэфирных смол. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                                         Packaging:"225 кг (нетто) в металлических бочках.",
                                         Storage:"Хранить в прохладном месте при температуре ниже 25 °C и вдали от влаги и прямых солнечных лучей. При соблюдении вышеуказанных условий хранения срок годности смолы составляет не менее 3 месяца с даты выпуска.",
                                         Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
                                        }
                                 
                                     },
                                     BUP690 :{
                                         fa:{
                                          product:"رزین پلی استر غیر اشباع",
                                          name:"BUP690",
                                          pdf:"BUP690-Fa.pdf",
                                          Description:"BUP 690 رزین پلی استر غیر اشباع بر پایه اورتوفتالیک و پیش‌فعال شده با آمین، دارای گرانروی کم، ویژگی‌­های مکانیکی بسیار خوب و فیلرخوری بسیار زیاد جهت پخت در دمای محیط به کمک متیل اتیل کتون پراکسید است.",
                                          Characteristics:[
                                           "گرانروی کم",
                                           "ویژگی‌­های مکانیکی بسیار خوب",
                                           "فیلرخوری بسیار زیاد"
                                          ],
                                          Uses:[
                                           "ماستیک و چسب سنگ جهت صنایع سنگ"
                                          ],
                                          Table: [
                                            {
                                                propertis:"شکل ظاهری",
                                                unit:"-",
                                                value:"شفاف، سبز فام",
                                                testMethod:"-"
                                            },
                                            {
                                                propertis:"رنگ",
                                                unit:"Gardner",
                                                value:"-",
                                                testMethod:"ASTM D1544"
                                            },
                                            {
                                                propertis:"گرانروی (℃25)",
                                                unit:"mPa.s (cP)",
                                                value:"300-400",
                                                testMethod:"ISO 2555"
                                            },
                                            {
                                                propertis:"چگالی  (℃23)",
                                                unit:"g/cm³",
                                                value:"1.1227",
                                                testMethod:"ASTM D1475"
                                            },
                                            {
                                                propertis:"عدد اسیدی",
                                                unit:"mg KOH/g",
                                                value:"26",
                                                testMethod:"ASTM D1639"
                                            },
                                            {
                                                propertis:"درصد جامد",
                                                unit:"% wt",
                                                value:"63±2",
                                                testMethod:"ASTM D1259"
                                            },
                                            {
                                                propertis:"*زمان ژل شدن",
                                                unit:"min",
                                                value:"4-9",
                                                testMethod:"ASTM D2471"
                                            },
                                            {
                                                propertis:"زمان پخت",
                                                unit:"min",
                                                value:"4-8",
                                                testMethod:"ASTM D2471"
                                            },
                                            {
                                                propertis:"دمای بیشینه گرمازایی (پیک اگزوترم)",
                                                unit:"℃",
                                                value:"210>",
                                                testMethod:"ASTM D2471"
                                            },
                                            {
                                                propertis:"جذب آب",
                                                unit:"% wt",
                                                value:"0.3>",
                                                testMethod:"ISO 62"
                                            },
                                            {
                                                propertis:"نقطه اشتعال (جام روباز)",
                                                unit:"℃",
                                                value:"20",
                                                testMethod:"ASTM D92"
                                            },
                                            {
                                                propertis:"استحکام کششی",
                                                unit:"MPa",
                                                value:"65<",
                                                testMethod:"ISO 527-2"
                                            },
                                            {
                                                propertis:"ازدیاد طول",
                                                unit:"%",
                                                value:"5.7",
                                                testMethod:"ISO 527-2"
                                            },
                                            {
                                                propertis:"مدول کششی",
                                                unit:"MPa",
                                                value:"944",
                                                testMethod:"ISO 527-2"
                                            },
                                            {
                                                propertis:"استحکام خمشی",
                                                unit:"MPa",
                                                value:"120<",
                                                testMethod:"ISO 178"
                                            },
                                            {
                                                propertis:"مدول خمشی",
                                                unit:"MPa",
                                                value:"3704",
                                                testMethod:"ISO 178"
                                            },
                                            {
                                                propertis:"دمای خمش گرمایی",
                                                unit:"℃",
                                                value:"70<",
                                                testMethod:"ASTM D648"
                                            },
                                            {
                                                propertis:"سختی ( بارکول)",
                                                unit:"-",
                                                value:"44<",
                                                testMethod:"ASTM D2583"
                                            },
                                            {
                                                propertis:"جمع شدگی طولی  (L/L∆)",
                                                unit:"%",
                                                value:"1.4>",
                                                testMethod:"ASTM D2566"
                                            }
                                        ],
                                          safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های پلی استر غیر اشباع رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                                          Packaging:"225 کیلوگرم (خالص) در بشکه‌های فولادی.",
                                          Storage:"محصول را در محل خنک و در دمای کمتر از ℃25 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید. در صورت رعایت شرایط نامبرده، عمر مفید انبارداری محصول حداقل 3 ماه از زمان تحویل است.",
                                          Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
                                         },
                                         en:{
                                          product:"Unsaturated Polyester Resin",
                                          name:"BUP690",
                                          pdf:"BUP690-En.pdf",
                                          Description:"BUP 690 is a pre-promoted (amine-accelerated) orthophthalic based unsaturated polyester resin with low viscosity, very good mechanical properties and outstanding filler binding power for ambient temperature cure with MEK peroxide.",
                                          Characteristics:[
                                            "Low viscosity",
                                            "Very good mechanical properties",
                                            "Outstanding filler binding power"
        
                    
                                          ],
                                          Uses:[
                                            "Mastic and stone adhesive for stone industries"
                          
                                          ],
                                          Table: [
                                            {
                                                propertis:"Appearance",
                                                unit:"-",
                                                value:"Clear, Greenish",
                                                testMethod:"-"
                                            },
                                            {
                                                propertis:"Color",
                                                unit:"Gardner",
                                                value:"-",
                                                testMethod:"ASTM D1544"
                                            },
                                            {
                                                propertis:"Viscosity (at 25°C)",
                                                unit:"mPa.s (cP)",
                                                value:"300-400",
                                                testMethod:"ISO 2555"
                                            },
                                            {
                                                propertis:"Density (at 23°C)",
                                                unit:"g/cm³",
                                                value:"1.1227",
                                                testMethod:"ASTM D1475"
                                            },
                                            {
                                                propertis:"Acid number",
                                                unit:"mg KOH/g",
                                                value:"<26",
                                                testMethod:"ASTM D1639"
                                            },
                                            {
                                                propertis:"Solid content",
                                                unit:"wt %",
                                                value:"63±2",
                                                testMethod:"ASTM D1259"
                                            },
                                            {
                                                propertis:"Gel time*",
                                                unit:"min",
                                                value:"4-9",
                                                testMethod:"ASTM D2471"
                                            },
                                            {
                                                propertis:"Curing time",
                                                unit:"min",
                                                value:"4-8",
                                                testMethod:"ASTM D2471"
                                            },
                                            {
                                                propertis:"Peak exothermic temperature",
                                                unit:"℃",
                                                value:"210>",
                                                testMethod:"ASTM D2471"
                                            },
                                            {
                                                propertis:"Water absorption",
                                                unit:"% wt ",
                                                value:"0.3>",
                                                testMethod:"ISO 62"
                                            },
                                            {
                                                propertis:"Flash point (open cup)",
                                                unit:"℃",
                                                value:"20",
                                                testMethod:"ASTM D92"
                                            },
                                            {
                                                propertis:"Tensile strength",
                                                unit:"MPa",
                                                value:"65<",
                                                testMethod:"ISO 527-2"
                                            },
                                            {
                                                propertis:"Tensile elongation",
                                                unit:"%",
                                                value:"5.7",
                                                testMethod:"ISO 527-2"
                                            },
                                            {
                                                propertis:"Tensile modulus",
                                                unit:"MPa",
                                                value:"944",
                                                testMethod:"ISO 527-2"
                                            },
                                            {
                                                propertis:"Flexural strength",
                                                unit:"MPa",
                                                value:"120<",
                                                testMethod:"ISO 178"
                                            },
                                            {
                                                propertis:"Flexural modulus",
                                                unit:"MPa",
                                                value:"3704",
                                                testMethod:"ISO 178"
                                            },
                                            {
                                                propertis:"Heat distortion temperature (HDT)",
                                                unit:"℃",
                                                value:"70<",
                                                testMethod:"ASTM D648"
                                            },
                                            {
                                                propertis:"Hardness (Barcol))",
                                                unit:"-",
                                                value:"44<",
                                                testMethod:"ASTM D2583"
                                            },
                                            {
                                                propertis:"Linear shrinkage (∆L/L)",
                                                unit:"%",
                                                value:"1.4>",
                                                testMethod:"ASTM D2566"
                                            }
                                        ],
                                          safety:"The usual protective measures employed during the handling of Unsaturated Polyester Resins should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                                          Packaging:"225 kg (net) in steel drums.",
                                          Storage:"Store in a cool place below 25 °C and away from moisture and direct sunlight. Under above mentioned storage conditions, the shelf life of the resin will be at least 3 months ex-works.",
                                          Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
                                         },
                                         ru:{
                                          product:"Ненасыщенная полиэфирная смола",
                                          name:"BUP690",
                                          pdf:"TDS-BUP-690_RU.pdf",
                                          Description:"BUP 690 – предускоренная (аминомодифицированная) ненасыщенная полиэфирная смола на ортофталевой основе с низкой вязкостью, очень хорошими механическими свойствами, и исключительной связующей способностью наполнителя, для отверждения при комнатной температуре с помощью MEK пероксида.",
                                          Characteristics:[
                                             "Низкая вязкость",
                                             "Очень хорошие механические и химические свойства",
                                             "Исключительная связующая способность наполнителя"
                                          ],
                                          Uses:[
                                             "Мастики и адгезив для камня"
                                          ],
                                          Table: [
                                            {
                                                propertis:"Внешний вид",
                                                unit:"-",
                                                value:"Прозр., зеленоватый",
                                                testMethod:"-"
                                            },
                                            {
                                                propertis:"Цвет",
                                                unit:"Гарднер",
                                                value:"-",
                                                testMethod:"ASTM D1544"
                                            },
                                            {
                                                propertis:"Вязкость (при 25°C)",
                                                unit:"мПа.с (сантипуаз)",
                                                value:"300-400",
                                                testMethod:"ISO 2555"
                                            },
                                            {
                                                propertis:"Плотность (при 23°C)",
                                                unit:"г/см³",
                                                value:"1.1227",
                                                testMethod:"ASTM D1475"
                                            },
                                            {
                                                propertis:"Кислотное число",
                                                unit:"мг KOH/г",
                                                value:"26>",
                                                testMethod:"ASTM D1639"
                                            },
                                            {
                                                propertis:"Сухой остаток",
                                                unit:"% веса",
                                                value:"63±2",
                                                testMethod:"ASTM D1259"
                                            },
                                            {
                                                propertis:"Время гелеобразования*",
                                                unit:"минуты",
                                                value:"4-9",
                                                testMethod:"ASTM D2471"
                                            },
                                            {
                                                propertis:"Время отверждения",
                                                unit:"минуты",
                                                value:"4-8",
                                                testMethod:"ASTM D2471"
                                            },
                                            {
                                                propertis:"Пик на экзотермической кривой",
                                                unit:"℃",
                                                value:">210",
                                                testMethod:"ASTM D2471"
                                            },
                                            {
                                                propertis:"Влагопоглощение",
                                                unit:"% веса",
                                                value:"0.3>",
                                                testMethod:"ISO 62"
                                            },
                                            {
                                                propertis:"Температура вспышки (в откр. тигле)",
                                                unit:"℃",
                                                value:"20",
                                                testMethod:"ASTM D92"
                                            },
                                            {
                                                propertis:"Прочность на растяжение/разрыв",
                                                unit:"МПa",
                                                value:"65<",
                                                testMethod:"ISO 527-2"
                                            },
                                            {
                                                propertis:"Удлинение при растяжении",
                                                unit:"%",
                                                value:"5.7",
                                                testMethod:"ISO 527-2"
                                            },
                                            {
                                                propertis:"Удлинение при растяжении",
                                                unit:"МПa",
                                                value:"944",
                                                testMethod:"ISO 527-2"
                                            },
                                            {
                                                propertis:"Прочность на изгиб",
                                                unit:"МПa",
                                                value:"120<",
                                                testMethod:"ISO 178"
                                            },
                                            {
                                                propertis:"Модуль упругости при изгибе",
                                                unit:"МПa",
                                                value:"3704",
                                                testMethod:"ISO 178"
                                            },
                                            {
                                                propertis:"Температура допустимой деформации",
                                                unit:"℃",
                                                value:"70<",
                                                testMethod:"ASTM D648"
                                            },
                                            {
                                                propertis:"Твердость (по Барколу)",
                                                unit:"-",
                                                value:"44<",
                                                testMethod:"ASTM D2583"
                                            },
                                            {
                                                propertis:"Линейная усадка (∆L/L)",
                                                unit:"%",
                                                value:"1.4>",
                                                testMethod:"ASTM D2566"
                                            }
                                        ],
                                          safety:"Следует соблюдать стандартные меры безопасности транспортировки ненасыщенных полиэфирных смол. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                                          Packaging:"225 кг (нетто) в металлических бочках.",
                                          Storage:"Хранить в прохладном месте при температуре ниже 25 °C и вдали от влаги и прямых солнечных лучей. При соблюдении вышеуказанных условий хранения срок годности смолы составляет не менее 3 месяца с даты выпуска.",
                                          Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
                                         }
                                  
                                      },
                                      550 :{
                                          fa:{
                                           product:"رزین پلی استر اشباع",
                                           name:"550",
                                           pdf:"codeBPC550_T.pdf",
                                           Description:"رزین پلی استر TGIC",
                                           Characteristics:[
                                            "براقیت خوب",
                                            "گرانروی متوسط",
                                            "چسبندگی خوب",
                                            "مقاومت مکانیکی خوب",
                                            "مقاومت آب و هوایی خوب"
                                           ],
                                           Uses:[
                                            "پروفیل آلومینیوم",
                                            "کولرهای آبی",
                                            "چراغ های خیابانی",
                                            "انواع کنترها",
                                            "تابلو برق",
                                            "دوچرخه و موتورسیکلت",
                                            "صندلی و اسباب بازی پارک ها",
                                            "ماشین آلات کشاورزی و راه داری",
                                            "کپسول های گاز و اطفا حریق",
                                            "تابلوهای راهنمایی و رانندگی و گاردریل",
                                            "صفحات کامپوزیت نمای ساختمان"
                                           ],
                                           Table: [
                                            {
                                                propertis:"نوع",
                                                unit:"-",
                                                value:"پلی استر TGIC",
                                                testMethod:"-"
                                            },
                                            {
                                                propertis:"عدد اسیدی",
                                                unit:"-",
                                                value:"30-36",
                                                testMethod:"-"
                                            },
                                            {
                                                propertis:"ویسکوزیته CP",
                                                unit:"-",
                                                value:"7000±1000",
                                                testMethod:"-"
                                            },
                                            {
                                                propertis:"دمای شیشه ای شدن TG",
                                                unit:"-",
                                                value:"67",
                                                testMethod:"-"
                                            },
                                            {
                                                propertis:"رنگ",
                                                unit:"-",
                                                value:"<3",
                                                testMethod:"-"
                                            }




                                        ],
                                           safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های پلی استر اشباع رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                                           Packaging:"25 کیلوگرم (خالص) در کیسه پلاستیکی.",
                                           Storage:"محصول را در محل خنک و در دمای کمتر از ℃30 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید. در صورت رعایت شرایط نامبرده، عمر مفید انبارداری محصول حداقل 1 سال از زمان تحویل است.",
                                           Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
                                          },
                                          en:{
                                           product:"Saturated Polyester Resin",
                                           name:"550",
                                           pdf:"codeBPC550_T.pdf",
                                           Description:"PE / TGIC Polyester Resin",
                                           Characteristics:[
                                             "Good gloss",
                                             "Medium viscosity",
                                             "Good mechanical properties",
                                             "Medium filler and extender binding capacity",
                                             "Good weather resistance"
                     
                                           ],
                                           Uses:[
                                             "Aluminium profiles",
                                             "Water coolers",
                                             "Street lights",
                                             "Types of counters",
                                             "Electrical panel",
                                             "Bicycles and motorcycles",
                                             "Park chairs and toys",
                                             "Agricultural and road machinery",
                                             "Gas capsules and fire extinguishers",
                                             "Traffic signs and guardrails",
                                             "Composite building facade panels"
                           
                                           ],
                                           Table: [
                                            {
                                                propertis:"Type",
                                                unit:"-",
                                                value:"TGIC",
                                                testMethod:"-"
                                            },
                                            {
                                                propertis:"Acid Value",
                                                unit:"-",
                                                value:"30-36",
                                                testMethod:"-"
                                            },
                                            {
                                                propertis:"Viscosity(CP)",
                                                unit:"-",
                                                value:"7000±1000",
                                                testMethod:"-"
                                            },
                                            {
                                                propertis:"TG (°C)",
                                                unit:"-",
                                                value:"67",
                                                testMethod:"-"
                                            },
                                            {
                                                propertis:"Color",
                                                unit:"-",
                                                value:"<3",
                                                testMethod:"-"
                                            }




                                        ],
                                      
                                           safety:"The usual protective measures employed during the handling of Unsaturated Polyester Resins should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                                           Packaging:"25 kg (net) in plastic bag",
                                           Storage:"Store in a cool place below 30 °C and away from moisture and direct sunlight. Under above mentioned storage conditions, the shelf life of the resin will be at least 1 year ex-works.",
                                           Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
                                          },
                                          ru:{
                                           product:"Насыщенные полиэфирные смолы",
                                           name:"550",
                                           pdf:"codeBPC550_T.pdf",
                                           Description:"PE / TGIC полиэфирная смола",
                                           Characteristics:[
                                              "Хороший блеск",
                                              "Хорошая адгезия к стекловолокну",
                                              "Хорошие механические свойства",
                                              "Средняя связующая способность наполнителей и экстендеров",
                                              "Хорошая устойчивость к атмосферным воздействиям"
                                           ],
                                           Uses:[
                                              "Алюминиевые профили",
                                              "Кулеры для воды",
                                              "уличные фонари",
                                              "Типы счетчиков",
                                              "Электрическая панель",
                                              "Велосипеды и мотоциклы",
                                              "Парковые стулья и игрушки",
                                              "Сельскохозяйственная и дорожная техника",
                                              "Газовые капсулы и огнетушители",
                                              "Дорожные знаки и ограждения",
                                              "Композитные фасадные панели зданий"
                                           ],
                                           Table: [
                                            {
                                                propertis:"Тип",
                                                unit:"-",
                                                value:"TGIC",
                                                testMethod:"-"
                                            },
                                            {
                                                propertis:"Кислотное число",
                                                unit:"-",
                                                value:"30-36",
                                                testMethod:"-"
                                            },
                                            {
                                                propertis:"Вязкость(CP)",
                                                unit:"-",
                                                value:"7000±1000",
                                                testMethod:"-"
                                            },
                                            {
                                                propertis:"TG (°C)",
                                                unit:"-",
                                                value:"67",
                                                testMethod:"-"
                                            },
                                            {
                                                propertis:"Цвет",
                                                unit:"-",
                                                value:"<3",
                                                testMethod:"-"
                                            }




                                        ],
                                           safety:"Следует соблюдать стандартные меры безопасности транспортировки ненасыщенных полиэфирных смол. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                                           Packaging:"25 кг (нетто) в полиэтиленовый пакет",
                                           Storage:" Хранить в прохладном месте при температуре ниже 30 °C и вдали от влаги и прямых солнечных лучей. При соблюдении вышеуказанных условий хранения срок годности смолы составляет не менее 1 год с даты выпуска.",
                                           Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
                                          }
                                   
                                       }
                                       ,
                                      510 :{
                                          fa:{
                                           product:"رزین پلی استر اشباع",
                                           name:"510",
                                           pdf:"codeBPC510_T.pdf",
                                           Description:"رزین اپوکسی پلی استر 50-50",
                                           Characteristics:[
                                            "براقیت خوب",
                                            "گرانروی متوسط",
                                            "چسبندگی خوب",
                                            "مقاومت مکانیکی خوب",
                                            "مقاومت خوردگی بالا"
                                           ],
                                           Uses:[
                                            "لوازم خانگی",
                                            "ظروف آشپزخانه",
                                            "قفسه های انبار",
                                            "مبلمان اداری",
                                            "قطعات اتومبیل",
                                            "رادیاتور ، شوفاژ",
                                            "صنایع برودتی و حرارتی",
                                            "صنایع روشنایی",
                                            "قطعات الکترونیکی"
                                           ],
                                           Table: [
                                            {
                                                propertis:"نوع",
                                                unit:"-",
                                                value:"هیبرید 50:50",
                                                testMethod:"-"
                                            },
                                            {
                                                propertis:"عدد اسیدی",
                                                unit:"-",
                                                value:"65-75",
                                                testMethod:"-"
                                            },
                                            {
                                                propertis:"ویسکوزیته CP",
                                                unit:"-",
                                                value:"8500±2000",
                                                testMethod:"-"
                                            },
                                            {
                                                propertis:"دمای شیشه ای شدن TG",
                                                unit:"-",
                                                value:"57",
                                                testMethod:"-"
                                            },
                                            {
                                                propertis:"رنگ",
                                                unit:"-",
                                                value:"<3",
                                                testMethod:"-"
                                            }




                                        ],
                                           safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های پلی استر اشباع رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                                           Packaging:"25 کیلوگرم (خالص) در کیسه پلاستیکی.",
                                           Storage:"محصول را در محل خنک و در دمای کمتر از ℃30 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید. در صورت رعایت شرایط نامبرده، عمر مفید انبارداری محصول حداقل 1 سال از زمان تحویل است.",
                                           Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
                                          },
                                          en:{
                                           product:"Saturated Polyester Resin",
                                           name:"510",
                                           pdf:"codeBPC510_T.pdf",
                                           Description:"EP/PE Polyester Resin 50-50",
                                           Characteristics:[
                                             "Good gloss",
                                             "Medium viscosity",
                                             "Good mechanical properties",
                                             "Medium filler and extender binding capacity",
                                             "High corrosion resistance"
                     
                                           ],
                                           Uses:[
                                            "Home Appliances",
                                            "Kitchen Utensils",
                                            "Warehouse shelves",
                                            "office furniture",
                                            "auto parts",
                                            "Refrigeration and heating industries",
                                            "Lighting industry",
                                            "Electronic components"
                           
                                           ],
                                           Table: [
                                            {
                                                propertis:"Type",
                                                unit:"-",
                                                value:"Hybrid 50:50",
                                                testMethod:"-"
                                            },
                                            {
                                                propertis:"Acid Value",
                                                unit:"-",
                                                value:"65-75",
                                                testMethod:"-"
                                            },
                                            {
                                                propertis:"Viscosity(CP)",
                                                unit:"-",
                                                value:"8500±2000",
                                                testMethod:"-"
                                            },
                                            {
                                                propertis:"TG (°C)",
                                                unit:"-",
                                                value:"57",
                                                testMethod:"-"
                                            },
                                            {
                                                propertis:"Color",
                                                unit:"-",
                                                value:"<3",
                                                testMethod:"-"
                                            }




                                        ],
                                         
                                           safety:"The usual protective measures employed during the handling of Unsaturated Polyester Resins should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                                           Packaging:"25 kg (net) in plastic bag",
                                           Storage:"Store in a cool place below 30 °C and away from moisture and direct sunlight. Under above mentioned storage conditions, the shelf life of the resin will be at least 1 year ex-works.",
                                           Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
                                          },
                                          ru:{
                                           product:"Насыщенные полиэфирные смолы",
                                           name:"510",
                                           pdf:"codeBPC510_T.pdf",
                                           Description:"EP/PE полиэфирная смола 50-50",
                                           Characteristics:[
                                              "Хороший блеск",
                                              "Хорошая адгезия к стекловолокну",
                                              "Хорошие механические свойства",
                                              "Средняя связующая способность наполнителей и экстендеров",
                                              "Высокая коррозионная стойкость"
                                           ],
                                           Uses:[
                                              "Бытовая техника",
                                              "Кухонные принадлежности",
                                              "Складские полки",
                                              "офисная мебель",
                                              "Автозапчасти",
                                              "Холодильная и отопительная промышленность",
                                              "Осветительная промышленность",
                                              "Электронные компоненты"
                                           ],
                                           Table: [
                                            {
                                                propertis:"Тип",
                                                unit:"-",
                                                value:"Hybrid 50:50",
                                                testMethod:"-"
                                            },
                                            {
                                                propertis:"Кислотное число",
                                                unit:"-",
                                                value:"65-75",
                                                testMethod:"-"
                                            },
                                            {
                                                propertis:"Вязкость(CP)",
                                                unit:"-",
                                                value:"8500±2000",
                                                testMethod:"-"
                                            },
                                            {
                                                propertis:"TG (°C)",
                                                unit:"-",
                                                value:"57",
                                                testMethod:"-"
                                            },
                                            {
                                                propertis:"Цвет",
                                                unit:"-",
                                                value:"<3",
                                                testMethod:"-"
                                            }




                                        ],
                                       
                                           safety:"Следует соблюдать стандартные меры безопасности транспортировки ненасыщенных полиэфирных смол. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                                           Packaging:"25 кг (нетто) в полиэтиленовый пакет",
                                           Storage:"Хранить в прохладном месте при температуре ниже 30 °C и вдали от влаги и прямых солнечных лучей. При соблюдении вышеуказанных условий хранения срок годности смолы составляет не менее 1 год с даты выпуска.",
                                           Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
                                          }
                                   
                                       },
                                       520 :{
                                           fa:{
                                            product:"رزین پلی استر اشباع",
                                            name:"520",
                                            pdf:"codeBPC520_B.pdf",
                                            Description:"رزین اپوکسی پلی استر 60-40",
                                            Characteristics:[
                                             "براقیت خوب",
                                             "گرانروی متوسط",
                                             "چسبندگی خوب",
                                             "مقاومت مکانیکی خوب",
                                             "مقاومت خوردگی بالا"
                                            ],
                                            Uses:[
                                             "لوازم خانگی",
                                             "ظروف آشپزخانه",
                                             "قفسه های انبار",
                                             "مبلمان اداری",
                                             "قطعات اتومبیل",
                                             "رادیاتور ، شوفاژ",
                                             "صنایع برودتی و حرارتی",
                                             "صنایع روشنایی",
                                             "قطعات الکترونیکی"
                                            ],
                                            Table: [
                                                {
                                                    propertis:"نوع",
                                                    unit:"-",
                                                    value:"هیبرید 60:40",
                                                    testMethod:"-"
                                                },
                                                {
                                                    propertis:"عدد اسیدی",
                                                    unit:"-",
                                                    value:"45-55",
                                                    testMethod:"-"
                                                },
                                                {
                                                    propertis:"ویسکوزیته CP",
                                                    unit:"-",
                                                    value:"3800±1000",
                                                    testMethod:"-"
                                                },
                                                {
                                                    propertis:"دمای شیشه ای شدن TG",
                                                    unit:"-",
                                                    value:"57",
                                                    testMethod:"-"
                                                },
                                                {
                                                    propertis:"رنگ",
                                                    unit:"-",
                                                    value:"<3",
                                                    testMethod:"-"
                                                }
    
    
    
    
                                            ],
                                            safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های پلی استر اشباع رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                                            Packaging:"25 کیلوگرم (خالص) در کیسه پلاستیکی.",
                                            Storage:"محصول را در محل خنک و در دمای کمتر از ℃30 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید. در صورت رعایت شرایط نامبرده، عمر مفید انبارداری محصول حداقل 1 سال از زمان تحویل است.",
                                            Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
                                           },
                                           en:{
                                            product:"Saturated Polyester Resin",
                                            name:"520",
                                            pdf:"codeBPC520_B.pdf",
                                            Description:"EP/PE Polyester Resin 40-60",
                                            Characteristics:[
                                              "Good gloss",
                                              "Medium viscosity",
                                              "Good mechanical properties",
                                              "Medium filler and extender binding capacity",
                                              "High corrosion resistance"
                      
                                            ],
                                            Uses:[
                                             "Home Appliances",
                                             "Kitchen Utensils",
                                             "Warehouse shelves",
                                             "office furniture",
                                             "auto parts",
                                             "Refrigeration and heating industries",
                                             "Lighting industry",
                                             "Electronic components"
                            
                                            ],
                                            
                                            Table: [
                                                {
                                                    propertis:"Type",
                                                    unit:"-",
                                                    value:"Hybrid 60:40",
                                                    testMethod:"-"
                                                },
                                                {
                                                    propertis:"Acid Value",
                                                    unit:"-",
                                                    value:"45-55",
                                                    testMethod:"-"
                                                },
                                                {
                                                    propertis:"Viscosity(CP)",
                                                    unit:"-",
                                                    value:"3800±1000",
                                                    testMethod:"-"
                                                },
                                                {
                                                    propertis:"TG (°C)",
                                                    unit:"-",
                                                    value:"57",
                                                    testMethod:"-"
                                                },
                                                {
                                                    propertis:"Color",
                                                    unit:"-",
                                                    value:"<3",
                                                    testMethod:"-"
                                                }
    
    
    
    
                                            ],
                                            safety:"The usual protective measures employed during the handling of Unsaturated Polyester Resins should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                                            Packaging:"25 kg (net) in plastic bag",
                                            Storage:"Store in a cool place below 30 °C and away from moisture and direct sunlight. Under above mentioned storage conditions, the shelf life of the resin will be at least 1 year ex-works.",
                                            Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
                                           },
                                           ru:{
                                            product:"Насыщенные полиэфирные смолы",
                                            name:"520",
                                            pdf:"codeBPC520_B.pdf",
                                            Description:"EP/PE полиэфирная смола 40-60",
                                            Characteristics:[
                                               "Хороший блеск",
                                               "Хорошая адгезия к стекловолокну",
                                               "Хорошие механические свойства",
                                               "Средняя связующая способность наполнителей и экстендеров",
                                               "Высокая коррозионная стойкость"
                                            ],
                                            Uses:[
                                               "Бытовая техника",
                                               "Кухонные принадлежности",
                                               "Складские полки",
                                               "офисная мебель",
                                               "Автозапчасти",
                                               "Холодильная и отопительная промышленность",
                                               "Осветительная промышленность",
                                               "Электронные компоненты"
                                            ],
                                            Table: [
                                                {
                                                    propertis:"Тип",
                                                    unit:"-",
                                                    value:"Hybrid 60:40",
                                                    testMethod:"-"
                                                },
                                                {
                                                    propertis:"Кислотное число",
                                                    unit:"-",
                                                    value:"45-55",
                                                    testMethod:"-"
                                                },
                                                {
                                                    propertis:"Вязкость(CP)",
                                                    unit:"-",
                                                    value:"3800±1000",
                                                    testMethod:"-"
                                                },
                                                {
                                                    propertis:"TG (°C)",
                                                    unit:"-",
                                                    value:"57",
                                                    testMethod:"-"
                                                },
                                                {
                                                    propertis:"Цвет",
                                                    unit:"-",
                                                    value:"<3",
                                                    testMethod:"-"
                                                }
    
    
    
    
                                            ],
                                            safety:"Следует соблюдать стандартные меры безопасности транспортировки ненасыщенных полиэфирных смол. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                                            Packaging:"25 кг (нетто) в полиэтиленовый пакет",
                                            Storage:"Хранить в прохладном месте при температуре ниже 30 °C и вдали от влаги и прямых солнечных лучей. При соблюдении вышеуказанных условий хранения срок годности смолы составляет не менее 1 год с даты выпуска.",
                                            Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
                                           }
                                    
                                        },
                                        530 :{
                                            fa:{
                                             product:"رزین پلی استر اشباع",
                                             name:"530",
                                             pdf:"codeBPC520_B.pdf",
                                             Description:"رزین اپوکسی پلی استر",
                                             Characteristics:[
                                              "براقیت خوب",
                                              "گرانروی متوسط",
                                              "چسبندگی خوب",
                                              "مقاومت مکانیکی خوب",
                                              "مقاومت خوردگی بالا"
                                             ],
                                             Uses:[
                                              "لوازم خانگی",
                                              "ظروف آشپزخانه",
                                              "قفسه های انبار",
                                              "مبلمان اداری",
                                              "قطعات اتومبیل",
                                              "رادیاتور ، شوفاژ",
                                              "صنایع برودتی و حرارتی",
                                              "صنایع روشنایی",
                                              "قطعات الکترونیکی"
                                             ],
                                             Table: [
                                                {
                                                    propertis:"نوع",
                                                    unit:"-",
                                                    value:"هیبرید 70:30",
                                                    testMethod:"-"
                                                },
                                                {
                                                    propertis:"عدد اسیدی",
                                                    unit:"-",
                                                    value:"27-33",
                                                    testMethod:"-"
                                                },
                                                {
                                                    propertis:"ویسکوزیته CP",
                                                    unit:"-",
                                                    value:"6000±1000",
                                                    testMethod:"-"
                                                },
                                                {
                                                    propertis:"دمای شیشه ای شدن TG",
                                                    unit:"-",
                                                    value:"60",
                                                    testMethod:"-"
                                                },
                                                {
                                                    propertis:"رنگ",
                                                    unit:"-",
                                                    value:"<3",
                                                    testMethod:"-"
                                                }
    
    
    
    
                                            ],
                                             safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های پلی استر اشباع رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                                             Packaging:"25 کیلوگرم (خالص) در کیسه پلاستیکی.",
                                             Storage:"محصول را در محل خنک و در دمای کمتر از ℃30 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید. در صورت رعایت شرایط نامبرده، عمر مفید انبارداری محصول حداقل 1 سال از زمان تحویل است.",
                                             Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
                                            },
                                            en:{
                                             product:"Saturated Polyester Resin",
                                             name:"530",
                                             pdf:"codeBPC520_B.pdf",
                                             Description:"EP/PE Polyester Resin 30-70",
                                             Characteristics:[
                                               "Good gloss",
                                               "Medium viscosity",
                                               "Good mechanical properties",
                                               "Medium filler and extender binding capacity",
                                               "High corrosion resistance"
                       
                                             ],
                                             Uses:[
                                              "Home Appliances",
                                              "Kitchen Utensils",
                                              "Warehouse shelves",
                                              "office furniture",
                                              "auto parts",
                                              "Refrigeration and heating industries",
                                              "Lighting industry",
                                              "Electronic components"
                             
                                             ],

                                             Table: [
                                                {
                                                    propertis:"Type",
                                                    unit:"-",
                                                    value:"Hybrid 70:30",
                                                    testMethod:"-"
                                                },
                                                {
                                                    propertis:"Acid Value",
                                                    unit:"-",
                                                    value:"27-33",
                                                    testMethod:"-"
                                                },
                                                {
                                                    propertis:"Viscosity(CP)",
                                                    unit:"-",
                                                    value:"6000±1000",
                                                    testMethod:"-"
                                                },
                                                {
                                                    propertis:"TG (°C)",
                                                    unit:"-",
                                                    value:"60",
                                                    testMethod:"-"
                                                },
                                                {
                                                    propertis:"Color",
                                                    unit:"-",
                                                    value:"<3",
                                                    testMethod:"-"
                                                }
    
    
    
    
                                            ],
                                             safety:"The usual protective measures employed during the handling of Unsaturated Polyester Resins should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                                             Packaging:"25 kg (net) in plastic bag",
                                             Storage:"Store in a cool place below 30 °C and away from moisture and direct sunlight. Under above mentioned storage conditions, the shelf life of the resin will be at least 1 year ex-works.",
                                             Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
                                            },
                                            ru:{
                                             product:"Насыщенные полиэфирные смолы",
                                             name:"530",
                                             pdf:"codeBPC520_B.pdf",
                                             Description:"EP/PE полиэфирная смола 30-70",
                                             Characteristics:[
                                                "Хороший блеск",
                                                "Хорошая адгезия к стекловолокну",
                                                "Хорошие механические свойства",
                                                "Средняя связующая способность наполнителей и экстендеров",
                                                "Высокая коррозионная стойкость"
                                             ],
                                             Uses:[
                                                "Бытовая техника",
                                                "Кухонные принадлежности",
                                                "Складские полки",
                                                "офисная мебель",
                                                "Автозапчасти",
                                                "Холодильная и отопительная промышленность",
                                                "Осветительная промышленность",
                                                "Электронные компоненты"
                                             ],
                                             Table: [
                                                {
                                                    propertis:"Тип",
                                                    unit:"-",
                                                    value:"Hybrid 70:30",
                                                    testMethod:"-"
                                                },
                                                {
                                                    propertis:"Кислотное число",
                                                    unit:"-",
                                                    value:"27-33",
                                                    testMethod:"-"
                                                },
                                                {
                                                    propertis:"Вязкость(CP)",
                                                    unit:"-",
                                                    value:"6000±1000",
                                                    testMethod:"-"
                                                },
                                                {
                                                    propertis:"TG (°C)",
                                                    unit:"-",
                                                    value:"60",
                                                    testMethod:"-"
                                                },
                                                {
                                                    propertis:"Цвет",
                                                    unit:"-",
                                                    value:"<3",
                                                    testMethod:"-"
                                                }
    
    
    
    
                                            ],
                                             safety:"Следует соблюдать стандартные меры безопасности транспортировки ненасыщенных полиэфирных смол. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                                             Packaging:"25 кг (нетто) в полиэтиленовый пакет",
                                             Storage:"Хранить в прохладном месте при температуре ниже 30 °C и вдали от влаги и прямых солнечных лучей. При соблюдении вышеуказанных условий хранения срок годности смолы составляет не менее 1 год с даты выпуска.",
                                             Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
                                            }
                                     
                                         },
                                         BMA401 :{
                                             fa:{
                                              product:"رزین مالئیک",
                                              name:"BMA401",
                                              pdf:"BMA-401-fa.pdf",
                                              Description:"BAM 401 T-70  رزین مالئیک با براقیت ، حفظ براقیت ، سختی عالی ، خشک­ شوندگی سطحی و عمقی بسیار خوب است.",
                                              Characteristics:[
                                               "براقیت و حفظ براقیت عالی",
                                               "سختی عالی",
                                               "خشک­شوندگی سطحی وعمقی بسیار خوب"
                                              ],
                                              Uses:[
                                               "رنگ فوری بر پایه نیتروسلولز",
                                               "پوشش چوب",
                                               "رنگ ترافیکی"
                                              ],
                                               Table: [
                                                {
                                                    propertis:"حلال",
                                                    unit:"-",
                                                    value:"تولوئن",
                                                    testMethod:"-"
                                                },
                                                {
                                                    propertis:"رنگ",
                                                    unit:"Gardner",
                                                    value:"10>",
                                                    testMethod:"ASTM D1544"
                                                },
                                                {
                                                    propertis:"گرانروی (℃25)",
                                                    unit:"mPa.s (cP)",
                                                    value:"40-60",
                                                    testMethod:"ISO 2555"
                                                },
                                               
                                                {
                                                    propertis:"عدد اسیدی",
                                                    unit:"mg KOH/g",
                                                    value:"35>",
                                                    testMethod:"ASTM D1639"
                                                },
                                                {
                                                    propertis:"درصد جامد",
                                                    unit:"% wt",
                                                    value:"70±1",
                                                    testMethod:"ASTM D1259"
                                                },
                                                {
                                                    propertis:"چگالی  (℃23)",
                                                    unit:"g/cm³",
                                                    value:"1.036",
                                                    testMethod:"ASTM D1475"
                                                }
                                                ,
                                                {
                                                    propertis:"نقطه اشتعال (جام روباز)",
                                                    unit:"℃",
                                                    value:"5",
                                                    testMethod:"ASTM D92"
                                                }
    
    
    
    
                                            ],
                                              safety:"شرایط نگهداری متداول در بکارگیری رزین‌­های مالئیکی رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                                              Packaging:" 200 کیلوگرم (خالص) در بشکه‌های فولادی.",
                                              Storage:"محصول را در محل خنک و در دمای کمتر از ℃25 و به دور از رطوبت و تابش مستقیم نور آفتاب نگهداری نمایید.",
                                              Disclaimer:"اطلاعات و پیشنهادهای موجود در این برگه درباره کاربرد محصولات شرکت بنیان کالا شیمی، بر اساس آخرین دانش ما ارائه شده؛ مشروط بر اینکه محصول تحت شرایط معمول و در بازه زمانی معین در طول عمر مفید به درستی نگهداری و استفاده گردد. در عمل، به علت تفاوت­های ذاتی مواد، ساختار شیمیایی و شرایط واقعی محیط، اطلاعات و توصیه­های مطروحه در این برگه، به هیچ وجه به منزله ضمانت در قبال شرایط مصرف این محصول و سازگاری با سایر مواد، تلقی نمی­شود؛ ضمناً مسئولیت پیگرد قانونی در این حوزه نیز از شرکت بنیان کالا شیمی سلب می­گردد. تحت هر شرایطی حقوق مالکیت اشخاص ثالث باید ملاحظه شود. سفارش خرید بر اساس مقررات و قراردادهای جاری فروش و تحویل این شرکت دریافت می­‌شود. به کاربران اکیداً توصیه می­‌شود که همواره به آخرین ویرایش معتبر داده برگ فنی محصول در تارنمای ما به نشانی www.bonyankala.com مراجعه کنند؛ همچنین این اطلاعات از طریق تماس با تیم فروش نیز قابل تهیه است."
                                             },
                                             en:{
                                              product:"Maleic Resin",
                                              name:"BMA401",
                                              pdf:"BMA-401-en.pdf",
                                              Description:"BMA 401 T-70 is a Maleic Resin which offers excellent gloss and gloss retention and hardness and very good surface and deep drying properties",
                                              Characteristics:[
                                                "Excellent gloss and gloss retention",
                                                "Excellent hardness",
                                                "Very good surface and deep drying"
                        
                                              ],
                                              Uses:[
                                               "Nitro cellulose enamels and paints",
                                               "Wood coatings",
                                               "Traffic paints"
                              
                                              ],
                                              Table: [
                                                {
                                                    propertis:"Solvent",
                                                    unit:"-",
                                                    value:"Toluene",
                                                    testMethod:"-"
                                                },
                                                {
                                                    propertis:"Color",
                                                    unit:"Gardner",
                                                    value:"10>",
                                                    testMethod:"ASTM D1544"
                                                },
                                                {
                                                    propertis:"Viscosity (at 25°C)",
                                                    unit:"mPa.s (cP)",
                                                    value:"40-60",
                                                    testMethod:"ISO 2555"
                                                },
                                               
                                                {
                                                    propertis:"Acid number",
                                                    unit:"mg KOH/g",
                                                    value:"35>",
                                                    testMethod:"ASTM D1639"
                                                },
                                                {
                                                    propertis:"Solid content",
                                                    unit:"% wt",
                                                    value:"70±1",
                                                    testMethod:"ASTM D1259"
                                                },
                                                {
                                                    propertis:"Density (at 23°C)",
                                                    unit:"g/cm³",
                                                    value:"1.036",
                                                    testMethod:"ASTM D1475"
                                                }
                                                ,
                                                {
                                                    propertis:"Flash point (open cup)",
                                                    unit:"℃",
                                                    value:"5",
                                                    testMethod:"ASTM D92"
                                                }
    
    
    
    
                                            ],
                                              safety:"The usual protective measures employed during the handling of Maleic Resin should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                                              Packaging:"200 kg (net) in steel drums.",
                                              Storage:"Store in a cool place below 25 °C and away from moisture and direct sunlight.",
                                              Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
                                             },
                                             ru:{
                                              product:"Малеиновая Смола",
                                              name:"BMA401",
                                              pdf:"BMA-401-ru.pdf",
                                              Description:"BMA 401 T-70 – малеиновая смола, обладающая отличной твердостью и блеском и устойчивостью блеска и хорошее поверхностным и глубоким высыханием.",
                                              Characteristics:[
                                                 "Отличные блеск и устойчивость блеска",
                                                 "Отличная твердость",
                                                 "хорошее поверхностное и глубокое высыхание"
                                              ],
                                              Uses:[
                                                 "Нитроцеллюлозная эмаль и краска",
                                                 "Покрытия для дерева",
                                                 "дорожные краскa"
                                              ],
                                              Table: [
                                                {
                                                    propertis:"растворитель",
                                                    unit:"-",
                                                    value:"Толуол",
                                                    testMethod:"-"
                                                },
                                                {
                                                    propertis:"Цвет",
                                                    unit:"Гарднер",
                                                    value:"10>",
                                                    testMethod:"ASTM D1544"
                                                },
                                                {
                                                    propertis:"Вязкость (при 25°C)",
                                                    unit:"mPa.s (cP)",
                                                    value:"40-60",
                                                    testMethod:"ISO 2555"
                                                },
                                               
                                                {
                                                    propertis:"Кислотное число",
                                                    unit:"mg KOH/g",
                                                    value:"35>",
                                                    testMethod:"ASTM D1639"
                                                },
                                                {
                                                    propertis:"Сухой остаток",
                                                    unit:"% wt",
                                                    value:"70±1",
                                                    testMethod:"ASTM D1259"
                                                },
                                                {
                                                    propertis:"Плотность (при 23°C)",
                                                    unit:"g/cm³",
                                                    value:"1.036",
                                                    testMethod:"ASTM D1475"
                                                }
                                                ,
                                                {
                                                    propertis:"Температура вспышки (в открытом тиглe)",
                                                    unit:"℃",
                                                    value:"5",
                                                    testMethod:"ASTM D92"
                                                }
    
    
    
    
                                            ],
                                              safety:"Следует соблюдать стандартные меры безопасности транспортировки Малеиновая Смола. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                                              Packaging:"200 кг (нетто) в металлических бочках",
                                              Storage:"Хранить в прохладном месте при температуре ниже 25 °C и вдали от влаги и прямых солнечных лучей.",
                                              Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
                                             }
                                      
                                          },
                                          BDCo10 :{
                                              fa:{
                                               product:"خشک­‌کن اکتوئات کبالت",
                                               name:"BD-Co-10",
                                               pdf:"BD-Co-10-Fa.pdf",
                                               Description:"BD-Co-10 مهم­ترین خشک­‌کن فلزی است. این خشک­‌کن باعث خشک­‌شوندگی سطحی سریع و به همراه یک خشک­‌کن ثانویه مانند زیرکونیم، باریم یا روی، باعث خشک­‌شوندگی حجمی یکنواخت فیلم رنگ می­‌شود.",
                                               Characteristics:[
                                                "خشک­‌کن فعال اکسایشی",
                                                "مهم­ترین خشک­‌کن سامانه­‌های هوا­خشک، به ویژه جهت خشک­‌کنندگی سطحی"
                                               ],
                                               Uses:[
                                                "رنگ­‌های هوا­خشک، عموما به همراه خشک­‌کن های کلسیم، سرب ویا زیرکونیم",
                                                "عامل شتاب دهنده در رزین­های پلی استر غیر اشباع"
                                               ],
                                               Table: [
                                                {
                                                    propertis:"شکل ظاهری",
                                                    unit:"-",
                                                    value:"مایع، بنفش فام",
                                                    testMethod:"-"
                                                },
                                                {
                                                    propertis:"نوع فلز",
                                                    unit:"-",
                                                    value:"کبالت",
                                                    testMethod:"-"
                                                },
                                                {
                                                    propertis:"درصد فلز",
                                                    unit:"wt %",
                                                    value:"10±0.2",
                                                    testMethod:"ASTM D2373"
                                                },
                                               
                                                {
                                                    propertis:"نوع اسید",
                                                    unit:"-",
                                                    value:"اکتوئیک",
                                                    testMethod:"-"
                                                },
                                                {
                                                    propertis:"درصد جامد",
                                                    unit:"% wt",
                                                    value:"50-54",
                                                    testMethod:"ASTM D1259"
                                                },
                                                {
                                                    propertis:"رنگ",
                                                    unit:"Gardner",
                                                    value:"-",
                                                    testMethod:"ASTM D1259"
                                                }
                                                ,
                                                {
                                                    propertis:"گرانروی – کربس  (℃20)",
                                                    unit:"mPa.s (cP)",
                                                    value:"400-600",
                                                    testMethod:"ASTM D562"
                                                }
                                                ,
                                                {
                                                    propertis:"چگالی  (℃23)",
                                                    unit:"g/cm3",
                                                    value:"0.9838",
                                                    testMethod:"ASTM D1475"
                                                }
    
    
    
    
                                            ],
                                               safety:"شرایط نگهداری متداول در بکارگیری خشک­‌کن­‌ها رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                                               Packaging:"20 کیلوگرم یا 200 کیلوگرم (خالص) در بشکه­‌های فولادی و 4 کیلوگرم (خالص) در ظروف پلاستیکی.",
                                               Storage:"محصول را در معرض هوازدگی قرار نداده و در در دمای کمتر از ℃30 نگهداری نمایید. محصول را در اولین فرصت پس از باز کردن درب ظرف مصرف نمایید."
                                              },
                                              en:{
                                               product:"Cobalt Octoate Drier",
                                               name:"BD-Co-10",
                                               pdf:"BD-Co-10-En.pdf",
                                               Description:"BD-Co-10 is the most important metal drier. It results in rapid surface drying and in combination with a secondary drier such as Zirconium, Barium or Zinc, in uniform through-drying of the paint film.",
                                               Characteristics:[
                                                 "Active oxidation drier",
                                                 "Most important drier for air drying systems, especially for surface drying"
                         
                                               ],
                                               Uses:[
                                                "Air drying paints, usually in conjunction with calcium, lead and or zirconium driers",
                                                "Accelerator for unsaturated polyester resins (UPR)"
                               
                                               ],
                                               Table: [
                                                {
                                                    propertis:"Appearance",
                                                    unit:"-",
                                                    value:"Violet Liquid",
                                                    testMethod:"-"
                                                },
                                                {
                                                    propertis:"Metal type",
                                                    unit:"-",
                                                    value:"Cobalt",
                                                    testMethod:"-"
                                                },
                                                {
                                                    propertis:"Metal content",
                                                    unit:"wt %",
                                                    value:"10±0.2",
                                                    testMethod:"ASTM D2373"
                                                },
                                               
                                                {
                                                    propertis:"Acid type",
                                                    unit:"-",
                                                    value:"Octoic",
                                                    testMethod:"-"
                                                },
                                                {
                                                    propertis:"Solid content",
                                                    unit:"% wt",
                                                    value:"50-54",
                                                    testMethod:"ASTM D1259"
                                                },
                                                {
                                                    propertis:"Color",
                                                    unit:"Gardner",
                                                    value:"-",
                                                    testMethod:"ASTM D1259"
                                                }
                                                ,
                                                {
                                                    propertis:"Viscosity – Krebs (at 20°C)",
                                                    unit:"mPa.s (cP)",
                                                    value:"400-600",
                                                    testMethod:"ASTM D562"
                                                }
                                                ,
                                                {
                                                    propertis:"Density (at 23°C)",
                                                    unit:"g/cm3",
                                                    value:"0.9838",
                                                    testMethod:"ASTM D1475"
                                                }
    
    
    
    
                                            ],
                                               safety:"The usual protective measures employed during the handling of Driers should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                                               Packaging:" 20 kg or 200 kg (net) in steel drums and 4 kg (net) in plastic containers.",
                                               Storage:"Protect from the effects of weathering and store at temperatures below 30°C. Once opened, containers should be released immediately after each removal of product.",
                                               Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
                                              },
                                              ru:{
                                               product:"Сиккатив октоат кобальта",
                                               name:"BD-Co-10",
                                               pdf:"BD-Co-10-En.pdf",
                                               Description:"BD-Co-10 – самый важный сиккатив на основе металла. Он обеспечивает быстрое поверхностное высыхание и в комбинации со вторичным сиккативом, таким как циркониевый, бариевый или цинковый – глубокое высыхание лакокрасочной пленки.",
                                               Characteristics:[
                                                  "Активный окисляющий сиккатив",
                                                  "Самый важный сиккатив для любой воздушной сушки, особенной для поверхностной"
                                               ],
                                               Uses:[
                                                  "Краски воздушной сушки, обычно в сочетании с кальциевыми, свинцовыми и/или циркониевыми сиккативами",
                                                  "Ускоритель для ненасыщенных полиэфирных смол (НПС)"
                                               ],
                                               Table: [
                                                {
                                                    propertis:"Внешний вид",
                                                    unit:"-",
                                                    value:"Лиловая жидкость",
                                                    testMethod:"-"
                                                },
                                                {
                                                    propertis:"Тип металла",
                                                    unit:"-",
                                                    value:"Кобальт",
                                                    testMethod:"-"
                                                },
                                                {
                                                    propertis:"Состав металла",
                                                    unit:"wt %",
                                                    value:"10±0.2",
                                                    testMethod:"ASTM D2373"
                                                },
                                               
                                                {
                                                    propertis:"Тип кислоты",
                                                    unit:"-",
                                                    value:"Октановая",
                                                    testMethod:"-"
                                                },
                                                {
                                                    propertis:"Сухой остаток",
                                                    unit:"% wt",
                                                    value:"50-54",
                                                    testMethod:"ASTM D1259"
                                                },
                                                {
                                                    propertis:"Цвет",
                                                    unit:"Гарднер",
                                                    value:"-",
                                                    testMethod:"ASTM D1259"
                                                }
                                                ,
                                                {
                                                    propertis:"Вязкость – Кребс (при 20°C)",
                                                    unit:"mPa.s (cP)",
                                                    value:"400-600",
                                                    testMethod:"ASTM D562"
                                                }
                                                ,
                                                {
                                                    propertis:"Плотность (при 23°C)",
                                                    unit:"g/cm3",
                                                    value:"0.9838",
                                                    testMethod:"ASTM D1475"
                                                }
    
    
    
    
                                            ],
                                               safety:"Следует соблюдать стандартные меры безопасности транспортировки сиккативов. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                                               Packaging:"20 кг или 200 кг (нетто) в металлических бочках и 4 кг (нетто) в пластиковых контейрах.",
                                               Storage:"Защищать от воздейсвтия атмосферных условий и хранить при температурах ниже 30°C. После открытия контейнеры следует герметизировать немедленно после каждого забора продукта.",
                                               Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
                                              }
                                       
                                           },
                                           BDCa5 :{
                                               fa:{
                                                product:"خشک­‌کن اکتوئات کلسیم",
                                                name:"BD-Ca-5",
                                                pdf:"BD-Ca-5-Fa.pdf",
                                                Description:"BD-Ca-5، خشک­‌کنی­ کمکی است که به همراه اکتوئات سرب و کبالت، به­‌ویژه در رنگ­‌ها و پوشش­­‌های آلکیدی مورد استفاده قرار می‌­گیرد. BD-Ca-5 به همراه خشک­‌کن­های کبالت، مانند BD-Co-10، کارایی خشک­‌کن کبالت را در رنگ‌­ها و پوشش‌­­ها بهبود می­‌بخشد.",
                                                Characteristics:[
                                                 "خشک­‌کن کمکی",
                                                 "خشک­‌کن حجمی و سطحی در سامانه­‌های هوا­خشک"
                                                ],
                                                Uses:[
                                                 "BD-Ca-5 به طور گسترده در سامانه‌های هوا­خشک، به همراه خشک‌کن های کبالت، سرب و یا زیرکونیم به کار می‌رود.",
                                                ],
                                                Table: [
                                                    {
                                                        propertis:"شکل ظاهری",
                                                        unit:"-",
                                                        value:"مایع، بنفش فام",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"نوع فلز",
                                                        unit:"-",
                                                        value:"کبالت",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"درصد فلز",
                                                        unit:"wt %",
                                                        value:"10±0.2",
                                                        testMethod:"ASTM D2373"
                                                    },
                                                   
                                                    {
                                                        propertis:"نوع اسید",
                                                        unit:"-",
                                                        value:"اکتوئیک",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"درصد جامد",
                                                        unit:"% wt",
                                                        value:"50-54",
                                                        testMethod:"ASTM D1259"
                                                    },
                                                    {
                                                        propertis:"رنگ",
                                                        unit:"Gardner",
                                                        value:"-",
                                                        testMethod:"ASTM D1259"
                                                    }
                                                    ,
                                                    {
                                                        propertis:"گرانروی – کربس  (℃20)",
                                                        unit:"mPa.s (cP)",
                                                        value:"400-600",
                                                        testMethod:"ASTM D562"
                                                    }
                                                    ,
                                                    {
                                                        propertis:"چگالی  (℃23)",
                                                        unit:"g/cm3",
                                                        value:"0.9838",
                                                        testMethod:"ASTM D1475"
                                                    }
        
        
        
        
                                                ],
                                                safety:"شرایط نگهداری متداول در بکارگیری خشک­‌کن­‌ها رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                                                Packaging:"180 کیلوگرم (خالص) در بشکه‌های فولادی.",
                                                Storage:"محصول را در معرض هوازدگی قرار نداده و در در دمای کمتر از ℃50 نگهداری نمایید. محصول را در اولین فرصت پس از باز کردن درب ظرف مصرف نمایید."
                                               },
                                               en:{
                                                product:"Cobalt Octoate Drier",
                                                name:"BD-Ca-5",
                                                pdf:"BD-Ca-5-En.pdf",
                                                Description:"BD-Ca-5 is an important auxiliary drier. It is used in combination with Lead and Cobalt Octoate, mainly in alkyd finishes. BD-Ca-5 used in conjunction with Cobalt driers e.g. BD-Co-10, increases the efficiency of Cobalt drier performance in the paint medium.",
                                                Characteristics:[
                                                  "Auxiliary drier",
                                                  "Through and surface drier for air drying systems"
                          
                                                ],
                                                Uses:[
                                                 "BD-Ca-5 is widely used in air drying systems usually in conjunction with cobalt, lead and or zirconium driers.",
        
                                
                                                ],
                                                Table: [
                                                    {
                                                        propertis:"Appearance",
                                                        unit:"-",
                                                        value:"Violet Liquid",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Metal type",
                                                        unit:"-",
                                                        value:"Cobalt",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Metal content",
                                                        unit:"wt %",
                                                        value:"10±0.2",
                                                        testMethod:"ASTM D2373"
                                                    },
                                                   
                                                    {
                                                        propertis:"Acid type",
                                                        unit:"-",
                                                        value:"Octoic",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Solid content",
                                                        unit:"% wt",
                                                        value:"50-54",
                                                        testMethod:"ASTM D1259"
                                                    },
                                                    {
                                                        propertis:"Color",
                                                        unit:"Gardner",
                                                        value:"-",
                                                        testMethod:"ASTM D1259"
                                                    }
                                                    ,
                                                    {
                                                        propertis:"Viscosity – Krebs (at 20°C)",
                                                        unit:"mPa.s (cP)",
                                                        value:"400-600",
                                                        testMethod:"ASTM D562"
                                                    }
                                                    ,
                                                    {
                                                        propertis:"Density (at 23°C)",
                                                        unit:"g/cm3",
                                                        value:"0.9838",
                                                        testMethod:"ASTM D1475"
                                                    }
        
        
        
        
                                                ],
                                                safety:"The usual protective measures employed during the handling of Driers should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                                                Packaging:"180 kg (net) in steel drum.",
                                                Storage:"Protect from the effects of weathering and store at temperatures below 50°C. Once opened, containers should be released immediately after each removal of product.",
                                                Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
                                               },
                                               ru:{
                                                product:"Сиккатив октоат кобальта",
                                                name:"BD-Ca-5",
                                                pdf:"BD-Ca-5-En.pdf",
                                                Description:"BD-Ca-5 – важный вспомогательный сиккатив. Он используется в комбинации с октоатом кобальта и свинца, в основном в алкидных финишных покрытиях. При использовании BD-Ca-5 вместе с кобальтовыми сиккативыами, например BD-Co-10, повышается эффективность кобальтового сиккатива в краске.",
                                                Characteristics:[
                                                   "Вспомогательный сиккатив",
                                                   "Сиккатив для глубокой и поверхностной воздушной сушки"
                                                ],
                                                Uses:[
                                                   "BD-Ca-5 широко применяется для воздушной сушки в сочетании с кобальтовыми, свинцовыми и циркониевыми сиккативами.",
                                                ],
                                                Table: [
                                                    {
                                                        propertis:"Внешний вид",
                                                        unit:"-",
                                                        value:"Лиловая жидкость",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Тип металла",
                                                        unit:"-",
                                                        value:"Кобальт",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Состав металла",
                                                        unit:"wt %",
                                                        value:"10±0.2",
                                                        testMethod:"ASTM D2373"
                                                    },
                                                   
                                                    {
                                                        propertis:"Тип кислоты",
                                                        unit:"-",
                                                        value:"Октановая",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Сухой остаток",
                                                        unit:"% wt",
                                                        value:"50-54",
                                                        testMethod:"ASTM D1259"
                                                    },
                                                    {
                                                        propertis:"Цвет",
                                                        unit:"Гарднер",
                                                        value:"-",
                                                        testMethod:"ASTM D1259"
                                                    }
                                                    ,
                                                    {
                                                        propertis:"Вязкость – Кребс (при 20°C)",
                                                        unit:"mPa.s (cP)",
                                                        value:"400-600",
                                                        testMethod:"ASTM D562"
                                                    }
                                                    ,
                                                    {
                                                        propertis:"Плотность (при 23°C)",
                                                        unit:"g/cm3",
                                                        value:"0.9838",
                                                        testMethod:"ASTM D1475"
                                                    }
        
        
        
        
                                                ],
                                                safety:"Следует соблюдать стандартные меры безопасности транспортировки сиккативов. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                                                Packaging:"180 кг (нетто) в металлических бочках.",
                                                Storage:"Защищать от воздейсвтия атмосферных условий и хранить при температурах ниже 50°C. После открытия контейнеры следует герметизировать немедленно после каждого забора продукта.",
                                                Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
                                               }
                                        
                                            },
                                            BDPb32 :{
                                                fa:{
                                                 product:"خشک­‌کن اکتوئات سرب",
                                                 name:"BD-Pb-32",
                                                 pdf:"BD-Pb-32-Fa.pdf",
                                                 Description:"BD-Pb-32 خشک­‌کن­ کمکی یا اصطلاحا خشک­‌کن حجمی، مهم­ترین خشک‌­کن کمکی به­‌ویژه جهت خشک کردن در دمای کم، محسوب می­‌شود.",
                                                 Characteristics:[
                                                  "خشک­‌کن حجمی و سطحی در سامانه­‌های هوا­خشک"
                                                 ],
                                                 Uses:[
                                                  "BD-Pb-32 خشک‌­کن کمکی یا اصطلاحا خشک‌کن حجمی، در سامانه­‌های هوا­خشک و عموما به همراه خشک­‌کن های کبالت و کلسیم به کار می‌رود.",
                                                 ],
                                                 Table: [
                                                    {
                                                        propertis:"شکل ظاهری",
                                                        unit:"-",
                                                        value:"مایع، بنفش فام",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"نوع فلز",
                                                        unit:"-",
                                                        value:"کبالت",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"درصد فلز",
                                                        unit:"wt %",
                                                        value:"10±0.2",
                                                        testMethod:"ASTM D2373"
                                                    },
                                                   
                                                    {
                                                        propertis:"نوع اسید",
                                                        unit:"-",
                                                        value:"اکتوئیک",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"درصد جامد",
                                                        unit:"% wt",
                                                        value:"50-54",
                                                        testMethod:"ASTM D1259"
                                                    },
                                                    {
                                                        propertis:"رنگ",
                                                        unit:"Gardner",
                                                        value:"-",
                                                        testMethod:"ASTM D1259"
                                                    }
                                                    ,
                                                    {
                                                        propertis:"گرانروی – کربس  (℃20)",
                                                        unit:"mPa.s (cP)",
                                                        value:"400-600",
                                                        testMethod:"ASTM D562"
                                                    }
                                                    ,
                                                    {
                                                        propertis:"چگالی  (℃23)",
                                                        unit:"g/cm3",
                                                        value:"0.9838",
                                                        testMethod:"ASTM D1475"
                                                    }
        
        
        
        
                                                ],
                                                 safety:"شرایط نگهداری متداول در بکارگیری خشک­‌کن­‌ها رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                                                 Packaging:"250 کیلوگرم (خالص) در بشکه­ های فولادی.",
                                                 Storage:"محصول را در معرض هوازدگی قرار نداده و در در دمای کمتر از ℃50 نگهداری نمایید. محصول را در اولین فرصت پس از باز کردن درب ظرف مصرف نمایید."
                                                },
                                                en:{
                                                 product:"Lead Octoate Drier",
                                                 name:"BD-Pb-32",
                                                 pdf:"BD-Pb-32-En.pdf",
                                                 Description:"BD-Pb-32 is one of the auxiliary driers also called as through drier. BD-Pb-32 is the most important auxiliary drier especially in applications where drying is required at low temperatures.",
                                                 Characteristics:[

                                                   "Through drier for air drying systems"
                           
                                                 ],
                                                 Uses:[
                                                  "BD-Pb-32 is one of the auxiliary driers also called as through drier and widely used in air drying systems usually in conjunction with cobalt and calcium driers",
         
                                 
                                                 ],
                                                 Table: [
                                                    {
                                                        propertis:"Appearance",
                                                        unit:"-",
                                                        value:"Violet Liquid",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Metal type",
                                                        unit:"-",
                                                        value:"Cobalt",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Metal content",
                                                        unit:"wt %",
                                                        value:"10±0.2",
                                                        testMethod:"ASTM D2373"
                                                    },
                                                   
                                                    {
                                                        propertis:"Acid type",
                                                        unit:"-",
                                                        value:"Octoic",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Solid content",
                                                        unit:"% wt",
                                                        value:"50-54",
                                                        testMethod:"ASTM D1259"
                                                    },
                                                    {
                                                        propertis:"Color",
                                                        unit:"Gardner",
                                                        value:"-",
                                                        testMethod:"ASTM D1259"
                                                    }
                                                    ,
                                                    {
                                                        propertis:"Viscosity – Krebs (at 20°C)",
                                                        unit:"mPa.s (cP)",
                                                        value:"400-600",
                                                        testMethod:"ASTM D562"
                                                    }
                                                    ,
                                                    {
                                                        propertis:"Density (at 23°C)",
                                                        unit:"g/cm3",
                                                        value:"0.9838",
                                                        testMethod:"ASTM D1475"
                                                    }
        
        
        
        
                                                ],
                                                 safety:"The usual protective measures employed during the handling of Driers should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                                                 Packaging:"250 kg (net) in steel drum.",
                                                 Storage:"Protect from the effects of weathering and store at temperatures below 50°C. Once opened, containers should be released immediately after each removal of product.",
                                                 Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
                                                },
                                                ru:{
                                                 product:"Сиккатив октоат свинца",
                                                 name:"BD-Pb-32",
                                                 pdf:"BD-Pb-32-En.pdf",
                                                 Description:"BD-Pb-32 – один из вспомогательных сиккативов, также называемый сиккативом, вызывающим равномерное затвердевание. BD-Pb-32 самый важный вспомогательный сиккатив, особенно для применения в тех случаях, когда требуется сушка при низких температурах.",
                                                 Characteristics:[
                                                    
                                                    "Сиккатив, вызывающий равномерное затвердевание, для воздушной сушки"
                                                 ],
                                                 Uses:[
                                                    "BD-Pb-32 один из вспомогательных сиккативов, также называемый сиккативом, вызывающим равномерное затвердевание, ширико применяемый при воздушной сушке, обычно в сочетании с кобальтовым и кальциевым сиккативами.",
                                                 ],
                                                 Table: [
                                                    {
                                                        propertis:"Внешний вид",
                                                        unit:"-",
                                                        value:"Лиловая жидкость",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Тип металла",
                                                        unit:"-",
                                                        value:"Кобальт",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Состав металла",
                                                        unit:"wt %",
                                                        value:"10±0.2",
                                                        testMethod:"ASTM D2373"
                                                    },
                                                   
                                                    {
                                                        propertis:"Тип кислоты",
                                                        unit:"-",
                                                        value:"Октановая",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Сухой остаток",
                                                        unit:"% wt",
                                                        value:"50-54",
                                                        testMethod:"ASTM D1259"
                                                    },
                                                    {
                                                        propertis:"Цвет",
                                                        unit:"Гарднер",
                                                        value:"-",
                                                        testMethod:"ASTM D1259"
                                                    }
                                                    ,
                                                    {
                                                        propertis:"Вязкость – Кребс (при 20°C)",
                                                        unit:"mPa.s (cP)",
                                                        value:"400-600",
                                                        testMethod:"ASTM D562"
                                                    }
                                                    ,
                                                    {
                                                        propertis:"Плотность (при 23°C)",
                                                        unit:"g/cm3",
                                                        value:"0.9838",
                                                        testMethod:"ASTM D1475"
                                                    }
        
        
        
        
                                                ],
                                                 safety:"Следует соблюдать стандартные меры безопасности транспортировки сиккативов. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                                                 Packaging:"250 кг (нетто) в металлических бочках",
                                                 Storage:"Защищать от воздейсвтия атмосферных условий и хранить при температурах ниже 50°C. После открытия контейнеры следует герметизировать немедленно после каждого забора продукта.",
                                                 Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
                                                }
                                         
                                             },
                                             BDZr18 :{
                                                 fa:{
                                                  product:"خشک­‌کن اکتوئات زیرکونیم",
                                                  name:"BD-Zr-18",
                                                  pdf:"BD-Zr-18-Fa.pdf",
                                                  Description:"BD-Zr-18، خشک‌­کن­ کمکی بسیار کارامدی است که عموما در ساخت رنگ به همراه خشک­‌کن کبالت و سایر خشک­‌کن‌­های کمکی و با هدف بهبود چشمگیر کارکرد رنگ­‌ها و جلاها مورد استفاده قرار می­‌گیرد. BD-Zr-18 بدلیل ویژگی پایدارسازی پیوندهای استری، کارامدترین خشک­‌کن در ساخت رنگ‌­های مقاوم در برابر آب محسوب می‌­شود.",
                                                  Characteristics:[
                                                   "خشک­‌کن حجمی",
                                                   "خشک­‌کن عمقی در سامانه­‌های هواخشک",
                                                   "کاهش تمایل به زردشوندگی فیلم­‌های سفیدپوش",
                                                   "حفظ سفید­رنگی از طریق محافظت فیلم در برابر تاثیرات هوازدگی"
                                                  ],
                                                  Uses:[
                                                   "رنگ، جلا و پوشش‌­های فلزی هوا­خشک",
                                                  ],
                                                  Table: [
                                                    {
                                                        propertis:"شکل ظاهری",
                                                        unit:"-",
                                                        value:"مایع، بنفش فام",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"نوع فلز",
                                                        unit:"-",
                                                        value:"کبالت",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"درصد فلز",
                                                        unit:"wt %",
                                                        value:"10±0.2",
                                                        testMethod:"ASTM D2373"
                                                    },
                                                   
                                                    {
                                                        propertis:"نوع اسید",
                                                        unit:"-",
                                                        value:"اکتوئیک",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"درصد جامد",
                                                        unit:"% wt",
                                                        value:"50-54",
                                                        testMethod:"ASTM D1259"
                                                    },
                                                    {
                                                        propertis:"رنگ",
                                                        unit:"Gardner",
                                                        value:"-",
                                                        testMethod:"ASTM D1259"
                                                    }
                                                    ,
                                                    {
                                                        propertis:"گرانروی – کربس  (℃20)",
                                                        unit:"mPa.s (cP)",
                                                        value:"400-600",
                                                        testMethod:"ASTM D562"
                                                    }
                                                    ,
                                                    {
                                                        propertis:"چگالی  (℃23)",
                                                        unit:"g/cm3",
                                                        value:"0.9838",
                                                        testMethod:"ASTM D1475"
                                                    }
        
        
        
        
                                                ],
                                                  safety:"شرایط نگهداری متداول در بکارگیری خشک­‌کن­‌ها رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                                                  Packaging:" 200 کیلوگرم (خالص) در بشکه­‌های فولادی.",
                                                  Storage:"محصول را در معرض هوازدگی قرار نداده و در در دمای کمتر از ℃50 نگهداری نمایید. محصول را در اولین فرصت پس از باز کردن درب ظرف مصرف نمایید."
                                                 },
                                                 en:{
                                                  product:"Lead Octoate Drier",
                                                  name:"BD-Pb-32",
                                                  pdf:"BD-Zr-18-En.pdf",
                                                  Description:"BD-Pb-32 is one of the auxiliary driers also called as through drier. BD-Pb-32 is the most important auxiliary drier especially in applications where drying is required at low temperatures.",
                                                  Characteristics:[
 
                                                    "Through drier for air drying systems"
                            
                                                  ],
                                                  Uses:[
                                                   "BD-Pb-32 is one of the auxiliary driers also called as through drier and widely used in air drying systems usually in conjunction with cobalt and calcium driers",
          
                                  
                                                  ],
                                                  Table: [
                                                    {
                                                        propertis:"Appearance",
                                                        unit:"-",
                                                        value:"Violet Liquid",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Metal type",
                                                        unit:"-",
                                                        value:"Cobalt",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Metal content",
                                                        unit:"wt %",
                                                        value:"10±0.2",
                                                        testMethod:"ASTM D2373"
                                                    },
                                                   
                                                    {
                                                        propertis:"Acid type",
                                                        unit:"-",
                                                        value:"Octoic",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Solid content",
                                                        unit:"% wt",
                                                        value:"50-54",
                                                        testMethod:"ASTM D1259"
                                                    },
                                                    {
                                                        propertis:"Color",
                                                        unit:"Gardner",
                                                        value:"-",
                                                        testMethod:"ASTM D1259"
                                                    }
                                                    ,
                                                    {
                                                        propertis:"Viscosity – Krebs (at 20°C)",
                                                        unit:"mPa.s (cP)",
                                                        value:"400-600",
                                                        testMethod:"ASTM D562"
                                                    }
                                                    ,
                                                    {
                                                        propertis:"Density (at 23°C)",
                                                        unit:"g/cm3",
                                                        value:"0.9838",
                                                        testMethod:"ASTM D1475"
                                                    }
        
        
        
        
                                                ],
                                                  safety:"The usual protective measures employed during the handling of Driers should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                                                  Packaging:"250 kg (net) in steel drum.",
                                                  Storage:"Protect from the effects of weathering and store at temperatures below 50°C. Once opened, containers should be released immediately after each removal of product.",
                                                  Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
                                                 },
                                                 ru:{
                                                  product:"Сиккатив октоат циркония",
                                                  name:"BD-Zr-18",
                                                  pdf:"BD-Zr-18-En.pdf",
                                                  Description:"BD-Zr-18 – очень эффекивный вспомогательный сиккатив, широко используемый в красках с кобальтовым и другими вспомогательными сиккативами для значительного улучшения свойств лакокрасочных материалов. BD-Zr-18 самый подходящий сиккатив для водостойких финишных покрытий благодаря своему стабилизирующему действию на сложные эфирные связи в этой среде.",
                                                  Characteristics:[
                                                     "Сиккатив, вызывающий равномерное затвердевание",
                                                     "Сиккатив для  глубокой воздушной сушки",
                                                     "Снижение пожелтения белой пленки",
                                                     "Сохранение белизны благодаря защите покрытия от воздействия погодных условий"
                                                  ],
                                                  Uses:[
                                                     "Лакокрасочные покрытия воздушной сушки, пигментированные металлической пудрой",
                                                  ],
                                                  Table: [
                                                    {
                                                        propertis:"Внешний вид",
                                                        unit:"-",
                                                        value:"Лиловая жидкость",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Тип металла",
                                                        unit:"-",
                                                        value:"Кобальт",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Состав металла",
                                                        unit:"wt %",
                                                        value:"10±0.2",
                                                        testMethod:"ASTM D2373"
                                                    },
                                                   
                                                    {
                                                        propertis:"Тип кислоты",
                                                        unit:"-",
                                                        value:"Октановая",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Сухой остаток",
                                                        unit:"% wt",
                                                        value:"50-54",
                                                        testMethod:"ASTM D1259"
                                                    },
                                                    {
                                                        propertis:"Цвет",
                                                        unit:"Гарднер",
                                                        value:"-",
                                                        testMethod:"ASTM D1259"
                                                    }
                                                    ,
                                                    {
                                                        propertis:"Вязкость – Кребс (при 20°C)",
                                                        unit:"mPa.s (cP)",
                                                        value:"400-600",
                                                        testMethod:"ASTM D562"
                                                    }
                                                    ,
                                                    {
                                                        propertis:"Плотность (при 23°C)",
                                                        unit:"g/cm3",
                                                        value:"0.9838",
                                                        testMethod:"ASTM D1475"
                                                    }
        
        
        
        
                                                ],
                                                  safety:"Следует соблюдать стандартные меры безопасности транспортировки сиккативов. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                                                  Packaging:"200 кг (нетто) в металлических бочках",
                                                  Storage:"Защищать от воздейсвтия атмосферных условий и хранить при температурах ниже 50°C. После открытия контейнеры следует герметизировать немедленно после каждого забора продукта.",
                                                  Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
                                                 }
                                          
                                              }
                                              ,
                                              BEP4503 :{
                                                 fa:{
                                                  product:"رزین اپوکسی",
                                                  name:"BEP4503",
                                                  pdf:"Epoxy resin.pdf",
                                                  Description:"رزین اپوکسی است که از واکنش بیس فنل A و اپی کلروهیدرین با گرید صنعتی تولید می شود. کاربرد اصلی آن در تولید پوشش های پودری صنعتی است.",
                                                  Characteristics:[
                                                   "",
                                                   
                                                  ],
                                                  Uses:[
                                                   "کاربرد اصلی آن در تولید پوشش های پودری صنعتی است.",
                                                  ],
                                                  Table: [
                                                    {
                                                        propertis:"نوع",
                                                        unit:"-",
                                                        value:"3",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"EEW(gr/eq)",
                                                        unit:"-",
                                                        value:"700-800",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"رنگ",
                                                        unit:"-",
                                                        value:"<3",
                                                        testMethod:"-"
                                                    },
                                                   
                                                    {
                                                        propertis:"ویسکوزیته CP",
                                                        unit:"-",
                                                        value:"5000±1000",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"وضعیت ظاهری",
                                                        unit:"-",
                                                        value:"جامد",
                                                        testMethod:"-"
                                                    }
        
        
        
        
                                                ],
                                                  safety:"شرایط نگهداری متداول در بکارگیری خشک­‌کن­‌ها رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                                                  Packaging:" 200 کیلوگرم (خالص) در بشکه­‌های فولادی.",
                                                  Storage:"محصول را در معرض هوازدگی قرار نداده و در در دمای کمتر از ℃50 نگهداری نمایید. محصول را در اولین فرصت پس از باز کردن درب ظرف مصرف نمایید."
                                                 },
                                                 en:{
                                                  product:"Epoxy Resin",
                                                  name:"BEP4503",
                                                  pdf:"Epoxy resin.pdf",
                                                  Description:"It is an epoxy resin that is produced from the reaction of bisphenol A and industrial grade epichlorohydrin. Its main application is in the production of industrial powder coatings.",
                                                  Characteristics:[
 
                                                    ""
                            
                                                  ],
                                                  Uses:[
                                                   "Its main application is in the production of industrial powder coatings.",
          
                                  
                                                  ],
                                                  Table: [
                                                    {
                                                        propertis:"Type",
                                                        unit:"-",
                                                        value:"3",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"EEW(gr/eq)",
                                                        unit:"-",
                                                        value:"700-800",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Color(Gardner)",
                                                        unit:"-",
                                                        value:"Max 3",
                                                        testMethod:"-"
                                                    },
                                                   
                                                    {
                                                        propertis:"Viscosity(CP)",
                                                        unit:"-",
                                                        value:"5000±1000",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Appearance",
                                                        unit:"-",
                                                        value:"solid",
                                                        testMethod:"-"
                                                    }
        
        
        
                                                ],
                                                  safety:"The usual protective measures employed during the handling of Driers should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                                                  Packaging:"250 kg (net) in steel drum.",
                                                  Storage:"Protect from the effects of weathering and store at temperatures below 50°C. Once opened, containers should be released immediately after each removal of product.",
                                                  Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
                                                 },
                                                 ru:{
                                                  product:"Эпоксидная смола",
                                                  name:"BEP4503",
                                                  pdf:"Epoxy resin.pdf",
                                                  Description:"Это эпоксидная смола, получаемая в результате реакции бисфенола А и эпихлоргидрина промышленного качества. Его основное применение – производство промышленных порошковых покрытий.",
                                                  Characteristics:[
                                                     ""
                                                  ],
                                                  Uses:[
                                                     "Его основное применение – производство промышленных порошковых покрытий",
                                                  ],
                                                  Table: [
                                                    {
                                                        propertis:"Тип",
                                                        unit:"-",
                                                        value:"3",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"ЭЭВ(г/экв)",
                                                        unit:"-",
                                                        value:"700-800",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Цвет (Гарднер)",
                                                        unit:"-",
                                                        value:"Max 3",
                                                        testMethod:"-"
                                                    },
                                                   
                                                    {
                                                        propertis:"Вязкость (CP)",
                                                        unit:"-",
                                                        value:"5000±1000",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Появление",
                                                        unit:"-",
                                                        value:"твердый",
                                                        testMethod:"-"
                                                    }
        
        
        
                                                ],
                                                 
                                                  safety:"Следует соблюдать стандартные меры безопасности транспортировки сиккативов. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                                                  Packaging:"200 кг (нетто) в металлических бочках",
                                                  Storage:"Защищать от воздейсвтия атмосферных условий и хранить при температурах ниже 50°C. После открытия контейнеры следует герметизировать немедленно после каждого забора продукта.",
                                                  Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
                                                 }
                                          
                                              },
                                              BEP4604 :{
                                                 fa:{
                                                  product:"رزین اپوکسی",
                                                  name:"BEP4604",
                                                  pdf:"Epoxy resin.pdf",
                                                  Description:"رزین اپوکسی است که از واکنش بیس فنل A و اپی کلروهیدرین با گرید صنعتی تولید می شود. کاربرد اصلی آن در تولید پوشش های پودری صنعتی است.",
                                                  Characteristics:[
                                                   "",
                                                   
                                                  ],
                                                  Uses:[
                                                   "کاربرد اصلی آن در تولید پوشش های پودری صنعتی است.",
                                                   "پوشش های ضد خوردگی رتگ های حلال پایه",
                                                   "رزین اپوکسی استر هوا خشک",
                                                   "پوشش های قوطی و کویل",
                                                   "چاپ تابلوهای سیم کشی",
                                                   "پودر های قالب گیری"
                                                  ],
                                                  Table: [
                                                    {
                                                        propertis:"نوع",
                                                        unit:"-",
                                                        value:"4",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"EEW(gr/eq)",
                                                        unit:"-",
                                                        value:"900-1000",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"رنگ",
                                                        unit:"-",
                                                        value:"<3",
                                                        testMethod:"-"
                                                    },
                                                   
                                                    {
                                                        propertis:"ویسکوزیته CP",
                                                        unit:"-",
                                                        value:"5500±1000",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"وضعیت ظاهری",
                                                        unit:"-",
                                                        value:"جامد",
                                                        testMethod:"-"
                                                    }
        
        
        
        
                                                ],
                                                   
                                                  safety:"شرایط نگهداری متداول در بکارگیری خشک­‌کن­‌ها رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                                                  Packaging:" 200 کیلوگرم (خالص) در بشکه­‌های فولادی.",
                                                  Storage:"محصول را در معرض هوازدگی قرار نداده و در در دمای کمتر از ℃50 نگهداری نمایید. محصول را در اولین فرصت پس از باز کردن درب ظرف مصرف نمایید."
                                                 },
                                                 en:{
                                                  product:"Epoxy Resin",
                                                  name:"BEP4604",
                                                  pdf:"Epoxy resin.pdf",
                                                  Description:"It is an epoxy resin that is produced from the reaction of bisphenol A and industrial grade epichlorohydrin. Its main application is in the production of industrial powder coatings.",
                                                  Characteristics:[
 
                                                    ""
                            
                                                  ],
                                                  Uses:[
                                                   "Its main application is in the production of industrial powder coatings.",
                                                   "Solvent-based anti-corrosion coatings",
                                                   "Air dry epoxy ester resin",
                                                   "Can and Coil Covers",
                                                   "Print wiring boards" ,
                                                   "Moulding powders"

          
                                  
                                                  ],
                                                  Table: [
                                                    {
                                                        propertis:"Type",
                                                        unit:"-",
                                                        value:"4",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"EEW(gr/eq)",
                                                        unit:"-",
                                                        value:"900-1000",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Color(Gardner)",
                                                        unit:"-",
                                                        value:"Max 3",
                                                        testMethod:"-"
                                                    },
                                                   
                                                    {
                                                        propertis:"Viscosity(CP)",
                                                        unit:"-",
                                                        value:"5500±1000",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Appearance",
                                                        unit:"-",
                                                        value:"solid",
                                                        testMethod:"-"
                                                    }
        
        
        
                                                ],
                                                   
                                                   
                                                  safety:"The usual protective measures employed during the handling of Driers should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                                                  Packaging:"250 kg (net) in steel drum.",
                                                  Storage:"Protect from the effects of weathering and store at temperatures below 50°C. Once opened, containers should be released immediately after each removal of product.",
                                                  Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
                                                 },
                                                 ru:{
                                                  product:"Эпоксидная смола",
                                                  name:"BEP4604",
                                                  pdf:"Epoxy resin.pdf",
                                                  Description:"Это эпоксидная смола, получаемая в результате реакции бисфенола А и эпихлоргидрина промышленного качества. Его основное применение – производство промышленных порошковых покрытий.",
                                                  Characteristics:[
                                                     ""
                                                  ],
                                                  Uses:[
                                                    "Его основное применение – производство промышленных порошковых покрытий.",
                                                   "Антикоррозионные покрытия на основе растворителей",
                                                   "Воздушно-сухая эпоксидно-эфирная смола",
                                                   "Крышки банок и катушек" ,
                                                   "Печать монтажных плат" ,
                                                   "Формовочные порошки"
                                                  ],
                                                  Table: [
                                                    {
                                                        propertis:"Тип",
                                                        unit:"-",
                                                        value:"4",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"ЭЭВ(г/экв)",
                                                        unit:"-",
                                                        value:"900-1000",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Цвет (Гарднер)",
                                                        unit:"-",
                                                        value:"Max 3",
                                                        testMethod:"-"
                                                    },
                                                   
                                                    {
                                                        propertis:"Вязкость (CP)",
                                                        unit:"-",
                                                        value:"5500±1000",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Появление",
                                                        unit:"-",
                                                        value:"твердый",
                                                        testMethod:"-"
                                                    }
        
        
        
                                                ],
                                              
                                                  safety:"Следует соблюдать стандартные меры безопасности транспортировки сиккативов. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                                                  Packaging:"200 кг (нетто) в металлических бочках",
                                                  Storage:"Защищать от воздейсвтия атмосферных условий и хранить при температурах ниже 50°C. После открытия контейнеры следует герметизировать немедленно после каждого забора продукта.",
                                                  Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
                                                 }
                                          
                                              },
                                              BEP4701 :{
                                                 fa:{
                                                  product:"رزین اپوکسی",
                                                  name:"BEP4701",
                                                  pdf:"Epoxy resin.pdf",
                                                  Description:"یک نوع رزین اپوکسی حلال پایه برای پوشش های دو جزیی است که با پلی آمین یا پلی آمید در دمای اتاق و در حالت سریع خشک پخته می شود.",
                                                  Characteristics:[
                                                   "",
                                                   
                                                  ],
                                                  Uses:[
                                                   "حفاظت از فلز و بتن",
                                                   "اصلاح رنگ های برپایه رزین های اکریلیک و یا الکید ملامین"
                                                  ],
                                                  Table: [
                                                    {
                                                        propertis:"نوع",
                                                        unit:"-",
                                                        value:"1",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"EEW(gr/eq)",
                                                        unit:"-",
                                                        value:"400-500",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"رنگ",
                                                        unit:"-",
                                                        value:"<3",
                                                        testMethod:"-"
                                                    },
                                                   
                                                    {
                                                        propertis:"ویسکوزیته CP",
                                                        unit:"-",
                                                        value:"6500±500",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"وضعیت ظاهری",
                                                        unit:"-",
                                                        value:"مایع 75% زایلین",
                                                        testMethod:"-"
                                                    }
        
        
        
        
                                                ],
                                                  safety:"شرایط نگهداری متداول در بکارگیری خشک­‌کن­‌ها رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                                                  Packaging:" 200 کیلوگرم (خالص) در بشکه­‌های فولادی.",
                                                  Storage:"محصول را در معرض هوازدگی قرار نداده و در در دمای کمتر از ℃50 نگهداری نمایید. محصول را در اولین فرصت پس از باز کردن درب ظرف مصرف نمایید."
                                                 },
                                                 en:{
                                                  product:"Epoxy Resin",
                                                  name:"BEP4701",
                                                  pdf:"Epoxy resin.pdf",
                                                  Description:"A solvent-based epoxy resin for two-component coatings that cures with polyamine or polyamide at room temperature and in a quick dry state.",
                                                  Characteristics:[
 
                                                    ""
                            
                                                  ],
                                                  Uses:[
                                                    "Protection of metal and concrete",
                                                    "Modification of paints based on acrylic resins or melamine alkyd"

          
                                  
                                                  ],
                                                  Table: [
                                                    {
                                                        propertis:"Type",
                                                        unit:"-",
                                                        value:"1",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"EEW(gr/eq)",
                                                        unit:"-",
                                                        value:"400-500",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Color(Gardner)",
                                                        unit:"-",
                                                        value:"Max 3",
                                                        testMethod:"-"
                                                    },
                                                   
                                                    {
                                                        propertis:"Viscosity(CP)",
                                                        unit:"-",
                                                        value:"6500±500",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Appearance",
                                                        unit:"-",
                                                        value:"Liquid 75% X",
                                                        testMethod:"-"
                                                    }
        
        
        
                                                ],
                                                  safety:"The usual protective measures employed during the handling of Driers should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                                                  Packaging:"250 kg (net) in steel drum.",
                                                  Storage:"Protect from the effects of weathering and store at temperatures below 50°C. Once opened, containers should be released immediately after each removal of product.",
                                                  Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
                                                 },
                                                 ru:{
                                                  product:"Эпоксидная смола",
                                                  name:"BEP4701",
                                                  pdf:"Epoxy resin.pdf",
                                                  Description:"Эпоксидная смола на основе растворителя для двухкомпонентных покрытий, отверждающаяся полиамином или полиамидом при комнатной температуре и в быстросохнущем состоянии.",
                                                  Characteristics:[
                                                     ""
                                                  ],
                                                  Uses:[
                                                    "Защита металла и бетона",
                                                   "Модификация красок на основе акриловых смол или меламин-алкидных"
                                                  ],
                                                  Table: [
                                                    {
                                                        propertis:"Тип",
                                                        unit:"-",
                                                        value:"1",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"ЭЭВ(г/экв)",
                                                        unit:"-",
                                                        value:"400-500",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Цвет (Гарднер)",
                                                        unit:"-",
                                                        value:"Max 3",
                                                        testMethod:"-"
                                                    },
                                                   
                                                    {
                                                        propertis:"Вязкость (CP)",
                                                        unit:"-",
                                                        value:"6500±500",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Появление",
                                                        unit:"-",
                                                        value:"Liquid 75% X",
                                                        testMethod:"-"
                                                    }
        
        
        
                                                ],
                                                  safety:"Следует соблюдать стандартные меры безопасности транспортировки сиккативов. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                                                  Packaging:"200 кг (нетто) в металлических бочках",
                                                  Storage:"Защищать от воздейсвтия атмосферных условий и хранить при температурах ниже 50°C. После открытия контейнеры следует герметизировать немедленно после каждого забора продукта.",
                                                  Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
                                                 }
                                          
                                              },
                                              BEP4757 :{
                                                 fa:{
                                                  product:"رزین اپوکسی",
                                                  name:"BEP4757",
                                                  pdf:"Epoxy resin.pdf",
                                                  Description:"رزین اپوکسی است که از واکنش بیس فنل A و اپی کلروهیدرین با گرید صنعتی تولید می شود.",
                                                  Characteristics:[
                                                   "",
                                                   
                                                  ],
                                                  Uses:[
                                                    "پوشش های قوطی"
                                                  ],
                                                  Table: [
                                                    {
                                                        propertis:"شکل ظاهری",
                                                        unit:"-",
                                                        value:"مایع، بنفش فام",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"نوع فلز",
                                                        unit:"-",
                                                        value:"کبالت",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"درصد فلز",
                                                        unit:"wt %",
                                                        value:"10±0.2",
                                                        testMethod:"ASTM D2373"
                                                    },
                                                   
                                                    {
                                                        propertis:"نوع اسید",
                                                        unit:"-",
                                                        value:"اکتوئیک",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"درصد جامد",
                                                        unit:"% wt",
                                                        value:"50-54",
                                                        testMethod:"ASTM D1259"
                                                    },
                                                    {
                                                        propertis:"رنگ",
                                                        unit:"Gardner",
                                                        value:"-",
                                                        testMethod:"ASTM D1259"
                                                    }
                                                    ,
                                                    {
                                                        propertis:"گرانروی – کربس  (℃20)",
                                                        unit:"mPa.s (cP)",
                                                        value:"400-600",
                                                        testMethod:"ASTM D562"
                                                    }
                                                    ,
                                                    {
                                                        propertis:"چگالی  (℃23)",
                                                        unit:"g/cm3",
                                                        value:"0.9838",
                                                        testMethod:"ASTM D1475"
                                                    }
        
        
        
        
                                                ],
                                                  safety:"شرایط نگهداری متداول در بکارگیری خشک­‌کن­‌ها رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                                                  Packaging:" 200 کیلوگرم (خالص) در بشکه­‌های فولادی.",
                                                  Storage:"محصول را در معرض هوازدگی قرار نداده و در در دمای کمتر از ℃50 نگهداری نمایید. محصول را در اولین فرصت پس از باز کردن درب ظرف مصرف نمایید."
                                                 },
                                                 en:{
                                                  product:"Epoxy Resin",
                                                  name:"BEP4757",
                                                  pdf:"Epoxy resin.pdf",
                                                  Description:"It is an epoxy resin that is produced from the reaction of bisphenol A and industrial grade epichlorohydrin.",
                                                  Characteristics:[
 
                                                    ""
                            
                                                  ],
                                                  Uses:[
                                                    "can covers"

          
                                  
                                                  ],
                                                  Table: [
                                                    {
                                                        propertis:"Appearance",
                                                        unit:"-",
                                                        value:"Violet Liquid",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Metal type",
                                                        unit:"-",
                                                        value:"Cobalt",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Metal content",
                                                        unit:"wt %",
                                                        value:"10±0.2",
                                                        testMethod:"ASTM D2373"
                                                    },
                                                   
                                                    {
                                                        propertis:"Acid type",
                                                        unit:"-",
                                                        value:"Octoic",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Solid content",
                                                        unit:"% wt",
                                                        value:"50-54",
                                                        testMethod:"ASTM D1259"
                                                    },
                                                    {
                                                        propertis:"Color",
                                                        unit:"Gardner",
                                                        value:"-",
                                                        testMethod:"ASTM D1259"
                                                    }
                                                    ,
                                                    {
                                                        propertis:"Viscosity – Krebs (at 20°C)",
                                                        unit:"mPa.s (cP)",
                                                        value:"400-600",
                                                        testMethod:"ASTM D562"
                                                    }
                                                    ,
                                                    {
                                                        propertis:"Density (at 23°C)",
                                                        unit:"g/cm3",
                                                        value:"0.9838",
                                                        testMethod:"ASTM D1475"
                                                    }
        
        
        
        
                                                ],
                                                  safety:"The usual protective measures employed during the handling of Driers should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                                                  Packaging:"250 kg (net) in steel drum.",
                                                  Storage:"Protect from the effects of weathering and store at temperatures below 50°C. Once opened, containers should be released immediately after each removal of product.",
                                                  Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
                                                 },
                                                 ru:{
                                                  product:"Эпоксидная смола",
                                                  name:"BEP4757",
                                                  pdf:"Epoxy resin.pdf",
                                                  Description:"Это эпоксидная смола, получаемая в результате реакции бисфенола А и эпихлоргидрина промышленного качества.",
                                                  Characteristics:[
                                                     ""
                                                  ],
                                                  Uses:[
                                                    "банковские чехлы"
                                                  ],
                                                  Table: [
                                                    {
                                                        propertis:"Внешний вид",
                                                        unit:"-",
                                                        value:"Лиловая жидкость",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Тип металла",
                                                        unit:"-",
                                                        value:"Кобальт",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Состав металла",
                                                        unit:"wt %",
                                                        value:"10±0.2",
                                                        testMethod:"ASTM D2373"
                                                    },
                                                   
                                                    {
                                                        propertis:"Тип кислоты",
                                                        unit:"-",
                                                        value:"Октановая",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Сухой остаток",
                                                        unit:"% wt",
                                                        value:"50-54",
                                                        testMethod:"ASTM D1259"
                                                    },
                                                    {
                                                        propertis:"Цвет",
                                                        unit:"Гарднер",
                                                        value:"-",
                                                        testMethod:"ASTM D1259"
                                                    }
                                                    ,
                                                    {
                                                        propertis:"Вязкость – Кребс (при 20°C)",
                                                        unit:"mPa.s (cP)",
                                                        value:"400-600",
                                                        testMethod:"ASTM D562"
                                                    }
                                                    ,
                                                    {
                                                        propertis:"Плотность (при 23°C)",
                                                        unit:"g/cm3",
                                                        value:"0.9838",
                                                        testMethod:"ASTM D1475"
                                                    }
        
        
        
        
                                                ],
                                                  safety:"Следует соблюдать стандартные меры безопасности транспортировки сиккативов. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                                                  Packaging:"200 кг (нетто) в металлических бочках",
                                                  Storage:"Защищать от воздейсвтия атмосферных условий и хранить при температурах ниже 50°C. После открытия контейнеры следует герметизировать немедленно после каждого забора продукта.",
                                                  Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
                                                 }
                                          
                                              },
                                              BEP4809 :{
                                                 fa:{
                                                  product:"رزین اپوکسی",
                                                  name:"BEP4809",
                                                  pdf:"Epoxy resin.pdf",
                                                  Description:"رزین اپوکسی است که از واکنش بیس فنل A و اپی کلروهیدرین با گرید صنعتی تولید می شود.",
                                                  Characteristics:[
                                                   "",
                                                   
                                                  ],
                                                  Uses:[
                                                    "پوشش های قوطی"
                                                  ],
                                                  Table: [
                                                    {
                                                        propertis:"شکل ظاهری",
                                                        unit:"-",
                                                        value:"مایع، بنفش فام",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"نوع فلز",
                                                        unit:"-",
                                                        value:"کبالت",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"درصد فلز",
                                                        unit:"wt %",
                                                        value:"10±0.2",
                                                        testMethod:"ASTM D2373"
                                                    },
                                                   
                                                    {
                                                        propertis:"نوع اسید",
                                                        unit:"-",
                                                        value:"اکتوئیک",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"درصد جامد",
                                                        unit:"% wt",
                                                        value:"50-54",
                                                        testMethod:"ASTM D1259"
                                                    },
                                                    {
                                                        propertis:"رنگ",
                                                        unit:"Gardner",
                                                        value:"-",
                                                        testMethod:"ASTM D1259"
                                                    }
                                                    ,
                                                    {
                                                        propertis:"گرانروی – کربس  (℃20)",
                                                        unit:"mPa.s (cP)",
                                                        value:"400-600",
                                                        testMethod:"ASTM D562"
                                                    }
                                                    ,
                                                    {
                                                        propertis:"چگالی  (℃23)",
                                                        unit:"g/cm3",
                                                        value:"0.9838",
                                                        testMethod:"ASTM D1475"
                                                    }
        
        
        
        
                                                ],
                                                  safety:"شرایط نگهداری متداول در بکارگیری خشک­‌کن­‌ها رعایت گردد. در صورت نیاز، اطلاعات ایمنی محصول در داده برگ ایمنی در دسترس است.",
                                                  Packaging:" 200 کیلوگرم (خالص) در بشکه­‌های فولادی.",
                                                  Storage:"محصول را در معرض هوازدگی قرار نداده و در در دمای کمتر از ℃50 نگهداری نمایید. محصول را در اولین فرصت پس از باز کردن درب ظرف مصرف نمایید."
                                                 },
                                                 en:{
                                                  product:"Epoxy Resin",
                                                  name:"BEP4809",
                                                  pdf:"Epoxy resin.pdf",
                                                  Description:"It is an epoxy resin that is produced from the reaction of bisphenol A and industrial grade epichlorohydrin.",
                                                  Characteristics:[
 
                                                    ""
                            
                                                  ],
                                                  Uses:[
                                                    "can covers"

          
                                  
                                                  ],
                                                  Table: [
                                                    {
                                                        propertis:"Appearance",
                                                        unit:"-",
                                                        value:"Violet Liquid",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Metal type",
                                                        unit:"-",
                                                        value:"Cobalt",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Metal content",
                                                        unit:"wt %",
                                                        value:"10±0.2",
                                                        testMethod:"ASTM D2373"
                                                    },
                                                   
                                                    {
                                                        propertis:"Acid type",
                                                        unit:"-",
                                                        value:"Octoic",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Solid content",
                                                        unit:"% wt",
                                                        value:"50-54",
                                                        testMethod:"ASTM D1259"
                                                    },
                                                    {
                                                        propertis:"Color",
                                                        unit:"Gardner",
                                                        value:"-",
                                                        testMethod:"ASTM D1259"
                                                    }
                                                    ,
                                                    {
                                                        propertis:"Viscosity – Krebs (at 20°C)",
                                                        unit:"mPa.s (cP)",
                                                        value:"400-600",
                                                        testMethod:"ASTM D562"
                                                    }
                                                    ,
                                                    {
                                                        propertis:"Density (at 23°C)",
                                                        unit:"g/cm3",
                                                        value:"0.9838",
                                                        testMethod:"ASTM D1475"
                                                    }
        
        
        
        
                                                ],
                                                  safety:"The usual protective measures employed during the handling of Driers should be observed. Further product safety information can be obtained from our Material Safety Data Sheet which is available on request.",
                                                  Packaging:"250 kg (net) in steel drum.",
                                                  Storage:"Protect from the effects of weathering and store at temperatures below 50°C. Once opened, containers should be released immediately after each removal of product.",
                                                  Disclaimer:"The information and in particular the recommendations relating to the application and use of Bonyan Kala Chemie products are given in good faith based on our current knowledge and expertise of the products when properly stored, handled and used under normal conditions within their shelf life. In practice, the differences in materials, chemistries and actual site conditions are such that no warranty in respect of merchantability or of fitness for a particular purpose, nor any liability arising out of any legal relationship whatsoever, can be inferred either from this information, or from any recommendations, or from any other advice offered. The proprietary rights of third parties must be observed. All orders are accepted subject to our current terms of sale and delivery. Users should always refer to the most recent issue of the Technical Data Sheet for the product concerned, copies of which will be supplied on request or can be accessed from www.bonyankala.com."
                                                 },
                                                 ru:{
                                                  product:"Эпоксидная смола",
                                                  name:"BEP4809",
                                                  pdf:"Epoxy resin.pdf",
                                                  Description:"Это эпоксидная смола, получаемая в результате реакции бисфенола А и эпихлоргидрина промышленного качества.",
                                                  Characteristics:[
                                                     ""
                                                  ],
                                                  Uses:[
                                                    "банковские чехлы"
                                                  ],
                                                  Table: [
                                                    {
                                                        propertis:"Внешний вид",
                                                        unit:"-",
                                                        value:"Лиловая жидкость",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Тип металла",
                                                        unit:"-",
                                                        value:"Кобальт",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Состав металла",
                                                        unit:"wt %",
                                                        value:"10±0.2",
                                                        testMethod:"ASTM D2373"
                                                    },
                                                   
                                                    {
                                                        propertis:"Тип кислоты",
                                                        unit:"-",
                                                        value:"Октановая",
                                                        testMethod:"-"
                                                    },
                                                    {
                                                        propertis:"Сухой остаток",
                                                        unit:"% wt",
                                                        value:"50-54",
                                                        testMethod:"ASTM D1259"
                                                    },
                                                    {
                                                        propertis:"Цвет",
                                                        unit:"Гарднер",
                                                        value:"-",
                                                        testMethod:"ASTM D1259"
                                                    }
                                                    ,
                                                    {
                                                        propertis:"Вязкость – Кребс (при 20°C)",
                                                        unit:"mPa.s (cP)",
                                                        value:"400-600",
                                                        testMethod:"ASTM D562"
                                                    }
                                                    ,
                                                    {
                                                        propertis:"Плотность (при 23°C)",
                                                        unit:"g/cm3",
                                                        value:"0.9838",
                                                        testMethod:"ASTM D1475"
                                                    }
        
        
        
        
                                                ],
                                                  safety:"Следует соблюдать стандартные меры безопасности транспортировки сиккативов. Более подробную информацию по безопасности продукта можно узнать из паспорта безопасности материала, который предоставляется по запросу.",
                                                  Packaging:"200 кг (нетто) в металлических бочках",
                                                  Storage:"Защищать от воздейсвтия атмосферных условий и хранить при температурах ниже 50°C. После открытия контейнеры следует герметизировать немедленно после каждого забора продукта.",
                                                  Disclaimer:"Информация и в особенности рекомендации по применению и использованию продукции Bonyan Kala Chemie предоставлены добросоветстно и с честными намерениями на основании имеющихся на данный момент квалификации и знаний о продуктах при условии их надлежащего хранения, транспортировки и использования в нормальных условиях в течение срока годности. На практике различия материалов, химических составов и фактических местных условия таковы, что при любых правоотношениях из данной информации или рекомендаций или какой-либо консультации не проистекает никаких гарантий или обязательств относительно товарной пригодности или соответствия определенным целям. Необходимо соблюдать права собственности, авторские и патентные права третьих лиц. Все заказы принимаются в соответствии с нашими текущими сроками и условиями поставки. Пользователям следует всегда сверяться с последней версией Спецификаций продукта, которые могут быть предоставлены по запросу и доступны на сайте www.bonyankala.com."
                                                 }
                                          
                                              }
                                    
                                        
}

