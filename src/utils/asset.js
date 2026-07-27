// Resolves a public-folder asset path against Vite's configured base URL,
// so image paths work correctly both in dev and when deployed under a
// sub-path (e.g. GitHub Pages project sites like /Book-Store-Application/).
export function assetUrl(path) {
  const base = import.meta.env.BASE_URL;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
}
