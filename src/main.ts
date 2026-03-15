import { createIcons, Github, Twitter, Disc, ChevronRight, Mic, Zap, MousePointer2, Check, X, Globe, Copy } from 'lucide';

// Initialize icons
createIcons({
  icons: { Github, Twitter, Disc, ChevronRight, Mic, Zap, MousePointer2, Check, X, Globe, Copy }
});

// Language Toggle
const langToggleBtn = document.getElementById('lang-toggle');
langToggleBtn?.addEventListener('click', () => {
  const currentLang = document.documentElement.lang;
  document.documentElement.lang = currentLang === 'en' ? 'zh' : 'en';
});

// Typing Animation
const typingEl = document.getElementById('typing-text');
if (typingEl) {
  const fullText = "帮我做一个能看比特币价格的工具";
  let index = 0;
  
  const type = () => {
    if (index < fullText.length) {
      typingEl.textContent += fullText[index];
      index++;
      setTimeout(type, 150);
    } else {
      setTimeout(() => {
        typingEl.textContent = '';
        index = 0;
        type();
      }, 3000);
    }
  };
  type();
}

// Terminal Animation
const terminalText = document.getElementById('terminal-text');
const terminalResult = document.getElementById('terminal-result');
if (terminalText && terminalResult) {
  const fullText = "Create a weather dashboard...";
  let index = 0;
  
  const type = () => {
    if (index < fullText.length) {
      terminalText.textContent += fullText[index];
      index++;
      setTimeout(type, 100);
    } else {
      setTimeout(() => {
        terminalResult.classList.remove('hidden');
        terminalResult.classList.add('flex');
      }, 500);
      
      setTimeout(() => {
        terminalText.textContent = '';
        terminalResult.classList.add('hidden');
        terminalResult.classList.remove('flex');
        index = 0;
        type();
      }, 4000);
    }
  };
  type();
}
