"use strict";(self.webpackChunkdiary=self.webpackChunkdiary||[]).push([[571],{3919:function(e,t,l){l.r(t),l.d(t,{Head:function(){return u},default:function(){return m}});var n=l(1883),a=l(7294);function r(e){let{prev:t,next:l}=e;return a.createElement("div",{className:"paginator-module--paginator--05f6a"},t&&a.createElement(n.Link,{to:t,className:"paginator-module--prev-link--9e4f4"},"prev"),t&&l&&"|",l&&a.createElement(n.Link,{to:l,className:"paginator-module--next-link--bd2a0"},"next"))}r.defaultProps={prev:null,next:null};var i=r,c=l(9889),s=l(611);function u(e){let{data:t,pageContext:l}=e;const{currentListPage:n,listPages:r}=l,i=1===n?null:2===n?"/":`/list/${n-1}/`,c=n===r?null:`/list/${n+1}/`,{title:u,description:m}=t.site.siteMetadata,o=1===n?u:`List ${n} | ${u}`;return a.createElement(a.Fragment,null,a.createElement(s.Z,null),a.createElement("title",null,o),a.createElement("meta",{name:"description",content:m}),i&&a.createElement("link",{rel:"prev",href:i}),c&&a.createElement("link",{rel:"next",href:c}))}var m=function(e){let{data:t,pageContext:l}=e;const r=t.allMarkdownRemark.edges.map((e=>{let{node:t}=e;return a.createElement("li",{key:t.id,className:"list-module--post--70bdc"},a.createElement("article",null,a.createElement("h2",null,a.createElement(n.Link,{to:t.fields.slug},a.createElement("time",null,t.fields.date),": ",t.frontmatter.title)),a.createElement("p",null,t.excerpt)))})),{currentListPage:s,listPages:u}=l,m=1===s?null:2===s?"/":`/list/${s-1}/`,o=s===u?null:`/list/${s+1}/`;return a.createElement(c.Z,null,a.createElement("div",null,a.createElement("h1",null,`Post List [${s}/${u}]:`),a.createElement(i,{prev:m,next:o}),a.createElement("ul",{className:"list-module--posts--fa191"},r),a.createElement(i,{prev:m,next:o})))}}}]);
//# sourceMappingURL=component---src-templates-list-js-03f0f16398c9261b0708.js.map