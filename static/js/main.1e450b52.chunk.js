(this.webpackJsonpgrowmore=this.webpackJsonpgrowmore||[]).push([[0],{36:function(t,e,n){},37:function(t,e,n){},57:function(t,e,n){},63:function(t,e,n){"use strict";n.r(e);var c=n(0),s=n.n(c),o=n(28),a=n.n(o),i=(n(36),n(31)),r=n(9),j=n(2),u=(n(37),n(11)),b=n(12),O=n(14),m=n(13),l=n(1),p=function(t){Object(O.a)(n,t);var e=Object(m.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){var t=this.props,e=t.title,n=t.content,c=t.pathname;return Object(l.jsxs)("head",{children:[Object(l.jsx)("meta",{charset:"utf-8"}),Object(l.jsx)("title",{children:e?"".concat(e," | GROWMORE INTERNATIONAL"):"GROWMORE INTERNATIONAL"}),Object(l.jsx)("link",{rel:"icon",href:"/logo.svg"}),Object(l.jsx)("meta",{name:"viewport",content:"width=device-width, user-scalable=no"}),Object(l.jsx)("meta",{name:"theme-color",content:"#000000"}),Object(l.jsx)("meta",{name:"description",content:n||"Industry's most versatile team dedicated to maximizing the potential of our environment by utilizing AI solutions for businesses, homes, and users alike."}),Object(l.jsx)("meta",{property:"og:type",content:"website"}),Object(l.jsx)("meta",{property:"og:url",content:"https://portal.dubauae.com".concat(c)}),Object(l.jsx)("meta",{property:"og:title",content:e?"".concat(e," | GROWMORE INTERNATIONAL"):"GROWMORE INTERNATIONAL"}),Object(l.jsx)("meta",{property:"og:description",content:n||"Industry's most versatile team dedicated to maximizing the potential of our environment by utilizing AI solutions for businesses, homes, and users alike."}),Object(l.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),Object(l.jsx)("meta",{property:"twitter:url",content:"https://portal.dubauae.com".concat(c)}),Object(l.jsx)("meta",{property:"twitter:title",content:e?"".concat(e," | GROWMORE INTERNATIONAL"):"GROWMORE INTERNATIONAL"}),Object(l.jsx)("meta",{property:"twitter:description",content:n||"Industry's most versatile team dedicated to maximizing the potential of our environment by utilizing AI solutions for businesses, homes, and users alike."})]})}}]),n}(c.PureComponent),d=n(29),h=n.n(d),x=(n(57),function(t){Object(O.a)(n,t);var e=Object(m.a)(n);function n(t){var c;return Object(u.a)(this,n),(c=e.call(this,t)).state={stats:""},c}return Object(b.a)(n,[{key:"componentDidMount",value:function(){var t=this;h.a.get("https://mohammedfarish-public-api.herokuapp.com/v1/ping").then((function(e){var n=e.data.status;t.setState({stats:n})})).catch((function(){t.setState({stats:"ok"})}))}},{key:"render",value:function(){var t=this.state.stats;return Object(l.jsx)("div",{className:"header",children:t})}}]),n}(c.PureComponent)),f=function(t){var e=t.setSiteTitle;return Object(c.useEffect)((function(){e("hom")}),[]),Object(l.jsx)("div",{children:Object(l.jsx)(r.b,{to:"/about",children:"Homeeee"})})},v=function(t){var e=t.setSiteTitle;return Object(c.useEffect)((function(){e("hom")}),[]),Object(l.jsx)("div",{children:Object(l.jsx)(r.b,{to:"/",children:"About"})})};var y=function(){var t=Object(c.useState)(""),e=Object(i.a)(t,2),n=e[0],s=e[1];return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(p,{title:n}),Object(l.jsxs)(r.a,{basename:"/",children:[Object(l.jsx)(x,{}),Object(l.jsx)("div",{className:"page",children:Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{exact:!0,path:"/",component:function(){return Object(l.jsx)(f,{setSiteTitle:s})}}),Object(l.jsx)(j.a,{exact:!0,path:"/about",component:function(){return Object(l.jsx)(v,{setSiteTitle:s})}})]})})]})]})};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.1e450b52.chunk.js.map