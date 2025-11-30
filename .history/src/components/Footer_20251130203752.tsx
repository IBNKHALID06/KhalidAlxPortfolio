import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0b0f19] border-t border-slate-800 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-bold text-lg text-white">Khalid IBNFKIH</h3>
          <p className="text-slate-400 text-sm">AI & Cybersecurity Developer</p>
        </div>

        <div className="flex gap-6 text-sm text-slate-400">
          <Link to="/about" className="hover:text-sky-400 transition">About</Link>
          <Link to="/projects" className="hover:text-sky-400 transition">Projects</Link>
          <Link to="/contact" className="hover:text-sky-400 transition">Contact</Link>
        </div>

        <div className="flex gap-4">
          <a href="https://github.com/ibnkhalid06" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition">
            LinkedIn
          </a>
        </div>
      </div>
      <div className="text-center text-slate-600 text-xs mt-8">
        © {new Date().getFullYear()} Khalid IBNFKIH. All rights reserved.
      </div>
    </footer>
  );
}