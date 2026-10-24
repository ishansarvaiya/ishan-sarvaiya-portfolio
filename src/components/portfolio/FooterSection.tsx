import { useState, type FormEvent } from "react";
import { Github, Download, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { ButtonLink } from "./Primitives";
import { press } from "@/lib/motion";
import { useSiteConfig } from "@/context/SiteConfigContext";
import { trackEvent } from "@/lib/analytics";
import { Calendar } from "lucide-react";

const INTENT_OPTIONS = [
  { value: "hire", label: "Hiring inquiry" },
  { value: "project", label: "Project / freelance scope" },
  { value: "other", label: "Other" },
] as const;

const inputClass =
  "w-full min-h-12 rounded-2xl border border-input bg-background px-4 py-3 text-base text-foreground placeholder:text-muted-foreground";

const labelClass = "mb-1.5 block text-sm font-medium";

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
    <footer id="contact" className="border-t border-border px-6 pb-10 pt-[clamp(5rem,12vw,9rem)]">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <FadeIn direction="left">
            <p className="text-eyebrow text-primary mb-3">Contact</p>
            <h2 className="text-title text-balance">Start a conversation</h2>
            <p className="text-lead mt-5 max-w-md text-muted-foreground text-pretty">
              Hiring inquiry, project scope, or architecture review. Send a brief
              and I&apos;ll reply within 48 hours.
            </p>
            <FooterLinks
              resumeUrl={resumeUrl}
              githubUrl={githubUrl}
              linkedinUrl={linkedinUrl}
              calendlyUrl={calendlyUrl}
            />
          </FadeIn>

          <FadeIn delay={0.06}>
            <form
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
              className="space-y-4"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className={labelClass}>
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
                  <label htmlFor="contact-email" className={labelClass}>
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
                <label htmlFor="contact-intent" className={labelClass}>
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
                <label htmlFor="contact-message" className={labelClass}>
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

              <motion.button
                {...press}
                type="submit"
                disabled={sent}
                className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-primary px-8 text-[0.9375rem] font-medium tracking-tight text-primary-foreground hover:opacity-90 disabled:opacity-60 sm:w-auto"
              >
                {sent ? "✓ Opening Email Client…" : "Send Message →"}
              </motion.button>

              <p role="status" aria-live="polite" className="text-sm text-primary">
                {sent &&
                  "Your default email client should open with the message pre-filled."}
              </p>
            </form>
          </FadeIn>
        </div>

        <div className="mt-24 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>Ishan Sarvaiya · Backend, Cloud &amp; AI · ishansarvaiya.in</p>
          <p>&copy; {new Date().getFullYear()}</p>
          <a
            href={`mailto:${contactEmail}`}
            className="inline-flex min-h-11 items-center hover:text-foreground"
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
    <div className="mt-10 flex flex-wrap gap-3">
      <ButtonLink
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        variant="secondary"
      >
        <Github size={16} aria-hidden="true" />
        github / ishansarvaiya
      </ButtonLink>
      <ButtonLink
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        variant="secondary"
        onClick={() => trackEvent("linkedin_click")}
      >
        <Linkedin size={16} aria-hidden="true" />
        linkedin / ishansarvaiya
      </ButtonLink>
      <ButtonLink
        href={resumeUrl}
        target="_blank"
        rel="noopener noreferrer"
        variant="secondary"
        onClick={() => trackEvent("resume_download")}
      >
        <Download size={16} aria-hidden="true" />
        Download Resume
      </ButtonLink>
      {calendlyUrl && (
        <ButtonLink
          href={calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          onClick={() => trackEvent("calendly_click")}
        >
          <Calendar size={16} aria-hidden="true" />
          Book a discovery call
        </ButtonLink>
      )}
    </div>
  );
}
