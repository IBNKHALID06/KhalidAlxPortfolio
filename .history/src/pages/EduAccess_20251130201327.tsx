import Page from "../components/Page";

export default function EduAccess() {
  return (
    <Page>
      <div className="mb-10">
        <span className="text-pink-400 font-semibold tracking-wider text-sm uppercase">Case Study</span>
        <h2 className="text-4xl font-bold mt-2 mb-4">Edu-Access Morocco</h2>
        <p className="text-xl text-slate-300 max-w-3xl">
          A digital initiative designed to support rural Moroccan girls aged 12–18 by improving their access to education.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">The Problem</h3>
          <p className="text-slate-400 leading-relaxed">
            Rural Moroccan girls face obstacles such as long unsafe commutes, resource scarcity, and limited academic guidance — often forcing them to drop out.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">The Solution</h3>
          <ul className="space-y-2 text-slate-400">
            <li className="flex items-center gap-2">✅ Offline-first digital lessons</li>
            <li className="flex items-center gap-2">✅ Shared community devices</li>
            <li className="flex items-center gap-2">✅ Peer mentorship circles</li>
            <li className="flex items-center gap-2">✅ Scholarship and material micro-funds</li>
          </ul>
        </div>
      </div>

      <div className="bg-[#111726] border border-slate-800 rounded-xl p-8 mb-16">
        <h3 className="text-2xl font-semibold text-white mb-6">Prototype Video</h3>
        <div className="aspect-video bg-black rounded-lg flex items-center justify-center border border-slate-800">
          <p className="text-slate-500">Video Placeholder (Add your Drive/YouTube Embed here)</p>
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-slate-400">
          <div className="text-center p-3 bg-slate-900 rounded">Screen Flow</div>
          <div className="text-center p-3 bg-slate-900 rounded">User Interactions</div>
          <div className="text-center p-3 bg-slate-900 rounded">Feature Navigation</div>
          <div className="text-center p-3 bg-slate-900 rounded">Low-fidelity Structure</div>
        </div>
      </div>

      <div className="text-center max-w-2xl mx-auto">
        <h3 className="text-2xl font-semibold text-white mb-4">Impact Vision</h3>
        <p className="text-slate-300 text-lg">
          Empower young girls to continue education despite physical, cultural, and environmental barriers.
        </p>
      </div>
    </Page>
  );
}