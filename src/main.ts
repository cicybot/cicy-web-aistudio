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

// Pricing Toggle
const toggleMonthly = document.getElementById('toggle-monthly');
const toggleYearly = document.getElementById('toggle-yearly');
const toggleBg = document.getElementById('toggle-bg');
const priceValues = document.querySelectorAll('.price-value');
const pricePeriods = document.querySelectorAll('.price-period');
const yearlyBadges = document.querySelectorAll('.yearly-badge');

if (toggleMonthly && toggleYearly && toggleBg) {
  toggleMonthly.addEventListener('click', () => {
    toggleMonthly.classList.replace('text-white/60', 'text-white');
    toggleYearly.classList.replace('text-white', 'text-white/60');
    toggleBg.style.transform = 'translateX(0)';
    toggleBg.style.width = '100px';
    
    priceValues.forEach(el => {
      el.textContent = el.getAttribute('data-monthly');
    });
    pricePeriods.forEach(el => {
      if (el.classList.contains('en')) {
        el.textContent = el.textContent?.includes('seat') ? '/month per seat' : '/month';
      } else {
        el.textContent = el.textContent?.includes('席位') ? '/月/席位' : '/月';
      }
    });
    yearlyBadges.forEach(el => el.classList.add('hidden'));
  });

  toggleYearly.addEventListener('click', () => {
    toggleYearly.classList.replace('text-white/60', 'text-white');
    toggleMonthly.classList.replace('text-white', 'text-white/60');
    toggleBg.style.transform = 'translateX(100px)'; 
    toggleBg.style.width = '140px';
    
    priceValues.forEach(el => {
      el.textContent = el.getAttribute('data-yearly');
    });
    pricePeriods.forEach(el => {
      if (el.classList.contains('en')) {
        el.textContent = el.textContent?.includes('seat') ? '/year per seat' : '/year';
      } else {
        el.textContent = el.textContent?.includes('席位') ? '/年/席位' : '/年';
      }
    });
    yearlyBadges.forEach(el => el.classList.remove('hidden'));
  });
}

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
