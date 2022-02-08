"use strict";(self.webpackChunkstreamx_website=self.webpackChunkstreamx_website||[]).push([[356],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return u}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),u=r,k=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return t?a.createElement(k,o(o({ref:n},s),{},{components:t})):a.createElement(k,o({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){var a=t(7294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},6396:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(7462),r=t(7294),i=t(2389),o=t(9443);var l=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=t(3616),p=t(6010),s="tabItem_vU9c";function m(e){var n,t,i,o=e.lazy,m=e.block,d=e.defaultValue,u=e.values,k=e.groupId,f=e.className,v=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=u?u:v.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,c.lx)(N,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var C=null===d?d:null!=(n=null!=d?d:null==(t=v.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=v[0])?void 0:i.props.value;if(null!==C&&!N.some((function(e){return e.value===C})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+C+'" but none of its children has the corresponding value. Available values are: '+N.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=l(),h=g.tabGroupChoices,S=g.setTabGroupChoices,y=(0,r.useState)(C),x=y[0],E=y[1],O=[],T=(0,c.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var j=h[k];null!=j&&j!==x&&N.some((function(e){return e.value===j}))&&E(j)}var w=function(e){var n=e.currentTarget,t=O.indexOf(n),a=N[t].value;a!==x&&(T(n),E(a),null!=k&&S(k,a))},J=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;t=O[a]||O[0];break;case"ArrowLeft":var r=O.indexOf(e.currentTarget)-1;t=O[r]||O[O.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":m},f)},N.map((function(e){var n=e.value,t=e.label,i=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===n?0:-1,"aria-selected":x===n,key:n,ref:function(e){return O.push(e)},onKeyDown:J,onFocus:w,onClick:w},i,{className:(0,p.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":x===n})}),null!=t?t:n)}))),o?(0,r.cloneElement)(v.filter((function(e){return e.props.value===x}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==x})}))))}function d(e){var n=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(n)},e))}},5762:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return m},toc:function(){return d},default:function(){return k}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=t(6396),l=t(8215),c=["components"],p={id:"Jdbc-Connector",title:"Jdbc Connector",sidebar_position:2},s=void 0,m={unversionedId:"connector/Jdbc-Connector",id:"connector/Jdbc-Connector",title:"Jdbc Connector",description:"Flink \u5b98\u65b9 \u63d0\u4f9b\u4e86JDBC\u7684\u8fde\u63a5\u5668,\u7528\u4e8e\u4ece JDBC \u4e2d\u8bfb\u53d6\u6216\u8005\u5411\u5176\u4e2d\u5199\u5165\u6570\u636e,\u53ef\u63d0\u4f9b AT_LEAST_ONCE (\u81f3\u5c11\u4e00\u6b21)\u7684\u5904\u7406\u8bed\u4e49",source:"@site/docs/connector/jdbc.md",sourceDirName:"connector",slug:"/connector/Jdbc-Connector",permalink:"/docs/connector/Jdbc-Connector",editUrl:"https://github.com/streamxhub/streamx-website/edit/dev/docs/connector/jdbc.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"Jdbc-Connector",title:"Jdbc Connector",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Apache Kafka Connector",permalink:"/docs/connector/Kafka-Connector"},next:{title:"Clickhouse Connector",permalink:"/docs/connector/Clickhouse-Connector"}},d=[{value:"Jdbc \u4fe1\u606f\u914d\u7f6e",id:"jdbc-\u4fe1\u606f\u914d\u7f6e",children:[{value:"semantic \u8bed\u4e49\u914d\u7f6e",id:"semantic-\u8bed\u4e49\u914d\u7f6e",children:[{value:"EXACTLY_ONCE",id:"exactly_once",children:[],level:4},{value:"AT_LEAST_ONCE &amp;&amp; NONE",id:"at_least_once--none",children:[],level:4}],level:3},{value:"\u5176\u4ed6\u914d\u7f6e",id:"\u5176\u4ed6\u914d\u7f6e",children:[],level:3}],level:2},{value:"Jdbc \u8bfb\u53d6\u6570\u636e",id:"jdbc-\u8bfb\u53d6\u6570\u636e",children:[{value:"queryFunc\u83b7\u53d6\u4e00\u6761sql",id:"queryfunc\u83b7\u53d6\u4e00\u6761sql",children:[],level:3},{value:"resultFunc \u5904\u7406\u67e5\u8be2\u5230\u7684\u6570\u636e",id:"resultfunc-\u5904\u7406\u67e5\u8be2\u5230\u7684\u6570\u636e",children:[],level:3}],level:2},{value:"Jdbc \u8bfb\u53d6\u5199\u5165",id:"jdbc-\u8bfb\u53d6\u5199\u5165",children:[{value:"\u6839\u636e\u6570\u636e\u6d41\u751f\u6210\u76ee\u6807SQL",id:"\u6839\u636e\u6570\u636e\u6d41\u751f\u6210\u76ee\u6807sql",children:[],level:3},{value:"\u8bbe\u7f6e\u5199\u5165\u6279\u6b21\u5927\u5c0f",id:"\u8bbe\u7f6e\u5199\u5165\u6279\u6b21\u5927\u5c0f",children:[],level:3}],level:2},{value:"\u591a\u5b9e\u4f8bJdbc\u652f\u6301",id:"\u591a\u5b9e\u4f8bjdbc\u652f\u6301",children:[],level:2},{value:"\u624b\u52a8\u6307\u5b9aJdbc\u8fde\u63a5\u4fe1\u606f",id:"\u624b\u52a8\u6307\u5b9ajdbc\u8fde\u63a5\u4fe1\u606f",children:[],level:2}],u={toc:d};function k(e){var n=e.components,t=(0,r.Z)(e,c);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Flink \u5b98\u65b9 \u63d0\u4f9b\u4e86",(0,i.kt)("a",{parentName:"p",href:"https://ci.apache.org/projects/flink/flink-docs-release-1.12/dev/connectors/jdbc.html"},"JDBC"),"\u7684\u8fde\u63a5\u5668,\u7528\u4e8e\u4ece JDBC \u4e2d\u8bfb\u53d6\u6216\u8005\u5411\u5176\u4e2d\u5199\u5165\u6570\u636e,\u53ef\u63d0\u4f9b ",(0,i.kt)("strong",{parentName:"p"},"AT_LEAST_ONCE")," (\u81f3\u5c11\u4e00\u6b21)\u7684\u5904\u7406\u8bed\u4e49"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"StreamX"),"\u4e2d\u57fa\u4e8e\u4e24\u9636\u6bb5\u63d0\u4ea4\u5b9e\u73b0\u4e86 ",(0,i.kt)("strong",{parentName:"p"},"EXACTLY_ONCE")," (\u7cbe\u786e\u4e00\u6b21)\u8bed\u4e49\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"JdbcSink"),",\u5e76\u4e14\u91c7\u7528",(0,i.kt)("a",{parentName:"p",href:"https://github.com/brettwooldridge/HikariCP"},(0,i.kt)("inlineCode",{parentName:"a"},"HikariCP")),"\u4e3a\u8fde\u63a5\u6c60,\u8ba9\u6570\u636e\u7684\u8bfb\u53d6\u548c\u5199\u5165\u66f4\u7b80\u5355\u66f4\u51c6\u786e"),(0,i.kt)("h2",{id:"jdbc-\u4fe1\u606f\u914d\u7f6e"},"Jdbc \u4fe1\u606f\u914d\u7f6e"),(0,i.kt)("p",null,"\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"StreamX"),"\u4e2d",(0,i.kt)("inlineCode",{parentName:"p"},"Jdbc Connector"),"\u7684\u5b9e\u73b0\u7528\u5230\u4e86",(0,i.kt)("a",{parentName:"p",href:"https://github.com/brettwooldridge/HikariCP"},(0,i.kt)("inlineCode",{parentName:"a"},"HikariCP")),"\u8fde\u63a5\u6c60,\u76f8\u5173\u7684\u914d\u7f6e\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"jdbc"),"\u7684namespace\u4e0b,\u7ea6\u5b9a\u7684\u914d\u7f6e\u5982\u4e0b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"jdbc:\n  semantic: EXACTLY_ONCE # EXACTLY_ONCE|AT_LEAST_ONCE|NONE\n  username: root\n  password: 123456\n  driverClassName: com.mysql.jdbc.Driver\n  connectionTimeout: 30000\n  idleTimeout: 30000\n  maxLifetime: 30000\n  maximumPoolSize: 6\n  jdbcUrl: jdbc:mysql://localhost:3306/test?useSSL=false&allowPublicKeyRetrieval=true\n")),(0,i.kt)("h3",{id:"semantic-\u8bed\u4e49\u914d\u7f6e"},"semantic \u8bed\u4e49\u914d\u7f6e"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"semantic"),"\u8fd9\u4e2a\u53c2\u6570\u662f\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"JdbcSink"),"\u5199\u65f6\u5019\u7684\u8bed\u4e49,\u4ec5\u5bf9 ",(0,i.kt)("strong",{parentName:"p"},"JdbcSink")," \u6709\u6548,",(0,i.kt)("inlineCode",{parentName:"p"},"JdbcSource"),"\u4f1a\u81ea\u52a8\u5c4f\u853d\u8be5\u53c2\u6570,\u6709\u4e09\u4e2a\u53ef\u9009\u9879"),(0,i.kt)("div",{class:"counter"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"EXACTLY_ONCE"),(0,i.kt)("li",{parentName:"ul"},"AT_LEAST_ONCE"),(0,i.kt)("li",{parentName:"ul"},"NONE"))),(0,i.kt)("h4",{id:"exactly_once"},"EXACTLY_ONCE"),(0,i.kt)("p",null,"\u5982\u679c",(0,i.kt)("inlineCode",{parentName:"p"},"JdbcSink"),"\u914d\u7f6e\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"EXACTLY_ONCE"),"\u8bed\u4e49,\u5219\u5e95\u5c42\u91c7\u7528\u4e86\u4e24\u9636\u6bb5\u63d0\u4ea4\u7684\u5b9e\u73b0\u65b9\u5f0f\u6765\u5b8c\u6210\u5199\u5165,\u6b64\u65f6\u8981flink\u914d\u5408\u5f00\u542f",(0,i.kt)("inlineCode",{parentName:"p"},"Checkpointing"),"\u624d\u4f1a\u751f\u6548,\u5982\u4f55\u5f00\u542fcheckpoint\u8bf7\u53c2\u8003\u7b2c\u4e8c\u7ae0\u5173\u4e8e",(0,i.kt)("a",{parentName:"p",href:"/docs/model/conf"},"checkpoint"),"\u914d\u7f6e\u90e8\u5206"),(0,i.kt)("h4",{id:"at_least_once--none"},"AT_LEAST_ONCE && NONE"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u4e0d\u6307\u5b9a\u4f1a\u91c7\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"NONE"),"\u8bed\u4e49,\u8fd9\u4e24\u79cd\u914d\u7f6e\u6548\u679c\u4e00\u6837,\u90fd\u662f\u4fdd\u8bc1 ",(0,i.kt)("strong",{parentName:"p"},"\u81f3\u5c11\u4e00\u6b21")," \u8bed\u4e49"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u63d0\u793a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5f00\u542f",(0,i.kt)("inlineCode",{parentName:"p"},"EXACTLY_ONCE"),"\u7cbe\u786e\u4e00\u6b21\u7684\u597d\u5904\u662f\u663e\u800c\u6613\u89c1\u7684,\u4fdd\u8bc1\u4e86\u6570\u636e\u7684\u51c6\u786e\u6027,\u4f46\u6210\u672c\u4e5f\u662f\u9ad8\u6602\u7684,\u9700\u8981",(0,i.kt)("inlineCode",{parentName:"p"},"checkpoint"),"\u7684\u652f\u6301,\u5e95\u5c42\u6a21\u62df\u4e86\u4e8b\u52a1\u7684\u63d0\u4ea4\u8bfb,\u5bf9\u5b9e\u65f6\u6027\u6709\u4e00\u5b9a\u7684\u635f\u8017,\u5982\u679c\u4f60\u7684\u4e1a\u52a1\u5bf9\u6570\u636e\u7684\u51c6\u786e\u6027\u8981\u6c42\u4e0d\u662f\u90a3\u4e48\u9ad8,\u5219\u5efa\u8bae\u91c7\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"AT_LEAST_ONCE"),"\u8bed\u4e49"))),(0,i.kt)("h3",{id:"\u5176\u4ed6\u914d\u7f6e"},"\u5176\u4ed6\u914d\u7f6e"),(0,i.kt)("p",null,"\u9664\u4e86\u7279\u6b8a\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"semantic")," \u914d\u7f6e\u9879\u4e4b\u5916,\u5176\u4ed6\u7684\u6240\u6709\u7684\u914d\u7f6e\u90fd\u5fc5\u987b\u9075\u5b88 ",(0,i.kt)("strong",{parentName:"p"}," HikariCP")," \u8fde\u63a5\u6c60\u7684\u914d\u7f6e,\u5177\u4f53\u53ef\u914d\u7f6e\u9879\u548c\u5404\u4e2a\u53c2\u6570\u7684\u4f5c\u7528\u8bf7\u53c2\u8003",(0,i.kt)("inlineCode",{parentName:"p"},"\u5149 HikariCP"),(0,i.kt)("a",{parentName:"p",href:"https://github.com/brettwooldridge/HikariCP#gear-configuration-knobs-baby"},"\u5b98\u7f51\u6587\u6863"),"."),(0,i.kt)("h2",{id:"jdbc-\u8bfb\u53d6\u6570\u636e"},"Jdbc \u8bfb\u53d6\u6570\u636e"),(0,i.kt)("p",null,"\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"StreamX"),"\u4e2d",(0,i.kt)("inlineCode",{parentName:"p"},"JdbcSource"),"\u7528\u6765\u8bfb\u53d6\u6570\u636e,\u5e76\u4e14\u6839\u636e\u6570\u636e\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"offset"),"\u505a\u5230\u6570\u636e\u8bfb\u65f6\u53ef\u56de\u653e,\u6211\u4eec\u770b\u770b\u5177\u4f53\u5982\u4f55\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"JdbcSource"),"\u8bfb\u53d6\u6570\u636e,\u5047\u5982\u9700\u6c42\u5982\u4e0b"),(0,i.kt)("div",{class:"counter"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4ece",(0,i.kt)("inlineCode",{parentName:"li"},"t_order"),"\u8868\u4e2d\u8bfb\u53d6\u6570\u636e,\u4ee5",(0,i.kt)("inlineCode",{parentName:"li"},"timestamp"),"\u5b57\u6bb5\u4e3a\u53c2\u7167,\u8d77\u59cb\u503c\u4e3a",(0,i.kt)("inlineCode",{parentName:"li"},"2020-12-16 12:00:00"),"\u5f80\u540e\u62bd\u53d6\u6570\u636e"),(0,i.kt)("li",{parentName:"ul"},"\u5c06\u8bfb\u53d6\u5230\u7684\u6570\u636e\u6784\u9020\u6210",(0,i.kt)("inlineCode",{parentName:"li"},"Order"),"\u5bf9\u8c61\u8fd4\u56de"))),(0,i.kt)("p",null,"jdbc\u914d\u7f6e\u548c\u8bfb\u53d6\u4ee3\u7801\u5982\u4e0b"),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"\u914d\u7f6e",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"jdbc:\n  driverClassName: com.mysql.jdbc.Driver\n  jdbcUrl: jdbc:mysql://localhost:3306/test?useSSL=false&allowPublicKeyRetrieval=true\n  username: root\n  password: 123456\n"))),(0,i.kt)(l.Z,{value:"Scala",label:"Scala",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import com.streamxhub.streamx.flink.core.scala.FlinkStreaming\nimport com.streamxhub.streamx.flink.core.scala.source.JdbcSource\nimport org.apache.flink.api.scala._\n\nobject MySQLSourceApp extends FlinkStreaming {\n\n  override def handle(): Unit = {\n\n    JdbcSource().getDataStream[Order](lastOne => {\n      //\u9632\u6b62\u62bd\u53d6\u8fc7\u4e8e\u5bc6\u96c6,\u95f4\u96945\u79d2\u62bd\u53d6\u4e00\u6b21\u6570\u636e                          \n      Thread.sleep(5000);\n      val laseOffset = if (lastOne == null) "2020-12-16 12:00:00" else lastOne.timestamp\n      s"select * from t_order where timestamp > \'$laseOffset\' order by timestamp asc "\n    },\n      _.map(x => new Order(x("market_id").toString, x("timestamp").toString))\n    ).print()\n\n  }\n\n}\n\nclass Order(val marketId: String, val timestamp: String) extends Serializable\n'))),(0,i.kt)(l.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import com.streamxhub.streamx.flink.core.java.function.SQLQueryFunction;\nimport com.streamxhub.streamx.flink.core.java.function.SQLResultFunction;\nimport com.streamxhub.streamx.flink.core.java.function.StreamEnvConfigFunction;\nimport com.streamxhub.streamx.flink.core.java.source.JdbcSource;\nimport com.streamxhub.streamx.flink.core.scala.StreamingContext;\nimport com.streamxhub.streamx.flink.core.scala.util.StreamEnvConfig;\nimport org.apache.flink.api.common.typeinfo.TypeInformation;\n\nimport java.io.Serializable;\nimport java.util.ArrayList;\nimport java.util.List;\n\npublic class MySQLJavaApp {\n\n    public static void main(String[] args) {\n        StreamEnvConfig envConfig = new StreamEnvConfig(args, null);\n        StreamingContext context = new StreamingContext(envConfig);\n        new JdbcSource<Order>(context)\n                .getDataStream(\n                        (SQLQueryFunction<Order>) lastOne -> {\n                            //\u9632\u6b62\u62bd\u53d6\u8fc7\u4e8e\u5bc6\u96c6,\u95f4\u96945\u79d2\u62bd\u53d6\u4e00\u6b21\u6570\u636e                          \n                            Thread.sleep(5000);\n                            \n                            Serializable lastOffset = lastOne == null \n                            ? "2020-12-16 12:00:00" \n                            : lastOne.timestamp;\n                            \n                            return String.format(\n                                "select * from t_order " +\n                                "where timestamp > \'%s\' " +\n                                "order by timestamp asc ",\n                                lastOffset\n                            );\n                        },\n                        (SQLResultFunction<Order>) iterable -> {\n                            List<Order> result = new ArrayList<>();\n                            iterable.forEach(item -> {\n                                Order Order = new Order();\n                                Order.marketId = item.get("market_id").toString();\n                                Order.timestamp = Long.parseLong(item.get("timestamp").toString());\n                                result.add(Order);\n                            });\n                            return result;\n                        })\n                .returns(TypeInformation.of(Order.class))\n                .print();\n\n        context.start();\n    }\n}\n')))),(0,i.kt)("p",null,"\u4ee5",(0,i.kt)("inlineCode",{parentName:"p"},"java")," api\u4e3a\u4f8b,\u8fd9\u91cc\u8981\u4f20\u5165\u4e24\u4e2a\u53c2\u6570"),(0,i.kt)("div",{class:"counter"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SQLQueryFunction<T> queryFunc")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SQLResultFunction<T> resultFunc")))),(0,i.kt)("h3",{id:"queryfunc\u83b7\u53d6\u4e00\u6761sql"},"queryFunc\u83b7\u53d6\u4e00\u6761sql"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"queryFunc"),"\u662f\u8981\u4f20\u5165\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"SQLQueryFunction"),"\u7c7b\u578b\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"function"),",\u8be5",(0,i.kt)("inlineCode",{parentName:"p"},"function"),"\u7528\u4e8e\u83b7\u53d6\u67e5\u8be2sql\u7684,\u4f1a\u5c06\u6700\u540e\u4e00\u6761\u8bb0\u5f55\u8fd4\u56de\u7ed9\u5f00\u53d1\u8005,\u7136\u540e\u9700\u8981\u5f00\u53d1\u8005\u6839\u636e\u6700\u540e\u4e00\u6761\u8bb0\u5f55\u8fd4\u56de\u4e00\u6761\u65b0\u7684\u67e5\u8be2",(0,i.kt)("inlineCode",{parentName:"p"},"sql"),",",(0,i.kt)("inlineCode",{parentName:"p"},"queryFunc"),"\u5b9a\u4e49\u5982\u4e0b:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * @author benjobs\n */\n@FunctionalInterface\npublic interface SQLQueryFunction<T> extends Serializable {\n    /**\n     * \u83b7\u53d6\u8981\u67e5\u8be2\u7684SQL\n     *\n     * @return\n     * @throws Exception\n     */\n    String query(T last) throws Exception;\n}\n")),(0,i.kt)("p",null,"\u6240\u4ee5\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d,\u7b2c\u4e00\u6b21\u4e0a\u6765",(0,i.kt)("inlineCode",{parentName:"p"},"lastOne"),"(\u6700\u540e\u4e00\u6761\u8bb0\u5f55)\u4e3anull,\u4f1a\u5224\u65ad\u4e00\u4e0b,\u4e3anull\u5219\u53d6\u9700\u6c42\u91cc\u9ed8\u8ba4\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"offset"),",\u67e5\u8be2\u7684sql\u91cc\u6839\u636e",(0,i.kt)("inlineCode",{parentName:"p"},"timestamp"),"\u5b57\u6bb5\u6b63\u5e8f\u6392,\u8fd9\u6837\u5728\u7b2c\u4e00\u6b21\u67e5\u8be2\u4e4b\u540e,\u4f1a\u8fd4\u56de\u6700\u540e\u7684\u90a3\u6761\u8bb0\u5f55,\u4e0b\u6b21\u76f4\u63a5\u53ef\u4ee5\u4f7f\u7528\u8fd9\u6761\u8bb0\u5f55\u4f5c\u4e3a\u4e0b\u4e00\u6b21\u67e5\u8be2\u7684\u6839\u636e"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u6ce8\u610f\u4e8b\u9879")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"JdbcSource"),"\u5b9e\u73b0\u4e86",(0,i.kt)("inlineCode",{parentName:"p"},"CheckpointedFunction"),",\u5373\u5f53\u7a0b\u5e8f\u5f00\u542f ",(0,i.kt)("strong",{parentName:"p"},"checkpoint")," \u540e,\u4f1a\u5c06\u8fd9\u4e9b\u8bf8\u5982",(0,i.kt)("inlineCode",{parentName:"p"},"laseOffset"),"\u7684\u72b6\u6001\u6570\u636e\u4fdd\u5b58\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"state backend"),",\u8fd9\u6837\u7a0b\u5e8f\u6302\u4e86,\u518d\u6b21\u542f\u52a8\u4f1a\u81ea\u52a8\u4ece",(0,i.kt)("inlineCode",{parentName:"p"},"checkpoint"),"\u4e2d\u6062\u590d",(0,i.kt)("inlineCode",{parentName:"p"},"offset"),",\u4f1a\u63a5\u7740\u4e0a\u6b21\u7684\u4f4d\u7f6e\u7ee7\u7eed\u8bfb\u53d6\u6570\u636e,\n\u4e00\u822c\u5728\u751f\u4ea7\u73af\u5883,\u66f4\u7075\u6d3b\u7684\u65b9\u5f0f\u662f\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"lastOffset"),"\u5199\u5165\u5982",(0,i.kt)("inlineCode",{parentName:"p"},"redis"),"\u7b49\u5b58\u50a8\u4e2d,\u6bcf\u6b21\u67e5\u8be2\u5b8c\u4e4b\u540e\u518d\u5c06\u6700\u540e\u7684\u8bb0\u5f55\u66f4\u65b0\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"redis"),",\u8fd9\u6837\u5373\u4fbf\u7a0b\u5e8f\u610f\u5916\u6302\u4e86,\u518d\u6b21\u542f\u52a8,\u4e5f\u53ef\u4ee5\u4ece",(0,i.kt)("inlineCode",{parentName:"p"},"redis"),"\u4e2d\u83b7\u53d6\u5230\u6700\u540e\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"offset"),"\u8fdb\u884c\u6570\u636e\u7684\u62bd\u53d6,\u4e5f\u53ef\u4ee5\u5f88\u65b9\u4fbf\u7684\u4eba\u4e3a\u7684\u4efb\u610f\u8c03\u6574\u8fd9\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"offset"),"\u8fdb\u884c\u6570\u636e\u7684\u56de\u653e"))),(0,i.kt)("h3",{id:"resultfunc-\u5904\u7406\u67e5\u8be2\u5230\u7684\u6570\u636e"},"resultFunc \u5904\u7406\u67e5\u8be2\u5230\u7684\u6570\u636e"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"resultFunc"),"\u7684\u53c2\u6570\u7c7b\u578b\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"SQLResultFunction<T>"),",\u662f\u5c06\u4e00\u4e2a\u67e5\u8be2\u5230\u7684\u7ed3\u679c\u96c6\u653e\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"Iterable<Map<String, ?>>"),"\u4e2d\u8fd4\u56de\u7ed9\u5f00\u53d1\u8005,\u53ef\u4ee5\u770b\u5230\u8fd4\u56de\u4e86\u4e00\u4e2a\u8fed\u4ee3\u5668",(0,i.kt)("inlineCode",{parentName:"p"},"Iterable"),",\u8fed\u4ee3\u5668\u6bcf\u6b21\u8fed\u4ee3\u8fd4\u56de\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),",\u8be5",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),"\u91cc\u8bb0\u5f55\u4e86\u4e00\u884c\u5b8c\u6574\u7684\u8bb0\u5f55,",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),"\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"key"),"\u4e3a\u67e5\u8be2\u5b57\u6bb5,",(0,i.kt)("inlineCode",{parentName:"p"},"value"),"\u4e3a\u503c,",(0,i.kt)("inlineCode",{parentName:"p"},"SQLResultFunction<T>"),"\u5b9a\u4e49\u5982\u4e0b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * @author benjobs\n */\n@FunctionalInterface\npublic interface SQLResultFunction<T> extends Serializable {\n    /**\n     * \u5c06\u67e5\u4e0b\u7ed3\u679c\u4ee5Iterable<Map>\u7684\u65b9\u5f0f\u8fd4\u56de,\u5f00\u53d1\u8005\u53bb\u5b9e\u73b0\u8f6c\u6210\u5bf9\u8c61.\n     *\n     * @param map\n     * @return\n     */\n    Iterable<T> result(Iterable<Map<String, ?>> iterable);\n}\n")),(0,i.kt)("h2",{id:"jdbc-\u8bfb\u53d6\u5199\u5165"},"Jdbc \u8bfb\u53d6\u5199\u5165"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"StreamX"),"\u4e2d",(0,i.kt)("inlineCode",{parentName:"p"},"JdbcSink"),"\u662f\u7528\u6765\u5199\u5165\u6570\u636e,\u6211\u4eec\u770b\u770b\u5177\u4f53\u5982\u4f55\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"JdbcSink"),"\u5199\u5165\u6570\u636e,\u5047\u5982\u9700\u6c42\u662f\u9700\u8981\u4ece",(0,i.kt)("inlineCode",{parentName:"p"},"kakfa"),"\u4e2d\u8bfb\u53d6\u6570\u636e,\u5199\u5165\u5230",(0,i.kt)("inlineCode",{parentName:"p"},"mysql")),(0,i.kt)(o.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"\u914d\u7f6e",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"kafka.source:\n  bootstrap.servers: kfk1:9092,kfk2:9092,kfk3:9092\n  pattern: user\n  group.id: user_02\n  auto.offset.reset: earliest # (earliest | latest)\n  ...\n  \njdbc:\n  semantic: EXACTLY_ONCE # EXACTLY_ONCE|AT_LEAST_ONCE|NONE\n  driverClassName: com.mysql.jdbc.Driver\n  jdbcUrl: jdbc:mysql://localhost:3306/test?useSSL=false&allowPublicKeyRetrieval=true\n  username: root\n  password: 123456\n")),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u6ce8\u610f\u4e8b\u9879")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u914d\u7f6e\u91cc",(0,i.kt)("inlineCode",{parentName:"p"},"jdbc"),"\u4e0b\u7684 ",(0,i.kt)("strong",{parentName:"p"},"semantic")," \u662f\u5199\u5165\u7684\u8bed\u4e49,\u5728\u4e0a\u9762",(0,i.kt)("a",{parentName:"p",href:"#jdbc-%E4%BF%A1%E6%81%AF%E9%85%8D%E7%BD%AE"},"Jdbc\u4fe1\u606f\u914d\u7f6e"),"\u6709\u4ecb\u7ecd,\u8be5\u914d\u7f6e\u53ea\u4f1a\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"JdbcSink"),"\u4e0b\u751f\u6548,",(0,i.kt)("inlineCode",{parentName:"p"},"StreamX"),"\u4e2d\u57fa\u4e8e\u4e24\u9636\u6bb5\u63d0\u4ea4\u5b9e\u73b0\u4e86 ",(0,i.kt)("strong",{parentName:"p"},"EXACTLY_ONCE")," \u8bed\u4e49,\n\u8fd9\u672c\u8eab\u9700\u8981\u88ab\u64cd\u4f5c\u7684\u6570\u636e\u5e93(",(0,i.kt)("inlineCode",{parentName:"p"},"mysql"),",",(0,i.kt)("inlineCode",{parentName:"p"},"oracle"),",",(0,i.kt)("inlineCode",{parentName:"p"},"MariaDB"),",",(0,i.kt)("inlineCode",{parentName:"p"},"MS SQL Server"),")\u7b49\u652f\u6301\u4e8b\u52a1,\u7406\u8bba\u4e0a\u6240\u6709\u652f\u6301\u6807\u51c6Jdbc\u4e8b\u52a1\u7684\u6570\u636e\u5e93\u90fd\u53ef\u4ee5\u505a\u5230EXACTLY_ONCE(\u7cbe\u786e\u4e00\u6b21)\u7684\u5199\u5165")))),(0,i.kt)(l.Z,{value:"Scala",label:"Scala",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import com.streamxhub.streamx.common.util.JsonUtils\nimport com.streamxhub.streamx.flink.core.scala.FlinkStreaming\nimport com.streamxhub.streamx.flink.core.scala.sink.JdbcSink\nimport com.streamxhub.streamx.flink.core.scala.source.KafkaSource\nimport org.apache.flink.api.common.typeinfo.TypeInformation\nimport org.apache.flink.api.java.typeutils.TypeExtractor.getForClass\nimport org.apache.flink.api.scala._\nimport org.apache.flink.streaming.connectors.kafka.KafkaDeserializationSchema\n\nobject JdbcSinkApp extends FlinkStreaming {\n\n  override def handle(): Unit = {\n        val source = KafkaSource()\n          .getDataStream[String]()\n          .map(x => JsonUtils.read[User](x.value))\n          \n        JdbcSink().sink[User](source)(user =>\n          s"""\n          |insert into t_user(`name`,`age`,`gender`,`address`)\n          |value(\'${user.name}\',${user.age},${user.gender},\'${user.address}\')\n          |""".stripMargin\n        )  \n  }\n\n}\n\ncase class User(name:String,age:Int,gender:Int,address:String)\n\n'))),(0,i.kt)(l.Z,{value:"Java",label:"Java",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import com.fasterxml.jackson.databind.ObjectMapper;\nimport com.streamxhub.streamx.flink.core.java.function.StreamEnvConfigFunction;\nimport com.streamxhub.streamx.flink.core.java.source.KafkaSource;\nimport com.streamxhub.streamx.flink.core.scala.StreamingContext;\nimport com.streamxhub.streamx.flink.core.scala.source.KafkaRecord;\nimport com.streamxhub.streamx.flink.core.scala.util.StreamEnvConfig;\nimport org.apache.flink.api.common.functions.MapFunction;\nimport org.apache.flink.api.common.typeinfo.TypeInformation;\nimport org.apache.flink.streaming.connectors.kafka.KafkaDeserializationSchema;\nimport org.apache.kafka.clients.consumer.ConsumerRecord;\n\nimport java.io.Serializable;\n\nimport static org.apache.flink.api.java.typeutils.TypeExtractor.getForClass;\n\npublic class JdbcSinkJavaApp {\n\n    public static void main(String[] args) {\n        StreamEnvConfig envConfig = new StreamEnvConfig(args, null);\n        StreamingContext context = new StreamingContext(envConfig);\n        ObjectMapper mapper = new ObjectMapper();\n\n        DataStream<JavaUser> source = new KafkaSource<String>(context)\n                .getDataStream()\n                .map((MapFunction<KafkaRecord<String>, JavaUser>) value ->\n                    mapper.readValue(value.value(), JavaUser.class));\n\n        new JdbcSink<JavaUser>(context)\n                .sql((SQLFromFunction<JavaUser>) JavaUser::toSql)\n                .sink(source);\n                \n        context.start();\n    }\n\n}\n\nclass JavaUser implements Serializable {\n    String name;\n    Integer age;\n    Integer gender;\n    String address;\n    public String toSql() {\n        return String.format(\n                \"insert into t_user(`name`,`age`,`gender`,`address`) value('%s',%d,%d,'%s')\",\n                name,\n                age,\n                gender,\n                address);\n    }\n}\n\n")))),(0,i.kt)("h3",{id:"\u6839\u636e\u6570\u636e\u6d41\u751f\u6210\u76ee\u6807sql"},"\u6839\u636e\u6570\u636e\u6d41\u751f\u6210\u76ee\u6807SQL"),(0,i.kt)("p",null,"\u5728\u5199\u5165\u7684\u65f6\u5019,\u9700\u8981\u77e5\u9053\u5177\u4f53\u5199\u5165\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"sql"),"\u8bed\u53e5,\u8be5",(0,i.kt)("inlineCode",{parentName:"p"},"sql"),"\u8bed\u53e5\u9700\u8981\u5f00\u53d1\u8005\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"function"),"\u7684\u65b9\u5f0f\u63d0\u4f9b,\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"scala")," api\u4e2d,\u76f4\u63a5\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"sink"),"\u65b9\u6cd5\u540e\u8ddf\u4e0a",(0,i.kt)("inlineCode",{parentName:"p"},"function"),"\u5373\u53ef,",(0,i.kt)("inlineCode",{parentName:"p"},"java")," api \u5219\u662f\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"sql()"),"\u65b9\u6cd5\u4f20\u5165\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"SQLFromFunction"),"\u7c7b\u578b\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"function")),(0,i.kt)("p",null,"\u4e0b\u9762\u4ee5",(0,i.kt)("inlineCode",{parentName:"p"},"java")," api\u4e3a\u4f8b\u8bf4\u660e,\u6211\u4eec\u6765\u770b\u770b",(0,i.kt)("inlineCode",{parentName:"p"},"java"),"api \u4e2d\u63d0\u4f9bsql\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"function"),"\u65b9\u6cd5\u7684\u5b9a\u4e49"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * @author benjobs\n */\n@FunctionalInterface\npublic interface SQLFromFunction<T> extends Serializable {\n    /**\n     * @param bean\n     * @return\n     */\n    String from(T bean);\n}\n\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"SQLFromFunction"),"\u4e0a\u7684\u6cdb\u578b",(0,i.kt)("inlineCode",{parentName:"p"},"<T>"),"\u5373\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"DataStream"),"\u91cc\u5b9e\u9645\u7684\u6570\u636e\u7c7b\u578b,\u8be5",(0,i.kt)("inlineCode",{parentName:"p"},"function"),"\u91cc\u6709\u4e00\u4e2a\u65b9\u6cd5",(0,i.kt)("inlineCode",{parentName:"p"},"form(T bean)"),",\u8fd9\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"bean"),"\u5373\u4e3a\u5f53\u524d",(0,i.kt)("inlineCode",{parentName:"p"},"DataStream"),"\u4e2d\u7684\u4e00\u6761\u5177\u4f53\u6570\u636e,\u4f1a\u5c06\u8be5\u6570\u636e\u8fd4\u7ed9\u5f00\u53d1\u8005,\u5f00\u53d1\u8005\u6765\u51b3\u5b9a\u57fa\u4e8e\u8fd9\u6761\u6570\u636e,\u751f\u6210\u4e00\u6761\u5177\u4f53\u53ef\u4ee5\u5f80\u6570\u636e\u5e93\u4e2d\u63d2\u5165\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"sql")),(0,i.kt)("h3",{id:"\u8bbe\u7f6e\u5199\u5165\u6279\u6b21\u5927\u5c0f"},"\u8bbe\u7f6e\u5199\u5165\u6279\u6b21\u5927\u5c0f"),(0,i.kt)("p",null,"\u5728 \u975e ",(0,i.kt)("inlineCode",{parentName:"p"},"EXACTLY_ONCE"),"(\u7cbe\u786e\u4e00\u6b21\u7684\u8bed\u4e49\u4e0b)\u53ef\u4ee5\u9002\u5f53\u7684\u8bbe\u7f6e",(0,i.kt)("inlineCode",{parentName:"p"},"batch.size"),"\u6765\u63d0\u9ad8Jdbc\u5199\u5165\u7684\u6027\u80fd(\u524d\u63d0\u662f\u4e1a\u52a1\u5141\u8bb8\u7684\u60c5\u51b5\u4e0b),\u5177\u4f53\u914d\u7f6e\u5982\u4e0b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"jdbc:\n  semantic: EXACTLY_ONCE # EXACTLY_ONCE|AT_LEAST_ONCE|NONE\n  driverClassName: com.mysql.jdbc.Driver\n  jdbcUrl: jdbc:mysql://localhost:3306/test?useSSL=false&allowPublicKeyRetrieval=true\n  username: root\n  password: 123456\n  batch.size: 1000\n")),(0,i.kt)("p",null,"\u8fd9\u6837\u4e00\u6765\u5c31\u4e0d\u662f\u6765\u4e00\u6761\u6570\u636e\u5c31\u7acb\u5373\u5199\u5165,\u800c\u662f\u79ef\u6512\u4e00\u4e2a\u5339\u914d\u7136\u540e\u6267\u884c\u6279\u91cf\u63d2\u5165"),(0,i.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"\u6ce8\u610f\u4e8b\u9879")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u8fd9\u4e2a\u8bbe\u7f6e\u4ec5\u5728\u975e",(0,i.kt)("inlineCode",{parentName:"p"},"EXACTLY_ONCE"),"\u8bed\u4e49\u4e0b\u751f\u6548,\u5e26\u6765\u7684\u597d\u5904\u662f\u53ef\u4ee5\u63d0\u9ad8Jdbc\u5199\u5165\u7684\u6027\u80fd,\u4e00\u6b21\u5927\u6279\u91cf\u7684\u63d2\u5165\u6570\u636e,\u7f3a\u70b9\u662f\u6570\u636e\u5199\u5165\u52bf\u5fc5\u4f1a\u6709\u5ef6\u8fdf,\u8bf7\u6839\u636e\u5b9e\u9645\u4f7f\u7528\u60c5\u51b5\u8c28\u614e\u4f7f\u7528"))),(0,i.kt)("h2",{id:"\u591a\u5b9e\u4f8bjdbc\u652f\u6301"},"\u591a\u5b9e\u4f8bJdbc\u652f\u6301"),(0,i.kt)("h2",{id:"\u624b\u52a8\u6307\u5b9ajdbc\u8fde\u63a5\u4fe1\u606f"},"\u624b\u52a8\u6307\u5b9aJdbc\u8fde\u63a5\u4fe1\u606f"))}k.isMDXComponent=!0}}]);