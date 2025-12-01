import Page from "../components/Page";

export default function Solution() {
  return (
    <Page>
      <div className="mb-12">
        <span className="text-sky-400 font-semibold tracking-wider text-sm uppercase">The Solution</span>
        <h2 className="text-4xl font-bold mt-2 mb-6">Edu-Access Morocco</h2>
        <p className="text-xl text-slate-300 max-w-3xl">
          A comprehensive digital platform bridging the educational gap for rural girls through offline-first learning and community mentorship.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="bg-[#111726] p-8 rounded-xl border border-slate-800">
          <h3 className="text-2xl font-semibold text-white mb-4">How it Works</h3>
          <p className="text-slate-400 leading-relaxed mb-4">
            Edu-Access operates on a hybrid model. We provide low-cost tablets pre-loaded with curriculum content to areas with poor internet connectivity.
          </p>
          <p className="text-slate-400 leading-relaxed">
            These devices sync with our cloud platform when connectivity is available, updating progress and downloading new modules.
          </p>
        </div>

        <div className="bg-[#111726] p-8 rounded-xl border border-slate-800">
          <h3 className="text-2xl font-semibold text-white mb-4">Target Beneficiaries</h3>
          <ul className="space-y-3 text-slate-400">
            <li className="flex items-start gap-3">
              <span className="text-sky-400 mt-1">Target:</span> 
              <span>Girls aged 12-18 in rural Moroccan communities.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky-400 mt-1">Secondary:</span> 
              <span>Local educators and parents who need tools to support their children.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sky-400 mt-1">Reach:</span> 
              <span>Focusing initially on the Atlas Mountains region.</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-16">
        <h3 className="text-3xl font-bold mb-8">Top Features</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#111726] rounded-xl border border-slate-800 hover:border-sky-500 transition">
            <div className="text-4xl mb-4">📡</div>
            <h4 className="text-xl font-semibold mb-2">Offline Mode</h4>
            <p className="text-slate-400 text-sm">Full access to lessons and quizzes without an active internet connection.</p>
          </div>
          <div className="p-6 bg-[#111726] rounded-xl border border-slate-800 hover:border-purple-500 transition">
            <div className="text-4xl mb-4">🤝</div>
            <h4 className="text-xl font-semibold mb-2">Mentorship</h4>
            <p className="text-slate-400 text-sm">Direct connection to female role models and university students.</p>
          </div>
          <div className="p-6 bg-[#111726] rounded-xl border border-slate-800 hover:border-pink-500 transition">
            <div className="text-4xl mb-4">📊</div>
            <h4 className="text-xl font-semibold mb-2">Progress Tracking</h4>
            <p className="text-slate-400 text-sm">SMS-based reporting for parents to stay engaged with their child's learning.</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">Implementation</h3>
          <p className="text-slate-400 leading-relaxed mb-4">
            Phase 1 involves a pilot program in 3 villages, distributing 50 tablets. We partner with local NGOs to ensure device security and maintenance.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">Unique Selling Points (USPs)</h3>
          <ul className="space-y-2 text-slate-400">
            <li className="flex items-center gap-2">✨ Culturally sensitive content</li>
            <li className="flex items-center gap-2">✨ Zero-data cost for end users</li>
            <li className="flex items-center gap-2">✨ Community-led governance</li>
          </ul>
        </div>
      </div>
    </Page>
  );
}