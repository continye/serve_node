import{f as e,F as t,M as i,N as s,P as a}from"./element-plus.js";import{G as o,E as l,v as r,H as n}from"./@element-plus.js";import{l as p,a as c}from"./friendlink.js";import{_ as m}from"./index.js";import{ad as d,o as u,c as h,M as j,Q as f,U as g,V as y}from"./@vue.js";import"./lodash-es.js";import"./async-validator.js";import"./@vueuse.js";import"./dayjs.js";import"./@ctrl.js";import"./@popperjs.js";import"./memoize-one.js";import"./normalize-wheel-es.js";import"./pinia.js";import"./pinia-plugin-persist.js";import"./vanilla-jsoneditor.js";import"./json-source-map.js";import"./@fortawesome.js";import"./natural-compare-lite.js";import"./@codemirror.js";import"./@lezer.js";import"./crelt.js";import"./style-mod.js";import"./w3c-keyname.js";import"./@replit.js";import"./codemirror-wrapped-line-indent.js";import"./fast-deep-equal.js";import"./fast-uri.js";import"./jmespath.js";import"./immutable-json-patch.js";import"./vue-router.js";import"./axios.js";import"./js-cookie.js";/* empty css        */const w={class:"pd-20 bg-fff"};const b=m({name:"friendlink-index",setup:()=>({Edit:o,Delete:l,View:r,Search:n}),data:()=>({keywords:"",tableData:[],multipleSelection:[],count:0,cur:1}),computed:{},created(){this.list()},methods:{async list(){try{let e=await p(this.cur);200===e.code&&(this.tableData=[...e.data.list],this.count=e.data.count)}catch(e){console.log(e)}},handleCurrentChange(e){this.cur=e,this.list()},toggleSelection(e){e?e.forEach((e=>{this.$refs.multipleTable.toggleRowSelection(e)})):this.$refs.multipleTable.clearSelection()},handleSelectionChange(e){this.multipleSelection=e},toEdit(e){let t=e.id;this.$router.push({name:"friendlink-edit",params:{id:t}})},async handleDel(e){let t=e.id;try{let e=await c(t);200===e.code?(this.$message({message:"删除成功 ^_^",type:"success"}),this.list()):this.$message({message:e.msg,type:"success"})}catch(i){console.log(i)}}}},[["render",function(o,l,r,n,p,c){const m=e,b=d("router-link"),k=t,C=i,S=s,_=a;return u(),h("div",w,[j(k,{type:"flex",class:"mt-10 mb-10",justify:"end"},{default:f((()=>[j(b,{to:"/friendlink/add"},{default:f((()=>[j(m,{type:"primary",round:""},{default:f((()=>[g("新增")])),_:1})])),_:1})])),_:1}),j(S,{ref:"multipleTable",data:o.tableData,"tooltip-effect":"dark","row-key":"id",onSelectionChange:c.handleSelectionChange},{default:f((()=>[j(C,{type:"selection"}),j(C,{prop:"id",width:"60",label:"编号"}),j(C,{prop:"title",width:"120",label:"标题"}),j(C,{prop:"link",width:"260",label:"链接"}),j(C,{prop:"orderBy",label:"排序"}),j(C,{prop:"createdAt",label:"发布时间"},{default:f((e=>[g(y(e.row.createdAt),1)])),_:1}),j(C,{fixed:"right",width:"100",label:"操作"},{default:f((e=>[j(m,{icon:n.Edit,circle:"",onClick:t=>c.toEdit(e.row)},null,8,["icon","onClick"]),j(m,{icon:n.Delete,circle:"",onClick:t=>c.handleDel(e.row)},null,8,["icon","onClick"])])),_:1})])),_:1},8,["data","onSelectionChange"]),j(k,{type:"flex",class:"mt-20 align-c",justify:"center"},{default:f((()=>[j(_,{background:"",layout:"prev, pager, next",onCurrentChange:c.handleCurrentChange,"page-size":10,total:o.count,"hide-on-single-page":""},null,8,["onCurrentChange","total"])])),_:1})])}]]);export{b as default};