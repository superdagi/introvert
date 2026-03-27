// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2026-03-17",
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxt/image",
    "@nuxtjs/seo",
    "nuxt-icon",
  ],

  // SEO Configuration
  seo: {
    redirectToCanonicalSiteUrl: true,
  },

  // Site Configuration
  site: {
    url: "https://your-domain.com",
    name: "Introvert",
    description:
      "Din ultimate guide til introversjon. Artikler, tester og ressurser for introverte.",
    defaultLocale: "no",
  },

  // Content Configuration
  content: {
    highlight: {
      theme: "github-light",
    },
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3,
      },
    },
  },

  // Image Configuration
  image: {
    quality: 85,
    format: ["webp"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },

  // CSS Configuration
  css: ["~/assets/css/main.css"],

  // TailwindCSS Configuration
  tailwindcss: {
    viewer: false,
    exposeConfig: false,
  },

  // Route Rules for Performance
  routeRules: {
    // Homepage pre-rendered at build time
    "/": { prerender: true },
    // Blog posts cached for 1 hour
    "/blog/**": { isr: 3600 },
    // Admin dashboard rendered on-demand
    "/admin/**": { ssr: false },
    // Static pages generated at build time
    "/about": { prerender: true },
    "/contact": { prerender: true },
  },

  // Runtime Config
  runtimeConfig: {
    // Private keys (only available on server-side)
    apiSecret: "123",
    // Public keys (exposed to client-side)
    public: {
      gtag: process.env.GTAG_ID,
      siteUrl: process.env.SITE_URL || "https://your-domain.com",
    },
  },

  // App Configuration
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "en",
      },
    },
  },

  // Build Configuration
  build: {
    transpile: ["gsap"],
  },
});
