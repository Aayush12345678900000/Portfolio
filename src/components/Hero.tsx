function Hero() {
  return (
    <header id="home" className="hero">
      <div className="wrap hero-grid">
        <div>
          <p className="hero-eyebrow">
            <span className="dot"></span> Available for internships &amp; collaborations
          </p>
          <h1>
            Building systems that<br />
            <span className="accent-underline">
              see, learn
              <svg viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true">
                <path d="M2 14 Q150 4 298 14" />
              </svg>
            </span>{" "}
            and optimize.
          </h1>
          <div className="hero-tags">
            <span className="tag">Computer Vision</span>
            <span className="tag">Machine Learning</span>
            <span className="tag">Algorithm Optimization</span>
          </div>
          <p className="lede">
            AI Engineering student building specialized machine learning models and robust software systems — from pathology classification models for agricultural disease detection to standalone desktop management applications. Focused on designing optimized, scalable solutions for real problems.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View my work
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </a>
          </div>
        </div>

        <div className="scan-panel" aria-hidden="true">
          <span className="corner-coord tl">x:0 y:0</span>
          <span className="corner-coord br">x:400 y:400</span>
          <svg viewBox="0 0 400 400">
            {/* stylized leaf, referencing the plant-disease-detection project */}
            <path
              className="leaf-path"
              d="M200 60 C120 90 90 190 130 280 C155 335 200 350 200 350 C200 350 245 335 270 280 C310 190 280 90 200 60 Z"
            />
            <path className="leaf-vein" d="M200 80 L200 340" />
            <path className="leaf-vein" d="M200 150 L150 190" />
            <path className="leaf-vein" d="M200 190 L255 230" />
            <path className="leaf-vein" d="M200 240 L155 275" />

            {/* bounding box + corner ticks */}
            <rect className="bbox" x="95" y="55" width="210" height="300" rx="2" />
            <g className="bbox-tick">
              <path d="M95 55 h16 M95 55 v16" />
              <path d="M305 55 h-16 M305 55 v16" />
              <path d="M95 355 h16 M95 355 v-16" />
              <path d="M305 355 h-16 M305 355 v-16" />
            </g>

            <line className="scan-line" x1="95" y1="70" x2="305" y2="70" />

            <g className="label-chip">
              <rect x="95" y="34" width="112" height="20" rx="2" />
              <text x="103" y="48">leaf — 0.94</text>
            </g>
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Hero;