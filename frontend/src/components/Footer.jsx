export default function Footer() {
  return <footer className="py-6 text-center border-t border-neutral-800">
    <p className="text-neutral-500 text-sm font-mono">
      Built by <span className="text-indigo-400">Dheeraj Choudhary</span> · {new Date().getFullYear()}
    </p>
  </footer>
}
