import Page from "../components/Page";
import ImageBox from "../components/ImageBox";

// ⚠️ IMPORTANT: You must save your images to src/assets/ with these exact names:
import aquanourMap from "../assets/aquanour_map.png";
import aquanourReports from "../assets/aquanour_reports.png";
import aquanourAnalytics from "../assets/aquanour_analytics.png";
import aquanourMobile from "../assets/aquanour_mobile.png";

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
            <div className="space-y-2">
              <ImageBox src={aquanourAnalytics} />
              <p className="text-center text-slate-400 text-sm">Analytics Dashboard</p>
            </div>
            <div className="space-y-2">
              <ImageBox src={aquanourMap} />
              <p className="text-center text-slate-400 text-sm">Live Map</p>
            </div>
            <div className="space-y-2">
              <ImageBox src={aquanourReports} />
              <p className="text-center text-slate-400 text-sm">Reports Log</p>
            </div>
            <div className="space-y-2">
              <ImageBox src={aquanourMobile} />
              <p className="text-center text-slate-400 text-sm">Mobile App</p>
            </div>
          </div>
        </section>
      </div>
    </Page>
  );
}