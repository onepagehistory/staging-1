(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{282:function(e,t,i){"use strict";var a=i(47),o=i.n(a),n=i(0),r=i.n(n),s=(new Date).getFullYear(),l=(i(133),i(18)),m=function(e){var t,i=e.depth,a=e.bubble,o=e.entry,n=e.baseRowLength,m=10*Math.max(1,o.dating.to.year()-o.dating.from.year()),d=(t=o.dating.to.year(),10*(s-("number"==typeof t?t:t.year()))),p=8*(.5+i),h=8*(n-i)+40+90*a;return r.a.createElement("div",{id:o.name,className:"Card"},r.a.createElement("div",{className:"Card__Range",style:{left:d,bottom:p,width:m}}),r.a.createElement("div",{className:"Card__DashedLine",style:{height:h,left:d,bottom:p}}),r.a.createElement("div",{className:"Card__Entry",style:{bottom:p+h,left:d}},r.a.createElement("div",{className:"Card__Box"},r.a.createElement("div",{className:"Card__ImgWrapper"},r.a.createElement("img",{className:"Card__image",alt:o.name+" representation",src:o.imageUrl})),r.a.createElement(l.Link,{className:"Card__Summary",to:"/p/"+o.name},r.a.createElement("h3",{className:"Card__Title"},o.title),r.a.createElement("div",{className:"Card__Date"},o.subtitle),o.shortDescription&&r.a.createElement("div",{className:"Card__Description"},o.shortDescription)))))};i(134);function d(e,t,i,a){return e>=i&&e<=a||t>=i&&t<=a}var p=function(e){var t,i,a=e.from,n=e.to,s=e.data.entries;s.sort(function(e,t){return t.dating.to.year()-e.dating.to.year()}),(t=console).log.apply(t,o()(s));var l,p,h=[],c=!0,u=!1,g=void 0;try{e:for(var _,y=s[Symbol.iterator]();!(c=(_=y.next()).done);c=!0){for(var f=_.value,j=h.length-1;j>=0;j--)for(var b=h[j],w=0;w<b.length;w++){var v=b[w];if(l=f.dating,p=v.dating,d(l.from.year(),l.to.year(),p.from.year(),p.to.year())){j===h.length-1?(f.depth=h.length,h.push([f])):(f.depth=j+1,h[j+1].push(f));continue e}}h.length?(f.depth=0,h[0].push(f)):(f.depth=0,h.push([f]))}}catch(G){u=!0,g=G}finally{try{c||null==y.return||y.return()}finally{if(u)throw g}}s.sort(function(e,t){return e.dating.to.year()-t.dating.to.year()}),(i=console).log.apply(i,o()(s));var k,E,D,S=[],U=!0,C=!1,I=void 0;try{e:for(var A,x=s[Symbol.iterator]();!(U=(A=x.next()).done);U=!0){var N=A.value;t:for(var W=0;W<S.length;W++){for(var M=S[W],R=0;R<M.length;R++){var z=M[R];if(k=N.dating.to.year(),E=z.dating.to.year(),d(k-(D=50),k,E-D,E))continue t;if(N.dating.to.year()<z.dating.to.year()){M.splice(R+1,0,N),N.bubbleDepth=W,N.rightDepth=z.depth;continue e}}M.push(N),N.bubbleDepth=W,N.rightDepth=0;continue e}S.push([N]),N.bubbleDepth=S.length-1,N.rightDepth=0}}catch(G){C=!0,I=G}finally{try{U||null==x.return||x.return()}finally{if(C)throw I}}var L=Math.floor(n/100),T=Math.ceil(a/100),B=new Array(L-T).fill(void 0).map(function(e,t){return{name:100*(L-t),century:L-t,years:100}});return a%100&&B.push({name:100*(T-1),century:T-1,years:a%100}),n%100&&B.unshift({name:n,century:L+1,years:n%100}),r.a.createElement("div",{className:"Scales"},r.a.createElement("div",{className:"Scales__Events"},s.map(function(e){return r.a.createElement(m,{key:e.name,entry:e,depth:e.depth,bubble:e.bubbleDepth,baseRowLength:h.length})})),r.a.createElement("div",{className:"Scales__Centuries"},B.map(function(e){var t=e.name,i=""+t;return r.a.createElement("div",{key:"Century"+e.century,id:i,className:"Scales__Century",style:{flexBasis:10*e.years}},r.a.createElement("a",{href:"#"+i},t))})))},h=i(283);i(135);i.d(t,"a",function(){return c});var c=function(e){return r.a.createElement("section",{className:"RootPage"},e.children&&r.a.createElement("div",{className:"RootPage__Subpage"},e.children),r.a.createElement("div",{className:"RootPage__Contents"},r.a.createElement("section",{className:"RootPage__Body"},r.a.createElement("div",{className:"RootPage__Scales"},r.a.createElement(p,{data:h.data,from:Math.min.apply(Math,o()(h.data.entries.map(function(e){return e.dating.to.year()}))),to:s})))))}},283:function(e,t,i){var a=i(284).range,o={Event:0};e.exports.HistoryEntryType=o,e.exports.data={entries:[{name:"Soviet_Union",type:o.Event,title:"USSR",subtitle:"1922 – 1991",dating:a({from:1922,to:1991}),shortDescription:"",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_the_Soviet_Union.svg",position:{top:"60%"}},{name:"United_States",type:o.Event,title:"USA",subtitle:"July 4, 1776",dating:a({from:1776,to:1776}),shortDescription:"",imageUrl:"https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",position:{top:"5%"}},{name:"World_War_I",type:o.Event,title:"World War I",subtitle:"28 July 1914 – 11 November 1918",dating:a({from:1914,to:1918}),shortDescription:'Also known as the First World War or the Great War, was a global war originating in Europe that lasted from 28 July 1914 to 11 November 1918. Contemporaneously described as "the war to end all wars", it led to the mobilisation of more than 70 million military personnel, including 60 million Europeans, making it one of the largest wars in history. It is also one of the deadliest conflicts in history, with an estimated nine million combatants and seven million civilian deaths as a direct result of the war, while resulting genocides and the 1918 influenza pandemic caused another 50 to 100 million deaths worldwide.',imageUrl:"https://upload.wikimedia.org/wikipedia/commons/2/20/WWImontage.jpg",position:{top:"5%"}},{name:"World_War_II",type:o.Event,title:"World War II",subtitle:"1 September 1939 – 2 September 1945",dating:a({from:1939,to:1945}),shortDescription:"also known as the Second World War, was a global war that lasted from 1939 to 1945. The vast majority of the world's countries—including all the great powers—eventually formed two opposing military alliances: the Allies and the Axis. A state of total war emerged, directly involving more than 100 million people from over 30 countries. The major participants threw their entire economic, industrial, and scientific capabilities behind the war effort, blurring the distinction between civilian and military resources. World War II was the deadliest conflict in human history, marked by 50 to 85 million fatalities, most of whom were civilians in the Soviet Union and China. It included massacres, the genocide of the Holocaust, strategic bombing, premeditated death from starvation and disease, and the only use of nuclear weapons in war",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/5/54/Infobox_collage_for_WWII.PNG",position:{top:"25%"}},{name:"Omar_Khayyam",type:o.Event,title:"Omar Khayyam",subtitle:"18 May 1048 – 4 December 1131",dating:a({from:1048,to:1131}),shortDescription:"Persian mathematician, astronomer, and poet",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Omar_Khayyam2.JPG/440px-Omar_Khayyam2.JPG",position:{top:"65%"}},{name:"Isaac_Newton",type:o.Event,title:"Isaac Newton",subtitle:"25 December 1642 – 20 March 1726/27",dating:a({from:1642,to:1727}),shortDescription:'English mathematician, physicist, astronomer, theologian, and author (described in his own day as a "natural philosopher") who is widely recognised as one of the most influential scientists of all time, and a key figure in the scientific revolution',imageUrl:"https://upload.wikimedia.org/wikipedia/commons/3/39/GodfreyKneller-IsaacNewton-1689.jpg",position:{top:"25%"}},{name:"William_Shakespeare",type:o.Event,title:"William Shakespeare",subtitle:"bapt. 26 April 1564 – 23 April 1616",dating:a({from:1564,to:1616}),shortDescription:"English poet, playwright and actor, widely regarded as the greatest writer in the English language and the world's greatest dramatist",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/375px-Shakespeare.jpg",position:{top:"28%"}},{name:"Giordano_Bruno",type:o.Event,title:"Giordano Bruno",subtitle:"1548 – 17 February 1600",dating:a({from:1548,to:1600}),shortDescription:"Italian Dominican friar, philosopher, mathematician, poet, cosmological theorist, and Hermetic occultist",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/1/15/Giordano_Bruno.jpg",position:{top:"44%"}},{name:"Steam_engine",type:o.Event,title:"Steam engine",subtitle:"1712",dating:a({from:1712,to:1712}),shortDescription:"",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/JamesWattEngine.jpg/640px-JamesWattEngine.jpg",position:{top:"35%"}},{name:"Steam_locomotive",type:o.Event,title:"Steam locomotive",subtitle:"1802",dating:a({from:1802,to:1802}),shortDescription:"",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/California_Western_Railroad_Locomotive_45.jpg/440px-California_Western_Railroad_Locomotive_45.jpg",position:{top:"30%"}},{name:"Albert_Einstein",type:o.Event,title:"Albert Einstein",subtitle:"14 March 1879 – 18 April 1955",dating:a({from:1879,to:1955}),shortDescription:"Theoretical physicist who developed the theory of relativity. E = mc2",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/440px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg",position:{top:"11%"}},{name:"Dante_Alighieri",type:o.Event,title:"Dante Alighieri",subtitle:"1265 – 1321",dating:a({from:1265,to:1321}),shortDescription:'Italian poet during the Late Middle Ages. His Divine Comedy, originally called "Comedìa" and later christened Divina by Giovanni Boccaccio, is widely considered the most important poem of the Middle Ages and the greatest literary work in the Italian language.',imageUrl:"https://upload.wikimedia.org/wikipedia/commons/6/6f/Portrait_de_Dante.jpg",position:{top:"40%"}},{name:"Michael_Faraday",type:o.Event,title:"Michael Faraday",subtitle:"22 September 1791 – 25 August 1867",dating:a({from:1791,to:1867}),shortDescription:"English scientist who contributed to the study of electromagnetism and electrochemistry. His main discoveries include the principles underlying electromagnetic induction, diamagnetism and electrolysis",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/8/88/M_Faraday_Th_Phillips_oil_1842.jpg",position:{top:"15%"}},{name:"Incandescent_light_bulb",type:o.Event,title:"Light bulb",subtitle:"Around 1880s",dating:a({from:1880,to:1880}),shortDescription:"",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Livermore_Centennial_Light_Bulb.jpg/266px-Livermore_Centennial_Light_Bulb.jpg",position:{top:"40%"}},{name:"Printing_press",type:o.Event,title:"Printing press",subtitle:"1440",dating:a({from:1440,to:1440}),shortDescription:"Johannes Gutenberg, a goldsmith by profession, developed, circa 1439, a printing system by adapting existing technologies to printing purposes, as well as making inventions of his own. His newly devised hand mould made possible the precise and rapid creation of metal movable type in large quantities. Movable type had been hitherto unknown in Europe. In Europe, the two inventions, the hand mould and the printing press, together drastically reduced the cost of printing books and other documents, particularly in short print runs.",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Chodowiecki_Basedow_Tafel_21_c_Z.jpg/622px-Chodowiecki_Basedow_Tafel_21_c_Z.jpg",position:{top:"24%"}},{name:"Alexander_the_Great",type:o.Event,title:"Alexander the Great",subtitle:"20/21 July 356 BCE – 10/11 June 323 BCE",dating:a({from:-356,to:-323}),shortDescription:"A king of the ancient Greek kingdom of Macedon and a member of the Argead dynasty. He was born in Pella in 356 BCE and succeeded his father Philip II to the throne at the age of 20. He spent most of his ruling years on an unprecedented military campaign through Asia and northeast Africa, and by the age of thirty he had created one of the largest empires of the ancient world, stretching from Greece to northwestern India. He was undefeated in battle and is widely considered one of history's most successful military commanders.",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/AlexandreLouvre.jpg/340px-AlexandreLouvre.jpg",position:{top:"40%"}},{name:"Scientific_Revolution",type:o.Event,title:"Scientific Revolution",subtitle:"~ 1543",dating:a({from:1543,to:1543}),shortDescription:"The Scientific Revolution was a series of events that marked the emergence of modern science during the early modern period, when developments in mathematics, physics, astronomy, biology (including human anatomy) and chemistry transformed the views of society about nature",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/CMB_Timeline300_no_WMAP.jpg/520px-CMB_Timeline300_no_WMAP.jpg",position:{top:"5%"}},{name:"Renaissance",type:o.Event,title:"Renaissance",subtitle:"~ 14th – 17th centuries",dating:a({from:1300,to:1600}),shortDescription:"a period in European history, covering the span between the 14th and 17th centuries and marking the transition from the Middle Ages to modernity. The traditional view focuses more on the early modern aspects of the Renaissance and argues that it was a break from the past, but many historians today focus more on its medieval aspects and argue that it was an extension of the middle ages",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/500px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg",position:{top:"23%"}},{name:"Metropolitan_Railway",type:o.Event,title:"Metropolitan Railway",subtitle:"1863",dating:a({from:1863,to:1863}),shortDescription:"The Metropolitan Railway was a passenger and goods railway that served London from 1863 to 1933. It opened to the public on 10 January 1863 with gas-lit wooden carriages hauled by steam locomotives, the world's first passenger-carrying designated underground railway.",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Metropolitan_Underground_Railway_stations.jpg/440px-Metropolitan_Underground_Railway_stations.jpg",position:{top:"26%"}},{name:"View_from_the_Window_at_Le_Gras",type:o.Event,title:"First photo",subtitle:"~ 1826",dating:a({from:1826,to:1826}),shortDescription:"Nicéphore Niépce — French inventor, usually credited as the inventor of photography and a pioneer in that field",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/LEI0440_Leica_IIIf_chrom_-_Sn._580566_1951-52-M39_Blitzsynchron_front_view-6531_hf-.jpg/440px-LEI0440_Leica_IIIf_chrom_-_Sn._580566_1951-52-M39_Blitzsynchron_front_view-6531_hf-.jpg",position:{top:"33%"}},{name:"Napoleon",type:o.Event,title:"Napoléon Bonaparte",subtitle:"15 August 1769 – 5 May 1821",dating:a({from:1769,to:1821}),shortDescription:"French statesman and military leader who rose to prominence during the French Revolution and led several successful campaigns during the French Revolutionary Wars",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg/288px-Jacques-Louis_David_-_The_Emperor_Napoleon_in_His_Study_at_the_Tuileries_-_Google_Art_Project.jpg",position:{top:"38%"}},{name:"Charles_Darwin",type:o.Event,title:"Charles Darwin",subtitle:"12 February 1809 – 19 April 1882",dating:a({from:1809,to:1882}),shortDescription:"English naturalist, geologist and biologist, best known for his contributions to the science of evolution. His proposition that all species of life have descended over time from common ancestors is now widely accepted, and considered a foundational concept in science. In a joint publication with Alfred Russel Wallace, he introduced his scientific theory that this branching pattern of evolution resulted from a process that he called natural selection, in which the struggle for existence has a similar effect to the artificial selection involved in selective breeding.",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Charles_Robert_Darwin_by_John_Collier.jpg/440px-Charles_Robert_Darwin_by_John_Collier.jpg",position:{top:"23%"}},{name:"Leonardo_da_Vinci",type:o.Event,title:"Leonardo da Vinci",subtitle:"15 April 1452 – 2 May 1519",dating:a({from:1452,to:1519}),shortDescription:"Italian polymath of the Renaissance whose areas of interest included invention, drawing, painting, sculpting, architecture, science, music, mathematics, engineering, literature, anatomy, geology, astronomy, botany, writing, history, and cartography",imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Da_Vinci_Vitruve_Luc_Viatour_%28cropped%29.jpg/440px-Da_Vinci_Vitruve_Luc_Viatour_%28cropped%29.jpg",position:{top:"40%"}},{name:"",type:o.Event,title:"",subtitle:"",dating:a({from:0,to:0}),shortDescription:"",imageUrl:"",position:{top:0}}].filter(function(e){return e.name})}},284:function(e,t,i){var a=i(137);e.exports.range=function(e){var t=e.from,i=e.to;return{type:"range",from:a("number"==typeof t?{year:t}:t),to:a("number"==typeof i?{year:i}:i)}}},285:function(e,t,i){var a={"./af":148,"./af.js":148,"./ar":149,"./ar-dz":150,"./ar-dz.js":150,"./ar-kw":151,"./ar-kw.js":151,"./ar-ly":152,"./ar-ly.js":152,"./ar-ma":153,"./ar-ma.js":153,"./ar-sa":154,"./ar-sa.js":154,"./ar-tn":155,"./ar-tn.js":155,"./ar.js":149,"./az":156,"./az.js":156,"./be":157,"./be.js":157,"./bg":158,"./bg.js":158,"./bm":159,"./bm.js":159,"./bn":160,"./bn.js":160,"./bo":161,"./bo.js":161,"./br":162,"./br.js":162,"./bs":163,"./bs.js":163,"./ca":164,"./ca.js":164,"./cs":165,"./cs.js":165,"./cv":166,"./cv.js":166,"./cy":167,"./cy.js":167,"./da":168,"./da.js":168,"./de":169,"./de-at":170,"./de-at.js":170,"./de-ch":171,"./de-ch.js":171,"./de.js":169,"./dv":172,"./dv.js":172,"./el":173,"./el.js":173,"./en-SG":174,"./en-SG.js":174,"./en-au":175,"./en-au.js":175,"./en-ca":176,"./en-ca.js":176,"./en-gb":177,"./en-gb.js":177,"./en-ie":178,"./en-ie.js":178,"./en-il":179,"./en-il.js":179,"./en-nz":180,"./en-nz.js":180,"./eo":181,"./eo.js":181,"./es":182,"./es-do":183,"./es-do.js":183,"./es-us":184,"./es-us.js":184,"./es.js":182,"./et":185,"./et.js":185,"./eu":186,"./eu.js":186,"./fa":187,"./fa.js":187,"./fi":188,"./fi.js":188,"./fo":189,"./fo.js":189,"./fr":190,"./fr-ca":191,"./fr-ca.js":191,"./fr-ch":192,"./fr-ch.js":192,"./fr.js":190,"./fy":193,"./fy.js":193,"./ga":194,"./ga.js":194,"./gd":195,"./gd.js":195,"./gl":196,"./gl.js":196,"./gom-latn":197,"./gom-latn.js":197,"./gu":198,"./gu.js":198,"./he":199,"./he.js":199,"./hi":200,"./hi.js":200,"./hr":201,"./hr.js":201,"./hu":202,"./hu.js":202,"./hy-am":203,"./hy-am.js":203,"./id":204,"./id.js":204,"./is":205,"./is.js":205,"./it":206,"./it-ch":207,"./it-ch.js":207,"./it.js":206,"./ja":208,"./ja.js":208,"./jv":209,"./jv.js":209,"./ka":210,"./ka.js":210,"./kk":211,"./kk.js":211,"./km":212,"./km.js":212,"./kn":213,"./kn.js":213,"./ko":214,"./ko.js":214,"./ku":215,"./ku.js":215,"./ky":216,"./ky.js":216,"./lb":217,"./lb.js":217,"./lo":218,"./lo.js":218,"./lt":219,"./lt.js":219,"./lv":220,"./lv.js":220,"./me":221,"./me.js":221,"./mi":222,"./mi.js":222,"./mk":223,"./mk.js":223,"./ml":224,"./ml.js":224,"./mn":225,"./mn.js":225,"./mr":226,"./mr.js":226,"./ms":227,"./ms-my":228,"./ms-my.js":228,"./ms.js":227,"./mt":229,"./mt.js":229,"./my":230,"./my.js":230,"./nb":231,"./nb.js":231,"./ne":232,"./ne.js":232,"./nl":233,"./nl-be":234,"./nl-be.js":234,"./nl.js":233,"./nn":235,"./nn.js":235,"./pa-in":236,"./pa-in.js":236,"./pl":237,"./pl.js":237,"./pt":238,"./pt-br":239,"./pt-br.js":239,"./pt.js":238,"./ro":240,"./ro.js":240,"./ru":241,"./ru.js":241,"./sd":242,"./sd.js":242,"./se":243,"./se.js":243,"./si":244,"./si.js":244,"./sk":245,"./sk.js":245,"./sl":246,"./sl.js":246,"./sq":247,"./sq.js":247,"./sr":248,"./sr-cyrl":249,"./sr-cyrl.js":249,"./sr.js":248,"./ss":250,"./ss.js":250,"./sv":251,"./sv.js":251,"./sw":252,"./sw.js":252,"./ta":253,"./ta.js":253,"./te":254,"./te.js":254,"./tet":255,"./tet.js":255,"./tg":256,"./tg.js":256,"./th":257,"./th.js":257,"./tl-ph":258,"./tl-ph.js":258,"./tlh":259,"./tlh.js":259,"./tr":260,"./tr.js":260,"./tzl":261,"./tzl.js":261,"./tzm":262,"./tzm-latn":263,"./tzm-latn.js":263,"./tzm.js":262,"./ug-cn":264,"./ug-cn.js":264,"./uk":265,"./uk.js":265,"./ur":266,"./ur.js":266,"./uz":267,"./uz-latn":268,"./uz-latn.js":268,"./uz.js":267,"./vi":269,"./vi.js":269,"./x-pseudo":270,"./x-pseudo.js":270,"./yo":271,"./yo.js":271,"./zh-cn":272,"./zh-cn.js":272,"./zh-hk":273,"./zh-hk.js":273,"./zh-tw":274,"./zh-tw.js":274};function o(e){var t=n(e);return i(t)}function n(e){if(!i.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}o.keys=function(){return Object.keys(a)},o.resolve=n,e.exports=o,o.id=285}}]);