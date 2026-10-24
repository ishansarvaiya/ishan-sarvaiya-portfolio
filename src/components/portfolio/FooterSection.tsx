import { useState, type FormEvent } from "react";
import { Github, Download, Linkedin } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { useSiteConfig } from "@/context/SiteConfigContext";
import { trackEvent } from "@/lib/analytics";
import { Calendar } from "lucide-react";

const INTENT_OPTIONS = [
  { value: "hire", label: "Hiring inquiry" },
  { value: "project", label: "Project / freelance scope" },
  { value: "other", label: "Other" },
] as const;

const linkClass =
  "inline-flex items-center gap-2.5 px-5 py-3 rounded-xl border border-border bg-card text-foreground font-mono text-sm tracking-wide hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring transition-all duration-200 w-fit";

const inputClass =
  "w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-colors";

export function Footer() {
  const { resumeUrl, githubUrl, linkedinUrl, contactEmail, calendlyUrl } =
    useSiteConfig();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [intent, setIntent] = useState("hire");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    const intentLabel =
      INTENT_OPTIONS.find((o) => o.value === intent)?.label ?? intent;
    const subject = encodeURIComponent(
      `[${intentLabel}] Portfolio inquiry from ${name}`,
    );
    const body = encodeURIComponent(
      `Intent: ${intentLabel}\n\n${message}\n\n— ${name}\n${email}`,
    );
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;

    setSent(true);
    setName("");
    setEmail("");
    setMessage("");
    setIntent("hire");
    setTimeout(() => setSent(false), 5000);
  }

  return (
    <footer
      id="contact"
      className="bg-background border-t border-border pt-24 pb-12 px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28">
          <FadeIn direction="left">
            <p className="font-mono text-primary text-sm tracking-[0.3em] uppercase mb-6">
              Contact
            </p>
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Start a conversation
            </h2>
            <p className="text-muted-foreground text-base max-w-sm leading-relaxed mb-10">
              Hiring inquiry, project scope, or architecture review — send a brief
              and I&apos;ll respond within 48 hours.
            </p>
            <FooterLinks
              resumeUrl={resumeUrl}
              githubUrl={githubUrl}
              linkedinUrl={linkedinUrl}
              calendlyUrl={calendlyUrl}
            />
          </FadeIn>

          <FadeIn delay={0.1}>
            <form
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="font-mono text-xs tracking-widest uppercase text-muted-foreground block mb-1.5"
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
                    className={inputClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="font-mono text-xs tracking-widest uppercase text-muted-foreground block mb-1.5"
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
                    placeholder="you@company.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-intent"
                  className="font-mono text-xs tracking-widest uppercase text-muted-foreground block mb-1.5"
                >
                  Intent
                </label>
                <select
                  id="contact-intent"
                  value={intent}
                  onChange={(e) => setIntent(e.target.value)}
                  className={inputClass}
                >
                  {INTENT_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="font-mono text-xs tracking-widest uppercase text-muted-foreground block mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Brief context — role, project scope, or technical challenge…"
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={sent}
                className="w-full sm:w-auto px-8 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm tracking-wide hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {sent ? "✓ Opening Email Client…" : "Send Message →"}
              </button>

              {sent && (
                <p className="font-mono text-xs text-primary mt-2">
                  Your default email client should open with the message pre-filled.
                </p>
              )}
            </form>
          </FadeIn>
        </div>

        <div className="mt-20 pt-8 border-t border-border/40 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
            Ishan Sarvaiya · Enterprise .NET &amp; Azure · ishansarvaiya.in
          </p>
          <p className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
            &copy; {new Date().getFullYear()}
          </p>
          <a
            href={`mailto:${contactEmail}`}
            className="font-mono text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
          >
            {contactEmail}
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterLinks({
  resumeUrl,
  githubUrl,
  linkedinUrl,
  calendlyUrl,
}: {
  resumeUrl: string;
  githubUrl: string;
  linkedinUrl: string;
  calendlyUrl: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={linkClass}>
        <Github size={16} />
        github / ishansarvaiya
      </a>
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("linkedin_click")}
        className={linkClass}
      >
        <Linkedin size={16} />
        linkedin / ishansarvaiya
      </a>
      <a
        href={resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("resume_download")}
        className={linkClass}
      >
        <Download size={16} />
        Download Resume
      </a>
      {calendlyUrl && (
        <a
          href={calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("calendly_click")}
          className={linkClass}
        >
          <Calendar size={16} />
          Book a discovery call
        </a>
      )}
    </div>
  );
}
