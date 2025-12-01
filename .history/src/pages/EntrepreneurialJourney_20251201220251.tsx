import Page from "../components/Page";

export default function EntrepreneurialJourney() {
  return (
    <Page>
      <h2 className="text-4xl font-bold mb-10">Entrepreneurial Journey</h2>
      
      <div className="space-y-12 border-l-2 border-slate-800 pl-8 ml-4">
        <div className="relative">
          <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-sky-500 border-4 border-[#0b0f19]"></div>
          <h3 className="text-2xl font-semibold text-white mb-2">The Spark</h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            Growing up, I witnessed the disparity in educational opportunities between urban and rural areas. 
            The realization that talent is distributed equally but opportunity is not became the driving force behind my work.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-purple-500 border-4 border-[#0b0f19]"></div>
          <h3 className="text-2xl font-semibold text-white mb-2">Identifying the Gap</h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            Through research and community engagement, I identified that rural girls in Morocco face unique challenges: 
            lack of digital resources, cultural barriers, and safe transportation to schools.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-pink-500 border-4 border-[#0b0f19]"></div>
          <h3 className="text-2xl font-semibold text-white mb-2">Building the Vision</h3>
          <p className="text-slate-400 text-lg leading-relaxed">
            I joined the ALX Ventures program to turn this observation into a viable product. 
            Edu-Access was born from the idea of bringing the school to the student when the student can't go to school.
          </p>
        </div>
      </div>
    </Page>
  );
}