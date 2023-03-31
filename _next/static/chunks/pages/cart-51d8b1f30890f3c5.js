(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[190],{8086:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cart",function(){return r(7401)}])},2712:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(5893),a=r(7294),s=r(5882),i=r(9583),l=r(1664),c=r.n(l);let{primary:o}={primary:"#89bdf9"};function d(e){let[t,r]=(0,a.useState)(!1);(0,a.useEffect)(()=>{r(!0)},[]);let{context:{numberOfItemsInCart:s=0}}=e;return(0,n.jsx)("div",{children:(0,n.jsx)("div",{className:"fixed sm:top-53 right-24 desktop:right-flexiblemargin top-40 z-10",children:(0,n.jsxs)("div",{className:"flex flex-1 justify-end pr-4 relative",children:[(0,n.jsx)(c(),{href:"/cart","aria-label":"Cart",children:(0,n.jsx)(i.FeP,{})}),t&&s>Number(0)&&(0,n.jsx)(i.gbA,{color:o,size:12,suppressHydrationWarning:!0})]})})})}var m=function(e){return(0,n.jsx)(s.t,{children:(0,n.jsx)(s.D.Consumer,{children:t=>(0,n.jsx)(d,{...e,context:t})})})}},4931:function(e,t,r){"use strict";var n=r(5893);let a=e=>{let{src:t,...r}=e;return(0,n.jsx)("img",{src:t,...r})};t.Z=a},8362:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(5893);function a(e){let{increment:t,decrement:r,numberOfitems:a,hideQuantityLabel:s}=e;return(0,n.jsxs)("div",{className:"flex items-center",children:[!s&&(0,n.jsx)("div",{className:"px-2 text-xs",children:"QUANTITY"}),(0,n.jsx)("button",{className:" w-10 h-10 text-xl md:w-8 md:h-8 md:text-sm  cursor-pointer text-center border pb-.5 hover:bg-gray-900 hover:text-white focus:outline-none ",onClick:t,children:"+"}),(0,n.jsx)("p",{className:" w-10 h-10 pt-2 text-base md:w-8 md:h-8 md:pt-2 md:text-xs m-0 border-t border-b text-center",children:a}),(0,n.jsx)("button",{className:" w-10 h-10 text-2xl md:w-8 md:h-8 md:text-sm cursor-pointer text-center border pb-.5 hover:bg-gray-900 hover:text-white focus:outline-none ",onClick:r,children:"-"})]})}r(7294)},5882:function(e,t,r){"use strict";r.d(t,{D:function(){return o},t:function(){return m}});var n=r(4924),a=r(5893),s=r(9366),i=r(7294);let l="NEXT_ECOMMERCE_STARTER_",c={cart:[],numberOfItemsInCart:0,total:0},o=i.createContext();function d(e){let t=e.reduce((e,t)=>{let r=t.quantity;return e+JSON.parse(t.price)*r},0);return t}class m extends i.Component{componentDidMount(){{let e=window.localStorage.getItem(l);e||window.localStorage.setItem(l,JSON.stringify(c))}}render(){let e=c;{let t=window.localStorage.getItem(l);t&&(e=JSON.parse(t))}return(0,a.jsx)(o.Provider,{value:{...e,addToCart:this.addToCart,clearCart:this.clearCart,removeFromCart:this.removeFromCart,setItemQuantity:this.setItemQuantity},children:this.props.children})}constructor(...e){super(...e),(0,n.Z)(this,"setItemQuantity",e=>{let t=JSON.parse(window.localStorage.getItem(l)),{cart:r}=t,n=r.findIndex(t=>t.id===e.id);r[n].quantity=e.quantity,window.localStorage.setItem(l,JSON.stringify({cart:r,numberOfItemsInCart:r.length,total:d(r)})),this.forceUpdate()}),(0,n.Z)(this,"addToCart",e=>{let t=JSON.parse(window.localStorage.getItem(l)),{cart:r}=t;if(r.length){let t=r.findIndex(t=>t.id===e.id);t>=Number(0)?r[t].quantity=r[t].quantity+e.quantity:r.push(e)}else r.push(e);window.localStorage.setItem(l,JSON.stringify({cart:r,numberOfItemsInCart:r.length,total:d(r)})),(0,s.Am)("Successfully added item to cart!",{position:s.Am.POSITION.TOP_LEFT}),this.forceUpdate()}),(0,n.Z)(this,"removeFromCart",e=>{let t=JSON.parse(window.localStorage.getItem(l)),{cart:r}=t;r=r.filter(t=>t.id!==e.id),window.localStorage.setItem(l,JSON.stringify({cart:r,numberOfItemsInCart:r.length,total:d(r)})),this.forceUpdate()}),(0,n.Z)(this,"clearCart",()=>{window.localStorage.setItem(l,JSON.stringify(c)),this.forceUpdate()})}}},7401:function(e,t,r){"use strict";r.r(t);var n=r(5893),a=r(1664),s=r.n(a),i=r(7294),l=r(9583),c=r(5882),o=r(3598),d=r(3516),m=r(8362),u=r(4931),x=r(9008),f=r.n(x),h=r(4298),p=r.n(h),g=r(2712);let j=e=>{let{context:t}=e,[r,a]=(0,i.useState)(!1);(0,i.useEffect)(()=>{a(!0)},[]);let{numberOfItemsInCart:c,cart:x,removeFromCart:h,total:j,setItemQuantity:w}=t,y=c===Number(0);function v(e){e.quantity=e.quantity+1,w(e)}function N(e){1!==e.quantity&&(e.quantity=e.quantity-1,w(e))}return r?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g.Z,{}),(0,n.jsxs)("div",{className:"flex flex-col items-center pb-10",children:[(0,n.jsxs)(f(),{children:[(0,n.jsx)("title",{children:"Frost Fit - Cart"}),(0,n.jsx)("meta",{name:"description",content:"Frost Fit is a luxury sports apparel company that specializes in stylish and functional activewear for men and women. Shop our new arrivals and experience the perfect blend of performance and fashion."}),(0,n.jsx)("meta",{name:"keywords",content:"Frost Fit, sports apparel, luxury activewear, men's activewear, women's activewear, new arrivals, athletic wear, workout clothes, fitness clothing, gym clothes"}),(0,n.jsx)("meta",{property:"og:title",content:"Frost Fit: Luxury Sports Apparel for Men and Women"}),(0,n.jsx)("meta",{property:"og:description",content:"Shop our new arrivals and experience the perfect blend of performance and fashion."}),(0,n.jsx)("meta",{property:"og:image",content:"/logo.png"}),(0,n.jsx)("meta",{property:"og:url",content:"https://www.frostfit.com/"}),(0,n.jsx)("meta",{name:"twitter:card",content:"summary"}),(0,n.jsx)("meta",{name:"twitter:title",content:"Frost Fit: Luxury Sports Apparel for Men and Women"}),(0,n.jsx)("meta",{name:"twitter:description",content:"Shop our new arrivals and experience the perfect blend of performance and fashion."}),(0,n.jsx)("meta",{name:"twitter:image",content:"/logo.png"})]}),(0,n.jsx)(p(),{strategy:"afterInteractive",src:"https://www.googletagmanager.com/gtag/js?id=G-97CRPYM8B4",async:!0}),(0,n.jsx)(p(),{strategy:"afterInteractive",dangerouslySetInnerHTML:{__html:"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', 'G-97CRPYM8B4');\n          "}}),(0,n.jsxs)("div",{className:" flex flex-col w-full c_large:w-c_large ",children:[(0,n.jsx)("div",{className:"pt-10 pb-8",children:(0,n.jsx)("h1",{className:"text-5xl font-light",children:"Your Cart"})}),y?(0,n.jsx)("h3",{children:"No items in cart."}):(0,n.jsx)("div",{className:"flex flex-col",children:(0,n.jsx)("div",{children:x.map(e=>(0,n.jsxs)("div",{className:"border-b py-10",children:[(0,n.jsxs)("div",{className:"flex items-center hidden md:flex",children:[(0,n.jsx)(s(),{href:"/product/".concat((0,d.lV)(e.name)),"aria-label":e.name,children:(0,n.jsx)(u.Z,{className:"w-32 m-0",src:e.image,alt:e.name})}),(0,n.jsx)(s(),{href:"/product/".concat((0,d.lV)(e.name)),"aria-label":e.name,children:(0,n.jsx)("p",{className:" m-0 pl-10 text-gray-600 w-60 ",children:e.name})}),(0,n.jsx)("div",{className:"ml-4",children:(0,n.jsx)(m.Z,{numberOfitems:e.quantity,increment:()=>v(e),decrement:()=>N(e)})}),(0,n.jsx)("div",{className:"flex flex-1 justify-end",children:(0,n.jsx)("p",{className:"m-0 pl-10 text-gray-900 tracking-wider",children:o.Z+e.price})}),(0,n.jsx)("div",{role:"button",onClick:()=>h(e),className:" m-0 ml-10 text-gray-900 text-s cursor-pointer ",children:(0,n.jsx)(l.aHS,{})})]}),(0,n.jsxs)("div",{className:"flex items-center flex md:hidden",children:[(0,n.jsx)(s(),{href:"/product/".concat((0,d.lV)(e.name)),children:(0,n.jsx)(u.Z,{className:"w-32 m-0",src:e.image,alt:e.name})}),(0,n.jsxs)("div",{children:[(0,n.jsx)(s(),{href:"/product/".concat((0,d.lV)(e.name)),"aria-label":e.name,children:(0,n.jsx)("p",{className:" m-0 pl-6 text-gray-600 text-base ",children:e.name})}),(0,n.jsx)("div",{className:"ml-6 mt-4 mb-2",children:(0,n.jsx)(m.Z,{hideQuantityLabel:!0,numberOfitems:e.quantity,increment:()=>v(e),decrement:()=>N(e)})}),(0,n.jsx)("div",{className:"flex flex-1",children:(0,n.jsx)("p",{className:"text-lg m-0 pl-6 pt-4 text-gray-900 tracking-wider",children:o.Z+e.price})})]}),(0,n.jsx)("div",{role:"button",onClick:()=>h(e),className:" m-0 ml-10 text-gray-900 text-s cursor-pointer mr-2 ",children:(0,n.jsx)(l.aHS,{})})]})]},e.id))})}),(0,n.jsxs)("div",{className:"flex flex-1 justify-end py-8",children:[(0,n.jsx)("p",{className:"text-sm pr-10",children:"Total"}),(0,n.jsx)("p",{className:"font-semibold tracking-wide",children:o.Z+j.toFixed(2)})]}),!y&&(0,n.jsx)(s(),{href:"/checkout",className:"flex flex-1 justify-end","aria-label":"Check out",children:(0,n.jsxs)("div",{className:"cursor-pointer flex items-center",children:[(0,n.jsx)("p",{className:"text-gray-600 text-sm mr-2",children:"Proceed to check out"}),(0,n.jsx)(l.e7O,{className:"text-gray-600"})]})})]})]})]}):null};t.default=function(e){return(0,n.jsx)(c.t,{children:(0,n.jsx)(c.D.Consumer,{children:t=>(0,n.jsx)(j,{...e,context:t})})})}},3598:function(e,t){"use strict";t.Z="$"},9008:function(e,t,r){e.exports=r(2636)},8357:function(e,t,r){"use strict";r.d(t,{w_:function(){return c}});var n=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=n.createContext&&n.createContext(a),i=function(){return(i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};function c(e){return function(t){return n.createElement(o,i({attr:i({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,i({key:r},t.attr),e(t.child))})}(e.child))}}function o(e){var t=function(t){var r,a=e.attr,s=e.size,c=e.title,o=l(e,["attr","size","title"]),d=s||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,o,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==s?n.createElement(s.Consumer,null,function(e){return t(e)}):t(a)}},4924:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{Z:function(){return n}})}},function(e){e.O(0,[445,774,888,179],function(){return e(e.s=8086)}),_N_E=e.O()}]);