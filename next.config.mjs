import { createRequire } from "module";
const require = createRequire(import.meta.url);
const withPWA = require("next-pwa")({
 dest: "public",
 register: true,
 skipWaiting: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
 images: {
  unoptimized: true,
 },
 // output: "export", // à activer si tu veux générer du statique
});

export default nextConfig;
