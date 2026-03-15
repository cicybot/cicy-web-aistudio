/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Github, 
  Twitter, 
  Disc as Discord, 
  ChevronRight, 
  Mic, 
  Zap, 
  MousePointer2,
  Check,
  X,
  Globe,
  Copy
} from 'lucide-react';

const TypingAnimation = () => {
  const [text, setText] = useState('');
  const fullText = "帮我做一个能看比特币价格的工具";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[index]);
        setIndex(prev => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText('');
        setIndex(0);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <span className="text-emerald-400 font-mono border-r-2 border-emerald-400 pr-1">
      {text}
    </span>
  );
};

const Navbar = ({ lang, setLang }: { lang: 'en' | 'zh', setLang: (l: 'en' | 'zh') => void }) => (
  <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
          <span className="text-black font-bold text-xl">C</span>
        </div>
        <span className="font-bold text-xl tracking-tight">CiCy</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
        <a href="#how-it-works" className="hover:text-white transition-colors">
          {lang === 'en' ? 'How it works' : '工作原理'}
        </a>
        <a href="#comparison" className="hover:text-white transition-colors">
          {lang === 'en' ? 'Comparison' : '对比'}
        </a>
        <a href="#pricing" className="hover:text-white transition-colors">
          {lang === 'en' ? 'Pricing' : '价格'}
        </a>
        <a href="#stories" className="hover:text-white transition-colors">
          {lang === 'en' ? 'Stories' : '用户故事'}
        </a>
        <a href="#get-started" className="hover:text-white transition-colors">
          {lang === 'en' ? 'Get Started' : '开始使用'}
        </a>
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
          className="flex items-center gap-1 text-sm text-white/60 hover:text-white transition-colors"
        >
          <Globe size={16} />
          {lang === 'en' ? '中文' : 'EN'}
        </button>
        <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/90 transition-colors">
          {lang === 'en' ? 'Join Waitlist' : '加入候补'}
        </button>
      </div>
    </div>
  </nav>
);

