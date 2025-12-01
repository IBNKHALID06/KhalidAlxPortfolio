import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  
  const links = [
    { path: "/", label: "Home" },
    { path: "/journey", label: "Entrepreneurial Journey" },
    { path: "/solution", label: "Solution" },
    { path: "/prototype", label: "Prototype" },
    { path: "/reflection", label: "Reflection & Future" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#0b0f19]/80 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 select-none">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-blue-900 flex items-center justify-center font-bold text-white shadow-lg">
            KI
          </div>
          <div>
            <h1 className="text-sm font-semibold">Khalid IBNFKIH</h1>
            <p className="text-xs text-slate-400">Edu-Access Portfolio</p>
          </div>
        </Link>

        <nav className="hidden md:flex gap-6 text-sm">
          {links.map((item) => (
            <Link key={item.path} to={item.path} className="text-slate-300 hover:text-sky-400 transition">
              {item.label}
            </Link>
          ))}
        </nav>

        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-[#111827] border-t border-slate-800">
          {links.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className="block text-slate-300 hover:text-sky-400 py-1"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}