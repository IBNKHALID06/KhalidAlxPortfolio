import Page from "../components/Page";

export default function Process() {
  return (
    <Page>
      <h2 className="text-4xl font-bold mb-6">My Process: Idea → Prototype → Improvement</h2>
      <p className="text-slate-300 mb-10 text-lg">
        I follow an iterative, user-centered approach inspired by product design principles. This approach guided my work on Consoly, CodeVail, and all ALX milestone projects.
      </p>

      <div className="space-y-12">
        <div className="relative pl-8 border-l-2 border-sky-500">
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-sky-500"></div>
          <h3 className="text-2xl font-semibold text-white mb-2">Concept Exploration</h3>
          <p className="text-slate-400">Identify a clear problem and brainstorm solutions grounded in community needs.</p>
        </div>

        <div className="relative pl-8 border-l-2 border-purple-500">
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500"></div>
          <h3 className="text-2xl font-semibold text-white mb-2">Initial Prototype</h3>
          <p className="text-slate-400">Build wireframes, low-fidelity UI concepts, or core functionality.</p>
        </div>

        <div className="relative pl-8 border-l-2 border-pink-500">
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-pink-500"></div>
          <h3 className="text-2xl font-semibold text-white mb-2">User Feedback</h3>
          <p className="text-slate-400">Test prototypes with real users and gather insights.</p>
        </div>

        <div className="relative pl-8 border-l-2 border-green-500">
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-green-500"></div>
          <h3 className="text-2xl font-semibold text-white mb-2">Refinement & Iteration</h3>
          <p className="text-slate-400">Improve features, design, security, and experience based on data.</p>
        </div>

        <div className="relative pl-8 border-l-2 border-yellow-500">
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-yellow-500"></div>
          <h3 className="text-2xl font-semibold text-white mb-2">Evaluation & Next Steps</h3>
          <p className="text-slate-400">Document learnings, plan functionality upgrades, and explore scalability.</p>
        </div>
      </div>
    </Page>
  );
}