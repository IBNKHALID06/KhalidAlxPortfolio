import Page from "../components/Page";
import ProjectCard from "../components/ProjectCard";

import codevailDashboard from "../assets/codevail_dashboard.jpg";
import aquanourMap from "../assets/aquanour_map.jpg";

export default function Projects() {
  return (
    <Page>
      <h2 className="text-4xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-10">
        <ProjectCard 
          title="Consoly" 
          color="text-sky-400" 
          desc="A safe, anonymous emotional-expression platform designed to help people share their feelings without fear or judgment. Built with Python & Flask." 
        />
        <ProjectCard 
          title="CodeVail" 
          color="text-purple-400" 
          desc="A Windows desktop application that helps developers practice coding interview challenges with an integrated coding editor and system monitoring." 
          image={codevailDashboard}
        />
        <ProjectCard 
          title="Aquanour" 
          color="text-blue-400" 
          desc="A sustainability concept improving water access and reporting using community-driven tools. Includes live maps and SMS-driven updates." 
          image={aquanourMap}
        />
        <ProjectCard 
          title="Edu-Access Morocco" 
          color="text-pink-400" 
          desc="A digital initiative aimed at supporting rural Moroccan girls with mentorship, offline learning, and community support systems." 
          link="/eduaccess"
        />
      </div>
    </Page>
  );
}