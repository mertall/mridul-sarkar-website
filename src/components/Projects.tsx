import { timeline } from "@/content";
import ProjectCard from "./ProjectCard";

const projects = timeline.filter((e) => e.kind === "project");

// Only employment deliverables (applications / deployed solutions) highlight their
// role. Side projects and research done during a job intentionally have no mapping,
// so scrolling onto them clears the aside highlight.
const PROJECT_ROLE: Record<string, string> = {
  paveai: "multimodal-works",
  enroads: "multimodal-works",
  "local-ai-station": "multimodal-works",
  "acc-data-platform": "accenture",
  "acc-federated-search": "accenture",
};

export default function Projects() {
  return (
    <section aria-label="Applications and projects">
      <h2 className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-accent">
        Applications &amp; Projects
      </h2>
      <div className="space-y-6">
        {projects.map((entry) => (
          <ProjectCard key={entry.id} entry={entry} roleId={PROJECT_ROLE[entry.id]} />
        ))}
      </div>
    </section>
  );
}