const Hero = ({ lang }: { lang: 'en' | 'zh' }) => (
  <section className="relative pt-32 pb-20 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6">
          {lang === 'en' ? 'You speak.' : '你说话。'} <br />
          <span className="text-white/40">{lang === 'en' ? 'AI creates.' : 'AI 创造。'}</span>
        </h1>
        
        <div className="max-w-2xl mx-auto mb-12 p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
          <div className="flex items-center gap-3 text-white/60 mb-2 text-sm">
            <Mic size={16} />
            <span>{lang === 'en' ? 'Voice Input' : '语音输入'}</span>
          </div>
          <div className="text-xl md:text-2xl min-h-[1.5em] flex items-center justify-center">
            <TypingAnimation />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <a 
            href="#get-started"
            className="w-full md:w-auto bg-white text-black px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform inline-block"
          >
            {lang === 'en' ? 'Start Building' : '开始构建'}
          </a>
          <button className="w-full md:w-auto bg-white/5 border border-white/10 px-8 py-4 rounded-full text-lg font-bold hover:bg-white/10 transition-colors">
            {lang === 'en' ? 'Watch Demo' : '观看演示'}
          </button>
        </div>
      </motion.div>

      {/* Desktop Mockup */}
      <motion.div 
        className="mt-20 relative max-w-5xl mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <div className="aspect-video rounded-3xl bg-gradient-to-br from-white/10 to-transparent border border-white/20 p-4 shadow-2xl relative overflow-hidden">
          <div className="w-full h-full rounded-2xl bg-black/40 backdrop-blur-md flex items-center justify-center relative">
            <div className="grid grid-cols-4 gap-8">
              {[
                { icon: '🎵', label: 'Music', delay: 'animate-float' },
                { icon: '📹', label: 'Video', delay: 'animate-float-delayed' },
                { icon: '✨', label: 'AI', delay: 'animate-float-slow' },
                { icon: '💻', label: 'Code', delay: 'animate-float' },
              ].map((item, i) => (
                <div key={i} className={`flex flex-col items-center gap-2 ${item.delay}`}>
                  <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-3xl shadow-lg backdrop-blur-xl">
                    {item.icon}
                  </div>
                  <span className="text-xs font-medium text-white/60">{item.label}</span>
                </div>
              ))}
            </div>
            
            {/* Floating UI elements */}
            <div className="absolute top-10 left-10 p-3 rounded-xl bg-white/5 border border-white/10 text-[10px] text-white/40 font-mono">
              system.booting... <br />
              ai_engine.ready()
            </div>
            <div className="absolute bottom-10 right-10 p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs">
              {lang === 'en' ? 'App Created ✨' : '应用已创建 ✨'}
            </div>
          </div>
        </div>
        
        {/* Glow effects */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-emerald-500/20 blur-[120px] rounded-full" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-500/20 blur-[120px] rounded-full" />
      </motion.div>
    </div>
  </section>
);

const HowItWorks = ({ lang }: { lang: 'en' | 'zh' }) => {
  const steps = [
    {
      icon: <Mic className="w-8 h-8 text-emerald-400" />,
      title: lang === 'en' ? 'Speak' : '说话',
      desc: lang === 'en' ? 'Describe your idea in natural language.' : '用自然语言描述你的想法。'
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-400" />,
      title: lang === 'en' ? 'AI Creates' : 'AI 创造',
      desc: lang === 'en' ? 'CiCy builds the full application in seconds.' : 'CiCy 在几秒钟内构建完整的应用程序。'
    },
    {
      icon: <MousePointer2 className="w-8 h-8 text-purple-400" />,
      title: lang === 'en' ? 'Click to Use' : '点击使用',
      desc: lang === 'en' ? 'Your custom tool is ready to go instantly.' : '您的自定义工具已准备就绪。'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{lang === 'en' ? 'How it works' : '工作原理'}</h2>
          <p className="text-white/60 max-w-xl mx-auto">
            {lang === 'en' ? 'The simplest way to bring your ideas to life. No coding required.' : '将您的想法变为现实的最简单方法。无需编码。'}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Comparison = ({ lang }: { lang: 'en' | 'zh' }) => {
  const features = [
    { 
      label: lang === 'en' ? 'Time to Build' : '构建时间', 
      trad: lang === 'en' ? 'Weeks/Months' : '数周/数月', 
      cicy: lang === 'en' ? '30 Seconds' : '30 秒' 
    },
    { 
      label: lang === 'en' ? 'Skill Required' : '所需技能', 
      trad: lang === 'en' ? 'Coding/Engineering' : '编程/工程', 
      cicy: lang === 'en' ? 'Natural Language Interface' : '自然语言交互' 
    },
    { 
      label: lang === 'en' ? 'Cost' : '成本', 
      trad: lang === 'en' ? 'High Capital Expense' : '高昂的资本支出', 
      cicy: lang === 'en' ? 'Fractional Cost' : '极低成本' 
    },
    { 
      label: lang === 'en' ? 'Maintenance' : '维护', 
      trad: lang === 'en' ? 'Manual Updates' : '手动更新', 
      cicy: lang === 'en' ? 'Autonomous Self-healing' : '自主自愈' 
    },
    { 
      label: lang === 'en' ? 'Scalability' : '扩展性', 
      trad: lang === 'en' ? 'Manual Setup' : '手动配置', 
      cicy: lang === 'en' ? 'Instant Auto-scale' : '瞬间自动扩展' 
    },
  ];

  return (
    <section id="comparison" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            {lang === 'en' ? 'Traditional vs CiCy' : '传统方式 vs CiCy'}
          </h2>
        </div>

        <div className="rounded-[2rem] border border-white/10 overflow-hidden bg-[#0a0a0a] shadow-2xl">
          {/* Desktop View */}
          <table className="w-full text-left border-collapse hidden md:table">
            <thead>
              <tr className="border-b border-white/10 bg-white/[0.02]">
                <th className="p-8 text-white/40 font-medium text-lg w-1/3">{lang === 'en' ? 'Feature' : '特性'}</th>
                <th className="p-8 font-bold text-lg w-1/3 text-white">{lang === 'en' ? 'Traditional' : '传统方式'}</th>
                <th className="p-8 font-bold text-lg w-1/3 text-emerald-400">{lang === 'en' ? 'CiCy' : 'CiCy'}</th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, i) => (
                <tr key={i} className="border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                  <td className="p-8 text-white/60 text-lg">{row.label}</td>
                  <td className="p-8">
                    <div className="flex items-center gap-3 text-white/90 font-medium">
                      <X size={20} className="text-red-500 shrink-0" />
                      <span>{row.trad}</span>
                    </div>
                  </td>
                  <td className="p-8">
                    <div className="flex items-center gap-3 text-emerald-400 font-medium">
                      <Check size={20} className="shrink-0" />
                      <span>{row.cicy}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile View */}
          <div className="md:hidden flex flex-col">
            <div className="flex justify-between p-6 border-b border-white/10 bg-white/[0.02]">
              <span className="font-bold text-white">{lang === 'en' ? 'Traditional' : '传统方式'}</span>
              <span className="font-bold text-emerald-400">{lang === 'en' ? 'CiCy' : 'CiCy'}</span>
            </div>
            {features.map((row, i) => (
              <div key={i} className="p-6 border-b border-white/5 last:border-0">
                <div className="text-white/40 text-sm mb-4">{row.label}</div>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-white/90 font-medium">
                    <X size={18} className="text-red-500 shrink-0" />
                    <span>{row.trad}</span>
                  </div>
                  <div className="flex items-center gap-3 text-emerald-400 font-medium">
                    <Check size={18} className="shrink-0" />
                    <span>{row.cicy}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = ({ lang }: { lang: 'en' | 'zh' }) => {
  const tiers = [
    {
      name: 'Free',
      price: '$0',
      period: '',
      desc: lang === 'en' ? 'Perfect for trying out CiCy.' : '适合体验 CiCy。',
      cta: lang === 'en' ? 'Get Started' : '免费开始',
      features: [
        lang === 'en' ? '3 desktop apps' : '3 个桌面应用',
        lang === 'en' ? '5 plugin connections' : '5 个插件连接',
        lang === 'en' ? '50 AI calls/day' : '每天 50 次 AI 调用',
        lang === 'en' ? 'Community support' : '社区支持'
      ]
    },
    {
      name: 'Pro',
      price: '$9.9',
      period: lang === 'en' ? '/month' : '/月',
      desc: lang === 'en' ? 'For power users and creators.' : '适合重度用户和创作者。',
      popular: true,
      cta: lang === 'en' ? 'Subscribe' : '立即订阅',
      features: [
        lang === 'en' ? 'Unlimited apps' : '无限桌面应用',
        lang === 'en' ? 'Unlimited plugins' : '无限插件连接',
        lang === 'en' ? '500 AI calls/day' : '每天 500 次 AI 调用',
        lang === 'en' ? 'Priority response' : '优先响应支持',
        lang === 'en' ? 'Electron desktop app' : 'Electron 桌面端应用'
      ]
    },
    {
      name: 'Team',
      price: '$29.9',
      period: lang === 'en' ? '/month per seat' : '/月/席位',
      desc: lang === 'en' ? 'For teams building together.' : '适合团队协作构建。',
      cta: lang === 'en' ? 'Subscribe' : '立即订阅',
      features: [
        lang === 'en' ? 'Everything in Pro' : '包含 Pro 版所有功能',
        lang === 'en' ? 'Team collaboration' : '团队协作',
        lang === 'en' ? 'Admin dashboard' : '管理员控制台',
        lang === 'en' ? 'SSO/LDAP' : 'SSO/LDAP 单点登录',
        lang === 'en' ? 'Unlimited AI calls' : '无限 AI 调用'
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            {lang === 'en' ? 'Simple, transparent pricing' : '简单透明的定价'}
          </h2>
          <p className="text-xl text-white/60">
            {lang === 'en' ? 'Choose the plan that works best for you.' : '选择最适合您的方案。'}
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, i) => (
            <div 
              key={i} 
              className={`relative p-8 rounded-[2rem] bg-white/5 backdrop-blur-xl flex flex-col transition-transform hover:-translate-y-2 ${
                tier.popular 
                  ? 'border-2 border-emerald-500 shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)]' 
                  : 'border border-white/10'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  {lang === 'en' ? 'Most Popular' : '最受欢迎'}
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-medium text-white/80 mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold">{tier.price}</span>
                  <span className="text-white/40 font-medium">{tier.period}</span>
                </div>
                <p className="text-white/60 text-sm mt-4">{tier.desc}</p>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feat, j) => (
                  <li key={j} className="flex items-start gap-3 text-white/90">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-emerald-400" />
                    </div>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                  tier.popular 
                    ? 'bg-emerald-500 text-black hover:bg-emerald-400 hover:scale-[1.02]' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TerminalAnimation = ({ lang }: { lang: 'en' | 'zh' }) => {
  const [text, setText] = useState('');
  const [showResult, setShowResult] = useState(false);
  const command = "npx cicy";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(command.slice(0, i));
      i++;
      if (i > command.length) {
        clearInterval(interval);
        setTimeout(() => setShowResult(true), 500);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto bg-[#1a1a1a] rounded-xl border border-white/10 overflow-hidden shadow-2xl font-mono text-sm md:text-base">
      <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <div className="text-white/20 text-xs ml-2">bash — 80x24</div>
      </div>
      <div className="p-6 text-left min-h-[160px]">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-emerald-500">~</span>
          <span className="text-white">{text}</span>
          {!showResult && <span className="w-2 h-5 bg-white/50 animate-pulse" />}
        </div>
        <AnimatePresence>
          {showResult && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-emerald-400 mt-4 space-y-1"
            >
              <p>✨ CiCy is ready! Opening browser...</p>
              <p className="text-white/40">Local: http://localhost:3000</p>
              <p className="text-white/40">Network: http://192.168.1.5:3000</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const GetStartedSection = ({ lang }: { lang: 'en' | 'zh' }) => {
  const [copied, setCopied] = useState(false);
  const command = "npx cicy";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="get-started" className="py-32 relative overflow-hidden bg-gradient-to-b from-black via-emerald-950/10 to-black">
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            {lang === 'en' ? 'Get Started' : '开始使用'}
          </h2>
          <p className="text-xl md:text-2xl text-white/60 mb-12">
            {lang === 'en' ? 'One command to bring CiCy to your desktop' : '输入一行命令，CiCy 就会出现在你的桌面上'}
          </p>

          <div className="relative group max-w-xl mx-auto mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative flex items-center justify-between bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-8 py-6 font-mono text-xl md:text-2xl">
              <div className="flex items-center gap-4">
                <span className="text-emerald-500">$</span>
                <span className="text-white">{command}</span>
              </div>
              <button 
                onClick={handleCopy}
                className="relative p-3 hover:bg-white/5 rounded-xl transition-colors text-white/40 hover:text-white"
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.div
                      key="copied"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex items-center gap-2 text-emerald-400 text-sm font-sans absolute right-0 -top-8 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20"
                    >
                      <Check size={14} />
                      {lang === 'en' ? 'Copied!' : '已复制!'}
                    </motion.div>
                  ) : null}
                </AnimatePresence>
                <Copy size={24} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {[
              { en: 'No download needed', zh: '无需下载' },
              { en: 'No account needed', zh: '无需注册' },
              { en: 'Works on Mac', zh: '支持 macOS' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-3 text-lg">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                  <Check size={14} className="text-emerald-400" />
                </div>
                <span className="whitespace-nowrap font-medium text-white/90">{lang === 'en' ? item.en : item.zh}</span>
              </div>
            ))}
          </div>

          <p className="text-white/40 text-sm mb-20">
            {lang === 'en' 
              ? 'Requires Node.js 18+. Install from nodejs.org' 
              : '需要 Node.js 18+。从 nodejs.org 安装'}
          </p>

          <TerminalAnimation lang={lang} />
        </motion.div>
      </div>
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-emerald-500/5 blur-[120px] rounded-full -z-10" />
    </section>
  );
};

const UserStory = ({ lang }: { lang: 'en' | 'zh' }) => (
  <section id="stories" className="py-24 bg-emerald-500/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-square rounded-3xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-white/10 p-8 flex flex-col justify-center">
            <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 mb-6">
              <p className="text-lg italic text-white/90 leading-relaxed">
                "{lang === 'en' 
                  ? "CiCy, help me build a singing practice tool for my shy daughter. She loves pop music but is afraid to sing in front of others." 
                  : "CiCy，帮我为我害羞的女儿做一个练歌工具。她喜欢流行音乐，但不敢在别人面前唱歌。"}"
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20" />
                <div>
                  <p className="font-bold text-sm">David Chen</p>
                  <p className="text-xs text-white/40">{lang === 'en' ? 'Father & Designer' : '父亲 & 设计师'}</p>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="h-1 w-12 bg-emerald-500 rounded-full" />
              <div className="h-1 w-4 bg-white/10 rounded-full" />
              <div className="h-1 w-4 bg-white/10 rounded-full" />
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {lang === 'en' ? 'Technology with a heart.' : '有温度的技术。'}
          </h2>
          <p className="text-white/60 text-lg mb-8 leading-relaxed">
            {lang === 'en' 
              ? "David used CiCy to build a custom karaoke app with real-time feedback and privacy modes in under a minute. His daughter now practices every day, building her confidence one song at a time."
              : "David 使用 CiCy 在不到一分钟的时间内构建了一个具有实时反馈和隐私模式的自定义卡拉 OK 应用程序。他的女儿现在每天都在练习，一首歌接一首歌地建立自信。"}
          </p>
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
              <Check className="text-emerald-400" />
            </div>
            <div>
              <p className="font-bold">{lang === 'en' ? 'Built in 45s' : '45秒内构建'}</p>
              <p className="text-sm text-white/40">{lang === 'en' ? 'No code, just love.' : '没有代码，只有爱。'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Waitlist = ({ lang }: { lang: 'en' | 'zh' }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
          {lang === 'en' ? 'The future is listening.' : '未来正在倾听。'}
        </h2>
        <p className="text-white/60 text-lg mb-12">
          {lang === 'en' ? 'Join 50,000+ early adopters building the future with CiCy.' : '加入 50,000 多名早期采用者的行列，与 CiCy 一起构建未来。'}
        </p>
        
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto"
            >
              <input 
                type="email" 
                placeholder={lang === 'en' ? 'Enter your email' : '输入您的邮箱'}
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 outline-none focus:border-white/30 transition-colors"
              />
              <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-white/90 transition-colors">
                {lang === 'en' ? 'Get Early Access' : '获取早期访问权限'}
              </button>
            </motion.form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
            >
              <Check className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{lang === 'en' ? "You're on the list!" : '您已加入候补名单！'}</h3>
              <p>{lang === 'en' ? "We'll notify you as soon as a spot opens up." : '一旦有空位，我们会立即通知您。'}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-3xl -z-10" />
    </section>
  );
};

const Footer = ({ lang }: { lang: 'en' | 'zh' }) => (
  <footer className="py-12 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
            <span className="text-black font-bold text-sm">C</span>
          </div>
          <span className="font-bold text-lg tracking-tight">CiCy</span>
        </div>
        
        <div className="flex items-center gap-8 text-white/40">
          <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
          <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
          <a href="#" className="hover:text-white transition-colors"><Discord size={20} /></a>
        </div>
        
        <p className="text-sm text-white/20">
          © 2026 CiCy AI. {lang === 'en' ? 'All rights reserved.' : '版权所有。'}
        </p>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [lang, setLang] = useState<'en' | 'zh'>('en');

  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500/30">
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <HowItWorks lang={lang} />
      <Comparison lang={lang} />
      <Pricing lang={lang} />
      <UserStory lang={lang} />
      <GetStartedSection lang={lang} />
      <Waitlist lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
