_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[33],{"7Ljw":function(t,e,i){"use strict";i.r(e);var r=i("ERkP"),a=i.n(r),c=i("7xIC"),n=i("jvFD"),M=i.n(n),g=i("Y0uC"),o=i("1U1M"),u=i("KD1n"),y=i("H5qd");function l(){var t=Object(u.a)(["\n  query getCategoryPost($id: ID, $SLUG: String, $LIMIT: Int, $page: Int) {\n    category(id: $id, slug: $SLUG) {\n      id\n      name\n      slug\n      posts(limit: $LIMIT, page: $page) {\n        data {\n          id\n          title\n          price\n          slug\n          image {\n            url\n            largeUrl\n          }\n        }\n        total\n      }\n    }\n  }\n"]);return l=function(){return t},t}var I=i.n(y)()(l()),j=i("aZpa"),N=i("IzIT"),d=i("5MSs"),s=i("bKIR"),z=i("rNkn"),L=i("hWNl"),D=i("uyVz"),h=i("t9+S"),m=i("tgas"),x=i("Xiyc"),T=i("lrOO"),w=i("TWi5"),A=a.a.createElement,S=function(t){var e=t.data,i=t.loading,a=t.fetchMore,c=t.limit,n=Object(r.useState)(!1),o=n[0],u=n[1],y=Object(r.useState)(1),l=y[0],I=y[1],d=e&&e.category?e.category.posts.data:[],x=d.length,T=e&&e.category?e.category.posts.total:null,w=e&&e.category?e.category.name:null;return A(s.a,{mt:50,mb:50},A(g.b,null,A(z.a,{content:w,mb:40,style:{fontSize:24,fontWeight:600,color:"#333333"}}),d?A(L.a,{data:d,totalPost:T,postCount:x,columnWidth:[1,.5,1/4],component:function(t){var e=t.title,i=t.price,r=void 0===i?"0.00":i,a=t.slug,c=t.image,n=c.url,g=c.largeUrl;return A(M.a,{href:"".concat(N.k,"/[slug]"),as:"".concat(N.k,"/").concat(a)},A("a",null,A(h.a,{currency:j.a,title:e,price:r,imageSrc:[n,g]})))},loading:i||o,isLoading:o,placeholder:A(D.a,null),limit:c,handleLoadMore:function(t){u(!0),I(l+1),a({variables:{page:l+1},updateQuery:function(t,e){var i=e.fetchMoreResult;if(!i)return u(!1),t;var r=t.category.posts.data,a=i.category.posts.data;if(x&&T&&x<=T){u(!1);var c=r.concat(a);return i.category.posts.data=c,i}}})}}):A(m.a,null)))};e.default=Object(w.a)(Object(d.a)((function(){var t={SLUG:Object(c.useRouter)().query.slug,LIMIT:20},e=Object(o.c)(I,{variables:t}),i=e.data,a=e.loading,n=e.error,M=e.fetchMore;if(n)return A(x.a,null);var g=(i&&i.category?i.category:"").name;return A(r.Fragment,null,A(T.a,{title:g,description:"Product categories"}),A(S,{data:i,loading:a,fetchMore:M,limit:t.LIMIT}))})))},Bt1m:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNzAgMjA1Ij48ZGVmcz48c3R5bGU+LmJ7ZmlsbDojOTk5fTwvc3R5bGU+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjc2IC05NCkiPjxyZWN0IHdpZHRoPSIyNzAiIGhlaWdodD0iMjA1IiByeD0iMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTI3NiA5NCkiIGZpbGw9IiNmN2Y3ZjciLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzg1IDE3NCkiPjxwYXRoIGNsYXNzPSJiIiBkPSJNMjYuOTgzIDM3LjY0MWE2LjU4OCA2LjU4OCAwIDAxLTQuMTM0LTEuNTQybC03LjYzOC02LjcyN2EzLjM2MyAzLjM2MyAwIDAwLTQuMzQ1LS4yMUwwIDM3LjE1djUuMTg1YTIuNTIzIDIuNTIzIDAgMDAyLjM3OCAyLjY2aDM4LjY5YTIuOTUxIDIuOTUxIDAgMDAzLjA4My0yLjY2M1YyOC43NDFsLTEzLjggNy45ODhhNi4zNzcgNi4zNzcgMCAwMS0zLjM2OC45MTJ6Ii8+PGNpcmNsZSBjbGFzcz0iYiIgY3g9IjMuMDgzIiBjeT0iMy4wODMiIHI9IjMuMDgzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMy4zMzkgMTcuODgpIi8+PHBhdGggY2xhc3M9ImIiIGQ9Ik01MS40MzkgNS40NzdhMi41OTMgMi41OTMgMCAwMC0xLjg5Mi0xLjA1MUwxMS4zNTYuMDExYTIuNzkxIDIuNzkxIDAgMDAtMy4xNTMgMi4zODZsLS42MzEgNS40NjZoMzMuNWE2LjAyNiA2LjAyNiAwIDAxNS44ODYgNS44MTZ2MjQuNzMzYzAtLjE0LjYzMS0uMjguOTExLS41NjFhMi4zODIgMi4zODIgMCAwMC45MTEtMS44OTJsMy4yOTMtMjguNDVhMi43MzMgMi43MzMgMCAwMC0uNjM0LTIuMDMyeiIvPjxwYXRoIGNsYXNzPSJiIiBkPSJNNDEuMDY4IDEwLjY2NEgyLjU5N2EyLjgyOSAyLjgyOSAwIDAwLTIuNTkzIDMuMDEydjE5Ljk3MWw5LjI1LTYuNzI3YTYuMTY3IDYuMTY3IDAgMDE3Ljc3OC4zNWw3LjcwOCA2LjcyN2EzLjU3NCAzLjU3NCAwIDAwNC4xMzQuMzVsMTUuMjc2LTguOVYxMy42NzZhMy4yMjMgMy4yMjMgMCAwMC0zLjA4Mi0zLjAxMnpNMjYuNDIyIDI2Ljg1YTUuODg2IDUuODg2IDAgMTE1Ljg4Ni01Ljg4NiA1Ljg4NiA1Ljg4NiAwIDAxLTUuODg2IDUuODg2eiIvPjwvZz48L2c+PC9zdmc+"},"t9+S":function(t,e,i){"use strict";var r=i("cxan"),a=i("HbGN"),c=i("ERkP"),n=i.n(c),M=i("Cgap"),g=i("rNkn"),o=i("Ax/r"),u=i("Bt1m"),y=i.n(u),l=i("5mt/"),I=i.n(l),j=n.a.createElement,N=function(t){var e=t.imageSrc,i=t.title,c=t.price,n=t.currency,u=t.imageStyle,l=t.titleStyle,N=t.priceStyle,d=Object(a.a)(t,["imageSrc","title","price","currency","imageStyle","titleStyle","priceStyle"]);return j(M.a,d,e&&j(I.a,{src:e,alt:i,style:u,loader:j("img",{src:y.a}),unloader:j("img",{src:y.a})}),i&&j(g.a,Object(r.a)({content:i},l,{mb:"1",mt:15})),c&&n&&j(o.a,Object(r.a)({content:"".concat(n," ").concat(c)},N,{mb:"0"})))};N.defaultProps={boxShadow:"none",borderRadius:"3px",mb:"40px",color:"#595959",imageStyle:{width:"100%",height:"210px",color:"#fff",borderRadius:"3px",objectFit:"cover"},titleStyle:{fontSize:"14px",mt:"10px"}},e.a=N},uyVz:function(t,e,i){"use strict";var r=i("cxan"),a=i("ERkP"),c=i.n(a),n=i("r4SS"),M=c.a.createElement;e.a=function(t){return M(n.a,Object(r.a)({rtl:!0,height:260,width:276,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},t),M("rect",{x:"561.23",y:"-60",rx:"4",ry:"4",width:"117",height:"6.4"}),M("rect",{x:"588",y:"-55",rx:"3",ry:"3",width:"85",height:"6.4"}),M("rect",{x:"0.03",y:"201.77",rx:"3",ry:"3",width:"276.5",height:"16.45"}),M("rect",{x:"1",y:"228.54",rx:"3",ry:"3",width:"163.4",height:"13.76"}),M("rect",{x:"500",y:"-54.48",rx:"3",ry:"3",width:"132.66",height:"14.85"}),M("circle",{cx:"600",cy:"-51",r:"30"}),M("rect",{x:"0.23",y:"-0.33",rx:"0",ry:"0",width:"276",height:"191.25"}),M("rect",{x:"173.23",y:"68.67",rx:"0",ry:"0",width:"1",height:"7"}))}},vvjQ:function(t,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category/[slug]",function(){return i("7Ljw")}])}},[["vvjQ",1,0,7,5,2,3,6,4,8,9,11,12,10]]]);