(this.webpackJsonptrelloBoard=this.webpackJsonptrelloBoard||[]).push([[0],{120:function(t,e,a){},121:function(t,e,a){},147:function(t,e,a){"use strict";a.r(e);var n,i,s=a(0),o=a.n(s),c=a(32),r=a.n(c),d=(a(120),function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,214)).then((function(e){var a=e.getCLS,n=e.getFID,i=e.getFCP,s=e.getLCP,o=e.getTTFB;a(t),n(t),i(t),s(t),o(t)}))}),l=(a(121),a(29)),u=a(16),j=a(48),f=a.n(j);!function(t){t[t.New=0]="New",t[t.InProgress=1]="InProgress",t[t.Completed=2]="Completed",t[t.Draft=3]="Draft"}(n||(n={})),function(t){t[t.Low=0]="Low",t[t.Middle=1]="Middle",t[t.Hi=2]="Hi",t[t.Urgently=3]="Urgently",t[t.Later=4]="Later"}(i||(i={}));var b,h=f.a.create(Object(u.a)({baseURL:"https://social-network.samuraijs.com/api/1.1/"},{withCredentials:!0,headers:{"API-KEY":"bd989617-b1e7-48f3-b931-dc63118fa1e9"}})),p=function(){return h.get("/todo-lists")},O=function(t){return h.post("/todo-lists",{title:t})},m=function(t){return h.delete("/todo-lists/".concat(t))},g=function(t,e){return h.put("/todo-lists/".concat(t),{title:e})},x=f.a.create({baseURL:"https://social-network.samuraijs.com/api/1.1/todo-lists",withCredentials:!0,headers:{"API-KEY":"bd989617-b1e7-48f3-b931-dc63118fa1e9"}}),y=function(t){return x.get("".concat(t,"/tasks"))},k=function(t,e){return x.post("".concat(t,"/tasks"),{title:e})},C=function(t,e){return x.delete("".concat(t,"/tasks/").concat(e))},v=function(t,e,a){return x.put("".concat(t,"/tasks/").concat(e),a)},I=a(34),T=Object(I.b)({name:"app",initialState:{status:"idle",error:null},reducers:{setAppStatusAC:function(t,e){t.status=e.payload.status},setAppErrorAC:function(t,e){t.error=e.payload.error}}}),L=T.reducer,A=T.actions,S=A.setAppStatusAC,w=A.setAppErrorAC,E=Object(I.b)({name:"tasks",initialState:{},reducers:{removeTaskAC:function(t,e){var a=t[e.payload.todoListId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));n>-1&&a.splice(n,1)},addTaskAC:function(t,e){t[e.payload.todoListId].unshift(Object(u.a)(Object(u.a)({},e.payload),{},{entityTaskStatus:"idle"}))},getTasksAC:function(t,e){t[e.payload.todoListId]=e.payload.arrayTasks.map((function(t){return Object(u.a)(Object(u.a)({},t),{},{entityTaskStatus:"idle"})}))},changeTaskTitleAC:function(t,e){var a=t[e.payload.todoListId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));n>-1&&(a[n]=Object(u.a)(Object(u.a)({},a[n]),{},{title:e.payload.title}))},changeTaskEntityStatusAC:function(t,e){var a=t[e.payload.todoListId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));n>-1&&(a[n]=Object(u.a)(Object(u.a)({},a[n]),{},{entityTaskStatus:e.payload.entityTaskStatus}))},changeStatusCheckboxAC:function(t,e){var a=t[e.payload.todoListId],n=a.findIndex((function(t){return t.id===e.payload.taskId}));n>-1&&(a[n]=Object(u.a)(Object(u.a)({},a[n]),{},{status:e.payload.status}))}},extraReducers:function(t){t.addCase(G,(function(t,e){t[e.payload.todoList.id]=[]})),t.addCase(q,(function(t,e){delete t[e.payload.todoListId]})),t.addCase(Y,(function(t,e){e.payload.todoListsArray.forEach((function(e){t[e.id]=[]}))}))}}),F=E.reducer,P=E.actions,D=P.getTasksAC,z=P.addTaskAC,N=P.removeTaskAC,R=P.changeTaskEntityStatusAC,M=P.changeTaskTitleAC,U=P.changeStatusCheckboxAC,B=Object(I.b)({name:"todoLists",initialState:[],reducers:{removeTodoListAC:function(t,e){var a=t.findIndex((function(t){return t.id!==e.payload.todoListId}));-1!==a&&t.splice(a,1)},addTodoListAC:function(t,e){t.unshift(Object(u.a)(Object(u.a)({},e.payload.todoList),{},{filter:"all",addedDate:"",order:0,entityStatus:"idle"}))},changeTodoListTitleAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.todoListId}));t[a].title=e.payload.title},changeTodoListFilterAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.todoListId}));t[a].filter=e.payload.filter},changeTodolistEntityStatusAC:function(t,e){var a=t.findIndex((function(t){return t.id===e.payload.todoListId}));t[a].entityStatus=e.payload.entityStatus},setTodoListsAC:function(t,e){return e.payload.todoListsArray.map((function(t){return Object(u.a)(Object(u.a)({},t),{},{filter:"all",entityStatus:"idle"})}))}}}),H=B.reducer,K=B.actions,Y=K.setTodoListsAC,q=K.removeTodoListAC,G=K.addTodoListAC,Z=K.changeTodoListTitleAC,J=K.changeTodolistEntityStatusAC,_=K.changeTodoListFilterAC,V=function(t){t(S({status:"loading"})),p().then((function(e){t(Y({todoListsArray:e.data})),e.data.forEach((function(e){var a;t((a=e.id,function(t){t(S({status:"loading"})),y(a).then((function(e){t(D({todoListId:a,arrayTasks:e.data.items})),t(S({status:"succeeded"}))}))})),t(S({status:"succeeded"}))}))}))};!function(t){t[t.success=0]="success",t[t.error=1]="error",t[t.captcha=10]="captcha"}(b||(b={}));var $=a(28),Q=f.a.create(Object(u.a)({baseURL:"https://social-network.samuraijs.com/api/1.1/"},{withCredentials:!0,headers:{"API-KEY":"bd989617-b1e7-48f3-b931-dc63118fa1e9"}})),W=function(t){return Q.post("/auth/login",t)},X=function(){return Q.get("/auth/me")},tt=function(){return Q.delete("/auth/login")},et=function(t,e){t.messages.length?e(w({error:t.messages[0]})):e(w({error:"Some error occurred"})),e(S({status:"failed"}))},at=function(t,e){e(w({error:t.message?t.message:"Some error occurred"})),e(S({status:"failed"}))},nt=Object(I.b)({name:"auth",initialState:{isLoggedIn:!1,isInitialized:!1},reducers:{setIsLoggedInAC:function(t,e){t.isLoggedIn=e.payload.value},setIsInitializedAC:function(t,e){t.isInitialized=e.payload.value}}}),it=nt.reducer,st=nt.actions,ot=st.setIsLoggedInAC,ct=st.setIsInitializedAC,rt=a(96),dt=Object(l.b)({todoLists:H,tasks:F,app:L,auth:it}),lt=Object(I.a)({reducer:dt,middleware:function(t){return t().prepend(rt.a)}}),ut=$.c;window.store=lt;var jt=a(205),ft=a(204),bt=a(206),ht=a(207),pt=a(203),Ot=a(201),mt=a(208),gt=a(193),xt=a(198),yt=a(196),kt=a(1),Ct=o.a.forwardRef((function(t,e){return Object(kt.jsx)(yt.a,Object(u.a)({elevation:6,ref:e,variant:"filled"},t))}));function vt(){var t=Object($.b)(),e=ut((function(t){return t.app.error})),a=function(e,a){"clickaway"!==a&&t(w({error:null}))};return Object(kt.jsx)(xt.a,{open:null!==e,autoHideDuration:6e3,onClose:a,children:Object(kt.jsx)(Ct,{onClose:a,severity:"error",sx:{width:"100%"},children:e})})}var It=a(202),Tt=a(197),Lt=a(199),At=a(211),St=a(210),wt=a(189),Et=a(194),Ft=a(104),Pt=a(14),Dt=function(){var t=Object($.b)(),e=ut((function(t){return t.auth.isLoggedIn})),a=Object(Ft.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(t){var e={};return t.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(t.email.trim())||(e.email="Invalid email address"):e.email="Required",t.password?t.password.length<4&&(e.password="Must be more then 4 characters"):e.password="Password required",e},onSubmit:function(e){var n;t((n=e,function(t){t(S({status:"loading"})),W(n).then((function(e){0===e.data.resultCode?(t(ot({value:!0})),t(S({status:"succeeded"}))):et(e.data,t)})).catch((function(e){at(e,t)}))})),a.resetForm()}});return e?Object(kt.jsx)(Pt.a,{to:"/"}):Object(kt.jsx)(It.a,{container:!0,justifyContent:"center",children:Object(kt.jsx)(It.a,{item:!0,justifyContent:"center",children:Object(kt.jsx)("form",{onSubmit:a.handleSubmit,children:Object(kt.jsxs)(Lt.a,{children:[Object(kt.jsxs)(wt.a,{children:[Object(kt.jsxs)("p",{children:["To log in get registered",Object(kt.jsx)("a",{href:"https://social-network.samuraijs.com/",target:"_blank",children:" here"})]}),Object(kt.jsx)("p",{children:"or use common test account credentials:"}),Object(kt.jsx)("p",{children:"Email: free@samuraijs.com"}),Object(kt.jsx)("p",{children:"Password: free"})]}),Object(kt.jsxs)(St.a,{children:[Object(kt.jsx)(Et.a,Object(u.a)({label:"Email",margin:"normal"},a.getFieldProps("email"))),a.touched.email&&a.errors.email&&Object(kt.jsx)("div",{style:{color:"red"},children:a.errors.email}),Object(kt.jsx)(Et.a,Object(u.a)({type:"password",label:"Password",margin:"normal"},a.getFieldProps("password"))),a.touched.password&&a.errors.password&&Object(kt.jsx)("div",{style:{color:"red"},children:a.errors.password}),Object(kt.jsx)(At.a,{label:"Remember me",control:Object(kt.jsx)(Tt.a,Object(u.a)({},a.getFieldProps("rememberMe")))}),Object(kt.jsx)(Ot.a,{type:"submit",variant:"contained",color:"primary",children:"Login"})]})]})})})})},zt=a(13),Nt=a(191),Rt=o.a.memo((function(t){var e=Object(s.useState)(""),a=Object(zt.a)(e,2),n=a[0],i=a[1],o=Object(s.useState)(null),c=Object(zt.a)(o,2),r=c[0],d=c[1];return Object(kt.jsxs)("div",{children:[Object(kt.jsx)(Et.a,{disabled:t.disabled,placeholder:"Add new task",size:"small",autoFocus:!0,value:n,onChange:function(t){d(""),i(t.currentTarget.value)},onKeyPress:function(e){null!==r&&d(null),13===e.charCode&&""!==n.trim()?(t.addItem(n),i("")):d("Title is required")},error:!!r,helperText:r}),Object(kt.jsx)(pt.a,{disabled:t.disabled,color:"primary",onClick:function(){""!==n.trim()&&(t.addItem(n.trim()),i(""))},children:Object(kt.jsx)(Nt.a,{})})]})})),Mt=a(209),Ut=o.a.memo((function(t){var e=Object(s.useState)(!1),a=Object(zt.a)(e,2),n=a[0],i=a[1],o=Object(s.useState)(""),c=Object(zt.a)(o,2),r=c[0],d=c[1];return n?Object(kt.jsx)(Et.a,{disabled:t.disabled,size:"small",variant:"outlined",value:r,onBlur:function(){i(!1),t.onChange(r)},autoFocus:!0,onChange:function(t){d(t.currentTarget.value)}}):Object(kt.jsx)("span",{onDoubleClick:function(){i(!0),d(t.title)},children:t.title})})),Bt=a(192),Ht=o.a.memo((function(t){var e=t.task,a=t.todoListId,i=t.changeStatusCheckbox,o=t.changeTaskTitle,c=t.removeTask,r=t.entityTaskStatus,d=Object(s.useCallback)((function(){return c(e.id,a)}),[e.id,a,c]),l=Object(s.useCallback)((function(t){o(e.id,t,a)}),[e.id,o,a]);return Object(kt.jsxs)("li",{className:"commonClassName ".concat(e.status===n.Completed?"is-done":""),children:[Object(kt.jsx)(Tt.a,{disabled:"loading"===r,color:"success",onChange:function(t){var s=t.currentTarget.checked;i(e.id,s?n.Completed:n.New,a)},checked:e.status===n.Completed}),Object(kt.jsx)(Ut,{disabled:"loading"===r,title:e.title,onChange:l}),Object(kt.jsx)(pt.a,{disabled:"loading"===r,style:{marginLeft:"5px"},onClick:d,children:Object(kt.jsx)(Bt.a,{fontSize:"small"})})]},e.id)})),Kt=a(212),Yt=o.a.memo((function(t){var e=t.changeFilter,a=t.todoListId,i=t.removeTodoList,o=t.addTask,c=t.changeTodoListTitle,r=t.tasks,d=t.filter,l=t.todoListTitle,u=t.removeTask,j=t.changeStatusCheckbox,f=t.changeTaskTitle,b=t.entityStatus,h=Object(s.useCallback)((function(){e("all",a)}),[e,a]),p=Object(s.useCallback)((function(){e("completed",a)}),[e,a]),O=Object(s.useCallback)((function(){e("active",a)}),[e,a]),m=Object(s.useCallback)((function(t){o(t,a)}),[o,a]),g=Object(s.useCallback)((function(t){c(a,t)}),[c,a]),x=t.tasks;return"completed"===d&&(x=r.filter((function(t){return t.status===n.New}))),"active"===d&&(x=r.filter((function(t){return t.status===n.Completed}))),Object(kt.jsxs)("div",{children:[Object(kt.jsx)(Kt.a,{children:Object(kt.jsxs)("h3",{children:[Object(kt.jsx)(Ut,{title:l,onChange:g}),Object(kt.jsx)(pt.a,{onClick:function(){i(a)},disabled:"loading"===b,children:Object(kt.jsx)(Bt.a,{})})]})}),Object(kt.jsx)(Rt,{addItem:m,disabled:"loading"===b}),Object(kt.jsx)("ul",{children:x&&x.map((function(t){return Object(kt.jsx)(Ht,{todoListId:a,removeTask:u,changeStatusCheckbox:j,changeTaskTitle:f,task:t,entityStatus:b,entityTaskStatus:t.entityTaskStatus},t.id)}))}),Object(kt.jsxs)("div",{children:[Object(kt.jsx)(Ot.a,{variant:"all"===d?"outlined":"text",onClick:h,children:"All"}),Object(kt.jsx)(Ot.a,{color:"success",variant:"active"===d?"outlined":"text",onClick:O,children:"Active"}),Object(kt.jsx)(Ot.a,{color:"warning",variant:"active"===d?"outlined":"text",onClick:p,children:"Completed"})]})]})})),qt=function(){var t=Object($.b)(),e=ut((function(t){return t.auth.isLoggedIn})),a=ut((function(t){return t.todoLists})),n=ut((function(t){return t.tasks}));Object(s.useEffect)((function(){e&&t(V)}),[t,e]);var i=Object(s.useCallback)((function(e,a){t(function(t,e){return function(a){a(S({status:"loading"})),k(t,e).then((function(t){t.data.resultCode===b.success?a(z(t.data.data.item)):a(w(t.data.messages.length?t.data.messages[0]:"some error"))})).catch((function(t){a(w({error:t.message}))})).finally((function(){a(S({status:"idle"}))}))}}(a,e))}),[t]),o=Object(s.useCallback)((function(e,a){var n,i;t((n=e,i=a,function(t){t(S({status:"loading"})),t(R({taskId:n,todoListId:i,entityTaskStatus:"loading"})),C(i,n).then((function(){t(N({taskId:n,todoListId:i})),t(S({status:"succeeded"}))}))}))}),[t]),c=function(e,a){var n=_({filter:e,todoListId:a});t(n)},r=function(e,a,n){t(function(t,e,a){return function(n,i){var s=i().tasks[t].find((function(t){return t.id===e}));if(s){var o={title:s.title,status:a,priority:s.priority,startDate:s.startDate,deadline:s.description,description:s.description};n(S({status:"loading"})),n(R({taskId:e,todoListId:t,entityTaskStatus:"loading"})),v(t,e,o).then((function(){n(U({taskId:e,status:a,todoListId:t})),n(S({status:"succeeded"})),n(R({taskId:e,todoListId:t,entityTaskStatus:"idle"}))}))}}}(n,e,a))},d=function(e){t(function(t){return function(e){e(S({status:"loading"})),e(J({todoListId:t,entityStatus:"loading"})),m(t).then((function(a){a.data.resultCode===b.success?e(q({todoListId:t})):e(w({error:a.data.messages.length?a.data.messages[0]:"some error"}))})).catch((function(t){e(w({error:t.message}))})).finally((function(){e(S({status:"idle"}))}))}}(e))},l=function(e,a,n){t(function(t,e,a){return function(n,i){var s=i().tasks[a].find((function(e){return e.id===t}));if(s){var o={title:e,status:s.status,priority:s.priority,startDate:s.startDate,deadline:s.description,description:s.description};n(S({status:"loading"})),n(R({taskId:t,todoListId:a,entityTaskStatus:"loading"})),v(a,t,o).then((function(){n(M({taskId:t,title:e,todoListId:a}))})).catch((function(t){n(w({error:t.message}))})).finally((function(){n(S({status:"succeeded"})),n(R({taskId:t,todoListId:a,entityTaskStatus:"idle"}))}))}}}(e,a,n))},u=function(e,a){t(function(t,e){return function(a){a(S({status:"loading"})),g(t,e).then((function(){a(Z({todoListId:t,title:e}))})).catch((function(t){a(w({error:t.message}))})).finally((function(){a(S({status:"idle"}))}))}}(e,a))};return e?Object(kt.jsxs)(kt.Fragment,{children:[Object(kt.jsx)(It.a,{container:!0,style:{padding:"20px"},children:Object(kt.jsx)(Rt,{addItem:function(e){t(function(t){return function(e){e(S({status:"loading"})),O(t).then((function(t){t.data.resultCode===b.success?e(G({todoList:t.data.data.item})):e(w({error:t.data.messages.length?t.data.messages[0]:"some error"}))})).catch((function(t){e(w({error:t.message}))})).finally((function(){e(S({status:"failed"}))}))}}(e))}})}),Object(kt.jsx)(It.a,{container:!0,spacing:5,children:a.map((function(t){var e=n[t.id];return Object(kt.jsx)(It.a,{item:!0,children:Object(kt.jsx)(Mt.a,{elevation:3,style:{padding:"15px"},children:Object(kt.jsx)(Yt,{todoListId:t.id,todoListTitle:t.title,entityStatus:t.entityStatus,tasks:e,removeTask:o,changeFilter:c,addTask:i,changeStatusCheckbox:r,filter:t.filter,removeTodoList:d,changeTaskTitle:l,changeTodoListTitle:u},t.id)})},t.id)}))})]}):Object(kt.jsx)(Pt.a,{to:"login"})},Gt=function(){var t=Object(Pt.g)();return Object(kt.jsx)(It.a,{container:!0,spacing:3,style:{display:"flex",justifyContent:"center",marginTop:"40px"},children:Object(kt.jsxs)(Mt.a,{elevation:1,style:{padding:"15px",margin:"30px",display:"flex",flexDirection:"column"},children:[Object(kt.jsx)("h1",{children:"404: PAGE NOT FOUND"}),Object(kt.jsx)(Ot.a,{style:{display:"flex",justifyContent:"center"},variant:"contained",color:"success",onClick:function(){return t("/")},children:"HOME PAGE"})]})})},Zt=a(213);var Jt=function(){var t=Object($.b)(),e=ut((function(t){return t.app.status})),a=ut((function(t){return t.auth})),n=a.isInitialized,i=a.isLoggedIn,o=Object(Pt.g)();return Object(s.useEffect)((function(){t((function(t){t(S({status:"loading"})),X().then((function(e){0===e.data.resultCode?(t(ot({value:!0})),t(S({status:"succeeded"}))):et(e.data,t)})).catch((function(e){at(e,t)})).finally((function(){t(ct({value:!0}))}))}))}),[t]),n?Object(kt.jsxs)("div",{className:"App",children:[Object(kt.jsx)(vt,{}),Object(kt.jsxs)(jt.a,{position:"static",children:[Object(kt.jsxs)(bt.a,{children:[Object(kt.jsx)(pt.a,{size:"large",edge:"start",color:"inherit","aria-label":"Active Todo List",sx:{mr:2},children:Object(kt.jsx)(gt.a,{})}),Object(kt.jsx)(ft.a,{onClick:function(){return o("/")},style:{cursor:"pointer"},variant:"h6",component:"div",sx:{flexGrow:1},children:"You Trello board"}),i&&Object(kt.jsx)(Ot.a,{onClick:function(){t((function(t){t(S({status:"loading"})),tt().then((function(e){0===e.data.resultCode?(t(ot({value:!1})),t(S({status:"succeeded"}))):et(e.data,t)})).catch((function(e){at(e,t)}))}))},color:"inherit",children:"Logout"})]}),"loading"===e&&Object(kt.jsx)(ht.a,{})]}),Object(kt.jsx)(mt.a,{fixed:!0,children:Object(kt.jsxs)(Pt.d,{children:[Object(kt.jsx)(Pt.b,{path:"/login",element:Object(kt.jsx)(Dt,{})}),Object(kt.jsx)(Pt.b,{path:"/",element:Object(kt.jsx)(qt,{})}),Object(kt.jsx)(Pt.b,{path:"/404",element:Object(kt.jsx)(Gt,{})}),Object(kt.jsx)(Pt.b,{path:"*",element:Object(kt.jsx)(Pt.a,{to:"/404"})})]})})]}):Object(kt.jsx)("div",{style:{position:"fixed",top:"30%",textAlign:"center",width:"100%"},children:Object(kt.jsx)(Zt.a,{})})},_t=a(47);r.a.render(Object(kt.jsx)(_t.a,{children:Object(kt.jsx)($.a,{store:lt,children:Object(kt.jsx)(Jt,{})})}),document.getElementById("root")),d()}},[[147,1,2]]]);
//# sourceMappingURL=main.827cc3ec.chunk.js.map