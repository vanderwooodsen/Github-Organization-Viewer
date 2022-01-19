(this.webpackJsonpgithub_viewer_task=this.webpackJsonpgithub_viewer_task||[]).push([[0],{100:function(e,t){},110:function(e,t,r){"use strict";r.r(t);var n,a=r(3),c=r.n(a),i=r(34),s=r.n(i),o=(r(74),r(8)),l=r(6),u=r(1),d=r.n(u),b=r(5),m=r(20),j=r(50);function p(e,t,r,n){return g.apply(this,arguments)}function g(){return(g=Object(b.a)(d.a.mark((function e(t,r,n,a){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.rest.repos.listCommits({owner:r,repo:n,per_page:5,page:a});case 2:return c=e.sent,e.abrupt("return",c.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){var t=e.githubViewer.accessToken;return""!==t?new j.a({auth:t}):new j.a}var h=Object(m.b)("currentRepository/set",function(){var e=Object(b.a)(d.a.mark((function e(t,r){var n,a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.getState(),a=x(n),c=n.githubViewer.organization.login,e.next=5,p(a,c,t,0);case 5:return e.t0=e.sent,e.t1=t,e.abrupt("return",{commits:e.t0,repository:e.t1});case 8:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),f=Object(m.b)("organization/set",function(){var e=Object(b.a)(d.a.mark((function e(t,r){var n,a,c,i,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.getState(),a=x(n),e.next=4,a.rest.orgs.get({org:t});case 4:return c=e.sent,e.next=7,a.paginate(a.rest.repos.listForOrg,{org:t,type:"public",per_page:100});case 7:return i=(i=e.sent).sort((function(e,t){return t.stargazers_count-e.stargazers_count})),s=i[0].name,e.t0=c.data,e.t1=i,e.t2=s,e.next=15,p(a,t,s,0);case 15:return e.t3=e.sent,e.abrupt("return",{orgData:e.t0,repos:e.t1,repository:e.t2,commits:e.t3});case 17:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),O=Object(m.b)("commits/load",function(){var e=Object(b.a)(d.a.mark((function e(t,r){var n,a,c,i,s,o,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.getState(),a=x(n),c=n.githubViewer.organization.login,i=n.githubViewer.currentRepository,s=n.githubViewer.commitsPage,e.next=7,p(a,c,i,s+1);case 7:return o=e.sent,l=n.githubViewer.commits.concat(o),e.abrupt("return",{commits:l,page:s+1});case 10:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()),y=Object(m.c)({name:"githubViewer",initialState:{repository:"Christi",repositories:[],commits:null,organization:null,accessToken:"",currentRepository:"",commitsPage:1,loading:!1,loadingError:null},reducers:{setAccessToken:function(e,t){e.accessToken=t.payload}},extraReducers:(n={},Object(l.a)(n,f.pending,(function(e,t){e.loading=!0,e.loadingError=null})),Object(l.a)(n,h.pending,(function(e,t){e.loading=!0,e.loadingError=null})),Object(l.a)(n,O.pending,(function(e,t){e.loading=!0,e.loadingError=null})),Object(l.a)(n,f.rejected,(function(e,t){e.loading=!1,e.loadingError=t.payload})),Object(l.a)(n,h.rejected,(function(e,t){e.loading=!1,e.loadingError=t.payload})),Object(l.a)(n,O.rejected,(function(e,t){e.loading=!1,e.loadingError=t.payload})),Object(l.a)(n,f.fulfilled,(function(e,t){e.repositories=t.payload.repos,e.organization=t.payload.orgData,e.currentRepository=t.payload.repository,e.commits=t.payload.commits,e.commitsPage=1,e.loading=!1,e.loadingError=null})),Object(l.a)(n,h.fulfilled,(function(e,t){e.commits=t.payload.commits,e.currentRepository=t.payload.repository,e.commitsPage=1,e.loading=!1,e.loadingError=null})),Object(l.a)(n,O.fulfilled,(function(e,t){e.commits=t.payload.commits,e.commitsPage=t.payload.page,e.loading=!1,e.loadingError=null})),n)}),v=y.actions.setAccessToken,w=function(e){return e.githubViewer.currentRepository},N=function(e){return e.githubViewer.repositories},k=function(e){return e.githubViewer.commits},_=function(e){return e.githubViewer.organization},V=function(e){return e.githubViewer.loading},E=function(e){return e.githubViewer.loadingError},z=y.reducer,S=r(10),D=r(39),R=r.n(D),Y=r(2);function C(e){var t=e.commit,r=t.commit.message,n=r.indexOf("\n");return-1!==n&&(r=r.substring(0,n)),Object(Y.jsxs)("div",{className:"bg-gray-700 py-3 px-3 border-blue-200 border-2 mb-1",children:[Object(Y.jsx)("div",{className:"text-l tracking-wide\tline-clamp-2",children:r}),Object(Y.jsxs)("div",{className:"mt-1 text-blue-400 font-normal text-sm",children:[t.commit.committer.name,Object(Y.jsx)("span",{className:"px-1 text-blue-200",children:"commited at "}),Object(Y.jsx)("span",{className:"text-sm  font-light text-blue-200",children:Object(Y.jsx)(R.a,{format:"YYYY MMM DD",children:t.commit.committer.date})})]}),Object(Y.jsx)("div",{className:"text-sm flex-row justify-evenly mt-1",children:Object(Y.jsx)("span",{className:" text-xs font-light text-gray-500",children:t.sha})})]})}function M(){var e=Object(S.c)(k),t=Object(S.b)();return null===e?Object(Y.jsx)("div",{className:"p-10 min-h-full text-gray-800",children:"Select a repostitory"}):Object(Y.jsxs)("div",{children:[Object(Y.jsxs)("div",{className:" my-3 mr-3 bg-gray-700 rounded-2xl border-top-1",children:[Object(Y.jsx)("h2",{className:"text-2xl p-5 pb-2 text-blue-200",children:"Commits"}),Object(Y.jsx)("div",{className:"bg-white",children:e.map((function(e){return Object(Y.jsx)(C,{commit:e},e.sha)}))})]}),Object(Y.jsx)("div",{className:"text-center",children:Object(Y.jsx)("button",{className:"px-4 rounded-lg button text-white font-bold p-4 uppercase  border",onClick:function(){t(O())},children:"Load more"})})]})}var P=r(41);function T(e){var t=e.repo,r=Object(S.c)(w),n=Object(S.b)();return Object(Y.jsxs)("div",{className:"px-10 py-5 cursor-pointer hover:bg-yellow-400 text-gray-700\n        ".concat(r===t.name?"repo_list":""),onClick:function(){n(h(t.name))},children:[Object(Y.jsx)("div",{className:"text-xl font-bold tracking-wide\t",children:t.name}),Object(Y.jsx)("div",{className:"text-white font-normal text-sm",children:t.description}),Object(Y.jsxs)("div",{className:"text-sm text-gray-700 hover:flex-row justify-evenly mt-2 items-center",children:[Object(Y.jsxs)("span",{className:"align-bottom",children:[Object(Y.jsx)(P.c,{className:"icon inline-block text-sm mr-1"}),t.stargazers_count]}),Object(Y.jsxs)("span",{className:"font-semibold ml-2",children:[" ",t.language," "]}),Object(Y.jsxs)("span",{className:"ml-2 align-bottom",children:[Object(Y.jsx)(P.b,{className:"icon inline-block"}),t.forks]}),Object(Y.jsxs)("span",{className:"ml-2 align-bottom",children:[Object(Y.jsx)(P.a,{className:"icon inline-block mr-1 "}),Object(Y.jsx)(R.a,{format:"YYYY MMM DD",children:t.created_at})]})]})]})}function A(){var e=Object(S.c)(N);return Object(Y.jsxs)("div",{className:"rounded-xl  repo_list_bg m-3 shadow-lg drop-shadow",children:[Object(Y.jsx)("h2",{className:"text-2xl m-5 mb-2 font-bold",children:"Repositories"}),Object(Y.jsx)("div",{className:"divide-red-200 divide-y",children:e.map((function(e){return Object(Y.jsx)(T,{repo:e},e.id)}))})]})}var G=r(69);function I(){return Object(Y.jsx)("div",{className:"w-full h-full fixed top-0 left-0 bg-white opacity-75 z-50 flex justify-center items-center",children:Object(Y.jsx)("span",{className:"text-gray-800 opacity-90",children:Object(Y.jsx)(G.a,{className:"animate-spin w-20 h-20"})})})}function B(){return Object(Y.jsx)("div",{className:"w-full h-full fixed top-0 left-0 bg-white opacity-75 z-50 flex justify-center items-center",children:Object(Y.jsx)("span",{className:"text-red-500 opacity-90",children:"There was an error loading data"})})}function J(){var e=Object(S.c)(_),t=Object(S.b)(),r=Object(a.useState)(""),n=Object(o.a)(r,2),c=n[0],i=n[1],s=Object(a.useState)(""),l=Object(o.a)(s,2),u=l[0],d=l[1],b=Object(S.c)(V),m=Object(S.c)(E);return Object(a.useEffect)((function(){t(f("netflix"))}),[t]),Object(Y.jsxs)("div",{children:[b&&Object(Y.jsx)(I,{}),null!==m&&Object(Y.jsx)(B,{}),Object(Y.jsxs)("div",{id:"token_body",className:"py-1 px-4 flex justify-between items-center text-gray-500",children:[Object(Y.jsxs)("span",{className:"p-2",children:["Github allows only 60 unauthenticated requests per hour per IP. ",Object(Y.jsx)("br",{})," If you see errors"," ",Object(Y.jsx)("a",{href:"https://github.com/settings/tokens/new",className:"underline text-gray-700",children:"create"})," ","and enter your Github API token."]}),Object(Y.jsx)("span",{children:Object(Y.jsxs)("form",{className:"flex",onSubmit:function(e){e.preventDefault(),t(v(u)),d("")},children:[Object(Y.jsx)("input",{className:"rounded-l-lg p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white",placeholder:"Github Access Token",value:u,onChange:function(e){return d(e.target.value)}}),Object(Y.jsx)("button",{className:"button rounded-r-lg   text-white font-bold p-1 px-4 uppercase  border-t border-b border-r",children:"Update"})]})})]}),Object(Y.jsxs)("div",{className:"bg-white  p-5 flex justify-between",children:[Object(Y.jsx)("span",{className:"repo_name pl-4 font-semibold text-5xl",children:null===e||void 0===e?void 0:e.name}),Object(Y.jsx)("span",{children:Object(Y.jsxs)("form",{className:"flex",onSubmit:function(e){e.preventDefault(),t(f(c))},children:[Object(Y.jsx)("input",{className:"rounded-l-lg p-2 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white",placeholder:"Organization",value:c,onChange:function(e){return i(e.target.value)}}),Object(Y.jsx)("button",{className:"button px-4 rounded-r-lg   text-white font-bold p-4 uppercase  border-t border-b border-r",children:"GO"})]})})]}),Object(Y.jsxs)("div",{className:"grid grid-cols-2 bg-white gap-0.5",children:[Object(Y.jsx)(A,{}),Object(Y.jsx)(M,{})]})]})}var W=function(){return Object(Y.jsx)(J,{})},q=Object(m.a)({reducer:{githubViewer:z}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(Y.jsx)(c.a.StrictMode,{children:Object(Y.jsx)(S.a,{store:q,children:Object(Y.jsx)(W,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},74:function(e,t,r){}},[[110,1,2]]]);
//# sourceMappingURL=main.3c705b58.chunk.js.map