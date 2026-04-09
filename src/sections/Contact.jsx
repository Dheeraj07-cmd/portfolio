import { useState, useRef } from 'react';
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import HCaptcha from '@hcaptcha/react-hcaptcha';

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [captchaToken, setCaptchaToken] = useState("");
  const captchaRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!captchaToken) {
      alert("Please complete the hCaptcha verification.");
      return;
    }

    setStatus('loading');

    const formData = new FormData(e.target);

    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);
    formData.append("subject", "New Contact Message");
    formData.append("h-captcha-response", captchaToken);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: json
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setStatus('success');
        e.target.reset();
        
        // Reset the captcha UI and state for the next message
        setCaptchaToken("");
        if (captchaRef.current) {
          captchaRef.current.resetCaptcha();
        }
        
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        console.error("Web3Forms Error:", result); 
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (err) {
      console.error("Network Error:", err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />

      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-2xl mx-auto relative z-10 text-center"
      >
        <motion.div variants={fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Let's Connect</h2>
          <p className="text-gray-400 mb-12 leading-relaxed max-w-lg mx-auto">
            I’m actively exploring new opportunities and collaborations. Whether you have a project, a question, or just want to connect, feel free to reach.
          </p>
        </motion.div>

        <motion.form 
          variants={fadeInUp}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 text-left bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-xl shadow-2xl"
        >
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-400 ml-1">Name</label>
            <input
              required type="text" name="name" placeholder="Enter your name"
              className="w-full bg-[#030712]/50 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-400 ml-1">Email</label>
            <input
              required type="email" name="email" placeholder="your@email.com"
              className="w-full bg-[#030712]/50 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
            <textarea
              required name="message" rows="4" placeholder="Tell me about your idea or how I can help"
              className="w-full bg-[#030712]/50 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
            />
          </div>

          <div className="flex justify-center mt-2">
            <HCaptcha
              ref={captchaRef}
              // This is Web3Forms official public sitekey.
              sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
              onVerify={(token) => setCaptchaToken(token)}
              theme="dark"
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="mt-4 w-full py-4 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {status === 'loading' && <Loader2 className="w-5 h-5 animate-spin" />}
            {status === 'success' && <CheckCircle2 className="w-5 h-5" />}
            {status === 'error' && <AlertCircle className="w-5 h-5" />}
            {status === 'idle' && <Send className="w-5 h-5" />}
            
            {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Error Sending' : 'Send Message'}
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
}