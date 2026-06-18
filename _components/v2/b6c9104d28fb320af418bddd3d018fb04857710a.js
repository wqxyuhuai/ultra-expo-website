const LEGACY_HOME_REFRESH_VERSION = "20260617-clean01";

function redirectCachedFigmaShell() {
  if (typeof window === "undefined" || !window.location) return;
  try {
    const url = new URL(window.location.href);
    if (url.searchParams.get("ultra_fresh") === LEGACY_HOME_REFRESH_VERSION) return;
    url.searchParams.set("ultra_fresh", LEGACY_HOME_REFRESH_VERSION);
    window.location.replace(url.toString());
  } catch {
    window.location.reload();
  }
}

function DisabledLegacyHome() {
  return null;
}

redirectCachedFigmaShell();

const Code0_8 = () => Promise.resolve({ default: DisabledLegacyHome });

export { Code0_8 };
