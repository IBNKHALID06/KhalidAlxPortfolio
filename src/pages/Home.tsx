import Page from "../components/Page";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Page>
      <div className="flex flex-col justify-center min-h-[60vh]">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
          Khalid IBNFKIH
        </h1>
        <h2 className="text-2xl md:text-3xl text-slate-300 mb-8">
          AI & Cybersecurity Developer | ALX Ventures Founder
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl leading-relaxed mb-10">
          Welcome to my entrepreneurial portfolio. This site documents my journey in building 
          <span className="text-sky-400 font-semibold"> Edu-Access Morocco</span>, 
          a solution designed to bridge the educational gap for rural girls.
        </p>
        
        <div className="flex gap-4">
          <Link to="/solution" className="px-6 py-3 bg-sky-600 hover:bg-sky-500 text-white rounded-lg font-medium transition">
            View Solution
          </Link>
          <Link to="/journey" className="px-6 py-3 border border-slate-700 hover:border-sky-500 text-slate-300 hover:text-white rounded-lg font-medium transition">
            My Journey
          </Link>
        </div>
      </div>
    </Page>
  );
}