import { useState, type FormEvent } from "react";
import { Github, Download } from "lucide-react";
import { FadeIn } from "./FadeIn";

// ── Replace with your actual GitHub resume PDF URL once uploaded ──────────────
const RESUME_URL =
  "https://github.com/ishansarvaiya/resume/raw/main/ishan-sarvaiya-resume.pdf";
const GITHUB_URL = "https://github.com/ishansarvaiya";
const CONTACT_EMAIL = "ishansarvaiya1@gmail.com";

export function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    // Build mailto URI — static-safe, no backend required
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(
      `${message}\n\n— ${name}\n${email}`,
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    setSent(true);
    setName("");
    setEmail("");
    setMessage("");
    setTimeout(() => setSent(false), 5000);
  }

  return (
    <footer
      id="contact"
      className="bg-[hsl(0_0%_3%)] border-t border-border pt-24 pb-12 px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">

          {/* ── Left column: copy + action links ───────────────────── */}
          <FadeIn direction="left">
            <p className="font-mono text-primary text-sm tracking-[0.3em] uppercase mb-6">
              CONTACT
            </p>
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Let's Connect
            </h2>
            <p className="text-muted-foreground text-base max-w-sm leading-relaxed mb-10">
              Open to senior engineering roles and technical consultation.
              No noise — just a direct line.
            </p>

            {/* Action links */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl border border-border bg-card text-foreground font-mono text-sm tracking-wide hover:border-primary/40 hover:text-primary transition-all duration-200"
              >
                <Github size={16} />
                github / ishansarvaiya
              </a>

              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl border border-border bg-card text-foreground font-mono text-sm tracking-wide hover:border-primary/40 hover:text-primary transition-all duration-200"
              >
                <Download size={16} />
                Download Résumé
              </a>
            </div>


          </FadeIn>

          {/* ── Right column: email form ─────────────────────────── */}
          <FadeIn delay={0.1}>
            <form
              onSubmit={handleSubmit}
              noValidate
              aria-label="Direct message form"
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground block mb-1.5"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground block mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground block mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me what you're working on…"
                  className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sent}
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold text-sm tracking-wide hover:scale-[1.02] active:scale-100 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {sent ? "✓ Opening Email Client…" : "Send Message →"}
              </button>

              {sent && (
                <p className="font-mono text-xs text-primary mt-2">
                  Your default email client should open with the message
                  pre-filled.
                </p>
              )}
            </form>
          </FadeIn>
        </div>

        {/* ── Footer bar ──────────────────────────────────────────── */}
        <div className="mt-20 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
            &copy; {new Date().getFullYear()} Ishan Sarvaiya
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
}
