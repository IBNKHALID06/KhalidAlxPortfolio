import Page from "../components/Page";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <Page>
      <h2 className="text-4xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-10">
        <ProjectCard title="Consoly" color="text-sky-400" desc="Anonymous emotional-expression app." />
        <ProjectCard title="CodeVail" color="text-purple-400" desc="AI-powered code vulnerability scanner." />
      </div>
    </Page>
  );
}