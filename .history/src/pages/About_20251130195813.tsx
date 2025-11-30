import { Link } from "react-router-dom";
import Page from "../components/Page";

export default function About() {
  return (
    <Page>
      <h2 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Hi, I’m Khalid.
      </h2>
      <p className="text-slate-300 text-lg max-w-3xl mb-6">
        I build secure and intelligent solutions using AI and cybersecurity principles.
      </p>

      <div className="flex gap-4 mt-4">
        <Link to="/projects" className="px-6 py-3 bg-sky-600 rounded-lg font-semibold">See Projects</Link>
        <Link to="/contact" className="px-6 py-3 border border-sky-500 rounded-lg text-sky-400">Get in Touch</Link>
      </div>
    </Page>
  );
}