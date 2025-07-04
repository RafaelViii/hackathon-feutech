// Chatbot Floating Action Button Logic
const fab = document.getElementById('chatbot-fab');
const container = document.getElementById('chatbot-container');
const closeBtn = document.getElementById('chatbot-close');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input');
const chatbotSend = document.getElementById('chatbot-send');

// Show chat window & hide FAB
fab.onclick = () => {
  container.classList.remove('collapsed');
  fab.style.display = 'none';
  setTimeout(() => chatbotInput.focus(), 350);
};
// Hide chat window & show FAB
closeBtn.onclick = () => {
  container.classList.add('collapsed');
  setTimeout(() => { fab.style.display = 'flex'; }, 290);
};
// Also collapse if user clicks outside chat (optional)
// window.onclick = (e) => { if (!container.contains(e.target) && !fab.contains(e.target)) { container.classList.add('collapsed'); fab.style.display = 'flex'; } }

// Animation: On hover, trigger the wave animation
fab.addEventListener('mouseenter', () => {
  fab.style.animation = 'chatbot-wave 0.9s';
});
fab.addEventListener('mouseleave', () => {
  fab.style.animation = '';
  setTimeout(() => { fab.style.animation = 'chatbot-bounce 2.8s infinite'; }, 900);
});

// Chat Logic (same as your existing)
function appendMessage(text, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.className = 'chatbot-message ' + sender;
  const bubble = document.createElement('div');
  bubble.className = 'chatbot-bubble';
  bubble.textContent = text;
  messageDiv.appendChild(bubble);
  chatbotMessages.appendChild(messageDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}
chatbotSend.onclick = async () => {
  const message = chatbotInput.value.trim();
  if (!message) return;
  appendMessage(message, 'user');
  chatbotInput.value = '';
  try {
    const res = await fetch('http://127.0.0.1:5000/chat', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({message})
    });
    const data = await res.json();
    appendMessage(data.response, 'bot');
  } catch (e) {
    appendMessage("Bot is not available.", "bot");
  }
};
chatbotInput.addEventListener("keypress", e => {
  if (e.key === "Enter") chatbotSend.onclick();
});

// Optional: Start minimized
container.classList.add('collapsed');
fab.style.display = 'flex';