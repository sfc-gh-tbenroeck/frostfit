_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"IF/j":function(e,t,r){"use strict";function n(e){var t="\xe0\xe1\xe4\xe2\xe3\xe5\u0103\xe6\u0105\xe7\u0107\u010d\u0111\u010f\xe8\xe9\u011b\u0117\xeb\xea\u0119\u011f\u01f5\u1e27\xec\xed\xef\xee\u012f\u0142\u1e3f\u01f9\u0144\u0148\xf1\xf2\xf3\xf6\xf4\u0153\xf8\u1e55\u0155\u0159\xdf\u015f\u015b\u0161\u0219\u0165\u021b\xf9\xfa\xfc\xfb\u01d8\u016f\u0171\u016b\u0173\u1e83\u1e8d\xff\xfd\u017a\u017e\u017c\xb7/_,:;",r=new RegExp(t.split("").join("|"),"g");return e.toString().toLowerCase().replace(/\s+/g,"-").replace(r,(function(e){return"aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------".charAt(t.indexOf(e))})).replace(/&/g,"-and-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}function c(e){for(var t=e.split("-"),r=0;r<t.length;r++){var n=t[r];t[r]=n.charAt(0).toUpperCase()+n.slice(1)}return t.join(" ")}function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;return e.length<=t?e:e.substring(0,t)+"..."}r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return c})),r.d(t,"a",(function(){return a}))},QQR7:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("nKUr");r("q1tI");function c(e){var t=e.increment,r=e.decrement,c=e.numberOfitems,a=e.hideQuantityLabel;return Object(n.jsxs)("div",{className:"flex items-center",children:[!a&&Object(n.jsx)("div",{className:"px-2 text-xs",children:"QUANTITY"}),Object(n.jsx)("button",{className:" w-10 h-10 text-xl md:w-8 md:h-8 md:text-sm  cursor-pointer text-center border pb-.5 hover:bg-gray-900 hover:text-white focus:outline-none ",onClick:t,children:"+"}),Object(n.jsx)("p",{className:" w-10 h-10 pt-2 text-base md:w-8 md:h-8 md:pt-2 md:text-xs m-0 border-t border-b text-center",children:c}),Object(n.jsx)("button",{className:" w-10 h-10 text-2xl md:w-8 md:h-8 md:text-sm cursor-pointer text-center border pb-.5 hover:bg-gray-900 hover:text-white focus:outline-none ",onClick:r,children:"-"})]})}},YQMk:function(e,t,r){"use strict";r.r(t);var n=r("rePB"),c=r("nKUr"),a=r("YFqc"),s=r.n(a),i=r("q1tI"),o=r("ma3e"),l=r("VnCb"),j=r("fL5F"),b=r("IF/j"),u=r("QQR7"),d=r("xY5u"),m=r("g4pe"),x=r.n(m),p=r("d9Pb");function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=function(e){var t=e.context,r=Object(i.useState)(!1),n=r[0],a=r[1];Object(i.useEffect)((function(){a(!0)}),[]);var l=t.numberOfItemsInCart,m=t.cart,f=t.removeFromCart,O=t.total,h=t.setItemQuantity,g=l===Number(0);function y(e){e.quantity=e.quantity+1,h(e)}function w(e){1!==e.quantity&&(e.quantity=e.quantity-1,h(e))}return n?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(p.a,{}),Object(c.jsxs)("div",{className:"flex flex-col items-center pb-10",children:[Object(c.jsxs)(x.a,{children:[Object(c.jsx)("title",{children:"Frost Fit - Cart"}),Object(c.jsx)("meta",{name:"description",content:"Frost Fit is a luxury sports apparel company that specializes in stylish and functional activewear for men and women. Shop our new arrivals and experience the perfect blend of performance and fashion."}),Object(c.jsx)("meta",{name:"keywords",content:"Frost Fit, sports apparel, luxury activewear, men's activewear, women's activewear, new arrivals, athletic wear, workout clothes, fitness clothing, gym clothes"}),Object(c.jsx)("meta",{property:"og:title",content:"Frost Fit: Luxury Sports Apparel for Men and Women"}),Object(c.jsx)("meta",{property:"og:description",content:"Shop our new arrivals and experience the perfect blend of performance and fashion."}),Object(c.jsx)("meta",{property:"og:image",content:"/logo.png"}),Object(c.jsx)("meta",{property:"og:url",content:"https://www.frostfit.com/"}),Object(c.jsx)("meta",{name:"twitter:card",content:"summary"}),Object(c.jsx)("meta",{name:"twitter:title",content:"Frost Fit: Luxury Sports Apparel for Men and Women"}),Object(c.jsx)("meta",{name:"twitter:description",content:"Shop our new arrivals and experience the perfect blend of performance and fashion."}),Object(c.jsx)("meta",{name:"twitter:image",content:"/logo.png"})]}),Object(c.jsxs)("div",{className:" flex flex-col w-full c_large:w-c_large ",children:[Object(c.jsx)("div",{className:"pt-10 pb-8",children:Object(c.jsx)("h1",{className:"text-5xl font-light",children:"Your Cart"})}),g?Object(c.jsx)("h3",{children:"No items in cart."}):Object(c.jsx)("div",{className:"flex flex-col",children:Object(c.jsx)("div",{children:m.map((function(e){return Object(c.jsxs)("div",{className:"border-b py-10",children:[Object(c.jsxs)("div",{className:"flex items-center hidden md:flex",children:[Object(c.jsx)(s.a,{href:"/product/".concat(Object(b.b)(e.name)),children:Object(c.jsx)("a",{"aria-label":e.name,children:Object(c.jsx)(d.a,{className:"w-32 m-0",src:e.image,alt:e.name})})}),Object(c.jsx)(s.a,{href:"/product/".concat(Object(b.b)(e.name)),children:Object(c.jsx)("a",{"aria-label":e.name,children:Object(c.jsx)("p",{className:" m-0 pl-10 text-gray-600 w-60 ",children:e.name})})}),Object(c.jsx)("div",{className:"ml-4",children:Object(c.jsx)(u.a,{numberOfitems:e.quantity,increment:function(){return y(e)},decrement:function(){return w(e)}})}),Object(c.jsx)("div",{className:"flex flex-1 justify-end",children:Object(c.jsx)("p",{className:"m-0 pl-10 text-gray-900 tracking-wider",children:j.a+e.price})}),Object(c.jsx)("div",{role:"button",onClick:function(){return f(e)},className:" m-0 ml-10 text-gray-900 text-s cursor-pointer ",children:Object(c.jsx)(o.e,{})})]}),Object(c.jsxs)("div",{className:"flex items-center flex md:hidden",children:[Object(c.jsx)(s.a,{href:"/product/".concat(Object(b.b)(e.name)),children:Object(c.jsx)("a",{children:Object(c.jsx)(d.a,{className:"w-32 m-0",src:e.image,alt:e.name})})}),Object(c.jsxs)("div",{children:[Object(c.jsx)(s.a,{href:"/product/".concat(Object(b.b)(e.name)),children:Object(c.jsx)("a",{"aria-label":e.name,children:Object(c.jsx)("p",{className:" m-0 pl-6 text-gray-600 text-base ",children:e.name})})}),Object(c.jsx)("div",{className:"ml-6 mt-4 mb-2",children:Object(c.jsx)(u.a,{hideQuantityLabel:!0,numberOfitems:e.quantity,increment:function(){return y(e)},decrement:function(){return w(e)}})}),Object(c.jsx)("div",{className:"flex flex-1",children:Object(c.jsx)("p",{className:"text-lg m-0 pl-6 pt-4 text-gray-900 tracking-wider",children:j.a+e.price})})]}),Object(c.jsx)("div",{role:"button",onClick:function(){return f(e)},className:" m-0 ml-10 text-gray-900 text-s cursor-pointer mr-2 ",children:Object(c.jsx)(o.e,{})})]})]},e.id)}))})}),Object(c.jsxs)("div",{className:"flex flex-1 justify-end py-8",children:[Object(c.jsx)("p",{className:"text-sm pr-10",children:"Total"}),Object(c.jsx)("p",{className:"font-semibold tracking-wide",children:j.a+O.toFixed(2)})]}),!g&&Object(c.jsx)(s.a,{href:"/checkout",className:"flex flex-1 justify-end",children:Object(c.jsx)("a",{"aria-label":"Check out",children:Object(c.jsxs)("div",{className:"cursor-pointer flex items-center",children:[Object(c.jsx)("p",{className:"text-gray-600 text-sm mr-2",children:"Proceed to check out"}),Object(c.jsx)(o.c,{className:"text-gray-600"})]})})})]})]})]}):null};t.default=function(e){return Object(c.jsx)(l.a,{children:Object(c.jsx)(l.b.Consumer,{children:function(t){return Object(c.jsx)(h,O(O({},e),{},{context:t}))}})})}},ahkM:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cart",function(){return r("YQMk")}])},d9Pb:function(e,t,r){"use strict";var n=r("rePB"),c=r("nKUr"),a=r("q1tI"),s=r("VnCb"),i=r("ma3e"),o=r("YFqc"),l=r.n(o);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e){var t=Object(a.useState)(!1),r=t[0],n=t[1];Object(a.useEffect)((function(){n(!0)}),[]);var s=e.context.numberOfItemsInCart,o=void 0===s?0:s;return Object(c.jsx)("div",{children:Object(c.jsx)("div",{className:"fixed sm:top-53 right-24 desktop:right-flexiblemargin top-40 z-10",children:Object(c.jsxs)("div",{className:"flex flex-1 justify-end pr-4 relative",children:[Object(c.jsx)(l.a,{href:"/cart",children:Object(c.jsx)("a",{"aria-label":"Cart",children:Object(c.jsx)(i.d,{})})}),r&&o>Number(0)&&Object(c.jsx)(i.a,{color:"#89bdf9",size:12,suppressHydrationWarning:!0})]})})})}t.a=function(e){return Object(c.jsx)(s.a,{children:Object(c.jsx)(s.b.Consumer,{children:function(t){return Object(c.jsx)(u,b(b({},e),{},{context:t}))}})})}},fL5F:function(e,t,r){"use strict";t.a="$"}},[["ahkM",0,2,3,1,4,5]]]);