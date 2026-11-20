import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{fn as w}from"./dist-DH-M5T-F.js";import{B as a}from"./Button-B1-G--by.js";import"./index-yBjzXJbu.js";const D={title:"Components/Button",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"Кнопка с тремя вариантами оформления (primary, secondary, outline) и тремя размерами (sm, md, lg). Поддерживает состояние disabled и стандартные атрибуты <button>."}}},args:{children:"Кнопка",onClick:w(),disabled:!1},argTypes:{variant:{control:"select",options:["primary","secondary","outline"]},size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"},onClick:{action:"clicked"}}},s={args:{variant:"primary",size:"md",children:"Primary"}},n={args:{variant:"secondary",size:"md",children:"Secondary"}},t={args:{variant:"outline",size:"md",children:"Outline"}},i={render:e=>r.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"},children:[r.jsx(a,{...e,size:"sm",children:"Small"}),r.jsx(a,{...e,size:"md",children:"Medium"}),r.jsx(a,{...e,size:"lg",children:"Large"})]}),args:{variant:"primary"}},o={render:e=>r.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"},children:[r.jsx(a,{...e,variant:"primary",children:"Primary"}),r.jsx(a,{...e,variant:"secondary",children:"Secondary"}),r.jsx(a,{...e,variant:"outline",children:"Outline"})]}),args:{size:"md"}},d={render:e=>r.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"},children:[r.jsx(a,{...e,variant:"primary",disabled:!0,children:"Primary"}),r.jsx(a,{...e,variant:"secondary",disabled:!0,children:"Secondary"}),r.jsx(a,{...e,variant:"outline",disabled:!0,children:"Outline"})]}),args:{size:"md"}};var l,c,m;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Primary'
  }
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,u,y;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    size: 'md',
    children: 'Secondary'
  }
}`,...(y=(u=n.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var g,v,x;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    size: 'md',
    children: 'Outline'
  }
}`,...(x=(v=t.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var B,f,h;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>\r
      <Button {...args} size="sm">Small</Button>\r
      <Button {...args} size="md">Medium</Button>\r
      <Button {...args} size="lg">Large</Button>\r
    </div>,
  args: {
    variant: 'primary'
  }
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var z,S,j;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>\r
      <Button {...args} variant="primary">Primary</Button>\r
      <Button {...args} variant="secondary">Secondary</Button>\r
      <Button {...args} variant="outline">Outline</Button>\r
    </div>,
  args: {
    size: 'md'
  }
}`,...(j=(S=o.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var b,O,P;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>\r
      <Button {...args} variant="primary" disabled>Primary</Button>\r
      <Button {...args} variant="secondary" disabled>Secondary</Button>\r
      <Button {...args} variant="outline" disabled>Outline</Button>\r
    </div>,
  args: {
    size: 'md'
  }
}`,...(P=(O=d.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};const E=["Primary","Secondary","Outline","Sizes","Variants","Disabled"];export{d as Disabled,t as Outline,s as Primary,n as Secondary,i as Sizes,o as Variants,E as __namedExportsOrder,D as default};
