(() => {
  'use strict';
  const script=document.currentScript;if(!script)return;
  const widgetId=script.dataset.tenant;
  const endpoint=script.dataset.endpoint;
  try{if(!widgetId||!endpoint||new URL(endpoint).protocol!=='https:')return;}catch{return;}
  const storageKey='support-session:'+widgetId;
  let sessionId;
  try {sessionId=sessionStorage.getItem(storageKey);if(!sessionId){sessionId=crypto.randomUUID();sessionStorage.setItem(storageKey,sessionId);}}catch{sessionId=crypto.randomUUID();}
  const host=document.createElement('div'),root=host.attachShadow({mode:'closed'});
  host.dataset.chatUrl = endpoint;
  root.innerHTML='<style>:host{position:fixed;bottom:calc(5vh + 52px + env(safe-area-inset-bottom));right:calc(max(1rem, 2vw) + env(safe-area-inset-right));z-index:99999;font:14px system-ui}[hidden]{display:none!important}button,input{font:inherit}header{display:flex;align-items:center;gap:10px;padding:4px 0 12px;border-bottom:1px solid #eee}header img{width:40px;height:40px;border-radius:50%;object-fit:cover}header strong{font-size:18px}header span{width:40px;height:40px;border-radius:50%;background:#eee;display:grid;place-items:center}button{cursor:pointer;padding:10px}section{width:min(340px,88vw);background:white;color:#222;border:1px solid #ccc;border-radius:12px;padding:12px;box-shadow:0 5px 25px #0002}ol{height:min(260px, max(60px, calc(85dvh - 270px)));overflow:auto;padding-left:20px}li{margin:12px 0;white-space:pre-wrap;overflow-wrap:anywhere}input{box-sizing:border-box;width:100%;padding:10px;margin:4px 0}form button{width:100%}.pending span{animation:reply-dot 1.2s ease-in-out infinite}.pending span:nth-child(2){animation-delay:.15s}.pending span:nth-child(3){animation-delay:.3s}@keyframes reply-dot{0%,60%,100%{opacity:.45}30%{opacity:1}}@media(prefers-reduced-motion:reduce){.pending span{animation:none}}</style><button type="button" aria-expanded="false">Chat with support</button><section hidden aria-label="Support chat"><header><img hidden alt=""><span aria-hidden="true">?</span><strong>Support assistant</strong></header><ol aria-live="polite"></ol><form><input name="message" aria-label="Your question" placeholder="Your question" maxlength="4000" required><input name="contact" aria-label="Optional callback contact" placeholder="Phone/email for follow-up (optional)" maxlength="200"><button>Send</button></form></section>';
  const toggle=root.querySelector('button'),panel=root.querySelector('section'),form=root.querySelector('form'),list=root.querySelector('ol'),send=form.querySelector('button');
  let profileReady=false,profileLoading=false;
  const name=root.querySelector('header strong'),avatar=root.querySelector('header img'),initial=root.querySelector('header span');
  function showProfile(p){name.textContent=p.botName||'Support assistant';initial.textContent=name.textContent.slice(0,1).toUpperCase();if(p.botAvatarUrl){try{const u=new URL(p.botAvatarUrl);if(u.protocol==='https:'&&!u.username&&!u.password){avatar.referrerPolicy='no-referrer';avatar.onload=()=>{avatar.hidden=false;initial.hidden=true;};avatar.onerror=()=>{avatar.hidden=true;initial.hidden=false;};avatar.src=u.href;}}catch{}}}
  showProfile({botName:script.dataset.botName,botAvatarUrl:script.dataset.botAvatarUrl});
  async function loadProfile(){if(profileReady||profileLoading||send.disabled)return;profileLoading=true;send.disabled=true;try{const r=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({widgetId,action:'profile'}),signal:AbortSignal.timeout(15000)});if(!r.ok)throw Error('Profile unavailable');const p=await r.json();showProfile(p);if(p.greeting)add(p.greeting);profileReady=true;}catch{/* Allow retry on next open; normal chat remains available. */}finally{profileLoading=false;send.disabled=false;}}
  toggle.onclick=()=>{panel.hidden=!panel.hidden;toggle.setAttribute('aria-expanded',String(!panel.hidden));if(!panel.hidden){loadProfile();form.elements.message.focus();}};
  function add(text) {
    const item = document.createElement('li');
    item.textContent = text;
    list.append(item);
    list.scrollTop = list.scrollHeight;
    return item;
  }

  form.onsubmit = async (event) => {
    event.preventDefault();
    const message = form.elements.message.value.trim();
    if (!message || send.disabled) return;

    send.disabled = true;
    add('You: ' + message);
    form.elements.message.value = '';
    const pending = add(document.documentElement.lang === 'ms' ? 'Bloomy sedang membalas' : 'Bloomy is replying');
    pending.className = 'pending';
    for (let index = 0; index < 3; index++) {
      const dot = document.createElement('span');
      dot.setAttribute('aria-hidden', 'true');
      dot.textContent = '.';
      pending.append(dot);
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ widgetId, sessionId, message, contact: form.elements.contact.value.trim() }),
        signal: AbortSignal.timeout(120000)
      });
      const data = await response.json();
      if (!response.ok) throw Error(data.error || 'Please try again shortly.');
      add(data.reply || 'Support is unavailable.');
    } catch {
      add('Unable to connect. Please try again or use the company’s support contact.');
    } finally {
      pending.remove();
      send.disabled = false;
    }
  };

  document.body.append(host);
})();
