import { useState, type FormEvent } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimName = name.trim();
    const trimEmail = email.trim();
    const trimMsg = message.trim();

    const subject = encodeURIComponent(`Portfolio message from ${trimName}`);
    const body = encodeURIComponent(`${trimMsg}\n\n— ${trimName} (${trimEmail})`);

    window.location.href = `mailto:aayushsinghrajput722@gmail.com?subject=${subject}&body=${body}`;
    setStatus("Opening your email client…");

    setTimeout(() => {
      setStatus("");
      setName("");
      setEmail("");
      setMessage("");
    }, 4000);
  };

  return (
    <section id="contact">
      <div className="wrap">
        <div className="section-head reveal">
          <div>
            <span className="idx mono">04 — Contact</span>
            <h2>Let's talk</h2>
          </div>
          <p className="desc">
            Open to internships, collaborations, and interesting problems.
          </p>
        </div>

        <div className="contact-grid">
          <div className="reveal">
            <p style={{ color: "var(--ink-soft)", maxWidth: "44ch" }}>
              The fastest way to reach me is email. I read everything that comes in through the form below too — it opens directly in your mail client, nothing gets routed through a third party.
            </p>
            <ul className="contact-list">
              <li>
                <a href="mailto:aayushsinghrajput722@gmail.com">
                  <span className="cl-left">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3 7 9 6 9-6" />
                    </svg>
                    aayushsinghrajput722@gmail.com
                  </span>
                  <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="tel:+917043550484">
                  <span className="cl-left">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.4 2.1L8.1 9.7a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.4c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.9 2.2Z" />
                    </svg>
                    +91 70435 50484
                  </span>
                  <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/aayush-jadoun-69717025b"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="cl-left">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                      <path d="M10 9v12M10 13a4 4 0 0 1 8 0v8" />
                    </svg>
                    LinkedIn — Aayush Jadoun
                  </span>
                  <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Aayush12345678900000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="cl-left">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
                    </svg>
                    GitHub — Aayush12345678900000
                  </span>
                  <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <form className="msg-form reveal" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="f-name">Name</label>
              <input
                id="f-name"
                name="name"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="f-email">Email</label>
              <input
                id="f-email"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="field">
              <label htmlFor="f-msg">Message</label>
              <textarea
                id="f-msg"
                name="message"
                placeholder="What are you working on?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ justifyContent: "center" }}
            >
              Send message
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </button>
            <p className="msg-status">{status}</p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;