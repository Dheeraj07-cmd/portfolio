import { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, form)
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 px-6 max-w-2xl mx-auto text-center">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="font-mono text-indigo-400 text-sm mb-2">05. What's next?</p>
        <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
        <p className="text-neutral-400 mb-10">I'm currently open to opportunities. Whether you have a question or just want to say hi, my inbox is always open!</p>
      </motion.div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
        <input
          type="text" placeholder="Your Name" required
          value={form.name} onChange={e => setForm({...form, name: e.target.value})}
          className="bg-[#161616] border border-[#262626] rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:border-indigo-500 outline-none transition-colors"
        />
        <input
          type="email" placeholder="Your Email" required
          value={form.email} onChange={e => setForm({...form, email: e.target.value})}
          className="bg-[#161616] border border-[#262626] rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:border-indigo-500 outline-none transition-colors"
        />
        <textarea
          rows={5} placeholder="Your Message" required
          value={form.message} onChange={e => setForm({...form, message: e.target.value})}
          className="bg-[#161616] border border-[#262626] rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:border-indigo-500 outline-none transition-colors resize-none"
        />
        <button
          type="submit" disabled={status === 'sending'}
          className="bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60 text-white px-8 py-3 rounded-lg transition-all font-medium"
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
        {status === 'success' && <p className="text-green-400 text-sm text-center">Message sent successfully!</p>}
        {status === 'error' && <p className="text-red-400 text-sm text-center">Something went wrong. Try again.</p>}
      </form>
    </section>
  )
}
