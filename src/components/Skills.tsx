function Skills() {
  return (
    <section id="skills" style={{ background: "var(--paper-alt)" }}>
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <span className="idx mono">02 — Stack</span>
            <h2>Skills &amp; tools</h2>
          </div>
          <p className="desc">
            The languages, frameworks and tools I use to take an idea from model to product.
          </p>
        </div>

        <div className="skill-panels reveal">
          <div className="skill-panel">
            <h3>Core languages</h3>
            <div className="chip-row">
              <span className="chip">Python</span>
              <span className="chip">TypeScript</span>
              <span className="chip">JavaScript</span>
            </div>
          </div>
          <div className="skill-panel">
            <h3>Frameworks &amp; runtime</h3>
            <div className="chip-row">
              <span className="chip">React</span>
              <span className="chip">Node.js</span>
              <span className="chip">Vite</span>
            </div>
          </div>
          <div className="skill-panel">
            <h3>Styling &amp; workflow</h3>
            <div className="chip-row">
              <span className="chip">Tailwind CSS</span>
              <span className="chip">Git &amp; GitHub</span>
              <span className="chip">VS Code</span>
            </div>
          </div>
        </div>
        <p className="skill-note reveal">
          This list intentionally reflects only the tools shown in my current projects. As I formalize my computer-vision stack (e.g. PyTorch, OpenCV, pandas), I'll list specific libraries here rather than generic buzzwords.
        </p>
      </div>
    </section>
  );
}

export default Skills;