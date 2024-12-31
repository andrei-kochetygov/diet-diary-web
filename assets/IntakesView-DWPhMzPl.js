import{_ as u,T as N,d as M,k as R,a as T,w as O,u as H,c as Q,b as h,F as x,g as z,i as G,h as L,j as q,l as J}from"./AuthenticatedLayout.vue_vue_type_script_setup_true_lang-GBUriouV.js";import{c as V,b as K,B as X,T as Y,a as Z,_ as tt}from"./Input.vue_vue_type_script_setup_true_lang-BeKPNiSG.js";import{N as v,_ as et}from"./Modal.vue_vue_type_script_setup_true_lang-DfU8_Asu.js";import{a as B,k as U,o as _,i as C,f as e,e as t,g as a,t as m,b as $,F as k,j as E,h as A,l as at,c as S,u as W,r as ut,w as dt,n as st,m as lt,p as j}from"./index-BlQq-XYI.js";const nt=B({__name:"DayIntakesTableRow",props:{ateAt:{},calories:{},proteins:{},fats:{},carbohydrates:{},fibers:{},intakesWithProducts:{}},setup(D){const I=U(!1);return(c,s)=>(_(),C(k,null,[e(N,null,{default:t(()=>[e(u,null,{default:t(()=>[a(m(c.ateAt),1)]),_:1}),e(u,null,{default:t(()=>[a(m(c.calories.toFixed(2)),1)]),_:1}),e(u,null,{default:t(()=>[a(m(c.proteins.toFixed(2)),1)]),_:1}),e(u,null,{default:t(()=>[a(m(c.fats.toFixed(2)),1)]),_:1}),e(u,null,{default:t(()=>[a(m(c.carbohydrates.toFixed(2)),1)]),_:1}),e(u,null,{default:t(()=>[a(m(c.fibers.toFixed(2)),1)]),_:1}),e(u,null,{default:t(()=>[e(V,{onClick:s[0]||(s[0]=l=>I.value=!I.value)},{default:t(()=>[a(m(I.value?"Hide details":"Show details"),1)]),_:1})]),_:1})]),_:1}),I.value?(_(),$(N,{key:0},{default:t(()=>[e(u,{colspan:"9999",style:{"background-color":"#000",padding:"0.5em"}},{default:t(()=>[e(M,null,{header:t(()=>[e(u,{heading:""},{default:t(()=>s[1]||(s[1]=[a("Ate at")])),_:1}),e(u,{heading:""},{default:t(()=>s[2]||(s[2]=[a("Product")])),_:1}),e(u,{heading:""},{default:t(()=>s[3]||(s[3]=[a("Nutrients per")])),_:1}),e(u,{heading:""},{default:t(()=>s[4]||(s[4]=[a("Amount")])),_:1}),e(u,{heading:""},{default:t(()=>s[5]||(s[5]=[a("⚡️ Calories")])),_:1}),e(u,{heading:""},{default:t(()=>s[6]||(s[6]=[a("🥩 Proteins")])),_:1}),e(u,{heading:""},{default:t(()=>s[7]||(s[7]=[a("🧀 Fats")])),_:1}),e(u,{heading:""},{default:t(()=>s[8]||(s[8]=[a("🥔 Carbohydrates")])),_:1}),e(u,{heading:""},{default:t(()=>s[9]||(s[9]=[a("🥦 Fibers")])),_:1}),e(u,{heading:""},{default:t(()=>s[10]||(s[10]=[a("Created at")])),_:1}),e(u,{heading:""},{default:t(()=>s[11]||(s[11]=[a("Updated at")])),_:1}),e(u,{heading:""})]),default:t(()=>[(_(!0),C(k,null,E(c.intakesWithProducts,l=>(_(),$(N,{key:l.id},{default:t(()=>[e(u,null,{default:t(()=>[a(m(l.ateAt),1)]),_:2},1024),e(u,null,{default:t(()=>{var o;return[a(m((o=l.product)==null?void 0:o.name),1)]}),_:2},1024),e(u,null,{default:t(()=>{var o;return[a(m((o=l.product)==null?void 0:o.nutrientsPer),1)]}),_:2},1024),e(u,null,{default:t(()=>[a(m(l.amount??0),1)]),_:2},1024),e(u,null,{default:t(()=>{var o,p;return[a(m(((((o=l.product)==null?void 0:o.calories)??0)/(((p=l.product)==null?void 0:p.nutrientsPer)===A(v).Product?1:100)*(l.amount??0)).toFixed(2)),1)]}),_:2},1024),e(u,null,{default:t(()=>{var o,p;return[a(m(((((o=l.product)==null?void 0:o.proteins)??0)/(((p=l.product)==null?void 0:p.nutrientsPer)===A(v).Product?1:100)*(l.amount??0)).toFixed(2)),1)]}),_:2},1024),e(u,null,{default:t(()=>{var o,p;return[a(m(((((o=l.product)==null?void 0:o.fats)??0)/(((p=l.product)==null?void 0:p.nutrientsPer)===A(v).Product?1:100)*(l.amount??0)).toFixed(2)),1)]}),_:2},1024),e(u,null,{default:t(()=>{var o,p;return[a(m(((((o=l.product)==null?void 0:o.carbohydrates)??0)/(((p=l.product)==null?void 0:p.nutrientsPer)===A(v).Product?1:100)*(l.amount??0)).toFixed(2)),1)]}),_:2},1024),e(u,null,{default:t(()=>{var o,p;return[a(m(((((o=l.product)==null?void 0:o.fibers)??0)/(((p=l.product)==null?void 0:p.nutrientsPer)===A(v).Product?1:100)*(l.amount??0)).toFixed(2)),1)]}),_:2},1024),e(u,null,{default:t(()=>[a(m(l.createdAt),1)]),_:2},1024),e(u,null,{default:t(()=>[a(m(l.updatedAt),1)]),_:2},1024),e(u,null,{default:t(()=>[e(V,{block:"",onClick:o=>c.$emit("editIntake",l.id)},{default:t(()=>s[12]||(s[12]=[a("Edit")])),_:2},1032,["onClick"]),e(R,{block:"",collectionName:"intakes",documentId:l.id},{default:t(()=>s[13]||(s[13]=[a("Delete")])),_:2},1032,["documentId"])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})):at("",!0)],64))}});var ot={root:{base:"mijmar0"}};const rt=B({__name:"IntakeForm",props:{intakeId:{}},emits:["success"],setup(D,{emit:I}){const c=D,s=I,l=S(()=>c.intakeId!==null),o=W(),p={amount:0,ateAt:new Date().toISOString().slice(0,10),createdAt:new Date().toISOString(),ownerId:o.uid,productId:""},y=ut({...p}),w=T({constraints:[O("ownerId","==",o.uid)],name:"products"}),F=H({collectionName:"intakes",documentId:()=>c.intakeId}),P=Q({collectionName:"intakes"}),d=h({collectionName:"intakes",documentId:()=>c.intakeId});async function n(){l.value&&await d.mutateAsync(y),l.value||await P.mutateAsync(y),s("success")}dt(F.data,r=>{r?Object.assign(y,r):Object.assign(y,{...p})});const b=S(()=>({[ot.root.base]:!0}));return(r,i)=>(_(),C("form",{class:st(b.value),onSubmit:lt(n,["prevent"])},[e(x,{label:"Ate at"},{default:t(({id:f})=>[e(K,{modelValue:y.ateAt,"onUpdate:modelValue":i[0]||(i[0]=g=>y.ateAt=g),id:f,placeholder:"Enter ate at..."},null,8,["modelValue","id"])]),_:1}),e(x,{label:"Product"},{default:t(({id:f})=>[e(z,{modelValue:y.productId,"onUpdate:modelValue":i[1]||(i[1]=g=>y.productId=g),id:f},{default:t(()=>[(_(!0),C(k,null,E(A(w).data.value,g=>(_(),$(L,{key:g.id,value:g.id},{default:t(()=>[a(m(g.name),1)]),_:2},1032,["value"]))),128))]),_:2},1032,["modelValue","id"])]),_:1}),e(x,{label:"Amount"},{default:t(({id:f})=>[e(G,{modelValue:y.amount,"onUpdate:modelValue":i[2]||(i[2]=g=>y.amount=g),id:f,placeholder:"Enter amount..."},null,8,["modelValue","id"])]),_:1}),e(V,{type:"submit",severity:A(X).Primary},{default:t(()=>[a(m(l.value?"Update intake":"Add intake"),1)]),_:1},8,["severity"])],34))}}),it={class:"page"},ft={class:"stack"},mt=B({__name:"IntakesView",setup(D){const I=W(),c=T({constraints:[O("ownerId","==",I.uid)],name:"products"}),s=T({constraints:[O("ownerId","==",I.uid)],name:"intakes"}),l=S(()=>!s.data.value||!c.data.value?[]:s.data.value.map(P=>{const d=c.data.value.find(n=>n.id===P.productId);return{...P,product:d}})),o=S(()=>{if(!l.value)return[];const P=l.value.reduce((d,n)=>(d[n.ateAt]||(d[n.ateAt]=[]),d[n.ateAt].push(n),d),{});return Object.entries(P).map(([d,n])=>({ateAt:d,calories:n.reduce((b,r)=>{var i,f;return b+(((i=r.product)==null?void 0:i.calories)??0)/(((f=r.product)==null?void 0:f.nutrientsPer)===v.Product?1:100)*(r.amount??0)},0),carbohydrates:n.reduce((b,r)=>{var i,f;return b+(((i=r.product)==null?void 0:i.carbohydrates)??0)/(((f=r.product)==null?void 0:f.nutrientsPer)===v.Product?1:100)*(r.amount??0)},0),fats:n.reduce((b,r)=>{var i,f;return b+(((i=r.product)==null?void 0:i.fats)??0)/(((f=r.product)==null?void 0:f.nutrientsPer)===v.Product?1:100)*(r.amount??0)},0),fibers:n.reduce((b,r)=>{var i,f;return b+(((i=r.product)==null?void 0:i.fibers)??0)/(((f=r.product)==null?void 0:f.nutrientsPer)===v.Product?1:100)*(r.amount??0)},0),intakes:n,proteins:n.reduce((b,r)=>{var i,f;return b+(((i=r.product)==null?void 0:i.proteins)??0)/(((f=r.product)==null?void 0:f.nutrientsPer)===v.Product?1:100)*(r.amount??0)},0)}))});async function p(P){F.value=P,w.value=!0}async function y(){F.value=null,w.value=!0}const w=U(!1),F=U(null);return(P,d)=>(_(),$(q,null,{default:t(()=>[j("div",it,[e(et,{modelValue:w.value,"onUpdate:modelValue":d[2]||(d[2]=n=>w.value=n),style:{width:"400px",padding:"1em"}},{default:t(()=>[e(rt,{intakeId:F.value,onSuccess:d[0]||(d[0]=n=>w.value=!1)},null,8,["intakeId"]),e(V,{onClick:d[1]||(d[1]=n=>w.value=!1),style:{"margin-top":"0.5em",width:"100%"}},{default:t(()=>d[3]||(d[3]=[a("Close")])),_:1})]),_:1},8,["modelValue"]),j("div",ft,[e(tt,{type:A(Y).Heading1,severity:A(Z).Primary,block:""},{default:t(()=>d[4]||(d[4]=[a("Intakes")])),_:1},8,["type","severity"]),e(V,{onClick:y},{default:t(()=>d[5]||(d[5]=[a("Add intake")])),_:1})]),e(M,null,{header:t(()=>[e(u,{heading:""},{default:t(()=>d[6]||(d[6]=[a("Ate at")])),_:1}),e(u,{heading:""},{default:t(()=>d[7]||(d[7]=[a("⚡️ Calories")])),_:1}),e(u,{heading:""},{default:t(()=>d[8]||(d[8]=[a("🥩 Proteins")])),_:1}),e(u,{heading:""},{default:t(()=>d[9]||(d[9]=[a("🧀 Fats")])),_:1}),e(u,{heading:""},{default:t(()=>d[10]||(d[10]=[a("🥔 Carbohydrates")])),_:1}),e(u,{heading:""},{default:t(()=>d[11]||(d[11]=[a("🥦 Fibers")])),_:1}),e(u,{heading:""})]),default:t(()=>[(_(!0),C(k,null,E(o.value,n=>(_(),$(nt,{key:n.ateAt,ateAt:n.ateAt,calories:n.calories,proteins:n.proteins,fats:n.fats,carbohydrates:n.carbohydrates,fibers:n.fibers,intakesWithProducts:n.intakes,onEditIntake:p},null,8,["ateAt","calories","proteins","fats","carbohydrates","fibers","intakesWithProducts"]))),128))]),_:1})])]),_:1}))}}),vt=J(mt,[["__scopeId","data-v-1b21177f"]]);export{vt as default};
