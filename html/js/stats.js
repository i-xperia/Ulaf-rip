google.maps.__gjsload__("stats",function(t){var i=function(i,s,h){var n=[];return t.Gb(i,function(t,i){n.push(i+s+t)}),n.join(h)},s=function(t,i,s,h){var n={};return n.host=window.document.location&&window.document.location.host||window.location.host,n.v=t,n.r=Math.round(1/i),s&&(n.client=s),h&&(n.key=h),n},h=function(s){var h={};return t.Gb(s,function(t,i){h[(0,window.encodeURIComponent)(i)]=(0,window.encodeURIComponent)(t).replace(/%7C/g,"|")}),i(h,":",",")},n=function(i,s,h,n){var e;e=t.I(t.Q,23,500);var r;r=t.I(t.Q,22,2),this.C=i,this.D=s,this.F=e,this.l=r,this.B=h,this.m=n,this.f=new t.Vj,this.b=0,this.j=t.Ha(),o(this)},o=function(t){window.setTimeout(function(){r(t),o(t)},Math.min(t.F*Math.pow(t.l,t.b),2147483647))},e=function(t,i,s){t.f.set(i,s)},r=function(i){var h=s(i.D,i.B,i.m,void 0);h.t=i.b+"-"+(t.Ha()-i.j),i.f.forEach(function(i,s){i=i(),0<i&&(h[s]=Number(i.toFixed(2))+(t.Hk()?"-if":""))}),i.C.b({ev:"api_snap"},h),++i.b},f=function(i,s,h,n,o){this.m=i,this.C=s,this.l=h,this.f=n,this.j=o,this.b=new t.Vj,this.B=t.Ha()},a=function(t,i,s){this.l=i,this.f=t+"/maps/gen_204",this.j=s},c=function(){this.b=new t.Vj},u=function(t){var i=0,s=0;return t.b.forEach(function(t){i+=t.vo,s+=t.Sn}),s?i/s:0},b=function(i,s,h,n){this.j=i,t.x.bind(this.j,"set_at",this,this.l),t.x.bind(this.j,"insert_at",this,this.l),this.B=s,this.C=h,this.m=n,this.f=0,this.b={},this.l()},p=function(t,i,s,h,n){this.B=t,this.C=i,this.m=s,this.j=h,this.l=n,this.f={},this.b=[]},v=function(){this.j=t.K(t.Q,6),this.b=new a(t.og[35]?t.K(t.sf(t.Q),11):t.Bv,t.gj,window.document),new b(t.Xi,(0,t.p)(this.b.b,this.b),t.Sf,(!!this.j));var i=t.K(new t.mf(t.Q.data[3]),1);this.C=i.split(".")[1]||i,this.D={},this.B={},this.m={},this.F={},this.G=t.I(t.Q,0,1),t.fj&&(this.l=new n(this.b,this.C,this.G,this.j))};f.prototype.D=function(i){var h=void 0,h=t.m(h)?h:1;this.b.isEmpty()&&window.setTimeout((0,t.p)(function(){var i=s(this.C,this.l,this.f,this.j);i.t=t.Ha()-this.B;var h=this.b;t.Wj(h);for(var n={},o=0;o<h.b.length;o++){var e=h.b[o];n[e]=h.H[e]}t.Oy(i,n),this.b.clear(),this.m.b({ev:"api_maprft"},i)},this),500),h=this.b.get(i,0)+h,this.b.set(i,h)},a.prototype.b=function(s,n){n=n||{};var o=t.Uk().toString(36);n.src="apiv3",n.token=this.l,n.ts=o.substr(o.length-6),s.cad=h(n),s=i(s,"=","&"),s=this.f+"?target=api&"+s,this.j.createElement("img").src=s,(n=t.Bc.__gm_captureCSI)&&n(s)},c.prototype.f=function(i,s,h){this.b.set(t.Sa(i),{vo:s,Sn:h})},b.prototype.l=function(){for(var t;t=this.j.removeAt(0);){var i=t.xn;if(t=t.timestamp-this.C,++this.f,this.b[i]||(this.b[i]=0),++this.b[i],20<=this.f&&!(this.f%5)){var s={};s.s=i,s.sr=this.b[i],s.tr=this.f,s.te=t,s.hc=this.m?"1":"0",this.B({ev:"api_services"},s)}}},p.prototype.D=function(i){this.f[i]||(this.f[i]=!0,this.b.push(i),2>this.b.length&&t.$y(this,this.F,500))},p.prototype.F=function(){for(var i,h=s(this.C,this.m,this.j,this.l),n=0;i=this.b[n];++n)h[i]="1";h.hybrid=+t.Ml(),this.b.length=0,this.B.b({ev:"api_mapft"},h)},v.prototype.S=function(i){return i=t.Sa(i),this.D[i]||(this.D[i]=new p(this.b,this.C,this.G,this.j)),this.D[i]},v.prototype.O=function(i){return i=t.Sa(i),this.B[i]||(this.B[i]=new f(this.b,this.C,1,this.j)),this.B[i]},v.prototype.f=function(i){if(this.l){this.m[i]||(this.m[i]=new t.bA,e(this.l,i,function(){return s.kb()}));var s=this.m[i];return s}},v.prototype.ca=function(t){if(this.l){this.F[t]||(this.F[t]=new c,e(this.l,t,function(){return u(i)}));var i=this.F[t];return i}};var m=new v;t.vc("stats",m)});
//# sourceMappingURL=maps/stats.js.map