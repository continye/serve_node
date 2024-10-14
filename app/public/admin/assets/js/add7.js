import{q as e,r as a,f as s,u as t,G as r,Q as l,R as o,p as i}from"./element-plus.js";import{f as p}from"./category.js";import{g as m,c as d}from"./gather.js";import{_ as c,b as u,t as n}from"./index.js";import{o as g,c as f,M as j,Q as h,a as y,U as b,R as _,V as v,W as V,ay as w,az as U}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@element-plus.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vanilla-jsoneditor.js";import"./json-source-map.js";import"./@fortawesome.js";import"./natural-compare-lite.js";import"./@codemirror.js";import"./@lezer.js";import"./crelt.js";import"./style-mod.js";import"./w3c-keyname.js";import"./@replit.js";import"./codemirror-wrapped-line-indent.js";import"./fast-deep-equal.js";import"./fast-uri.js";import"./jmespath.js";import"./immutable-json-patch.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const k={name:"gather-add",data:()=>({activeName:"list",categorySelected:[],categoryProps:{checkStrictly:!0},category:[],params:{taskName:"",targetUrl:"",parseData:"",status:"1",cid:1},listPages:[],article:{title:"",article:""}}),computed:{},mounted(){},async created(){this.query()},methods:{async query(){try{let e=await p();if(200===e.code){let a=u(n(e.data)),s=u(e.data);this.cateList=s,this.category=[...a]}}catch(e){console.log(e)}},handleChange(e){console.log(e),-1!=e[0]&&(this.params.cid=e[e.length-1])},handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},async getArticle(){try{let{targetUrl:e,parseData:a}=this.params,s=await m({targetUrl:e,parseData:a});200==s.code&&(this.article=s.data,this.$message({message:"恭喜你，获取数据成功^_^",type:"success"}))}catch(e){console.log(e)}},async create(){try{let e=await d(this.params);200==e.code?(this.$message({message:"新增成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return!1;this.create()}))}}},x=e=>(w("data-v-7a250d6a"),e=e(),U(),e),q={class:"mb-20 bg-fff pd-20"},C={class:"flex w-full"},z={class:"flex w-full"},D={class:"f-15"},N=x((()=>y("span",{class:"c-999"},"标题：",-1))),S=x((()=>y("p",{class:"f-15"},[y("span",{class:"c-999"},"内容：")],-1))),$=["innerHTML"];const A=c(k,[["render",function(p,m,d,c,u,n){const w=e,U=a,k=s,x=t,A=r,L=l,M=o,P=i;return g(),f("div",q,[j(P,{ref:"params",model:p.params,"label-width":"84px"},{default:h((()=>[j(U,{label:"任务名称",prop:"taskName",rules:[{required:!0,message:"请输入任务名称",trigger:"blur"}]},{default:h((()=>[j(w,{modelValue:p.params.taskName,"onUpdate:modelValue":m[0]||(m[0]=e=>p.params.taskName=e),placeholder:"例：前端库-chat问答"},null,8,["modelValue"])])),_:1}),j(U,{label:"接口地址",prop:"targetUrl",rules:[{required:!0,message:"请输入匹配网址",trigger:"blur"}]},{default:h((()=>[y("div",C,[j(w,{class:"flex-1",modelValue:p.params.targetUrl,"onUpdate:modelValue":m[1]||(m[1]=e=>p.params.targetUrl=e)},null,8,["modelValue"])])])),_:1}),j(U,{label:"处理函数",prop:"parseData",rules:[{required:!0,message:"请输入内容字段",trigger:"blur"}]},{default:h((()=>[y("div",z,[j(w,{class:"flex-1",type:"textarea",rows:13,modelValue:p.params.parseData,"onUpdate:modelValue":m[2]||(m[2]=e=>p.params.parseData=e),placeholder:"如果不做任何处理，直接返回data。拿到的文本是变量是data,可以直接js函数可以处理成需要的数据，最终需要返回data。例：\n            data.title = data.title;\n            data.article = data.data.news;\n            return data;\n            "},null,8,["modelValue"]),j(k,{class:"ml-5",type:"primary",onClick:n.getArticle},{default:h((()=>[b(" 测试 ")])),_:1},8,["onClick"])])])),_:1}),j(U,{label:"保存栏目",prop:"cid",rules:[{required:!0,message:"请输入保存栏目",trigger:"blur"}]},{default:h((()=>[j(x,{props:p.categoryProps,"show-all-levels":!1,modelValue:p.categorySelected,"onUpdate:modelValue":m[3]||(m[3]=e=>p.categorySelected=e),options:p.category,onChange:n.handleChange},null,8,["props","modelValue","options","onChange"])])),_:1}),j(U,{label:"发布状态",prop:"status",rules:[{required:!0,message:"请选择发布状态",trigger:"blur"}]},{default:h((()=>[j(L,{modelValue:p.params.status,"onUpdate:modelValue":m[4]||(m[4]=e=>p.params.status=e),class:"ml-4"},{default:h((()=>[j(A,{value:"1",size:"large"},{default:h((()=>[b("草稿")])),_:1}),j(A,{value:"2",size:"large"},{default:h((()=>[b("发布")])),_:1})])),_:1},8,["modelValue"])])),_:1}),p.article.title?(g(),_(U,{key:0,label:"采集结果"},{default:h((()=>[j(M,{class:"w-full",shadow:"never"},{header:h((()=>[y("p",D,[N,b(v(p.article.title),1)])])),default:h((()=>[S,y("div",{class:"f-15 article",innerHTML:p.article.article},null,8,$)])),_:1})])),_:1})):V("",!0),j(U,null,{default:h((()=>[j(k,{type:"primary",onClick:m[5]||(m[5]=e=>n.submit("params"))},{default:h((()=>[b("保存")])),_:1})])),_:1})])),_:1},8,["model"])])}],["__scopeId","data-v-7a250d6a"]]);export{A as default};