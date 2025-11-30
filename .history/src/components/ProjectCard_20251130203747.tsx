import { Link } from "react-router-dom";

type Props = {
  title: string;
  desc: string;
  color: string;
  link?: string;
  image?: string;
};

export default function ProjectCard({ title, desc, color, link, image }: Props) {
  return (
    <div className="bg-[#111726] border border-slate-800 rounded-xl shadow-xl overflow-hidden flex flex-col h-full">
      {image && (
        <div className="h-48 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className={`text-2xl font-semibold ${color}`}>{title}</h3>
        <p className="text-slate-300 mt-2 mb-4 flex-grow">{desc}</p>
        {link && <Link to={link} className="text-sky-400 hover:underline text-sm mt-auto inline-block">View Case Study →</Link>}
      </div>
    </div>
  );
}