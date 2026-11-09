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
  root.innerHTML='<style>:host{position:fixed;bottom:calc(5vh + 52px + env(safe-area-inset-bottom));right:calc(max(1rem, 2vw) + env(safe-area-inset-right));z-index:99999;font:14px system-ui;display:flex;flex-direction:column;align-items:flex-end;gap:12px}[hidden]{display:none!important}button,input{font:inherit}header{display:flex;align-items:center;gap:10px;padding:4px 0 12px;border-bottom:1px solid #eee}header img{width:40px;height:40px;border-radius:50%;object-fit:cover}header strong{font-size:18px}header span{width:40px;height:40px;border-radius:50%;background:#eee;display:grid;place-items:center}button{cursor:pointer;padding:10px}.launcher{order:2;width:48px;height:48px;flex-shrink:0;border-radius:50%;padding:0;border:2px solid white;background:#7346a3;color:white;box-shadow:0 4px 18px #0003;overflow:hidden;display:grid;place-items:center;font-size:20px;font-weight:600}.launcher img{width:100%;height:100%;object-fit:cover;display:block}.launcher:focus-visible{outline:3px solid #7346a3;outline-offset:4px}.launcher:hover{box-shadow:0 6px 22px #0004}section{order:1;box-sizing:border-box;width:min(366px,88vw);background:white;color:#222;border:1px solid #ccc;border-radius:12px;padding:12px;box-shadow:0 5px 25px #0002}ol{height:min(260px, max(60px, calc(85dvh - 270px)));overflow:auto;display:flex;flex-direction:column;gap:8px;margin:12px 0;padding:0;list-style:none}li{box-sizing:border-box;align-self:flex-start;flex-shrink:0;max-width:85%;padding:8px 12px;border-radius:14px 14px 14px 4px;background:#f0eaf7;color:#322344;white-space:pre-wrap;overflow-wrap:anywhere}li.visitor{align-self:flex-end;border-radius:14px 14px 4px 14px;background:#daf4e5;color:#123b35}input{box-sizing:border-box;width:100%;padding:10px;margin:4px 0}form{display:flex;align-items:center;gap:8px;margin-top:10px}form input{flex:1;min-width:0;margin:0;border:1px solid #ccc;border-radius:24px;padding:12px 14px}form button{display:grid;place-items:center;flex:0 0 44px;width:44px;height:44px;padding:0;border:0;border-radius:50%;background:#7346a3;color:white}form button:disabled{opacity:.5;cursor:wait}form button:focus-visible{outline:3px solid #7346a3;outline-offset:3px}form button svg{width:21px;height:21px}.pending span{animation:reply-dot 1.2s ease-in-out infinite}.pending span:nth-child(2){animation-delay:.15s}.pending span:nth-child(3){animation-delay:.3s}@keyframes reply-dot{0%,60%,100%{opacity:.45}30%{opacity:1}}@media(prefers-reduced-motion:reduce){.pending span{animation:none}}</style><button class="launcher" type="button" aria-label="Chat with support" title="Chat with support" aria-expanded="false"><img hidden alt=""><span aria-hidden="true">?</span></button><section hidden aria-label="Support chat"><header><img hidden alt=""><span aria-hidden="true">?</span><strong>Support assistant</strong></header><ol role="list" aria-live="polite"></ol><form><input name="message" aria-label="Your question" placeholder="Your question" maxlength="4000" required><button type="submit" aria-label="Send message" title="Send message"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg></button></form></section>';
  const toggle=root.querySelector('button'),panel=root.querySelector('section'),form=root.querySelector('form'),list=root.querySelector('ol'),send=form.querySelector('button');
  let profileReady=false,profileLoading=false;
  const name = root.querySelector('header strong');
  const avatar = root.querySelector('header img');
  const initial = root.querySelector('header span');
  const launcherAvatar = toggle.querySelector('img');
  const launcherInitial = toggle.querySelector('span');

  function showProfile(profile) {
    name.textContent = profile.botName || 'Support assistant';
    const letter = name.textContent.slice(0, 1).toUpperCase();
    initial.textContent = letter;
    launcherInitial.textContent = letter;
    toggle.title = 'Chat with ' + name.textContent;
    toggle.setAttribute('aria-label', toggle.title);
    if (!profile.botAvatarUrl) return;

    let url;
    try {
      url = new URL(profile.botAvatarUrl);
    } catch {
      return;
    }
    if (url.protocol !== 'https:' || url.username || url.password) return;

    for (const [image, fallback] of [[avatar, initial], [launcherAvatar, launcherInitial]]) {
      image.referrerPolicy = 'no-referrer';
      image.onload = () => {
        image.hidden = false;
        fallback.hidden = true;
      };
      image.onerror = () => {
        image.hidden = true;
        fallback.hidden = false;
      };
      image.src = url.href;
    }
  }

  showProfile({botName:script.dataset.botName,botAvatarUrl:script.dataset.botAvatarUrl});
  async function loadProfile(){if(profileReady||profileLoading||send.disabled)return;profileLoading=true;send.disabled=true;try{const r=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({widgetId,action:'profile'}),signal:AbortSignal.timeout(15000)});if(!r.ok)throw Error('Profile unavailable');const p=await r.json();showProfile(p);if(p.greeting)add(p.greeting);profileReady=true;}catch{/* Allow retry on next open; normal chat remains available. */}finally{profileLoading=false;send.disabled=false;}}
  toggle.onclick=()=>{panel.hidden=!panel.hidden;toggle.setAttribute('aria-expanded',String(!panel.hidden));if(!panel.hidden){loadProfile();form.elements.message.focus();}};
  function add(text, fromVisitor = false) {
    const item = document.createElement('li');
    if (fromVisitor) item.classList.add('visitor');
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
    add('You: ' + message, true);
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
        body: JSON.stringify({ widgetId, sessionId, message }),
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
  loadProfile();
})();
