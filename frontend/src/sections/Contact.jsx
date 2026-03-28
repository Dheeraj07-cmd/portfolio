import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  return (
    <section id="contact" className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="max-w-2xl mx-auto px-6 relative z-10 text-center">
        <p className="text-cyan-400 font-mono mb-4">What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
        <p className="text-slate-400 mb-12 leading-relaxed">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left max-w-xl mx-auto p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-mono text-slate-400">Name</label>
            <input 
              id="name"
              required
              type="text" 
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
              className="bg-slate-900/50 border border-white/10 rounded-lg p-3 text-slate-200 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-mono text-slate-400">Email</label>
            <input 
              id="email"
              required
              type="email" 
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
              className="bg-slate-900/50 border border-white/10 rounded-lg p-3 text-slate-200 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
            />
          </div>
          
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-mono text-slate-400">Message</label>
            <textarea 
              id="message"
              required
              rows="5"
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
              className="bg-slate-900/50 border border-white/10 rounded-lg p-3 text-slate-200 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={status === 'loading'}
            className="w-full py-4 mt-4 bg-cyan-500/10 border border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all font-bold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent Successfully!' : 'Send Message'}
          </button>
          
          {status === 'error' && (
             <p className="text-red-400 text-center mt-2 text-sm font-mono">Failed to send. Is the backend running?</p>
          )}
        </form>
      </div>
    </section>
  );
}