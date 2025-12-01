import Page from "../components/Page";

export default function ReflectionFuture() {
  return (
    <Page>
      <h2 className="text-4xl font-bold mb-10">Reflection & Future Plans</h2>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <section>
            <h3 className="text-2xl font-semibold text-sky-400 mb-4">Key Learnings</h3>
            <div className="bg-[#111726] p-6 rounded-xl border border-slate-800">
              <p className="text-slate-300 leading-relaxed mb-4">
                <strong>User-Centricity is Key:</strong> My initial assumptions about "gamification" were wrong. The users wanted simplicity and speed, not badges.
              </p>
              <p className="text-slate-300 leading-relaxed">
                <strong>Technical Constraints:</strong> Building for low-bandwidth environments taught me optimization techniques I never considered before.
              </p>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-semibold text-purple-400 mb-4">Challenges Overcome</h3>
            <div className="bg-[#111726] p-6 rounded-xl border border-slate-800">
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                <li>Designing for devices with limited storage.</li>
                <li>Creating a UI that is intuitive for first-time digital users.</li>
                <li>Balancing school curriculum with engaging supplementary content.</li>
              </ul>
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <section>
            <h3 className="text-2xl font-semibold text-pink-400 mb-4">Future Roadmap</h3>
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-xl font-bold text-white shrink-0">1</div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Q1 2026: Pilot Launch</h4>
                  <p className="text-slate-400 text-sm">Deploying 50 tablets in the pilot village in the Atlas Mountains.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-xl font-bold text-white shrink-0">2</div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Q3 2026: Content Expansion</h4>
                  <p className="text-slate-400 text-sm">Partnering with local universities to create STEM content specifically for girls.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-xl font-bold text-white shrink-0">3</div>
                <div>
                  <h4 className="text-lg font-semibold text-white">2027: National Scale</h4>
                  <p className="text-slate-400 text-sm">Expanding to 10 additional rural communities.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Page>
  );
}