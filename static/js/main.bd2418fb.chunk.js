(this.webpackJsonpresturant=this.webpackJsonpresturant||[]).push([[0],{11:function(e,i,t){},12:function(e,i,t){"use strict";t.r(i);var s=t(1),a=t.n(s),c=t(3),n=t.n(c),u=(t(9),t(4)),r=[{id:1,image:"images/maggi.jpg",name:"maggi",category:"breakfast",price:"12 ruppees",description:"I love Maggi realy oo yues  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . "},{id:2,image:"images/allupakoida.jpg",name:"Allu Pakoda",category:"lunch",price:"20",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . "},{id:3,image:"images/corn flakes.jpg",name:"Corn Flakes",category:"breakfast",price:"10 ruppees",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . "},{id:4,image:"../images/chola.jpg",name:"Chawal Cholay",category:"lunch",price:"50 ruppees",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . "},{id:5,image:"../images/pizza.jpg",name:"pizza",category:"lunch",price:"80 ruppees",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . "},{id:6,image:"../images/nonvegthali.jpg",name:"Non-Veg Dish",category:"dinner",price:"180 ruppees",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . "},{id:7,image:"../images/sweet.jpg",name:"Sweets",category:"dinner",price:"60 ruppees",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . "},{id:8,image:"../images/rajmarice.jpg",name:"Turkish Rice",category:"dinner",price:"60 ruppees",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . "},{id:9,image:"../images/samosa.jpg",name:"samaso",category:"lunch",price:"10 ruppees",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . "},{id:10,image:"images/Juice and Fruits.jpg",name:"Juice & Fruit",category:"breakfast",price:"12 ruppees",description:"I love Juices.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . "}],o=t(0),m=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"logos",style:{display:"flex",flexDirection:"row",alignContent:"center",padding:"5px",justifyContent:"center",width:"100%",paddingLeft:"20px",paddingRight:"20px",backgroundColor:"#FF5733",fontFamily:"Latto"},children:[Object(o.jsxs)("div",{className:"icons",children:[Object(o.jsx)("i",{className:"fab fa-github"}),Object(o.jsx)("a",{href:"https://github.com/zainshahbaz786",children:Object(o.jsx)("b",{children:"ZainShahbaz786"})})]}),"\xa0\xa0\xa0\xa0",Object(o.jsxs)("div",{className:"icons",children:[Object(o.jsx)("i",{className:"fab fa-instagram"})," ",Object(o.jsx)("a",{href:"https://www.instagram.com/zain__shahbaz/",children:Object(o.jsx)("b",{children:"zain__shahbaz"})})]})]}),Object(o.jsx)("div",{style:{textAlign:"center",justifyContent:"center",width:"100%",fontSize:"20px"},children:Object(o.jsx)("i",{children:"  Thanks for Visiting :)"})}),Object(o.jsx)("br",{})]})},l=function(e){var i=e.menuData;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("section",{className:"main-card--cointainer",children:i.map((function(e){var i=e.id,t=e.name,s=e.category,a=e.image,c=e.description;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"card-container",children:Object(o.jsxs)("div",{className:"card ",children:[Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("span",{className:"card-number card-circle subtle",children:i}),Object(o.jsxs)("span",{className:"card-author subtle",children:[" ",s]}),Object(o.jsxs)("h2",{className:"card-title",children:[" ",t," "]}),Object(o.jsx)("span",{className:"card-description subtle",children:c}),Object(o.jsx)("div",{className:"card-read",children:"Read"})]}),Object(o.jsx)("img",{src:a,alt:"images",className:"card-media"}),Object(o.jsx)("span",{className:"card-tag  subtle",children:"Order Now"})]})},i)})}))}),Object(o.jsx)(m,{})]})},d=(t(11),function(){var e=Object(s.useState)(r),i=Object(u.a)(e,2),t=i[0],a=i[1],c=function(e){var i=r.filter((function(i){return i.category===e}));a(i)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("nav",{className:"navbar",children:Object(o.jsxs)("div",{className:"btn-group",children:[Object(o.jsx)("button",{className:"btn-group__item",onClick:function(){return c("breakfast")},children:"Breakfast"}),Object(o.jsx)("button",{className:"btn-group__item",onClick:function(){return c("lunch")},children:"Lunch"}),Object(o.jsx)("button",{className:"btn-group__item",onClick:function(){return c("dinner")},children:"Dinner"}),Object(o.jsx)("button",{className:"btn-group__item",onClick:function(){return a(r)},children:"All "})]})}),Object(o.jsx)(l,{menuData:t})]})});var p=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(d,{})})};n.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root"))},9:function(e,i,t){}},[[12,1,2]]]);
//# sourceMappingURL=main.bd2418fb.chunk.js.map