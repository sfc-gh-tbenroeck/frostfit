(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[724],{2216:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/personal_analytics",function(){return n(7717)}])},7717:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var a=n(5893),o=n(7294),s=n(9366);let l={GoogleAnalytics:{keys:["ga_gtag"],labels:["Google Tag Id"],scriptId:"GoogleAnalytics_script",scripts:[{isCode:!1,async:!0,getContent:()=>"https://www.googletagmanager.com/gtag/js?id=".concat(localStorage.getItem("ga_gtag"))},{isCode:!0,getContent:()=>"\nwindow.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', '".concat(localStorage.getItem("ga_gtag"),"');\n")}]},SnowplowAnalytics:{keys:["sp_collector_url","sp_app_id"],labels:["Collector URL","App Id"],scriptId:"SnowplowAnalytics_script",scripts:[{isCode:!0,async:!1,getContent:()=>'\n;(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalSnowplowNamespace=p.GlobalSnowplowNamespace||[];\np.GlobalSnowplowNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments)\n};p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;\nn.src=w;g.parentNode.insertBefore(n,g)}}(window,document,"script","'.concat(window.location.origin,"/scripts/sp.js\",\"snowplow\"));\n\nwindow.snowplow('newTracker', 'sp1', '").concat(localStorage.getItem("sp_collector_url"),"', {\n  appId: '").concat(localStorage.getItem("sp_app_id"),"',\n  discoverRootDomain: true,\n  cookieSameSite: 'Lax',\n  contexts: {\n      performanceTiming: true\n  }\n});\n\nwindow.snowplow('enableActivityTracking', {\n  minimumVisitLength: 30,\n  heartbeatDelay: 30\n});\n\nwindow.snowplow('enableLinkClickTracking');\nwindow.snowplow('trackPageView');\n")}]}};let Personal_Analytics=class Personal_Analytics extends o.Component{componentDidMount(){let e=window.location.origin+"?share";this.setState(Object.entries(l).reduce((t,n)=>{let[a,o]=n;return o.keys.forEach(n=>{let a=localStorage.getItem(n)||"";t[n]=a,a&&(e+="&".concat(n,"=").concat(a))}),t},{})),document.getElementById("linkToShare").innerHTML=e}renderFormFields(){return Object.entries(l).map(e=>{let[t,n]=e;return(0,a.jsxs)("div",{className:"mb-4 pt-5",children:[(0,a.jsx)("h2",{className:"text-xl font-semibold mb-2",children:t.replace(/([A-Z])/g," $1").trim()}),n.keys.map((e,t)=>(0,a.jsxs)("div",{children:[(0,a.jsx)("label",{className:"block mb-2",children:n.labels?n.labels[t]:n.label}),(0,a.jsx)("input",{type:"text",name:e,value:this.state[e]||"",onChange:this.handleInputChange,className:"w-full px-3 py-2 border rounded"})]},e))]},t)})}render(){return(0,a.jsx)("div",{className:"flex flex-col items-center justify-center p-5",children:(0,a.jsxs)("div",{className:"w-full max-w-2xl p-5 border rounded shadow",children:[(0,a.jsx)("h1",{className:"text-5xl font-light mb-5",children:"Analytics Settings"}),(0,a.jsx)("p",{id:"linkToShare"}),this.renderFormFields(),(0,a.jsx)("button",{onClick:this.handleSave,className:"px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-700",children:"Save Settings"})]})})}constructor(e){super(e),this.handleInputChange=e=>{let{name:t,value:n,type:a,checked:o}=e.target;this.setState({[t]:"checkbox"===a?o:n})},this.handleSave=()=>{let e=window.location.origin+"?share";Object.entries(l).forEach(t=>{let[n,a]=t;a.keys.forEach(t=>{let n=this.state[t];localStorage.setItem(t,this.state[t]),n&&(e+="&".concat(t,"=").concat(n))})}),document.getElementById("linkToShare").innerHTML=e,(0,s.Am)("Analytic settings saved!")},this.state=Object.entries(l).reduce((e,t)=>{let[n,a]=t;return a.keys.forEach(t=>{e[t]=""}),e},{})}};var i=Personal_Analytics}},function(e){e.O(0,[774,888,179],function(){return e(e.s=2216)}),_N_E=e.O()}]);