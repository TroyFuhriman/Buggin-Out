(function(t){function e(e){for(var a,r,n=e[0],c=e[1],l=e[2],d=0,p=[];d<n.length;d++)r=n[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&p.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),s()}function s(){for(var t,e=0;e<i.length;e++){for(var s=i[e],a=!0,n=1;n<s.length;n++){var c=s[n];0!==o[c]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},o={app:0},i=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var u=c;i.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0383":function(t,e,s){"use strict";var a=s("7505"),o=s.n(a);o.a},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bg-light grow",attrs:{id:"app"}},[s("navbar"),s("router-view")],1)},i=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-info"},[s("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"Home"}}},[s("i",{staticClass:"fa fa-bug",attrs:{"aria-hidden":"true"}}),t._v(" Buggin")]),t._m(0),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[s("ul",{staticClass:"navbar-nav mr-auto"},[s("li",{staticClass:"nav-item",class:{active:"Home"==t.$route.name}},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"Home"}}},[t._v("Home")])],1),t.$auth.isAuthenticated?s("li",{staticClass:"nav-item",class:{active:"Profile"==t.$route.name}},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"Profile"}}},[t._v("Profile")])],1):t._e()]),s("div",{staticClass:"mr-2"},[s("button",{staticClass:"btn btn-warning",attrs:{type:"button","data-toggle":"modal","data-target":"#staticBackdrop"}},[t._v(" I Found A Bug!! ")]),s("div",{staticClass:"modal fade",attrs:{id:"staticBackdrop",tabindex:"-1",role:"dialog","aria-labelledby":"staticBackdropLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(1),s("div",{staticClass:"modal-body"},[s("form",{staticClass:" form-group"},[s("div",{staticClass:"row justify-content-center mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBug.title,expression:"newBug.title"}],staticClass:" form-control col-6",attrs:{type:"text",name:"title",id:"title",placeholder:"Title...","aria-describedby":"helpId",required:""},domProps:{value:t.newBug.title},on:{input:function(e){e.target.composing||t.$set(t.newBug,"title",e.target.value)}}})]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newBug.description,expression:"newBug.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",id:"description",placeholder:"Description...","aria-describedby":"helpId",required:""},domProps:{value:t.newBug.description},on:{input:function(e){e.target.composing||t.$set(t.newBug,"description",e.target.value)}}})])]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" Close ")]),s("button",{staticClass:" btn btn-success",attrs:{"data-dismiss":"modal"},on:{click:t.addBug}},[t._v(" declare to the world ")])])])])])]),s("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?s("button",{staticClass:"btn btn-danger",on:{click:t.logout}},[t._v("logout")]):s("button",{staticClass:"btn btn-success",on:{click:t.login}},[t._v(" Login ")])])])],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"staticBackdropLabel"}},[t._v(" Discovered ")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal1","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],c=s("bc3a"),l=s.n(c),u=s("335d"),d={name:"Navbar",data(){return{newBug:{}}},methods:{async login(){await this.$auth.loginWithPopup(),this.$store.dispatch("setBearer",this.$auth.bearer),console.log("this.$auth.user: "),console.log(this.$auth.user),this.$store.dispatch("getProfile")},async logout(){this.$store.dispatch("resetBearer"),await this.$auth.logout({returnTo:window.location.origin})},addBug(){this.$store.dispatch("addBug",{...this.newBug}),this.newBug={}}}},p=d,g=s("2877"),m=Object(g["a"])(p,r,n,!1,null,null,null),b=m.exports,h={name:"App",async beforeCreate(){await Object(u["c"])(),this.$auth.isAuthenticated&&(this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"))},components:{Navbar:b}},v=h,f=(s("5c0b"),Object(g["a"])(v,o,i,!1,null,null,null)),_=f.exports,C=s("8c4f"),w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home container-fluid"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"row justify-content-end"},[s("div",{staticClass:"col-3"},[s("span",{staticClass:"mr-2 text-right"},[t._v("Hide closed ")]),s("input",{staticClass:"btn btn-warning",attrs:{type:"checkbox"},on:{click:function(e){t.filtered=!t.filtered}}})])])]),s("div",{staticClass:"col-10"},[s("div",{staticClass:"row border bg-success text-light shadow text-shadow text-center"},[t._m(0),t._m(1),t._m(2),t.see?t._e():s("div",{staticClass:"col-3",attrs:{type:"button"},on:{click:t.sortC}},[t._m(3)]),t.see?s("div",{staticClass:"col-3",attrs:{type:"button"},on:{click:t.sortD}},[t._m(4)]):t._e()])])]),s("div",{staticClass:"row my-2 justify-content-center"},[t.filtered?t._e():s("div",{staticClass:"col-10 border border-dark shadow"},t._l(t.bugs,(function(t){return s("bugs",{key:t.id,attrs:{bug:t}})})),1),t.filtered?s("div",{staticClass:"col-10 border border-dark shadow"},t._l(t.filteredBugs,(function(t){return s("bugs",{key:t.id,attrs:{bug:t}})})),1):t._e()])])},y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-3 border-right"},[s("h3",[t._v("Title")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-3 border-right"},[s("h3",[t._v("Found By")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-3 border-right"},[s("h3",[t._v("Last Updated")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h3",[t._v("resolved "),s("i",{staticClass:"fa fa-sort",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h3",[t._v("resolved "),s("i",{staticClass:"fa fa-sort",attrs:{"aria-hidden":"true"}})])}],B=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bugs text-center row justify-content-center"},[s("div",{staticClass:"col-12 bg-white py-3 mb-2"},[s("div",{staticClass:"row"},[s("router-link",{staticClass:"col-3",attrs:{to:{name:"ActiveBug",params:{id:t.bug.id}}}},[s("div",{staticClass:" "},[s("h5",[t._v(t._s(t.bug.title))])])]),s("div",{staticClass:"col-3 "},[s("h5",[t._v(t._s(t.bug.creatorEmail))])]),s("div",{staticClass:"col-3 "},[s("h5",[t._v(t._s(new Date(t.bug.updatedAt).toLocaleDateString("en-US")))])]),t.profile.email==t.bug.creatorEmail?s("div",{staticClass:"col-3"},[s("h5",{attrs:{id:"close1"}},[t._v(t._s(t.closed()))])]):t._e(),t.profile.email!=t.bug.creatorEmail?s("div",{staticClass:"col-3"},[s("h5",{attrs:{id:"close2"}},[t._v(t._s(t.closed()))])]):t._e()],1)])])},$=[],x={name:"Bugs",props:["bug"],data(){return{}},computed:{profile(){return this.$store.state.profile}},methods:{closed(){return 1==this.bug.closed?"closed":"open"},deleteBug(){this.$store.dispatch("deleteBug",this.bug.id)},closeBug(){1==this.bug.closed?(this.bug.closed=!1,this.$store.dispatch("closeBug",this.bug)):this.bug.closed=!0,this.$store.dispatch("closeBug",this.bug)}},components:{}},N=x,k=Object(g["a"])(N,B,$,!1,null,"3be02aa4",null),j=k.exports,E={name:"home",data(){return{see:!1,filtered:!1}},computed:{bugs(){return this.$store.state.bugs},filteredBugs(){return this.bugs.filter(t=>0==t.closed)}},methods:{sortC(){this.see=!0,this.bugs.sort((function(t,e){var s=t.closed,a=e.closed;return s>a?-1:s<a?1:0}))},sortD(){this.see=!1,this.bugs.sort((function(t,e){var s=t.closed,a=e.closed;return s<a?-1:s>a?1:0}))},filterBugs(){return this.bugs.filter(t=>0==t.closed)}},components:{Bugs:j},mounted(){this.$store.dispatch("getBugs")}},P=E,O=Object(g["a"])(P,w,y,!1,null,"194f4c95",null),T=O.exports,F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about text-center"},[s("h1",[t._v("Welcome "+t._s(t.profile.name))]),s("img",{staticClass:"rounded",attrs:{src:t.profile.picture,alt:""}}),s("p",[t._v(t._s(t.profile.email))])])},A=[],D={name:"Profile",computed:{profile(){return this.$store.state.profile}}},M=D,H=(s("0383"),Object(g["a"])(M,F,A,!1,null,"59c2bb44",null)),I=H.exports,L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"active-bug container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col text-center mt-3"},[t.bugForm?s("form",{staticClass:" form-group",on:{submit:function(e){return e.preventDefault(),t.editBug(e)}}},[s("div",{staticClass:"row justify-content-center mb-3"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.bug.title,expression:"bug.title"}],staticClass:" form-control col-6",attrs:{type:"text",name:"title",id:"title",placeholder:"Title...","aria-describedby":"helpId",required:""},domProps:{value:t.bug.title},on:{input:function(e){e.target.composing||t.$set(t.bug,"title",e.target.value)}}})]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.bug.description,expression:"bug.description"}],staticClass:"form-control",attrs:{type:"text",name:"description",id:"description",placeholder:"Description...","aria-describedby":"helpId",required:""},domProps:{value:t.bug.description},on:{input:function(e){e.target.composing||t.$set(t.bug,"description",e.target.value)}}}),s("button",{staticClass:"mt-3 btn btn-warning",attrs:{type:"submit"}},[t._v("Edit")])]):t._e(),t.bug.closed?s("span",[s("h2",[t._v(" "+t._s(t.bug.title)+" ")]),s("p",[t._v(t._s(t.bug.description))])]):t._e(),t.bug.closed?t._e():s("span",[t.profile.email==t.bug.creatorEmail?s("span",[s("span",{attrs:{type:"button"},on:{click:function(e){t.bugForm=!t.bugForm}}},[s("h2",[t._v(" "+t._s(t.bug.title)+" ")]),s("p",[t._v(t._s(t.bug.description))])])]):t._e(),t.profile.email!=t.bug.creatorEmail?s("span",[s("h2",[t._v(" "+t._s(t.bug.title)+" ")]),s("p",[t._v(t._s(t.bug.description))])]):t._e()]),s("p",[t._v("found by: "+t._s(t.bug.creatorEmail))]),t.profile.email==t.bug.creatorEmail?s("div",{attrs:{type:"button"},on:{click:t.closeBug}},[t.bug.closed?s("p",{staticClass:"text-danger"},[t._v(" current status: "+t._s(t.closed())+" ")]):t._e(),t.bug.closed?t._e():s("p",{staticClass:"text-success"},[t._v(" current status: "+t._s(t.closed())+" ")])]):t._e(),t.profile.email!=t.bug.creatorEmail?s("div",[s("h5",[t._v(t._s(t.closed()))])]):t._e()])]),s("div",{staticClass:"row justify-content-center"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-toggle":"modal","data-target":"#exampleModal"}},[t._v(" Tell us about this bug ")]),s("div",{staticClass:"modal fade",attrs:{id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(0),s("div",{staticClass:"modal-body"},[s("form",{},[s("div",{staticClass:"form-group"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newNote.content,expression:"newNote.content"}],staticClass:"form-control",attrs:{id:"exampleFormControlTextarea1",rows:"3",placeholder:"Add Note here..."},domProps:{value:t.newNote.content},on:{input:function(e){e.target.composing||t.$set(t.newNote,"content",e.target.value)}}})]),s("div",{staticClass:"row justify-content-center"})])]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v(" Close ")]),s("button",{staticClass:" btn btn-success",attrs:{"data-dismiss":"modal"},on:{click:t.addNote}},[t._v(" Post Note ")])])])])])]),s("div",{staticClass:"row justify-content-center"},t._l(t.notes,(function(t){return s("notes",{key:t.id,attrs:{note:t}})})),1)])},S=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"modal-header"},[s("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v(" What is it doing?! ")]),s("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[s("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"notes mt-3 col-10"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col text-center"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title",on:{click:function(e){t.noteForm=!t.noteForm}}},[t._v(" "+t._s(t.note.content)+" ")]),s("div",{staticClass:"row justify-content-center"},[t.noteForm?s("form",{staticClass:"col-9",on:{submit:function(e){return e.preventDefault(),t.editNote(e)}}},[s("div",{staticClass:"form-group"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.note.content,expression:"note.content"}],staticClass:"form-control",attrs:{id:"exampleFormControlTextarea1",rows:"3",placeholder:"Edit Note here..."},domProps:{value:t.note.content},on:{input:function(e){e.target.composing||t.$set(t.note,"content",e.target.value)}}})]),t._m(0)]):t._e()]),s("p",{staticClass:"card-text"},[t._v(t._s(t.note.creatorEmail))])]),s("div",{staticClass:"row justify-content-center"},[s("button",{staticClass:"btn btn-danger col-1",on:{click:t.deleteNote}},[t._v(" Delete ")])])])])])])},U=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row justify-content-center"},[s("button",{staticClass:"btn btn-warning col-2",attrs:{type:"submit"}},[t._v(" Edit Note ")])])}],Y={name:"notes",data(){return{noteForm:!1}},mounted(){},props:["note"],computed:{},methods:{editNote(){this.$store.dispatch("editNote",{...this.note}),this.noteForm=!1},deleteNote(){swal({title:"Are you sure?",text:"Once deleted, you will not be able to recover this Note!",icon:"warning",buttons:!0,dangerMode:!0}).then(t=>{t?(swal("Your Note has been deleted!",{icon:"success"}),this.$store.dispatch("deleteNote",this.note)):swal("Your Note is safe!")})}},components:{bug(){return this.$store.state.activeBug}}},z=Y,J=Object(g["a"])(z,q,U,!1,null,"7c660c74",null),W=J.exports,R={name:"active-bug",data(){return{newNote:{bug:this.$route.params.id},bugForm:!1}},mounted(){this.$store.dispatch("activeBug",this.$route.params.id),this.$store.dispatch("getNotes",this.$route.params.id)},computed:{bug(){return this.$store.state.activeBug},notes(){return this.$store.state.notes},profile(){return this.$store.state.profile}},methods:{closed(){return 1==this.bug.closed?"Closed":"Open"},addNote(){this.$store.dispatch("addNote",{...this.newNote}),this.newNote={bug:this.$route.params.id}},closeBug(){0==this.bug.closed&&swal({title:"Are you sure?",text:"If you close the bug it will not be able to be undone!",icon:"warning",buttons:!0,dangerMode:!0}).then(t=>{t?(swal("The Bug has been closed",{icon:"success"}),this.bug.closed=!0,this.$store.dispatch("closeBug",this.bug)):swal("More debugging to do!")})},editBug(){this.$store.dispatch("closeBug",this.bug),this.bugForm=!1}},components:{notes:W}},G=R,K=Object(g["a"])(G,L,S,!1,null,"a34246ec",null),Q=K.exports;a["a"].use(C["a"]);const V=[{path:"/",name:"Home",component:T},{path:"/profile",name:"Profile",component:I,beforeEnter:u["b"]},{path:"/bugDetails/:id",name:"ActiveBug",component:Q,beforeEnter:u["b"]}],X=new C["a"]({routes:V});var Z=X,tt=s("2f62");a["a"].use(tt["a"]);let et=location.host.includes("localhost")?"http://localhost:3000/":"/",st=l.a.create({baseURL:et+"api",timeout:3e3,withCredentials:!0});var at=new tt["a"].Store({state:{profile:{},bugs:[],activeBug:{},notes:[]},mutations:{setProfile(t,e){t.profile=e},setBugs(t,e){t.bugs=e},activeBug(t,e){t.activeBug=e},setNotes(t,e){t.notes=e},addToBugs(t,e){t.bugs.push(e)}},actions:{setBearer({},t){st.defaults.headers.authorization=t},resetBearer(){st.defaults.headers.authorization=""},async getProfile({commit:t}){try{let e=await st.get("profile");t("setProfile",e.data)}catch(e){console.error(e)}},async getBugs({commit:t,dispatch:e}){try{let e=await st.get("bugs");t("setBugs",e.data)}catch(s){console.error(s)}},async activeBug({commit:t,dispatch:e},s){try{let a=await st.get("bugs/"+s);t("activeBug",a.data),e("getNotes",a.data.id)}catch(a){console.error(a)}},async addBug({commit:t,dispatch:e},s){try{let a=await st.post("bugs",s);t("addToBugs",a.data),e("activeBug",a.data._id),Z.push({name:"ActiveBug",params:{id:a.data._id}})}catch(a){console.error(a)}},async closeBug({commit:t,dispatch:e},s){try{await st.put("bugs/"+s.id,s);e("getBugs")}catch(a){console.error(a)}},async deleteBug({commit:t,dispatch:e},s){try{await st.delete("bugs/"+s);e("getBugs")}catch(a){console.error(a)}},async getNotes({commit:t,dispatch:e},s){try{let e=await st.get("bugs/"+s+"/notes");t("setNotes",e.data)}catch(a){console.error(a)}},async addNote({commit:t,dispatch:e},s){try{await st.post("notes",s);e("getNotes",s.bug)}catch(a){console.error(a)}},async editNote({commit:t,dispatch:e},s){try{await st.put("notes/"+s.id,s);console.log(s),e("getNotes",s.bug.id)}catch(a){console.error(a)}},async deleteNote({commit:t,dispatch:e},s){try{await st.delete("notes/"+s.id);e("getNotes",s.bug.id)}catch(a){console.error(a)}}}});const ot="troy-tenant.auth0.com",it="https://troy-student.com",rt="aJIq7rj4w39wYc7BHakp7HqYrF8zPd78";s("6206");a["a"].use(u["a"],{domain:ot,clientId:rt,audience:it,onRedirectCallback:t=>{Z.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new a["a"]({router:Z,store:at,render:function(t){return t(_)}}).$mount("#app")},"5c0b":function(t,e,s){"use strict";var a=s("9c0c"),o=s.n(a);o.a},7505:function(t,e,s){},"9c0c":function(t,e,s){}});