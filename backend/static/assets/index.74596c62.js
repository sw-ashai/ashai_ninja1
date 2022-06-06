var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,r=(a,t,o)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):a[t]=o,n=(e,a)=>{for(var t in a||(a={}))s.call(a,t)&&r(e,t,a[t]);if(o)for(var t of o(a))c.call(a,t)&&r(e,t,a[t]);return e},l=(e,o)=>a(e,t(o));import{p as i,a as d,o as p,c as m,r as u,b as v,w as k,F as g,k as f,d as y,e as h,t as w,f as b,g as x,u as C,_ as S,h as _,i as j,j as I,l as K,m as N,n as A,q as L,s as P}from"./vendor.e40008cd.js";i("data-v-9fbf088c"),d();const O={},V={class:"NinjaLogo",src:"/assets/logo.03d6d6da.png",alt:"logo"};O.render=function(e,a){return p(),m("img",V)};const W={components:{Logo:O}},z=k("data-v-7fe153b3");i("data-v-7fe153b3");const D={class:"header"},U={class:"header-wrapper"},R={class:"flex items-center"},E=v("p",{class:"pl-3 select-none"},"Ninja",-1);d();const J=z(((e,a,t,o,s,c)=>{const r=u("Logo");return p(),m("div",D,[v("div",U,[v("div",R,[v(r,{class:"h-10 w-10"}),E])])])}));W.render=J,W.__scopeId="data-v-7fe153b3";const T={class:"main"},B={setup:e=>(e,a)=>{const t=u("router-view");return p(),m(g,null,[v(W),v("div",T,[v(t)])],64)}};const F=f.create({prefixUrl:"/api",retry:{limit:0}});function Q(e){return F.post("cklogin",{json:e}).json()}const q={setup(){const e=C();let a=y({remark:"",nickName:void 0,timestamp:void 0,userStatus:void 0});const t=async()=>{try{const e=localStorage.getItem("eid"),t=localStorage.getItem("wseid");if(!e&&!t)return void o();if(e){const t=await function(e){const a=new URLSearchParams;return a.set("eid",e),F.get("userinfo",{searchParams:a}).json()}(e);if(!t)return S.error("获取用户CK信息失败，请重重新登录"),void o();a.nickName=t.data.nickName,a.userStatus=t.data.status,a.timestamp=new Date(t.data.timestamp).toLocaleString()}if(t){const e=await getWSCKUserinfoAPI(t);if(!e)return S.error("获取用户WSCK信息失败，请重重新登录"),void o();a.nickName=e.data.nickName,a.timestamp=new Date(e.data.timestamp).toLocaleString()}}catch(e){console.error(e)}};h(t);const o=()=>{localStorage.removeItem("eid"),localStorage.removeItem("wseid"),e.push("/login")};return l(n({},w(a)),{getInfo:t,logout:o,delAccount:async()=>{try{const e=localStorage.getItem("eid"),a=await function(e){return F.post("delaccount",{json:e}).json()}({eid:e});200!==a.code?S.error(a.message):(S.success(a.message),setTimeout((()=>{o()}),1e3))}catch(e){console.error(e)}},changeRemark:async()=>{try{const e=localStorage.getItem("eid"),t=localStorage.getItem("wseid"),o=a.remark;if(e){const a=await function(e){return F.post("update/remark",{json:e}).json()}({eid:e,remark:o});200!==a.code?S.success(a.message):S.error(a.message)}if(t){const e=await remarkupdateWSCKAPI({wseid:t,remark:o});200!==e.code?S.success(e.message):S.error(e.message)}}catch(e){console.error(e)}}})}},H=k("data-v-7da387f5");i("data-v-7da387f5");const Z={class:"content"},G={class:"card"},M=v("div",{class:"card-header"},[v("p",{class:"card-title"},"个人中心")],-1),X={class:"card-body"},Y=_("状态："),$={key:0,style:{color:"red",display:"inline"}},ee={key:1,style:{color:"green",display:"inline"}},ae={class:"card-footer"},te=_("退出登录"),oe=_("删除CK"),se={class:"card"},ce=v("div",{class:"card-header"},[v("p",{class:"card-title"},"修改备注")],-1),re={class:"card-body text-center"},ne={class:"card-footer"},le=_("修改");d();const ie=H(((e,a,t,o,s,c)=>{const r=u("el-button"),n=u("el-input");return p(),m("div",Z,[v("div",G,[M,v("div",X,[v("p",null,"昵称："+b(e.nickName),1),v("p",null,"更新时间："+b(e.timestamp),1),v("span",null,[Y,1===e.userStatus?(p(),m("p",$,"过期已禁用")):x("",!0),0===e.userStatus?(p(),m("p",ee,"正常")):x("",!0)])]),v("div",ae,[v(r,{size:"small",auto:"",onClick:o.logout},{default:H((()=>[te])),_:1},8,["onClick"]),v(r,{type:"danger",size:"small",auto:"",onClick:o.delAccount},{default:H((()=>[oe])),_:1},8,["onClick"])])]),v("div",se,[ce,v("div",re,[v(n,{modelValue:e.remark,"onUpdate:modelValue":a[1]||(a[1]=a=>e.remark=a),size:"small",clearable:"",class:"my-4 w-full"},null,8,["modelValue"])]),v("div",ne,[v(r,{type:"success",size:"small",auto:"",onClick:o.changeRemark},{default:H((()=>[le])),_:1},8,["onClick"])])])])}));q.render=ie,q.__scopeId="data-v-7da387f5";const de={setup(){const e=C();let a=y({marginCount:0,allowAdd:!0,cookie:"",token:void 0,okl_token:void 0,cookies:void 0,timer:void 0,waitLogin:!1,nickName:void 0});const t=async()=>{try{const e=(await F.get("info").json()).data;a.marginCount=e.marginCount,a.allowAdd=e.allowAdd,a.marginWSCKCount=e.marginWSCKCount,a.allowWSCKAdd=e.allowWSCKAdd,a.showQR=e.showQR,a.showWSCK=e.showWSCK,a.showCK=e.showCK}catch(e){console.error(e)}};return h((()=>{t()})),l(n({},w(a)),{getInfo:t,ckeckLogin:async()=>{try{const t=await function(e){return F.post("check",{json:e}).json()}({token:a.token,okl_token:a.okl_token,cookies:a.cookies});switch(null==t?void 0:t.data.errcode){case 0:localStorage.setItem("eid",t.data.eid),S.success(t.message),clearInterval(a.timer),e.push("/");break;case 176:break;default:S.error(t.message),a.waitLogin=!1,clearInterval(a.timer)}}catch(t){clearInterval(a.timer),a.waitLogin=!1}},CKLogin:async()=>{try{const t=a.cookie.match(/pt_key=(.*?);/)&&a.cookie.match(/pt_key=(.*?);/)[1],o=a.cookie.match(/pt_pin=(.*?);/)&&a.cookie.match(/pt_pin=(.*?);/)[1];if(t&&o){let s;a.nickName?(s=await Q({pt_key:t,pt_pin:o,nickName:a.nickName}),s.data.eid?(localStorage.setItem("eid",s.data.eid),S.success(s.message),e.push("/")):S.error(s.message||"cookie 解析失败，请检查后重试！")):j.confirm("建议填写具有辨识度的备注，以方便查看运行日志！","提示",{confirmButtonText:"返回填写备注",cancelButtonText:"我不管，就用默认的！"}).then((()=>{})).catch((async()=>{try{s=await Q({pt_key:t,pt_pin:o}),s.data.eid?(localStorage.setItem("eid",s.data.eid),S.success(s.message),e.push("/")):S.error(s.message||"cookie 解析失败，请检查后重试！")}catch(a){console.error(a)}}))}else S.error("cookie 解析失败，请检查后重试！")}catch(t){console.error(t)}}})}},pe=k("data-v-0e7c321e");i("data-v-0e7c321e");const me={class:"content"},ue=I('<div class="card" data-v-0e7c321e><div class="card-header" data-v-0e7c321e><div class="flex items-center justify-between" data-v-0e7c321e><p class="card-title" data-v-0e7c321e>Ninja提醒您</p></div></div><div class="card-body text-base leading-6" data-v-0e7c321e><p style="color:red;" data-v-0e7c321e>撸豆有可能造成的任何损失本人概不负责！！！！！！！！！</p><p data-v-0e7c321e>为了您的财产安全请关闭免密支付以及打开支付验密（京东-设置-支付设置-支付验密设置）。</p><p data-v-0e7c321e>建议京东账户绑定微信以保证提现能到账。</p><p style="font-weight:bold;" data-v-0e7c321e>安全起见，切勿泄露您的cookie！</p></div><div class="card-footet" data-v-0e7c321e></div></div>',1),ve={class:"card"},ke={class:"card-header"},ge={class:"flex items-center justify-between"},fe=v("p",{class:"card-title"},"CK 登录",-1),ye={class:"ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"},he=I('<div class="card-body text-base leading-6" data-v-0e7c321e><p data-v-0e7c321e>安卓手机傻瓜式获取CK（强烈推荐，非常方便）<a style="" href="https://github.com/ZhuSky/JDCookie" target="_blank" data-v-0e7c321e>点此访问下载连接</a></p><p data-v-0e7c321e>电脑用户浏览器登录<a style="" href="https://m.jd.com/" target="_blank" data-v-0e7c321e>JD官网</a>，点击我的出现登录页面后点击F12，通过开发者工具获取cookie。</p><p data-v-0e7c321e>手机用户可以使用Alook浏览器登录<a style="" href="https://m.jd.com/" target="_blank" id="jd" data-v-0e7c321e>JD官网</a>，并在菜单-工具箱-开发者工具-Cookies中获取（Android和iPhone通用）。</p><p data-v-0e7c321e>另外也可以使用抓包工具（iPhone：Stream，Android：HttpCanary）抓取京东app的ck</p><p data-v-0e7c321e>cookie直接填入输入框即可，Ninja会自动正则提取pt_key和pt_pin。</p></div><span class="card-subtitle" style="color:red;" data-v-0e7c321e> 可以直接填写整个cookie。 </span><br data-v-0e7c321e><span class="card-subtitle" style="color:red;" data-v-0e7c321e> 注意格式（pt_key=xxxxxxxxxxxxxxx;pt_pin=xxxxxxxxxxxxxx;）注意分号不能少！ </span><br data-v-0e7c321e><span class="card-subtitle" data-v-0e7c321e> 请在下方输入您的 cookie 登录。 </span><br data-v-0e7c321e>',7),we={class:"card-body text-center"},be=_("登录"),xe=v("div",{class:"card-footet"},null,-1);d();const Ce=pe(((e,a,t,o,s,c)=>{const r=u("el-input"),n=u("el-button");return p(),m("div",me,[ue,v("div",ve,[v("div",ke,[v("div",ge,[fe,v("span",ye,"余量："+b(e.marginCount),1)]),he]),v("div",we,[v(r,{modelValue:e.nickName,"onUpdate:modelValue":a[1]||(a[1]=a=>e.nickName=a),size:"small",style:{width:"300px",float:"left"},placeholder:"备注",clearable:""},null,8,["modelValue"]),v(r,{modelValue:e.cookie,"onUpdate:modelValue":a[2]||(a[2]=a=>e.cookie=a),size:"small",placeholder:"Cookie",clearable:"",class:"my-4 w-full"},null,8,["modelValue"]),v(n,{type:"primary",size:"small",round:"",onClick:o.CKLogin},{default:pe((()=>[be])),_:1},8,["onClick"])]),xe])])}));de.render=Ce,de.__scopeId="data-v-0e7c321e";const Se=[{path:"/",component:q},{path:"/login",component:de}],_e=K({history:N(),routes:Se}),je=[L,P,S,j],Ie=[S],Ke=A(B);je.forEach((e=>{Ke.component(e.name,e)})),Ie.forEach((e=>{Ke.use(e)})),Ke.use(_e),Ke.mount("#app");
