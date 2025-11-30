import { Link } from "react-router-dom";
import Page from "../components/Page";

export default function About() {
  return (
    <Page>
      <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Hi, I’m Khalid.
      </h2>
      <p className="text-slate-300 text-lg max-w-3xl mb-6 leading-relaxed">
        I am a Moroccan developer working at the intersection of AI, cybersecurity, and human-centered technology. I focus on designing secure, meaningful, and empowering digital experiences that solve real-world problems.
      </p>
      <p className="text-slate-300 text-lg max-w-3xl mb-6 leading-relaxed">
        During my gap year, I built impactful projects including <strong>Consoly</strong>, an anonymous emotional-expression app, and <strong>CodeVail</strong>, a Windows desktop app that helps developers practice coding interviews in a focused and secure environment.
      </p>
      <p className="text-slate-300 text-lg max-w-3xl mb-8 leading-relaxed">
        Outside of development, I enjoy photography, especially capturing skies and everyday beauty — a passion I shared with my late father. I also enjoy learning new languages, exploring technology’s impact on people, and documenting my journey through creative projects.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h3 className="text-xl font-semibold text-sky-400 mb-3">Focus Areas</h3>
          <p className="text-slate-400">AI · Cybersecurity · Cloud Computing</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-sky-400 mb-3">Tools</h3>
          <p className="text-slate-400">GitHub · Linux · Framer · Figma</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-sky-400 mb-3">Programming</h3>
          <p className="text-slate-400">Python · HTML · CSS · JavaScript</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-sky-400 mb-3">Languages</h3>
          <p className="text-slate-400">Darija (Native), Arabic (Fluent), English/French (Advanced)</p>
        </div>
      </div>

      <div className="flex gap-4 mt-4">
        <Link to="/projects" className="px-6 py-3 bg-sky-600 rounded-lg font-semibold hover:bg-sky-500 transition">See Projects</Link>
        <Link to="/contact" className="px-6 py-3 border border-sky-500 rounded-lg text-sky-400 hover:bg-sky-500/10 transition">Get in Touch</Link>
      </div>
    </Page>
  );
}