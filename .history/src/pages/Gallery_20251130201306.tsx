import Page from "../components/Page";

export default function Gallery() {
  return (
    <Page>
      <h2 className="text-4xl font-bold mb-6">Visual Highlights</h2>
      <p className="text-slate-300 mb-10">
        A curated preview of screenshots reflecting my UI thinking, design consistency, and product iteration journey.
      </p>

      <div className="space-y-16">
        <section>
          <h3 className="text-2xl font-semibold text-purple-400 mb-6">CodeVail</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 h-48 rounded-lg flex items-center justify-center border border-slate-700">
              <span className="text-slate-500">Dashboard Interface</span>
            </div>
            <div className="bg-slate-800/50 h-48 rounded-lg flex items-center justify-center border border-slate-700">
              <span className="text-slate-500">Question Environment</span>
            </div>
            <div className="bg-slate-800/50 h-48 rounded-lg flex items-center justify-center border border-slate-700">
              <span className="text-slate-500">System Monitoring</span>
            </div>
            <div className="bg-slate-800/50 h-48 rounded-lg flex items-center justify-center border border-slate-700">
              <span className="text-slate-500">Cheating-detection Warnings</span>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-blue-400 mb-6">Aquanour</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 h-48 rounded-lg flex items-center justify-center border border-slate-700">
              <span className="text-slate-500">Reporting Dashboard</span>
            </div>
            <div className="bg-slate-800/50 h-48 rounded-lg flex items-center justify-center border border-slate-700">
              <span className="text-slate-500">Map Preview</span>
            </div>
            <div className="bg-slate-800/50 h-48 rounded-lg flex items-center justify-center border border-slate-700">
              <span className="text-slate-500">Data Tables</span>
            </div>
            <div className="bg-slate-800/50 h-48 rounded-lg flex items-center justify-center border border-slate-700">
              <span className="text-slate-500">Mobile UI Preview</span>
            </div>
          </div>
        </section>
      </div>
    </Page>
  );
}