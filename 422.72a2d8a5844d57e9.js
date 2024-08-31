"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[422],{2422:(x,r,s)=>{s.r(r),s.d(r,{routes:()=>p});var i=s(3953),c=s(7652),m=s(5079),e=s(5873);const p=[{path:"tabs",component:(()=>{var t;class g{constructor(){this.environmentInjector=(0,i.WQX)(i.uvJ),(0,m.a)({triangle:e.zXF,ellipse:e.pw2,square:e.EwI,ribbon:e.F6i,star:e.d49})}}return(t=g).\u0275fac=function(v){return new(v||t)},t.\u0275cmp=i.VBU({type:t,selectors:[["app-tabs"]],standalone:!0,features:[i.aNF],decls:10,vars:0,consts:[["slot","bottom"],["tab","tab1","href","/tabs/tab1"],["aria-hidden","true","name","star"],["tab","tab2","href","/tabs/tab2"],["aria-hidden","true","name","ribbon"]],template:function(v,h){1&v&&(i.j41(0,"ion-tabs")(1,"ion-tab-bar",0)(2,"ion-tab-button",1),i.nrm(3,"ion-icon",2),i.j41(4,"ion-label"),i.EFF(5,"Happy Birthday"),i.k0s()(),i.j41(6,"ion-tab-button",3),i.nrm(7,"ion-icon",4),i.j41(8,"ion-label"),i.EFF(9,"Gutschein"),i.k0s()()()())},dependencies:[c.p4,c.Jq,c.qW,c.iq,c.he]}),g})(),children:[{path:"tab1",loadComponent:()=>s.e(710).then(s.bind(s,710)).then(t=>t.Tab1Page)},{path:"tab2",loadComponent:()=>s.e(676).then(s.bind(s,676)).then(t=>t.Tab2Page)},{path:"tab3",loadComponent:()=>s.e(779).then(s.bind(s,1779)).then(t=>t.Tab3Page)},{path:"",redirectTo:"/tabs/tab1",pathMatch:"full"}]},{path:"",redirectTo:"/tabs/tab1",pathMatch:"full"}]},5079:(x,r,s)=>{s.d(r,{a:()=>m});var i,m=function(o){Object.keys(o).forEach(function(a){e(a,o[a]);var n=a.replace(/([a-z0-9]|(?=[A-Z]))([A-Z0-9])/g,"$1-$2").toLowerCase();a!==n&&e(n,o[a])})},e=function(o,a){var n=function(){if(typeof window>"u")return new Map;if(!i){var o=window;o.Ionicons=o.Ionicons||{},i=o.Ionicons.map=o.Ionicons.map||new Map}return i}(),l=n.get(o);void 0===l?n.set(o,a):l!==a&&console.warn('[Ionicons Warning]: Multiple icons were mapped to name "'.concat(o,'". Ensure that multiple icons are not mapped to the same icon name.'))}},5873:(x,r,s)=>{s.d(r,{EwI:()=>H,F6i:()=>L,Kds:()=>f,d49:()=>V,pw2:()=>B,zXF:()=>C});const f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 400H64a16 16 0 010-32h384a16 16 0 010 32zM416 448H96a16 16 0 010-32h320a16 16 0 010 32zM32 272H16v48a32 32 0 0032 32h48v-16a64.07 64.07 0 00-64-64z'/><path d='M480 240h16v-64h-16a96.11 96.11 0 01-96-96V64H128v16a96.11 96.11 0 01-96 96H16v64h16a96.11 96.11 0 0196 96v16h256v-16a96.11 96.11 0 0196-96zm-224 64a96 96 0 1196-96 96.11 96.11 0 01-96 96z'/><circle cx='256' cy='208' r='64'/><path d='M416 336v16h48a32 32 0 0032-32v-48h-16a64.07 64.07 0 00-64 64zM480 144h16V96a32 32 0 00-32-32h-48v16a64.07 64.07 0 0064 64zM96 80V64H48a32 32 0 00-32 32v48h16a64.07 64.07 0 0064-64z'/></svg>",B="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z'/></svg>",L="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M269 335.61q-6.33.47-12.78.47c-5.23 0-10.4-.24-15.51-.69a176.11 176.11 0 01-127.67-72.94 4 4 0 00-6.77.35l-72 129.4c-2.74 5-3.17 11-.28 15.88A16.78 16.78 0 0048.22 416h78a15.28 15.28 0 0113.62 7.33L178.5 488a16.26 16.26 0 0013.75 8c5.94-.33 12.09-4.19 14.56-9.6l66.11-145.15a4 4 0 00-3.92-5.64zM477.64 391.88l-71.53-129.17a4 4 0 00-6.74-.36 176.5 176.5 0 01-78.31 61.42 16.09 16.09 0 00-8.72 8.25l-36.86 81.1a7.92 7.92 0 000 6.6l30.27 66.59c2.45 5.41 8.59 9.36 14.52 9.69a16.3 16.3 0 0013.7-8.12l38.53-64.58c2.89-4.85 8.13-7.33 13.78-7.3h78.77c6.67 0 11.72-3.48 14-10a16.92 16.92 0 00-1.41-14.12z'/><ellipse cx='256.26' cy='160' rx='48.01' ry='48'/><path d='M256.26 16c-79.42 0-144 64.59-144 144s64.61 144 144 144 144-64.6 144-144-64.59-144-144-144zm0 224a80 80 0 1180-80 80.1 80.1 0 01-80 80z'/></svg>",H="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M416 464H96a48.05 48.05 0 01-48-48V96a48.05 48.05 0 0148-48h320a48.05 48.05 0 0148 48v320a48.05 48.05 0 01-48 48z'/></svg>",V="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M394 480a16 16 0 01-9.39-3L256 383.76 127.39 477a16 16 0 01-24.55-18.08L153 310.35 23 221.2a16 16 0 019-29.2h160.38l48.4-148.95a16 16 0 0130.44 0l48.4 149H480a16 16 0 019.05 29.2L359 310.35l50.13 148.53A16 16 0 01394 480z'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 464H48a16 16 0 01-14.07-23.62l208-384a16 16 0 0128.14 0l208 384A16 16 0 01464 464z'/></svg>"}}]);