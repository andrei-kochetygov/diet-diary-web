import{a as l,c as d,i,x as y,n as u,o as c}from"./index-BlQq-XYI.js";var t={root:{base:"_4n1nfp0",block:"_4n1nfp1",severity:{neutral:"_4n1nfp2",primary:"_4n1nfp3"},type:{body1:"_4n1nfp4",body2:"_4n1nfp5",heading1:"_4n1nfp6",heading2:"_4n1nfp7",heading3:"_4n1nfp8"}}},m=(e=>(e.Heading1="heading1",e.Heading2="heading2",e.Heading3="heading3",e.Body1="body1",e.Body2="body2",e))(m||{}),p=(e=>(e.Neutral="neutral",e.Primary="primary",e))(p||{});const B=l({__name:"Typography",props:{type:{default:()=>"body1"},severity:{default:()=>"neutral"},block:{type:Boolean,default:!1}},setup(e){const n=d(()=>({[t.root.base]:!0,[t.root.block]:e.block,[t.root.type.heading1]:e.type==="heading1",[t.root.type.heading2]:e.type==="heading2",[t.root.type.heading3]:e.type==="heading3",[t.root.type.body1]:e.type==="body1",[t.root.type.body2]:e.type==="body2",[t.root.severity.neutral]:e.severity==="neutral",[t.root.severity.primary]:e.severity==="primary"}));return(a,o)=>(c(),i("div",{class:u(n.value)},[y(a.$slots,"default")],2))}});var r={root:{base:"_1jde7pw0",block:"_1jde7pw1",disabled:"_1jde7pw2",severity:{neutral:"_1jde7pw3",primary:"_1jde7pw4"}}};const f=["disabled"];var v=(e=>(e.Neutral="neutral",e.Primary="primary",e))(v||{});const $=l({__name:"Button",props:{severity:{default:()=>"neutral"},block:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(e){const n=d(()=>({[r.root.base]:!0,[r.root.block]:e.block,[r.root.disabled]:e.disabled,[r.root.severity.neutral]:e.severity==="neutral",[r.root.severity.primary]:e.severity==="primary"}));return(a,o)=>(c(),i("button",{type:"button",class:u(n.value),disabled:a.disabled},[y(a.$slots,"default")],10,f))}});var _={root:{base:"cetqyu0"}};const h=["value"],j=l({__name:"Input",props:{modelValue:{}},emits:["update:modelValue"],setup(e,{emit:n}){const a=n;function o(s){a("update:modelValue",s.target.value)}const b=d(()=>({[_.root.base]:!0}));return(s,g)=>(c(),i("input",{value:s.modelValue,onInput:o,class:u(b.value)},null,42,h))}});export{v as B,m as T,B as _,p as a,j as b,$ as c};