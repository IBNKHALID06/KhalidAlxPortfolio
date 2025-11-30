import Page from "../components/Page";

export default function Skills() {
  return (
    <Page>
      <h2 className="text-4xl font-bold mb-10">Skills & Expertise</h2>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold text-sky-400 mb-6">Technical Skills</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium text-white mb-2">Programming</h4>
              <div className="flex flex-wrap gap-2">
                {["Python", "JavaScript", "HTML", "CSS", "TypeScript", "React"].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-300 border border-slate-700">{skill}</span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-medium text-white mb-2">Cybersecurity</h4>
              <div className="flex flex-wrap gap-2">
                {["Secure Coding", "Threat Analysis", "System Monitoring", "Linux Hardening"].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-300 border border-slate-700">{skill}</span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium text-white mb-2">AI & Data</h4>
              <div className="flex flex-wrap gap-2">
                {["ML Fundamentals", "Automation", "Prompt Engineering"].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-300 border border-slate-700">{skill}</span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium text-white mb-2">Tools</h4>
              <div className="flex flex-wrap gap-2">
                {["GitHub", "VS Code", "Linux", "Figma", "Framer"].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-slate-800 rounded-full text-sm text-slate-300 border border-slate-700">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-purple-400 mb-6">Soft Skills</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-slate-300">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Leadership
            </li>
            <li className="flex items-center gap-3 text-slate-300">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Public Speaking (Top 1%)
            </li>
            <li className="flex items-center gap-3 text-slate-300">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Communication
            </li>
            <li className="flex items-center gap-3 text-slate-300">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Critical Thinking
            </li>
            <li className="flex items-center gap-3 text-slate-300">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Teamwork
            </li>
          </ul>
        </div>
      </div>
    </Page>
  );
}