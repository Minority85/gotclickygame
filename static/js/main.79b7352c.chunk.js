(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,image:"./images/1/arya.jpg",name:"Arya"},{id:2,image:"./images/1/Bran.png",name:"Bran"},{id:3,image:"./images/1/Brienne.jpg",name:"Brienne"},{id:4,image:"./images/1/Cersei.png",name:"Cersei"},{id:5,image:"./images/1/Clegane.png",name:"Clegane"},{id:6,image:"./images/1/Joffrey.jpg",name:"Joffrey"},{id:7,image:"./images/1/Khal.jpg",name:"Khal"},{id:8,image:"./images/1/Melisandre.jpg",name:"Melisandre"},{id:9,image:"./images/1/Sansa.png",name:"Sanse"},{id:10,image:"./images/1/snow.jpg",name:"Snow"},{id:11,image:"./images/1/Targaryen.PNG",name:"Targaryen"},{id:12,image:"./images/1/Tyrion.png",name:"Tyrion"}]},function(e){e.exports=[{id:1,image:"./images/2/arya.jpg",name:"Arya"},{id:2,image:"./images/2/sansa.jpeg",name:"Sansa"},{id:3,image:"./images/2/jon.jpg",name:"Snow"},{id:4,image:"./images/2/arya.png",name:"Arya"},{id:5,image:"./images/2/sansa.jpg",name:"Sansa"},{id:6,image:"./images/2/snow.jpg",name:"Snow"},{id:7,image:"./images/2/arya2.jpg",name:"Arya"},{id:8,image:"./images/2/Sansa.png",name:"Sansa"},{id:9,image:"./images/2/snow2.jpg",name:"Snow"},{id:10,image:"./images/2/arya3.jpg",name:"Arya"},{id:11,image:"./images/2/sansa2.png",name:"Sansa"},{id:12,image:"./images/2/snow3.jpg",name:"Snow"}]},function(e){e.exports=[{id:1,image:"./images/3/jon.jpg",name:"Snow"},{id:2,image:"./images/3/jon2.jpg",name:"Snow"},{id:3,image:"./images/3/jon3.jpg",name:"Snow"},{id:4,image:"./images/3/jon4.jpeg",name:"Snow"},{id:5,image:"./images/3/jon5.jpg",name:"Snow"},{id:6,image:"./images/3/jon6.jpg",name:"Snow"},{id:7,image:"./images/3/snow.jpg",name:"Snow"},{id:8,image:"./images/3/snow2.jpg",name:"Snow"},{id:9,image:"./images/3/snow3.jpg",name:"Snow"},{id:10,image:"./images/3/snow4.jpg",name:"Snow"},{id:11,image:"./images/3/snow5.jpg",name:"Snow"},{id:12,image:"./images/3/snow6.png",name:"Snow"}]},,,,,,,,function(e,a,t){e.exports=t(19)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var i=t(0),n=t.n(i),s=t(5),r=t.n(s),o=t(6),m=t(7),c=t(9),g=t(8),l=t(10);t(17);var d=function(e){return n.a.createElement("div",{className:"btn btn-success",id:"easy",type:"button",onClick:function(){return e.changeEasy(1)}},"Easy")};var u=function(e){return n.a.createElement("div",{className:"btn btn-warning ml-2 mr-2",id:"medium",type:"button",onClick:function(){return e.changeMedium(2)}},"Medium")};var h=function(e){return n.a.createElement("div",{className:"btn btn-danger",id:"hard",type:"button",onClick:function(){return e.changeHard(3)}},"Hard")};t(18);var f=function(e){return n.a.createElement("div",{className:"card",id:e.id,onClick:function(){return e.swapPortraits(e.id)}},n.a.createElement("img",{className:"sizeFix",alt:e.name,src:e.image}))},S=t(1),p=t(2),w=t(3),y=function(e){function a(){var e,t;Object(o.a)(this,a);for(var i=arguments.length,n=new Array(i),s=0;s<i;s++)n[s]=arguments[s];return(t=Object(c.a)(this,(e=Object(g.a)(a)).call.apply(e,[this].concat(n)))).state={difficulty:S,idHolder:[],score:0,eHighScore:0,mHighScore:0,hHighScore:0},t.changeEasy=function(e){t.state.score;var a=t.state.idHolder;t.setState({score:0}),a.length=0,t.setState({idHolder:a}),console.log(e),t.setState({difficulty:S})},t.changeMedium=function(e){t.state.score;var a=t.state.idHolder;t.setState({score:0}),a.length=0,t.setState({idHolder:a}),console.log(e),t.setState({difficulty:p})},t.changeHard=function(e){t.state.score;var a=t.state.idHolder;t.setState({score:0}),a.length=0,t.setState({idHolder:a}),console.log(e),t.setState({difficulty:w})},t.swapPortraits=function(e){var a=t.state.idHolder,i=t.state.idHolder.includes(e),n=t.state.score;i?(n=0,t.setState({score:n}),alert("OH NO! That picture has already been picked. Try again?"),a.length=0,t.setState({idHolder:a})):i||(n++,t.setState({score:n}),a.push(e),t.setState({idHolder:a}),t.truffleShuffle(),t.setHighScore(n))},t}return Object(l.a)(a,e),Object(m.a)(a,[{key:"truffleShuffle",value:function(){for(var e,a,t=this.state.difficulty,i=t.length;i;)a=Math.floor(Math.random()*i--),e=t[i],t[i]=t[a],t[a]=e;this.setState({difficulty:t})}},{key:"setHighScore",value:function(e){var a=this.state.difficulty,t=e,i=this.state.idHolder,n=this.state.eHighScore,s=this.state.mHighScore,r=this.state.hHighScore;if(console.log(t),a===S)if(12===t){if(12===n)return;n=t,this.setState({eHighScore:n}),alert("You Win! Now try Medium or Hard!?"),e=0,this.setState({score:e}),i.length=0,this.setState({idHolder:i})}else{if(t<n)return;n=t,this.setState({eHighScore:n})}else if(a===p)if(12===t){if(12===s)return;s=t,this.setState({mHighScore:s}),alert("You Win! Now try Medium or Hard!?"),e=0,this.setState({score:e}),i.length=0,this.setState({idHolder:i})}else{if(t<s)return;s=t,this.setState({mHighScore:s})}else if(a===w)if(12===t){if(12===r)return;r=t,this.setState({hHighScore:r}),alert("You Win! Now try Medium or Hard!?"),e=0,this.setState({score:e}),i.length=0,this.setState({idHolder:i})}else{if(t<r)return;r=t,this.setState({hHighScore:r})}}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("div",{className:"navbar navbar-dark bg-dark",id:"navFix1"},n.a.createElement("span",{className:"navbar-text"},n.a.createElement("img",{src:"./images/logo.png",alt:"Logo",id:"navFix2"})),n.a.createElement("div",null,n.a.createElement(d,{changeEasy:this.changeEasy}),n.a.createElement(u,{changeMedium:this.changeMedium}),n.a.createElement(h,{changeHard:this.changeHard}))),n.a.createElement("div",{className:"jumbotron jumbotron-fluid"},n.a.createElement("div",{className:"container"},n.a.createElement("p",{className:"text-center"},"This is a modified jumbotron that occupies the entire horizontal space of its parent."))),n.a.createElement("div",{className:"conatiner"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-3 m-auto text-center"},n.a.createElement("h2",null,"Score: ",this.state.score)),n.a.createElement("div",{className:"col-6"},n.a.createElement("div",{className:"m-auto"},this.state.difficulty.map(function(a){return n.a.createElement(f,{swapPortraits:e.swapPortraits,id:a.id,key:a.id,name:a.name,image:a.image})}))),n.a.createElement("div",{className:"col-3 m-auto"},n.a.createElement("h2",null,"High Score"),n.a.createElement("h4",null,"Easy: ",this.state.eHighScore),n.a.createElement("h4",null,"Medium: ",this.state.mHighScore),n.a.createElement("h4",null,"Hard: ",this.state.hHighScore)))))}}]),a}(i.Component);var H=function(){return n.a.createElement(y,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.79b7352c.chunk.js.map