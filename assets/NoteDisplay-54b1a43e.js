import{d,i as u,a as m,f as i,E as l,g as r,t as c,o as s,_ as p}from"./index-1ab5655a.js";const f=["innerHTML"],k=["textContent"],v=["textContent"],y=d({__name:"NoteDisplay",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1}},emits:["click"],setup(t){const n=t;return u(m),(o,e)=>t.noteHtml?(s(),i("div",{key:0,class:l(["prose overflow-auto outline-none",n.class]),onClick:e[0]||(e[0]=a=>o.$emit("click")),innerHTML:t.noteHtml},null,10,f)):t.note?(s(),i("div",{key:1,class:l(["prose overflow-auto outline-none",n.class]),onClick:e[1]||(e[1]=a=>o.$emit("click"))},[r("p",{textContent:c(t.note)},null,8,k)],2)):(s(),i("div",{key:2,class:l(["prose overflow-auto outline-none opacity-50 italic",n.class]),onClick:e[2]||(e[2]=a=>o.$emit("click"))},[r("p",{textContent:c(n.placeholder||"No notes.")},null,8,v)],2))}}),g=p(y,[["__file","/home/runner/work/front-end-team-guide/front-end-team-guide/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{g as N};
