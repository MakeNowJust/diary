"use strict";(self.webpackChunkdiary=self.webpackChunkdiary||[]).push([[571],{9014:function(e,t,l){l.r(t),l.d(t,{default:function(){return m}});var n=l(1082),a=l(7294),r=l(1232);function i(e){var t=e.prev,l=e.next;return a.createElement("div",{className:"paginator-module--paginator--05f6a"},t&&a.createElement(n.Link,{to:t,className:"paginator-module--prev-link--9e4f4"},"prev"),t&&l&&"|",l&&a.createElement(n.Link,{to:l,className:"paginator-module--next-link--bd2a0"},"next"))}i.defaultProps={prev:null,next:null};var c=i,s=l(4705);var m=function(e){var t=e.data,l=e.pageContext,i=t.allMarkdownRemark.edges.map((function(e){var t=e.node;return a.createElement("li",{key:t.id,className:"list-module--post--70bdc"},a.createElement("article",null,a.createElement("h2",null,a.createElement(n.Link,{to:t.fields.slug},a.createElement("time",null,t.fields.date),": ",t.frontmatter.title)),a.createElement("p",null,t.excerpt)))})),m=l.currentListPage,u=l.listPages,o=1===m?null:2===m?"/":"/list/"+(m-1)+"/",d=m===u?null:"/list/"+(m+1)+"/",p=t.site.siteMetadata,E=p.title,f=p.description,v=1===m?E:"list "+m+" | "+E;return a.createElement(s.Z,null,a.createElement(r.q,null,a.createElement("title",null,v),a.createElement("meta",{name:"description",content:f}),o&&a.createElement("link",{rel:"prev",href:o}),d&&a.createElement("link",{rel:"next",href:d})),a.createElement("div",null,a.createElement("h1",null,"post list ["+m+"/"+u+"]:"),a.createElement(c,{prev:o,next:d}),a.createElement("ul",{className:"list-module--posts--fa191"},i),a.createElement(c,{prev:o,next:d})))}}}]);
//# sourceMappingURL=component---src-templates-list-js-0296923e2321c9711e89.js.map