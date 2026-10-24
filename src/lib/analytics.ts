export type AnalyticsEvent =
  | "path_hire_click"
  | "path_build_click"
  | "resume_download"
  | "calendly_click"
  | "linkedin_click";

/**
 * Fires an analytics event. Always dispatches a `portfolio-analytics` DOM event
 * (so any listener can pick it up) and forwards to Plausible when it is loaded.
 */
export function trackEvent(event: AnalyticsEvent, props?: Record<string, string>) {
  if (typeof window === "undefined") return;

  window.dispatchEvent(
    new CustomEvent("portfolio-analytics", { detail: { event, ...props } }),
  );

  const plausible = (window as Window & { plausible?: (e: string, o?: object) => void }).plausible;
  if (plausible) {
    plausible(event, { props });
  }
}
