(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{21:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return h});var n=t(1),r=t(2),c=t(4),s=t(3),i=t(5),l=t(0),m=t.n(l),o=t(11),u=t(7),d=function(e){function a(){return Object(n.a)(this,a),Object(c.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.props,a=e.id,t=e.title,n=e.year,r=e.summary;return m.a.createElement("li",{className:"item panic-item"},m.a.createElement(u.b,{className:"archive-item",to:"/blog/archive/".concat(n,"/").concat(a)},m.a.createElement("div",{className:"title-container"},m.a.createElement("span",{className:"sharp-num"},"#"),m.a.createElement("span",{className:"sharp-num",name:"id"},a),m.a.createElement("span",{className:"sharp-num"}," - "),m.a.createElement("span",{className:"title is-4 has-text-weight-normal panic-title"},t," ")),m.a.createElement("p",{className:"panic-summary"},r)))}}]),a}(l.Component),p=function(e){var a=e.loading,t=e.error,n=e.items,r=e.handleItemClick;return m.a.createElement("div",{className:"columns has-equal-heights reverse"},m.a.createElement("div",{className:"column is-8 is-offset-2"},m.a.createElement("div",{className:"section-header"},a?m.a.createElement(o.a,{className:"detail-loading-container",content:"Loading..."}):t?m.a.createElement(o.a,{className:"detail-loading-container",content:"Kernel Panic."}):m.a.createElement("ul",{className:"numbered-list"},n.map(function(e){return m.a.createElement(d,{key:e.id,id:e.id,title:e.title,date:e.date,summary:e.summary,year:e.year,handleItemClick:r})})))))},h=function(e){function a(){return Object(n.a)(this,a),Object(c.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.props,a=e.items,t=e.loading,n=e.error;return m.a.createElement("div",{className:"app-content has-background"},m.a.createElement("div",{className:"hero is-medium"},m.a.createElement("div",{className:"hero-body kernel-panic"},m.a.createElement(p,{loading:t,error:n,items:a}))))}}]),a}(l.Component)}}]);
//# sourceMappingURL=4.648a9035.chunk.js.map