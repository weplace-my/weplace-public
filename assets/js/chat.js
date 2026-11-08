(() => {
  const chat = document.querySelector('[data-chat-url]');
  if (!chat) return;

  const launcher = chat.querySelector('.weplace-chat__launcher');
  const panel = chat.querySelector('.weplace-chat__panel');
  const heading = panel.querySelector('h2');
  const messages = panel.querySelector('.weplace-chat__messages');
  const pending = panel.querySelector('[data-i18n="chat.pending"]');
  const error = panel.querySelector('[data-i18n="chat.error"]');
  const form = panel.querySelector('form');
  const input = form.querySelector('input');
  const send = form.querySelector('button');
  let sessionId;

  const scrollToLatest = () => {
    messages.scrollTop = messages.scrollHeight;
  };

  const setOpen = (open) => {
    launcher.setAttribute('aria-expanded', String(open));
    panel.hidden = !open;
    if (open) {
      heading.focus();
      scrollToLatest();
    } else {
      launcher.focus();
    }
  };

  const addMessage = (text, fromVisitor = false) => {
    const message = document.createElement('p');
    message.className = 'weplace-chat__message';
    if (fromVisitor) message.classList.add('weplace-chat__message--visitor');
    message.textContent = text;
    messages.append(message);
    scrollToLatest();
    return message;
  };

  launcher.addEventListener('click', () => setOpen(panel.hidden));
  panel.querySelector('.weplace-chat__close').addEventListener('click', () => setOpen(false));
  chat.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !panel.hidden) {
      event.preventDefault();
      setOpen(false);
    }
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const chatInput = input.value.trim();
    if (!chatInput || send.disabled) return;

    send.disabled = true;
    input.readOnly = true;
    input.value = '';
    error.hidden = true;
    pending.hidden = false;
    const message = addMessage(chatInput, true);

    try {
      sessionId ??= crypto.randomUUID();
      const response = await fetch(chat.dataset.chatUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'sendMessage', sessionId, chatInput }),
        signal: AbortSignal.timeout(60000)
      });
      if (!response.ok) throw new Error('Chat request failed');

      const result = await response.json();
      const data = Array.isArray(result) ? result[0] : result;
      const reply = typeof data === 'string' ? data : data?.output ?? data?.text;
      if (typeof reply !== 'string' || !reply.trim()) throw new Error('Empty chat reply');

      addMessage(reply);
    } catch {
      message.remove();
      input.value = chatInput;
      error.hidden = false;
    } finally {
      pending.hidden = true;
      input.readOnly = false;
      send.disabled = false;
      scrollToLatest();
    }
  });

  chat.hidden = false;
})();
