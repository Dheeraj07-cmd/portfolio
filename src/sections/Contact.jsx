// import { useState } from 'react';
// import { motion } from "framer-motion";
// import { fadeInUp } from "../utils/motion";
// import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

// export default function Contact() {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '', otp: '' });
//   const [status, setStatus] = useState('idle'); 
//   const [otpStatus, setOtpStatus] = useState('idle'); 

//   const handleGetOtp = async () => {
//     if (!formData.email) return alert("Please enter your email first!");
//     setOtpStatus('loading');
//     try {
//       const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/api/otp/send`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email: formData.email })
//       });
//       setOtpStatus(response.ok ? 'sent' : 'error');
//     } catch {
//       setOtpStatus('error');
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus('loading');
//     try {
//       const response = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:8080'}/api/contact`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData)
//       });
//       if (response.ok) {
//         setStatus('success');
//         setFormData({ name: '', email: '', message: '', otp: '' });
//         setOtpStatus('idle');
//         setTimeout(() => setStatus('idle'), 4000);
//       } else {
//         setStatus('error');
//         setTimeout(() => setStatus('idle'), 3000);
//       }
//     } catch {
//       setStatus('error');
//       setTimeout(() => setStatus('idle'), 3000);
//     }
//   };

//   return (
//     <section id="contact" className="py-32 bg-[#030712] px-6 relative overflow-hidden">
//       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />

//       <motion.div 
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, margin: "-100px" }}
//         className="max-w-2xl mx-auto relative z-10 text-center"
//       >
//         <motion.div variants={fadeInUp}>
//           <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Let's Connect</h2>
//           <p className="text-gray-400 mb-12 leading-relaxed max-w-lg mx-auto">
//             I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
//           </p>
//         </motion.div>

//         <motion.form 
//           variants={fadeInUp}
//           onSubmit={handleSubmit}
//           className="flex flex-col gap-5 text-left bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-xl shadow-2xl"
//         >
//           <div className="space-y-1">
//             <label className="text-sm font-medium text-gray-400 ml-1">Name</label>
//             <input
//               required type="text" placeholder="John Doe"
//               value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })}
//               className="w-full bg-[#030712]/50 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
//             />
//           </div>

//           <div className="space-y-1">
//             <label className="text-sm font-medium text-gray-400 ml-1">Email Verification</label>
//             <div className="flex gap-3">
//               <input
//                 required type="email" placeholder="john@example.com"
//                 value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })}
//                 disabled={otpStatus === 'sent' || otpStatus === 'loading'}
//                 className="w-full bg-[#030712]/50 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
//               />
//               <button
//                 type="button" onClick={handleGetOtp}
//                 disabled={!formData.email || otpStatus !== 'idle'}
//                 className="px-6 rounded-xl bg-indigo-500/10 border border-indigo-500/50 text-indigo-400 font-semibold hover:bg-indigo-500 hover:text-white transition-all disabled:opacity-50 disabled:hover:bg-indigo-500/10 disabled:hover:text-indigo-400 flex items-center justify-center min-w-25"
//               >
//                 {otpStatus === 'loading' ? <Loader2 className="w-5 h-5 animate-spin" /> : otpStatus === 'sent' ? <CheckCircle2 className="w-5 h-5" /> : 'Get OTP'}
//               </button>
//             </div>
//           </div>

//           {otpStatus === 'sent' && (
//             <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="space-y-1">
//               <input
//                 required type="text" maxLength="6" placeholder="Enter 6-digit OTP"
//                 value={formData.otp} onChange={e => setFormData({ ...formData, otp: e.target.value })}
//                 className="w-full bg-indigo-500/5 border border-indigo-500/30 rounded-xl p-4 text-indigo-300 text-center tracking-[0.5em] text-lg font-bold focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all placeholder:tracking-normal placeholder:text-gray-600 placeholder:font-normal"
//               />
//             </motion.div>
//           )}

//           <div className="space-y-1">
//             <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
//             <textarea
//               required rows="4" placeholder="How can I help you?"
//               value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}
//               className="w-full bg-[#030712]/50 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={status === 'loading' || otpStatus !== 'sent'}
//             className="mt-4 w-full py-4 rounded-xl bg-indigo-600 text-white font-bold hover:bg-indigo-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//           >
//             {status === 'loading' && <Loader2 className="w-5 h-5 animate-spin" />}
//             {status === 'success' && <CheckCircle2 className="w-5 h-5" />}
//             {status === 'error' && <AlertCircle className="w-5 h-5" />}
//             {status === 'idle' && <Send className="w-5 h-5" />}
            
//             {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Error Sending' : 'Send Message'}
//           </button>
//         </motion.form>
//       </motion.div>
//     </section>
//   );
// }

import { useState } from 'react';
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/motion";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.target);
    // TODO: Go to web3forms.com, enter your email, and paste your free Access Key below!
    formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY_HERE"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      if (response.ok) {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (err) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-32 bg-[#030712] px-6 relative overflow-hidden">
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
            I'm currently looking for new opportunities. Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
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
              required type="text" name="name" placeholder="John Doe"
              className="w-full bg-[#030712]/50 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-400 ml-1">Email</label>
            <input
              required type="email" name="email" placeholder="john@example.com"
              className="w-full bg-[#030712]/50 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
            <textarea
              required name="message" rows="4" placeholder="How can I help you?"
              className="w-full bg-[#030712]/50 border border-white/10 rounded-xl p-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
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