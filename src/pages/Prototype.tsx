import Page from "../components/Page";

export default function Prototype() {
  return (
    <Page>
      <h2 className="text-4xl font-bold mb-10">Prototype & Process</h2>

      <div className="bg-[#111726] border border-slate-800 rounded-xl p-8 mb-12">
        <h3 className="text-2xl font-semibold text-white mb-6">High-Fidelity Prototype</h3>
        <p className="text-slate-400 mb-6">
          Watch the walkthrough of the Edu-Access application, demonstrating user flow, feature navigation, and core interactions.
        </p>
        <div className="aspect-video bg-black rounded-lg overflow-hidden border border-slate-800 shadow-2xl">
          <iframe 
            src="https://drive.google.com/file/d/1ZMgUc_Rgf-ei_iRwD-juXRkm6-RXVmoh/preview" 
            width="100%" 
            height="100%" 
            allow="autoplay"
            className="w-full h-full"
          ></iframe>
        </div>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-slate-400">
          <div className="text-center p-2 bg-slate-900 rounded">User interactions</div>
          <div className="text-center p-2 bg-slate-900 rounded">Feature navigation</div>
          <div className="text-center p-2 bg-slate-900 rounded">All screens</div>
          <div className="text-center p-2 bg-slate-900 rounded">360° overview</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mb-16">
        <div>
           <h3 className="text-2xl font-semibold text-white mb-4">Low-Fidelity Prototype</h3>
           <p className="text-slate-400 mb-4">
             Early stage wireframes focusing on layout and basic navigation structure.
           </p>
           <div className="aspect-video bg-black rounded-lg overflow-hidden border border-slate-800 shadow-2xl">
             <iframe
               src="https://drive.google.com/file/d/1ZMgUc_Rgf-ei_iRwD-juXRkm6-RXVmoh/preview"
               width="100%"
               height="100%"
               allow="autoplay"
               className="w-full h-full"
             ></iframe>
           </div>
           <p className="text-xs text-slate-500 mt-3">
             Note: If you have a separate low‑fidelity video link, share it and I’ll swap it in.
           </p>
        </div>
        
        <div>
          <h3 className="text-2xl font-semibold text-white mb-4">Design Process</h3>
          <ul className="space-y-6 border-l-2 border-slate-800 pl-6">
            <li className="relative">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-sky-500"></div>
              <h4 className="font-semibold text-white">Empathize</h4>
              <p className="text-sm text-slate-400">Interviews with 20+ rural families.</p>
            </li>
            <li className="relative">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-purple-500"></div>
              <h4 className="font-semibold text-white">Define</h4>
              <p className="text-sm text-slate-400">Problem statement: "Access is not just physical, it's digital."</p>
            </li>
            <li className="relative">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-pink-500"></div>
              <h4 className="font-semibold text-white">Ideate</h4>
              <p className="text-sm text-slate-400">Brainstorming offline-first solutions.</p>
            </li>
            <li className="relative">
              <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-green-500"></div>
              <h4 className="font-semibold text-white">Prototype</h4>
              <p className="text-sm text-slate-400">Figma wireframes &rarr; React Native MVP.</p>
            </li>
          </ul>
        </div>
      </div>
    </Page>
  );
}