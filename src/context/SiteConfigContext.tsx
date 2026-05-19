import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  DEFAULT_RESUME_URL,
  GITHUB_URL,
  LINKEDIN_URL,
  CONTACT_EMAIL,
  type Certification,
} from "@/data/portfolio";

export interface SiteConfig {
  resumeUrl?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  contactEmail?: string;
  calendlyUrl?: string;
  analyticsId?: string;
  certifications?: Certification[];
}

export interface SiteConfigValue {
  resumeUrl: string;
  linkedinUrl: string;
  githubUrl: string;
  contactEmail: string;
  calendlyUrl: string;
  analyticsId: string;
  certifications: Certification[];
  loaded: boolean;
}

const defaults: SiteConfigValue = {
  resumeUrl: import.meta.env.VITE_RESUME_URL || DEFAULT_RESUME_URL,
  linkedinUrl: LINKEDIN_URL,
  githubUrl: GITHUB_URL,
  contactEmail: CONTACT_EMAIL,
  calendlyUrl: import.meta.env.VITE_CALENDLY_URL || "",
  analyticsId: "",
  certifications: [],
  loaded: false,
};

const SiteConfigContext = createContext<SiteConfigValue>(defaults);

function mergeConfig(base: SiteConfigValue, remote: SiteConfig): SiteConfigValue {
  return {
    resumeUrl: remote.resumeUrl || base.resumeUrl,
    linkedinUrl: remote.linkedinUrl || base.linkedinUrl,
    githubUrl: remote.githubUrl || base.githubUrl,
    contactEmail: remote.contactEmail || base.contactEmail,
    calendlyUrl: remote.calendlyUrl ?? base.calendlyUrl,
    analyticsId: remote.analyticsId ?? base.analyticsId,
    certifications: remote.certifications?.length
      ? remote.certifications
      : base.certifications,
    loaded: true,
  };
}

export function SiteConfigProvider({ children }: { children: ReactNode }) {
  const [config, setConfig] = useState<SiteConfigValue>(defaults);

  useEffect(() => {
    fetch(`/site-config.json?t=${Date.now()}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((remote: SiteConfig | null) => {
        if (remote) {
          setConfig((prev) => mergeConfig(prev, remote));
        } else {
          setConfig((prev) => ({ ...prev, loaded: true }));
        }
      })
      .catch(() => setConfig((prev) => ({ ...prev, loaded: true })));
  }, []);

  useEffect(() => {
    if (!config.analyticsId || document.getElementById("plausible-script")) return;

    const script = document.createElement("script");
    script.id = "plausible-script";
    script.defer = true;
    script.dataset.domain = config.analyticsId;
    script.src = "https://plausible.io/js/script.js";
    document.head.appendChild(script);
  }, [config.analyticsId, config.loaded]);

  return (
    <SiteConfigContext.Provider value={config}>
      {children}
    </SiteConfigContext.Provider>
  );
}

export function useSiteConfig() {
  return useContext(SiteConfigContext);
}

export function useResumeUrl() {
  return useSiteConfig().resumeUrl;
}
