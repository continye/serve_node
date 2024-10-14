System.register(["./element-plus-legacy.js","./slide-legacy.js","./upload-legacy.js","./index-legacy.js","./@vue-legacy.js","./lodash-es-legacy.js","./async-validator-legacy.js","./@vueuse-legacy.js","./dayjs-legacy.js","./@element-plus-legacy.js","./@ctrl-legacy.js","./@popperjs-legacy.js","./memoize-one-legacy.js","./normalize-wheel-es-legacy.js","./sys_config-legacy.js","./pinia-legacy.js","./pinia-plugin-persist-legacy.js","./vanilla-jsoneditor-legacy.js","./json-source-map-legacy.js","./@fortawesome-legacy.js","./natural-compare-lite-legacy.js","./@codemirror-legacy.js","./@lezer-legacy.js","./crelt-legacy.js","./style-mod-legacy.js","./w3c-keyname-legacy.js","./@replit-legacy.js","./codemirror-wrapped-line-indent-legacy.js","./fast-deep-equal-legacy.js","./fast-uri-legacy.js","./jmespath-legacy.js","./immutable-json-patch-legacy.js","./vue-router-legacy.js","./axios-legacy.js","./js-cookie-legacy.js","./saduocss-legacy.js"],(function(e,l){"use strict";var a,s,t,r,i,u,n,c,o,d,m,p,g,y,j,h,f,U,b,w;return{setters:[e=>{a=e.q,s=e.r,t=e.a,r=e.B,i=e.C,u=e.D,n=e.f,c=e.p},e=>{o=e.d,d=e.u},e=>{m=e.a},e=>{p=e._},e=>{g=e.ad,y=e.o,j=e.c,h=e.M,f=e.Q,U=e.R,b=e.W,w=e.U},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){const l={class:"mr-10 ml-10 mb-20 pd-20 content-wrap"};e("default",p({name:"slide-edit",data:()=>({params:{id:0,title:"",imgUrl:"",linkUrl:""}}),computed:{},mounted(){},async created(){this.params.id=this.$route.params.id,await this.detail()},methods:{async detail(){try{let e=await o(this.params.id);if(200===e.code){const{id:l,title:a,imgUrl:s,linkUrl:t}=e.data;this.params={id:l,title:a,imgUrl:s,linkUrl:t}}else this.$message({message:e.msg,type:"success"})}catch(e){console.error(e)}},handleAttr(e){console.log("e--\x3e",e)},handleSubCid(e){console.log("e--\x3e",e)},beforeUpload(e){return-1===e.type.indexOf("image")?(this.$message("上传文件只能是图片格式"),!1):e.size/1024/1024>.2?(this.$message("上传图片必须小于200k"),!1):void 0},async upload(e){let l=new FormData;l.append("file",e.file);let a=await m(l);200===a.code&&(this.params.imgUrl=a.data.path)},async update(){try{let e=await d(this.params);200==e.code?(this.$message({message:"更新成功^_^",type:"success"}),this.$router.go(-1)):this.$message({message:e.msg,type:"success"})}catch(e){console.log(e)}},submit(e){this.$refs[e].validate((e=>{if(!e)return console.log("error submit!!"),!1;this.update()}))}}},[["render",function(e,o,d,m,p,v){const _=a,k=s,x=g("MostlyCloudy"),V=t,$=r,q=i,z=u,C=n,D=c;return y(),j("div",l,[h(D,{ref:"params",model:e.params,"label-width":"84px",class:"mt-20"},{default:f((()=>[h(k,{label:"轮播标题",rules:[{required:!0,message:"请输入标题",trigger:"blur"}],prop:"title"},{default:f((()=>[h(_,{modelValue:e.params.title,"onUpdate:modelValue":o[0]||(o[0]=l=>e.params.title=l)},null,8,["modelValue"])])),_:1}),h(k,{class:"flex",label:"轮播图"},{default:f((()=>[h(q,{class:"avatar-uploader","http-request":v.upload,"show-file-list":!1,"before-upload":v.beforeUpload},{default:f((()=>[h($,{placement:"top-start",title:"上传",width:200,trigger:"hover",content:"上传图片作为封面图，大小200k内"},{reference:f((()=>[h(V,{class:"avatar-uploader-icon"},{default:f((()=>[h(x)])),_:1})])),_:1})])),_:1},8,["http-request","before-upload"]),e.params.imgUrl?(y(),U($,{key:0,placement:"right",width:600,trigger:"hover"},{reference:f((()=>[h(z,{class:"avatar-uploader-icon pointer ml-10",src:e.params.imgUrl},null,8,["src"])])),default:f((()=>[h(z,{style:{width:"100%"},src:e.params.imgUrl},null,8,["src"])])),_:1})):b("",!0),h(_,{class:"ml-10 flex-1",modelValue:e.params.imgUrl,"onUpdate:modelValue":o[1]||(o[1]=l=>e.params.imgUrl=l)},null,8,["modelValue"])])),_:1}),h(k,{label:"轮播链接"},{default:f((()=>[h(_,{modelValue:e.params.linkUrl,"onUpdate:modelValue":o[2]||(o[2]=l=>e.params.linkUrl=l)},null,8,["modelValue"])])),_:1}),h(k,null,{default:f((()=>[h(C,{type:"primary",onClick:o[3]||(o[3]=e=>v.submit("params"))},{default:f((()=>[w("保存")])),_:1})])),_:1})])),_:1},8,["model"])])}]]))}}}));