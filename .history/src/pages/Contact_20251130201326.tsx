import Page from "../components/Page";

export default function Contact() {
  return (
    <Page>
      <h2 className="text-4xl font-bold mb-6">Let’s Connect</h2>
      <p className="text-slate-300 text-lg mb-10 max-w-2xl">
        I’m open to internships, collaborations, and freelance opportunities in AI, cybersecurity, and full-stack development. Feel free to reach out — I respond quickly.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-4 p-4 bg-[#111726] rounded-lg border border-slate-800">
            <div className="w-12 h-12 bg-sky-900/30 rounded-full flex items-center justify-center text-sky-400 text-xl">
              ✉️
            </div>
            <div>
              <h3 className="text-sm text-slate-400">Email</h3>
              <a href="mailto:khalidibnfkih@gmail.com" className="text-white hover:text-sky-400 transition">khalidibnfkih@gmail.com</a>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-[#111726] rounded-lg border border-slate-800">
            <div className="w-12 h-12 bg-purple-900/30 rounded-full flex items-center justify-center text-purple-400 text-xl">
              🐙
            </div>
            <div>
              <h3 className="text-sm text-slate-400">GitHub</h3>
              <a href="https://github.com/ibnkhalid06" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-400 transition">github.com/ibnkhalid06</a>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-[#111726] rounded-lg border border-slate-800">
            <div className="w-12 h-12 bg-pink-900/30 rounded-full flex items-center justify-center text-pink-400 text-xl">
              📱
            </div>
            <div>
              <h3 className="text-sm text-slate-400">Socials</h3>
              <p className="text-white">YouTube · TikTok · LinkedIn</p>
            </div>
          </div>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm text-slate-400 mb-2">Name</label>
            <input type="text" className="w-full bg-[#111726] border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-sky-500 transition" placeholder="Your Name" />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-2">Email</label>
            <input type="email" className="w-full bg-[#111726] border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-sky-500 transition" placeholder="your@email.com" />
          </div>
          <div>
            <label className="block text-sm text-slate-400 mb-2">Message</label>
            <textarea rows={4} className="w-full bg-[#111726] border border-slate-800 rounded-lg p-3 text-white focus:outline-none focus:border-sky-500 transition" placeholder="How can we work together?"></textarea>
          </div>
          <button className="w-full bg-gradient-to-r from-sky-600 to-blue-700 py-3 rounded-lg font-semibold hover:opacity-90 transition">
            Send Message
          </button>
        </form>
      </div>
    </Page>
  );
}