(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[997,931],{4486:function(e,t,a){Promise.resolve().then(a.t.bind(a,1076,23)),Promise.resolve().then(a.bind(a,7382))},7382:function(e,t,a){"use strict";a.r(t),a.d(t,{ContactUs:function(){return ContactUs}});var r=a(7437),n=a(4388),l=a.n(n),o=a(426),s=a.n(o),i=a(6820),c=a.n(i);let ContactUs=()=>{let e={name:{presence:!0,length:{minimum:2,message:"must be at least 6 characters"}},email:{presence:!0,email:!0},message:{presence:!0,length:{minimum:20,message:"Message must be at least 20 characters"}}};return(0,r.jsx)("div",{className:l().form,children:(0,r.jsxs)("form",{onSubmit:()=>!1,children:[(0,r.jsxs)("div",{className:l().formControl,children:[(0,r.jsx)("label",{htmlFor:"name",children:"Your name"}),(0,r.jsx)("input",{type:"text",id:"name",placeholder:"Input text",name:"name"})]}),(0,r.jsxs)("div",{className:l().formControl,children:[(0,r.jsx)("label",{htmlFor:"email",children:"Your email"}),(0,r.jsx)("input",{type:"email",id:"email",placeholder:"Input text",name:"email"})]}),(0,r.jsxs)("div",{className:l().formControl,children:[(0,r.jsx)("label",{htmlFor:"message",children:"Your Message"}),(0,r.jsx)("textarea",{rows:5,id:"message",placeholder:"Input text",name:"message"})]}),(0,r.jsx)("button",{onClick:t=>{var a,r,n;let l=document.getElementsByTagName("form")[0],o={name:null===(a=l.querySelector("input[name=name]"))||void 0===a?void 0:a.value,email:null===(r=l.querySelector("input[name=email]"))||void 0===r?void 0:r.value,message:null===(n=l.querySelector("textarea"))||void 0===n?void 0:n.value},i=s()(o,e),m=l.querySelector(".form-error");if(i&&(null==m?void 0:m.innerHTML)){m.innerHTML="",Object.getOwnPropertyNames(i).forEach(e=>{let t=document.createElement("P");t.innerText=i[e],m.appendChild(t)});return}m&&(m.innerHTML="");let u=l.querySelector("button");u&&(u.disabled=!0);let d=new XMLHttpRequest;d.addEventListener("load",e=>{var t;u&&(u.disabled=!1);let a=l.querySelector("input[name=name]"),r=l.querySelector("input[name=email]"),n=l.querySelector("textarea");(null==a?void 0:a.value)&&(a.value=""),(null==r?void 0:r.value)&&(r.value=""),(null==n?void 0:n.value)&&(n.value=""),(null==e?void 0:null===(t=e.target)||void 0===t?void 0:t.status)==200?c().fire("Thank You","Your message have been added and TinTech team will contact you soon!","success"):c().fire("Problem Occurred","Please try again!","error")}),d.addEventListener("error",e=>{c().fire("Problem Occurred","Please try again!","error")}),d.open("POST","https://script.google.com/macros/s/AKfycbyCQphjJS1QczT4UiWabxOnCaJaKpwBrth6N_9G0Gm71i2hQwvijEIT_EvwV_7JQPWz/exec"),d.send(JSON.stringify(o))},children:"Submit"}),(0,r.jsx)("div",{className:l().formError})]})})}},1076:function(e){e.exports={title:"page_title__m5nyP",titleImage:"page_titleImage__Yp_Bf",content:"page_content__szHtB",titleText:"page_titleText__xTFAX",ourServices:"page_ourServices__TeGih",serviceCard:"page_serviceCard__L5BiB",body:"page_body__q2a0r",about:"page_about__p_sC8",row:"page_row__DcGBw",descCard:"page_descCard__t6dXG",desc:"page_desc__wSK2C",values:"page_values__PFg8x",line:"page_line__x_DSf",contact:"page_contact__EaIGU"}},4388:function(e){e.exports={form:"contact-us_form__zPaat",formControl:"contact-us_formControl__ha__K",formError:"contact-us_formError__aY0V2"}}},function(e){e.O(0,[271,971,864,744],function(){return e(e.s=4486)}),_N_E=e.O()}]);