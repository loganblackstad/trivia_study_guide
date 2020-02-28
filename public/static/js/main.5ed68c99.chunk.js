(this["webpackJsonpreact-project"]=this["webpackJsonpreact-project"]||[]).push([[0],{45:function(e,t,a){e.exports=a(76)},50:function(e,t,a){},51:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),c=a.n(o),s=(a(50),a(51),a(15)),i=a(40),u=a(9),l=a(44),p=a(2),d=a.n(p),v=a(11),m=a(12),f=a.n(m);a(38).config();function E(e){return{type:"ADD_TRIVIA",payload:e}}var h={saved:Object.keys(window.localStorage).map((function(e){return window.localStorage.getItem(e)})).sort(),events:[],births:[],deaths:[],film:[],music:[],sports:[],currentNews:[],sportsNews:[],randomQuestion:"",randomAnswer:""};var S=a(7),T=a(13),_=a(10),b=a(19),y=a(20),w=a(22),O=a(21),g=a(23),I=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(w.a)(this,Object(O.a)(t).call(this,e)))._handleToggle=function(e){a.setState({topic:e})},a._updateSaved=function(e){a.setState({saved:[].concat(Object(u.a)(a.state.saved),[e])})},a.state={topic:"",optionsList:["Events","Births","Deaths","Film","Music","Sports"],saved:Object(u.a)(a.props.saved)},a}return Object(g.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){this.props.events.length||this.props.getTrivia()}},{key:"render",value:function(){var e=this,t=this.state.topic,a=this.props,n=a.handleSelect,o=a.saved,c=t&&"--"!==t?this.props[t.toLowerCase()].map((function(t,a){var c=o.includes(t)?"Saved":"Save";return r.a.createElement("li",{className:"trivia",key:a+"A"},r.a.createElement("button",{className:c,onClick:function(){n(t),e._updateSaved(t)}},c),r.a.createElement("p",null,t))})):"",s=this.state.optionsList.map((function(t,a){return r.a.createElement("li",{key:a+"C"},r.a.createElement("input",{type:"radio",id:t,name:"triviaType",value:t}),r.a.createElement("label",{onClick:function(){return e._handleToggle(t)},htmlFor:t},t))}));return r.a.createElement("div",{id:"today"},r.a.createElement("ul",{className:"radioToolbar"},s),r.a.createElement("ul",null,c))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.saved!==t.saved?{saved:e.saved}:t}}]),t}(r.a.Component);var N=Object(S.b)((function(e){return{events:e.events,births:e.births,deaths:e.deaths,film:e.film,music:e.music,sports:e.sports,saved:e.saved}}),(function(e){return{handleSelect:function(t){e(E(t))},getTrivia:function(){e(function(){var e=Object(v.a)(d.a.mark((function e(t){var a,n,r,o,c,s,i,u,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new Date,n=["January","February","March","April","May","June","July","August","September","October","November","December"][a.getMonth()]+" "+a.getDate(),r="https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&titles=".concat(n),e.next=6,f.a.get(r);case 6:for(o=e.sent,c=Object.keys(o.data.query.pages)[0],s=o.data.query.pages[c].extract.split("<h2>"),i=[[],[],[]],u=0;u<i.length;u++)l=i[u],(l=s[u+1].split("</li>").map((function(e){return e.slice(5)})))[0]=l[0].split("<li>")[1],l=l.slice(0,l.length-2),i[u]=l;t({type:"SET_TRIVIA_BIRTHS_DEATHS_EVENTS",payload:{births:(p={events:i[0],births:i[1],deaths:i[2]}).births,deaths:p.deaths,events:p.events}});case 12:case"end":return e.stop()}var p}),e)})));return function(t){return e.apply(this,arguments)}}()),e(function(){var e=Object(v.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get({url:"/api/filmtrivia"}).then((function(e){return e.data}));case 2:a=e.sent,t({type:"SET_TRIVIA_FILM",payload:a.data[0].linkData});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e(function(){var e=Object(v.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get({url:"/api/musictrivia"}).then((function(e){return e.data}));case 2:a=e.sent,t({type:"SET_TRIVIA_MUSIC",payload:a.data[0].musicData});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e(function(){var e=Object(v.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get({url:"/api/sportstrivia"}).then((function(e){return e.data}));case 2:a=e.sent,console.log(a),t({type:"SET_TRIVIA_SPORTS",payload:a.data[0].linkData});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))(I);var k=Object(S.b)((function(e){return{triviaList:e.saved}}),(function(e){return{handleDelete:function(t,a){e(function(e,t){return{type:"DEL_TRIVIA",payload:{id:e,text:t}}}(t,a))},handleReset:function(){return e({type:"RESET_TRIVIA"})}}}))((function(e){var t=e.triviaList,a=e.handleDelete,n=e.handleReset,o=t?t.map((function(e,t){return r.a.createElement("li",{className:"trivia",key:t+"D"},r.a.createElement("button",{onClick:function(){return a(t,e)}},"Delete")," ",e)})):[];return r.a.createElement("div",{id:"saved"},r.a.createElement("button",{onClick:n},"Reset Saved Trivia"),r.a.createElement("h2",null,"Saved Items"),r.a.createElement("ul",null,o))})),R=function(e){function t(e){var a;return Object(b.a)(this,t),(a=Object(w.a)(this,Object(O.a)(t).call(this,e)))._handleToggle=function(e){a.setState({topic:e})},a._updateSaved=function(e){a.setState({saved:[].concat(Object(u.a)(a.state.saved),[e])})},a.state={topic:"",optionsList:["currentNews","sportsNews"],saved:Object(u.a)(a.props.saved)},a}return Object(g.a)(t,e),Object(y.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentNews,a=e.sportsNews,n=e.getCurrentNews,r=e.getSportsNews;t.length||n(),a.length||r()}},{key:"render",value:function(){var e=this,t=this.props,a=t.handleSelect,n=t.saved,o=this.state.topic,c=o?this.props[o].map((function(t,o){var c=n.includes(t.title)?"Saved":"Save";return r.a.createElement("li",{key:o+"E",className:"trivia"},r.a.createElement("button",{className:c,onClick:function(){a(t.title),e._updateSaved(t.title)}},c),r.a.createElement("a",{href:t.url,rel:"noopener noreferrer",target:"_blank"}," ",t.title))})):"",s=this.state.optionsList.map((function(t,a){var n="sportsNews"===t?"Sports":"currentNews"===t?"U.S.":"";return r.a.createElement("li",{key:a+"C"},r.a.createElement("input",{type:"radio",id:t,name:"triviaType",value:t}),r.a.createElement("label",{onClick:function(){return e._handleToggle(t)},htmlFor:t},n))}));return r.a.createElement("div",{id:"news"},r.a.createElement("ul",{className:"radioToolbar"},s),r.a.createElement("ul",null,c),c.length>0?r.a.createElement("footer",null,"Powered by NewsApi.Org"):"")}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.saved!==t.saved?{saved:e.saved}:t}}]),t}(r.a.Component);var A=Object(S.b)((function(e){return{currentNews:e.currentNews,sportsNews:e.sportsNews,saved:e.saved}}),(function(e){return{handleSelect:function(t){e(E(t))},getCurrentNews:function(){return e(function(){var e=Object(v.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get({url:"/api/currentnews"}).then((function(e){return e.data}));case 2:a=e.sent,console.log(a),t({type:"SET_TRIVIA_CURRENTNEWS",payload:a.data.articles});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},getSportsNews:function(){return e(function(){var e=Object(v.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get({url:"/api/sportsnews"}).then((function(e){return e.data}));case 2:a=e.sent,console.log(a),t({type:"SET_TRIVIA_SPORTSNEWS",payload:a.data.articles});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))(R);function j(){return r.a.createElement("ul",{id:"nav"},r.a.createElement("div",{className:"pictureFrame"},r.a.createElement("img",{src:"/study.png",alt:"logo"})),r.a.createElement(T.b,{to:"/"},"Home"),r.a.createElement(T.b,{to:"/today"},"Today in History"),r.a.createElement(T.b,{to:"/news"},"News"),r.a.createElement(T.b,{to:"/saved"},"Saved"))}var D=a(43);a(38).config();var C=Object(S.b)((function(e){return{question:e.randomQuestion,answer:e.randomAnswer}}),(function(e){return{getQuestionAnswer:function(t){return e(function(){var e=Object(v.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get({url:"/api/randomquestion"}).then((function(e){return e.data}));case 2:a=e.sent,console.log(a),t({type:"SET_QUESTION_ANSWER",payload:[a.data[0].question[0],a.data[0].answer[0]]});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))((function(e){var t=e.question,a=e.answer,o=e.getQuestionAnswer,c=Object(n.useState)(!1),s=Object(D.a)(c,2),i=s[0],u=s[1];return Object(n.useEffect)((function(){console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0})),console.log(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_APIFY_KEY),o(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_APIFY_KEY)})),r.a.createElement("div",{id:"home"},r.a.createElement("div",{id:"overlay"},r.a.createElement("h1",null,"Trivia Study Guide"),r.a.createElement("h2",null,"Your guide to acing trivia"),r.a.createElement("p",null,t),i?r.a.createElement("p",null,a):r.a.createElement("p",{onClick:function(){return u(!0)}},"Click Here To See Answer")))})),V=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.c,P=Object(s.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0,a=Object(l.a)({},e);switch(t.type){case"ADD_TRIVIA":if(a.saved.includes(t.payload))break;a.saved.push(t.payload),window.localStorage.setItem(t.payload,t.payload);break;case"DEL_TRIVIA":var n=Object(u.a)(a.saved);n.splice(t.payload.id,1),a.saved=n,window.localStorage.removeItem(t.payload.text);break;case"RESET_TRIVIA":a.saved=[],window.localStorage.clear();break;case"SET_TRIVIA_BIRTHS_DEATHS_EVENTS":a.events=t.payload.events,a.births=t.payload.births,a.deaths=t.payload.deaths;break;case"SET_TRIVIA_FILM":a.film=t.payload;break;case"SET_TRIVIA_MUSIC":a.music=t.payload;break;case"SET_TRIVIA_SPORTS":a.sports=t.payload;break;case"SET_TRIVIA_SPORTSNEWS":a.sportsNews=t.payload;break;case"SET_TRIVIA_CURRENTNEWS":a.currentNews=t.payload;break;case"SET_QUESTION_ANSWER":a.randomQuestion=t.payload[0],a.randomAnswer=t.payload[1]}return a}),V(Object(s.a)(i.a)));var x=function(){return r.a.createElement(S.a,{store:P},r.a.createElement(T.a,null,r.a.createElement(j,null),r.a.createElement(_.c,null,r.a.createElement(_.a,{exact:!0,path:"/",component:C}),r.a.createElement(_.a,{path:"/today",component:N}),r.a.createElement(_.a,{path:"/saved",component:k}),r.a.createElement(_.a,{path:"/news",component:A}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.5ed68c99.chunk.js.map