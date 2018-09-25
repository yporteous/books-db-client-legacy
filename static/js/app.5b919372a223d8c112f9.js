webpackJsonp([1],{"62RG":function(e,t){},"74WR":function(e,t){},"91HR":function(e,t){},AsO3:function(e,t){},NHnr:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=o("7+uW"),n={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"search-bar"},[o("div",{staticClass:"nav-item nav-link",on:{click:function(t){e.$router.push({name:"Summary"})}}},[e._v("Home")]),e._v(" "),o("div",{staticClass:"nav-item nav-link",on:{mouseover:function(t){e.shelfList=!0},mouseleave:function(t){e.shelfList=!1}}},[e._v("\n    Bookshelves ▾\n    "),o("div",{staticClass:"dropdown-content",class:{"dropdown-show":e.shelfList}},e._l(e.shelves,function(t){return o("div",{key:t,staticClass:"nav-item dropdown-link",on:{click:function(o){e.goToShelf(t)}}},[o("span",{staticClass:"dropdown-text"},[e._v(e._s(t))])])}))]),e._v(" "),o("div",{staticClass:"nav-item search"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],staticClass:"search-box",attrs:{type:"search",placeholder:"Search..."},domProps:{value:e.searchQuery},on:{input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}})])])},staticRenderFns:[]};var a={name:"App",components:{Search:o("VU/8")({name:"Search",data:function(){return{shelfList:!1}},methods:{goToShelf:function(e){this.$router.push({name:"Bookshelf",params:{shelfName:e.replace(/ /g,"_")}})}},computed:{shelves:function(){return this.$store.state.shelves},searchQuery:{get:function(){return this.$store.state.searchQuery},set:function(e){e&&!this.$router.currentRoute.path.match(/\/bookshelf\//)&&this.$router.push({name:"Bookshelf",params:{shelfName:this.$store.state.currentShelf}}),this.$store.commit("setSearchQuery",e)}}}},n,!1,function(e){o("Psgu")},"data-v-3850f6cc",null).exports},mounted:function(){this.$store.dispatch("refreshShelvesList"),this.$store.dispatch("refreshBooksList")}},r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("Search"),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var i=o("VU/8")(a,r,!1,function(e){o("Ukmh")},null,null).exports,l=o("/ocq"),u=o("//Fk"),c=o.n(u),h=o("NYxO"),f=o("mtWM"),m=o.n(f);s.a.use(h.a);var d=new h.a.Store({state:{authKey:"",searchQuery:"",books:[],colours:["#888","#8bf","#fba","#bf9","#9fd","#eaf","#bef"],shelves:["All"],shelfColours:{All:"#ccc"},currentShelf:"All",url:"https://quiet-woodland-63691.herokuapp.com/"},actions:{refreshShelvesList:function(e){(0,e.commit)("getShelves")},refreshBooksList:function(e){(0,e.commit)("getBooks")},loadAuth:function(e){var t=e.state,o=e.commit,s=localStorage.getItem("auth");return s?m.a.get(t.url+"users/me",{headers:{"x-auth":s}}).then(function(e){o("setAuthKey",s)}).catch(function(e){localStorage.removeItem("auth")}):new c.a(function(e,t){e("Key does not exist")})},removeShelf:function(e,t){var o=e.commit,s=e.dispatch;o("removeShelfFromState",t),s("saveShelves")},saveNewShelf:function(e,t){var o=e.commit,s=e.dispatch;o("addNewShelf",t),s("saveShelves")},updateShelf:function(e,t){var o=e.commit,s=e.dispatch;o("editShelf",t),s("saveShelves")},saveShelves:function(e){e.commit;var t=e.state,o=t.shelves.map(function(e){return{name:e,colour:t.shelfColours[e]}});m.a.post(t.url+"shelves",{shelves:o},{headers:{"x-auth":t.authKey}}).then(function(e){},function(e){console.log(e)})}},mutations:{setAuthKey:function(e,t){e.authKey=t},setCurrentShelf:function(e,t){e.currentShelf=t},addNewShelf:function(e,t){e.shelves.push(t.name),e.shelves.sort(function(e,t){return"All"===e?-1:"All"===t?1:e<t?-1:e>t?1:void 0}),s.a.set(e.shelfColours,t.name,t.colour)},editShelf:function(e,t){s.a.set(e.shelfColours,t.name,t.colour)},removeShelfFromState:function(e,t){e.shelves=e.shelves.filter(function(e){return e!==t})},setSearchQuery:function(e,t){e.searchQuery=t},getShelves:function(e){m.a.get(e.url+"shelves",{headers:{"x-auth":e.authKey}}).then(function(t){e.shelves=t.data.shelves.map(function(e){return e.name}),t.data.shelves.forEach(function(t){s.a.set(e.shelfColours,t.name,t.colour)})},function(e){console.log(e)})},getBooks:function(e){m.a.get(e.url+"books",{headers:{"x-auth":e.authKey}}).then(function(t){e.books=t.data.books.sort(function(e,t){var o=e.author.split(" ").pop(),s=t.author.split(" ").pop();return o<s?-1:o>s?1:0})},function(e){console.log(e)})}}}),v={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"sidebar"},[o("h3",[e._v("Statistics")]),e._v(" "),e._l(e.dataItems,function(t){return o("div",{key:t.text,staticClass:"data-item"},[e._v("\n    "+e._s(t.text)+": "+e._s(t.val)+"\n  ")])})],2)},staticRenderFns:[]};var p={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"shelf-link",style:{backgroundColor:e.colour},on:{click:e.goToShelf}},[o("div",{staticClass:"shelf-name"},[e._v(e._s(e.name))]),e._v(" "),"All"!=e.name?o("div",{staticClass:"shelf-menu",on:{click:function(t){t.stopPropagation(),e.showMenu=!e.showMenu},mouseleave:function(t){t.stopPropagation(),e.showMenu=!1}}},[e._v("\n    …\n    "),o("div",{staticClass:"dropdown-content",class:{"dropdown-show":e.showMenu}},[o("div",{staticClass:"dropdown-link",on:{click:e.removeShelf}},[o("span",{staticClass:"dropdown-text"},[e._v("Remove shelf")])]),e._v(" "),o("div",{staticClass:"dropdown-link",attrs:{id:"colour-picker"}},e._l(e.colours,function(t,s){return o("div",{key:s,staticClass:"colour-item",style:{backgroundColor:t},on:{click:function(o){o.stopPropagation(),e.setColour(t)}}})}))])]):e._e()])},staticRenderFns:[]};var k={name:"Summary",components:{SummarySidebar:o("VU/8")({name:"SummarySidebar",computed:{dataItems:function(){return[{text:"Books",val:this.$store.state.books.length},{text:"Shelves",val:this.$store.state.shelves.filter(function(e){return"All"!==e}).length}]}}},v,!1,function(e){o("AsO3")},"data-v-e9716b2e",null).exports,ShelfLink:o("VU/8")({name:"ShelfLink",props:["name"],data:function(){return{showMenu:!1}},computed:{colour:function(){return this.$store.state.shelfColours[this.name]},path:function(){return this.name.replace(/ /g,"_")},colours:function(){return this.$store.state.colours}},methods:{goToShelf:function(){this.$router.push({name:"Bookshelf",params:{shelfName:this.path}})},removeShelf:function(){this.$store.dispatch("removeShelf",this.name)},setColour:function(e){var t={name:this.name,colour:e};this.$store.dispatch("updateShelf",t)}}},p,!1,function(e){o("WxTu")},null,null).exports},data:function(){return{showNewShelf:!1,newShelfName:"",colourPicker:!1,newShelfColour:"#888"}},computed:{colours:function(){return this.$store.state.colours},shelves:function(){return this.$store.state.shelves},shelfColours:function(){return this.$store.state.shelfColours},disallowSubmit:function(){return!this.newShelfName.length||this.shelves.indexOf(this.newShelfName.replace(/\b([a-z])/g,function(e){return e.toUpperCase()}))>-1},submitMessage:function(){return this.newShelfName.length?this.shelves.indexOf(this.newShelfName.replace(/\b([a-z])/g,function(e){return e.toUpperCase()}))>-1&&"Name already exists":"Must have a name"}},methods:{submitNew:function(){var e=this.newShelfName.replace(/\b([a-z])/g,function(e){return e.toUpperCase()});this.shelves.indexOf(e)>-1?console.log("Already exists"):(this.$store.dispatch("saveNewShelf",{name:e,colour:this.newShelfColour}),this.newShelfName="",this.showNewShelf=!1)}}},_={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"summary"},[o("SummarySidebar"),e._v(" "),o("div",{staticClass:"summary-main"},[o("h2",[e._v("Your Bookshelves")]),e._v(" "),e._l(e.shelves,function(e){return o("ShelfLink",{key:e,attrs:{name:e}})}),e._v(" "),o("div",{staticClass:"new-shelf",on:{click:function(t){t.stopPropagation(),e.showNewShelf=!0}}},[e.showNewShelf?o("div",{staticClass:"new-shelf-fields"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.newShelfName,expression:"newShelfName"}],attrs:{id:"new-shelf-name",type:"text",size:"20"},domProps:{value:e.newShelfName},on:{input:function(t){t.target.composing||(e.newShelfName=t.target.value)}}}),e._v(" "),o("div",{attrs:{id:"new-shelf-colour"},on:{mouseleave:function(t){e.colourPicker=!1},click:function(t){e.colourPicker=!e.colourPicker}}},[o("div",{staticClass:"colour-display",style:{backgroundColor:e.newShelfColour}}),e._v(" "),o("div",{staticClass:"dropdown-content",class:{"dropdown-show":e.colourPicker}},e._l(e.colours,function(t,s){return o("div",{key:s,staticClass:"dropdown-item",style:{backgroundColor:t},on:{click:function(o){o.stopPropagation(),e.newShelfColour=t}}})}))]),e._v(" "),o("button",{staticClass:"new-shelf-button",attrs:{type:"button",disabled:e.disallowSubmit,title:e.submitMessage},on:{click:function(t){return t.stopPropagation(),e.submitNew(t)}}},[e._v("Add shelf")]),e._v(" "),o("button",{staticClass:"new-shelf-button",attrs:{type:"button"},on:{click:function(t){t.stopPropagation(),e.showNewShelf=!1}}},[e._v("Cancel")])]):o("div",{staticClass:"sym-plus"},[e._v("+")])])],2)],1)},staticRenderFns:[]};var b=o("VU/8")(k,_,!1,function(e){o("74WR")},"data-v-682a2ebc",null).exports,y=o("gRE1"),g=o.n(y),C=o("M4fF"),w=o.n(C),S={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"book",style:{backgroundColor:e.bookColour}},[o("div",{staticClass:"summary"},[o("div",{staticClass:"book-title"},[e._v(e._s(e.title))]),e._v(" "),o("div",{staticClass:"book-author"},[e._v(e._s(e.author))])]),e._v(" "),o("div",{staticClass:"footer"},[o("span",{staticClass:"info-button",on:{click:e.bookInfoPage}},[e._v("ⓘ")])])])},staticRenderFns:[]};var $={name:"Summary",components:{Book:o("VU/8")({name:"Book",props:["title","author","_id","shelf"],computed:{bookColour:function(){return this.$store.state.shelfColours[this.shelf]}},methods:{bookInfoPage:function(){this.$router.push({name:"Book",params:{bookId:this._id}})}}},S,!1,function(e){o("62RG")},"data-v-f0126e8a",null).exports},data:function(){return{}},computed:{shelf:function(){return this.$route.params.shelfName.replace(/_/g," ")},filteredBooks:function(){var e=this;if(this.$store.state.searchQuery){var t=new RegExp("\\b"+this.$store.state.searchQuery.toLowerCase().replace(/ /g,"(.*?)").replace(/-/g,"(.*?)"));return this.$store.state.books.filter(function(t){return"All"===e.shelf||t.shelf===e.shelf}).filter(function(e){return g()(w.a.omit(e,["_id","shelf"])).join(" ").toLowerCase().match(t)})}return this.$store.state.books.filter(function(t){return"All"===e.shelf||t.shelf===e.shelf})}},mounted:function(){this.$store.commit("setCurrentShelf",this.$route.params.shelfName)}},x={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"bookshelf"},[o("div",{staticClass:"menu"},[o("button",{attrs:{type:"button"},on:{click:function(t){e.$router.push({name:"Add Book"})}}},[e._v("Add new book")])]),e._v(" "),o("div",{staticClass:"shelf"},e._l(e.filteredBooks,function(t){return o("Book",e._b({key:t._id},"Book",t,!1))}))])},staticRenderFns:[]};var N=o("VU/8")($,x,!1,function(e){o("91HR")},"data-v-3731f199",null).exports,L=o("woOf"),B=o.n(L),A={name:"Book",data:function(){return{info:{title:"",author:"",summary:"",series:"",year:"",publisher:"",shelf:""}}},computed:{bookId:function(){return this.$route.params.bookId},shelfColour:function(){return this.$store.state.shelfColours[this.info.shelf]}},methods:{editBook:function(){this.$router.push({name:"Edit Book",params:{bookId:this.bookId}})},backToShelf:function(){this.$router.push({name:"Bookshelf",params:{shelfName:this.$store.state.currentShelf}})}},mounted:function(){var e=this;m.a.get(this.$store.state.url+"books/"+this.bookId,{headers:{"x-auth":this.$store.state.authKey}}).then(function(t){e.info=B()({},e.info,t.data)},function(e){console.log(e)})}},P={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"book-info"},[o("div",{attrs:{id:"header"}},[o("div",{attrs:{id:"controls"}},[o("span",{staticStyle:{cursor:"pointer"},on:{click:e.backToShelf}},[e._v("<")])]),e._v(" "),o("div",{style:{backgroundColor:e.shelfColour},attrs:{id:"header-items"}},[o("div",{attrs:{id:"header-info"}},[o("h1",{staticClass:"book-title"},[e._v(e._s(e.info.title))]),e._v(" "),o("h3",{staticClass:"book-author"},[e._v(e._s(e.info.author))])]),e._v(" "),o("div",{attrs:{id:"shelf-info"}},[o("h2",[e._v(e._s(e.info.shelf))])])])]),e._v(" "),o("div",{staticClass:"main"},[o("div",{staticClass:"column"},[o("div",{staticClass:"image-placeholder"}),e._v(" "),o("div",{staticClass:"summary"},[e._v(e._s(e.info.summary))])]),e._v(" "),o("div",{staticClass:"column"},[o("table",[o("tr",[o("th",[e._v("Series")]),e._v(" "),o("td",[e._v(e._s(e.info.series))])]),e._v(" "),o("tr",[o("th",[e._v("Year")]),e._v(" "),o("td",[e._v(e._s(e.info.year))])]),e._v(" "),o("tr",[o("th",[e._v("Publisher")]),e._v(" "),o("td",[e._v(e._s(e.info.publisher))])])])])]),e._v(" "),o("div",{staticClass:"footer"},[o("button",{attrs:{type:"button"},on:{click:e.editBook}},[e._v("Edit book")])])])},staticRenderFns:[]};var I=o("VU/8")(A,P,!1,function(e){o("h0Zt")},"data-v-3bf42508",null).exports,R=o("fZjL"),E=o.n(R),U={name:"Book",data:function(){return{fields:[{name:"Title",type:"text"},{name:"Author",type:"text"},{name:"Series",type:"text"},{name:"Year",type:"text"},{name:"Publisher",type:"text"},{name:"Tags",type:"text"},{name:"Shelf",type:"select"},{name:"Summary",type:"textarea"}],errors:{title:!1,author:!1,series:!1,year:!1,publisher:!1,tags:!1,shelf:!1},info:{title:"",author:"",series:"",year:"",publisher:"",summary:"",tags:"",shelf:""}}},computed:{shelves:function(){return this.$store.state.shelves}},methods:{submitBook:function(){var e=this;E()(this.errors).map(function(t){e.errors[t]=!1});for(var t=["title","author","year","tags","shelf"],o=0;o<t.length;o++){var s=t[o];this.info[s]||(this.errors[s]=!0)}"number"!=typeof this.info.year&&(this.info.year&&isNaN(Number(this.info.year))||this.info.year.match(/\./))?this.errors.year=!0:this.info.year&&(this.info.year=Number(this.info.year)),-1===g()(this.errors).indexOf(!0)&&m.a.post(this.$store.state.url+"books/",{book:this.info},{headers:{"x-auth":this.$store.state.authKey}}).then(function(t){console.log("Book Added"),e.$store.dispatch("refreshBooksList"),e.$router.push({name:"Bookshelf",params:{shelfName:e.$store.state.currentShelf}})},function(e){console.log("Could not add book")})}}},F={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"add-book"},[o("table",{staticClass:"book-fields"},[e._l(e.fields,function(t){return o("tr",{key:t.name.toLowerCase()},[o("th",[e._v(e._s(t.name)+":")]),e._v(" "),o("td",["text"===t.type?o("input",{directives:[{name:"model",rawName:"v-model",value:e.info[t.name.toLowerCase()],expression:"info[field.name.toLowerCase()]"}],class:{"field-error":e.errors[t.name.toLowerCase()]},attrs:{size:"40",type:"text"},domProps:{value:e.info[t.name.toLowerCase()]},on:{input:function(o){o.target.composing||e.$set(e.info,t.name.toLowerCase(),o.target.value)}}}):"select"===t.type?o("select",{directives:[{name:"model",rawName:"v-model",value:e.info[t.name.toLowerCase()],expression:"info[field.name.toLowerCase()]"}],class:{"field-error":e.errors[t.name.toLowerCase()]},on:{change:function(o){var s=Array.prototype.filter.call(o.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.info,t.name.toLowerCase(),o.target.multiple?s:s[0])}}},e._l(e.shelves,function(t){return o("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])})):"textarea"===t.type?o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.info[t.name.toLowerCase()],expression:"info[field.name.toLowerCase()]"}],attrs:{name:"summary",rows:"12",cols:"38"},domProps:{value:e.info[t.name.toLowerCase()]},on:{input:function(o){o.target.composing||e.$set(e.info,t.name.toLowerCase(),o.target.value)}}}):e._e()])])}),e._v(" "),o("tr",[o("td"),e._v(" "),o("td",{staticClass:"table-submit"},[o("button",{attrs:{type:"button"},on:{click:e.submitBook}},[e._v("Add Book")])])])],2)])},staticRenderFns:[]};var K=o("VU/8")(U,F,!1,function(e){o("NYJV")},"data-v-3fda1cea",null).exports,M={name:"Book",data:function(){return{fields:[{name:"Title",type:"text"},{name:"Author",type:"text"},{name:"Series",type:"text"},{name:"Year",type:"text"},{name:"Publisher",type:"text"},{name:"Tags",type:"text"},{name:"Shelf",type:"select"},{name:"Summary",type:"textarea"}],errors:{title:!1,author:!1,series:!1,year:!1,publisher:!1,tags:!1,shelf:!1},info:{title:"",author:"",series:"",year:"",publisher:"",summary:"",tags:"",shelf:""}}},computed:{bookId:function(){return this.$route.params.bookId},shelves:function(){return this.$store.state.shelves}},methods:{cancel:function(){this.$router.push({name:"Book",params:{bookId:this.bookId}})},submitBook:function(){var e=this;E()(this.errors).map(function(t){e.errors[t]=!1});for(var t=["title","author","year","tags","shelf"],o=0;o<t.length;o++){var s=t[o];this.info[s]||(this.errors[s]=!0)}"number"!=typeof this.info.year&&(this.info.year&&isNaN(Number(this.info.year))||this.info.year.match(/\./)?this.errors.year=!0:this.info.year&&(this.info.year=Number(this.info.year))),-1===g()(this.errors).indexOf(!0)&&m.a.patch(this.$store.state.url+"books/"+this.$route.params.bookId,{book:this.info},{headers:{"x-auth":this.$store.state.authKey}}).then(function(t){console.log("Book Edited"),e.$store.dispatch("refreshBooksList"),e.$router.push({name:"Book",params:{bookId:e.bookId}})},function(e){console.log("Could not edit book")})},deleteBook:function(){var e=this;m.a.delete(this.$store.state.url+"books/"+this.$route.params.bookId,{headers:{"x-auth":this.$store.state.authKey}}).then(function(t){console.log("Book Deleted"),e.$store.dispatch("refreshBooksList"),e.$router.push({name:"Bookshelf",params:{shelfName:e.$store.state.currentShelf}})}).catch(function(e){console.log(e)})}},mounted:function(){var e=this;m.a.get(this.$store.state.url+"books/"+this.$route.params.bookId,{headers:{"x-auth":this.$store.state.authKey}}).then(function(t){e.info=B()({},e.info,t.data)},function(e){console.log(e)})}},T={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"edit-book"},[o("table",{staticClass:"book-fields"},[e._l(e.fields,function(t){return o("tr",{key:t.name.toLowerCase()},[o("th",[e._v(e._s(t.name)+":")]),e._v(" "),o("td",["text"===t.type?o("input",{directives:[{name:"model",rawName:"v-model",value:e.info[t.name.toLowerCase()],expression:"info[field.name.toLowerCase()]"}],class:{"field-error":e.errors[t.name.toLowerCase()]},attrs:{size:"40",type:"text"},domProps:{value:e.info[t.name.toLowerCase()]},on:{input:function(o){o.target.composing||e.$set(e.info,t.name.toLowerCase(),o.target.value)}}}):"select"===t.type?o("select",{directives:[{name:"model",rawName:"v-model",value:e.info[t.name.toLowerCase()],expression:"info[field.name.toLowerCase()]"}],class:{"field-error":e.errors[t.name.toLowerCase()]},on:{change:function(o){var s=Array.prototype.filter.call(o.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.info,t.name.toLowerCase(),o.target.multiple?s:s[0])}}},e._l(e.shelves,function(t){return o("option",{key:t,domProps:{value:t}},[e._v(e._s(t))])})):"textarea"===t.type?o("textarea",{directives:[{name:"model",rawName:"v-model",value:e.info[t.name.toLowerCase()],expression:"info[field.name.toLowerCase()]"}],attrs:{name:"summary",rows:"12",cols:"38"},domProps:{value:e.info[t.name.toLowerCase()]},on:{input:function(o){o.target.composing||e.$set(e.info,t.name.toLowerCase(),o.target.value)}}}):e._e()])])}),e._v(" "),o("tr",[o("td"),e._v(" "),o("td",{staticClass:"table-submit"},[o("button",{attrs:{type:"button"},on:{click:e.cancel}},[e._v("Cancel")]),e._v(" "),o("button",{attrs:{type:"button"},on:{click:e.submitBook}},[e._v("Save changes")])])]),e._v(" "),o("tr",[o("td"),e._v(" "),o("td",{staticClass:"table-delete"},[o("button",{attrs:{type:"button"},on:{click:e.deleteBook}},[e._v("Delete book")])])])],2)])},staticRenderFns:[]};var V=o("VU/8")(M,T,!1,function(e){o("fsXF")},"data-v-ccd85948",null).exports,Q={name:"Login",data:function(){return{username:"",password:"",login:!0}},computed:{buttonMessage:function(){return this.login?"Log In":"Sign Up"}},methods:{submit:function(){var e=this;this.login?m.a.post(this.$store.state.url+"users/login/",{user:{username:this.username,password:this.password}}).then(function(t){console.log(t.headers),localStorage.setItem("auth",t.headers["x-auth"]),e.$router.push({name:"Summary"})}):m.a.post(this.$store.state.url+"users/",{user:{username:this.username,password:this.password,shelves:[{name:"All",colour:"#ccc"}]}}).then(function(t){console.log(t.headers),localStorage.setItem("auth",t.headers["x-auth"]),e.$router.push({name:"Summary"})})}}},O={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"login"},[o("div",{staticClass:"login-form-wrapper"},[o("div",{staticClass:"form-select"},[o("div",{staticClass:"form-select-option",class:{"form-select-selected":e.login},on:{click:function(t){e.login=!0}}},[e._v("Log In")]),e._v(" "),o("div",{staticClass:"form-select-option",class:{"form-select-selected":!e.login},on:{click:function(t){e.login=!1}}},[e._v("Sign Up")])]),e._v(" "),o("form",{staticClass:"login-form"},[o("table",[o("tr",{staticClass:"login-field-row"},[o("th",[e._v("Username")]),e._v(" "),o("td",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"login-field",attrs:{size:"20",type:"text",autocomplete:"username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})])]),e._v(" "),o("tr",{staticClass:"login-field-row"},[o("th",[e._v("Password")]),e._v(" "),o("td",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"login-field",attrs:{size:"20",type:"password",autocomplete:"current-password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])]),e._v(" "),o("tr",{staticClass:"login-field-wrapper"},[o("td",{attrs:{colspan:"2"}},[o("button",{staticClass:"submit",attrs:{type:"button"},on:{click:e.submit}},[e._v(e._s(e.buttonMessage))])])])])])])])},staticRenderFns:[]};var z=o("VU/8")(Q,O,!1,function(e){o("pG9/")},"data-v-00467f12",null).exports;s.a.use(l.a);var Y=new l.a({mode:"history",routes:[{path:"/",name:"Summary",component:b,beforeEnter:function(e,t,o){d.commit("setCurrentShelf","All"),o()}},{path:"/login",name:"Login",component:z},{path:"/book/new",name:"Add Book",component:K},{path:"/bookshelf/:shelfName",name:"Bookshelf",component:N},{path:"/book/:bookId",name:"Book",component:I},{path:"/book/edit/:bookId",name:"Edit Book",component:V}]});Y.beforeEach(function(e,t,o){d.state.authKey&&"/login"===e.path?o("/"):d.state.authKey||"/login"===e.path?o():o("/login")});var W=Y;s.a.config.productionTip=!1,d.dispatch("loadAuth").finally(function(){new s.a({el:"#app",router:W,store:d,components:{App:i},template:"<App/>"})})},NYJV:function(e,t){},Psgu:function(e,t){},Ukmh:function(e,t){},WxTu:function(e,t){},fsXF:function(e,t){},h0Zt:function(e,t){},"pG9/":function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.5b919372a223d8c112f9.js.map