import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as B}from"./index-BioFo8Zg.js";import"./index-yBjzXJbu.js";const A="_wrapper_n80tm_1",O="_label_n80tm_8",P="_input_n80tm_14",C="_error_n80tm_37",F="_errorText_n80tm_46",R="_disabled_n80tm_51",r={wrapper:A,label:O,input:P,error:C,errorText:F,disabled:R};function a({label:i,placeholder:N,error:l=!1,disabled:p=!1,id:q,className:w="",...D}){const W=B.useId(),c=q??W,u=l?`${c}-error`:void 0;return e.jsxs("div",{className:[r.wrapper,w].filter(Boolean).join(" "),children:[i&&e.jsx("label",{className:r.label,htmlFor:c,children:i}),e.jsx("input",{id:c,className:[r.input,l?r.error:"",p?r.disabled:""].filter(Boolean).join(" "),placeholder:N,disabled:p,"aria-invalid":l||void 0,"aria-describedby":u,...D}),l&&e.jsx("span",{id:u,className:r.errorText,children:"Некорректное значение"})]})}a.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};const G={title:"Components/Input",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"Поле ввода с необязательной подписью, состояниями error и disabled. Ошибка подсвечивает поле и показывает текст «Некорректное значение». Принимает все стандартные атрибуты <input>."}}},args:{label:"Email",placeholder:"Введите email",error:!1,disabled:!1},argTypes:{label:{control:"text"},placeholder:{control:"text"},error:{control:"boolean"},disabled:{control:"boolean"}}},s={},o={args:{label:"Имя пользователя",placeholder:"Например, ivan_ivanov"}},t={args:{label:"Пароль",placeholder:"Введите пароль",error:!0,defaultValue:"123"}},d={args:{label:"Телефон",placeholder:"+7 (___) ___-__-__",disabled:!0}},n={render:()=>e.jsxs("div",{style:{display:"grid",gap:16,maxWidth:360},children:[e.jsx(a,{label:"Обычное поле",placeholder:"Введите текст"}),e.jsx(a,{label:"С ошибкой",placeholder:"Введите текст",error:!0,defaultValue:"Неверно"}),e.jsx(a,{label:"Отключённое",placeholder:"Недоступно",disabled:!0})]})};var m,_,b;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(b=(_=s.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var f,h,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Имя пользователя',
    placeholder: 'Например, ivan_ivanov'
  }
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,v,j;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Пароль',
    placeholder: 'Введите пароль',
    error: true,
    defaultValue: '123'
  }
}`,...(j=(v=t.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var y,I,S;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Телефон',
    placeholder: '+7 (___) ___-__-__',
    disabled: true
  }
}`,...(S=(I=d.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var T,V,E;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gap: 16,
    maxWidth: 360
  }}>\r
      <Input label="Обычное поле" placeholder="Введите текст" />\r
      <Input label="С ошибкой" placeholder="Введите текст" error defaultValue="Неверно" />\r
      <Input label="Отключённое" placeholder="Недоступно" disabled />\r
    </div>
}`,...(E=(V=n.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};const H=["Default","WithPlaceholder","ErrorState","Disabled","AllStates"];export{n as AllStates,s as Default,d as Disabled,t as ErrorState,o as WithPlaceholder,H as __namedExportsOrder,G as default};
