(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{14:function(e,t,a){e.exports=a(21)},19:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),s=a.n(l),u=(a(19),a(20),a(5)),i=a(6),c=a(8),o=a(9),m=a(4),g=a(13),v=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).sendNumber=function(t){e.props.btnNumber(t)},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"btnClass"},r.a.createElement(g.a,{variant:"secondary",onClick:function(){e.sendNumber(e.props.num)}},r.a.createElement("h4",null,this.props.num)))}}]),a}(r.a.Component),b=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).handleNumber=function(e){var t=0,a=0;if("number"==typeof e){if(0===n.state.result||0===e&&""===n.state.result)return;""===n.state.sign?n.setState({result:n.state.result+e}):n.state.isFlag?n.setState({result:n.state.result.toString()+e}):n.setState({result:e,isFlag:!0})}else{if(e===n.state.arrSign[4])t=null,a="",e="";else if(e===n.state.arrSign[5]){if(!n.state.isFlag)return;t=null,a=n.clac(Number(n.state.value),Number(n.state.result),n.state.sign)}else{if(!n.state.isFlag&&n.state.sign===e)return;if(null==n.state.value)t=n.state.result,a=n.state.result;else{if(!n.state.isFlag)return void n.setState({sign:e});t=n.clac(Number(n.state.value),Number(n.state.result),n.state.sign),a=n.clac(Number(n.state.value),Number(n.state.result),n.state.sign)}}n.setState({value:t,result:a,sign:e,isFlag:!1})}},n.clac=function(e,t,a){return a===n.state.arrSign[0]?e+t:a===n.state.arrSign[1]?e-t:a===n.state.arrSign[2]?e*t:a===n.state.arrSign[3]?e/t:void 0},n.state={value:null,result:"",sign:"",isFlag:!1,arrSign:["+","-","*","/","C","="]},n}return Object(i.a)(a,[{key:"render",value:function(){for(var e=[],t=0;t<10;t++)e.push(r.a.createElement(v,{num:t,btnNumber:this.handleNumber}));for(var a=0;a<this.state.arrSign.length;a++)e.push(r.a.createElement(v,{num:this.state.arrSign[a],btnNumber:this.handleNumber}));return r.a.createElement("div",{className:"Main"},r.a.createElement("div",null,r.a.createElement("h3",null,"A simple React calculator")),r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"input_number",value:this.state.result,readOnly:!0})),r.a.createElement("div",null,r.a.createElement(m.a,{"aria-label":"First group"},e[7],e[8],e[9],e[10])),r.a.createElement("div",null,r.a.createElement(m.a,{"aria-label":"Second group"},e[4],e[5],e[6],e[11])),r.a.createElement("div",null,r.a.createElement(m.a,{"aria-label":"Third group"},e[1],e[2],e[3],e[12])),r.a.createElement("div",null,r.a.createElement(m.a,{"aria-label":"Fourth group"},e[14],e[0],e[15],e[13])))}}]),a}(r.a.Component);var h=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.a142a307.chunk.js.map