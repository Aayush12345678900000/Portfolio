const projectsData = [
  {
    tag: "VISION",
    title: "AI Plant Disease Detection",
    description: "A pathology classification model that detects plant diseases directly from leaf images, built to support earlier, more reliable crop-health decisions.",
    meta: "ML · Image Classification"
  },
  {
    tag: "DESKTOP",
    title: "Task Manager",
    description: "A standalone desktop application for managing day-to-day tasks — built to explore robust, offline-first application design.",
    meta: "Desktop App"
  },
  {
    tag: "API",
    title: "Weather App",
    description: "A lightweight app that surfaces live weather data through a third-party API, focused on a fast, no-friction interface.",
    meta: "Web · REST API"
  },
  {
    tag: "WEB",
    title: "Portfolio Website",
    description: "This site — a personal portfolio built with React, TypeScript and Tailwind CSS, redesigned around the visual language of computer vision tooling.",
    meta: "React · TypeScript"
  }
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <span className="idx mono" style={{ color: "var(--accent)" }}>03 — Selected work</span>
            <h2>Projects</h2>
          </div>
          <p className="desc">
            A working record of what I've built, from CV models to everyday tools.
          </p>
        </div>

        <div className="case-list reveal">
          {projectsData.map((project, index) => (
            <div key={index} className="case-row">
              <span className="case-tag">{project.tag}</span>
              <div className="case-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <span className="case-meta">{project.meta}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
