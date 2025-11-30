import Page from "../components/Page";

export default function Education() {
  return (
    <Page>
      <h2 className="text-4xl font-bold mb-10">Education</h2>

      <div className="space-y-8">
        <div className="bg-[#111726] p-8 rounded-xl border border-slate-800">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-semibold text-white">Faculty of Science Ain Chock (FSAC)</h3>
              <p className="text-sky-400">Computer Science Major</p>
            </div>
            <span className="px-3 py-1 bg-sky-900/30 text-sky-300 rounded-full text-sm">Currently Studying</span>
          </div>
          <p className="text-slate-300">
            Relevant focus areas: Algorithms, Networking, Programming, AI foundations.
          </p>
        </div>

        <div className="bg-[#111726] p-8 rounded-xl border border-slate-800">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-semibold text-white">Jaber Bnou Hayan High School</h3>
              <p className="text-purple-400">High School Diploma</p>
            </div>
            <span className="px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full text-sm">Graduated</span>
          </div>
          <p className="text-slate-300">
            GPA: 3.7 / 4.0 (~15/20 Moroccan scale)<br/>
            No AP/IB courses (public Moroccan curriculum).
          </p>
        </div>
      </div>
    </Page>
  );
}