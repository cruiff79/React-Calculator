(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],{14:function(e,t,a){e.exports=a(21)},19:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(12),s=a.n(l),i=(a(19),a(20),a(5)),u=a(6),c=a(8),o=a(9),m=a(3),g=a(10),v=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).sendNumber=function(t){e.props.btnNumber(t)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=r.a.createElement(g.a,{style:{width:"161px"},variant:"secondary",onClick:function(){e.sendNumber(e.props.num)}},r.a.createElement("h4",null,this.props.num)),a=r.a.createElement(g.a,{variant:"secondary",onClick:function(){e.sendNumber(e.props.num)}},r.a.createElement("h4",null,this.props.num));return r.a.createElement("div",{className:"btnClass"},0===this.props.num?t:a)}}]),a}(r.a.Component),d=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleNumber=function(e){var t=0,a=0,r=!1;if("number"==typeof e||e===n.state.arrSign[8]){if(e===n.state.arrSign[8]){if(n.state.isDot)return;n.setState({isDot:!0})}if(""===n.state.sign){if(0===e&&!n.state.isFlag)return;0===n.state.result?n.setState({result:n.state.result+e,isFlag:!0}):n.setState({result:n.state.result.toString()+e,isFlag:!0})}else n.state.isFlag&&0!==n.state.result?n.setState({result:n.state.result.toString()+e}):e===n.state.arrSign[8]?n.setState({result:n.state.result.toString()+e,isFlag:!0}):n.setState({result:e,isFlag:!0})}else{if(e===n.state.arrSign[4])t=null,a=0,e="";else if(e===n.state.arrSign[5]){if(!n.state.isFlag)return;t=null,a=n.clac(n.state.value,n.state.result,n.state.sign)}else if(e===n.state.arrSign[6])t=null===n.state.value?null:n.state.value,a=-1*n.state.result,r=n.state.isFlag,e=n.state.sign;else if(e===n.state.arrSign[7])t=null===n.state.value?null:n.state.value,a=.01*n.state.result,r=n.state.isFlag,e=n.state.sign;else{if(!n.state.isFlag&&n.state.sign===e)return;if(null==n.state.value)t=n.state.result,a=n.state.result;else{if(!n.state.isFlag)return void n.setState({sign:e});t=n.clac(n.state.value,n.state.result,n.state.sign),a=n.clac(n.state.value,n.state.result,n.state.sign)}}n.setState({value:t,result:a,sign:e,isFlag:r,isDot:!1})}},n.clac=function(e,t,a){return e=Number(e),t=Number(t),a===n.state.arrSign[0]?+(e+t).toFixed(13):a===n.state.arrSign[1]?+(e-t).toFixed(13):a===n.state.arrSign[2]?+(e*t).toFixed(13):a===n.state.arrSign[3]?+(e/t).toFixed(13):void 0},n.state={value:null,result:0,sign:"",isFlag:!1,isDot:!1,arrSign:["+","-","x","\xf7","C","=","+/-","%","."]},n}return Object(u.a)(a,[{key:"render",value:function(){for(var e=[],t=0;t<10;t++)e.push(r.a.createElement(v,{num:t,btnNumber:this.handleNumber}));for(var a=0;a<this.state.arrSign.length;a++)e.push(r.a.createElement(v,{num:this.state.arrSign[a],btnNumber:this.handleNumber}));return r.a.createElement("div",{className:"Main"},r.a.createElement("div",null,r.a.createElement("h3",null,"A simple React calculator")),r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"input_number",value:this.state.result,readOnly:!0})),r.a.createElement("div",null,r.a.createElement(m.a,{"aria-label":"Fourth group"},e[14],e[16],e[17],e[13])),r.a.createElement("div",null,r.a.createElement(m.a,{"aria-label":"First group"},e[7],e[8],e[9],e[12])),r.a.createElement("div",null,r.a.createElement(m.a,{"aria-label":"Second group"},e[4],e[5],e[6],e[11])),r.a.createElement("div",null,r.a.createElement(m.a,{"aria-label":"Third group"},e[1],e[2],e[3],e[10])),r.a.createElement("div",null,r.a.createElement(m.a,{"aria-label":"Fourth group"},e[0],e[18],e[15])))}}]),a}(r.a.Component);var h=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.a5eb394f.chunk.js.map