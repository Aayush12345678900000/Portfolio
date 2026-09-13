function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <span className="idx mono">01 — Profile</span>
            <h2>About</h2>
          </div>
        </div>

        <div className="about-grid">
          <div className="reveal">
            <p>
              I'm an <strong>AI Engineering student</strong> focused on computer vision and applied machine learning — the kind of work that starts with a real, messy problem rather than a clean dataset.
            </p>
            <p>
              My flagship project trains a <strong>pathology classification model</strong> to detect agricultural plant diseases from leaf imagery, aimed at helping identify crop issues earlier and more reliably. Alongside that, I build <strong>practical software</strong> — desktop tools, small web apps, and utilities — with an emphasis on clean structure and performance, not just working code.
            </p>
            <p>
              I care about the gap between a model that works in a notebook and a system that works reliably for someone else. That's the problem I keep choosing to work on.
            </p>

            <div className="stat-strip">
              <div className="stat">
                <div className="num">04</div>
                <div className="label">projects shipped</div>
              </div>
              <div className="stat">
                <div className="num">01</div>
                <div className="label">CV model in production use</div>
              </div>
              <div className="stat">
                <div className="num">100%</div>
                <div className="label">self-built stack</div>
              </div>
            </div>
          </div>

          <dl className="spec-sheet reveal">
            <div className="spec-row">
              <dt>role</dt>
              <dd>AI Engineering Student</dd>
            </div>
            <div className="spec-row">
              <dt>focus</dt>
              <dd>Computer Vision, Machine Learning, Algorithm Optimization</dd>
            </div>
            <div className="spec-row">
              <dt>building</dt>
              <dd>Pathology classification models &amp; desktop management tools</dd>
            </div>
            <div className="spec-row">
              <dt>approach</dt>
              <dd>Optimized, scalable solutions for real-world problems</dd>
            </div>
            <div className="spec-row">
              <dt>status</dt>
              <dd>Open to internships &amp; collaborations</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

export default About;