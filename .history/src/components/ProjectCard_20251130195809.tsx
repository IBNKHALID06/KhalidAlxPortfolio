import { Link } from "react-router-dom";

type Props = {
  title: string;
  desc: string;
  color: string;
  link?: string;
};

export default function ProjectCard({ title, desc, color, link }: Props) {
  return (
    <div className="p-6 bg-[#111726] border border-slate-800 rounded-xl shadow-xl">
      <h3 className={`text-2xl font-semibold ${color}`}>{title}</h3>
      <p className="text-slate-300 mt-2 mb-3">{desc}</p>
      {link && <Link to={link} className="text-sky-400 hover:underline text-sm">View Case Study →</Link>}
    </div>
  );
}