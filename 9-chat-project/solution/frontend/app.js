// Handles sending messages to backend and updating the UI

(function () {
    const messagesEl = document.getElementById('messages');
    const form = document.getElementById('composer');
    const input = document.getElementById('input');
    const sendBtn = document.getElementById('send');
    
    const BASE_URL = "http://127.0.0.1:5000/"; 
    const API_ENDPOINT = `${BASE_URL}/hello`; 

    // Dynamic Send Button Logic: Enable/Disable based on input text
    input.addEventListener('input', () => {
        sendBtn.disabled = input.value.trim().length === 0;
    });

    // --- CHAT FUNCTIONS ---
    function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '>').replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function formatText(text) {
        return escapeHtml(text).replace(/\n/g, '<br>');
    }

    function scrollToBottom() {
        messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    // Message control handlers (Copy/Delete)
    function handleDelete(messageEl) {
        if (messageEl) {
            messageEl.remove();
        }
    }

    function handleCopy(text) {
        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = text.replace(/<br>/g, '\n'); 
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        try {
            document.execCommand('copy');
        } catch (err) {
            console.error('Could not copy text: ', err);
        }
        document.body.removeChild(tempTextArea);
    }

    function appendMessage(role, text) {
        const el = document.createElement('div');
        el.className = 'message ' + role;
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'content';
        const formattedText = formatText(text);
        contentDiv.innerHTML = formattedText;

        const smallEl = document.createElement('small');
        smallEl.textContent = new Date().toLocaleTimeString();

        el.appendChild(contentDiv);
        el.appendChild(smallEl);
        
        // Add Controls (AI messages get copy/delete)
        if (role === 'ai') {
            const controls = document.createElement('div');
            controls.className = 'controls';

            const copyBtn = document.createElement('button');
            copyBtn.innerHTML = '<i class="fas fa-copy"></i>';
            copyBtn.title = 'Copy message content';
            copyBtn.onclick = () => handleCopy(text); 

            const deleteBtn = document.createElement('button');
            deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
            deleteBtn.title = 'Delete message';
            deleteBtn.onclick = () => handleDelete(el);

            controls.appendChild(copyBtn);
            controls.appendChild(deleteBtn);
            el.appendChild(controls);
        }

        messagesEl.appendChild(el);
        scrollToBottom();
        return el;
    }

    function createTyping() {
        const el = document.createElement('div');
        el.className = 'message ai';
        const typing = document.createElement('div');
        typing.className = 'typing';
        for (let i = 0; i < 3; i++) { const d = document.createElement('span'); d.className = 'dot'; typing.appendChild(d); }
        el.appendChild(typing);
        messagesEl.appendChild(el);
        scrollToBottom();
        return el;
    }

    async function sendToApi(text) {
        const res = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: text })
        });
        if (!res.ok) throw new Error('Network response was not ok');
        let json = await res.json();
        return json.response;
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const text = input.value.trim();
        if (!text) return;
        appendMessage('user', text);
        input.value = '';
        sendBtn.disabled = true; 
        input.focus();

        const typingEl = createTyping();
        try {
            const reply = await sendToApi(text);
            typingEl.remove();
            appendMessage('ai', reply || '(no response)');
        } catch (err) {
            typingEl.remove();
            // Display exact error message: "Error: Failed to fetch"
            appendMessage('ai', 'Error: '+err.message);
            console.error(err);
        } finally {
            sendBtn.disabled = input.value.trim().length === 0; 
        }
    });

    // Enter to send, Shift+Enter for newline
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            form.dispatchEvent(new Event('submit', { cancelable: true }));
        }
    });

    // Small welcome message
    appendMessage('ai', 'Hello! I\'m your AI assistant. Ask me anything.');
})();