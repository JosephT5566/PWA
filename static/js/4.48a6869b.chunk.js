(this.webpackJsonppwa=this.webpackJsonppwa||[]).push([[4],{412:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var o=r(26),a=r(1),n=r.n(a),i=r(346),c=r(83),s=Object(i.a)((function(e){var t;return{title:(t={display:"flex",flexDirection:"column"},Object(o.a)(t,e.breakpoints.up("lg"),{alignItems:"left"}),Object(o.a)(t,e.breakpoints.down("md"),{alignItems:"center"}),t)}}));function p(e){var t=e.title,r=s();return n.a.createElement("div",{className:r.title},n.a.createElement(c.a,{variant:"h4"},t))}},421:function(e,t,r){"use strict";var o=r(8),a=r(4),n=r(1),i=(r(0),r(10)),c=r(12),s=n.forwardRef((function(e,t){var r=e.classes,c=e.className,s=e.component,p=void 0===s?"div":s,l=e.square,u=void 0!==l&&l,m=e.elevation,d=void 0===m?1:m,f=e.variant,b=void 0===f?"elevation":f,h=Object(o.a)(e,["classes","className","component","square","elevation","variant"]);return n.createElement(p,Object(a.a)({className:Object(i.a)(r.root,c,"outlined"===b?r.outlined:r["elevation".concat(d)],!u&&r.rounded),ref:t},h))}));t.a=Object(c.a)((function(e){var t={};return e.shadows.forEach((function(e,r){t["elevation".concat(r)]={boxShadow:e}})),Object(a.a)({root:{backgroundColor:e.palette.background.paper,color:e.palette.text.primary,transition:e.transitions.create("box-shadow")},rounded:{borderRadius:e.shape.borderRadius},outlined:{border:"1px solid ".concat(e.palette.divider)}},t)}),{name:"MuiPaper"})(s)},423:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var o=r(26),a=r(1),n=r.n(a),i=r(346),c=r(445),s=r(429),p=r(441),l=r(440),u=r(83),m=Object(i.a)((function(e){return{card:{width:"100%",height:"100%",boxShadow:"0 8px 24px 0 rgba(0,0,0,0.12)",borderRadius:"1.5rem",overflow:"visible"},actionArea:{height:"100%",borderRadius:"1.5rem"},box:{height:"100%",overflow:"hidden",borderRadius:"1.5rem","&:after":{content:'""',position:"absolute",bottom:0,display:"block",width:"100%",height:"100%",background:"rgba(0,0,0,0.2)"}},media:{height:"100%"},content:{position:"absolute",display:"flex",justifyContent:"center",alignItems:"center",top:0,width:"100%",height:"100%"},title:Object(o.a)({color:"#fff",zIndex:1,fontSize:"2rem"},e.breakpoints.down("xs"),{fontSize:"1rem"})}}));function d(e){var t=e.title,r=e.image,o=e.onClick,a=m();return n.a.createElement(s.a,{className:a.card},n.a.createElement(l.a,{className:a.actionArea,onClick:o},n.a.createElement(c.a,{className:a.box,position:"relative"},n.a.createElement(p.a,{className:a.media,component:"img",image:r}),n.a.createElement("div",{className:a.content},n.a.createElement(u.a,{variant:"h2",align:"center",className:a.title},t)))))}},429:function(e,t,r){"use strict";var o=r(4),a=r(8),n=r(1),i=(r(0),r(10)),c=r(421),s=r(12),p=n.forwardRef((function(e,t){var r=e.classes,s=e.className,p=e.raised,l=void 0!==p&&p,u=Object(a.a)(e,["classes","className","raised"]);return n.createElement(c.a,Object(o.a)({className:Object(i.a)(r.root,s),elevation:l?8:1,ref:t},u))}));t.a=Object(s.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(p)},440:function(e,t,r){"use strict";var o=r(4),a=r(8),n=r(1),i=(r(0),r(10)),c=r(12),s=r(145),p=n.forwardRef((function(e,t){var r=e.children,c=e.classes,p=e.className,l=e.focusVisibleClassName,u=Object(a.a)(e,["children","classes","className","focusVisibleClassName"]);return n.createElement(s.a,Object(o.a)({className:Object(i.a)(c.root,p),focusVisibleClassName:Object(i.a)(l,c.focusVisible),ref:t},u),r,n.createElement("span",{className:c.focusHighlight}))}));t.a=Object(c.a)((function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}}),{name:"MuiCardActionArea"})(p)},441:function(e,t,r){"use strict";var o=r(4),a=r(8),n=r(1),i=(r(0),r(10)),c=r(12),s=["video","audio","picture","iframe","img"],p=n.forwardRef((function(e,t){var r=e.children,c=e.classes,p=e.className,l=e.component,u=void 0===l?"div":l,m=e.image,d=e.src,f=e.style,b=Object(a.a)(e,["children","classes","className","component","image","src","style"]),h=-1!==s.indexOf(u),g=!h&&m?Object(o.a)({backgroundImage:'url("'.concat(m,'")')},f):f;return n.createElement(u,Object(o.a)({className:Object(i.a)(c.root,p,h&&c.media,-1!=="picture img".indexOf(u)&&c.img),ref:t,style:g,src:h?m||d:void 0},b),r)}));t.a=Object(c.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(p)},445:function(e,t,r){"use strict";var o=r(61),a=r(4),n=(r(0),r(85));var i=function(e){var t=function(t){var r=e(t);return t.css?Object(a.a)(Object(a.a)({},Object(n.a)(r,e(Object(a.a)({theme:t.theme},t.css)))),function(e,t){var r={};return Object.keys(e).forEach((function(o){-1===t.indexOf(o)&&(r[o]=e[o])})),r}(t.css,[e.filterProps])):r};return t.propTypes={},t.filterProps=["css"].concat(Object(o.a)(e.filterProps)),t};var c=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var o=function(e){return t.reduce((function(t,r){var o=r(e);return o?Object(n.a)(t,o):t}),{})};return o.propTypes={},o.filterProps=t.reduce((function(e,t){return e.concat(t.filterProps)}),[]),o},s=r(38),p=r(152);function l(e,t){return t&&"string"===typeof t?t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:null}),e):null}var u=function(e){var t=e.prop,r=e.cssProperty,o=void 0===r?e.prop:r,a=e.themeKey,n=e.transform,i=function(e){if(null==e[t])return null;var r=e[t],i=l(e.theme,a)||{};return Object(p.a)(e,r,(function(e){var t;return"function"===typeof i?t=i(e):Array.isArray(i)?t=i[e]||e:(t=l(i,e)||e,n&&(t=n(t))),!1===o?t:Object(s.a)({},o,t)}))};return i.propTypes={},i.filterProps=[t],i};function m(e){return"number"!==typeof e?e:"".concat(e,"px solid")}var d=c(u({prop:"border",themeKey:"borders",transform:m}),u({prop:"borderTop",themeKey:"borders",transform:m}),u({prop:"borderRight",themeKey:"borders",transform:m}),u({prop:"borderBottom",themeKey:"borders",transform:m}),u({prop:"borderLeft",themeKey:"borders",transform:m}),u({prop:"borderColor",themeKey:"palette"}),u({prop:"borderRadius",themeKey:"shape"})),f=c(u({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),u({prop:"display"}),u({prop:"overflow"}),u({prop:"textOverflow"}),u({prop:"visibility"}),u({prop:"whiteSpace"})),b=c(u({prop:"flexBasis"}),u({prop:"flexDirection"}),u({prop:"flexWrap"}),u({prop:"justifyContent"}),u({prop:"alignItems"}),u({prop:"alignContent"}),u({prop:"order"}),u({prop:"flex"}),u({prop:"flexGrow"}),u({prop:"flexShrink"}),u({prop:"alignSelf"}),u({prop:"justifyItems"}),u({prop:"justifySelf"})),h=c(u({prop:"gridGap"}),u({prop:"gridColumnGap"}),u({prop:"gridRowGap"}),u({prop:"gridColumn"}),u({prop:"gridRow"}),u({prop:"gridAutoFlow"}),u({prop:"gridAutoColumns"}),u({prop:"gridAutoRows"}),u({prop:"gridTemplateColumns"}),u({prop:"gridTemplateRows"}),u({prop:"gridTemplateAreas"}),u({prop:"gridArea"})),g=c(u({prop:"position"}),u({prop:"zIndex",themeKey:"zIndex"}),u({prop:"top"}),u({prop:"right"}),u({prop:"bottom"}),u({prop:"left"})),v=c(u({prop:"color",themeKey:"palette"}),u({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),y=u({prop:"boxShadow",themeKey:"shadows"});function O(e){return e<=1?"".concat(100*e,"%"):e}var j=u({prop:"width",transform:O}),x=u({prop:"maxWidth",transform:O}),w=u({prop:"minWidth",transform:O}),N=u({prop:"height",transform:O}),E=u({prop:"maxHeight",transform:O}),C=u({prop:"minHeight",transform:O}),k=(u({prop:"size",cssProperty:"width",transform:O}),u({prop:"size",cssProperty:"height",transform:O}),c(j,x,w,N,E,C,u({prop:"boxSizing"}))),R=r(406),P=c(u({prop:"fontFamily",themeKey:"typography"}),u({prop:"fontSize",themeKey:"typography"}),u({prop:"fontStyle",themeKey:"typography"}),u({prop:"fontWeight",themeKey:"typography"}),u({prop:"letterSpacing"}),u({prop:"lineHeight"}),u({prop:"textAlign"})),K=r(8),A=r(1),S=r.n(A),T=r(10),I=r(88),z=r.n(I),H=r(349);function V(e,t){var r={};return Object.keys(e).forEach((function(o){-1===t.indexOf(o)&&(r[o]=e[o])})),r}var M=r(62),B=function(e){var t=function(e){return function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=r.name,n=Object(K.a)(r,["name"]);var i,c=o,s="function"===typeof t?function(e){return{root:function(r){return t(Object(a.a)({theme:e},r))}}}:{root:t},p=Object(H.a)(s,Object(a.a)({Component:e,name:o||e.displayName,classNamePrefix:c},n));t.filterProps&&(i=t.filterProps,delete t.filterProps),t.propTypes&&(t.propTypes,delete t.propTypes);var l=S.a.forwardRef((function(t,r){var o=t.children,n=t.className,c=t.clone,s=t.component,l=Object(K.a)(t,["children","className","clone","component"]),u=p(t),m=Object(T.a)(u.root,n),d=l;if(i&&(d=V(d,i)),c)return S.a.cloneElement(o,Object(a.a)({className:Object(T.a)(o.props.className,m)},d));if("function"===typeof o)return o(Object(a.a)({className:m},d));var f=s||e;return S.a.createElement(f,Object(a.a)({ref:r,className:m},d),o)}));return z()(l,e),l}}(e);return function(e,r){return t(e,Object(a.a)({defaultTheme:M.a},r))}},G=i(c(d,f,b,h,g,v,y,k,R.b,P)),W=B("div")(G,{name:"MuiBox"});t.a=W},462:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return m}));var o=r(1),a=r.n(o),n=r(35),i=r(412),c=r(423),s=r(346),p=r(389),l=r(396),u=Object(s.a)((function(){return{content:{padding:"10px 0"},gridItem:{maxHeight:"10em"}}}));function m(){var e=u(),t=Object(n.d)(),r=t.getCurrentValue().url.pathname;return a.a.createElement("div",null,a.a.createElement(i.a,{title:"Data"}),a.a.createElement(p.a,null),a.a.createElement("div",{className:"ui container"},a.a.createElement(l.a,{container:!0,className:e.content,spacing:3,justify:"center"},a.a.createElement(l.a,{item:!0,className:e.gridItem},a.a.createElement(c.a,{title:"BTC",image:"https://source.unsplash.com/ON1ryil6C8k/640x426",onClick:function(){return t.navigate("".concat(r,"/BTC"))}})),a.a.createElement(l.a,{item:!0,className:e.gridItem},a.a.createElement(c.a,{title:"ETH",image:"https://source.unsplash.com/0bO235Rhqec/640x426",onClick:function(){return console.log("123")}})))))}}}]);
//# sourceMappingURL=4.48a6869b.chunk.js.map