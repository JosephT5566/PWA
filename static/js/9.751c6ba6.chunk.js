(this.webpackJsonppwa=this.webpackJsonppwa||[]).push([[9],{425:function(e,t,a){"use strict";a.d(t,"a",(function(){return x}));var n=a(1),l=a.n(n),r=a(147),i=a(473),c=a(466),s=a(467),u=a(430),o=a.n(u),m=a(431),p=a.n(m);var d=function(e){var t=e.className,a=e.label,u=Object(n.useState)(""),m=Object(r.a)(u,2),d=m[0],y=m[1],x=Object(n.useState)(!1),f=Object(r.a)(x,2),b=f[0],v=f[1],E={endAdornment:l.a.createElement(c.a,null,l.a.createElement(s.a,{onClick:function(){v(!b)}},b?l.a.createElement(o.a,null):l.a.createElement(p.a,null)))};return l.a.createElement(i.a,{className:t,fullWidth:!0,InputProps:E,variant:"outlined",InputLabelProps:{shrink:!0},type:b?"text":"password",label:a,onChange:function(e){y(e.target.value)},value:d})};var y=function(e){var t=e.className,a=e.label,c=e.type,s=Object(n.useState)(""),u=Object(r.a)(s,2),o=u[0],m=u[1];return l.a.createElement(i.a,{className:t,fullWidth:!0,variant:"outlined",InputLabelProps:{shrink:!0},label:a,type:c,onChange:function(e){m(e.target.value)},value:o})};function x(e){var t=e.className,a=e.label,n=e.type;switch(n){case"password":return l.a.createElement(d,{className:t,label:a});default:return l.a.createElement(y,{className:t,label:a,type:n})}}},465:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a(1),l=a.n(n),r=a(425),i=a(149),c=a(346),s=a(348),u=a(389),o=a(474),m=a(469),p=Object(c.a)((function(){return{textFieldContainer:{display:"flex",flexDirection:"column",alignItems:"center",margin:"1em 0"},textField:{margin:"0.5em 0"},contentContainer:{margin:"1em"}}}));function d(){var e=p();return l.a.createElement("div",null,l.a.createElement(i.a,{title:"Basic Message"}),l.a.createElement("div",null,l.a.createElement(u.a,null)),l.a.createElement("div",{className:e.contentContainer},l.a.createElement(o.a,{variant:"outlined",severity:"warning"},l.a.createElement(m.a,null,"Warning"),"Once KYC is certified, you ",l.a.createElement("strong",null,"can not")," modify information like name or address by yourself"),l.a.createElement("div",{className:e.textFieldContainer},[{text:"E-mail",type:"text"},{text:"First name",type:"text"},{text:"Last name",type:"text"},{text:"Address",type:"text"},{text:"Postal",type:"text"},{text:"County",type:"text"},{text:"City",type:"text"},{text:"Country",type:"text"},{text:"Phone",type:"text"},{text:"Birthday",type:"date"}].map((function(t,a){return l.a.createElement(r.a,{className:e.textField,label:t.text,type:t.type,key:a})}))),l.a.createElement(s.a,{variant:"contained",color:"primary"},"Submit")))}}}]);
//# sourceMappingURL=9.751c6ba6.chunk.js.map