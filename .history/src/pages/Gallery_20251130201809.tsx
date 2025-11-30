import Page from "../components/Page";
import ImageBox from "../components/ImageBox";

// ⚠️ IMPORTANT: You must save your images to src/assets/ with these exact names:
import aquanourMap from "../assets/aquanour_map.png";
import aquanourReports from "../assets/aquanour_reports.png";
import aquanourAnalytics from "../assets/aquanour_analytics.png";
import aquanourMobile from "../assets/aquanour_mobile.png";

import codevailDashboard from "../assets/codevail_dashboard.jpg";
import codevailEditor from "../assets/codevail_editor.jpg";
import codevailWarning from "../assets/codevail_warning.jpg";

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
            <div className="space-y-2">
              <ImageBox src={codevailDashboard} />
              <p className="text-center text-slate-400 text-sm">Dashboard Interface</p>
            </div>
            <div className="space-y-2">
              <ImageBox src={codevailEditor} />
              <p className="text-center text-slate-400 text-sm">Coding Environment</p>
            </div>
            <div className="space-y-2">
              <ImageBox src={codevailWarning} />
              <p className="text-center text-slate-400 text-sm">Integrity Warning</p>
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