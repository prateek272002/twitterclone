(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){},105:function(e,t,a){},112:function(e,t,a){},115:function(e,t,a){},118:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=a(60),l=a.n(r),s=(a(83),a(85),a(87),a(61)),i=a.n(s);a(89);var o=function(e){return c.a.createElement("div",{className:"sidebarOption ".concat(e.active&&"sidebarOption--active")},c.a.createElement(e.Icon,null),c.a.createElement("h2",null,e.text))},m=a(62),u=a.n(m),d=a(45),p=a.n(d),f=a(63),E=a.n(f),_=a(64),g=a.n(_),v=a(98),h=a.n(v),b=a(65),N=a.n(b),x=a(99),w=a.n(x),k=a(66),I=a.n(k),A=a(136);var y=function(){return c.a.createElement("div",{className:"sidebar"},c.a.createElement(i.a,{className:"sidebar_icon"}),c.a.createElement(o,{active:!0,Icon:u.a,text:"Home"}),c.a.createElement(o,{Icon:p.a,text:"Explore"}),c.a.createElement(o,{Icon:E.a,text:"Notification"}),c.a.createElement(o,{Icon:g.a,text:"Messages"}),c.a.createElement(o,{Icon:h.a,text:"Bookmarks"}),c.a.createElement(o,{Icon:N.a,text:"Lists"}),c.a.createElement(o,{Icon:w.a,text:"Profile"}),c.a.createElement(o,{Icon:I.a,text:"More"}),c.a.createElement(A.a,{variant:"outlined",className:"sidebar__tweet",fullWidth:!0},"Tweet"))},j=a(19),S=(a(103),a(105),a(138)),B=a(56);a(110),a(111);B.a.initializeApp({apiKey:"AIzaSyDZI0Te9lhCw_XKfxzKPdUKyaeubo00TI0",authDomain:"twitterclone-1633d.firebaseapp.com",projectId:"twitterclone-1633d",storageBucket:"twitterclone-1633d.appspot.com",messagingSenderId:"186098702836",appId:"1:186098702836:web:0a6862212b9d347ce081a1",measurementId:"G-DQES6NJ7P5"});var O=B.a.firestore();var T=function(){var e=Object(n.useState)(""),t=Object(j.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),s=Object(j.a)(l,2),i=s[0],o=s[1];return c.a.createElement("div",{className:"tweetBox"},c.a.createElement("form",null,c.a.createElement("div",{className:"tweetBox_input"},c.a.createElement(S.a,{src:"https://instagram.fdel29-1.fna.fbcdn.net/v/t51.2885-19/273742555_475602894102845_3602542939449899261_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fdel29-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=hTZkmh8NgXIAX_Wr-Yt&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDkpLIZ1ggfamllVnZskoRDUKb6MvC43wv2A7XHSsQuKg&oe=644AB3F8&_nc_sid=8fd12b://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"}),c.a.createElement("input",{onChange:function(e){return r(e.target.value)},value:a,placeholder:"What'Happening",type:"text"})),c.a.createElement("input",{value:i,onChange:function(e){return o(e.target.value)},className:"tweetBox_image",placeholder:"Optional Enter image URL",type:"text"}),c.a.createElement(A.a,{onClick:function(e){e.preventDefault(),O.collection("posts").add({displayName:"Prateek Sharma",username:"@prateek2701",verified:!0,text:a,image:i,avatar:"https://instagram.fdel29-1.fna.fbcdn.net/v/t51.2885-19/273742555_475602894102845_3602542939449899261_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fdel29-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=hTZkmh8NgXIAX_Wr-Yt&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfDkpLIZ1ggfamllVnZskoRDUKb6MvC43wv2A7XHSsQuKg&oe=644AB3F8&_nc_sid=8fd12b://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"}),r(""),o("")},type:"submit",className:"tweetBox_button"},"Tweet")))},C=(a(112),a(68)),K=a.n(C),L=a(100),D=a.n(L),X=a(69),F=a.n(X),R=a(101),z=a.n(R),P=a(70),Z=a.n(P);var H=function(e){return c.a.createElement("div",{className:"post"},c.a.createElement("div",{className:"post_avatar"},c.a.createElement(S.a,{src:e.avatar})),c.a.createElement("div",{className:"post_body"},c.a.createElement("div",{className:"post_header"},c.a.createElement("div",{className:"header_text"},c.a.createElement("h3",null,e.displayName,c.a.createElement("span",{className:"post__headerspecial"},e.verified&&c.a.createElement(K.a,{className:"header_verified"}),e.username))),c.a.createElement("div",{className:"body_text"},c.a.createElement("p",null,e.text))),c.a.createElement("img",{src:e.image}),c.a.createElement("div",{className:"footer"},c.a.createElement(D.a,{fontSize:"small"}),c.a.createElement(F.a,{fontSize:"small"}),c.a.createElement(z.a,{fontSize:"small"}),c.a.createElement(Z.a,{fontSize:"small"}))))};a(114);var J=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)(function(){O.collection("posts").onSnapshot(function(e){return r(e.docs.map(function(e){return e.data()}))})},[]),c.a.createElement("div",{className:"feed"},c.a.createElement("div",{className:"feed__header"},c.a.createElement("h2",null,"Home")),c.a.createElement(T,null),a.map(function(e){return c.a.createElement(H,{key:e.text,displayName:e.displayName,username:e.usename,verified:e.verified,text:e.text,avatar:e.avatar,image:e.image})}))},M=(a(115),a(48));var Q=function(){return c.a.createElement("div",{className:"widgets"},c.a.createElement("div",{className:"widgets_input"},c.a.createElement(p.a,{className:"search_icon"}),c.a.createElement("input",{className:"search_input",placeholder:"Twitter Search",type:"text"})),c.a.createElement("div",{className:"widget_container"},c.a.createElement("h2",null,"What's happening"),c.a.createElement(M.c,{tweetId:"1650343831844552709"}),c.a.createElement(M.b,{sourceType:"profile",screenName:"prateek27012002",options:{height:400}}),c.a.createElement(M.a,{className:"shareButton",url:"https://twitter.com/prateek27012002",options:{text:"hey",via:"Prateek"}})))};var W=function(){return c.a.createElement("div",{className:"app"},c.a.createElement(y,null),c.a.createElement(J,null),c.a.createElement(Q,null))},U=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,135)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),r(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(W,null))),U()},75:function(e,t,a){e.exports=a(118)},83:function(e,t,a){},85:function(e,t,a){},87:function(e,t,a){},89:function(e,t,a){}},[[75,3,2]]]);
//# sourceMappingURL=main.5ee05cfe.chunk.js.map