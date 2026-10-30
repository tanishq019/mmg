// Shared DOM helpers used by routing, interactions, and the canvas experience.
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];

function nav(){const h=(location.hash||'#home').slice(1);$('#nv').innerHTML=P.map(([k,l])=>`<a href="#${k}" class="${h==k?'on':''}">${l}</a>`).join('');$('#dl').innerHTML=P.map(([k,l])=>`<a class="l" href="#${k}">${l}</a>`).join('')}
function render(){let h=(location.hash||'#home').slice(1);if(!pages[h])h='home';window.mfStop&&window.mfStop();$('#app').innerHTML=pages[h]();nav();scrollTo(0,0);setDrw(0);document.title=(h=='home'?'Machine Magnet':P.find(p=>p[0]==h)?.[1]||'Find your path')+' | MMG';({home:iMF,programs:iPr,events:iEv,fame:iFm,journal:iJn,quiz:iQz})[h]?.();obs()}
function chipF(id,cb){const b=$(id);b.onclick=e=>{const x=e.target.closest('button');if(!x)return;$$('button',b).forEach(y=>y.classList.toggle('on',y==x));cb(x.dataset.f)}}
function iPr(){let f='All',q='';const r=()=>{const l=PR.filter(p=>(f=='All'||p.a==f)&&(p.t+p.d).toLowerCase().includes(q));$('#pl').innerHTML=l.length?prog(l):'<p class="mu">No programs match. Clear the search or pick another audience.</p>';obs()};chipF('#pf',x=>{f=x;r()});$('#ps').oninput=e=>{q=e.target.value.toLowerCase();r()};r()}
function iEv(){const r=f=>{$('#el').innerHTML=evs(EV.filter(e=>(f=='up')==(e.s!='done')));obs()};chipF('#ef',r);r('up')}
function iFm(){const r=f=>{$('#fl').innerHTML=fms(FM.filter(x=>f=='All'||x.ty==f));obs()};chipF('#ff',r);r('All')}
function iJn(){const r=f=>{$('#jl').innerHTML=jn(PO.filter(x=>f=='All'||x.c==f));obs()};chipF('#jf',r);r('All')}
let qi=0,qa=[];
function iQz(){qi=0;qa=[];rq()}
function rq(){const z=$('#qz');if(qi>=Q.length){const s=[0,0,0,0];qa.forEach(a=>s[a]++);const m=s.indexOf(Math.max(...s)),p=PATH[m];z.innerHTML=`<div class="ok"><div class="eb">YOUR MATCH</div><h2 style="margin:10px 0">${p[0]}</h2><p class="mu">${p[1]}</p><div class="row"><a class="btn p" href="${p[2]}">See it</a><button class="btn" data-a="qr">Retake quiz</button></div></div>`;return}
const q=Q[qi];z.innerHTML=`<div class="pg" role="progressbar" aria-valuenow="${qi+1}" aria-valuemax="${Q.length}"><i style="width:${(qi+1)/Q.length*100}%"></i></div><h3 style="font-size:28px;margin:0">${q[0]}</h3><div class="q">${q[1].map((o,i)=>`<button data-a="qa:${i}" class="${qa[qi]===i?'on':''}">${o}</button>`).join('')}</div><div class="row"><button class="btn" data-a="qb" ${qi?'':'disabled'}>Back</button><button class="btn p" data-a="qn" ${qa[qi]===undefined?'disabled':''}>${qi==Q.length-1?'See my result':'Next'}</button></div>`}
function val(f){let ok=1,first;$$('input,textarea',f).forEach(i=>{if(!i.name||i.type=='checkbox')return;const v=i.value.trim();let m='';if(i.required&&!v)m='Enter your '+i.dataset.l+'.';else if(i.type=='email'&&v&&!/^\S+@\S+\.\S+$/.test(v))m='Enter a valid email, like name@college.edu.';else if(i.type=='url'&&v&&!/^https?:\/\/\S+\.\S+/.test(v))m='Enter a full link starting with https://.';else if(i.dataset.min&&v.length<+i.dataset.min)m='Write at least '+i.dataset.min+' characters.';i.nextElementSibling.textContent=m;i.setAttribute('aria-invalid',!!m);if(m){ok=0;first=first||i}});first?.focus();return ok}
function toast(t){const e=$('#ts');e.textContent=t;e.classList.add('o');clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.remove('o'),3200)}
function dlg(h){const d=$('#dg');d.innerHTML=h+'<div class="row" style="margin-top:20px"><button class="btn" data-a="cl">Close</button></div>';d.showModal()}
function regForm(e){return`<h3>Register: ${e.t}</h3><p class="mu">${e.d[0]} ${e.d[1]}, ${e.v}</p><form novalidate data-form="reg:${e.id}">${F('name','Name','text','required')}${F('email','Email','email','required')}<button class="btn p" type="submit">Confirm registration</button></form>`}
document.addEventListener('click',e=>{const a=e.target.closest('[data-a]')?.dataset.a;if(!a)return;const[k,v]=a.split(':');
if(k=='pr'){const p=PR[v];dlg(`<span class="tag">${p.a}</span><h3>${p.t}</h3><p class="mu">${p.d}</p><b>Objectives</b><ul>${p.ob.map(x=>`<li>${x}</li>`).join('')}</ul><b>Eligibility</b><p class="mu">${p.el}</p><b>Outcomes</b><p class="mu">${p.out}</p><a class="btn p" href="#join" data-a="cl">Join to register</a>`)}
if(k=='rg')dlg(regForm(EV[v]));
if(k=='ev'){const x=EV[v];dlg(`<span class="tag">${x.c}</span><h3>${x.t}</h3><p class="mu">${x.d[0]} ${x.d[1]} 2026, ${x.v}</p><p>${x.s=='done'?'Recap: [add highlights, photos and outcomes].':'Details: [add agenda, speakers and what to bring].'}</p>${x.s=='open'?`<button class="btn p" data-a="rg:${x.id}">Register</button>`:''}`)}
if(k=='pj'){const p=PJ[v];dlg(`<h3>${p.t}</h3><p class="mu">Problem: ${p.p}</p><p>${p.s.map(x=>`<span class="ch">${x}</span>`).join('')}</p><p class="mu">Contributors: ${p.b}</p><a class="btn p" href="${p.g}">Open GitHub repository</a>`)}
if(k=='po'){const p=PO[v];dlg(`<span class="tag">${p.c}</span><h3>${p.t}</h3><p class="mu" style="font-size:13px">${p.au}, ${p.dt}, ${p.rt} read</p><p style="font-size:17px;line-height:1.75">${p.b}</p>`)}
if(k=='sub')dlg(`<h3>Submit an article</h3><form novalidate data-form="sub">${F('name','Name','text','required')}${F('email','Email','email','required')}${F('title','Article title','text','required')}${TA('msg','Short summary','required data-min="30"')}<button class="btn p" type="submit">Send article</button></form>`);
if(k=='cl')$('#dg').close();
if(k=='qa'){qa[qi]=+v;rq()}if(k=='qn'){qi++;rq()}if(k=='qb'){qi--;rq()}if(k=='qr')iQz()});
document.addEventListener('submit',e=>{e.preventDefault();const f=e.target,k=f.dataset.form;if(!k||!val(f))return;const b=$('[type=submit]',f),t=b.textContent;b.disabled=1;b.textContent='Sending…';setTimeout(()=>{if(f.email&&f.email.value.trim().endsWith('@error.test')){b.disabled=0;b.textContent=t;f.email.nextElementSibling.textContent='We could not send this just now. Check your connection and try again.';f.email.setAttribute('aria-invalid','true');return}
const msg={join:'Application received. We will email you with next steps.',contact:'Message sent. We reply within a few days.',sub:'Article received. An editor will review it.'}[k]||'You are registered. See you there.';
if(k=='join'||k=='contact'){f.outerHTML=`<div class="ok" role="status"><h3>Thank you, ${f.name.value.trim().split(' ')[0]}.</h3><p class="mu">${msg}</p><a class="btn p" href="#home" style="display:inline-flex">Back to home</a></div>`}else{$('#dg').close();toast(msg)}},1100)});
const dg=$('#dg');dg.addEventListener('click',e=>{if(e.target==dg)dg.close()});
/* theme */
const R=document.documentElement;try{const s=localStorage.getItem('mmg-theme');if(s)R.dataset.theme=s}catch(e){}
$('#th').onclick=()=>{const l=getComputedStyle(R).colorScheme=='light'?'dark':'light';R.dataset.theme=l;try{localStorage.setItem('mmg-theme',l)}catch(e){}col()};
/* drawer */
function setDrw(o){$('#drw').classList.toggle('o',!!o);$('#drw').setAttribute('aria-hidden',!o);$('#mn').setAttribute('aria-expanded',!!o);document.body.style.overflow=o?'hidden':''}
$('#mn').onclick=()=>setDrw(1);$('#mx').onclick=()=>setDrw(0);
/* observers */
let io;function obs(){io?.disconnect();io=new IntersectionObserver(es=>es.forEach(x=>{if(!x.isIntersecting)return;const t=x.target;t.classList.add('v');io.unobserve(t);if(t.dataset.n)cnt(t)}),{threshold:.15});$$('.rv,.rc,[data-n]').forEach(x=>io.observe(x));
$$('.card').forEach(c=>c.onpointermove=e=>{const r=c.getBoundingClientRect();c.style.setProperty('--x',e.clientX-r.left+'px');c.style.setProperty('--y',e.clientY-r.top+'px')})}
function cnt(t){const n=+t.dataset.n,s=performance.now();const m=matchMedia('(prefers-reduced-motion:reduce)').matches;(function f(now){const p=m?1:Math.min((now-s)/1200,1);t.textContent=Math.round(n*(1-Math.pow(1-p,3)))+'+';if(p<1)requestAnimationFrame(f)})(s)}
addEventListener('scroll',()=>{const h=document.documentElement,p=scrollY/(h.scrollHeight-innerHeight||1);$('#sp').style.width=p*100+'%';$('#up').classList.toggle('v',scrollY>600)},{passive:true});
$('#up').onclick=()=>scrollTo({top:0,behavior:matchMedia('(prefers-reduced-motion:reduce)').matches?'auto':'smooth'});
/* bot */
const KB=[[/event|upcoming|when/,'Next up: Embedded Systems Bootcamp on 14 Nov and Hack Night on 6 Dec. See the Events page to register.'],[/project|github|repo/,'Published projects: Smart Plant Monitor, Attendance by Face and Line-Following Cart. Open any project card for its GitHub link. Repo links here are placeholders.'],[/join|member|apply/,'Joining takes two minutes. Use the Join the Club page and tell us why you want in.'],[/program|learn|track/,'We run Foundations Lab, Build Sprint and Hack Training Track for students, plus programs for professionals, institutions and companies.'],[/what|mmg|club|who/,'Machine Magnet is NIET’s technical innovation club for builders, engineers and problem-solvers. Build. Learn. Innovate.']];
function say(t,u){const m=document.createElement('div');m.className='m'+(u?' u':'');m.textContent=t;$('#ms').append(m);$('#ms').scrollTop=1e5}
function ask(q){say(q,1);const ty=document.createElement('div');ty.className='m ty';ty.innerHTML='<i></i><i></i><i></i>';$('#ms').append(ty);$('#ms').scrollTop=1e5;setTimeout(()=>{ty.remove();say((KB.find(k=>k[0].test(q.toLowerCase()))||[0,'I can help with the club, events, programs and projects. Try one of the suggestions below.'])[1])},800)}
function bot(o){$('#bot').classList.toggle('o',o);$('#bb').setAttribute('aria-expanded',o);if(o&&!$('#ms').children.length){say('Hi, I’m Magnet Bot. Ask me about MMG. (Sample answers for now.)')}}
$('#bb').onclick=()=>bot(!$('#bot').classList.contains('o'));$('#bx').onclick=()=>bot(0);
$('#bc').innerHTML=['What is MMG?','Upcoming events','Show projects','How do I join?'].map(x=>`<button>${x}</button>`).join('');$('#bc').onclick=e=>{if(e.target.tagName=='BUTTON')ask(e.target.textContent)};
/* magnetic field hero */
let ac='#FF3038',ln='#A1A1AA';
function col(){const s=getComputedStyle(R);ac=s.getPropertyValue('--ac').trim();ln=s.getPropertyValue('--mu').trim();window.mfRedraw&&window.mfRedraw()}
function iMF(){
const c=$('#mf');if(!c)return;
const x=c.getContext('2d'),box=c.parentNode,RMq=matchMedia('(prefers-reduced-motion:reduce)'),HV=matchMedia('(hover:hover) and (pointer:fine)');
let W=1,H=1,raf=0,vis=1,tx=0,ty=0,px=0,py=0,pr=0,on=0,last=0;
const fit=()=>{const D=Math.min(devicePixelRatio||1,2);W=box.clientWidth||1;H=box.clientHeight||1;c.width=W*D;c.height=H*D;x.setTransform(D,0,0,D,0,0);px=tx=W*.5;py=ty=H*.5};
const mv=e=>{if(!HV.matches)return;const r=box.getBoundingClientRect(),X=e.clientX-r.left,Y=e.clientY-r.top;on=(X>-40&&X<W+40&&Y>-40&&Y<H+40)?1:0;if(on){tx=X;ty=Y}};
const lv=()=>{on=0};
const glow=(X,Y,R2,al)=>{const g=x.createRadialGradient(X,Y,0,X,Y,R2);g.addColorStop(0,ac);g.addColorStop(1,ac+'00');x.globalAlpha=al;x.fillStyle=g;x.fillRect(X-R2,Y-R2,R2*2,R2*2)};
function frame(t){
x.clearRect(0,0,W,H);
const S=Math.min(W,H*1.15),fx=W*.5,fy=H*.5,a=-.22+Math.sin(t/5200)*.035,d=S*.17*(1+Math.sin(t/4300)*.02),ca=Math.cos(a),sa=Math.sin(a);
const P=[[fx+d*ca,fy+d*sa,1],[fx-d*ca,fy-d*sa,-1]],q=-.5*pr,soft=(S*.09)**2,e2=(S*.012)**2;
glow(fx,fy,S*.7,.09+Math.sin(t/3000)*.02);
if(pr>.01)glow(px,py,S*.4,.15*pr);
const field=(X,Y)=>{let ex=0,ey=0;for(const p of P){const dx=X-p[0],dy=Y-p[1],r2=dx*dx+dy*dy+e2,k=p[2]/(r2*Math.sqrt(r2));ex+=dx*k;ey+=dy*k}
if(pr>.01){const dx=X-px,dy=Y-py,r2=dx*dx+dy*dy+soft,k=q/(r2*Math.sqrt(r2));ex+=dx*k;ey+=dy*k}return[ex,ey]};
const N=22,h=S*.011,nodes=[];x.lineWidth=1;x.lineCap='round';
for(let k=0;k<N;k++){const f=Math.PI*2*k/N+.07;let X=P[0][0]+Math.cos(f)*S*.02,Y=P[0][1]+Math.sin(f)*S*.02,mid=null;
x.beginPath();x.moveTo(X,Y);
for(let n=0;n<420;n++){const e=field(X,Y),m=Math.hypot(e[0],e[1])||1;X+=e[0]/m*h;Y+=e[1]/m*h;x.lineTo(X,Y);if(n==28&&k%3==0)mid=[X,Y];
if(Math.hypot(X-P[1][0],Y-P[1][1])<S*.025||X<-20||X>W+20||Y<-20||Y>H+20)break}
const rd=k%7==0;x.strokeStyle=rd?ac:ln;x.globalAlpha=rd?.6:.3;x.stroke();if(mid)nodes.push(mid)}
for(const m of nodes){const pxm=Math.max(0,1-Math.hypot(m[0]-px,m[1]-py)/(S*.25))*pr,r=2.2+pxm*2.6;x.fillStyle=ac;x.globalAlpha=.14+pxm*.3;x.beginPath();x.arc(m[0],m[1],r*3,0,7);x.fill();x.globalAlpha=.95;x.beginPath();x.arc(m[0],m[1],r,0,7);x.fill()}
x.globalAlpha=.9;x.fillStyle=ac;x.beginPath();x.arc(P[0][0],P[0][1],5,0,7);x.fill();
x.globalAlpha=.4;x.strokeStyle=ac;x.beginPath();x.arc(P[0][0],P[0][1],12,0,7);x.stroke();
x.globalAlpha=.7;x.strokeStyle=ln;x.beginPath();x.arc(P[1][0],P[1][1],5,0,7);x.stroke();
x.globalAlpha=1}
function loop(now){raf=0;if(!vis)return;const dt=Math.min(now-last||16,50);last=now;
if(!HV.matches){tx=W*.5+Math.cos(now/6500)*W*.22;ty=H*.5+Math.sin(now/8000)*H*.18;on=.35}
px+=(tx-px)*(1-Math.exp(-dt/110));py+=(ty-py)*(1-Math.exp(-dt/110));pr+=(on-pr)*(1-Math.exp(-dt/220));
frame(now);raf=requestAnimationFrame(loop)}
const go=()=>{if(!raf&&vis&&!RMq.matches){last=performance.now();raf=requestAnimationFrame(loop)}};
const io=new IntersectionObserver(e=>{vis=e[0].isIntersecting;if(vis)go();else{cancelAnimationFrame(raf);raf=0}});io.observe(box);
const ro=new ResizeObserver(()=>{fit();if(RMq.matches)frame(0)});ro.observe(box);
addEventListener('pointermove',mv,{passive:true});document.documentElement.addEventListener('mouseleave',lv);
fit();window.mfRedraw=RMq.matches?()=>frame(0):null;RMq.matches?frame(0):go();
window.mfStop=()=>{cancelAnimationFrame(raf);io.disconnect();ro.disconnect();removeEventListener('pointermove',mv);document.documentElement.removeEventListener('mouseleave',lv);window.mfRedraw=null;window.mfStop=null}}
col();
addEventListener('hashchange',render);render();
