import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as i}from"./index-BioFo8Zg.js";import{r as j}from"./index-CncNTZwy.js";import{B as f}from"./Button-B1-G--by.js";import"./index-yBjzXJbu.js";import"./index-B6ujFmsw.js";const k="_overlay_ski0u_1",O="_modal_ski0u_12",E="_header_ski0u_23",B="_title_ski0u_32",C="_closeButton_ski0u_38",b="_content_ski0u_57",s={overlay:k,modal:O,header:E,title:B,closeButton:C,content:b};function c({isOpen:r,onClose:t,title:n,children:v}){if(i.useEffect(()=>{if(!r)return;const o=_=>{_.key==="Escape"&&t()},x=document.body.style.overflow;return document.body.style.overflow="hidden",document.addEventListener("keydown",o),()=>{document.body.style.overflow=x,document.removeEventListener("keydown",o)}},[r,t]),!r)return null;const g=o=>{o.target===o.currentTarget&&t()};return j.createPortal(e.jsx("div",{className:s.overlay,onClick:g,role:"presentation",children:e.jsxs("div",{className:s.modal,role:"dialog","aria-modal":"true","aria-label":n,children:[e.jsxs("div",{className:s.header,children:[n&&e.jsx("h2",{className:s.title,children:n}),e.jsx("button",{type:"button",className:s.closeButton,onClick:t,"aria-label":"Закрыть модальное окно",children:"×"})]}),e.jsx("div",{className:s.content,children:v})]})}),document.body)}const L={title:"Components/Modal",component:c,tags:["autodocs"],parameters:{docs:{description:{component:"Модальное окно закрывается по клику на оверлей, по клавише Escape и по кнопке закрытия."}}}},a={render:r=>{const[t,n]=i.useState(!1);return e.jsxs("div",{children:[e.jsx(f,{onClick:()=>n(!0),children:"Открыть модальное окно"}),e.jsx(c,{...r,isOpen:t,onClose:()=>n(!1)})]})},args:{title:"Подтверждение действия",children:e.jsx("div",{style:{display:"grid",gap:12},children:e.jsx("p",{style:{margin:0},children:"Это пример модального окна. Нажмите на оверлей, кнопку закрытия или клавишу Escape, чтобы закрыть его."})})}},l={render:r=>{const[t,n]=i.useState(!0);return e.jsxs("div",{children:[e.jsx(f,{onClick:()=>n(!0),children:"Показать снова"}),e.jsx(c,{...r,isOpen:t,onClose:()=>n(!1)})]})},args:{children:e.jsx("p",{style:{margin:0},children:"Контент модального окна без заголовка."})}};var d,u,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div>\r
        <Button onClick={() => setOpen(true)}>Открыть модальное окно</Button>\r
        <Modal {...args} isOpen={open} onClose={() => setOpen(false)} />\r
      </div>;
  },
  args: {
    title: 'Подтверждение действия',
    children: <div style={{
      display: 'grid',
      gap: 12
    }}>\r
        <p style={{
        margin: 0
      }}>\r
          Это пример модального окна. Нажмите на оверлей, кнопку закрытия или клавишу Escape, чтобы закрыть его.\r
        </p>\r
      </div>
  }
}`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,h,y;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(true);
    return <div>\r
        <Button onClick={() => setOpen(true)}>Показать снова</Button>\r
        <Modal {...args} isOpen={open} onClose={() => setOpen(false)} />\r
      </div>;
  },
  args: {
    children: <p style={{
      margin: 0
    }}>Контент модального окна без заголовка.</p>
  }
}`,...(y=(h=l.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const W=["Default","WithoutTitle"];export{a as Default,l as WithoutTitle,W as __namedExportsOrder,L as default};
