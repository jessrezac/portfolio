(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"+G7f":function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a("nKUr"),a("q1tI");var c=a("9eSz"),n=a.n(c),s=a("IP2g"),r=a("qKvR");var l=function(e){var t=e.skill,a=t.icon,c=t.icon_prefix,n=t.id;return Object(r.a)("span",{className:"inline-block bg-light-coral text-seashell rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"},Object(r.a)(s.a,{icon:[c,a]})," ",n)};function i(e){var t=e.project.node,a=t.frontmatter,c=t.fields,s=a.title,i=a.github_url,o=a.demo_url,b=a.hero_image,u=a.kicker,d=a.skills;return Object(r.a)("div",{className:"bg-azure-x-100 lg:w-30 rounded overflow-hidden shadow-lg m-4 lg:mb-10"},Object(r.a)("div",{className:"w-full bg-queen-blue"},Object(r.a)(n.a,{fluid:b.childImageSharp.fluid,alt:s})),Object(r.a)("div",{className:"px-6 py-4"},Object(r.a)("div",{className:"font-sans uppercase font-bold text-xl mb-2 text-center"},Object(r.a)("a",{href:"../projects"+c.slug},s)),Object(r.a)("div",{className:"font-sans text-center mb-2"},Object(r.a)("a",{href:i,className:"shadowed"},"Github")," • ",Object(r.a)("a",{href:o,className:"shadowed"},"Demo")),Object(r.a)("div",{className:"text-gray-700 text-base leading-7"},u," ",Object(r.a)("a",{href:"projects"+c.slug,className:"underline text-blue-yonder"},"Read More »"))),Object(r.a)("div",{className:"px-6 pt-4 pb-2"},d&&d.map((function(e){return Object(r.a)(l,{skill:e,key:e.id})}))))}},"6bzQ":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a("nKUr"),a("q1tI");var c=a("LcLe"),n=a("qKvR");function s(e){var t=e.post.node,a=t.frontmatter,c=t.timeToRead,s=t.wordCount,r=t.fields;return Object(n.a)("article",{className:"max-w-screen md:w-3/5 mx-auto text-left pb-10"},Object(n.a)("div",{className:"font-display font-bold text-2xl"},Object(n.a)("a",{href:"."+r.slug},a.title)),Object(n.a)("div",{className:"font-sans uppercase text-xs py-2"},a.date," • ",c," minutes to read •"," ",s.words," words"),Object(n.a)("div",{className:"font-serif text-m",dangerouslySetInnerHTML:{__html:a.kicker}}),Object(n.a)("div",null,Object(n.a)("a",{href:"."+r.slug,className:"font-serif underline"},"Read More")))}function r(e){var t=Object(c.a)();return Object(n.a)("section",{className:"bg-morning-blue text-seashell bg-cover w-screen py-20"},Object(n.a)("h2",{className:"font-display text-center text-4xl py-5"},"Articles"),Object(n.a)("div",{className:"text-center px-10 bg-cover"},t.map((function(e){return Object(n.a)(s,{post:e,key:e.node.id})}))))}},LcLe:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var c=a("Wbzz");function n(){return Object(c.c)("2670422194").allMarkdownRemark.edges}},PNig:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var c=a("Wbzz");function n(){return Object(c.c)("1742606766").allMarkdownRemark.edges}},PvBA:function(e,t,a){e.exports=a.p+"static/jessrezac-983d2c951220648b1fa13c6cf5347f0a.jpg"},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h}));a("nKUr");var c=a("q1tI"),n=a("wkXz"),s=a("7oih"),r=a("6bzQ"),l=a("KQm4"),i=a("PNig"),o=a("+G7f"),b=a("IP2g"),u=a("wHSu"),d=a("qKvR");function f(e){var t=Object(i.a)(),a=Object(c.useState)([0,1,2]),n=a[0],s=a[1];return Object(d.a)("section",{className:"bg-max-yellow-red bg-cover w-screen py-20 flex flex-wrap items-center justify-center relative"},Object(d.a)("h2",{className:"font-display text-center text-4xl py-5"},"Projects"),Object(d.a)("div",{className:"flex flex-wrap justify-between items-stretch p-10 bg-cover"},n.map((function(e){return Object(d.a)(o.a,{project:t[e],key:e})}))),Object(d.a)("div",{className:"flex flex-wrap justify-center p-10 space-x-20"},Object(d.a)("div",{className:"max-w-1/2 align-middle cursor-pointer"},Object(d.a)(b.a,{icon:u.a,onClick:function(){var e=Object(l.a)(n),a=n[n.length-1]+1;t[a]||(a=0),e.shift(),e.push(a),s(e)},size:"3x"})),Object(d.a)("div",{className:"max-w-1/2 cursor-pointer"},Object(d.a)(b.a,{icon:u.b,onClick:function(){var e=Object(l.a)(n),a=n[0]-1;t[a]||(a=t.length-1),e.unshift(a),e.pop(),s(e)},size:"3x",className:"align-middle"}))))}var m=a("GYjk"),j=a("PvBA"),p=a.n(j);var O=function(e){return Object(d.a)("section",{className:"bg-hero-collage bg-cover w-screen"},Object(d.a)("div",{className:"max-w-screen-xl mx-auto pb-20 flex flex-wrap-reverse items-center justify-center relative md:h-80vh"},Object(d.a)("div",{className:"bg-seashell w-4/5 md:w-2/4 p-10 rounded font-serif lg:z-10 relative lg:absolute lg:bottom-1/5 lg:left-1/10"},Object(d.a)(m.a,null)),Object(d.a)("div",{className:"w-4/5 md:w-1/3 text-center p-10 lg:z-0 relative lg:absolute lg:bottom-1/4 lg:right-15"},Object(d.a)("img",{src:p.a,alt:"",className:"rounded shadowed"}))))};var x=function(e){return Object(d.a)("section",{className:"bg-baby-pink-100 bg-cover p-10 w-screen flex items-center justify-center"},Object(d.a)("div",{className:"bg-bluepaint bg-contain bg-center bg-no-repeat w-4/5 md:w-2/4 p-10 text-center text-5xl font-display"},e.callOutPhrase))},v=a("Wbzz");var g=function(e){var t=e.skill,a=t.id,c=t.icon,n=t.icon_prefix,s=t.frameworks;return Object(d.a)("div",{className:"flex-1 p-2"},Object(d.a)("div",{className:"text-5xl"},Object(d.a)(b.a,{icon:[n,c]})),Object(d.a)("div",{className:"text-2xl"},a),Object(d.a)("p",null,s.map((function(e,t){return s.length-1!==t?e.id+", ":e.id}))))};var w=function(e){var t=Object(v.c)("4192476815").allSkillYaml.edges;return Object(d.a)("section",{id:"skills",className:"w-screen bg-queen-blue text-seashell"},Object(d.a)("div",{className:"flex flex-wrap items-start justify-evenly p-10 text-center"},t.map((function(e){return Object(d.a)(g,{skill:e.node,key:e.node.id})}))))};function h(){var e=Object(n.a)(),t=e.title,a=e.description,c=e.infoData.callOutPhrase;return Object(d.a)(s.a,{page:"home",title:t,description:a},Object(d.a)(O,null),Object(d.a)(f,null),Object(d.a)(r.a,null),Object(d.a)(w,null),Object(d.a)(x,{callOutPhrase:c}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-bd8fc2e447607925dfbb.js.map