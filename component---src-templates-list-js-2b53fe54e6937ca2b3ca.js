(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{228:function(e,t,a){"use strict";a.r(t);var n=a(36),l=a(0),r=a.n(l),c=a(121),i=a(385),s=a.n(i),m=function(e){var t=e.prev,a=e.next;return r.a.createElement("div",{className:s.a.paginator},t&&r.a.createElement(n.a,{to:t,className:s.a.prevLink},"prev"),t&&a&&"|",a&&r.a.createElement(n.a,{to:a,className:s.a.nextLink},"next"))};m.defaultProps={prev:null,next:null};var u=m,o=a(224),p=a(386),E=a.n(p);a.d(t,"query",function(){return d});t.default=function(e){var t=e.data,a=e.pageContext,l=t.allMarkdownRemark.edges.map(function(e){var t=e.node;return r.a.createElement("li",{key:t.id,className:E.a.post},r.a.createElement("article",null,r.a.createElement("h2",null,r.a.createElement(n.a,{to:t.fields.slug},r.a.createElement("time",null,t.fields.date),": ",t.frontmatter.title)),r.a.createElement("p",null,t.excerpt)))}),i=a.currentListPage,s=a.listPages,m=1===i?null:2===i?"/":"/list/"+(i-1)+"/",p=i===s?null:"/list/"+(i+1)+"/",d=t.site.siteMetadata,v=d.title,f=d.description,k=1===i?v:"list "+i+" | "+v;return r.a.createElement(o.a,null,r.a.createElement(c.Helmet,null,r.a.createElement("title",null,k),r.a.createElement("meta",{name:"description",content:f}),m&&r.a.createElement("link",{rel:"prev",href:m}),p&&r.a.createElement("link",{rel:"next",href:p})),r.a.createElement("div",null,r.a.createElement("h1",null,"post list ["+i+"/"+s+"]:"),r.a.createElement(u,{prev:m,next:p}),r.a.createElement("ul",{className:E.a.posts},l),r.a.createElement(u,{prev:m,next:p})))};var d="2391589927"}}]);
//# sourceMappingURL=component---src-templates-list-js-2b53fe54e6937ca2b3ca.js.map