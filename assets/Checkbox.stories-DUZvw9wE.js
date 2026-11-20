import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as O}from"./index-BioFo8Zg.js";import"./index-yBjzXJbu.js";const W="_wrapper_x3t6k_1",T="_input_x3t6k_8",V="_label_x3t6k_16",R="_error_x3t6k_27",B="_disabled_x3t6k_35",r={wrapper:W,input:T,label:V,error:R,disabled:B};function a({label:d,error:n=!1,disabled:i=!1,id:N,className:E="",...q}){const D=O.useId(),p=N??D,I=[r.wrapper,n?r.error:"",i?r.disabled:"",E].filter(Boolean).join(" ");return e.jsxs("div",{className:I,children:[e.jsx("input",{id:p,type:"checkbox",className:r.input,disabled:i,"aria-invalid":n||void 0,...q}),d&&e.jsx("label",{className:r.label,htmlFor:p,children:d})]})}a.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"ReactNode"},description:""},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};const G={title:"Components/Checkbox",component:a,tags:["autodocs"],parameters:{docs:{description:{component:'Чекбокс с подписью, состояниями error и disabled и поддержкой нативных атрибутов input[type="checkbox"]. Используется, например, для выбора веса кофе в заказе.'}}},args:{label:"Согласен с условиями",error:!1,disabled:!1},argTypes:{label:{control:"text"},error:{control:"boolean"},disabled:{control:"boolean"}}},s={},t={args:{label:"Выбрано",defaultChecked:!0}},o={args:{label:"Недоступно",disabled:!0}},l={args:{label:"Обязательное поле",error:!0}},c={render:()=>e.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[e.jsx(a,{label:"250 г",name:"weight",defaultChecked:!0}),e.jsx(a,{label:"500 г",name:"weight"}),e.jsx(a,{label:"1 кг",name:"weight"})]})};var u,m,b;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(b=(m=s.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var f,x,h;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Выбрано',
    defaultChecked: true
  }
}`,...(h=(x=t.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var g,k,_;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Недоступно',
    disabled: true
  }
}`,...(_=(k=o.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var C,w,y;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Обязательное поле',
    error: true
  }
}`,...(y=(w=l.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var j,v,S;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap'
  }}>\r
      <Checkbox label="250 г" name="weight" defaultChecked />\r
      <Checkbox label="500 г" name="weight" />\r
      <Checkbox label="1 кг" name="weight" />\r
    </div>
}`,...(S=(v=c.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const H=["Default","Checked","Disabled","ErrorState","WeightOptions"];export{t as Checked,s as Default,o as Disabled,l as ErrorState,c as WeightOptions,H as __namedExportsOrder,G as default};
