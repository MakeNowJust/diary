(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{137:function(e,t,a){"use strict";a.r(t);a(48);var n=a(139),r=a(0),i=a.n(r),u=a(4),o=a.n(u),l=a(147),s=a(146),c=a(164),p=a.n(c),d=function(e){var t=e.prev,a=e.next;return i.a.createElement("div",{className:p.a.paginator},t&&i.a.createElement(n.Link,{to:t,className:p.a.prevLink},"prev"),t&&a&&"|",a&&i.a.createElement(n.Link,{to:a,className:p.a.nextLink},"next"))};d.propTypes={prev:o.a.string,next:o.a.string},d.defaultProps={prev:null,next:null};var m=d,f=a(165),g=a.n(f);a.d(t,"query",function(){return y});var h=function(e){var t=e.data,a=e.pageContext,r=t.allMarkdownRemark.edges.map(function(e){var t=e.node;return i.a.createElement("li",{key:t.id,className:g.a.post},i.a.createElement("article",null,i.a.createElement("h2",null,i.a.createElement(n.Link,{to:t.fields.slug},i.a.createElement("time",null,t.fields.date),": ",t.frontmatter.title)),i.a.createElement("p",null,t.excerpt)))}),u=a.currentListPage,o=a.listPages,c=1===u?null:2===u?"/":"/list/"+(u-1)+"/",p=u===o?null:"/list/"+(u+1)+"/",d=t.site.siteMetadata,f=d.title,h=d.description,y=1===u?f:"list "+u+" | "+f;return i.a.createElement(s.a,null,i.a.createElement(l.Helmet,null,i.a.createElement("title",null,y),i.a.createElement("meta",{name:"description",content:h}),c&&i.a.createElement("link",{rel:"prev",href:c}),p&&i.a.createElement("link",{rel:"next",href:p})),i.a.createElement("div",null,i.a.createElement("h1",null,"post list ["+u+"/"+o+"]:"),i.a.createElement(m,{prev:c,next:p}),i.a.createElement("ul",{className:g.a.posts},r),i.a.createElement(m,{prev:c,next:p})))};h.propTypes={data:o.a.object.isRequired,pageContext:o.a.shape({previous:o.a.string,next:o.a.string}).isRequired};t.default=h;var y="2391589927"},139:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),u=a.n(i),o=a(138),l=a.n(o);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var s=a(140),c=a.n(s);a.d(t,"PageRenderer",function(){return c.a});var p=a(34);a.d(t,"parsePath",function(){return p.a});var d=r.a.createContext({}),m=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},140:function(e,t,a){var n;e.exports=(n=a(141))&&n.default||n},141:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),u=a.n(i),o=a(52),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=s},142:function(e){e.exports={data:{site:{siteMetadata:{title:"℘ make now just",quote:"if you wanna break free you better listen to me",copyright:{author:"TSUYUSATO Kitsune",github:"MakeNowJust",year:"2016-2018"}}}}}},143:function(e,t,a){e.exports={container:"header-module--container--1n86u",title:"header-module--title--33kOg",quote:"header-module--quote--TnsFz"}},144:function(e,t,a){e.exports={copyright:"footer-module--copyright--4FyNV"}},145:function(e,t,a){},146:function(e,t,a){"use strict";var n=a(142),r=a(139),i=a(0),u=a.n(i),o=a(4),l=a.n(o),s=a(143),c=a.n(s),p=function(e){var t=e.title,a=e.quote;return u.a.createElement("header",{className:c.a.container},u.a.createElement("h1",{className:c.a.title},u.a.createElement(r.Link,{to:"/"},t)),u.a.createElement("p",{className:c.a.quote},a))};p.propTypes={title:l.a.string.isRequired,quote:l.a.string.isRequired};var d=p,m=(a(75),a(144)),f=a.n(m),g=function(e){var t=e.author,a=e.github,n=e.year,r=t.split(" "),i=r[0],o=r.slice(1);return u.a.createElement("footer",null,u.a.createElement("p",{className:f.a.copyright},"© ",n," ",i,' "',u.a.createElement("a",{href:"https://github.com/"+a},a),'" ',o))};g.propTypes={author:l.a.string.isRequired,github:l.a.string.isRequired,year:l.a.string.isRequired};var h=g,y=(a(149),a(150),a(151),a(152),a(145),function(e){var t=e.children;return u.a.createElement(r.StaticQuery,{query:"201283109",render:function(e){return u.a.createElement(u.a.Fragment,null,u.a.createElement(d,{title:e.site.siteMetadata.title,quote:e.site.siteMetadata.quote}),u.a.createElement("main",null,t),u.a.createElement(h,{author:e.site.siteMetadata.copyright.author,github:e.site.siteMetadata.copyright.github,year:e.site.siteMetadata.copyright.year}))},data:n})});y.propTypes={children:l.a.node.isRequired};t.a=y},164:function(e,t,a){e.exports={paginator:"paginator-module--paginator--AzVp6",prevLink:"paginator-module--prev-link--27RDE",nextLink:"paginator-module--next-link--2tY9b"}},165:function(e,t,a){e.exports={posts:"list-module--posts--1HAh2",post:"list-module--post--3mit7"}}}]);
//# sourceMappingURL=component---src-templates-list-js-3bf0d719c3b33dbfdf86.js.map