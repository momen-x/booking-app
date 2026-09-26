// Shared by Next's server configuration and server-side API consumers.
export function getApiUrl(): string {
  const configured =
    process.env.API_URL?.trim() || process.env.NEXT_PUBLIC_API_URL?.trim();
  const value =
    configured ||
    (process.env.NODE_ENV === "development" ? "http://localhost:5000" : "");
  if (!value) {
    throw new Error("Set API_URL (or NEXT_PUBLIC_API_URL) to your backend origin before building.");
  }
  const url = new URL(value);
  if (
    !["http:", "https:"].includes(url.protocol) ||
    url.username || url.password || url.search || url.hash || url.pathname !== "/"
  ) {
    throw new Error("API_URL must be an HTTP(S) origin without credentials, a path, query, or fragment.");
  }
  const hostname = url.hostname.replace(/\.$/, "");
  const isLoopback =
    hostname === "localhost" || hostname.endsWith(".localhost") ||
    hostname.startsWith("127.") || hostname === "[::1]" || hostname === "0.0.0.0";
  if (process.env.NODE_ENV === "production" && isLoopback) {
    throw new Error("Production API_URL must point to the deployed backend, not localhost.");
  }
  return url.origin;
}
